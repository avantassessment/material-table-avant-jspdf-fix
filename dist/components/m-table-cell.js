import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = [
  "icons",
  "columnDef",
  "rowData",
  "errorState",
  "cellEditable",
  "onCellEditStarted",
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
import * as React from "react";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import parseISO from "date-fns/parseISO";
import * as CommonValues from "../utils/common-values";

/* eslint-enable no-unused-vars */

/* eslint-disable no-useless-escape */
var isoDateRegex = /^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])([T\s](([01]\d|2[0-3])\:[0-5]\d|24\:00)(\:[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3])\:?([0-5]\d)?)?)?$/;
/* eslint-enable no-useless-escape */
var MTableCell = /*#__PURE__*/ (function (_React$Component) {
  function MTableCell() {
    var _this;
    _classCallCheck(this, MTableCell);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableCell, [].concat(args));
    _defineProperty(_this, "handleClickCell", function (e) {
      if (_this.props.columnDef.disableClick) {
        e.stopPropagation();
      }
    });
    _defineProperty(_this, "getStyle", function () {
      var width = CommonValues.reducePercentsInCalc(
        _this.props.columnDef.tableData.width,
        _this.props.scrollWidth
      );
      var cellStyle = {
        color: "inherit",
        width: width,
        maxWidth: _this.props.columnDef.maxWidth,
        minWidth: _this.props.columnDef.minWidth,
        boxSizing: "border-box",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit",
      };
      if (typeof _this.props.columnDef.cellStyle === "function") {
        cellStyle = _objectSpread(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle(
            _this.props.value,
            _this.props.rowData
          )
        );
      } else {
        cellStyle = _objectSpread(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle
        );
      }
      if (_this.props.columnDef.disableClick) {
        cellStyle.cursor = "default";
      }
      return _objectSpread({}, _this.props.style, cellStyle);
    });
    return _this;
  }
  _inherits(MTableCell, _React$Component);
  return _createClass(MTableCell, [
    {
      key: "getRenderValue",
      value: function getRenderValue() {
        var dateLocale =
          this.props.columnDef.dateSetting &&
          this.props.columnDef.dateSetting.locale
            ? this.props.columnDef.dateSetting.locale
            : undefined;
        if (
          this.props.columnDef.emptyValue !== undefined &&
          (this.props.value === undefined || this.props.value === null)
        ) {
          return this.getEmptyValue(this.props.columnDef.emptyValue);
        }
        if (this.props.columnDef.render) {
          if (this.props.rowData) {
            return this.props.columnDef.render(this.props.rowData, "row");
          } else if (this.props.value) {
            return this.props.columnDef.render(this.props.value, "group");
          }
        } else if (this.props.columnDef.type === "boolean") {
          var style = {
            textAlign: "left",
            verticalAlign: "middle",
            width: 48,
          };
          if (this.props.value) {
            return /*#__PURE__*/ React.createElement(this.props.icons.Check, {
              style: style,
            });
          } else {
            return /*#__PURE__*/ React.createElement(
              this.props.icons.ThirdStateCheck,
              {
                style: style,
              }
            );
          }
        } else if (this.props.columnDef.type === "date") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleDateString(dateLocale);
          } else if (isoDateRegex.exec(this.props.value)) {
            return parseISO(this.props.value).toLocaleDateString(dateLocale);
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "time") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleTimeString();
          } else if (isoDateRegex.exec(this.props.value)) {
            return parseISO(this.props.value).toLocaleTimeString(dateLocale);
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "datetime") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleString();
          } else if (isoDateRegex.exec(this.props.value)) {
            return parseISO(this.props.value).toLocaleString(dateLocale);
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "currency") {
          return this.getCurrencyValue(
            this.props.columnDef.currencySetting,
            this.props.value
          );
        } else if (typeof this.props.value === "boolean") {
          // To avoid forwardref boolean children.
          return this.props.value.toString();
        }
        return this.props.value;
      },
    },
    {
      key: "getEmptyValue",
      value: function getEmptyValue(emptyValue) {
        if (typeof emptyValue === "function") {
          return this.props.columnDef.emptyValue(this.props.rowData);
        } else {
          return emptyValue;
        }
      },
    },
    {
      key: "getCurrencyValue",
      value: function getCurrencyValue(currencySetting, value) {
        if (currencySetting !== undefined) {
          return new Intl.NumberFormat(
            currencySetting.locale !== undefined
              ? currencySetting.locale
              : "en-US",
            {
              style: "currency",
              currency:
                currencySetting.currencyCode !== undefined
                  ? currencySetting.currencyCode
                  : "USD",
              minimumFractionDigits:
                currencySetting.minimumFractionDigits !== undefined
                  ? currencySetting.minimumFractionDigits
                  : 2,
              maximumFractionDigits:
                currencySetting.maximumFractionDigits !== undefined
                  ? currencySetting.maximumFractionDigits
                  : 2,
            }
          ).format(value !== undefined ? value : 0);
        } else {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(value !== undefined ? value : 0);
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          icons = _this$props.icons,
          columnDef = _this$props.columnDef,
          rowData = _this$props.rowData,
          errorState = _this$props.errorState,
          cellEditable = _this$props.cellEditable,
          onCellEditStarted = _this$props.onCellEditStarted,
          scrollWidth = _this$props.scrollWidth,
          cellProps = _objectWithoutProperties(_this$props, _excluded);
        var cellAlignment =
          columnDef.align !== undefined
            ? columnDef.align
            : ["numeric", "currency"].indexOf(this.props.columnDef.type) !== -1
            ? "right"
            : "left";
        var renderValue = this.getRenderValue();
        if (cellEditable) {
          renderValue = /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                borderBottom: "1px dashed grey",
                cursor: "pointer",
                width: "max-content",
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                onCellEditStarted(_this2.props.rowData, _this2.props.columnDef);
              },
            },
            renderValue
          );
        }
        return /*#__PURE__*/ React.createElement(
          TableCell,
          _extends(
            {
              size: this.props.size,
            },
            cellProps,
            {
              style: this.getStyle(),
              align: cellAlignment,
              onClick: this.handleClickCell,
            }
          ),
          this.props.children,
          renderValue
        );
      },
    },
  ]);
})(React.Component);
export { MTableCell as default };
MTableCell.defaultProps = {
  columnDef: {},
  value: undefined,
};
MTableCell.propTypes = {
  columnDef: PropTypes.object.isRequired,
  value: PropTypes.any,
  rowData: PropTypes.object,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
