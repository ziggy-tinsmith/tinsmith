var feature09BNames = ["F", "R", "D", "T", "L", "L1", "L2", "L3"];
var feature09BAccuracies = [0, 0, 0, 0, 0, 0, 0, 0];
var feature09BTypes = [false, false, false, true, false, false, false, false];

function test01Feature09B() {
  var arguments = {"D": 200, "A": 90};
  var expected = {"F": [99, 199], "R": [147, 294], "D": [48, 95], "T": 10, "L": [533, 563], "L1": [110, 140], "L2": [267, 297], "L3": [424, 454]};
  genericTester(feature09B_core(arguments), expected, feature09BNames, feature09BAccuracies, feature09BTypes);
}

test01Feature09B();

function test02Feature09B() {
  var arguments = {"D": 400, "A": 60};
  var expected = {"F": [143, 286], "R": [159, 318], "D": [16, 33], "T": 155, "L": [1224, 1264], "L1": [298, 338], "L2": [612, 652], "L3": [926, 966]};
  genericTester(feature09B_core(arguments), expected, feature09BNames, feature09BAccuracies, feature09BTypes);
}

test02Feature09B();
