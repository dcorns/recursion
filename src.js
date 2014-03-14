//Model $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
var MainModel = Backbone.Model.extend({});
var inputModel = new MainModel({aryIn:[3,12,6],offset:0,aryOffset:[], valueIdx:0});
var outputModel = new MainModel({valuePos:0,sorted:[]});
//Model Events


//View $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
var MainView = Backbone.View.extend({});
var inputView = new MainView({model: inputModel});

//Controller $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//using quick sort method
var rangeSearchBST = function(){
	
	//load model values
//	console.log('rangeSearchBST--Start');
	var arySorted = outputModel.get('sorted');
	var aryOffset = inputModel.get('aryOffset');
	var aryIn = inputModel.get('aryIn');
	console.log(aryOffset);
//	var valueIdx = inputModel.get('valueIdx');

	
	var valueIdx = inputModel.get('valueIdx');
	//When valueIdx is greater that the length of input array the positions have all been asigned return sort.
	if(valueIdx > aryIn.length){

		return;
	}


	//valueIdx incremented here to select the next test value also reset pos to match valueIdx + 1 for next comparison value and reset valuePos to start position at current postition and add pos for the current root value to aryPos.
	var offset = inputModel.get('offset');
	if(offset > aryIn.length){
		inputModel.set({'valueIdx':inputModel.get('valueIdx')+1});
		aryOffset.push(outputModel.get('valueOffset'));
		inputModel.set({'aryOffset':aryOffset});
		offset = inputModel.get('valueIdx') + 1;
		outputModel.set({'valuePos':inputModel.get('valueIdx')});


	}
	//If a value is less than value being tested, advance the values position index
	if(aryIn[inputModel.get('valueIdx')] > aryIn[offset]){
		outputModel.set({'valuePos':offset});
	}

	//pos points to each element that has not compared
	offset++;
		inputModel.set({'offset':offset});
		console.log('valueIdx:'+inputModel.get('valueIdx')+', offset'+inputModel.get('offset')+', valuePos:'+outputModel.get('valuePos'));
	rangeSearchBST();

}