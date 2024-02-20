var feature51Names = ["SR", "BR", "KS", "GS", "PointsL", "H", "B"];
var feature51Accuracies = [0, 0, 1, 1, 0, 0, 0];
var feature51Types = [true, true, true, true, false, false, false];

function test01feature51() {
  var arguments = {"K": 200, "G": 300, "L": 180, "D": 310, "E": 10, "T": 6};
  var expected = {"SR": 364, "BR": 560, "KS": 101.6, "GS": 156.6, "PointsL": [101, 46], "H": [0, 95], "B": [144, 56]};
  genericTester(feature51_core(arguments), expected, feature51Names, feature51Accuracies, feature51Types);
}

test01feature51();
