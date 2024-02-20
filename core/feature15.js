function feature15() {
  var parameters = extractParameters(["D", "G", "V", "T"]);
  return feature15_core(parameters);
}

function feature15_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D")
  var G = getParameter(parameters, "G")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var result = {};
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2
  var R = G / 2
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = r * Math.cos(F * Rad) - V
    var B = Math.asin(C / R) / Rad
    if (V == 0 && F > 90.0) {
      break
    }
    var Q = R - R * Math.cos(B * Rad)
    p.push(Q)
  }
  result["Points"] = p
  var W = Math.asin(V / R) / Rad
  var P = Math.PI / 180
  var b = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var C = r * Math.cos(F * Rad) - V
    var B = Math.asin(C / R) / Rad
    if (V == 0 && F > 90.0) {
      break
    }
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
