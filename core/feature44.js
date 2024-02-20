function feature44() {
  var parameters = extractParameters(["D", "L", "V", "T", "LL"]);
  return feature44_core(parameters);
}

function feature44_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var L = getParameter(parameters, "L")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var C = Math.asin(V / L) / Rad
  var A = C / 2.0
  var B = 90.0 - C
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var pb = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - r * Math.tan(A * Rad) * Math.cos(F * Rad)
    pb.push(Q)
  }
  for (var X = 1.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - r * Math.tan(B * Rad) * Math.cos((90.0 - F) * Rad)
    pb.push(Q)
  }
  result["PointsB"] = pb
  L = getParameter(parameters, "LL")
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - r * Math.tan(A * Rad) * Math.cos(F * Rad)
    pa.push(Q)
  }
  result["PointsA"] = pa
  return result;
}
