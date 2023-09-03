function findRotatedIndex (arr, num) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor(left + (right - left) / 2);

		if (arr[middle] === num) {
			return middle;
		}

		if (arr[left] <= arr[middle]) {
			if (arr[left] <= num && num < arr[middle]) {
				right = middle - 1;
			}
			else {
				left = middle + 1;
			}
		}
		else {
			if (arr[middle] < num && num <= arr[right]) {
				left = middle + 1;
			}
			else {
				right = middle - 1;
			}
		}
	}

	return -1;
}

module.exports = findRotatedIndex;

console.log(findRotatedIndex([ 3, 4, 1, 2 ], 4)); // 1
console.log(findRotatedIndex([ 6, 7, 8, 9, 1, 2, 3, 4 ], 8)); // 2
console.log(findRotatedIndex([ 6, 7, 8, 9, 1, 2, 3, 4 ], 3)); // 6
console.log(findRotatedIndex([ 37, 44, 66, 102, 10, 22 ], 14)); // -1
console.log(findRotatedIndex([ 6, 7, 8, 9, 1, 2, 3, 4 ], 12)); // -1
