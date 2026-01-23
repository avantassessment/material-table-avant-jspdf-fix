import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _extends from "@babel/runtime/helpers/extends";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import * as MComponents from "./components";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
var OverlayLoading = function OverlayLoading(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: alpha(props.theme.palette.background.paper, 0.7),
      },
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          display: "table-cell",
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          textAlign: "center",
        },
      },
      /*#__PURE__*/ React.createElement(CircularProgress, null)
    )
  );
};
OverlayLoading.propTypes = {
  theme: PropTypes.any,
};
var OverlayError = function OverlayError(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: alpha(props.theme.palette.background.paper, 0.7),
      },
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          display: "table-cell",
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          textAlign: "center",
        },
      },
      /*#__PURE__*/ React.createElement("span", null, props.error.message),
      " ",
      /*#__PURE__*/ React.createElement(props.icon, {
        onClick: props.retry,
        style: {
          cursor: "pointer",
          position: "relative",
          top: 5,
        },
      })
    )
  );
};
OverlayError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  retry: PropTypes.func,
  theme: PropTypes.any,
  icon: PropTypes.any,
};
var Container = function Container(props) {
  return /*#__PURE__*/ React.createElement(
    Paper,
    _extends(
      {
        elevation: 2,
      },
      props
    )
  );
};
export var defaultProps = {
  actions: [],
  classes: {},
  columns: [],
  components: {
    Action: MComponents.MTableAction,
    Actions: MComponents.MTableActions,
    Body: MComponents.MTableBody,
    Cell: MComponents.MTableCell,
    Container: Container,
    EditCell: MComponents.MTableEditCell,
    EditField: MComponents.MTableEditField,
    EditRow: MComponents.MTableEditRow,
    FilterRow: MComponents.MTableFilterRow,
    Groupbar: MComponents.MTableGroupbar,
    GroupRow: MComponents.MTableGroupRow,
    Header: MComponents.MTableHeader,
    OverlayLoading: OverlayLoading,
    OverlayError: OverlayError,
    Pagination: TablePagination,
    Row: MComponents.MTableBodyRow,
    Toolbar: MComponents.MTableToolbar,
  },
  data: [],
  icons: {
    /* eslint-disable react/display-name */
    Add: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "add_box"
      );
    }),
    Check: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "check"
      );
    }),
    Clear: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "clear"
      );
    }),
    Delete: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "delete_outline"
      );
    }),
    DetailPanel: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "chevron_right"
      );
    }),
    Edit: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "edit"
      );
    }),
    Export: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "save_alt"
      );
    }),
    Filter: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "filter_list"
      );
    }),
    FirstPage: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "first_page"
      );
    }),
    LastPage: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "last_page"
      );
    }),
    NextPage: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "chevron_right"
      );
    }),
    PreviousPage: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "chevron_left"
      );
    }),
    ResetSearch: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "clear"
      );
    }),
    Resize: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
          style: _objectSpread({}, props.style, {
            transform: "rotate(90deg)",
          }),
        }),
        "drag_handle"
      );
    }),
    Search: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "search"
      );
    }),
    SortArrow: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "arrow_downward"
      );
    }),
    ThirdStateCheck: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "remove"
      );
    }),
    ViewColumn: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "view_column"
      );
    }),
    Retry: React.forwardRef(function (props, ref) {
      return /*#__PURE__*/ React.createElement(
        Icon,
        _extends({}, props, {
          ref: ref,
        }),
        "replay"
      );
    }),
    /* eslint-enable react/display-name */
  },
  isLoading: false,
  title: "Table Title",
  options: {
    actionsColumnIndex: 0,
    addRowPosition: "last",
    columnsButton: false,
    detailPanelType: "multiple",
    debounceInterval: 200,
    doubleHorizontalScroll: false,
    emptyRowsWhenPaging: true,
    exportAllData: false,
    exportButton: false,
    exportDelimiter: ",",
    filtering: false,
    groupTitle: false,
    header: true,
    headerSelectionProps: {},
    hideFilterIcons: false,
    loadingType: "overlay",
    padding: "default",
    searchAutoFocus: false,
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    paginationType: "normal",
    paginationPosition: "bottom",
    showEmptyDataSourceMessage: true,
    showFirstLastPageButtons: true,
    showSelectAllCheckbox: true,
    search: true,
    showTitle: true,
    showTextRowsSelected: true,
    tableLayout: "auto",
    toolbarButtonAlignment: "right",
    searchFieldAlignment: "right",
    searchFieldStyle: {},
    searchFieldVariant: "standard",
    selection: false,
    selectionProps: {},
    sorting: true,
    toolbar: true,
    defaultExpanded: false,
    detailPanelColumnAlignment: "left",
    thirdSortClick: true,
    overflowY: "auto",
  },
  localization: {
    error: "Data could not be retrieved",
    grouping: {
      groupedBy: "Grouped By:",
      placeholder: "Drag headers here to group by",
    },
    pagination: {
      labelDisplayedRows: "{from}-{to} of {count}",
      labelRowsPerPage: "Rows per page:",
      labelRowsSelect: "rows",
    },
    toolbar: {},
    header: {},
    body: {
      filterRow: {},
      editRow: {
        saveTooltip: "Save",
        cancelTooltip: "Cancel",
        deleteText: "Are you sure you want to delete this row?",
      },
      addTooltip: "Add",
      deleteTooltip: "Delete",
      editTooltip: "Edit",
      bulkEditTooltip: "Edit All",
      bulkEditApprove: "Save all changes",
      bulkEditCancel: "Discard all changes",
    },
  },
  style: {},
};
