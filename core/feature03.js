function feature03() {
  var parameters = extractParameters(["K", "G", "D"]);
  return feature03_core(parameters);
}

function feature03_core(parameters) {
  if (parameters == null) {
    return null;
  }
  var K = getParameter(parameters, "K");
  var G = getParameter(parameters, "G");
  var D = getParameter(parameters, "D");
  var result = {};
  var r = D / 2.0;
  var M = G + K;
  var N = G - K;
  var P = Math.PI / 180.0;
  result["R"] = r * (M / N);
  result["A"] = N / (D * P);
  return result;
}
