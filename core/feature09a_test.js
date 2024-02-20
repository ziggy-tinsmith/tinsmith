var feature09ANames = ["F1", "F2", "H", "S", "Points", "P1L", "P2L"];
var feature09AAccuracies = [0, 0, 0, 1, 0, 0, 0];
var feature09ATypes = [true, true, true, true, false, false, false];

function test01Feature09A() {
  var arguments = {"D": 200, "A": 90, "L": 500, "T": 12};
  var expected = {"F1": 99, "F2": 199, "H": 508, "S": 24.5, "Points": [518, 513, 509, 505, 502, 501, 500], "P1L": [25, 339], "P2L": [182, 182]};
  genericTester(feature09a_core(arguments), expected, feature09ANames, feature09AAccuracies, feature09ATypes);
}

test01Feature09A();

function test02Feature09A() {
  var arguments = {"D": 400, "A": 90, "L": 600, "T": 16};
  var expected = {"F1": 167, "F2": 334, "H": 607, "S": 24.7, "Points": [629, 623, 617, 612, 608, 605, 602, 601, 600], "P1L": [136, 765], "P2L": [451, 451]};
  genericTester(feature09a_core(arguments), expected, feature09ANames, feature09AAccuracies, feature09ATypes);
}

test02Feature09A();
