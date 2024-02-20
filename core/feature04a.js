function feature04a() {
  var parameters = extractParameters(["A"]);
  return feature04a_core(parameters);
}

function feature04a_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var A = getParameter(parameters, "A");
  var result = {};
  var Rad = Math.PI / 180.0;
  var C = 400.0;
  var B = A / 2.0;
  var N = C * Math.cos(B * Rad);
  var W = 8.0 * Math.sin(B * Rad);
  result["M"] = C + N - W;
  return result;
}
