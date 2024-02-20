function feature17() {
  var parameters = extractParameters(["D", "A", "G", "V", "T"]);
  return feature17_core(parameters);
}

function feature17_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var A = getParameter(parameters, "A")
  var G = getParameter(parameters, "G")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var R = G / 2.0
  var E = 1.0 / Math.sin(A * Rad)
  var I = 1.0 / Math.tan(A * Rad)
  var L = E * R + I * r
  var W = Math.asin(V / R) / Rad
  var P = Math.PI / 180.0
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T; X += 1.0) {
    var F = X * (360.0 / T)
    var N = r * Math.cos(F * Rad)
    var C = r * Math.sin(F * Rad) - V
    var theta = Math.asin(C / R) / Rad
    if (V == 0.0 && F > 180.0) {
      break
    }
    var Q = L - I * N - E * R * Math.cos(theta * Rad)
    p.push(Q)
  }
  result["Points"] = p
  var b = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = r * Math.cos(F * Rad) - V
    var theta = Math.asin(C / R) / Rad
    if (V == 0.0 && F > 90.0) {
      break
    }
    var Q = R * (W + theta) * P
    b.push(Q)
  }
  result["B"] = b
  var h = [];
  for (var X = 0.0; X <= T; X += 1.0) {
    var F = X * (360.0 / T)
    var N = r * Math.cos(F * Rad)
    var C = r * Math.sin(F * Rad) - V
    var theta = Math.asin(C / R) / Rad
    if (V == 0.0 && F > 180.0) {
      break
    }
    var Q = I * R - E * N - I * R * Math.cos(theta * Rad)
    h.push(Q)
  }
  result["H"] = h
  return result;
}
