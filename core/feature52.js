function feature52() {
  var parameters = extractParameters(["K", "G", "L", "D", "E", "T"]);
  return feature52_core(parameters);
}

function feature52_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K")
  var G = getParameter(parameters, "G")
  var L = getParameter(parameters, "L")
  var D = getParameter(parameters, "D")
  var E = getParameter(parameters, "E")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var N = K / 2.0
  var R = G / 2.0
  var r = D / 2.0
  var B = Math.atan((R - N) / L) / Rad
  var M = R + E * Math.sin(B * Rad)
  var W = 1.0 / Math.tan(B * Rad)
  var U = 1.0 / Math.sin(B * Rad)
  var V = (180.0 / T) * Math.sin(B * Rad)
  var H = N * W
  var C = M * U
  var P = Math.PI / 180.0
  result["SR"] = N * U
  result["BR"] = M * U
  result["KS"] = 2.0 * N * U * Math.sin(V * Rad)
  result["GS"] = 2.0 * M * U * Math.sin(V * Rad)
  var pl = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var A = H * W + Math.sqrt((Math.pow(r, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(r, 2.0) * Math.pow(W, 2.0))
    var O = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0))
    var Q = C - A / O
    pl.push(Q)
  }
  result["PointsL"] = pl
  var b = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var A = H * W + Math.sqrt((Math.pow(r, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(r, 2.0) * Math.pow(W, 2.0))
    var O = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0))
    var Q = r * (Math.asin(((A / O) / r) * Math.sin(B * Rad) * Math.cos(F * Rad)) / Rad) * P
    b.push(Q)
  }
  result["B"] = b
  var h = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var A = H * W + Math.sqrt((Math.pow(r, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(r, 2.0) * Math.pow(W, 2.0))
    var O = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0))
    var Q = (A / O) * Math.sin(B * Rad) * Math.sin(F * Rad)
    h.push(Q)
  }
  result["H"] = h
  return result;
}
