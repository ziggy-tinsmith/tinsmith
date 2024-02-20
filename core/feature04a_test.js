var feature04ANames = ["M"];
var feature04AAccuracies = [0];
var feature04ATypes = [true];

function test01Feature04A() {
  var arguments = {"A": 40};
  var expected = {"M": 773};
  genericTester(feature04A_core(arguments), expected, feature04ANames, feature04AAccuracies, feature04ATypes);;
}

test01Feature04A();
