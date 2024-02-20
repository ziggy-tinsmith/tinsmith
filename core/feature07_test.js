var feature07Names = ["Radius", "C", "S"];
var feature07Accuracies = [0, 0, 0];
var feature07Types = [false, true, true];

function test01Feature07() {
  var arguments = {"D": 200, "A": 90, "E": 10};
  var expected = {"Radius": [135.0, 145.0], "C": 189, "S": 194};
  genericTester(feature07_core(arguments), expected, feature07Names, feature07Accuracies, feature07Types);
}

test01Feature07();
