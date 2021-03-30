
function flatten(arr) {
	var result = arr.reduce(function (arrRes, currArr) {
	   return arrRes.concat(Array.isArray(currArr) ? flatten(arrRes) : currArr);
	 }, []);
	 return result;
   }