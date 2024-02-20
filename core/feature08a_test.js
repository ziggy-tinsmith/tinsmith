var feature08ANames = ["GB"];
var feature08AAccuracies = [0];
var feature08ATypes = [true];

function test01Feature08A() {
  var arguments = {"D": 200, "I": 90, "K": 10};
  var expected = {"GB": 19};
  genericTester(feature08a_core(arguments), expected, feature08ANames, feature08AAccuracies, feature08ATypes);
}

test01Feature08A();
