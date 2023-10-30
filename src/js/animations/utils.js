export function getNextActiveIndex(current, size) {
	return (current + 1) % size;
}