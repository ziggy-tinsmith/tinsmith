function feature08b() {
  var parameters = extractParameters(["D", "I", "T"]);
  return feature08b_core(parameters);
}

function feature08b_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var I = getParameter(parameters, "I");
  var T = getParameter(parameters, "T");
  var result = {};
  var Rad = Math.PI / 180.0;
  var R = D / 2.0;
  var r = R - I;
  var P = Math.PI / 180.0;
  var A = 360.0 / T;
  result["R2"] = r;
  result["R1"] = [
    R,
    R + 6.0,
  ];
  result["B"] = R * A * P;
  result["C"] = 2.0 * R * Math.sin((A / 2.0) * Rad);
  return result;
}
