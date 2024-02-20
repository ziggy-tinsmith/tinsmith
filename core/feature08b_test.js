var feature08BNames = ["R2", "R1", "B", "C"];
var feature08BAccuracies = [0, 0, 0, 0];
var feature08BTypes = [true, false, true, true];

function test01Feature08B() {
  var arguments = {"D": 200, "I": 10, "T": 16};
  var expected = {"R2": 90, "R1": [100, 106], "B": 39, "C": 39};
  genericTester(feature08B_core(arguments), expected, feature08BNames, feature08BAccuracies, feature08BTypes);
}

test01Feature08B();
