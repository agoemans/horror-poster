var movieHelper = (function(){
	var module = {};

	module.getSubplot = function(str){
		var startPos = str.indexOf(",");
		var secondStrStart = str.substring(startPos+1, str.length);
		var nextPos = secondStrStart.indexOf(",");
		var thirdStrStart = secondStrStart.substring(nextPos+1, secondStrStart.length)
		var myString = str.substring(startPos+1,secondStrStart);
		return thirdStrStart;
	};

	module.getGenre = function(){
		var movieID = ["tt0876294", "tt0023694", "tt2379308", "tt0448120","tt0369735", "tt0387412","tt1686821","tt0103893", "tt1591095","tt1922777", "tt0107387","tt0084787"];
		return helper.getRandomElement(movieID);
	};

	module.getScore = function(rating){
		return "Rated "+ rating + " on IMDB!"
	};

	return module;
}());