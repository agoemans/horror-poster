(function() {

	var posterApp = angular.module('posterApp', []);

	posterApp.controller('TitleController', function($scope){
		this.movie = null;
		this.show = false;


		this.getMovie = function(){			
			var movieID = movieHelper.getGenre();
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
			this.show = true;
			$scope.$apply();

		};

		this.isInitialized = function(){
			return !!this.movie;
		}

		this.getMainActor = function(){
			if(!this.isInitialized())
				return "";

			mainActor = this.movie.Actors.substring(0, this.movie.Actors.indexOf(","));
			return mainActor;
		};

		this.summary = function(){
			if(!this.isInitialized())
				return "";

			return movieHelper.getSubplot(this.movie.Plot);
		};

		this.imdbRating = function(){
			if(!this.isInitialized())
				return "";
			return movieHelper.getScore(this.movie.imdbRating);
		}	

		this.changeImage = function(){
			var imageList =['mask.png', 'cat.png', 'creep.png'];
			var image;
			image = helper.getRandomElement(imageList);
			return  image
		}

		this.getMovie();
});


})();