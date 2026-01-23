import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/* eslint-disable no-unused-vars */
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { lighten } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import classNames from "classnames";
import { CsvBuilder } from "filefy";
import PropTypes, { oneOf } from "prop-types";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as React from "react";
/* eslint-enable no-unused-vars */

export var MTableToolbar = /*#__PURE__*/ (function (_React$Component) {
  function MTableToolbar(props) {
    var _this;
    _classCallCheck(this, MTableToolbar);
    _this = _callSuper(this, MTableToolbar, [props]);
    _defineProperty(_this, "onSearchChange", function (searchText) {
      _this.props.dataManager.changeSearchText(searchText);
      _this.setState(
        {
          searchText: searchText,
        },
        _this.props.onSearchChanged(searchText)
      );
    });
    _defineProperty(_this, "getTableData", function () {
      var columns = _this.props.columns
        .filter(function (columnDef) {
          return (
            (!columnDef.hidden || columnDef.export === true) &&
            columnDef.export !== false &&
            columnDef.field
          );
        })
        .sort(function (a, b) {
          return a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1;
        });
      var data = (_this.props.exportAllData
        ? _this.props.data
        : _this.props.renderData
      ).map(function (rowData) {
        return columns.map(function (columnDef) {
          return _this.props.getFieldValue(rowData, columnDef);
        });
      });
      return [columns, data];
    });
    _defineProperty(_this, "defaultExportCsv", function () {
      var _this$getTableData = _this.getTableData(),
        _this$getTableData2 = _slicedToArray(_this$getTableData, 2),
        columns = _this$getTableData2[0],
        data = _this$getTableData2[1];
      var fileName = _this.props.title || "data";
      if (_this.props.exportFileName) {
        fileName =
          typeof _this.props.exportFileName === "function"
            ? _this.props.exportFileName()
            : _this.props.exportFileName;
      }
      var builder = new CsvBuilder(fileName + ".csv");
      builder
        .setDelimeter(_this.props.exportDelimiter)
        .setColumns(
          columns.map(function (columnDef) {
            return columnDef.title;
          })
        )
        .addRows(data)
        .exportFile();
    });
    _defineProperty(_this, "defaultExportPdf", function () {
      if (jsPDF !== null) {
        var _this$getTableData3 = _this.getTableData(),
          _this$getTableData4 = _slicedToArray(_this$getTableData3, 2),
          columns = _this$getTableData4[0],
          data = _this$getTableData4[1];
        var content = {
          startY: 50,
          head: [
            columns.map(function (columnDef) {
              return columnDef.title;
            }),
          ],
          body: data,
        };
        var unit = "pt";
        var size = "A4";
        var orientation = "landscape";
        var doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        doc.text(_this.props.exportFileName || _this.props.title, 40, 40);
        doc.autoTable(content);
        doc.save(
          (_this.props.exportFileName || _this.props.title || "data") + ".pdf"
        );
      }
    });
    _defineProperty(_this, "exportCsv", function () {
      if (_this.props.exportCsv) {
        _this.props.exportCsv(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportCsv();
      }
      _this.setState({
        exportButtonAnchorEl: null,
      });
    });
    _defineProperty(_this, "exportPdf", function () {
      if (_this.props.exportPdf) {
        _this.props.exportPdf(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportPdf();
      }
      _this.setState({
        exportButtonAnchorEl: null,
      });
    });
    _this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null,
      searchText: props.searchText,
    };
    return _this;
  }
  _inherits(MTableToolbar, _React$Component);
  return _createClass(MTableToolbar, [
    {
      key: "renderSearch",
      value: function renderSearch() {
        var _this2 = this;
        var localization = _objectSpread(
          {},
          MTableToolbar.defaultProps.localization,
          this.props.localization
        );
        if (this.props.search) {
          return /*#__PURE__*/ React.createElement(TextField, {
            autoFocus: this.props.searchAutoFocus,
            className:
              this.props.searchFieldAlignment === "left" &&
              this.props.showTitle === false
                ? null
                : this.props.classes.searchField,
            value: this.state.searchText,
            onChange: function onChange(event) {
              return _this2.onSearchChange(event.target.value);
            },
            placeholder: localization.searchPlaceholder,
            variant: this.props.searchFieldVariant,
            InputProps: {
              startAdornment: /*#__PURE__*/ React.createElement(
                InputAdornment,
                {
                  position: "start",
                },
                /*#__PURE__*/ React.createElement(
                  Tooltip,
                  {
                    title: localization.searchTooltip,
                  },
                  /*#__PURE__*/ React.createElement(this.props.icons.Search, {
                    fontSize: "small",
                  })
                )
              ),
              endAdornment: /*#__PURE__*/ React.createElement(
                InputAdornment,
                {
                  position: "end",
                },
                /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    disabled: !this.state.searchText,
                    onClick: function onClick() {
                      return _this2.onSearchChange("");
                    },
                    "aria-label": localization.clearSearchAriaLabel,
                    size: "large",
                  },
                  /*#__PURE__*/ React.createElement(
                    this.props.icons.ResetSearch,
                    {
                      fontSize: "small",
                      "aria-label": "clear",
                    }
                  )
                )
              ),
              style: this.props.searchFieldStyle,
              inputProps: {
                "aria-label": localization.searchAriaLabel,
              },
            },
          });
        } else {
          return null;
        }
      },
    },
    {
      key: "renderDefaultActions",
      value: function renderDefaultActions() {
        var _this3 = this;
        var localization = _objectSpread(
          {},
          MTableToolbar.defaultProps.localization,
          this.props.localization
        );
        var classes = this.props.classes;
        return /*#__PURE__*/ React.createElement(
          "div",
          null,
          this.props.columnsButton &&
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                Tooltip,
                {
                  title: localization.showColumnsTitle,
                },
                /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    color: "inherit",
                    onClick: function onClick(event) {
                      return _this3.setState({
                        columnsButtonAnchorEl: event.currentTarget,
                      });
                    },
                    "aria-label": localization.showColumnsAriaLabel,
                    size: "large",
                  },
                  /*#__PURE__*/ React.createElement(
                    this.props.icons.ViewColumn,
                    null
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                Menu,
                {
                  anchorEl: this.state.columnsButtonAnchorEl,
                  open: Boolean(this.state.columnsButtonAnchorEl),
                  onClose: function onClose() {
                    return _this3.setState({
                      columnsButtonAnchorEl: null,
                    });
                  },
                },
                /*#__PURE__*/ React.createElement(
                  MenuItem,
                  {
                    key: "text",
                    disabled: true,
                    style: {
                      opacity: 1,
                      fontWeight: 600,
                      fontSize: 12,
                    },
                  },
                  localization.addRemoveColumns
                ),
                this.props.columns.map(function (col) {
                  if (!col.hidden || col.hiddenByColumnsButton) {
                    return /*#__PURE__*/ React.createElement(
                      "li",
                      {
                        key: col.tableData.id,
                      },
                      /*#__PURE__*/ React.createElement(
                        MenuItem,
                        {
                          className: classes.formControlLabel,
                          component: "label",
                          htmlFor: "column-toggle-".concat(col.tableData.id),
                          disabled: col.removable === false,
                        },
                        /*#__PURE__*/ React.createElement(Checkbox, {
                          checked: !col.hidden,
                          id: "column-toggle-".concat(col.tableData.id),
                          onChange: function onChange() {
                            return _this3.props.onColumnsChanged(
                              col,
                              !col.hidden
                            );
                          },
                        }),
                        /*#__PURE__*/ React.createElement(
                          "span",
                          null,
                          col.title
                        )
                      )
                    );
                  }
                  return null;
                })
              )
            ),
          this.props.exportButton &&
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                Tooltip,
                {
                  title: localization.exportTitle,
                },
                /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    color: "inherit",
                    onClick: function onClick(event) {
                      return _this3.setState({
                        exportButtonAnchorEl: event.currentTarget,
                      });
                    },
                    "aria-label": localization.exportAriaLabel,
                    size: "large",
                  },
                  /*#__PURE__*/ React.createElement(
                    this.props.icons.Export,
                    null
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                Menu,
                {
                  anchorEl: this.state.exportButtonAnchorEl,
                  open: Boolean(this.state.exportButtonAnchorEl),
                  onClose: function onClose() {
                    return _this3.setState({
                      exportButtonAnchorEl: null,
                    });
                  },
                },
                (this.props.exportButton === true ||
                  this.props.exportButton.csv) &&
                  /*#__PURE__*/ React.createElement(
                    MenuItem,
                    {
                      key: "export-csv",
                      onClick: this.exportCsv,
                    },
                    localization.exportCSVName
                  ),
                (this.props.exportButton === true ||
                  this.props.exportButton.pdf) &&
                  /*#__PURE__*/ React.createElement(
                    MenuItem,
                    {
                      key: "export-pdf",
                      onClick: this.exportPdf,
                    },
                    localization.exportPDFName
                  )
              )
            ),
          /*#__PURE__*/ React.createElement(
            "span",
            null,
            /*#__PURE__*/ React.createElement(this.props.components.Actions, {
              actions:
                this.props.actions &&
                this.props.actions.filter(function (a) {
                  return a.position === "toolbar";
                }),
              components: this.props.components,
            })
          )
        );
      },
    },
    {
      key: "renderSelectedActions",
      value: function renderSelectedActions() {
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(this.props.components.Actions, {
            actions: this.props.actions.filter(function (a) {
              return a.position === "toolbarOnSelect";
            }),
            data: this.props.selectedRows,
            components: this.props.components,
          })
        );
      },
    },
    {
      key: "renderActions",
      value: function renderActions() {
        var classes = this.props.classes;
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            className: classes.actions,
          },
          /*#__PURE__*/ React.createElement(
            "div",
            null,
            this.props.selectedRows && this.props.selectedRows.length > 0
              ? this.renderSelectedActions()
              : this.renderDefaultActions()
          )
        );
      },
    },
    {
      key: "renderToolbarTitle",
      value: function renderToolbarTitle(title) {
        var classes = this.props.classes;
        var toolBarTitle =
          typeof title === "string"
            ? /*#__PURE__*/ React.createElement(
                Typography,
                {
                  variant: "h6",
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                },
                title
              )
            : title;
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            className: classes.title,
          },
          toolBarTitle
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var classes = this.props.classes;
        var localization = _objectSpread(
          {},
          MTableToolbar.defaultProps.localization,
          this.props.localization
        );
        var title =
          this.props.showTextRowsSelected &&
          this.props.selectedRows &&
          this.props.selectedRows.length > 0
            ? typeof localization.nRowsSelected === "function"
              ? localization.nRowsSelected(this.props.selectedRows.length)
              : localization.nRowsSelected.replace(
                  "{0}",
                  this.props.selectedRows.length
                )
            : this.props.showTitle
            ? this.props.title
            : null;
        return /*#__PURE__*/ React.createElement(
          Toolbar,
          {
            className: classNames(
              classes.root,
              _defineProperty(
                {},
                classes.highlight,
                this.props.showTextRowsSelected &&
                  this.props.selectedRows &&
                  this.props.selectedRows.length > 0
              )
            ),
          },
          title && this.renderToolbarTitle(title),
          this.props.searchFieldAlignment === "left" && this.renderSearch(),
          this.props.toolbarButtonAlignment === "left" && this.renderActions(),
          /*#__PURE__*/ React.createElement("div", {
            className: classes.spacer,
          }),
          this.props.searchFieldAlignment === "right" && this.renderSearch(),
          this.props.toolbarButtonAlignment === "right" && this.renderActions()
        );
      },
    },
  ]);
})(React.Component);
MTableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    addRemoveColumns: "Add or remove columns",
    nRowsSelected: "{0} row(s) selected",
    showColumnsTitle: "Show Columns",
    showColumnsAriaLabel: "Show Columns",
    exportTitle: "Export",
    exportAriaLabel: "Export",
    exportCSVName: "Export as CSV",
    exportPDFName: "Export as PDF",
    searchTooltip: "Search",
    searchPlaceholder: "Search",
    searchAriaLabel: "Search",
    clearSearchAriaLabel: "Clear Search",
  },
  search: true,
  showTitle: true,
  searchText: "",
  showTextRowsSelected: true,
  toolbarButtonAlignment: "right",
  searchAutoFocus: false,
  searchFieldAlignment: "right",
  searchFieldVariant: "standard",
  selectedRows: [],
  title: "No Title!",
};
MTableToolbar.propTypes = {
  actions: PropTypes.array,
  columns: PropTypes.array,
  columnsButton: PropTypes.bool,
  components: PropTypes.object.isRequired,
  getFieldValue: PropTypes.func.isRequired,
  localization: PropTypes.object.isRequired,
  onColumnsChanged: PropTypes.func.isRequired,
  dataManager: PropTypes.object.isRequired,
  searchText: PropTypes.string,
  onSearchChanged: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  searchFieldStyle: PropTypes.object,
  searchFieldVariant: PropTypes.string,
  selectedRows: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  showTitle: PropTypes.bool.isRequired,
  showTextRowsSelected: PropTypes.bool.isRequired,
  toolbarButtonAlignment: PropTypes.string.isRequired,
  searchFieldAlignment: PropTypes.string.isRequired,
  renderData: PropTypes.array,
  data: PropTypes.array,
  exportAllData: PropTypes.bool,
  exportButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      csv: PropTypes.bool,
      pdf: PropTypes.bool,
    }),
  ]),
  exportDelimiter: PropTypes.string,
  exportFileName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  exportCsv: PropTypes.func,
  exportPdf: PropTypes.func,
  classes: PropTypes.object,
  searchAutoFocus: PropTypes.bool,
};
export var styles = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.mode === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: "1 1 10%",
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      overflow: "hidden",
    },
    searchField: {
      minWidth: 150,
      paddingLeft: theme.spacing(2),
    },
    formControlLabel: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  };
};
export default withStyles(styles)(MTableToolbar);
