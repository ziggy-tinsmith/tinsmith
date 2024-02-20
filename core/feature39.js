function feature39() {
  var parameters = extractParameters(["D", "G", "I", "V", "T"]);
  return feature39_core(parameters);
}

function feature39_core(parameters) {
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
  var R = G + 10.0 + I;
  var W = V - r;
  var A = Math.asin(W / R) / Rad;
  var L = R * Math.cos(A * Rad);
  // 1;
  result["S"] = 2.0 * Math.PI * r / T;
  // 0;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = L - Math.sqrt(Math.pow(R, 2.0) - Math.pow(r, 2.0) - Math.pow(V, 2.0) + D * V * Math.cos(F * Rad));
    p.push(Q);
  }
  result["Points"] = p;
  return result;
}
