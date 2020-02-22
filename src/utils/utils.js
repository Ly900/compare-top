export const sayHi = () => {
	// console.log('inside utils.js');
}

export const getParameterByName = (name) => {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Returns array of PIDs from the URL query string.
export const getPIDValues = () => {
	let pidVals = [];
	const query = window.location.search.substring(1);
	// console.log(query) // pid=nrewards&pid=cashrewards&pid=morerewards
	const vars = query.split("&");
	// console.log(vars) // [ 'pid=nrewards', 'pid=cashrewards', 'pid=morerewards' ]
	pidVals = vars.map((parameter) => {
		return parameter.substr((parameter.lastIndexOf('=')) + 1);
	});
	// console.log(pidVals); // [ 'nrewards', 'cashrewards', 'morerewards' ]
	return pidVals;
}

