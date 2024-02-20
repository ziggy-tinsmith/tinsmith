function feature31() {
  var parameters = extractParameters(["A", "B", "H", "D", "R", "S", "Z", "T"]);
  return feature31_core(parameters);
}

function feature31_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var A = getParameter(parameters, "A");
  var B = getParameter(parameters, "B");
  var H = getParameter(parameters, "H");
  var D = getParameter(parameters, "D");
  var R = getParameter(parameters, "R");
  var S = getParameter(parameters, "S");
  var Z = getParameter(parameters, "Z");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var M = A / 2.0;
  var N = B / 2.0;
  var r = D / 2.0;
  var E = 45.0 / S;
  result["S"] = 2.0 * Math.PI * r / T;
  result["F1"] = Math.sqrt(Math.pow(M - r, 2.0) + Math.pow(H + (R - r * Math.cos(0.0 * Rad)) * Math.tan(E * Rad), 2.0));
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M - r * Math.cos(F * Rad), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(H + (R - r * Math.cos(F * Rad)) * Math.tan(E * Rad), 2.0));
    pa.push(Q);
  }
  result["PointsA"] = pa;
  result["F2"] = Math.sqrt(Math.pow(N - r, 2.0) + Math.pow(H + (R - r * Math.cos(90.0 * Rad)) * Math.tan(E * Rad), 2.0));
  var pb = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M + r * Math.cos((90.0 + F) * Rad), 2.0) + Math.pow(N - r * Math.sin((90.0 + F) * Rad), 2.0) + Math.pow(H + (R - r * Math.cos((90.0 + F) * Rad)) * Math.tan(E * Rad), 2.0));
    pb.push(Q);
  }
  result["PointsB"] = pb;
  result["F3"] = Math.sqrt(Math.pow(M - r, 2.0) + Math.pow(H + (R - r * Math.cos(180.0 * Rad)) * Math.tan(E * Rad), 2.0));
  result["OS"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var E = 45.0 / S;
    var Q = (R - r * Math.cos(F * Rad)) * Math.tan(E * Rad) + Z;
    p.push(Q);
  }
  result["Points"] = p;
  return result;
}
