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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import * as React from "react";
/* eslint-enable no-unused-vars */
var MTablePaginationInner = /*#__PURE__*/ (function (_React$Component) {
  function MTablePaginationInner() {
    var _this;
    _classCallCheck(this, MTablePaginationInner);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTablePaginationInner, [].concat(args));
    _defineProperty(_this, "handleFirstPageButtonClick", function (event) {
      _this.props.onPageChange(event, 0);
    });
    _defineProperty(_this, "handleBackButtonClick", function (event) {
      _this.props.onPageChange(event, _this.props.page - 1);
    });
    _defineProperty(_this, "handleNextButtonClick", function (event) {
      _this.props.onPageChange(event, _this.props.page + 1);
    });
    _defineProperty(_this, "handleNumberButtonClick", function (number) {
      return function (event) {
        _this.props.onPageChange(event, number);
      };
    });
    _defineProperty(_this, "handleLastPageButtonClick", function (event) {
      _this.props.onPageChange(
        event,
        Math.max(0, Math.ceil(_this.props.count / _this.props.rowsPerPage) - 1)
      );
    });
    return _this;
  }
  _inherits(MTablePaginationInner, _React$Component);
  return _createClass(MTablePaginationInner, [
    {
      key: "renderPagesButton",
      value: function renderPagesButton(start, end) {
        var buttons = [];
        for (var p = start; p <= end; p++) {
          var buttonVariant = p === this.props.page ? "contained" : "text";
          buttons.push(
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                style: {
                  boxShadow: "none",
                  maxWidth: "30px",
                  maxHeight: "30px",
                  minWidth: "30px",
                  minHeight: "30px",
                },
                disabled: p === this.props.page,
                variant: buttonVariant,
                onClick: this.handleNumberButtonClick(p),
                key: p,
              },
              p + 1
            )
          );
        }
        return /*#__PURE__*/ React.createElement("span", null, buttons);
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          classes = _this$props.classes,
          count = _this$props.count,
          page = _this$props.page,
          rowsPerPage = _this$props.rowsPerPage,
          theme = _this$props.theme,
          showFirstLastPageButtons = _this$props.showFirstLastPageButtons;
        var localization = _objectSpread(
          {},
          MTablePaginationInner.defaultProps.localization,
          this.props.localization
        );
        var maxPages = Math.ceil(count / rowsPerPage) - 1;
        var pageStart = Math.max(page - 1, 0);
        var pageEnd = Math.min(maxPages, page + 1);
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            className: classes.root,
          },
          showFirstLastPageButtons &&
            /*#__PURE__*/ React.createElement(
              Tooltip,
              {
                title: localization.firstTooltip,
              },
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    onClick: this.handleFirstPageButtonClick,
                    disabled: page === 0,
                    "aria-label": localization.firstAriaLabel,
                    size: "large",
                  },
                  theme.direction === "rtl"
                    ? /*#__PURE__*/ React.createElement(
                        this.props.icons.LastPage,
                        null
                      )
                    : /*#__PURE__*/ React.createElement(
                        this.props.icons.FirstPage,
                        null
                      )
                )
              )
            ),
          /*#__PURE__*/ React.createElement(
            Tooltip,
            {
              title: localization.previousTooltip,
            },
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                IconButton,
                {
                  onClick: this.handleBackButtonClick,
                  disabled: page === 0,
                  "aria-label": localization.previousAriaLabel,
                  size: "large",
                },
                /*#__PURE__*/ React.createElement(
                  this.props.icons.PreviousPage,
                  null
                )
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            Hidden,
            {
              mdDown: true,
            },
            this.renderPagesButton(pageStart, pageEnd)
          ),
          /*#__PURE__*/ React.createElement(
            Tooltip,
            {
              title: localization.nextTooltip,
            },
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                IconButton,
                {
                  onClick: this.handleNextButtonClick,
                  disabled: page >= maxPages,
                  "aria-label": localization.nextAriaLabel,
                  size: "large",
                },
                /*#__PURE__*/ React.createElement(
                  this.props.icons.NextPage,
                  null
                )
              )
            )
          ),
          showFirstLastPageButtons &&
            /*#__PURE__*/ React.createElement(
              Tooltip,
              {
                title: localization.lastTooltip,
              },
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                /*#__PURE__*/ React.createElement(
                  IconButton,
                  {
                    onClick: this.handleLastPageButtonClick,
                    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                    "aria-label": localization.lastAriaLabel,
                    size: "large",
                  },
                  theme.direction === "rtl"
                    ? /*#__PURE__*/ React.createElement(
                        this.props.icons.FirstPage,
                        null
                      )
                    : /*#__PURE__*/ React.createElement(
                        this.props.icons.LastPage,
                        null
                      )
                )
              )
            )
        );
      },
    },
  ]);
})(React.Component);
var actionsStyles = function actionsStyles(theme) {
  return {
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5),
    },
  };
};
MTablePaginationInner.propTypes = {
  onPageChange: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  classes: PropTypes.object,
  localization: PropTypes.object,
  theme: PropTypes.any,
  showFirstLastPageButtons: PropTypes.bool,
};
MTablePaginationInner.defaultProps = {
  showFirstLastPageButtons: true,
  localization: {
    firstTooltip: "First Page",
    previousTooltip: "Previous Page",
    nextTooltip: "Next Page",
    lastTooltip: "Last Page",
    labelDisplayedRows: "{from}-{to} of {count}",
    labelRowsPerPage: "Rows per page:",
  },
};
var MTableSteppedPagination = withStyles(actionsStyles, {
  withTheme: true,
})(MTablePaginationInner);
export default MTableSteppedPagination;
