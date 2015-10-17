(function() {

	var posterApp = angular.module('posterApp', []);

	posterApp.controller('TitleController', function($scope){
		this.movie = {};


		this.getMovie = function(){			
			var movieID = movieHelper.getGenre();
			console.log(movieID)
			this.processSearch(movieID);	
			
		};

		this.processSearch = function (searchTerm){
			var mainUrl = "http://www.omdbapi.com/";
			mainUrl = mainUrl+"?i="+searchTerm;
			helper.call_HTTP(mainUrl,this.onJSONLoad,this);

		};


		this.onJSONLoad = function(data){
			var obj = JSON.parse(data);			
			this.movie = obj;
			$scope.show=true;
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

		this.changeImage = function(){
			var imageList =['mask.png', 'cat.png', 'creep.png'];
			var image;
			image = helper.getRandomElement(imageList);
			return  image
		}
});


})();