import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = [
    "columnDef",
    "rowData",
    "onRowDataChange",
    "errorState",
    "onBulkEditRowChanged",
    "scrollWidth",
  ],
  _excluded2 = ["helperText", "error"],
  _excluded3 = ["helperText", "error"];
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
import * as React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@mui/lab";
import PropTypes from "prop-types";
var MTableEditField = /*#__PURE__*/ (function (_React$Component) {
  function MTableEditField() {
    _classCallCheck(this, MTableEditField);
    return _callSuper(this, MTableEditField, arguments);
  }
  _inherits(MTableEditField, _React$Component);
  return _createClass(MTableEditField, [
    {
      key: "getProps",
      value: function getProps() {
        var _this$props = this.props,
          columnDef = _this$props.columnDef,
          rowData = _this$props.rowData,
          onRowDataChange = _this$props.onRowDataChange,
          errorState = _this$props.errorState,
          onBulkEditRowChanged = _this$props.onBulkEditRowChanged,
          scrollWidth = _this$props.scrollWidth,
          props = _objectWithoutProperties(_this$props, _excluded);
        return props;
      },
    },
    {
      key: "renderLookupField",
      value: function renderLookupField() {
        var _this = this;
        var _this$getProps = this.getProps(),
          helperText = _this$getProps.helperText,
          error = _this$getProps.error,
          props = _objectWithoutProperties(_this$getProps, _excluded2);
        return /*#__PURE__*/ React.createElement(
          FormControl,
          {
            error: Boolean(error),
          },
          /*#__PURE__*/ React.createElement(
            Select,
            _extends({}, props, {
              value: this.props.value === undefined ? "" : this.props.value,
              onChange: function onChange(event) {
                return _this.props.onChange(event.target.value);
              },
              style: {
                fontSize: 13,
              },
              SelectDisplayProps: {
                "aria-label": this.props.columnDef.title,
              },
            }),
            Object.keys(this.props.columnDef.lookup).map(function (key) {
              return /*#__PURE__*/ React.createElement(
                MenuItem,
                {
                  key: key,
                  value: key,
                },
                _this.props.columnDef.lookup[key]
              );
            })
          ),
          Boolean(helperText) &&
            /*#__PURE__*/ React.createElement(FormHelperText, null, helperText)
        );
      },
    },
    {
      key: "renderBooleanField",
      value: function renderBooleanField() {
        var _this2 = this;
        var _this$getProps2 = this.getProps(),
          helperText = _this$getProps2.helperText,
          error = _this$getProps2.error,
          props = _objectWithoutProperties(_this$getProps2, _excluded3);
        return /*#__PURE__*/ React.createElement(
          FormControl,
          {
            error: Boolean(error),
            component: "fieldset",
          },
          /*#__PURE__*/ React.createElement(
            FormGroup,
            null,
            /*#__PURE__*/ React.createElement(FormControlLabel, {
              label: "",
              control: /*#__PURE__*/ React.createElement(
                Checkbox,
                _extends({}, props, {
                  value: String(this.props.value),
                  checked: Boolean(this.props.value),
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event.target.checked);
                  },
                  style: {
                    padding: 0,
                    width: 24,
                    marginLeft: 9,
                  },
                  inputProps: {
                    "aria-label": this.props.columnDef.title,
                  },
                })
              ),
            })
          ),
          /*#__PURE__*/ React.createElement(FormHelperText, null, helperText)
        );
      },
    },
    {
      key: "renderDateField",
      value: function renderDateField() {
        var dateFormat =
          this.props.columnDef.dateSetting &&
          this.props.columnDef.dateSetting.format
            ? this.props.columnDef.dateSetting.format
            : "dd.MM.yyyy";
        return /*#__PURE__*/ React.createElement(
          LocalizationProvider,
          {
            dateAdapter: AdapterDateFns,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            DatePicker,
            _extends({}, this.getProps(), {
              format: dateFormat,
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderTimeField",
      value: function renderTimeField() {
        return /*#__PURE__*/ React.createElement(
          LocalizationProvider,
          {
            dateAdapter: AdapterDateFns,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            TimePicker,
            _extends({}, this.getProps(), {
              format: "HH:mm:ss",
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderDateTimeField",
      value: function renderDateTimeField() {
        return /*#__PURE__*/ React.createElement(
          LocalizationProvider,
          {
            dateAdapter: AdapterDateFns,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            DateTimePicker,
            _extends({}, this.getProps(), {
              format: "dd.MM.yyyy HH:mm:ss",
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderTextField",
      value: function renderTextField() {
        var _this3 = this;
        return /*#__PURE__*/ React.createElement(
          TextField,
          _extends({}, this.getProps(), {
            fullWidth: true,
            style:
              this.props.columnDef.type === "numeric"
                ? {
                    float: "right",
                  }
                : {},
            type: this.props.columnDef.type === "numeric" ? "number" : "text",
            placeholder:
              this.props.columnDef.editPlaceholder ||
              this.props.columnDef.title,
            value: this.props.value === undefined ? "" : this.props.value,
            onChange: function onChange(event) {
              return _this3.props.onChange(
                _this3.props.columnDef.type === "numeric"
                  ? event.target.valueAsNumber
                  : event.target.value
              );
            },
            InputProps: {
              style: {
                fontSize: 13,
              },
            },
            inputProps: {
              "aria-label": this.props.columnDef.title,
            },
          })
        );
      },
    },
    {
      key: "renderCurrencyField",
      value: function renderCurrencyField() {
        var _this4 = this;
        return /*#__PURE__*/ React.createElement(
          TextField,
          _extends({}, this.getProps(), {
            placeholder:
              this.props.columnDef.editPlaceholder ||
              this.props.columnDef.title,
            style: {
              float: "right",
            },
            type: "number",
            value: this.props.value === undefined ? "" : this.props.value,
            onChange: function onChange(event) {
              var value = event.target.valueAsNumber;
              if (!value && value !== 0) {
                value = undefined;
              }
              return _this4.props.onChange(value);
            },
            InputProps: {
              style: {
                fontSize: 13,
                textAlign: "right",
              },
            },
            inputProps: {
              "aria-label": this.props.columnDef.title,
            },
            onKeyDown: this.props.onKeyDown,
            autoFocus: this.props.autoFocus,
          })
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var component = "ok";
        if (this.props.columnDef.lookup) {
          component = this.renderLookupField();
        } else if (this.props.columnDef.type === "boolean") {
          component = this.renderBooleanField();
        } else if (this.props.columnDef.type === "date") {
          component = this.renderDateField();
        } else if (this.props.columnDef.type === "time") {
          component = this.renderTimeField();
        } else if (this.props.columnDef.type === "datetime") {
          component = this.renderDateTimeField();
        } else if (this.props.columnDef.type === "currency") {
          component = this.renderCurrencyField();
        } else {
          component = this.renderTextField();
        }
        return component;
      },
    },
  ]);
})(React.Component);
MTableEditField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  columnDef: PropTypes.object.isRequired,
  locale: PropTypes.object,
};
export default MTableEditField;
