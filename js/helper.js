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

	return module;
}());