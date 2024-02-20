function feature22() {
  var parameters = extractParameters(["D", "A", "K", "G", "L", "J", "V", "T"]);
  return feature22_core(parameters);
}

function feature22_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var J = getParameter(parameters, "J");
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
  var Y = 1.0 / Math.tan(B * Rad);
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  A = A + 0.0001;
  var theta = A - B;
  var E = N * Y + J;
  G = E * Math.tan(B * Rad) * (1.0 / Math.sin(theta * Rad));
  K = r * (1.0 / Math.tan(A * Rad));
  L = G + K;
  if (A > 90) {
    L = G - K;
  }
  var p = [];
  for (var X = 0.0; X <= T; X += 1.0) {
    var F = 180.0 - X * (360.0 / T);
    var W = r * Math.sin(F * Rad) - V;
    var I = r * (1.0 / Math.tan(theta * Rad)) * Math.cos(F * Rad);
    var H = E + r * (1.0 / Math.sin(A * Rad)) * Math.cos(B * Rad) * Math.cos(F * Rad);
    var R = H * Math.tan(B * Rad);
    var K = Math.asin(W / R) / Rad;
    var G = Math.asin(W / M) / Rad;
    var O = R * Math.cos(K * Rad);
    var U = M * Math.cos(G * Rad);
    var S = R - O;
    var P = M * Y - H;
    var C = Math.atan((U - O) / P) / Rad;
    var Z = S / (Math.tan(theta * Rad) + Math.tan(C * Rad));
    if (V == 0.0 && F < 0.0) {
      break;
    }
    var Q = L + I - (1.0 / Math.sin(theta * Rad)) * Math.sqrt(Math.pow(Math.tan(B * Rad), 2.0) * Math.pow(H + Z, 2.0) - Math.pow(W, 2.0));
    p.push(Q);
  }
  result["Points"] = p;
  return result;
}
