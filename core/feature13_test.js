var feature13Names = ["L", "FK", "FG", "T", "D", "R", "RK", "RG", "CK", "CG"];
var feature13Accuracies = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
var feature13Types = [true, false, false, true, true, true, true, true, true, true];

function test01Feature13() {
  var arguments = {"K": 200, "G": 400, "L": 100, "Z": 60, "S": 80, "E": 12};
  var expected = {"L": 128.06, "FK": [91.65, 183.30], "FG": [160.00, 320.00], "T": 145.16, "D": 282.36, "R": -23.17, "RK": 129.42, "RG": 294.84, "CK": 166.92, "CG": 415.92};
  genericTester(feature13_core(arguments), expected, feature13Names, feature13Accuracies, feature13Types);
}

test01Feature13();
