function feature45() {
  var parameters = extractParameters(["K", "G", "L", "V", "T"]);
  return feature45_core(parameters);
}

function feature45_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K")
  var G = getParameter(parameters, "G")
  var L = getParameter(parameters, "L")
  var V = getParameter(parameters, "V")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var N = K / 2.0
  var M = G / 2.0
  var B = Math.asin((M - N) / L) / Rad
  var E = Math.asin(V / L) / Rad
  var A = Math.atan((Math.cos(B * Rad) * Math.sin(E * Rad)) / (1.0 + Math.cos(E * Rad) * Math.cos(B * Rad))) / Rad
  var I = Math.asin((Math.cos(E * Rad) + Math.cos(B * Rad)) / (1.0 + Math.cos(E * Rad) * Math.cos(B * Rad))) / Rad
  // var F = X * (360.0 / T);
  var U = 1.0 / Math.sin(B * Rad)
  var W = 180.0 * Math.sin(B * Rad)
  result["KR"] = N * U
  result["GR"] = M * U
  result["ZMKS"] = 2.0 * N * U * Math.sin((W / T) * Rad)
  result["ZMGS"] = 2.0 * M * U * Math.sin((W / T) * Rad)
  var pr2 = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = N * (1.0 / Math.tan(B * Rad)) * Math.sin(I * Rad) / (Math.cos(B * Rad) + Math.tan(A * Rad) * Math.sin(B * Rad) * Math.cos(F * Rad))
    pr2.push(Q)
  }
  result["PointsR2"] = pr2
  var pr1 = [];
  for (var X = 0.0; X <= (T / 4.0) + 1.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = M * (1.0 / Math.tan(B * Rad)) * Math.sin(I * Rad) / (Math.cos(B * Rad) + Math.tan(A * Rad) * Math.sin(B * Rad) * Math.cos(F * Rad))
    pr1.push(Q)
  }
  result["PointsR1"] = pr1
  var pra = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = M * U / (Math.cos(B * Rad) + Math.tan((90.0 - E) * Rad) * Math.sin(B * Rad) * Math.cos(F * Rad))
    pra.push(Q)
  }
  result["PointsRA"] = pra
  U = 30.0
  if (K > 300.0) {
    U = 40.0
  }
  result["SA"] = 2.0 * Math.PI * M / T
  result["LA"] = [
    2.0 * Math.PI * M,
    2.0 * Math.PI * M + U,
  ];
  L = M * Math.tan(A * Rad)
  var pa = [];
  for (var X = 0.0; X <= T / 4.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - M * Math.tan(A * Rad) * Math.cos(F * Rad)
    pa.push(Q)
  }
  result["PointsA"] = pa
  result["SC"] = 2.0 * Math.PI * N / T
  result["LC"] = [
    2.0 * Math.PI * N,
    2.0 * Math.PI * N + U,
  ];
  L = N * Math.tan(A * Rad)
  var p = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T)
    var Q = L - N * Math.tan(A * Rad) * Math.cos(F * Rad)
    p.push(Q)
  }
  result["Points"] = p
  return result;
}
