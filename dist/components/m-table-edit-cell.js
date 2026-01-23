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
import * as React from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";
import { withTheme } from "@mui/styles";
import { MTable } from "..";
/* eslint-enable no-unused-vars */
var MTableEditCell = /*#__PURE__*/ (function (_React$Component) {
  function MTableEditCell(props) {
    var _this;
    _classCallCheck(this, MTableEditCell);
    _this = _callSuper(this, MTableEditCell, [props]);
    _defineProperty(_this, "getStyle", function () {
      var cellStyle = {
        boxShadow: "2px 0px 15px rgba(125,147,178,.25)",
        color: "inherit",
        width: _this.props.columnDef.tableData.width,
        boxSizing: "border-box",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit",
        padding: "0 16px",
      };
      if (typeof _this.props.columnDef.cellStyle === "function") {
        cellStyle = _objectSpread(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle(
            _this.state.value,
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
      if (typeof _this.props.cellEditable.cellStyle === "function") {
        cellStyle = _objectSpread(
          {},
          cellStyle,
          _this.props.cellEditable.cellStyle(
            _this.state.value,
            _this.props.rowData,
            _this.props.columnDef
          )
        );
      } else {
        cellStyle = _objectSpread(
          {},
          cellStyle,
          _this.props.cellEditable.cellStyle
        );
      }
      return cellStyle;
    });
    _defineProperty(_this, "handleKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.onApprove();
      } else if (e.keyCode === 27) {
        _this.onCancel();
      }
    });
    _defineProperty(_this, "onApprove", function () {
      _this.setState(
        {
          isLoading: true,
        },
        function () {
          _this.props.cellEditable
            .onCellEditApproved(
              _this.state.value,
              // newValue
              _this.props.rowData[_this.props.columnDef.field],
              // oldValue
              _this.props.rowData,
              // rowData with old value
              _this.props.columnDef // columnDef
            )
            .then(function () {
              _this.setState({
                isLoading: false,
              });
              _this.props.onCellEditFinished(
                _this.props.rowData,
                _this.props.columnDef
              );
            })
            .catch(function (error) {
              _this.setState({
                isLoading: false,
              });
            });
        }
      );
    });
    _defineProperty(_this, "onCancel", function () {
      _this.props.onCellEditFinished(
        _this.props.rowData,
        _this.props.columnDef
      );
    });
    _this.state = {
      isLoading: false,
      value: _this.props.rowData[_this.props.columnDef.field],
    };
    return _this;
  }
  _inherits(MTableEditCell, _React$Component);
  return _createClass(MTableEditCell, [
    {
      key: "renderActions",
      value: function renderActions() {
        if (this.state.isLoading) {
          return /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                width: 60,
              },
            },
            /*#__PURE__*/ React.createElement(CircularProgress, {
              size: 20,
            })
          );
        }
        var actions = [
          {
            icon: this.props.icons.Check,
            tooltip: this.props.localization.saveTooltip,
            onClick: this.onApprove,
            disabled: this.state.isLoading,
          },
          {
            icon: this.props.icons.Clear,
            tooltip: this.props.localization.cancelTooltip,
            onClick: this.onCancel,
            disabled: this.state.isLoading,
          },
        ];
        return /*#__PURE__*/ React.createElement(
          this.props.components.Actions,
          {
            actions: actions,
            components: this.props.components,
            size: "small",
          }
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/ React.createElement(
          TableCell,
          {
            size: this.props.size,
            style: this.getStyle(),
            padding: "none",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  flex: 1,
                  marginRight: 4,
                },
              },
              /*#__PURE__*/ React.createElement(
                this.props.components.EditField,
                {
                  columnDef: this.props.columnDef,
                  value: this.state.value,
                  onChange: function onChange(value) {
                    return _this2.setState({
                      value: value,
                    });
                  },
                  onKeyDown: this.handleKeyDown,
                  disabled: this.state.isLoading,
                  autoFocus: true,
                }
              )
            ),
            this.renderActions()
          )
        );
      },
    },
  ]);
})(React.Component);
MTableEditCell.defaultProps = {
  columnDef: {},
};
MTableEditCell.propTypes = {
  cellEditable: PropTypes.object.isRequired,
  columnDef: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  icons: PropTypes.object.isRequired,
  localization: PropTypes.object.isRequired,
  onCellEditFinished: PropTypes.func.isRequired,
  rowData: PropTypes.object.isRequired,
  size: PropTypes.string,
};
export default withTheme(MTableEditCell);
