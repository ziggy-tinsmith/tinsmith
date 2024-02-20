function feature04b() {
  var parameters = extractParameters(["M"]);
  return feature04b_core(parameters);
}

function feature04b_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var M = getParameter(parameters, "M");
  var result = {};
  var Rad = Math.PI / 180.0;
  var C = 400.0;
  var N = M - C;
  var B = Math.acos(N / C) / Rad;
  var W = 8.0 * Math.sin(B * Rad);
  var A = Math.acos((N + W) / C) / Rad;
  result["A"] = 2 * A;
  result["B"] = 90 - 2 * A;
  return result;
}
