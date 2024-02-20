function feature51() {
  var parameters = extractParameters(["K", "G", "L", "D", "E", "T"]);
  return feature51_core(parameters);
}

function feature51_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var D = getParameter(parameters, "D");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var M = G / 2.0;
  var R = D / 2.0;
  var B = Math.atan((M - r) / L) / Rad;
  var N = r - E * Math.sin(B * Rad);
  var W = 1.0 / Math.tan(B * Rad);
  var U = 1.0 / Math.sin(B * Rad);
  var V = (180.0 / T) * Math.sin(B * Rad);
  var H = M * W;
  result["SR"] = N * U;
  result["BR"] = M * U;
  result["KS"] = 2.0 * N * U * Math.sin(V * Rad);
  result["GS"] = 2.0 * M * U * Math.sin(V * Rad);
  var pl = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var A = H * W - Math.sqrt((Math.pow(R, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(R, 2.0) * Math.pow(W, 2.0));
    var P = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0));
    var C = N * U;
    var Q = A / P - C;
    pl.push(Q);
  }
  result["PointsL"] = pl;
  var h = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var A = H * W - Math.sqrt((Math.pow(R, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(R, 2.0) * Math.pow(W, 2.0));
    var P = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0));
    var Q = (A / P) * Math.sin(B * Rad) * Math.sin(F * Rad);
    h.push(Q);
  }
  result["H"] = h;
  var b = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var A = H * W - Math.sqrt((Math.pow(R, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(R, 2.0) * Math.pow(W, 2.0));
    var P = Math.sin(B * Rad) * (Math.pow(Math.cos(F * Rad), 2.0) + Math.pow(W, 2.0));
    var Q = R * Math.asin(((A / P) / R) * Math.sin(B * Rad) * Math.cos(F * Rad)) * (Math.PI / 180.0) / Rad;
    b.push(Q);
  }
  result["B"] = b;
  return result;
}
