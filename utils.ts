export const parseNum = (n: string) => {
	let res;
	res = Number(parseFloat(n).toFixed(2)).toLocaleString('en');

	return res;
};
