function feature28() {
  var parameters = extractParameters(["D", "A", "B", "H", "T"]);
  return feature28_core(parameters);
}

function feature28_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var B = getParameter(parameters, "B");
  var H = getParameter(parameters, "H");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  var M = A / 2.0;
  var N = B / 2.0;
  result["S"] = 2.0 * Math.PI * r / T;
  result["F1"] = Math.sqrt(Math.pow(M - r, 2.0) + Math.pow(H, 2.0));
  var p = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = Math.sqrt(Math.pow(M - r * Math.cos(F * Rad), 2.0) + Math.pow(N - r * Math.sin(F * Rad), 2.0) + Math.pow(H, 2.0));
    p.push(Q);
  }
  result["Points"] = p;
  result["F2"] = Math.sqrt(Math.pow(N - r, 2.0) + Math.pow(H, 2.0));
  result["Area"] = (((D * Math.PI / 4.0) + B) * Math.sqrt(Math.pow(M - r, 2.0) + Math.pow(H, 2.0)) + ((D * Math.PI / 4.0) + A) * Math.sqrt(Math.pow(N - r, 2.0) + Math.pow(H, 2.0))) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
