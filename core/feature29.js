function feature29() {
  var parameters = extractParameters(["D", "A", "B", "H", "V", "W", "T"]);
  return feature29_core(parameters);
}

function feature29_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var B = getParameter(parameters, "B");
  var H = getParameter(parameters, "H");
  var V = getParameter(parameters, "V");
  var W = getParameter(parameters, "W");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var M = A / 2.0;
  var N = B / 2.0;
  result["S"] = 2.0 * Math.PI * r / T;
  result["F1"] = Math.sqrt(Math.pow(M - V - r, 2.0) + Math.pow(H, 2.0));
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M - (V + r * Math.cos(F * Rad)), 2.0) + Math.pow(N - (W + r * Math.sin(F * Rad)), 2.0) + Math.pow(H, 2.0));
    pa.push(Q);
  }
  result["PointsA"] = pa;
  result["F2"] = Math.sqrt(Math.pow(N - W - r, 2.0) + Math.pow(H, 2.0));
  var pb = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M + V + r * Math.cos((90.0 + F) * Rad), 2.0) + Math.pow(N - (W + r * Math.sin((90.0 + F) * Rad)), 2.0) + Math.pow(H, 2.0));
    pb.push(Q);
  }
  result["PointsB"] = pb;
  result["F3"] = Math.sqrt(Math.pow(M + V - r, 2.0) + Math.pow(H, 2.0));
  var pc = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M + V + r * Math.cos((180.0 + F) * Rad), 2.0) + Math.pow(N + W + r * Math.sin((180.0 + F) * Rad), 2.0) + Math.pow(H, 2.0));
    pc.push(Q);
  }
  result["PointsC"] = pc;
  result["F4"] = Math.sqrt(Math.pow(N + W - r, 2.0) + Math.pow(H, 2.0));
  var pd = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M - (V + r * Math.cos((270.0 + F) * Rad)), 2.0) + Math.pow(N + W + r * Math.sin((270.0 + F) * Rad), 2.0) + Math.pow(H, 2.0));
    pd.push(Q);
  }
  result["PointsD"] = pd;
  result["Area"] = ((A + (D * Math.PI / 4.0)) + (B + (D * Math.PI / 4.0))) * Math.sqrt(Math.pow(H, 2.0) + Math.pow(V, 2.0) + Math.pow(W, 2.0)) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
