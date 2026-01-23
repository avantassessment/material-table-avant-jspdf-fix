import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = [
  "icons",
  "data",
  "columns",
  "components",
  "detailPanel",
  "getFieldValue",
  "isTreeData",
  "onRowClick",
  "onRowSelected",
  "onTreeExpandChanged",
  "onToggleDetailPanel",
  "onEditingCanceled",
  "onEditingApproved",
  "options",
  "hasAnyEditingRow",
  "treeDataMaxLevel",
  "localization",
  "actions",
  "errorState",
  "cellEditable",
  "onCellEditStarted",
  "onCellEditFinished",
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
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import * as React from "react";
import * as CommonValues from "../utils/common-values";
/* eslint-enable no-unused-vars */
var MTableBodyRow = /*#__PURE__*/ (function (_React$Component) {
  function MTableBodyRow() {
    var _this;
    _classCallCheck(this, MTableBodyRow);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableBodyRow, [].concat(args));
    _defineProperty(_this, "rotateIconStyle", function (isOpen) {
      return {
        transform: isOpen ? "rotate(90deg)" : "none",
      };
    });
    return _this;
  }
  _inherits(MTableBodyRow, _React$Component);
  return _createClass(MTableBodyRow, [
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
            var value = _this2.props.getFieldValue(
              _this2.props.data,
              columnDef
            );
            if (
              _this2.props.data.tableData.editCellList &&
              _this2.props.data.tableData.editCellList.find(function (c) {
                return c.tableData.id === columnDef.tableData.id;
              })
            ) {
              return /*#__PURE__*/ React.createElement(
                _this2.props.components.EditCell,
                {
                  components: _this2.props.components,
                  icons: _this2.props.icons,
                  localization: _this2.props.localization,
                  columnDef: columnDef,
                  size: size,
                  key:
                    "cell-" +
                    _this2.props.data.tableData.id +
                    "-" +
                    columnDef.tableData.id,
                  rowData: _this2.props.data,
                  cellEditable: _this2.props.cellEditable,
                  onCellEditFinished: _this2.props.onCellEditFinished,
                  scrollWidth: _this2.props.scrollWidth,
                }
              );
            } else {
              return /*#__PURE__*/ React.createElement(
                _this2.props.components.Cell,
                {
                  size: size,
                  errorState: _this2.props.errorState,
                  icons: _this2.props.icons,
                  columnDef: _objectSpread(
                    {
                      cellStyle: _this2.props.options.cellStyle,
                    },
                    columnDef
                  ),
                  value: value,
                  key:
                    "cell-" +
                    _this2.props.data.tableData.id +
                    "-" +
                    columnDef.tableData.id,
                  rowData: _this2.props.data,
                  cellEditable:
                    columnDef.editable !== "never" &&
                    !!_this2.props.cellEditable,
                  onCellEditStarted: _this2.props.onCellEditStarted,
                  scrollWidth: _this2.props.scrollWidth,
                }
              );
            }
          });
        return mapArr;
      },
    },
    {
      key: "renderActions",
      value: function renderActions() {
        var size = CommonValues.elementSize(this.props);
        var actions = CommonValues.rowActions(this.props);
        var width = actions.length * CommonValues.baseIconSize(this.props);
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            size: size,
            padding: "none",
            key: "key-actions-column",
            style: _objectSpread(
              {
                width: width,
                padding: "0px 5px",
                boxSizing: "border-box",
              },
              this.props.options.actionsCellStyle
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
              disabled: this.props.hasAnyEditingRow,
            })
          )
        );
      },
    },
    {
      key: "renderSelectionColumn",
      value: function renderSelectionColumn() {
        var _this3 = this;
        var checkboxProps = this.props.options.selectionProps || {};
        if (typeof checkboxProps === "function") {
          checkboxProps = checkboxProps(this.props.data);
        }
        var size = CommonValues.elementSize(this.props);
        var selectionWidth = CommonValues.selectionMaxWidth(
          this.props,
          this.props.treeDataMaxLevel
        );
        var styles =
          size === "medium"
            ? {
                marginLeft: this.props.level * 9,
              }
            : {
                padding: "4px",
                marginLeft: 5 + this.props.level * 9,
              };
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            size: size,
            padding: "none",
            key: "key-selection-column",
            style: {
              width: selectionWidth,
            },
          },
          /*#__PURE__*/ React.createElement(
            Checkbox,
            _extends(
              {
                size: size,
                checked: this.props.data.tableData.checked === true,
                onClick: function onClick(e) {
                  return e.stopPropagation();
                },
                value: this.props.data.tableData.id.toString(),
                onChange: function onChange(event) {
                  return _this3.props.onRowSelected(
                    event,
                    _this3.props.path,
                    _this3.props.data
                  );
                },
                style: styles,
              },
              checkboxProps
            )
          )
        );
      },
    },
    {
      key: "renderDetailPanelColumn",
      value: function renderDetailPanelColumn() {
        var _this4 = this;
        var size = CommonValues.elementSize(this.props);
        var CustomIcon = function CustomIcon(_ref) {
          var icon = _ref.icon,
            iconProps = _ref.iconProps;
          return typeof icon === "string"
            ? /*#__PURE__*/ React.createElement(Icon, iconProps, icon)
            : React.createElement(icon, _objectSpread({}, iconProps));
        };
        if (typeof this.props.detailPanel == "function") {
          return /*#__PURE__*/ React.createElement(
            TableCell,
            {
              size: size,
              padding: "none",
              key: "key-detail-panel-column",
              style: _objectSpread(
                {
                  width: 42,
                  textAlign: "center",
                },
                this.props.options.detailPanelColumnStyle
              ),
            },
            /*#__PURE__*/ React.createElement(
              IconButton,
              {
                size: size,
                style: _objectSpread(
                  {
                    transition: "all ease 200ms",
                  },
                  this.rotateIconStyle(
                    this.props.data.tableData.showDetailPanel
                  )
                ),
                onClick: function onClick(event) {
                  _this4.props.onToggleDetailPanel(
                    _this4.props.path,
                    _this4.props.detailPanel
                  );
                  event.stopPropagation();
                },
              },
              /*#__PURE__*/ React.createElement(
                this.props.icons.DetailPanel,
                null
              )
            )
          );
        } else {
          return /*#__PURE__*/ React.createElement(
            TableCell,
            {
              size: size,
              padding: "none",
              key: "key-detail-panel-column",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: _objectSpread(
                  {
                    width: 42 * this.props.detailPanel.length,
                    textAlign: "center",
                    display: "flex",
                  },
                  this.props.options.detailPanelColumnStyle
                ),
              },
              this.props.detailPanel.map(function (panel, index) {
                if (typeof panel === "function") {
                  panel = panel(_this4.props.data);
                }
                var isOpen =
                  (
                    _this4.props.data.tableData.showDetailPanel || ""
                  ).toString() === panel.render.toString();
                var iconButton = /*#__PURE__*/ React.createElement(
                  _this4.props.icons.DetailPanel,
                  null
                );
                var animation = true;
                if (isOpen) {
                  if (panel.openIcon) {
                    iconButton = /*#__PURE__*/ React.createElement(CustomIcon, {
                      icon: panel.openIcon,
                      iconProps: panel.iconProps,
                    });
                    animation = false;
                  } else if (panel.icon) {
                    iconButton = /*#__PURE__*/ React.createElement(CustomIcon, {
                      icon: panel.icon,
                      iconProps: panel.iconProps,
                    });
                  }
                } else if (panel.icon) {
                  iconButton = /*#__PURE__*/ React.createElement(CustomIcon, {
                    icon: panel.icon,
                    iconProps: panel.iconProps,
                  });
                  animation = false;
                }
                iconButton = /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    size: size,
                    key: "key-detail-panel-" + index,
                    style: _objectSpread(
                      {
                        transition: "all ease 200ms",
                      },
                      _this4.rotateIconStyle(animation && isOpen)
                    ),
                    disabled: panel.disabled,
                    onClick: function onClick(event) {
                      _this4.props.onToggleDetailPanel(
                        _this4.props.path,
                        panel.render
                      );
                      event.stopPropagation();
                    },
                  },
                  iconButton
                );
                if (panel.tooltip) {
                  iconButton = /*#__PURE__*/ React.createElement(
                    Tooltip,
                    {
                      key: "key-detail-panel-" + index,
                      title: panel.tooltip,
                    },
                    iconButton
                  );
                }
                return iconButton;
              })
            )
          );
        }
      },
    },
    {
      key: "renderTreeDataColumn",
      value: function renderTreeDataColumn() {
        var _this5 = this;
        var size = CommonValues.elementSize(this.props);
        if (
          this.props.data.tableData.childRows &&
          this.props.data.tableData.childRows.length > 0
        ) {
          return /*#__PURE__*/ React.createElement(
            TableCell,
            {
              size: size,
              padding: "none",
              key: "key-tree-data-column",
              style: {
                width: 48 + 9 * (this.props.treeDataMaxLevel - 2),
              },
            },
            /*#__PURE__*/ React.createElement(
              IconButton,
              {
                size: size,
                style: _objectSpread(
                  {
                    transition: "all ease 200ms",
                    marginLeft: this.props.level * 9,
                  },
                  this.rotateIconStyle(this.props.data.tableData.isTreeExpanded)
                ),
                onClick: function onClick(event) {
                  _this5.props.onTreeExpandChanged(
                    _this5.props.path,
                    _this5.props.data
                  );
                  event.stopPropagation();
                },
              },
              /*#__PURE__*/ React.createElement(
                this.props.icons.DetailPanel,
                null
              )
            )
          );
        } else {
          return /*#__PURE__*/ React.createElement(TableCell, {
            padding: "none",
            key: "key-tree-data-column",
          });
        }
      },
    },
    {
      key: "getStyle",
      value: function getStyle(index, level) {
        var style = {
          transition: "all ease 300ms",
        };
        if (typeof this.props.options.rowStyle === "function") {
          style = _objectSpread(
            {},
            style,
            this.props.options.rowStyle(
              this.props.data,
              index,
              level,
              this.props.hasAnyEditingRow
            )
          );
        } else if (this.props.options.rowStyle) {
          style = _objectSpread({}, style, this.props.options.rowStyle);
        }
        if (this.props.onRowClick) {
          style.cursor = "pointer";
        }
        if (this.props.hasAnyEditingRow) {
          style.opacity = style.opacity ? style.opacity : 0.2;
        }
        return style;
      },
    },
    {
      key: "render",
      value: function render() {
        var _this6 = this;
        var size = CommonValues.elementSize(this.props);
        var renderColumns = this.renderColumns();
        if (this.props.options.selection) {
          renderColumns.splice(0, 0, this.renderSelectionColumn());
        }
        if (
          this.props.actions &&
          this.props.actions.filter(function (a) {
            return a.position === "row" || typeof a === "function";
          }).length > 0
        ) {
          if (this.props.options.actionsColumnIndex === -1) {
            renderColumns.push(this.renderActions());
          } else if (this.props.options.actionsColumnIndex >= 0) {
            var endPos = 0;
            if (this.props.options.selection) {
              endPos = 1;
            }
            renderColumns.splice(
              this.props.options.actionsColumnIndex + endPos,
              0,
              this.renderActions()
            );
          }
        }

        // Then we add detail panel icon
        if (this.props.detailPanel) {
          if (this.props.options.detailPanelColumnAlignment === "right") {
            renderColumns.push(this.renderDetailPanelColumn());
          } else {
            renderColumns.splice(0, 0, this.renderDetailPanelColumn());
          }
        }

        // Lastly we add tree data icon
        if (this.props.isTreeData) {
          renderColumns.splice(0, 0, this.renderTreeDataColumn());
        }
        this.props.columns
          .filter(function (columnDef) {
            return columnDef.tableData.groupOrder > -1;
          })
          .forEach(function (columnDef) {
            renderColumns.splice(
              0,
              0,
              /*#__PURE__*/ React.createElement(TableCell, {
                size: size,
                padding: "none",
                key: "key-group-cell" + columnDef.tableData.id,
              })
            );
          });
        var _this$props = this.props,
          icons = _this$props.icons,
          data = _this$props.data,
          columns = _this$props.columns,
          components = _this$props.components,
          detailPanel = _this$props.detailPanel,
          getFieldValue = _this$props.getFieldValue,
          isTreeData = _this$props.isTreeData,
          onRowClick = _this$props.onRowClick,
          onRowSelected = _this$props.onRowSelected,
          onTreeExpandChanged = _this$props.onTreeExpandChanged,
          onToggleDetailPanel = _this$props.onToggleDetailPanel,
          onEditingCanceled = _this$props.onEditingCanceled,
          onEditingApproved = _this$props.onEditingApproved,
          options = _this$props.options,
          hasAnyEditingRow = _this$props.hasAnyEditingRow,
          treeDataMaxLevel = _this$props.treeDataMaxLevel,
          localization = _this$props.localization,
          actions = _this$props.actions,
          errorState = _this$props.errorState,
          cellEditable = _this$props.cellEditable,
          onCellEditStarted = _this$props.onCellEditStarted,
          onCellEditFinished = _this$props.onCellEditFinished,
          scrollWidth = _this$props.scrollWidth,
          rowProps = _objectWithoutProperties(_this$props, _excluded);
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            TableRow,
            _extends(
              {
                selected: hasAnyEditingRow,
              },
              rowProps,
              {
                hover: onRowClick ? true : false,
                style: this.getStyle(this.props.index, this.props.level),
                onClick: function onClick(event) {
                  onRowClick &&
                    onRowClick(event, _this6.props.data, function (panelIndex) {
                      var panel = detailPanel;
                      if (Array.isArray(panel)) {
                        panel = panel[panelIndex || 0];
                        if (typeof panel === "function") {
                          panel = panel(_this6.props.data);
                        }
                        panel = panel.render;
                      }
                      onToggleDetailPanel(_this6.props.path, panel);
                    });
                },
              }
            ),
            renderColumns
          ),
          this.props.data.tableData &&
            this.props.data.tableData.showDetailPanel &&
            /*#__PURE__*/ React.createElement(
              TableRow,
              // selected={this.props.index % 2 === 0}
              null,
              /*#__PURE__*/ React.createElement(
                TableCell,
                {
                  size: size,
                  colSpan: renderColumns.length,
                  padding: "none",
                },
                this.props.data.tableData.showDetailPanel(this.props.data)
              )
            ),
          this.props.data.tableData.childRows &&
            this.props.data.tableData.isTreeExpanded &&
            this.props.data.tableData.childRows.map(function (data, index) {
              if (data.tableData.editing) {
                return /*#__PURE__*/ React.createElement(
                  _this6.props.components.EditRow,
                  {
                    columns: _this6.props.columns.filter(function (columnDef) {
                      return !columnDef.hidden;
                    }),
                    components: _this6.props.components,
                    data: data,
                    icons: _this6.props.icons,
                    localization: _this6.props.localization,
                    getFieldValue: _this6.props.getFieldValue,
                    key: index,
                    mode: data.tableData.editing,
                    options: _this6.props.options,
                    isTreeData: _this6.props.isTreeData,
                    detailPanel: _this6.props.detailPanel,
                    onEditingCanceled: onEditingCanceled,
                    onEditingApproved: onEditingApproved,
                    errorState: _this6.props.errorState,
                  }
                );
              } else {
                return /*#__PURE__*/ React.createElement(
                  _this6.props.components.Row,
                  _extends({}, _this6.props, {
                    data: data,
                    index: index,
                    key: index,
                    level: _this6.props.level + 1,
                    path: [].concat(_toConsumableArray(_this6.props.path), [
                      index,
                    ]),
                    onEditingCanceled: onEditingCanceled,
                    onEditingApproved: onEditingApproved,
                    hasAnyEditingRow: _this6.props.hasAnyEditingRow,
                    treeDataMaxLevel: treeDataMaxLevel,
                    errorState: _this6.props.errorState,
                    cellEditable: cellEditable,
                    onCellEditStarted: onCellEditStarted,
                    onCellEditFinished: onCellEditFinished,
                  })
                );
              }
            })
        );
      },
    },
  ]);
})(React.Component);
export { MTableBodyRow as default };
MTableBodyRow.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {},
  path: [],
};
MTableBodyRow.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  detailPanel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
  ]),
  hasAnyEditingRow: PropTypes.bool,
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  path: PropTypes.arrayOf(PropTypes.number),
  treeDataMaxLevel: PropTypes.number,
  getFieldValue: PropTypes.func.isRequired,
  columns: PropTypes.array,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onRowClick: PropTypes.func,
  onEditingApproved: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
