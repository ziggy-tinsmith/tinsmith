var feature47Names = ["ZMKS", "ZMGS", "KR", "GR", "RA", "L1", "L2", "M1", "M2"];
var feature47Accuracies = [1, 1, 0, 0, 0, 0, 0, 0, 0];
var feature47Types = [true, true, false, false, false, false, false, false, false];

function test01feature47() {
  var arguments = {"K": 200, "G": 300, "L": 200, "V": 200, "T": 6};
  var expected = {"ZMKS": 104.7, "ZMGS": 157.1, "KR": [500, 458, 361, 300], "GR": [750, 687, 541, 450], "RA": [600, 611], "L1": [250, 229, 180, 150], "L2": [218, 87, 132], "M1": [150, 76], "M2": [93]};
  genericTester(feature47_core(arguments), expected, feature47Names, feature47Accuracies, feature47Types);
}

test01feature47();
