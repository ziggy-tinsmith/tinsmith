function feature08a() {
  var parameters = extractParameters(["D", "I", "K"]);
  return feature08a_core(parameters);
}

function feature08a_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var D = getParameter(parameters, "D");
  var I = getParameter(parameters, "I");
  var K = getParameter(parameters, "K");
  var result = {};
  var r = D / 2.0;
  result["GB"] = (r + I) * (K / r);
  return result;
}
