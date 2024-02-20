function feature09a() {
  var parameters = extractParameters(["D", "A", "L", "T"]);
  return feature09a_core(parameters);
}

function feature09a_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var L = getParameter(parameters, "L");
  var T = getParameter(parameters, "T");
  var result = {};
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var r = D / 2.0;
  var E = Math.acos((r - A) / r) / Rad;
  var G = r * Math.sin(E * Rad);
  var P = Math.PI / 180.0;
  var I = T / 2.0;
  var B = r * E * P;
  result["F1"] = G;
  result["F2"] = 2.0 * G;
  result["H"] = Math.sqrt(Math.pow(L, 2.0) + Math.pow(A, 2.0));
  result["S"] = B / I;
  var p = [];
  for (var X = 0; X <= T / 2.0; X += 1.0) {
    // var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(r * Math.cos(E * Rad) - r * Math.cos(X * (E / I) * Rad), 2.0) + Math.pow(r * Math.sin(E * Rad) - r * Math.sin(X * (E / I) * Rad), 2.0) + Math.pow(L, 2.0));
    p.push(Q);
  }
  result["Points"] = p;
  var V = 2.0 * Math.PI * r;
  var W = U / 2.0;
  result["P1L"] = [
    (1.0 / 4.0) * V - B + W,
    (3.0 / 4.0) * V - B + W,
  ];
  result["P2L"] = [
    (1.0 / 2.0) * V - B + W,
    (1.0 / 2.0) * V - B + W,
  ];
  return result;
}
