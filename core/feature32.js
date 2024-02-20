function feature32() {
  var parameters = extractParameters(["A", "B", "H", "I", "C", "D", "S"]);
  return feature32_core(parameters);
}

function feature32_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var A = getParameter(parameters, "A")
  var B = getParameter(parameters, "B")
  var H = getParameter(parameters, "H")
  var I = getParameter(parameters, "I")
  var C = getParameter(parameters, "C")
  var D = getParameter(parameters, "D")
  var S = getParameter(parameters, "S")
  var Rad = Math.PI / 180.0
  var K = A / 2.0
  var G = B / 2.0
  var N = C / 2.0
  var M = D / 2.0
  var E = Math.atan((G - K) / H) / Rad
  var F = Math.atan((M - N) / H) / Rad
  var O = 1.0 / Math.cos(E * Rad)
  var U = 1.0 / Math.cos(F * Rad)
  var V = 1.0 / Math.tan(E * Rad)
  var W = 1.0 / Math.tan(F * Rad)
  var P = S * Math.cos(E * Rad)
  var R = S * Math.cos(F * Rad)
  var Y = 2.0 * I * O
  var J = 2.0 * I * U
  result["AA"] = 90.0 - F
  var la = [];
  la.push(A + Y)
  result["BA"] = [
    I * U - 5.0,
    I * U - 5.0 + 45.0,
  ];
  var ha = [];
  for (var X = 0.0; X <= H; X += R) {
    ha.push(X * U)
    var Q = (X + (K + I * O) * V) * Math.tan(E * Rad)
    la.push(Q)
    la.push(2.0 * Q)
  }
  ha.push(H * U)
  la.push(G + I * O)
  la.push(2.0 * (G + I * O))
  result["LA"] = la
  result["HA"] = ha
  result["AB"] = 90.0 - E
  var lb = [];
  lb.push(C + J)
  result["BB"] = [
    I * O - 5.0,
    I * O - 5.0 + 45.0,
  ];
  var hb = [];
  for (var X = 0.0; X <= H; X += P) {
    hb.push(X * O)
    var Q = (X + (N + I * U) * W) * Math.tan(F * Rad)
    lb.push(Q)
    lb.push(2.0 * Q)
  }
  hb.push(H * O)
  lb.push(M + I * U)
  lb.push(2.0 * (M + I * U))
  result["HB"] = hb
  result["LB"] = lb
  result["Area"] = (H * U * (A + B + Y) + H * O * (C + D + J)) * (1.0 / Math.pow(10.0, 6.0))
  return result;
}
