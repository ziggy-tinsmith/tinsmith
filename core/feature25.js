function feature25() {
  var parameters = extractParameters(["K", "G", "L", "D", "E", "T"]);
  return feature25_core(parameters);
}

function feature25_core(parameters) {
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
  var M = G / 2.0
  var B = Math.atan((M - N) / L) / Rad
  var R = M + E * Math.sin(B * Rad)
  var U = 1.0 / Math.sin(B * Rad)
  var V = 180.0 * Math.sin(B * Rad)
  var H = R * (1.0 / Math.tan(B * Rad))
  var r = D / 2.0
  result["KS"] = 2 * N * U * Math.sin((V / T) * Rad)
  result["GS"] = 2 * R * U * Math.sin((V / T) * Rad)
  var rk = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var W = Math.acos(R * Math.sin(F * Rad) / r) / Rad
    var Q = (N / R) * Math.sqrt(Math.pow(H - (r - r * Math.sin(W * Rad)), 2.0) + Math.pow(R * Math.cos(F * Rad), 2.0) + Math.pow(R * Math.sin(F * Rad), 2.0))
    rk.push(Q)
  }
  result["RK"] = rk
  var rg = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var W = Math.acos(R * Math.sin(F * Rad) / r) / Rad
    var Q = Math.sqrt(Math.pow(H - (r - r * Math.sin(W * Rad)), 2.0) + Math.pow(R * Math.cos(F * Rad), 2.0) + Math.pow(R * Math.sin(F * Rad), 2.0))
    rg.push(Q)
  }
  result["RG"] = rg
  return result;
}
