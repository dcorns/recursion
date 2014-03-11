//Model $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
var MainModel = Backbone.Model.extend({});
var inputModel = new MainModel({aryIn:[3,12,7,25,60,2,56,90,8,15],pos:1,aryPos:[], valueIdx:0});
var outputModel = new MainModel({min: 'Mn', max: 'Mx',sorted:[], leftSet: false, rightSet:false});
//Model Events
inputModel.on('change',function(){
	alert('input changed to '+console.log(inputModel.get('root')));
});


//View $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
var MainView = Backbone.View.extend({});
var inputView = new MainView({model: inputModel});

//Controller $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//using quick sort method
var rangeSearchBST = function(){
	
	//load model values
	console.log('rangeSearchBST--Start');
	var arySorted = outputModel.get('sorted');
	var aryPos = inputModel.get('aryPos');
	var aryIn = inputModel.get('aryIn');
	var pos = inputModel.get('pos');
	var valueIdx = inputModel.get('valueIdx');

	console.log(valueIdx+','+pos);
	console.log(aryPos); console.log(aryIn.length);
	if (valueIdx > aryIn.length){
		console.log(aryPos);
		return;
	}

	
	if (pos > aryIn.length){
		console.log('enter 1');
		aryPos.push(valueIdx);
		inputModel.set({'aryPos':aryPos});
		pos = valIdx+2;
		inputModel.set({'valueIdx':valueIdx++});
		console.log('exit 1');
		rangeSearchBST();	
	}
	console.log(aryIn[pos]); console.log(aryIn[valueIdx]);
	if(aryIn[pos] < aryIn[valueIdx]){
		console.log('Enter 2');
		console.log(pos);
		inputModel.set({'pos':pos++});
		console.log('exit 1');
		rangeSearchBST();
	}

	
	

}