function feature20() {
  var parameters = extractParameters(["D", "G", "R", "V", "T"]);
  return feature20_core(parameters);
}

function feature20_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var G = getParameter(parameters, "G")
  var R = getParameter(parameters, "R")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var M = G / 2.0
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = Math.sqrt(Math.pow(r, 2.0) * Math.pow(Math.sin(F * Rad), 2.0) + Math.pow(R + V - r * Math.cos(F * Rad), 2.0))
    var Q = M - M * Math.cos(Math.asin((R - C) / M))
    p.push(Q);
  }
  result["Points"] = p
  return result;
}
