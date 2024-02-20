function feature19() {
  var parameters = extractParameters(["D", "G", "R", "A", "V", "T"]);
  return feature19_core(parameters);
}

function feature19_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var G = getParameter(parameters, "G")
  var R = getParameter(parameters, "R")
  var A = getParameter(parameters, "A")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var M = G / 2.0
  var N = R + M
  var B = Math.asin((A - r) / N) / Rad
  var L = N * Math.cos(B * Rad)
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = T; X <= T + T; X += 1.0) {
    var F = X * (360.0 / T)
    var C = R + M * Math.cos(Math.asin((r * Math.sin(F * Rad) - V) / M))
    var Q = L - C * Math.cos(Math.asin((A - r * Math.cos(F * Rad)) / C))
    p.push(Q);
  }
  result["Points"] = p
  return result;
}
