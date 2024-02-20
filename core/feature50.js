function feature50() {
  var parameters = extractParameters(["K", "G", "H", "S", "A", "E", "T"]);
  return feature50_core(parameters);
}

function feature50_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var H = getParameter(parameters, "H");
  var S = getParameter(parameters, "S");
  var A = getParameter(parameters, "A");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var R = G / 2.0;
  var theta = Math.atan((R - r) / H) / Rad;
  var L = H + 2.0 * (S - 1.0) * E * Math.cos(theta * Rad);
  var B = Math.atan((R - r) / L) / Rad;
  var U = 1.0 / Math.sin(B * Rad);
  var V = (180.0 / T) * Math.sin(B * Rad);
  var C = (R - r) / S;
  var W = 1.0 / Math.tan(B * Rad);
  var O = A / (2.0 * (S - 1.0));
  var I = Math.tan(O * Rad) * Math.sin(B * Rad);
  // 0;
  result["SR"] = r * U;
  result["BR"] = R * U;
  // 1;
  result["KS"] = 2.0 * r * U * Math.sin(V * Rad);
  result["GS"] = 2.0 * R * U * Math.sin(V * Rad);
  // 0;
  var d = [];
  var pr1 = [];
  var pr2 = [];
  var pr3 = [];
  var pr4 = [];
  var pr5 = [];
  var pr6 = [];
  result["D"] = d;
  result["PointsR1"] = pr1;
  result["PointsR2"] = pr2;
  result["PointsR3"] = pr3;
  result["PointsR4"] = pr4;
  result["PointsR5"] = pr5;
  result["PointsR6"] = pr6;
  d.push(2.0 * r);
  d.push(2.0 * (r + 1.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 1.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos(F * Rad));
    pr1.push(Q);
  }
  if (S == 2.0) {
    return result;
  }
  d.push(2.0 * (r + 2.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 2.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos((180.0 + F) * Rad));
    pr2.push(Q);
  }
  if (S == 3.0) {
    return result;
  }
  d.push(2.0 * (r + 3.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 3.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos(F * Rad));
    pr3.push(Q);
  }
  if (S == 4.0) {
    return result;
  }
  d.push(2.0 * (r + 4.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 4.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos((180.0 + F) * Rad));
    pr4.push(Q);
  }
  if (S == 5.0) {
    return result;
  }
  d.push(2.0 * (r + 5.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 5.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos(F * Rad));
    pr5.push(Q);
  }
  if (S == 6.0) {
    return result;
  }
  d.push(2.0 * (r + 6.0 * C));
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var F = X * (360.0 / T);
    var Q = (r + 6.0 * C) * W / (Math.cos(B * Rad) + I * Math.cos((180.0 + F) * Rad));
    pr6.push(Q);
  }
  return result;
}
