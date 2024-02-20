function feature33() {
  var parameters = extractParameters(["D", "I", "K", "S", "E", "T"]);
  return feature33_core(parameters);
}

function feature33_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var I = getParameter(parameters, "I")
  var K = getParameter(parameters, "K")
  var G = D / 2.0 + I
  var S = D * Math.PI / 400.0

  result["SS"] = S
  S = getParameter(parameters, "S")
  var E = getParameter(parameters, "E")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var R = D + 10.0 + I
  G = D / 2.0 + I
  var O = Math.asin(G / R) / Rad
  var C = K / 2.0
  var F = Math.asin(C / R) / Rad
  var V = O - F
  var P = Math.PI / 180.0
  var theta = 180.0 / S
  result["S"] = R * V * P / T
  result["CL"] = R * V * P + 7.0
  result["R"] = G * (1.0 / Math.cos(O * Rad)) + 7.0
  result["H"] = R - G * (1.0 / Math.tan(O * Rad))
  var p = [];
  for (var X = 0.0; X <= T; X += 1.0) {
    var Q = (R * Math.sin((F + X * (V / T)) * Rad)) * Math.tan(theta * Rad) + E
    p.push(Q);
  }
  result["Points"] = p
  result["Area"] = 2.0 * Math.PI * (R * Math.sin((O / 2.0) * Rad)) * R * O * P * (1.0 / Math.pow(10.0, 6.0))
  V = D + 10.0 + (I / 2.0)
  result["Volume"] = 2.0 * Math.PI * (V * Math.sin((O / 2.0) * Rad)) * V * O * P * I * (1.0 / Math.pow(10.0, 6.0))
  return result;
}
