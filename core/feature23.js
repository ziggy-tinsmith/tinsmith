function feature23() {
  var parameters = extractParameters(["D", "K", "G", "L", "V", "T"]);
  return feature23_core(parameters);
}

function feature23_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var V = getParameter(parameters, "V");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var r = D / 2.0;
  var N = K / 2.0;
  var M = G / 2.0;
  var B = Math.atan((M - N) / L) / Rad;
  var W = 1.0 / Math.tan(B * Rad);
  var H = W * (V - r);
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = T / 2.0; X <= T; X += 1.0) {
    var F = X * (360.0 / T);
    var A = Math.pow(r, 2.0) + Math.pow(V, 2.0) + 2.0 * r * V * Math.cos(F * Rad);
    var Q = W * Math.sqrt(A) - H;
    p.push(Q);
  }
  result["Points"] = p;
  return result;
}
