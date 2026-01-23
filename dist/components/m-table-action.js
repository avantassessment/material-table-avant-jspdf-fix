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
import * as React from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
/* eslint-enable no-unused-vars */
var MTableAction = /*#__PURE__*/ (function (_React$Component) {
  function MTableAction() {
    _classCallCheck(this, MTableAction);
    return _callSuper(this, MTableAction, arguments);
  }
  _inherits(MTableAction, _React$Component);
  return _createClass(MTableAction, [
    {
      key: "render",
      value: function render() {
        var _this = this;
        var action = this.props.action;
        if (typeof action === "function") {
          action = action(this.props.data);
          if (!action) {
            return null;
          }
        }
        if (action.action) {
          action = action.action(this.props.data);
          if (!action) {
            return null;
          }
        }
        if (action.hidden) {
          return null;
        }
        var disabled = action.disabled || this.props.disabled;
        var handleOnClick = function handleOnClick(event) {
          if (action.onClick) {
            action.onClick(event, _this.props.data);
            event.stopPropagation();
          }
        };
        var icon =
          typeof action.icon === "string"
            ? /*#__PURE__*/ React.createElement(
                Icon,
                action.iconProps,
                action.icon
              )
            : typeof action.icon === "function"
            ? action.icon(
                _objectSpread({}, action.iconProps, {
                  disabled: disabled,
                })
              )
            : /*#__PURE__*/ React.createElement(action.icon, null);
        var button = /*#__PURE__*/ React.createElement(
          IconButton,
          {
            size: this.props.size,
            color: "inherit",
            disabled: disabled,
            onClick: handleOnClick,
          },
          icon
        );
        if (action.tooltip) {
          // fix for issue #1049
          // https://github.com/mbrn/material-table/issues/1049
          return disabled
            ? /*#__PURE__*/ React.createElement(
                Tooltip,
                {
                  title: action.tooltip,
                },
                /*#__PURE__*/ React.createElement("span", null, button)
              )
            : /*#__PURE__*/ React.createElement(
                Tooltip,
                {
                  title: action.tooltip,
                },
                button
              );
        } else {
          return button;
        }
      },
    },
  ]);
})(React.Component);
MTableAction.defaultProps = {
  action: {},
  data: {},
};
MTableAction.propTypes = {
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
export default MTableAction;
