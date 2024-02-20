var feature32Names = ["AA", "BA", "LA", "HA", "AB", "BB", "LB", "HB", "Area"];
var feature32Accuracies = [0, 0, 0, 0, 0, 0, 0, 0, 2];
var feature32Types = [true, false, false, false, true, false, false, false, true];

function test01feature32() {
  var arguments = {"A": 500, "B": 600, "H": 300, "I": 2, "C": 400, "D": 500, "S": 300};
  var expected = {"AA": 81, "BA": [-3, 42], "LA": [504, 252, 504, 301, 603, 302, 604], "HA": [0, 300, 304], "AB": 81, "BB": [-3, 42], "LB": [404, 202, 404, 251, 503, 252, 504], "HB": [0, 300, 304], "Area": 0.61};
  genericTester(feature32_core(arguments), expected, feature32Names, feature32Accuracies, feature32Types);
}

test01feature32();
