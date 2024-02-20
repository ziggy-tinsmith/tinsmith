var feature25Names = ["KS", "GS", "RK", "RG"];
var feature25Accuracies = [1, 1, 0, 0];
var feature25Types = [true, true, false, false];

function test01feature25() {
  var arguments = {"K": 40, "G": 50, "L": 100, "D": 90, "E": 10, "T": 8};
  var expected = {"KS": 15.7, "GS": 20.0, "RK": [400, 398, 394], "RG": [511, 507, 503]};
  genericTester(feature25_core(arguments), expected, feature25Names, feature25Accuracies, feature25Types);
}

test01feature25();
