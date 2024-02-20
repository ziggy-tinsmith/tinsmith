function feature49() {
  var parameters = extractParameters(["D", "A", "B", "L", "V", "T"]);
  return feature49_core(parameters);
}

function feature49_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var B = getParameter(parameters, "B");
  var L = getParameter(parameters, "L");
  var V = getParameter(parameters, "V");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var M = A / 2.0;
  var N = B / 2.0;
  var theta = Math.asin(V / L) / Rad;
  L = L * Math.cos(theta * Rad);
  result["S"] = 2.0 * Math.PI * r / T;
  result["F1"] = Math.sqrt(Math.pow(M - V - r, 2.0) + Math.pow(L, 2.0));
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M - (V + r * Math.cos(F * Rad)), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0));
    pa.push(Q);
  }
  result["PointsA"] = pa;
  var pb = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = 90.0 + X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M + V + r * Math.cos(F * Rad), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0));
    pb.push(Q);
  }
  result["PointsB"] = pb;
  result["F2"] = Math.sqrt(Math.pow(M + V - r, 2.0) + Math.pow(L, 2.0));
  var pm = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = 90.0 + X * (360.0 / T);
    var Q = (A / (A + 2.0 * (V + r * Math.cos(F * Rad)))) * Math.sqrt(Math.pow(M + V + r * Math.cos(F * Rad), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0));
    pm.push(Q);
  }
  result["PointsM"] = pm;
  return result;
}
