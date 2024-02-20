function feature14() {
  var parameters = extractParameters(["K", "G", "L", "Z", "T"]);
  return feature14_core(parameters);
}

function feature14_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var Z = getParameter(parameters, "Z");
  var T = getParameter(parameters, "T");
  var result = {};
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var R = G / 2.0;
  var theta = Math.atan((R - r) / L) / Rad;
  var N = r - Z * Math.sin(theta * Rad);
  var M = R + Z * Math.sin(theta * Rad);
  var P = 2.0 * Z * Math.cos(theta * Rad);
  L = L + P;
  var V = M - N;
  var I = N / M;
  var C = M / V;
  result["SC"] = 2.0 * N * Math.PI / T;
  result["BC"] = 2.0 * M * Math.PI / T;
  var r2 = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = I * C * Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0) + Math.pow(V, 2.0) + 2.0 * Math.pow(V, 2.0) * Math.cos(F * Rad));
    r2.push(Q);
  }
  result["R2"] = r2;
  var r1 = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = C * Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0) + Math.pow(V, 2.0) + 2.0 * Math.pow(V, 2.0) * Math.cos(F * Rad));
    r1.push(Q);
  }
  result["R1"] = r1;
  var l1 = [];
  var l2 = [];
  l1.push(Math.sqrt(Math.pow(M - N + V, 2.0) + Math.pow(L, 2.0)));
  for (var X = 1.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var O = 360.0 / T;
    var E = F - O;
    var Q = Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(E * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(E * Rad), 2.0) + Math.pow(L, 2.0));
    l2.push(Q);
    Q = Math.sqrt(Math.pow(M * Math.cos(F * Rad) - N * Math.cos(F * Rad) + V, 2.0) + Math.pow(M * Math.sin(F * Rad) - N * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0));
    l1.push(Q);
  }
  result["L1"] = l1;
  result["L2"] = l2;
  var W = Math.atan(V / L) / Rad;
  result["Area"] = (R + r) * Math.PI * L * (1.0 / Math.cos(W * Rad)) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
