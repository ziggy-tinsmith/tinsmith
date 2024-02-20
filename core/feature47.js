function feature47() {
  var parameters = extractParameters(["K", "G", "L", "V", "T"]);
  return feature47_core(parameters);
}

function feature47_core(parameters) {
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
  var W = M - N
  var C = M / W
  var I = N / M
  var Y = 2.0 * V * W
  var Z = W + V
  result["ZMKS"] = K * Math.PI / T
  result["ZMGS"] = G * Math.PI / T
  var kr = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = I * C * Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0) + Math.pow(W, 2.0) + Y * Math.cos(F * Rad))
    kr.push(Q)
  }
  result["KR"] = kr
  var gr = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = C * Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0) + Math.pow(W, 2.0) + Y * Math.cos(F * Rad))
    gr.push(Q)
  }
  result["GR"] = gr
  var ra = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = C * Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0) + Math.pow(W, 2.0) + Y * Math.cos(F * Rad)) / (1.0 + (W / V) * Math.cos(F * Rad))
    ra.push(Q)
  }
  result["RA"] = ra
  var l1 = [];
  var l2 = [];
  l1.push(Math.sqrt(Math.pow(Z, 2.0) + Math.pow(L, 2.0)))
  for (var X = 1.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var O = 360.0 / T
    var E = F - O
    var Q = Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(E * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(E * Rad), 2.0) + Math.pow(L, 2.0))
    l2.push(Q)
    Q = Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(F * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0))
    l1.push(Q)
  }
  result["L1"] = l1
  result["L2"] = l2
  var m1 = [];
  var m2 = [];
  m1.push((M / Z) * Math.sqrt(Math.pow(Z, 2.0) + Math.pow(L, 2.0)))
  for (var X = 1.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var O = 360.0 / T
    var E = F - O
    var Q = (M * Math.cos(F * Rad) / (M * Math.cos(F * Rad) - N * Math.cos(E * Rad) + V)) * Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(E * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(E * Rad), 2.0) + Math.pow(L, 2.0))
    m2.push(Q)
    Q = (M * Math.cos(F * Rad) / (M * Math.cos(F * Rad) - N * Math.cos(F * Rad) + V)) * Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(F * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0))
    m1.push(Q)
  }
  result["M1"] = m1
  result["M2"] = m2
  return result;
}
