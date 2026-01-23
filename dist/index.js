import _extends from "@babel/runtime/helpers/extends";
import "./utils/polyfill";
import React from "react";
import { defaultProps } from "./default-props";
import { propTypes } from "./prop-types";
import MaterialTable from "./material-table";
import { withStyles } from "@mui/styles";
MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;
export { MaterialTable as MTable };
var styles = function styles(theme) {
  return {
    paginationRoot: {
      width: "100%",
    },
    paginationToolbar: {
      padding: 0,
      width: "100%",
    },
    paginationCaption: {
      display: "none",
    },
    paginationSelectRoot: {
      margin: 0,
    },
  };
};
export default withStyles(styles, {
  withTheme: true,
})(function (props) {
  return /*#__PURE__*/ React.createElement(
    MaterialTable,
    _extends({}, props, {
      ref: props.tableRef,
    })
  );
});
export * from "./components";
