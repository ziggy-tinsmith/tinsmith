function feature21() {
  var parameters = extractParameters(["D", "K", "G", "L", "A", "V", "T"]);
  return feature21_core(parameters);
}

function feature21_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var A = getParameter(parameters, "A");
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
  var theta = Math.atan((M - N) / L) / Rad;
  var E = 1.0 / Math.tan(theta * Rad);
  var O = 1.0 / Math.cos(theta * Rad);
  var H = N * E + A;
  var C = Math.tan(theta * Rad);
  L = (H + r) * C;
  var R = H * C;
  var I = Math.asin(V / R) / Rad;
  var P = Math.PI / 180.0;
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T; X += 1.0) {
    var F = 180.0 + X * (360.0 / T);
    var A = H - r * Math.cos(F * Rad);
    var B = r * Math.sin(F * Rad) - V;
    if (V == 0.0 && F > 360.0) {
      break;
    }
    var Q = L - Math.sqrt(Math.pow(C, 2.0) * Math.pow(A, 2.0) - Math.pow(B, 2.0));
    p.push(Q);
  }
  result["Points"] = p;
  var b = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var W = r * Math.cos(F * Rad) - V;
    var Y = Math.asin(W / R) / Rad;
    if (V == 0.0 && F > 90) {
      break;
    }
    var Q = R * (I + Y) * P;
    b.push(Q);
  }
  result["B"] = b;
  var mh = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = 90.0 + X * (360.0 / T);
    var A = H - r * Math.cos(F * Rad);
    var B = r * Math.sin(F * Rad) - V;
    if (V == 0.0 && F > 180) {
      break;
    }
    var Q = H * O - O * Math.sqrt(Math.pow(A, 2.0) + Math.pow(B, 2.0));
    mh.push(Q);
  }
  result["MH"] = mh;
  var ph = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = 90.0 - X * (360.0 / T);
    var A = H - r * Math.cos(F * Rad);
    var B = r * Math.sin(F * Rad) - V;
    if (V == 0.0 && F < 0) {
      break;
    }
    var Q = H * O - O * Math.sqrt(Math.pow(A, 2.0) + Math.pow(B, 2.0));
    ph.push(Q);
  }
  result["PH"] = ph;
  return result;
}
