var feature57Names = ["SR", "BR", "KS", "GS", "PointsL"];
var feature57Accuracies = [0, 0, 1, 1, 0];
var feature57Types = [true, true, true, true, false];

function test01feature57() {
  var arguments = {"K": 200, "G": 300, "L": 180, "A": 45, "E": 10, "T": 6};
  var expected = {"SR": 374, "BR": 570, "KS": 104.4, "GS": 159.4, "PointsL": [197, 151, 16, -91]};
  genericTester(feature57_core(arguments), expected, feature57Names, feature57Accuracies, feature57Types);
}

test01feature57();
