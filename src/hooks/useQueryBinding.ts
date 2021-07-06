export function useQueryBinding(paramName: string): [string, (paramValue: string) => void] {
	const params = new URLSearchParams(window.location.search);
	const initialValue = params.get(paramName) ?? '';

	function setter(newValue: string) {
		params.set(paramName, newValue);
		window.history.replaceState({}, '', `${location.pathname}?${params}`);
	}

	return [initialValue, setter];
}
