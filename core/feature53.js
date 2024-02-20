function feature53() {
  var parameters = extractParameters(["K", "G", "L", "A", "D", "T"]);
  return feature53_core(parameters);
}

function feature53_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var A = getParameter(parameters, "A");
  var D = getParameter(parameters, "D");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var N = K / 2.0;
  var M = G / 2.0;
  var B = Math.atan((M - N) / L) / Rad;
  var V = 1.0 / Math.sin(B * Rad);
  var J = 1.0 / Math.tan(B * Rad);
  var Z = (180.0 / T) * Math.sin(B * Rad);
  var P = L * Math.sin(A * Rad);
  var C = Math.atan((M - N) / P) / Rad;
  var W = 1.0 / Math.tan(C * Rad);
  var H = M * W;
  result["SR"] = N * V;
  result["BR"] = M * V;
  result["KS"] = 2.0 * N * V * Math.sin(Z * Rad);
  result["GS"] = 2.0 * M * V * Math.sin(Z * Rad);
  var pl = [];
  for (var X = T / 4.0; X <= T - T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var E = Math.atan(M * Math.sin(F * Rad) / (M * J)) / Rad;
    var I = Math.atan(M * Math.cos(F * Rad) / (M * J)) / Rad;
    var S = H - M * Math.cos(A * Rad) * Math.sin(F * Rad);
    var theta = Math.atan(M * Math.cos(F * Rad) / S) / Rad;
    var Y = Math.acos(H * Math.tan(theta * Rad) / M) / Rad;
    var O = Math.atan(M * Math.sin(Y * Rad) / H) / Rad;
    var U = Math.atan(M * Math.cos(Y * Rad) / H) / Rad;
    var Q = (1.0 / Math.sin((A - E) * Rad)) * (1.0 / Math.cos(I * Rad)) * ((H * W - Math.sqrt((Math.pow(r, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(r, 2.0) * Math.pow(W, 2.0))) / (Math.sin(C * Rad) * (Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(W, 2.0))) * Math.cos(O * Rad) * Math.cos(U * Rad)) - N * V;
    pl.push(Q);
  }
  result["PointsL"] = pl;
  return result;
}
