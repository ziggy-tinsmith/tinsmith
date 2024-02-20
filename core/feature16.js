function feature16() {
  var parameters = extractParameters(["D", "K", "G", "M", "T"]);
  return feature16_core(parameters);
}

function feature16_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var K = getParameter(parameters, "K")
  var G = getParameter(parameters, "G")
  var M = getParameter(parameters, "M")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var R = M / 2.0
  var A = Math.atan((G - K) / D) / Rad
  var E = 1 / Math.cos(A * Rad)
  var J = Math.asin(r * E / R) / Rad
  var V = R * Math.cos(J * Rad) * Math.sin(A * Rad)
  var W = Math.asin(V / R) / Rad
  var P = Math.PI / 180.0
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2 * Math.PI * r,
    2 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = r * Math.cos(F * Rad) - V
    var B = Math.asin(C / R) / Rad
    var Q = R - R * Math.cos(B * Rad)
    p.push(Q)
  }
  result["Points"] = p
  var b = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = r * Math.cos(F * Rad) - V
    var B = Math.asin(C / R) / Rad
    var Q = R * (W + B) * P
    b.push(Q)
  }
  result["B"] = b
  var h = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    h.push(r * Math.sin(F * Rad))

  }
  result["H"] = h
  return result;
}
