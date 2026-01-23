import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import * as React from "react";
/* eslint-enable no-unused-vars */
var MTableGroupRow = /*#__PURE__*/ (function (_React$Component) {
  function MTableGroupRow() {
    var _this;
    _classCallCheck(this, MTableGroupRow);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableGroupRow, [].concat(args));
    _defineProperty(_this, "rotateIconStyle", function (isOpen) {
      return {
        transform: isOpen ? "rotate(90deg)" : "none",
      };
    });
    return _this;
  }
  _inherits(MTableGroupRow, _React$Component);
  return _createClass(MTableGroupRow, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var colSpan = this.props.columns.filter(function (columnDef) {
          return !columnDef.hidden;
        }).length;
        this.props.options.selection && colSpan++;
        this.props.detailPanel && colSpan++;
        this.props.actions && this.props.actions.length > 0 && colSpan++;
        var column = this.props.groups[this.props.level];
        var detail;
        if (this.props.groupData.isExpanded) {
          if (this.props.groups.length > this.props.level + 1) {
            // Is there another group
            detail = this.props.groupData.groups.map(function (
              groupData,
              index
            ) {
              return /*#__PURE__*/ React.createElement(
                _this2.props.components.GroupRow,
                {
                  actions: _this2.props.actions,
                  key: groupData.value || "" + index,
                  columns: _this2.props.columns,
                  components: _this2.props.components,
                  detailPanel: _this2.props.detailPanel,
                  getFieldValue: _this2.props.getFieldValue,
                  groupData: groupData,
                  groups: _this2.props.groups,
                  icons: _this2.props.icons,
                  level: _this2.props.level + 1,
                  path: [].concat(_toConsumableArray(_this2.props.path), [
                    index,
                  ]),
                  onGroupExpandChanged: _this2.props.onGroupExpandChanged,
                  onRowSelected: _this2.props.onRowSelected,
                  onRowClick: _this2.props.onRowClick,
                  onToggleDetailPanel: _this2.props.onToggleDetailPanel,
                  onTreeExpandChanged: _this2.props.onTreeExpandChanged,
                  onEditingCanceled: _this2.props.onEditingCanceled,
                  onEditingApproved: _this2.props.onEditingApproved,
                  options: _this2.props.options,
                  hasAnyEditingRow: _this2.props.hasAnyEditingRow,
                  isTreeData: _this2.props.isTreeData,
                  cellEditable: _this2.props.cellEditable,
                  onCellEditStarted: _this2.props.onCellEditStarted,
                  onCellEditFinished: _this2.props.onCellEditFinished,
                  scrollWidth: _this2.props.scrollWidth,
                }
              );
            });
          } else {
            detail = this.props.groupData.data.map(function (rowData, index) {
              if (rowData.tableData.editing) {
                return /*#__PURE__*/ React.createElement(
                  _this2.props.components.EditRow,
                  {
                    columns: _this2.props.columns,
                    components: _this2.props.components,
                    data: rowData,
                    icons: _this2.props.icons,
                    path: [].concat(_toConsumableArray(_this2.props.path), [
                      index,
                    ]),
                    localization: _this2.props.localization,
                    key: index,
                    mode: rowData.tableData.editing,
                    options: _this2.props.options,
                    isTreeData: _this2.props.isTreeData,
                    detailPanel: _this2.props.detailPanel,
                    onEditingCanceled: _this2.props.onEditingCanceled,
                    onEditingApproved: _this2.props.onEditingApproved,
                    getFieldValue: _this2.props.getFieldValue,
                    onBulkEditRowChanged: _this2.props.onBulkEditRowChanged,
                    scrollWidth: _this2.props.scrollWidth,
                  }
                );
              } else {
                return /*#__PURE__*/ React.createElement(
                  _this2.props.components.Row,
                  {
                    actions: _this2.props.actions,
                    key: index,
                    columns: _this2.props.columns,
                    components: _this2.props.components,
                    data: rowData,
                    detailPanel: _this2.props.detailPanel,
                    getFieldValue: _this2.props.getFieldValue,
                    icons: _this2.props.icons,
                    path: [].concat(_toConsumableArray(_this2.props.path), [
                      index,
                    ]),
                    onRowSelected: _this2.props.onRowSelected,
                    onRowClick: _this2.props.onRowClick,
                    onToggleDetailPanel: _this2.props.onToggleDetailPanel,
                    options: _this2.props.options,
                    isTreeData: _this2.props.isTreeData,
                    onTreeExpandChanged: _this2.props.onTreeExpandChanged,
                    onEditingCanceled: _this2.props.onEditingCanceled,
                    onEditingApproved: _this2.props.onEditingApproved,
                    hasAnyEditingRow: _this2.props.hasAnyEditingRow,
                    cellEditable: _this2.props.cellEditable,
                    onCellEditStarted: _this2.props.onCellEditStarted,
                    onCellEditFinished: _this2.props.onCellEditFinished,
                    scrollWidth: _this2.props.scrollWidth,
                  }
                );
              }
            });
          }
        }
        var freeCells = [];
        for (var i = 0; i < this.props.level; i++) {
          freeCells.push(
            /*#__PURE__*/ React.createElement(TableCell, {
              padding: "checkbox",
              key: i,
            })
          );
        }
        var value = this.props.groupData.value;
        if (column.lookup) {
          value = column.lookup[value];
        }
        var title = column.title;
        if (typeof this.props.options.groupTitle === "function") {
          title = this.props.options.groupTitle(this.props.groupData);
        } else if (typeof title !== "string") {
          title = React.cloneElement(title);
        }
        var separator = this.props.options.groupRowSeparator || ": ";
        return /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            TableRow,
            null,
            freeCells,
            /*#__PURE__*/ React.createElement(
              this.props.components.Cell,
              {
                colSpan: colSpan,
                padding: "none",
                columnDef: column,
                value: value,
                icons: this.props.icons,
              },
              /*#__PURE__*/ React.createElement(
                IconButton,
                {
                  style: _objectSpread(
                    {
                      transition: "all ease 200ms",
                    },
                    this.rotateIconStyle(this.props.groupData.isExpanded)
                  ),
                  onClick: function onClick(event) {
                    _this2.props.onGroupExpandChanged(_this2.props.path);
                  },
                  size: "large",
                },
                /*#__PURE__*/ React.createElement(
                  this.props.icons.DetailPanel,
                  null
                )
              ),
              /*#__PURE__*/ React.createElement("b", null, title, separator)
            )
          ),
          detail
        );
      },
    },
  ]);
})(React.Component);
export { MTableGroupRow as default };
MTableGroupRow.defaultProps = {
  columns: [],
  groups: [],
  options: {},
  level: 0,
};
MTableGroupRow.propTypes = {
  actions: PropTypes.array,
  columns: PropTypes.arrayOf(PropTypes.object),
  components: PropTypes.object,
  detailPanel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  getFieldValue: PropTypes.func,
  groupData: PropTypes.object,
  groups: PropTypes.arrayOf(PropTypes.object),
  hasAnyEditingRow: PropTypes.bool,
  icons: PropTypes.object,
  isTreeData: PropTypes.bool.isRequired,
  level: PropTypes.number,
  localization: PropTypes.object,
  onGroupExpandChanged: PropTypes.func,
  onRowSelected: PropTypes.func,
  onRowClick: PropTypes.func,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onTreeExpandChanged: PropTypes.func.isRequired,
  onEditingCanceled: PropTypes.func,
  onEditingApproved: PropTypes.func,
  options: PropTypes.object,
  path: PropTypes.arrayOf(PropTypes.number),
  scrollWidth: PropTypes.number.isRequired,
  cellEditable: PropTypes.object,
  onCellEditStarted: PropTypes.func,
  onCellEditFinished: PropTypes.func,
  onBulkEditRowChanged: PropTypes.func,
};
