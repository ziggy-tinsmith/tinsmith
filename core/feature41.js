function feature41() {
  var parameters = extractParameters(["D", "G", "I", "V", "T"]);
  return feature41_core(parameters);
}

function feature41_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var G = getParameter(parameters, "G");
  var I = getParameter(parameters, "I");
  var V = getParameter(parameters, "V");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var r = D / 2.0;
  var R = 0.8 * G + 10.0 + I;
  var P = 0.154 * G + 10.0 + I;
  var Z = G / 2.0 + I;
  var N = Z - P;
  var M = R - P;
  var O = Math.asin(N / M) / Rad;
  var E = 90.0 - O;
  var H = R - M * Math.cos(O * Rad);
  var W = V - r;
  var A = Math.asin(W / R) / Rad;
  var K = R - W * (1.0 / Math.tan(A * Rad));
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var pbr = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var L = V - r * Math.cos(F * Rad);
    var theta = Math.atan(r * Math.sin(F * Rad) / L) / Rad;
    var C = L * (1.0 / Math.cos(theta * Rad));
    var B = Math.asin(C / R) / Rad;
    if (B > O) {
      break;
    }
    var Q = R - K - R * Math.cos(B * Rad);
    pbr.push(Q);
  }
  result["PointsBR"] = pbr;
  var psr = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var L = V + r * Math.cos(F * Rad);
    var theta = Math.atan(r * Math.sin(F * Rad) / L) / Rad;
    var C = L * (1.0 / Math.cos(theta * Rad)) - N;
    var B = Math.acos(C / P) / Rad;
    if (B > E) {
      break;
    }
    var Q = H - K - P * Math.sin(B * Rad);
    psr.push(Q);
  }
  result["PointsSR"] = psr;
  return result;
}
