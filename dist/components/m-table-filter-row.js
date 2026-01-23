import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@mui/lab";
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
var MTableFilterRow = /*#__PURE__*/ (function (_React$Component) {
  function MTableFilterRow() {
    var _this;
    _classCallCheck(this, MTableFilterRow);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableFilterRow, [].concat(args));
    _defineProperty(_this, "getLocalizationData", function () {
      return _objectSpread(
        {},
        MTableFilterRow.defaultProps.localization,
        _this.props.localization
      );
    });
    _defineProperty(_this, "getLocalizedFilterPlaceHolder", function (
      columnDef
    ) {
      return (
        columnDef.filterPlaceholder ||
        _this.getLocalizationData().filterPlaceHolder ||
        ""
      );
    });
    _defineProperty(_this, "LookupFilter", function (_ref) {
      var columnDef = _ref.columnDef;
      var _React$useState = React.useState(
          columnDef.tableData.filterValue || []
        ),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        selectedFilter = _React$useState2[0],
        setSelectedFilter = _React$useState2[1];
      React.useEffect(
        function () {
          setSelectedFilter(columnDef.tableData.filterValue || []);
        },
        [columnDef.tableData.filterValue]
      );
      return /*#__PURE__*/ React.createElement(
        FormControl,
        {
          style: {
            width: "100%",
          },
        },
        /*#__PURE__*/ React.createElement(
          InputLabel,
          {
            htmlFor: "select-multiple-checkbox" + columnDef.tableData.id,
            style: {
              marginTop: -16,
            },
          },
          _this.getLocalizedFilterPlaceHolder(columnDef)
        ),
        /*#__PURE__*/ React.createElement(
          Select,
          {
            multiple: true,
            value: selectedFilter,
            onClose: function onClose() {
              if (columnDef.filterOnItemSelect !== true)
                _this.props.onFilterChanged(
                  columnDef.tableData.id,
                  selectedFilter
                );
            },
            onChange: function onChange(event) {
              setSelectedFilter(event.target.value);
              if (columnDef.filterOnItemSelect === true)
                _this.props.onFilterChanged(
                  columnDef.tableData.id,
                  event.target.value
                );
            },
            input: /*#__PURE__*/ React.createElement(Input, {
              id: "select-multiple-checkbox" + columnDef.tableData.id,
            }),
            renderValue: function renderValue(selecteds) {
              return selecteds
                .map(function (selected) {
                  return columnDef.lookup[selected];
                })
                .join(", ");
            },
            MenuProps: MenuProps,
            style: {
              marginTop: 0,
            },
          },
          Object.keys(columnDef.lookup).map(function (key) {
            return /*#__PURE__*/ React.createElement(
              MenuItem,
              {
                key: key,
                value: key,
              },
              /*#__PURE__*/ React.createElement(Checkbox, {
                checked: selectedFilter.indexOf(key.toString()) > -1,
              }),
              /*#__PURE__*/ React.createElement(ListItemText, {
                primary: columnDef.lookup[key],
              })
            );
          })
        )
      );
    });
    _defineProperty(_this, "renderFilterComponent", function (columnDef) {
      return React.createElement(columnDef.filterComponent, {
        columnDef: columnDef,
        onFilterChanged: _this.props.onFilterChanged,
      });
    });
    _defineProperty(_this, "renderBooleanFilter", function (columnDef) {
      return /*#__PURE__*/ React.createElement(Checkbox, {
        indeterminate: columnDef.tableData.filterValue === undefined,
        checked: columnDef.tableData.filterValue === "checked",
        onChange: function onChange() {
          var val;
          if (columnDef.tableData.filterValue === undefined) {
            val = "checked";
          } else if (columnDef.tableData.filterValue === "checked") {
            val = "unchecked";
          }
          _this.props.onFilterChanged(columnDef.tableData.id, val);
        },
      });
    });
    _defineProperty(_this, "renderDefaultFilter", function (columnDef) {
      var localization = _this.getLocalizationData();
      var FilterIcon = _this.props.icons.Filter;
      return /*#__PURE__*/ React.createElement(TextField, {
        style:
          columnDef.type === "numeric"
            ? {
                float: "right",
              }
            : {},
        type: columnDef.type === "numeric" ? "number" : "search",
        value: columnDef.tableData.filterValue || "",
        placeholder: _this.getLocalizedFilterPlaceHolder(columnDef),
        onChange: function onChange(event) {
          _this.props.onFilterChanged(
            columnDef.tableData.id,
            event.target.value
          );
        },
        inputProps: {
          "aria-label": "filter data by ".concat(columnDef.title),
        },
        InputProps:
          _this.props.hideFilterIcons || columnDef.hideFilterIcon
            ? undefined
            : {
                startAdornment: /*#__PURE__*/ React.createElement(
                  InputAdornment,
                  {
                    position: "start",
                  },
                  /*#__PURE__*/ React.createElement(
                    Tooltip,
                    {
                      title: localization.filterTooltip,
                    },
                    /*#__PURE__*/ React.createElement(FilterIcon, null)
                  )
                ),
              },
      });
    });
    _defineProperty(_this, "renderDateTypeFilter", function (columnDef) {
      var onDateInputChange = function onDateInputChange(date) {
        return _this.props.onFilterChanged(columnDef.tableData.id, date);
      };
      var pickerProps = {
        value: columnDef.tableData.filterValue || null,
        onChange: onDateInputChange,
        placeholder: _this.getLocalizedFilterPlaceHolder(columnDef),
        clearable: true,
      };
      var dateInputElement = null;
      if (columnDef.type === "date") {
        dateInputElement = /*#__PURE__*/ React.createElement(
          DatePicker,
          pickerProps
        );
      } else if (columnDef.type === "datetime") {
        dateInputElement = /*#__PURE__*/ React.createElement(
          DateTimePicker,
          pickerProps
        );
      } else if (columnDef.type === "time") {
        dateInputElement = /*#__PURE__*/ React.createElement(
          TimePicker,
          pickerProps
        );
      }
      return /*#__PURE__*/ React.createElement(
        LocalizationProvider,
        {
          dateAdapter: AdapterDateFns,
          locale: _this.props.localization.dateTimePickerLocalization,
        },
        dateInputElement
      );
    });
    return _this;
  }
  _inherits(MTableFilterRow, _React$Component);
  return _createClass(MTableFilterRow, [
    {
      key: "getComponentForColumn",
      value: function getComponentForColumn(columnDef) {
        if (columnDef.filtering === false) {
          return null;
        }
        if (columnDef.field || columnDef.customFilterAndSearch) {
          if (columnDef.filterComponent) {
            return this.renderFilterComponent(columnDef);
          } else if (columnDef.lookup) {
            return /*#__PURE__*/ React.createElement(this.LookupFilter, {
              columnDef: columnDef,
            });
          } else if (columnDef.type === "boolean") {
            return this.renderBooleanFilter(columnDef);
          } else if (["date", "datetime", "time"].includes(columnDef.type)) {
            return this.renderDateTypeFilter(columnDef);
          } else {
            return this.renderDefaultFilter(columnDef);
          }
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var columns = this.props.columns
          .filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          })
          .sort(function (a, b) {
            return a.tableData.columnOrder - b.tableData.columnOrder;
          })
          .map(function (columnDef) {
            return /*#__PURE__*/ React.createElement(
              TableCell,
              {
                key: columnDef.tableData.id,
                style: _objectSpread(
                  {},
                  _this2.props.filterCellStyle,
                  columnDef.filterCellStyle
                ),
              },
              _this2.getComponentForColumn(columnDef)
            );
          });
        if (this.props.selection) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-selection-column",
            })
          );
        }
        if (this.props.hasActions) {
          if (this.props.actionsColumnIndex === -1) {
            columns.push(
              /*#__PURE__*/ React.createElement(TableCell, {
                key: "key-action-column",
              })
            );
          } else {
            var endPos = 0;
            if (this.props.selection) {
              endPos = 1;
            }
            columns.splice(
              this.props.actionsColumnIndex + endPos,
              0,
              /*#__PURE__*/ React.createElement(TableCell, {
                key: "key-action-column",
              })
            );
          }
        }
        if (this.props.hasDetailPanel) {
          var alignment = this.props.detailPanelColumnAlignment;
          var index = alignment === "left" ? 0 : columns.length;
          columns.splice(
            index,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-detail-panel-column",
            })
          );
        }
        if (this.props.isTreeData > 0) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-tree-data-filter",
            })
          );
        }
        this.props.columns
          .filter(function (columnDef) {
            return columnDef.tableData.groupOrder > -1;
          })
          .forEach(function (columnDef) {
            columns.splice(
              0,
              0,
              /*#__PURE__*/ React.createElement(TableCell, {
                padding: "checkbox",
                key: "key-group-filter" + columnDef.tableData.id,
              })
            );
          });
        return /*#__PURE__*/ React.createElement(
          TableRow,
          {
            style: _objectSpread(
              {
                height: 10,
              },
              this.props.filterRowStyle
            ),
          },
          columns
        );
      },
    },
  ]);
})(React.Component);
MTableFilterRow.defaultProps = {
  columns: [],
  detailPanelColumnAlignment: "left",
  selection: false,
  hasActions: false,
  localization: {
    filterTooltip: "Filter",
  },
  hideFilterIcons: false,
};
MTableFilterRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasDetailPanel: PropTypes.bool.isRequired,
  detailPanelColumnAlignment: PropTypes.string,
  isTreeData: PropTypes.bool.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  filterCellStyle: PropTypes.object,
  filterRowStyle: PropTypes.object,
  selection: PropTypes.bool.isRequired,
  actionsColumnIndex: PropTypes.number,
  hasActions: PropTypes.bool,
  localization: PropTypes.object,
  hideFilterIcons: PropTypes.bool,
};
export default MTableFilterRow;
