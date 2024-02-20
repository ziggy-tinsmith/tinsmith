function feature09b() {
  var parameters = extractParameters(["D", "A"]);
  return feature09b_core(parameters);
}

function feature09b_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var A = getParameter(parameters, "A");
  var result = {};
  var Rad = Math.PI / 180.0;
  var U = 30.0;
  if (D > 300.0) {
    U = 40.0;
  }
  var r = D / 2.0;
  var E = Math.acos((r - A) / r) / Rad;
  var G = r * Math.sin(E * Rad);
  var P = Math.PI / 180.0;
  var B = r * E * P;
  result["F"] = [
    G,
    2.0 * G,
  ];
  result["R"] = [
    B,
    2.0 * B,
  ];
  result["D"] = [
    B - G,
    2.0 * (B - G),
  ];
  result["T"] = (1.0 / 4.0) * D * Math.PI - B;
  result["L"] = [
    D * Math.PI - 2.0 * (B - G),
    D * Math.PI - 2.0 * (B - G) + U,
  ];
  result["L1"] = [
    (1.0 / 4.0) * D * Math.PI - B + G,
    (1.0 / 4.0) * D * Math.PI - B + G + U,
  ];
  result["L2"] = [
    (1.0 / 2.0) * D * Math.PI - B + G,
    (1.0 / 2.0) * D * Math.PI - B + G + U,
  ];
  result["L3"] = [
    (3.0 / 4.0) * D * Math.PI - B + G,
    (3.0 / 4.0) * D * Math.PI - B + G + U,
  ];
  return result;
}
