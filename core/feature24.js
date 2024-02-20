function feature24() {
  var parameters = extractParameters(["D", "G", "A", "T"]);
  return feature24_core(parameters);
}

function feature24_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var G = getParameter(parameters, "G")
  var A = getParameter(parameters, "A")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var M = G / 2.0
  // var W = Math.asin(r / M) / Rad;
  // var E = M * Math.cos(W * Rad);
  // var B = M - E + A;
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p1 = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var R = M + 20.0
    var C = r * Math.cos(F * Rad)
    var B = Math.asin(C / R) / Rad
    var Q = R + A - R * Math.cos(B * Rad)
    p1.push(Q)
  }
  result["P1"] = p1
  var p2 = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var R = M - A
    var C = r * Math.cos(F * Rad)
    var B = Math.asin(C / R) / Rad
    var Q = R - R * Math.cos(B * Rad)
    p2.push(Q)
  }
  result["P2"] = p2
  return result;
}
