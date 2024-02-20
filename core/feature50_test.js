var feature50Names = ["SR", "BR", "KS", "GS", "D", "PointsR1", "PointsR2", "PointsR3", "PointsR4", "PointsR5", "PointsR6"];
var feature50Accuracies = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0];
var feature50Types = [true, true, true, true, false, false, false, false, false, false, false];

function test01feature50() {
  var arguments = {"K": 200, "G": 300, "H": 100, "S": 6, "A": 45, "E": 10, "T": 6};
  var expected = {"SR": 392, "BR": 588, "KS": 104.4, "GS": 156.6, "D": [200, 217, 233, 250, 267, 283], "PointsR1": [416, 420, 429, 434], "PointsR2": [467, 462, 452, 448], "PointsR3": [480, 485, 495, 500], "PointsR4": [534, 528, 517, 512], "PointsR5": [544, 549, 561, 567], "PointsR6": []};
  genericTester(feature50_core(arguments), expected, feature50Names, feature50Accuracies, feature50Types);
}

test01feature50();

function test02feature50() {
  var arguments = {"K": 200, "G": 300, "H": 100, "S": 7, "A": 45, "E": 10, "T": 6};
  var expected = {"SR": 427, "BR": 640, "KS": 104.5, "GS": 156.7, "D": [200, 214, 229, 243, 257, 271, 286], "PointsR1": [450, 453, 461, 464], "PointsR2": [495, 491, 484, 480], "PointsR3": [510, 514, 522, 526], "PointsR4": [557, 553, 544, 540], "PointsR5": [570, 574, 584, 588], "PointsR6": [619, 614, 605, 600]};
  genericTester(feature50_core(arguments), expected, feature50Names, feature50Accuracies, feature50Types);
}

test02feature50();
