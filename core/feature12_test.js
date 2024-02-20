var feature12Names = ["KR", "GR", "KC", "GC", "OKR", "OGR", "ZMKS", "ZMGS", "WLL", "D", "Area"];
var feature12Accuracies = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2];
var feature12Types = [false, false, false, false, false, false, false, false, false, false, true];

function test01Feature12() {
  var arguments = {"K": 200, "G": 400, "L": 100, "S": 5, "E": 10, "T": 16, "ET": 20};
  var expected = {"KR": [141, 168, 194, 220, 247], "GR": [178, 204, 230, 257, 283], "KC": [39, 46, 54, 61, 68], "GC": [49, 56, 64, 71, 78], "OKR": [141, 168, 194, 220, 247], "OGR": [178, 204, 230, 257, 283], "ZMKS": [31.4, 37.2, 43.0, 48.8, 54.7], "ZMGS": [39.4, 45.2, 51.0, 56.9, 62.7], "WLL": [36.3, 36.3, 36.3, 36.3, 36.3], "D": [50.5, 54.8, 59.3, 64.0, 68.9], "Area": 0.13};
  genericTester(feature12_core(arguments), expected, feature12Names, feature12Accuracies, feature12Types);
}

test01Feature12();
