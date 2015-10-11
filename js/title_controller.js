(function() {

	var posterApp = angular.module('posterApp', []);

	posterApp.controller('TitleController', function($scope){
		this.movie = {};

		this.getMovie = function(){			
			var movieID = movieHelper.getGenre();
			this.processSearch(movieID);	
			$scope.show=true;
		};

		this.processSearch = function (searchTerm){
			var mainUrl = "http://www.omdbapi.com/";
			mainUrl = mainUrl+"?i="+searchTerm;
			helper.call_HTTP(mainUrl,this.onJSONLoad,this);

		};

		this.onJSONLoad = function(data){
			var obj = JSON.parse(data);			
			this.movie = obj;
		    $scope.$apply();	
		};

		this.onJSONLoad = function(data){
			var obj = JSON.parse(data);			
			this.movie = obj;
		    $scope.$apply();	
		};

		this.getMainActor = function(actors){
			mainActor = actors.substring(0, actors.indexOf(","));
			return mainActor;
		};

		this.summary = function(plot){
			return movieHelper.getSubplot(plot);
		};

		this.imdbRating = function(rating){
			return movieHelper.getScore(rating);
		}	
});


})();