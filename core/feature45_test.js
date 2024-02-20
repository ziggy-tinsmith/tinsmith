var feature45Names = ["KR", "GR", "ZMKS", "ZMGS", "PointsR2", "PointsR1", "PointsRA", "SA", "LA", "PointsA", "SC", "LC", "Points"];
var feature45Accuracies = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0];
var feature45Types = [true, true, true, true, false, false, false, true, false, false, true, false, false];

function test01feature45() {
  var arguments = {"K": 200, "G": 300, "L": 200, "V": 200, "T": 6};
  var expected = {"KR": 400, "GR": 600, "ZMKS": 104.4, "ZMGS": 156.6, "PointsR2": [310, 344, 443, 516], "PointsR1": [465, 516, 664], "PointsRA": [620, 620], "SA": 157.1, "LA": [942, 972], "PointsA": [0, 73], "SC": 104.7, "LC": [628, 658], "Points": [0, 48, 145, 194]};
  genericTester(feature45_core(arguments), expected, feature45Names, feature45Accuracies, feature45Types);
}

test01feature45();

function test02feature45() {
  var arguments = {"K": 400, "G": 600, "L": 400, "V": 400, "T": 6};
  var expected = {"KR": 800, "GR": 1200, "ZMKS": 208.8, "ZMGS": 313.3, "PointsR2": [620, 689, 885, 1033], "PointsR1": [930, 1033, 1328], "PointsRA": [1239, 1239], "SA": 314.2, "LA": [1885, 1925], "PointsA": [0, 145], "SC": 209.4, "LC": [1257, 1297], "Points": [0, 97, 290, 387]};
  genericTester(feature45_core(arguments), expected, feature45Names, feature45Accuracies, feature45Types);
}

test02feature45();
