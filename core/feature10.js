function feature10() {
  var parameters = extractParameters(["K", "G", "L", "E", "T", "ET"]);
  return feature10_core(parameters);
}

function feature10_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var ET = getParameter(parameters, "ET");
  var result = {};
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var R = G / 2.0;
  var B = Math.atan((R - r) / L) / Rad;
  var N = r - E * Math.sin(B * Rad);
  var M = R + E * Math.sin(B * Rad);
  var U = 1 / Math.sin(B * Rad);
  var V = (180.0 / T) * Math.sin(B * Rad);
  result["SR"] = N * U;
  result["BR"] = M * U;
  result["SC"] = 2.0 * N * U * Math.sin(V * Rad);
  result["BC"] = 2.0 * M * U * Math.sin(V * Rad);
  V = (180.0 / ET) * Math.sin(B * Rad);
  var P = M * U - N * U;
  var H = P * Math.cos(V * Rad);
  var A = (M * U + N * U) * Math.sin(V * Rad);
  var theta = Math.atan(A / H) / Rad;
  result["D"] = H * (1.0 / Math.cos(theta * Rad));
  result["ZMKS"] = 2.0 * N * U * Math.sin(V * Rad);
  result["ZMGS"] = 2.0 * M * U * Math.sin(V * Rad);
  result["WLL"] = P;
  result["Area"] = Math.PI * (R + r) * Math.sqrt(Math.pow(L, 2.0) + Math.pow(R - r, 2.0)) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
