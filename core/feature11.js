function feature11() {
  var parameters = extractParameters(["K", "G", "L", "S", "E", "T", "ET"]);
  return feature11_core(parameters);
}

function feature11_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var L = getParameter(parameters, "L");
  var S = getParameter(parameters, "S");
  var E = getParameter(parameters, "E");
  var T = getParameter(parameters, "T");
  var ET = getParameter(parameters, "ET");
  var result = {};
  var Rad = Math.PI / 180.0;
  var r = K / 2.0;
  var R = G / 2.0;
  var B = Math.atan((R - r) / L) / Rad;
  var W = (1.0 / 2.0) * E * Math.sin(B * Rad);
  K = r + W;
  G = R - W;
  var C = (G - K) / S;
  var U = 1 / Math.sin(B * Rad);
  var V = (180.0 / T) * Math.sin(B * Rad);
  var kr = [];
  var gr = [];
  var kc = [];
  var gc = [];
  for (var X = 1; X <= S; X += 1.0) {
    var Y = X - 1.0;
    var N = K + Y * C - W;
    var M = K + X * C + W;
    kr.push(N * U);
    gr.push(M * U);
    kc.push(2.0 * N * U * Math.sin(V * Rad));
    gc.push(2.0 * M * U * Math.sin(V * Rad));
  }
  result["KR"] = kr;
  result["GR"] = gr;
  result["KC"] = kc;
  result["GC"] = gc;
  V = (180.0 / ET) * Math.sin(B * Rad);
  var okr = [];
  var ogr = [];
  var zmks = [];
  var zmgs = [];
  var wll = [];
  var d = [];
  for (var X = 1; X <= S; X += 1.0) {
    var Y = X - 1.0;
    var N = K + Y * C - W;
    var M = K + X * C + W;
    var P = M * U - N * U;
    var H = P * Math.cos(V * Rad);
    var A = (M * U + N * U) * Math.sin(V * Rad);
    var theta = Math.atan(A / H) / Rad;
    var D = H * (1.0 / Math.cos(theta * Rad));
    okr.push(N * U);
    ogr.push(M * U);
    zmks.push(2.0 * N * U * Math.sin(V * Rad));
    zmgs.push(2.0 * M * U * Math.sin(V * Rad));
    wll.push(P);
    d.push(D);
  }
  result["OKR"] = okr;
  result["OGR"] = ogr;
  result["ZMKS"] = zmks;
  result["ZMGS"] = zmgs;
  result["WLL"] = wll;
  result["D"] = d;
  result["Area"] = Math.PI * (R + r) * Math.sqrt(Math.pow(L, 2.0) + Math.pow(R - r, 2.0)) * (1.0 / Math.pow(10.0, 6.0));
  return result;
}
