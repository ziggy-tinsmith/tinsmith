var feature53Names = ["SR", "BR", "KS", "GS", "PointsL"];
var feature53Accuracies = [0, 0, 1, 1, 0];
var feature53Types = [true, true, true, true, false, false, false];

function test01feature53() {
  var arguments = {"K": 200, "G": 300, "L": 200, "A": 60, "D": 350, "T": 6};
  var expected = {"SR": 412, "BR": 618, "KS": 104.4, "GS": 156.7, "PointsL": [67, 71, -5, -54]};
  genericTester(feature53_core(arguments), expected, feature53Names, feature53Accuracies, feature53Types);
}

test01feature53();
