package main

import (
	"fmt"
	"math"
	"testing"
)

func floatify(value interface{}) float64 {
	switch value.(type) {
	case int:
		return float64(value.(int))
	case int16:
		return float64(value.(int16))
	case int32:
		return float64(value.(int32))
	case int64:
		return float64(value.(int64))
	case uint:
		return float64(value.(uint))
	case uint16:
		return float64(value.(uint16))
	case uint32:
		return float64(value.(uint32))
	case uint64:
		return float64(value.(uint64))
	case float32:
		return float64(value.(float32))
	case float64:
		return value.(float64)
	}
	return math.NaN()
}

func floatifyArray(array []interface{}) []float64 {
	floatified := make([]float64, 0)
	for _, value := range array {
		floatified = append(floatified, floatify(value))
	}
	return floatified
}

func extractParameters(arguments map[string]interface{}, names []string) map[string]float64 {
	parameters := make(map[string]float64)
	for _, name := range names {
		if parameter, found := arguments[name]; found {
			parameters[name] = floatify(parameter)
		} else {
			return nil
		}
	}
	return parameters
}

func getParameter(parameters map[string]float64, name string) float64 {
	parameter, _ := parameters[name]
	return parameter
}

func equalsFormatted(value1, value2 float64, format string) bool {
	return fmt.Sprintf(format, value1) == fmt.Sprintf(format, value2)
}

func equalsFormattedArray(t *testing.T, value1, value2 []float64, format string) bool {
	if len(value1) != len(value2) {
		return false
	}
	for i := 0; i < len(value1); i++ {
		if !equalsFormatted(value1[i], value2[i], format) {
			return false
		}
	}
	return true
}

func checkWithAccuracy(t *testing.T, result map[string]interface{}, expected map[string]interface{}, name string, accuracy string, simple bool) {
	if simple {
		value, _ := result[name]
		valueExpected, _ := expected[name]
		if !equalsFormatted(floatify(value), floatify(valueExpected), accuracy) {
			t.Errorf("The value '%s' is incorrect (got: %v, expected: %v)!", name, value, valueExpected)
		}
	} else {
		valuesRaw, _ := result[name]
		values := floatifyArray(valuesRaw.([]interface{}))
		valuesExpectedRaw, _ := expected[name]
		valuesExpected := floatifyArray(valuesExpectedRaw.([]interface{}))
		if !equalsFormattedArray(t, values, valuesExpected, accuracy) {
			t.Errorf("The value '%s' is incorrect (got: %v, expected: %v)!", name, values, valuesExpected)
		}
	}
}

func genericTester(t *testing.T, result map[string]interface{}, expected map[string]interface{}, names []string, accuracies []string, types []bool) {
	for index, name := range names {
		accuracy := accuracies[index]
		simple := types[index]
		checkWithAccuracy(t, result, expected, name, accuracy, simple)
	}
}
