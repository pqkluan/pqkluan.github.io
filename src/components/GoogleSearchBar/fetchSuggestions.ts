export default async function fetchSuggestions(input: string): Promise<string[]> {
	if (!input) return [];

	const proxy = 'https://cors.bridged.cc';
	const url = 'https://suggestqueries.google.com/complete/search';
	const queries = new URLSearchParams({ client: 'firefox', q: input }).toString();

	const response = await fetch(`${proxy}/${url}?${queries}`);
	const result = await response.json();

	if (!Array.isArray(result) || result.length < 2) return;
	return result[1];
}
