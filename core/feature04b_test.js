var feature04BNames = ["A", "B"];
var feature04BAccuracies = [0, 0];
var feature04BTypes = [true, true];

function test01Feature04B() {
  var arguments = {"M": 773};
  var expected = {"A": 40, "B": 50};
  genericTester(feature04b_core(arguments), expected, feature04BNames, feature04BAccuracies, feature04BTypes);
}

test01Feature04B();
