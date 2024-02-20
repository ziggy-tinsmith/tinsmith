function feature05() {
  var parameters = extractParameters(["D", "R", "S", "A", "E", "T"]);
  return feature05_core(parameters);
}

function feature05_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var R = getParameter(parameters, "R");
  var S = getParameter(parameters, "S");
  var A = getParameter(parameters, "A");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var result = {};
  var Rad = Math.PI / 180.0;
  var U = 30;
  if (D > 300) {
    U = 40;
  }
  var r = D / 2.0;
  var C = A / 2.0;
  var B = C / S;
  result["S"] = 2.0 * Math.PI * r / T;
  result["L"] = [
    2.0 * Math.PI * r,
    2.0 * Math.PI * r + U,
  ];
  var p = [];
  for (var X = 0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (R - r * Math.cos(F * Rad)) * Math.tan(B * Rad) + E;
    p.push(Q);
  }
  result["Points"] = p;
  result["T"] = R * Math.tan(C * Rad);
  result["Area"] = 2.0 * Math.pow(Math.PI, 2) * r * R * (A / 180.0) * (1 / Math.pow(10.0, 6));
  return result;
}
