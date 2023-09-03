function sortedFrequency (arr, val) {
	function findFirstIdx (arr, val) {
		let left = 0;
		let right = arr.length - 1;
		let result = -1;

		while (left <= right) {
			let middle = Math.floor(left + (right - left) / 2);

			if (arr[middle] === val) {
				result = middle;
				right = middle - 1;
			}
			else if (arr[middle] < val) {
				left = middle + 1;
			}
			else {
				right = middle - 1;
			}
		}
		return result;
	}

	function findLastIdx (arr, val) {
		let left = 0;
		let right = arr.length - 1;
		let result = -1;

		while (left <= right) {
			let middle = Math.floor(left + (right - left) / 2);

			if (arr[middle] === val) {
				result = middle;
				left = middle + 1;
			}
			else if (arr[middle] < val) {
				left = middle + 1;
			}
			else {
				right = middle - 1;
			}
		}
		return result;
	}

	const firstIdx = findFirstIdx(arr, val);
	const lastIdx = findLastIdx(arr, val);

	if (firstIdx !== -1 && lastIdx !== -1) {
		return lastIdx - firstIdx + 1;
	}
	return -1;
}

module.exports = sortedFrequency;

console.log(sortedFrequency([ 1, 1, 2, 2, 2, 2, 3 ], 2)); // 4
console.log(sortedFrequency([ 1, 1, 2, 2, 2, 2, 3 ], 3)); // 1
console.log(sortedFrequency([ 1, 1, 2, 2, 2, 2, 3 ], 1)); // 2
console.log(sortedFrequency([ 1, 1, 2, 2, 2, 2, 3 ], 4)); // -1
