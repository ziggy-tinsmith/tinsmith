var feature54Names = ["SR", "BR", "KS", "GS", "PointsL"];
var feature54Accuracies = [0, 0, 1, 1, 0];
var feature54Types = [true, true, true, true, false, false, false];

function test01feature54() {
  var arguments = {"K": 200, "G": 300, "L": 200, "A": 60, "N": 350, "M": 400, "P": 200, "V": 350, "T": 6};
  var expected = {"SR": 412, "BR": 618, "KS": 104.7, "GS": 157.1, "PointsL": [-12, -16, -58, -88]};
  genericTester(feature54_core(arguments), expected, feature54Names, feature54Accuracies, feature54Types);
}

test01feature54();
