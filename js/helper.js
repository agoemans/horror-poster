var helper = (function(){
	var module = {};

	module.call_HTTP = function(url, callback, context){
		var ajaxhttp=new XMLHttpRequest();
			
		ajaxhttp.onload=function(){		
			callback.call(context,ajaxhttp.responseText);
		};
		
		ajaxhttp.open("GET",url);
		ajaxhttp.send();
	};

	module.getRandomElement = function(array){
		var ranNum = Math.floor(Math.random() * (array.length-1)) ;
		return array[ranNum];
	};

	return module;
}());