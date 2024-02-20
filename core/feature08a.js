package main

func feature08A(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "I", "K"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	I := getParameter(parameters, "I")
	K := getParameter(parameters, "K")
	result := make(map[string]interface{})
	r := D / 2.0
	result["GB"] = (r + I) * (K / r)
	return result
}
