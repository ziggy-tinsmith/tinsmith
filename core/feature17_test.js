package main

import "testing"

var (
	feature17Names      = []string{"S", "L", "Points", "B", "H"}
	feature17Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature17Types      = []bool{true, false, false, false, false}
)

func Test01feature17(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "A": 80, "G": 200, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{0, 2, 5, 8, 9, 9, 9, 9, 6, 2, 0}, "B": []interface{}{25, 20, 8, -8, -20, -25}, "H": []interface{}{-25, -20, -7, 8, 21, 25, 21, 8, -7, -20, -25}}
	genericTester(t, feature17(arguments), expected, feature17Names, feature17Accuracies, feature17Types)
}

func Test02feature17(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 70, "G": 1000, "V": 10, "T": 8}
	expected := map[string]interface{}{"S": 157.1, "L": []interface{}{1257, 1297}, "Points": []interface{}{0, 40, 113, 143, 146, 149, 122, 46, 0}, "B": []interface{}{205, 143, 0, -144, -207}, "H": []interface{}{-213, -144, 14, 157, 213, 159, 17, -142, -213}}
	genericTester(t, feature17(arguments), expected, feature17Names, feature17Accuracies, feature17Types)
}
