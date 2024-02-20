function feature54() {
  var parameters = extractParameters(["K", "G", "L", "A", "N", "M", "P", "V", "T"]);
  return feature54_core(parameters);
}

function feature54_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var A = getParameter(parameters, "A");
  var N = getParameter(parameters, "N");
  var M = getParameter(parameters, "M");
  var P = getParameter(parameters, "P");
  var V = getParameter(parameters, "V");
  var T = getParameter(parameters, "T");
  var Rad = Math.PI / 180.0;
  var B = Math.atan(((G / 2.0) - (K / 2.0)) / L) / Rad;
  result["SR"] = (K / 2.0) * (1.0 / Math.sin(B * Rad));
  result["BR"] = (G / 2.0) * (1.0 / Math.sin(B * Rad));
  result["KS"] = K * Math.PI / T;
  result["GS"] = G * Math.PI / T;
  var pl = [];
  for (var X = T / 4.0; X <= T - T / 4.0; X += 1.0) {
    var B = Math.atan(((G / 2.0) - (K / 2.0)) / L) / Rad;
    var Z = Math.atan(((M / 2.0) - (N / 2.0)) / P) / Rad;
    var C = Math.atan(((G / 2.0) - (K / 2.0)) / (L * Math.sin(A * Rad))) / Rad;
    var F = X * (360.0 / T);
    var H = (G / 2.0) * (1.0 / Math.tan(C * Rad));
    var J = (G / 2.0) * Math.cos(A * Rad) * Math.sin(F * Rad);
    var E = Math.atan((G / 2.0) * Math.sin(F * Rad) / ((G / 2.0) * (1.0 / Math.tan(B * Rad)))) / Rad;
    var I = Math.atan((G / 2.0) * Math.cos(F * Rad) / ((G / 2.0) * (1.0 / Math.tan(B * Rad)))) / Rad;
    var Y = Math.acos(H * Math.tan((Math.atan((G / 2.0) * Math.cos(F * Rad) / (H - J)) / Rad) * Rad) / (G / 2.0)) / Rad;
    var O = Math.atan((G / 2.0) * Math.sin(Y * Rad) / H) / Rad;
    var U = Math.atan((G / 2.0) * Math.cos(Y * Rad) / H) / Rad;
    var D = (G / 2.0) * (1.0 / Math.tan(B * Rad)) - ((N / 2.0) * (1.0 / Math.tan(Z * Rad)) + V) * Math.tan(Z * Rad) * (1.0 / Math.sin(A * Rad));
    var S = (D / (Math.cos(B * Rad) + Math.tan((90.0 - A - Z) * Rad) * Math.sin(B * Rad) * Math.cos((90.0 + F) * Rad))) * Math.cos(I * Rad) * Math.cos((A - E) * Rad);
    var R = ((N / 2.0) * (1.0 / Math.tan(Z * Rad)) + V - D * Math.cos(A * Rad) + S) * Math.tan(Z * Rad);
    var W = (1.0 / 2.0) * (M + N);
    var theta = Math.atan(((H - (((G / 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0) - Math.sqrt((Math.pow(M / 2.0, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(M / 2.0, 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0))) / (Math.sin(C * Rad) * (Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(1.0 / Math.tan(C * Rad), 2.0)))) * Math.cos(O * Rad) * Math.cos(U * Rad)) - (H - (((G / 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0) - Math.sqrt((Math.pow(W / 2.0, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(W / 2.0, 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0))) / (Math.sin(C * Rad) * (Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(1.0 / Math.tan(C * Rad), 2.0)))) * Math.cos(O * Rad) * Math.cos(U * Rad))) / (P / 2.0)) / Rad;
    var r = ((((G / 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0) - Math.sqrt((Math.pow(R, 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(R, 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0))) / (Math.sin(C * Rad) * (Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(1.0 / Math.tan(C * Rad), 2.0)))) * Math.cos(O * Rad) * Math.cos(U * Rad) * (1.0 / Math.sin((A - E) * Rad)) - (D / (Math.cos(B * Rad) + Math.tan((90.0 - A - Z) * Rad) * Math.sin(B * Rad) * Math.cos((90.0 + F) * Rad))) * Math.cos(I * Rad)) * Math.sin((A - E) * Rad) / (Math.tan((A - E) * Rad) + Math.tan(theta * Rad));
    var Q = (((G / 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0) - Math.sqrt((Math.pow(R + r * Math.tan(Z * Rad), 2.0) - Math.pow(H, 2.0)) * Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(R + r * Math.tan(Z * Rad), 2.0) * Math.pow(1.0 / Math.tan(C * Rad), 2.0))) / (Math.sin(C * Rad) * (Math.pow(Math.cos(Y * Rad), 2.0) + Math.pow(1.0 / Math.tan(C * Rad), 2.0)))) * Math.cos(O * Rad) * Math.cos(U * Rad) * (1.0 / Math.sin((A - E) * Rad)) * (1.0 / Math.cos(I * Rad)) - (K / 2.0) * (1.0 / Math.sin(B * Rad));
    pl.push(Q);
  }
  result["PointsL"] = pl;
  return result;
}
