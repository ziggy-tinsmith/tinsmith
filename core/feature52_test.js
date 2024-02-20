var feature52Names = ["SR", "BR", "KS", "GS", "PointsL", "B", "H"];
var feature52Accuracies = [0, 0, 1, 1, 0, 0, 0];
var feature52Types = [true, true, true, true, false, false, false];

function test01feature52() {
  var arguments = {"K": 200, "G": 300, "L": 180, "D": 310, "E": 10, "T": 6};
  var expected = {"SR": 374, "BR": 570, "KS": 104.4, "GS": 159.4, "PointsL": [102, 53], "B": [146, 72], "H": [0, 120]};
  genericTester(feature52_core(arguments), expected, feature52Names, feature52Accuracies, feature52Types);
}

test01feature52();
