import _extends from "@babel/runtime/helpers/extends";
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
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
/* eslint-enable no-unused-vars */
var MTableGroupbar = /*#__PURE__*/ (function (_React$Component) {
  function MTableGroupbar(props) {
    var _this;
    _classCallCheck(this, MTableGroupbar);
    _this = _callSuper(this, MTableGroupbar, [props]);
    _defineProperty(_this, "getItemStyle", function (
      isDragging,
      draggableStyle
    ) {
      return _objectSpread(
        {
          // some basic styles to make the items look a bit nicer
          userSelect: "none",
          // padding: '8px 16px',
          margin: "0 ".concat(8, "px 0 0"),
        },
        draggableStyle
      );
    });
    _defineProperty(_this, "getListStyle", function (isDraggingOver) {
      return {
        // background: isDraggingOver ? 'lightblue' : '#0000000a',
        background: "#0000000a",
        display: "flex",
        width: "100%",
        padding: 8,
        overflow: "auto",
        border: "1px solid #ccc",
        borderStyle: "dashed",
      };
    });
    _this.state = {};
    return _this;
  }
  _inherits(MTableGroupbar, _React$Component);
  return _createClass(MTableGroupbar, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/ React.createElement(
          Toolbar,
          {
            style: {
              padding: 0,
              minHeight: "unset",
            },
          },
          /*#__PURE__*/ React.createElement(
            Droppable,
            {
              droppableId: "groups",
              direction: "horizontal",
              placeholder: "Deneme",
            },
            function (provided, snapshot) {
              return /*#__PURE__*/ React.createElement(
                "div",
                {
                  ref: provided.innerRef,
                  style: _this2.getListStyle(snapshot.isDraggingOver),
                },
                _this2.props.groupColumns.length > 0 &&
                  /*#__PURE__*/ React.createElement(
                    Typography,
                    {
                      variant: "caption",
                      style: {
                        padding: 8,
                      },
                    },
                    _this2.props.localization.groupedBy
                  ),
                _this2.props.groupColumns.map(function (columnDef, index) {
                  return /*#__PURE__*/ React.createElement(
                    Draggable,
                    {
                      key: columnDef.tableData.id,
                      draggableId: columnDef.tableData.id.toString(),
                      index: index,
                    },
                    function (provided, snapshot) {
                      return /*#__PURE__*/ React.createElement(
                        "div",
                        _extends(
                          {
                            ref: provided.innerRef,
                          },
                          provided.draggableProps,
                          provided.dragHandleProps,
                          {
                            style: _this2.getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            ),
                          }
                        ),
                        /*#__PURE__*/ React.createElement(
                          Chip,
                          _extends({}, provided.dragHandleProps, {
                            onClick: function onClick() {
                              return _this2.props.onSortChanged(columnDef);
                            },
                            label: /*#__PURE__*/ React.createElement(
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
                                    float: "left",
                                  },
                                },
                                columnDef.title
                              ),
                              columnDef.tableData.groupSort &&
                                /*#__PURE__*/ React.createElement(
                                  _this2.props.icons.SortArrow,
                                  {
                                    style: {
                                      transition: "300ms ease all",
                                      transform:
                                        columnDef.tableData.groupSort === "asc"
                                          ? "rotate(-180deg)"
                                          : "none",
                                      fontSize: 18,
                                    },
                                  }
                                )
                            ),
                            style: {
                              boxShadow: "none",
                              textTransform: "none",
                            },
                            onDelete: function onDelete() {
                              return _this2.props.onGroupRemoved(
                                columnDef,
                                index
                              );
                            },
                          })
                        )
                      );
                    }
                  );
                }),
                _this2.props.groupColumns.length === 0 &&
                  /*#__PURE__*/ React.createElement(
                    Typography,
                    {
                      variant: "caption",
                      style: {
                        padding: 8,
                      },
                    },
                    _this2.props.localization.placeholder
                  ),
                provided.placeholder
              );
            }
          )
        );
      },
    },
  ]);
})(React.Component);
MTableGroupbar.defaultProps = {};
MTableGroupbar.propTypes = {
  localization: PropTypes.shape({
    groupedBy: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};
export default MTableGroupbar;
