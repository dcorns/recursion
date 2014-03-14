//Input a sorted array list, Output representation of a binary tree of the form {root:r,left:lt,right:rt} Nodes below the top node will be embedded within it. {root:r,left:{root: sr, left:null, right:null},right:{root: null}} ([sr,r])
//Emplementation: An * will be added to the root value to distinguish it throughout. The left object will take over the 0 index until reaching root at which time the right object will begin replacing the length-1 index until reaching root at which time the root object will be created using right and left
'use strict';
var arrayToBST = function(list){
	//Make sure the list is valid
	if(list !== null){
		//Detect first run by the first element being of type number
		console.log(list);
		if(typeof list[0] === 'number'){
			//If this is first time
			//Check if recursion needed, No recursion is needed for arrays of 3 or less
			if(list.length < 4){
				return makeQuickTree(list);
			}
			else{
				//store root
				//create first object
				arrayToBST(firstRun(list));
				}
		
		}
		//build tree object
		else{
			//test for root marker
			if(list[1] + 0 == list[1]){
				//do left node
				arrayToBST(addLeftNode(list));
			}
			else{
				//test for end: if all that is left is a head object, the root marker, and a tail object end the recursion
				if(list.length == 3){
					list = joinToRoot(list);
					console.log(list);
					return list[0];
				}
				else{
					//do right node
					arrayToBST(addRightNode(list));
				}
				
			}
		}
		
	
	}
	
		
};

var joinToRoot = function(list){
	//extract root value
	var root = list[1].substr(1);
	//Combine into the tree top
	list = makeBtNode(root,list[0],list[2]);
	return list;
};

var addLeftNode = function(list){
	//left object is at zero, next value is at 0+1
	//Make new node with existing object as left branch and replace existing object with it
	list[0] = makeBtNode(list[1],list[0],null);
	list.splice(1,1);
	return list;		
};

var addRightNode = function(list){
	//right object is at length-1, next value is at length-2
	//Make new node with existing object as right branch and replace existing object with it
	list[list.length-1] = makeBtNode(list[list.length-2],null,list[list.length-1])
	list.splice(list.length-2,1);
	return list;						
};

var makeBtNode = function(root,left,right){
	return {'root':root,'left':left,'right':right};
};

var firstRun = function(list){
	//find the root
	var rtIdx = Math.floor(list.length/2);
	//add marker to root in the array
	list[rtIdx]='*' + list[rtIdx];
	//create first object 
	list[0] = makeBtNode(list[0],null,null);
	return list;
};

var makeQuickTree = function(list){
	switch (list.length){
		case 1:
		return makeBtNode(list[0],null,null);
		break;
		case 2:
		var left = makeBtNode(list[0],null,null);
		return makeBtNode(list[1],left,null);
		break;
		case 3:
		var left = makeBtNode(list[0],null,null);
		var right = makeBtNode(list[2],null,null);
		return makeBtNode(list[1],left,right);
		break;
	}
};