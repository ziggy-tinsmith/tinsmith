function feature55() {
  var parameters = extractParameters(["K", "G", "L", "A", "E", "T"]);
  return feature55_core(parameters);
}

function feature55_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var result = {};
  var K = getParameter(parameters, "K")
  var G = getParameter(parameters, "G")
  var L = getParameter(parameters, "L")
  var A = getParameter(parameters, "A")
  var E = getParameter(parameters, "E")
  var T = getParameter(parameters, "T")
  var Rad = Math.PI / 180.0
  var r = K / 2.0
  var R = G / 2.0
  var B = Math.atan((R - r) / L) / Rad
  var U = 1.0 / Math.sin(B * Rad)
  var N = r - E * Math.sin(B * Rad)
  var M = R + E * Math.sin(B * Rad)
  var H = R - A
  var C = Math.acos(H / R) / Rad
  var V = C * Math.sin(B * Rad)
  var W = (180.0 - C) * Math.sin(B * Rad)
  // var P = Math.PI / 180.0;
  result["KR"] = N * U
  result["GR"] = M * U
  result["KC"] = 2.0 * N * U * Math.sin((W / 2) * Rad)
  result["GC"] = 2.0 * M * U * Math.sin((W / 2) * Rad)
  result["ZMKS"] = 2.0 * N * U * Math.sin((V / T) * Rad)
  result["ZMGS"] = 2.0 * M * U * Math.sin((V / T) * Rad)
  var pr = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var Q = H / (Math.sin(B * Rad) * Math.cos(X * (2.0 * C / T) * Rad))
    pr.push(Q)
  }
  result["PointsR"] = pr
  result["F"] = [
    R * U * Math.sin(V * Rad),
    2.0 * R * U * Math.sin(V * Rad),
  ];
  var pb = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var Q = (H / (Math.sin(B * Rad) * Math.cos(X * (2.0 * C / T) * Rad))) * Math.sin(X * (2.0 * V / T) * Rad)
    pb.push(Q)
  }
  result["PointsB"] = pb
  var ph = [];
  for (var X = 0.0; X <= T / 2.0; X += 1.0) {
    var Q = R * U * Math.cos(V * Rad) - (H / (Math.sin(B * Rad) * Math.cos(X * (2.0 * C / T) * Rad))) * Math.cos(X * (2.0 * V / T) * Rad)
    ph.push(Q)
  }
  result["PointsH"] = ph
  return result;
}
