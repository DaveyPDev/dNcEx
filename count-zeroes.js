function countZeroes (arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor(left + (right - left) / 2);
		if (arr[middle] == 1) {
			left = middle + 1;
		}
		else if (arr[middle] === 0) {
			right = middle - 1;
		}
	}
	return arr.length - left;
}

module.exports = countZeroes;

console.log(countZeroes([ 1, 1, 1, 1, 0, 0 ])); // 2
console.log(countZeroes([ 1, 0, 0, 0, 0 ])); // 4
console.log(countZeroes([ 0, 0, 0 ])); // 3
console.log(countZeroes([ 1, 1, 1, 1 ])); // 0
