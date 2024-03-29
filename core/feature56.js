function feature56() {
  var parameters = extractParameters(["K", "G", "L", "A", "E", "T"]);
  return feature56_core(parameters);
}

function feature56_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var A = getParameter(parameters, "A");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var M = G / 2.0;
  var B = Math.atan((M - r) / L) / Rad;
  var N = r - E * Math.sin(B * Rad);
  var W = 1.0 / Math.tan(B * Rad);
  var U = 1.0 / Math.sin(B * Rad);
  var V = 180.0 * Math.sin(B * Rad);
  result["SR"] = N * U;
  result["BR"] = M * U;
  result["KS"] = 2.0 * N * U * Math.sin((V / T) * Rad);
  result["GS"] = 2.0 * M * U * Math.sin((V / T) * Rad);
  var pl = [];
  for (var X = T / 2.0; X <= T; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = M * (W - Math.tan(A * Rad)) / (Math.cos(B * Rad) + Math.tan(A * Rad) * Math.sin(B * Rad) * Math.cos(F * Rad)) - N * U;
    pl.push(Q);
  }
  result["PointsL"] = pl;
  return result;
}
