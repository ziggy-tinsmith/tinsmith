function feature13() {
  var parameters = extractParameters(["K", "G", "L", "Z", "S", "E"]);
  return feature13_core(parameters);
}

function feature13_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var Z = getParameter(parameters, "Z");
  var S = getParameter(parameters, "S");
  var E = getParameter(parameters, "E");
  var result = {};
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var R = G / 2.0;
  var B = Math.atan((R - r) / L) / Rad;
  var V = 1.0 / Math.sin(B * Rad);
  // var J = 1.0 / Math.sin(B * Rad);
  var Y = r - Z;
  var I = R - S;
  var U = Math.acos(Y / r) / Rad;
  var O = Math.acos(I / R) / Rad;
  var A = Math.atan((I - Y) / L) / Rad;
  var W = 1.0 / Math.cos(A * Rad);
  var C = r * Math.sin(U * Rad);
  var D = R * Math.sin(O * Rad);
  var F = Math.atan((D - C) / (L * W)) / Rad;
  var T = 1.0 / Math.cos(F * Rad);
  var N = r - E * Math.sin(B * Rad);
  var M = R + E * Math.sin(B * Rad);
  var H = (O - U) * Math.sin(B * Rad);
  var P = (180.0 - U) * Math.sin(B * Rad);
  var Q = (180.0 - O) * Math.sin(B * Rad);
  result["L"] = L * W;
  result["FK"] = [
    C,
    2.0 * C,
  ];
  result["FG"] = [
    D,
    2.0 * D,
  ];
  result["T"] = L * W * T;
  result["D"] = Math.sqrt(Math.pow(D + C, 2.0) + Math.pow(L * W, 2.0));
  result["R"] = 2.0 * r * V * Math.sin((H / 2.0) * Rad);
  result["RK"] = N * V;
  result["RG"] = M * V;
  result["CK"] = 2.0 * N * V * Math.sin((P / 2.0) * Rad);
  result["CG"] = 2.0 * M * V * Math.sin((Q / 2.0) * Rad);
  return result;
}
