function feature18() {
  var parameters = extractParameters(["D", "A", "T"]);
  return feature18_core(parameters);
}

function feature18_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var A = getParameter(parameters, "A")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var U = 30.0
  if (D > 300.0) {
    U = 40.0
  }
  var r = D / 2.0
  var L = r * Math.tan(A * Rad)
  var E = 1.0 / Math.cos(A * Rad)
  result["S"] = 2.0 * Math.PI * r / T
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - r * Math.tan(A * Rad) * Math.cos(F * Rad)
    p.push(Q)
  }
  result["Points"] = p
  var b = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = r * E * Math.cos(F * Rad)
    b.push(Q)
  }
  result["B"] = b
  var h = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = r * Math.sin(F * Rad)
    h.push(Q)
  }
  result["H"] = h
  return result;
}
