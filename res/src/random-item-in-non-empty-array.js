import randomItemInArray from 'random-item-in-array';

export function randomItemInNonEmptyArray<T>(array: T[]): T {
	const elem = randomItemInArray(array);
	if (elem === null || elem === undefined) {
		throw 'Array was empty';
	}
	return elem;
}