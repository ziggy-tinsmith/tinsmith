var feature10Names = ["SR", "BR", "SC", "BC", "ZMKS", "ZMGS", "WLL", "D", "Area"];
var feature10Accuracies = [0, 0, 0, 0, 1, 1, 1, 1, 2];
var feature10Types = [true, true, true, true, true, true, true, true, true];

function test01Feature10() {
  var arguments = {"K": 200, "G": 400, "L": 100, "E": 10, "T": 16, "ET": 20};
  var expected = {"SR": 131, "BR": 293, "SC": 36, "BC": 81, "ZMKS": 29.1, "ZMGS": 64.9, "WLL": 161.4, "D": 167.2, "Area": 0.13};
  genericTester(feature10_core(arguments), expected, feature10Names, feature10Accuracies, feature10Types);
}

test01Feature10();
