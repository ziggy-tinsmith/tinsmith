function feature34() {
  var parameters = extractParameters(["D", "I", "K", "S", "E", "U", "A", "B"]);
  return feature34_core(parameters);
}

function feature34_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var D = getParameter(parameters, "D")
  var I = getParameter(parameters, "I")
  var K = getParameter(parameters, "K")
  var G = D / 2.0 + I
  var S = 2.0 * Math.PI * G / 200.0
  result["SS"] = S
  S = getParameter(parameters, "S")
  var E = getParameter(parameters, "E")
  var U = getParameter(parameters, "U")
  var Rad = Math.PI / 180.0
  var R = D + 10.0 + I
  var r = 0.1 * D + 10.0 + I
  G = D / 2.0 + I
  var N = G - r
  var M = R - r
  var O = Math.asin(N / M) / Rad
  var C = K / 2.0
  var F = Math.asin(C / R) / Rad
  var H = R - M * Math.cos(O * Rad)
  var P = Math.PI / 180.0
  var V = O - F
  var W = 90.0 - O
  var theta = Math.atan(Math.PI / S) / Rad
  result["LA"] = [
    R * V * P,
    R * V * P / 60.0,
  ];
  var A = getParameter(parameters, "A")
  result["LB"] = [
    r * W * P,
    r * W * P / 60.0,
  ];
  var B = getParameter(parameters, "B")
  result["ZMSA"] = R * V * P / A
  result["ZMSB"] = r * W * P / B
  var L = R * V * P + r * W * P
  result["L"] = L + U
  result["H"] = [
    H - I,
    H,
  ];
  var pa = [];
  for (var X = 0.0; X <= A; X += 1.0) {
    var Q = (R * Math.sin((F + X * (V / A)) * Rad)) * Math.tan(theta * Rad) + E
    pa.push(Q)
  }
  result["PointsA"] = pa
  var pb = [];
  for (var X = 0.0; X <= B; X += 1.0) {
    var Q = (N + r * Math.sin((O + X * (W / B)) * Rad)) * Math.tan(theta * Rad) + E
    pb.push(Q)
  }
  result["PointsB"] = pb
  result["Area"] = ((2.0 * Math.PI * R * Math.sin((O / 2.0) * Rad)) * R * O * P + (2.0 * Math.PI * (N + r * Math.sin((O + (W / 2.0)) * Rad))) * r * W * P + 2.0 * Math.PI * G * U) * (1.0 / Math.pow(10.0, 6.0))
  A = R - I / 2.0
  B = r - I / 2.0
  result["VL"] = I * ((2.0 * Math.PI * A * Math.sin((O / 2.0) * Rad)) * A * O * P + (2.0 * Math.PI * (N + B * Math.sin((O + (W / 2.0)) * Rad))) * B * W * P + 2.0 * Math.PI * (G + I / 2.0) * U) * (1.0 / Math.pow(10.0, 6.0))
  return result;
}
