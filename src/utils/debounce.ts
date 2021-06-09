/**
 * Debounce an function after a duration
 *
 * @param callback
 * @param duration
 * @returns
 */
export default function debounce<P>(
	callback: (params: P) => void,
	duration: number,
): (params: P) => void {
	let timer: NodeJS.Timeout;

	return (params: P) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => callback(params), duration);
	};
}
