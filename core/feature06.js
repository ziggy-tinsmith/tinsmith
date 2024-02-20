function feature06() {
  var parameters = extractParameters(["D", "A", "T"]);
  return feature06_core(parameters);
}

function feature06_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var T = getParameter(parameters, "T");
  var result = {};
  var Rad = Math.PI / 180.0;
  var U = 30;
  if (D > 300) {
    U = 40;
  }
  var r = D / 2.0;
  var B = A / 2.0;
  var L = r * Math.tan(B * Rad);
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = L - r * Math.tan(B * Rad) * Math.cos(F * Rad);
    p.push(Q);
  }
  result["Points"] = p;
  return result;
}
