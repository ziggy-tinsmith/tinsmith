function feature43() {
  var parameters = extractParameters(["D", "I", "K", "S", "Z", "T"]);
  return feature43_core(parameters);
}

function feature43_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D");
  var I = getParameter(parameters, "I");
  var K = getParameter(parameters, "K");
  var R = D / 2.0 + I;
  var S = 2.0 * Math.PI * R / 200.0;
  result["SS"] = S;
  S = getParameter(parameters, "S");
  var Z = getParameter(parameters, "Z");
  var Rad = Math.PI / 180.0;
  var r = D / 2.0;
  R = D / 2.0 + I;
  var P = Math.PI / 180.0;
  var E = Math.asin((K / 2) / R) / Rad;
  var F = 180.0 - 2.0 * E;
  var theta = Math.atan(Math.PI / S) / Rad;
  result["L"] = [
    R * P * F,
    R * P * F / 60.0,
  ];
  var T = getParameter(parameters, "T");
  result["S"] = R * P * F / T;
  result["LL"] = R * P * F;
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var Q = (R * Math.sin((E + X * (F / T)) * Rad)) * Math.tan(theta * Rad) + Z;
    p.push(Q);
  }
  result["Points"] = p;
  result["Area"] = 4.0 * Math.PI * Math.pow(R, 2.0) * (1.0 / Math.pow(10.0, 6.0));
  result["VL"] = ((4.0 / 3.0) * Math.PI * Math.pow(R, 3) - (4.0 / 3.0) * Math.PI * Math.pow(r, 3)) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
