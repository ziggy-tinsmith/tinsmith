function feature46() {
  var parameters = extractParameters(["K", "G", "L", "V", "T"]);
  return feature46_core(parameters);
}

function feature46_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K")
  var G = getParameter(parameters, "G")
  var L = getParameter(parameters, "L")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var N = K / 2.0
  var M = G / 2.0
  var theta = Math.asin(V / L) / Rad
  L = L * Math.cos(theta * Rad)
  var B = N * Math.cos(theta * Rad)
  var C = N * Math.sin(theta * Rad)
  // 1
  result["ZMKS"] = K * Math.PI / T
  result["ZMGS"] = G * Math.PI / T
  // 0
  var l1 = [];
  var l2 = [];
  l1.push(Math.sqrt(Math.pow(B - M + V, 2.0) + Math.pow(L - C, 2.0)))
  for (var X = 1.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var O = 360.0 / T
    var E = F - O
    var Q = Math.sqrt(Math.pow(B * Math.cos(F * Rad) - M * Math.cos(E * Rad) + V, 2.0) + Math.pow(N * Math.sin(F * Rad) - M * Math.sin(E * Rad), 2.0) + Math.pow(L - C * Math.cos(F * Rad), 2.0))
    l2.push(Q)
    Q = Math.sqrt(Math.pow(B * Math.cos(F * Rad) - M * Math.cos(F * Rad) + V, 2.0) + Math.pow(N * Math.sin(F * Rad) - M * Math.sin(F * Rad), 2.0) + Math.pow(L - C * Math.cos(F * Rad), 2.0))
    l1.push(Q)
  }
  result["L1"] = l1
  result["L2"] = l2
  var m1 = [];
  var m2 = [];
  m1.push(0.0)
  for (var X = (T / 4.0) + 1.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var O = 360.0 / T
    var E = F - O
    var Q = ((-M * Math.cos(E * Rad)) / (B * Math.cos(F * Rad) - M * Math.cos(E * Rad) + V)) * Math.sqrt(Math.pow(B * Math.cos(F * Rad) - M * Math.cos(E * Rad) + V, 2.0) + Math.pow(N * Math.sin(F * Rad) - M * Math.sin(E * Rad), 2.0) + Math.pow(L - C * Math.cos(F * Rad), 2.0))
    m2.push(Q)
    Q = ((-M * Math.cos(F * Rad)) / (B * Math.cos(F * Rad) - M * Math.cos(F * Rad) + V)) * Math.sqrt(Math.pow(B * Math.cos(F * Rad) - M * Math.cos(F * Rad) + V, 2.0) + Math.pow(N * Math.sin(F * Rad) - M * Math.sin(F * Rad), 2.0) + Math.pow(L - C * Math.cos(F * Rad), 2.0))
    m1.push(Q)
  }
  result["M1"] = m1
  result["M2"] = m2
  return result;
}
