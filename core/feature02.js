function feature02() {
  var parameters = extractParameters(["K", "G", "D"]);
  return feature02_core(parameters);
}

function feature02_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var D = getParameter(parameters, "D");
  var result = {};
  var Rad = Math.PI / 180.0;
  var N = K / 2.0;
  var M = G / 2.0;
  var B = Math.atan((M - N) / D) / Rad;
  var U = 1.0 / Math.tan(B * Rad);
  result["R"] = (1.0 / 2.0) * (M + N) * U;
  result["A"] = B;
  return result;
}
