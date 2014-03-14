
var rangeSearchBST = function(data,root,min,max) 
{
	//Check for valid array
	if (data[index] != null){
		//Check for valid numbers
		if(root + min + max == root + min + max * 1){
			//Remove values not within range
			if(data[0] > max && data[0] < min){
				data.shift();
			}
			else{
				//Check that array has at least 2 elements
				if(data.length > 1){
					data.push(data.shift);
				}
				else{
					return data;
				}
			}

		}
	}
}