function feature07() {
  var parameters = extractParameters(["D", "A", "E"]);
  return feature07_core(parameters);
}

function feature07_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var E = getParameter(parameters, "E");
  var result = {};
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var B = Math.atan(r / A) / Rad;
  var U = 1.0 / Math.sin(B * Rad);
  var V = 180.0 * Math.sin(B * Rad);
  result["Radius"] = [
    r * U,
    r * U + E,
  ];
  result["C"] = 2.0 * r * U * Math.sin((V / 3.0) * Rad);
  result["S"] = 2.0 * r * U * Math.sin(V * Rad);
  return result;
}
