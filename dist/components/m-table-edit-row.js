import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["editComponent"],
  _excluded2 = [
    "detailPanel",
    "isTreeData",
    "onRowClick",
    "onRowSelected",
    "onTreeExpandChanged",
    "onToggleDetailPanel",
    "onEditingApproved",
    "onEditingCanceled",
    "getFieldValue",
    "components",
    "icons",
    "columns",
    "localization",
    "options",
    "actions",
    "errorState",
    "onBulkEditRowChanged",
    "scrollWidth",
  ];
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
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { byString, setByString } from "../utils";
import * as CommonValues from "../utils/common-values";
/* eslint-enable no-unused-vars */
var MTableEditRow = /*#__PURE__*/ (function (_React$Component) {
  function MTableEditRow(props) {
    var _this;
    _classCallCheck(this, MTableEditRow);
    _this = _callSuper(this, MTableEditRow, [props]);
    _defineProperty(_this, "handleSave", function () {
      var newData = _this.state.data;
      delete newData.tableData;
      _this.props.onEditingApproved(
        _this.props.mode,
        _this.state.data,
        _this.props.data
      );
    });
    _defineProperty(_this, "handleKeyDown", function (e) {
      if (e.keyCode === 13 && e.target.type !== "textarea") {
        _this.handleSave();
      } else if (
        e.keyCode === 13 &&
        e.target.type === "textarea" &&
        e.shiftKey
      ) {
        _this.handleSave();
      } else if (e.keyCode === 27) {
        _this.props.onEditingCanceled(_this.props.mode, _this.props.data);
      }
    });
    _this.state = {
      data: props.data
        ? JSON.parse(JSON.stringify(props.data))
        : _this.createRowData(),
    };
    return _this;
  }
  _inherits(MTableEditRow, _React$Component);
  return _createClass(MTableEditRow, [
    {
      key: "createRowData",
      value: function createRowData() {
        return this.props.columns
          .filter(function (column) {
            return "initialEditValue" in column && column.field;
          })
          .reduce(function (prev, column) {
            prev[column.field] = column.initialEditValue;
            return prev;
          }, {});
      },
    },
    {
      key: "renderColumns",
      value: function renderColumns() {
        var _this2 = this;
        var size = CommonValues.elementSize(this.props);
        var mapArr = this.props.columns
          .filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          })
          .sort(function (a, b) {
            return a.tableData.columnOrder - b.tableData.columnOrder;
          })
          .map(function (columnDef, index) {
            var value =
              typeof _this2.state.data[columnDef.field] !== "undefined"
                ? _this2.state.data[columnDef.field]
                : byString(_this2.state.data, columnDef.field);
            var getCellStyle = function getCellStyle(columnDef, value) {
              var cellStyle = {
                color: "inherit",
              };
              if (typeof columnDef.cellStyle === "function") {
                cellStyle = _objectSpread(
                  {},
                  cellStyle,
                  columnDef.cellStyle(value, _this2.props.data)
                );
              } else {
                cellStyle = _objectSpread({}, cellStyle, columnDef.cellStyle);
              }
              if (columnDef.disableClick) {
                cellStyle.cursor = "default";
              }
              return _objectSpread({}, cellStyle);
            };
            var style = {};
            if (index === 0) {
              style.paddingLeft = 24 + _this2.props.level * 20;
            }
            var allowEditing = false;
            if (columnDef.editable === undefined) {
              allowEditing = true;
            }
            if (columnDef.editable === "always") {
              allowEditing = true;
            }
            if (columnDef.editable === "onAdd" && _this2.props.mode === "add") {
              allowEditing = true;
            }
            if (
              columnDef.editable === "onUpdate" &&
              _this2.props.mode === "update"
            ) {
              allowEditing = true;
            }
            if (typeof columnDef.editable === "function") {
              allowEditing = columnDef.editable(columnDef, _this2.props.data);
            }
            if (!columnDef.field || !allowEditing) {
              var readonlyValue = _this2.props.getFieldValue(
                _this2.state.data,
                columnDef
              );
              return /*#__PURE__*/ React.createElement(
                _this2.props.components.Cell,
                {
                  size: size,
                  icons: _this2.props.icons,
                  columnDef: columnDef,
                  value: readonlyValue,
                  key: columnDef.tableData.id,
                  rowData: _this2.props.data,
                  style: getCellStyle(columnDef, value),
                }
              );
            } else {
              var editComponent = columnDef.editComponent,
                cellProps = _objectWithoutProperties(columnDef, _excluded);
              var EditComponent =
                editComponent || _this2.props.components.EditField;
              var error = {
                isValid: true,
                helperText: "",
              };
              if (columnDef.validate) {
                var validateResponse = columnDef.validate(_this2.state.data);
                switch (_typeof(validateResponse)) {
                  case "object":
                    error = _objectSpread({}, validateResponse);
                    break;
                  case "boolean":
                    error = {
                      isValid: validateResponse,
                      helperText: "",
                    };
                    break;
                  case "string":
                    error = {
                      isValid: false,
                      helperText: validateResponse,
                    };
                    break;
                }
              }
              return /*#__PURE__*/ React.createElement(
                TableCell,
                {
                  size: size,
                  key: columnDef.tableData.id,
                  align:
                    ["numeric"].indexOf(columnDef.type) !== -1
                      ? "right"
                      : "left",
                  style: getCellStyle(columnDef, value),
                },
                /*#__PURE__*/ React.createElement(EditComponent, {
                  key: columnDef.tableData.id,
                  columnDef: cellProps,
                  value: value,
                  error: !error.isValid,
                  helperText: error.helperText,
                  locale: _this2.props.localization.dateTimePickerLocalization,
                  rowData: _this2.state.data,
                  onChange: function onChange(value) {
                    var data = _objectSpread({}, _this2.state.data);
                    setByString(data, columnDef.field, value);
                    // data[columnDef.field] = value;
                    _this2.setState(
                      {
                        data: data,
                      },
                      function () {
                        if (_this2.props.onBulkEditRowChanged) {
                          _this2.props.onBulkEditRowChanged(
                            _this2.props.data,
                            data
                          );
                        }
                      }
                    );
                  },
                  onRowDataChange: function onRowDataChange(data) {
                    _this2.setState(
                      {
                        data: data,
                      },
                      function () {
                        if (_this2.props.onBulkEditRowChanged) {
                          _this2.props.onBulkEditRowChanged(
                            _this2.props.data,
                            data
                          );
                        }
                      }
                    );
                  },
                })
              );
            }
          });
        return mapArr;
      },
    },
    {
      key: "renderActions",
      value: function renderActions() {
        var _this3 = this;
        if (this.props.mode === "bulk") {
          return /*#__PURE__*/ React.createElement(TableCell, {
            padding: "none",
            key: "key-actions-column",
          });
        }
        var size = CommonValues.elementSize(this.props);
        var localization = _objectSpread(
          {},
          MTableEditRow.defaultProps.localization,
          this.props.localization
        );
        var isValid = this.props.columns.every(function (column) {
          if (column.validate) {
            var response = column.validate(_this3.state.data);
            switch (_typeof(response)) {
              case "object":
                return response.isValid;
              case "string":
                return response.length === 0;
              case "boolean":
                return response;
            }
          } else {
            return true;
          }
        });
        var actions = [
          {
            icon: this.props.icons.Check,
            tooltip: localization.saveTooltip,
            disabled: !isValid,
            onClick: this.handleSave,
          },
          {
            icon: this.props.icons.Clear,
            tooltip: localization.cancelTooltip,
            onClick: function onClick() {
              _this3.props.onEditingCanceled(
                _this3.props.mode,
                _this3.props.data
              );
            },
          },
        ];
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            size: size,
            padding: "none",
            key: "key-actions-column",
            style: _objectSpread(
              {
                width: 42 * actions.length,
                padding: "0px 5px",
              },
              this.props.options.editCellStyle
            ),
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
              },
            },
            /*#__PURE__*/ React.createElement(this.props.components.Actions, {
              data: this.props.data,
              actions: actions,
              components: this.props.components,
              size: size,
            })
          )
        );
      },
    },
    {
      key: "getStyle",
      value: function getStyle() {
        var style = {
          // boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)',
          borderBottom: "1px solid red",
        };
        return style;
      },
    },
    {
      key: "render",
      value: function render() {
        var size = CommonValues.elementSize(this.props);
        var localization = _objectSpread(
          {},
          MTableEditRow.defaultProps.localization,
          this.props.localization
        );
        var columns;
        if (
          this.props.mode === "add" ||
          this.props.mode === "update" ||
          this.props.mode === "bulk"
        ) {
          columns = this.renderColumns();
        } else {
          var colSpan = this.props.columns.filter(function (columnDef) {
            return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
          }).length;
          columns = [
            /*#__PURE__*/ React.createElement(
              TableCell,
              {
                size: size,
                padding:
                  this.props.options.actionsColumnIndex === 0
                    ? "none"
                    : undefined,
                key: "key-edit-cell",
                colSpan: colSpan,
              },
              /*#__PURE__*/ React.createElement(
                Typography,
                {
                  variant: "h6",
                },
                localization.deleteText
              )
            ),
          ];
        }
        if (this.props.options.selection) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-selection-cell",
            })
          );
        }
        if (this.props.isTreeData) {
          columns.splice(
            0,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-tree-data-cell",
            })
          );
        }
        if (this.props.options.actionsColumnIndex === -1) {
          columns.push(this.renderActions());
        } else if (this.props.options.actionsColumnIndex >= 0) {
          var endPos = 0;
          if (this.props.options.selection) {
            endPos = 1;
          }
          if (this.props.isTreeData) {
            endPos = 1;
            if (this.props.options.selection) {
              columns.splice(1, 1);
            }
          }
          columns.splice(
            this.props.options.actionsColumnIndex + endPos,
            0,
            this.renderActions()
          );
        }

        // Lastly we add detail panel icon
        if (this.props.detailPanel) {
          var aligment = this.props.options.detailPanelColumnAlignment;
          var index = aligment === "left" ? 0 : columns.length;
          columns.splice(
            index,
            0,
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "none",
              key: "key-detail-panel-cell",
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
                padding: "none",
                key: "key-group-cell" + columnDef.tableData.id,
              })
            );
          });
        var _this$props = this.props,
          detailPanel = _this$props.detailPanel,
          isTreeData = _this$props.isTreeData,
          onRowClick = _this$props.onRowClick,
          onRowSelected = _this$props.onRowSelected,
          onTreeExpandChanged = _this$props.onTreeExpandChanged,
          onToggleDetailPanel = _this$props.onToggleDetailPanel,
          onEditingApproved = _this$props.onEditingApproved,
          onEditingCanceled = _this$props.onEditingCanceled,
          getFieldValue = _this$props.getFieldValue,
          components = _this$props.components,
          icons = _this$props.icons,
          columnsProp = _this$props.columns,
          localizationProp = _this$props.localization,
          options = _this$props.options,
          actions = _this$props.actions,
          errorState = _this$props.errorState,
          onBulkEditRowChanged = _this$props.onBulkEditRowChanged,
          scrollWidth = _this$props.scrollWidth,
          rowProps = _objectWithoutProperties(_this$props, _excluded2);
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            TableRow,
            _extends(
              {
                onKeyDown: this.handleKeyDown,
              },
              rowProps,
              {
                style: this.getStyle(),
              }
            ),
            columns
          )
        );
      },
    },
  ]);
})(React.Component);
export { MTableEditRow as default };
MTableEditRow.defaultProps = {
  actions: [],
  index: 0,
  options: {},
  path: [],
  localization: {
    saveTooltip: "Save",
    cancelTooltip: "Cancel",
    deleteText: "Are you sure you want to delete this row?",
  },
  onBulkEditRowChanged: function onBulkEditRowChanged() {},
};
MTableEditRow.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
  detailPanel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
  ]),
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  path: PropTypes.arrayOf(PropTypes.number),
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
  onEditingApproved: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  localization: PropTypes.object,
  getFieldValue: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onBulkEditRowChanged: PropTypes.func,
};
