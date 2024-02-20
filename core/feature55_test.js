var feature55Names = ["KR", "GR", "KC", "GC", "ZMKS", "ZMGS", "PointsR", "F", "PointsB", "PointsH"];
var feature55Accuracies = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
var feature55Types = [true, true, true, true, true, true, false, false, false, false, false];

function test01feature55() {
  var arguments = {"K": 200, "G": 300, "L": 180, "A": 20, "E": 10, "T": 6};
  var expected = {"KR": 364, "GR": 570, "KC": 250, "GC": 392, "ZMKS": 16.9, "ZMGS": 26.6, "PointsR": [486, 493, 517, 560], "F": [78, 156], "PointsB": [0, 23, 48, 78], "PointsH": [69, 62, 40, 0]};
  genericTester(feature55_core(arguments), expected, feature55Names, feature55Accuracies, feature55Types);
}

test01feature55();
