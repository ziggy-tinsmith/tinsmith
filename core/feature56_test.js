var feature56Names = ["SR", "BR", "KS", "GS", "PointsL"];
var feature56Accuracies = [0, 0, 1, 1, 0];
var feature56Types = [true, true, true, true, false];

function test01feature56() {
  var arguments = {"K": 200, "G": 300, "L": 180, "A": 45, "E": 10, "T": 6};
  var expected = {"SR": 364, "BR": 560, "KS": 101.6, "GS": 156.6, "PointsL": [197, 106, -8, -47]};
  genericTester(feature56_core(arguments), expected, feature56Names, feature56Accuracies, feature56Types);
}

test01feature56();
