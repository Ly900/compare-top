export const sayHi = () => {
	// console.log('inside utils.js');
}

export const getParameterByName = (name) => {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Returns array of PIDs from the URL query string.
// Example: http://localhost:3000/?pid=nrewards&pid=cashrewards&pid=morerewards => [ 'nrewards', 'cashrewards', 'morerewards' ]
export const getPIDValues = () => {
	let pidVals;
	const query = window.location.search.substring(1); // pid=nrewards&pid=cashrewards&pid=morerewards
	const vars = query.split("&"); // [ 'pid=nrewards', 'pid=cashrewards', 'pid=morerewards' ]
	pidVals = vars.map(parameter => parameter.split('=')[1]); // [ 'nrewards', 'cashrewards', 'morerewards' ]
	return pidVals;
}


