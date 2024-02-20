function feature26() {
  var parameters = extractParameters(["D", "L", "V", "Z", "T"]);
  return feature26_core(parameters);
}

function feature26_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var L = getParameter(parameters, "L");
  var V = getParameter(parameters, "V");
  var Z = getParameter(parameters, "Z");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var r = D / 2.0;
  var theta = Math.atan(V / L) / Rad;
  r = r - Z * Math.sin(theta * Rad);
  var B = 2.0 * Z * Math.sin(theta * Rad);
  V = V + B;
  var P = 2.0 * Z * Math.cos(theta * Rad);
  L = L + P;
  result["S"] = 2.0 * Math.PI * r / (2.0 * T);
  var p1 = [];
  var p2 = [];
  p1.push(Math.sqrt(Math.pow(V, 2.0) + Math.pow(L, 2.0)));
  for (var X = 1.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / (2.0 * T));
    var O = 360.0 / (2.0 * T);
    var Q = Math.sqrt(Math.pow(r * Math.cos(F * Rad) - r * Math.cos((F - O) * Rad) + V, 2.0) + Math.pow(r * Math.sin(F * Rad) - r * Math.sin((F - O) * Rad), 2.0) + Math.pow(L, 2.0));
    p2.push(Q);
    Q = Math.sqrt(Math.pow(r * Math.cos(F * Rad) - r * Math.cos(F * Rad) + V, 2.0) + Math.pow(r * Math.sin(F * Rad) - r * Math.sin(F * Rad), 2.0) + Math.pow(L, 2.0));
    p1.push(Q);
  }
  result["P1"] = p1;
  result["P2"] = p2;
  result["V"] = V;
  result["L"] = L;
  result["P1L"] = [
    U / 2.0,
    (D / 2.0) * Math.PI + U / 2.0,
  ];
  result["P2L"] = [
    (D / 4.0) * Math.PI + U / 2.0,
    (D / 4.0) * Math.PI + U / 2.0,
  ];
  return result;
}
