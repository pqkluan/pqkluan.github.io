// TODO: write unit test

/**
 * Build a Google search URL with keyword
 *
 * @param keyword
 * @returns
 */
export function makeSearchUrl(keyword: string): string {
	return `https://www.google.com/search?q=${encodeURI(keyword)}`;
}

/**
 * Fetch Google's autocomplete suggestions by keyword
 * The result could be empty if the keyword is invalid or too unique.
 *
 * @param keyword
 * @returns suggestions. Ex: ['how to do smt', 'how to tie a knot']
 */
export async function fetchAutocompleteSuggestions(keyword: string): Promise<string[]> {
	if (!keyword) return [];

	// Free cors proxy
	const proxy = 'https://cors.bridged.cc';

	// Extract from this blog:
	// https://shreyaschand.com/blog/2013/01/03/google-autocomplete-api/
	const endpoint = 'https://suggestqueries.google.com/complete/search';

	const queries = new URLSearchParams({ client: 'firefox', q: keyword }).toString();

	const response = await fetch(`${proxy}/${endpoint}?${queries}`);
	const result = await response.json();

	if (!Array.isArray(result) || result.length < 2) return;

	return result[1];
}
