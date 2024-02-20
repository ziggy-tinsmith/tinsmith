function feature30() {
  var parameters = extractParameters(["D", "A", "B", "K", "G", "V", "T"]);
  return feature30_core(parameters);
}

function feature30_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var B = getParameter(parameters, "B");
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var V = getParameter(parameters, "V");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var M = A / 2.0;
  var N = B / 2.0;
  var E = Math.asin((G - K) / A) / Rad;
  result["S"] = 2.0 * Math.PI * r / T;
  result["F1"] = Math.sqrt(Math.pow(M * Math.cos(E * Rad) - V * Math.cos(E * Rad) - r, 2.0) + Math.pow(K, 2.0));
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M * Math.cos(E * Rad) - (V * Math.cos(E * Rad) + r * Math.cos(F * Rad)), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(K, 2.0));
    pa.push(Q);
  }
  result["PointsA"] = pa;
  var pb = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M * Math.cos(E * Rad) + V * Math.cos(E * Rad) + r * Math.cos((90.0 + F) * Rad), 2.0) + Math.pow(N - r * Math.sin((90.0 + F) * Rad), 2.0) + Math.pow(G, 2.0));
    pb.push(Q);
  }
  result["PointsB"] = pb;
  result["F2"] = Math.sqrt(Math.pow(M * Math.cos(E * Rad) + V * Math.cos(E * Rad) - r, 2.0) + Math.pow(G, 2.0));
  result["F3"] = Math.sqrt(Math.pow((K * (1.0 / Math.tan(E * Rad)) + M * Math.cos(E * Rad) - V * Math.cos(E * Rad)) * Math.tan(E * Rad), 2.0) + Math.pow(N - r, 2.0));
  return result;
}
