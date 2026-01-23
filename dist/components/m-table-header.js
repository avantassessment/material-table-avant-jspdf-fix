import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
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
import * as React from "react";
import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { withStyles } from "@mui/styles";
import { Draggable } from "react-beautiful-dnd";
import { Tooltip } from "@mui/material";
import * as CommonValues from "../utils/common-values";
import equal from "fast-deep-equal";

/* eslint-enable no-unused-vars */

export var MTableHeader = /*#__PURE__*/ (function (_React$Component) {
  function MTableHeader(props) {
    var _this;
    _classCallCheck(this, MTableHeader);
    _this = _callSuper(this, MTableHeader, [props]);
    _defineProperty(_this, "handleMouseDown", function (e, columnDef) {
      _this.setState({
        lastAdditionalWidth: columnDef.tableData.additionalWidth,
        lastX: e.clientX,
        resizingColumnDef: columnDef,
      });
    });
    _defineProperty(_this, "handleMouseMove", function (e) {
      if (!_this.state.resizingColumnDef) {
        return;
      }
      var additionalWidth =
        _this.state.lastAdditionalWidth + e.clientX - _this.state.lastX;
      additionalWidth = Math.min(
        _this.state.resizingColumnDef.maxWidth || additionalWidth,
        additionalWidth
      );
      if (
        _this.state.resizingColumnDef.tableData.additionalWidth !==
        additionalWidth
      ) {
        _this.props.onColumnResized(
          _this.state.resizingColumnDef.tableData.id,
          additionalWidth
        );
      }
    });
    _defineProperty(_this, "handleMouseUp", function (e) {
      _this.setState({
        resizingColumnDef: undefined,
      });
    });
    _defineProperty(_this, "getCellStyle", function (columnDef) {
      var width = CommonValues.reducePercentsInCalc(
        columnDef.tableData.width,
        _this.props.scrollWidth
      );
      var style = _objectSpread(
        {},
        _this.props.headerStyle,
        columnDef.headerStyle,
        {
          boxSizing: "border-box",
          width: width,
          maxWidth: columnDef.maxWidth,
          minWidth: columnDef.minWidth,
        }
      );
      if (
        _this.props.options.tableLayout === "fixed" &&
        _this.props.options.columnResizable &&
        columnDef.resizable !== false
      ) {
        style.paddingRight = 2;
      }
      return style;
    });
    _this.state = {
      lastX: 0,
      resizingColumnDef: undefined,
    };
    return _this;
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return !equal(nextProps, this.props) || !equal(nextState, this.state);
  // }
  _inherits(MTableHeader, _React$Component);
  return _createClass(MTableHeader, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
      },
    },
    {
      key: "renderHeader",
      value: function renderHeader() {
        var _this2 = this;
        var size =
          this.props.options.padding === "default" ? "medium" : "small";
        var mapArr = this.props.columns
          .filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          })
          .sort(function (a, b) {
            return a.tableData.columnOrder - b.tableData.columnOrder;
          })
          .map(function (columnDef, index) {
            var content = columnDef.title;
            if (_this2.props.draggable) {
              content = /*#__PURE__*/ React.createElement(
                Draggable,
                {
                  key: columnDef.tableData.id,
                  draggableId: columnDef.tableData.id.toString(),
                  index: index,
                },
                function (provided, snapshot) {
                  return /*#__PURE__*/ React.createElement(
                    "div",
                    _extends(
                      {
                        ref: provided.innerRef,
                      },
                      provided.draggableProps,
                      provided.dragHandleProps
                    ),
                    columnDef.title
                  );
                }
              );
            }
            if (columnDef.sorting !== false && _this2.props.sorting) {
              content = /*#__PURE__*/ React.createElement(
                TableSortLabel,
                {
                  IconComponent: _this2.props.icons.SortArrow,
                  active: _this2.props.orderBy === columnDef.tableData.id,
                  direction: _this2.props.orderDirection || "asc",
                  onClick: function onClick() {
                    var orderDirection =
                      columnDef.tableData.id !== _this2.props.orderBy
                        ? "asc"
                        : _this2.props.orderDirection === "asc"
                        ? "desc"
                        : _this2.props.orderDirection === "desc" &&
                          _this2.props.thirdSortClick
                        ? ""
                        : _this2.props.orderDirection === "desc" &&
                          !_this2.props.thirdSortClick
                        ? "asc"
                        : _this2.props.orderDirection === ""
                        ? "asc"
                        : "desc";
                    _this2.props.onOrderChange(
                      columnDef.tableData.id,
                      orderDirection
                    );
                  },
                },
                content
              );
            }
            if (columnDef.tooltip) {
              content = /*#__PURE__*/ React.createElement(
                Tooltip,
                {
                  title: columnDef.tooltip,
                  placement: "bottom",
                },
                /*#__PURE__*/ React.createElement("span", null, content)
              );
            }
            if (
              _this2.props.options.tableLayout === "fixed" &&
              _this2.props.options.columnResizable &&
              columnDef.resizable !== false
            ) {
              content = /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  content
                ),
                /*#__PURE__*/ React.createElement("div", null),
                /*#__PURE__*/ React.createElement(_this2.props.icons.Resize, {
                  style: {
                    cursor: "col-resize",
                    color:
                      _this2.state.resizingColumnDef &&
                      _this2.state.resizingColumnDef.tableData.id ===
                        columnDef.tableData.id
                        ? _this2.props.theme.palette.primary.main
                        : "inherit",
                  },
                  onMouseDown: function onMouseDown(e) {
                    return _this2.handleMouseDown(e, columnDef);
                  },
                })
              );
            }
            var cellAlignment =
              columnDef.align !== undefined
                ? columnDef.align
                : ["numeric", "currency"].indexOf(columnDef.type) !== -1
                ? "right"
                : "left";
            return /*#__PURE__*/ React.createElement(
              TableCell,
              {
                key: columnDef.tableData.id,
                align: cellAlignment,
                className: _this2.props.classes.header,
                style: _this2.getCellStyle(columnDef),
                size: size,
              },
              content
            );
          });
        return mapArr;
      },
    },
    {
      key: "renderActionsHeader",
      value: function renderActionsHeader() {
        var localization = _objectSpread(
          {},
          MTableHeader.defaultProps.localization,
          this.props.localization
        );
        var width = CommonValues.actionsColumnWidth(this.props);
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            key: "key-actions-column",
            padding: "checkbox",
            className: this.props.classes.header,
            style: _objectSpread({}, this.props.headerStyle, {
              width: width,
              textAlign: "center",
              boxSizing: "border-box",
            }),
          },
          /*#__PURE__*/ React.createElement(
            TableSortLabel,
            {
              hideSortIcon: true,
              disabled: true,
            },
            localization.actions
          )
        );
      },
    },
    {
      key: "renderSelectionHeader",
      value: function renderSelectionHeader() {
        var _this3 = this;
        var selectionWidth = CommonValues.selectionMaxWidth(
          this.props,
          this.props.treeDataMaxLevel
        );
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            padding: "none",
            key: "key-selection-column",
            className: this.props.classes.header,
            style: _objectSpread({}, this.props.headerStyle, {
              width: selectionWidth,
            }),
          },
          this.props.showSelectAllCheckbox &&
            /*#__PURE__*/ React.createElement(
              Checkbox,
              _extends(
                {
                  indeterminate:
                    this.props.selectedCount > 0 &&
                    this.props.selectedCount < this.props.dataCount,
                  checked:
                    this.props.dataCount > 0 &&
                    this.props.selectedCount === this.props.dataCount,
                  onChange: function onChange(event, checked) {
                    return (
                      _this3.props.onAllSelected &&
                      _this3.props.onAllSelected(checked)
                    );
                  },
                },
                this.props.options.headerSelectionProps
              )
            )
        );
      },
    },
    {
      key: "renderDetailPanelColumnCell",
      value: function renderDetailPanelColumnCell() {
        return /*#__PURE__*/ React.createElement(TableCell, {
          padding: "none",
          key: "key-detail-panel-column",
          className: this.props.classes.header,
          style: _objectSpread({}, this.props.headerStyle),
        });
      },
    },
    {
      key: "render",
      value: function render() {
        var _this4 = this;
        var headers = this.renderHeader();
        if (this.props.hasSelection) {
          headers.splice(0, 0, this.renderSelectionHeader());
        }
        if (this.props.showActionsColumn) {
          if (this.props.actionsHeaderIndex >= 0) {
            var endPos = 0;
            if (this.props.hasSelection) {
              endPos = 1;
            }
            headers.splice(
              this.props.actionsHeaderIndex + endPos,
              0,
              this.renderActionsHeader()
            );
          } else if (this.props.actionsHeaderIndex === -1) {
            headers.push(this.renderActionsHeader());
          }
        }
        if (this.props.hasDetailPanel) {
          if (this.props.detailPanelColumnAlignment === "right") {
            headers.push(this.renderDetailPanelColumnCell());
          } else {
            headers.splice(0, 0, this.renderDetailPanelColumnCell());
          }
        }
        if (this.props.isTreeData > 0) {
          headers.splice(
            0,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-tree-data-header",
              className: this.props.classes.header,
              style: _objectSpread({}, this.props.headerStyle),
            })
          );
        }
        this.props.columns
          .filter(function (columnDef) {
            return columnDef.tableData.groupOrder > -1;
          })
          .forEach(function (columnDef) {
            headers.splice(
              0,
              0,
              /*#__PURE__*/ React.createElement(TableCell, {
                padding: "checkbox",
                key: "key-group-header" + columnDef.tableData.id,
                className: _this4.props.classes.header,
              })
            );
          });
        return /*#__PURE__*/ React.createElement(
          TableHead,
          null,
          /*#__PURE__*/ React.createElement(TableRow, null, headers)
        );
      },
    },
  ]);
})(React.Component);
MTableHeader.defaultProps = {
  dataCount: 0,
  hasSelection: false,
  headerStyle: {},
  selectedCount: 0,
  sorting: true,
  localization: {
    actions: "Actions",
  },
  orderBy: undefined,
  orderDirection: "asc",
  actionsHeaderIndex: 0,
  detailPanelColumnAlignment: "left",
  draggable: true,
  thirdSortClick: true,
};
MTableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  dataCount: PropTypes.number,
  hasDetailPanel: PropTypes.bool.isRequired,
  detailPanelColumnAlignment: PropTypes.string,
  hasSelection: PropTypes.bool,
  headerStyle: PropTypes.object,
  localization: PropTypes.object,
  selectedCount: PropTypes.number,
  sorting: PropTypes.bool,
  onAllSelected: PropTypes.func,
  onOrderChange: PropTypes.func,
  orderBy: PropTypes.number,
  orderDirection: PropTypes.string,
  actionsHeaderIndex: PropTypes.number,
  showActionsColumn: PropTypes.bool,
  showSelectAllCheckbox: PropTypes.bool,
  draggable: PropTypes.bool,
  thirdSortClick: PropTypes.bool,
  tooltip: PropTypes.string,
};
export var styles = function styles(theme) {
  return {
    header: {
      // display: 'inline-block',
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: theme.palette.background.paper, // Change according to theme,
    },
  };
};
export default withStyles(styles, {
  withTheme: true,
})(MTableHeader);
