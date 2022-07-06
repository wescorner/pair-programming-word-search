const wordSearch = (matrix, word) => {
	let flag1 = false;
	let flag2 = true;
	let flag3 = false;

	for (let i = 0; i < matrix[0].length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (i === j) {
				if (word[i] !== matrix[i][j]) flag2 = false;
			}
		}
	}

	for (let i = 0; i < matrix[0].length; i++) {
		if (
			matrix[i].join("").includes(word) ||
			matrix[i].reverse().join("").includes(word)
		)
			flag1 = true;
		let verticalword = "";
		for (let j = 0; j < matrix.length; j++) {
			verticalword += matrix[j][i];
		}
		if (
			verticalword.includes(word) ||
			verticalword.split("").reverse().join("").includes(word)
		)
			flag3 = true;
	}
	return flag1 || flag2 || flag3;
};

module.exports = wordSearch;
