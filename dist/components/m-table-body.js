import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
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
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import * as React from "react";
/* eslint-enable no-unused-vars */
var MTableBody = /*#__PURE__*/ (function (_React$Component) {
  function MTableBody() {
    _classCallCheck(this, MTableBody);
    return _callSuper(this, MTableBody, arguments);
  }
  _inherits(MTableBody, _React$Component);
  return _createClass(MTableBody, [
    {
      key: "renderEmpty",
      value: function renderEmpty(emptyRowCount, renderData) {
        var rowHeight = this.props.options.padding === "default" ? 49 : 36;
        var localization = _objectSpread(
          {},
          MTableBody.defaultProps.localization,
          this.props.localization
        );
        if (
          this.props.options.showEmptyDataSourceMessage &&
          renderData.length === 0
        ) {
          var addColumn = 0;
          if (this.props.options.selection) {
            addColumn++;
          }
          if (
            this.props.actions &&
            this.props.actions.filter(function (a) {
              return a.position === "row" || typeof a === "function";
            }).length > 0
          ) {
            addColumn++;
          }
          if (this.props.hasDetailPanel) {
            addColumn++;
          }
          if (this.props.isTreeData) {
            addColumn++;
          }
          return /*#__PURE__*/ React.createElement(
            TableRow,
            {
              style: {
                height:
                  rowHeight *
                  (this.props.options.paging &&
                  this.props.options.emptyRowsWhenPaging
                    ? this.props.pageSize
                    : 1),
              },
              key: "empty-" + 0,
            },
            /*#__PURE__*/ React.createElement(
              TableCell,
              {
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  textAlign: "center",
                },
                colSpan: this.props.columns.reduce(function (
                  currentVal,
                  columnDef
                ) {
                  return columnDef.hidden ? currentVal : currentVal + 1;
                },
                addColumn),
                key: "empty-",
              },
              localization.emptyDataSourceMessage
            )
          );
        } else if (this.props.options.emptyRowsWhenPaging) {
          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            _toConsumableArray(Array(emptyRowCount)).map(function (r, index) {
              return /*#__PURE__*/ React.createElement(TableRow, {
                style: {
                  height: rowHeight,
                },
                key: "empty-" + index,
              });
            }),
            emptyRowCount > 0 &&
              /*#__PURE__*/ React.createElement(TableRow, {
                style: {
                  height: 1,
                },
                key: "empty-last1",
              })
          );
        }
      },
    },
    {
      key: "renderUngroupedRows",
      value: function renderUngroupedRows(renderData) {
        var _this = this;
        return renderData.map(function (data, index) {
          if (data.tableData.editing || _this.props.bulkEditOpen) {
            return /*#__PURE__*/ React.createElement(
              _this.props.components.EditRow,
              {
                columns: _this.props.columns.filter(function (columnDef) {
                  return !columnDef.hidden;
                }),
                components: _this.props.components,
                data: data,
                errorState: _this.props.errorState,
                icons: _this.props.icons,
                localization: _objectSpread(
                  {},
                  MTableBody.defaultProps.localization.editRow,
                  _this.props.localization.editRow,
                  {
                    dateTimePickerLocalization:
                      _this.props.localization.dateTimePickerLocalization,
                  }
                ),
                key: "row-" + data.tableData.id,
                mode: _this.props.bulkEditOpen
                  ? "bulk"
                  : data.tableData.editing,
                options: _this.props.options,
                isTreeData: _this.props.isTreeData,
                detailPanel: _this.props.detailPanel,
                onEditingCanceled: _this.props.onEditingCanceled,
                onEditingApproved: _this.props.onEditingApproved,
                getFieldValue: _this.props.getFieldValue,
                onBulkEditRowChanged: _this.props.onBulkEditRowChanged,
                scrollWidth: _this.props.scrollWidth,
              }
            );
          } else {
            return /*#__PURE__*/ React.createElement(
              _this.props.components.Row,
              {
                components: _this.props.components,
                icons: _this.props.icons,
                data: data,
                index: index,
                errorState: _this.props.errorState,
                key: "row-" + data.tableData.id,
                level: 0,
                options: _this.props.options,
                localization: _objectSpread(
                  {},
                  MTableBody.defaultProps.localization.editRow,
                  _this.props.localization.editRow,
                  {
                    dateTimePickerLocalization:
                      _this.props.localization.dateTimePickerLocalization,
                  }
                ),
                onRowSelected: _this.props.onRowSelected,
                actions: _this.props.actions,
                columns: _this.props.columns,
                getFieldValue: _this.props.getFieldValue,
                detailPanel: _this.props.detailPanel,
                path: [index + _this.props.pageSize * _this.props.currentPage],
                onToggleDetailPanel: _this.props.onToggleDetailPanel,
                onRowClick: _this.props.onRowClick,
                isTreeData: _this.props.isTreeData,
                onTreeExpandChanged: _this.props.onTreeExpandChanged,
                onEditingCanceled: _this.props.onEditingCanceled,
                onEditingApproved: _this.props.onEditingApproved,
                hasAnyEditingRow: _this.props.hasAnyEditingRow,
                treeDataMaxLevel: _this.props.treeDataMaxLevel,
                cellEditable: _this.props.cellEditable,
                onCellEditStarted: _this.props.onCellEditStarted,
                onCellEditFinished: _this.props.onCellEditFinished,
                scrollWidth: _this.props.scrollWidth,
              }
            );
          }
        });
      },
    },
    {
      key: "renderGroupedRows",
      value: function renderGroupedRows(groups, renderData) {
        var _this2 = this;
        return renderData.map(function (groupData, index) {
          return /*#__PURE__*/ React.createElement(
            _this2.props.components.GroupRow,
            {
              actions: _this2.props.actions,
              key: groupData.value == null ? "" + index : groupData.value,
              columns: _this2.props.columns,
              components: _this2.props.components,
              detailPanel: _this2.props.detailPanel,
              getFieldValue: _this2.props.getFieldValue,
              groupData: groupData,
              groups: groups,
              icons: _this2.props.icons,
              level: 0,
              path: [index + _this2.props.pageSize * _this2.props.currentPage],
              onGroupExpandChanged: _this2.props.onGroupExpandChanged,
              onRowSelected: _this2.props.onRowSelected,
              onRowClick: _this2.props.onRowClick,
              onEditingCanceled: _this2.props.onEditingCanceled,
              onEditingApproved: _this2.props.onEditingApproved,
              onToggleDetailPanel: _this2.props.onToggleDetailPanel,
              onTreeExpandChanged: _this2.props.onTreeExpandChanged,
              options: _this2.props.options,
              isTreeData: _this2.props.isTreeData,
              hasAnyEditingRow: _this2.props.hasAnyEditingRow,
              localization: _objectSpread(
                {},
                MTableBody.defaultProps.localization.editRow,
                _this2.props.localization.editRow,
                {
                  dateTimePickerLocalization:
                    _this2.props.localization.dateTimePickerLocalization,
                }
              ),
              cellEditable: _this2.props.cellEditable,
              onCellEditStarted: _this2.props.onCellEditStarted,
              onCellEditFinished: _this2.props.onCellEditFinished,
              onBulkEditRowChanged: _this2.props.onBulkEditRowChanged,
              scrollWidth: _this2.props.scrollWidth,
            }
          );
        });
      },
    },
    {
      key: "render",
      value: function render() {
        var renderData = this.props.renderData;
        var groups = this.props.columns
          .filter(function (col) {
            return col.tableData.groupOrder > -1;
          })
          .sort(function (col1, col2) {
            return col1.tableData.groupOrder - col2.tableData.groupOrder;
          });
        var emptyRowCount = 0;
        if (this.props.options.paging) {
          emptyRowCount = this.props.pageSize - renderData.length;
        }
        return /*#__PURE__*/ React.createElement(
          TableBody,
          null,
          this.props.options.filtering &&
            /*#__PURE__*/ React.createElement(this.props.components.FilterRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              icons: this.props.icons,
              hasActions:
                this.props.actions.filter(function (a) {
                  return a.position === "row" || typeof a === "function";
                }).length > 0,
              actionsColumnIndex: this.props.options.actionsColumnIndex,
              onFilterChanged: this.props.onFilterChanged,
              selection: this.props.options.selection,
              localization: _objectSpread(
                {},
                MTableBody.defaultProps.localization.filterRow,
                this.props.localization.filterRow,
                {
                  dateTimePickerLocalization: this.props.localization
                    .dateTimePickerLocalization,
                }
              ),
              hasDetailPanel: !!this.props.detailPanel,
              detailPanelColumnAlignment: this.props.options
                .detailPanelColumnAlignment,
              isTreeData: this.props.isTreeData,
              filterCellStyle: this.props.options.filterCellStyle,
              filterRowStyle: this.props.options.filterRowStyle,
              hideFilterIcons: this.props.options.hideFilterIcons,
              scrollWidth: this.props.scrollWidth,
            }),
          this.props.showAddRow &&
            this.props.options.addRowPosition === "first" &&
            /*#__PURE__*/ React.createElement(this.props.components.EditRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              data: this.props.initialFormData,
              components: this.props.components,
              errorState: this.props.errorState,
              icons: this.props.icons,
              key: "key-add-row",
              mode: "add",
              localization: _objectSpread(
                {},
                MTableBody.defaultProps.localization.editRow,
                this.props.localization.editRow,
                {
                  dateTimePickerLocalization: this.props.localization
                    .dateTimePickerLocalization,
                }
              ),
              options: this.props.options,
              isTreeData: this.props.isTreeData,
              detailPanel: this.props.detailPanel,
              onEditingCanceled: this.props.onEditingCanceled,
              onEditingApproved: this.props.onEditingApproved,
              getFieldValue: this.props.getFieldValue,
              scrollWidth: this.props.scrollWidth,
            }),
          groups.length > 0
            ? this.renderGroupedRows(groups, renderData)
            : this.renderUngroupedRows(renderData),
          this.props.showAddRow &&
            this.props.options.addRowPosition === "last" &&
            /*#__PURE__*/ React.createElement(this.props.components.EditRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              data: this.props.initialFormData,
              components: this.props.components,
              errorState: this.props.errorState,
              icons: this.props.icons,
              key: "key-add-row",
              mode: "add",
              localization: _objectSpread(
                {},
                MTableBody.defaultProps.localization.editRow,
                this.props.localization.editRow,
                {
                  dateTimePickerLocalization: this.props.localization
                    .dateTimePickerLocalization,
                }
              ),
              options: this.props.options,
              isTreeData: this.props.isTreeData,
              detailPanel: this.props.detailPanel,
              onEditingCanceled: this.props.onEditingCanceled,
              onEditingApproved: this.props.onEditingApproved,
              getFieldValue: this.props.getFieldValue,
              scrollWidth: this.props.scrollWidth,
            }),
          this.renderEmpty(emptyRowCount, renderData)
        );
      },
    },
  ]);
})(React.Component);
MTableBody.defaultProps = {
  actions: [],
  currentPage: 0,
  pageSize: 5,
  renderData: [],
  selection: false,
  localization: {
    emptyDataSourceMessage: "No records to display",
    filterRow: {},
    editRow: {},
  },
};
MTableBody.propTypes = {
  actions: PropTypes.array,
  components: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  detailPanel: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
  ]),
  getFieldValue: PropTypes.func.isRequired,
  hasAnyEditingRow: PropTypes.bool,
  hasDetailPanel: PropTypes.bool.isRequired,
  icons: PropTypes.object.isRequired,
  isTreeData: PropTypes.bool.isRequired,
  onRowSelected: PropTypes.func,
  options: PropTypes.object.isRequired,
  pageSize: PropTypes.number,
  renderData: PropTypes.array,
  initialFormData: PropTypes.object,
  selection: PropTypes.bool.isRequired,
  scrollWidth: PropTypes.number.isRequired,
  showAddRow: PropTypes.bool,
  treeDataMaxLevel: PropTypes.number,
  localization: PropTypes.object,
  onFilterChanged: PropTypes.func,
  onGroupExpandChanged: PropTypes.func,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onTreeExpandChanged: PropTypes.func.isRequired,
  onRowClick: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  onEditingApproved: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cellEditable: PropTypes.object,
  onCellEditStarted: PropTypes.func,
  onCellEditFinished: PropTypes.func,
  bulkEditOpen: PropTypes.bool,
  onBulkEditRowChanged: PropTypes.func,
};
export default MTableBody;
