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
/* eslint-enable no-unused-vars */
var MTableActions = /*#__PURE__*/ (function (_React$Component) {
  function MTableActions() {
    _classCallCheck(this, MTableActions);
    return _callSuper(this, MTableActions, arguments);
  }
  _inherits(MTableActions, _React$Component);
  return _createClass(MTableActions, [
    {
      key: "render",
      value: function render() {
        var _this = this;
        if (this.props.actions) {
          return this.props.actions.map(function (action, index) {
            return /*#__PURE__*/ React.createElement(
              _this.props.components.Action,
              {
                action: action,
                key: "action-" + index,
                data: _this.props.data,
                size: _this.props.size,
                disabled: _this.props.disabled,
              }
            );
          });
        }
        return null;
      },
    },
  ]);
})(React.Component);
MTableActions.defaultProps = {
  actions: [],
  data: {},
};
MTableActions.propTypes = {
  components: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
export default MTableActions;
