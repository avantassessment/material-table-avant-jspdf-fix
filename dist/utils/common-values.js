export var elementSize = function elementSize(props) {
  return props.options.padding === "default" ? "medium" : "small";
};
export var baseIconSize = function baseIconSize(props) {
  return elementSize(props) === "medium" ? 48 : 32;
};
export var rowActions = function rowActions(props) {
  return props.actions.filter(function (a) {
    return a.position === "row" || typeof a === "function";
  });
};
export var actionsColumnWidth = function actionsColumnWidth(props) {
  return rowActions(props).length * baseIconSize(props);
};
export var selectionMaxWidth = function selectionMaxWidth(props, maxTreeLevel) {
  return baseIconSize(props) + 9 * maxTreeLevel;
};
export var reducePercentsInCalc = function reducePercentsInCalc(
  calc,
  fullValue
) {
  var captureGroups = calc.match(/(\d*)%/);
  if (captureGroups && captureGroups.length > 1) {
    var percentage = captureGroups[1];
    return calc.replace(
      /\d*%/,
      "".concat(fullValue * (percentage / 100), "px")
    );
  }
  return calc.replace(/\d*%/, "".concat(fullValue, "px"));
};
