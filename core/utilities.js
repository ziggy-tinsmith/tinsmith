function configure(configuration) {
  document.write('<table style="border: none;">');
  for (var i = 0; i < configuration.parametersKeys.length; i++) {
    var parameterKey = configuration.parametersKeys[i];
    var parameterLabel = configuration.parametersLabels[parameterKey];
    document.write(`<tr><td align="right">${parameterLabel}</td><td>=</td><td><input type="number" id="parameter_${parameterKey}"/></td></tr>`);
    document.getElementById(`parameter_${parameterKey}`).oninput = function () {
      var results = configuration.coreFunction();
      var resultsKeys = Object.keys(results);
      for (var j = 0; j < resultsKeys.length; j++) {
        var resultKey = resultsKeys[j];
        var result;
        if (Array.isArray(results[resultKey])) {
          result = results[resultKey].map(function (value) {
            return value.toFixed(configuration.resultsDigits[resultKey]);
          }).join(", ");
        } else {
          result = results[resultKey].toFixed(configuration.resultsDigits[resultKey]);
        }
        document.getElementById(`result_${resultKey}`).innerHTML = result;
      }
    }
  }
  for (var i = 0; i < configuration.resultsKeys.length; i++) {
    var resultKey = configuration.resultsKeys[i];
    var resultLabel = configuration.resultsLabels[resultKey];
    document.write(`<tr><td align="right">${resultLabel}</td><td>=</td><td><div id="result_${resultKey}"></div></td></tr>`);
  }
  document.write('</table>');
}

function extractParameters(names) {
  var parameters = {};
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    parameters[name] = document.getElementById(`parameter_${name}`).value;
  }
  return parameters;
}

function getParameter(parameters, name) {
  var parameter = parseFloat(parameters[name]);
  return parameter
}

function checkWithAccuracy(result, expected, name, accuracy, simple) {
  if (simple) {
    var value = result[name];
    var valueExpected = expected[name];
    console.log(name)
    console.log(value)
    console.log(expected)
    console.assert(
      value.toFixed(accuracy) == valueExpected.toFixed(accuracy),
      `The value ${name} is incorrect (got: ${value}, expected: ${valueExpected})`
    );
  } else {
    for (var i = 0; i < expected.length; i++) {
      var value = result[name][i];
      var valueExpected = expected[name][i];
      console.assert(
        value.toFixed(accuracy) == valueExpected.toFixed(accuracy),
        `The value ${name} at ${i} is incorrect (got: ${value}, expected: ${valueExpected})`
      );
    }
  }
}

function genericTester(result, expected, names, accuracies, types) {
  for (var index = 0; index < names.length; index++) {
    var name = names[index];
    accuracy = accuracies[index];
    simple = types[index]
    checkWithAccuracy(result, expected, name, accuracy, simple);
  }
}
