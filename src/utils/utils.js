export const sayHi = () => {
	// console.log('inside utils.js');
}

export const getParameterByName = (name) => {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Returns array of PIDs from the URL query string.
export const parseQueryString = (variable) => {
	const query = window.location.search.substring(1);
	// console.log(query) // pid=nrewards&pid=cashrewards&pid=morerewards
	const vars = query.split("&");
	// console.log(vars) // [ 'pid=nrewards', 'pid=cashrewards', 'pid=morerewards' ]
	const values = vars.map((parameter) => {
		return parameter.substr((parameter.lastIndexOf('=')) + 1);
	});
	console.log(values); // [ 'nrewards', 'cashrewards', 'morerewards' ]
}

