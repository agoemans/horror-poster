function getSearchValue(){
	var movieID = getGenre();
	processSearch(movieID);	
	
//	document.getElementById("poster").innerHTML = getGenre();

		
}

function updateUI(obj)
{
	document.getElementById("title").innerHTML = obj.Title;
	document.getElementById("summary").innerHTML = "'"+stringSlice(obj.Plot)+"'";
	console.log(obj.Plot);
	document.getElementById("score").innerHTML = obj.imdbRating;
	document.getElementById("stars").innerHTML = obj.Actors;


    // <div><p id="title"></p>
    // </div>
    // <div><p id="summary">
    // </div>
    // <div><p id="score">
    // </div>
    // <div><p id="stars">

};

function stringSlice(str){
	var startPos = str.indexOf(",");
	var secondStrStart = str.substring(startPos+1, str.length);
	var nextPos = secondStrStart.indexOf(",");
	var thirdStrStart = secondStrStart.substring(nextPos+1, secondStrStart.length)
	var myString = str.substring(startPos+1,secondStrStart);
	return thirdStrStart;
};

function processSearch(searchTerm){
	var mainUrl = "http://www.omdbapi.com/";
	mainUrl = mainUrl+"?i="+searchTerm;
	//url = urlCreator(searchTerm);
	helper.call_HTTP(mainUrl,onJSONLoad,this);

};

function onJSONLoad (data){
	var obj = JSON.parse(data);			
	updateUI(obj);
};


function getGenre(){
	var movieID = ["tt0876294", "tt0023694", "tt2379308", "tt0448120","tt0369735", "tt0387412","tt1686821","tt0103893"];

	return movieID[ranDomize(movieID.length)];
	
};

function getMovieinfo(){};

function ranDomize(arrayLength){
	var ranNum = Math.floor(Math.random() * (arrayLength-1)) + 1;
	return ranNum;
};

function genreObject(){
	var gObj ={
		title:'None',
		year:Null,
		ID:'None',
		title:'None',
		released:'None',
		director:'None',
		actors:'None',
		plot:'None',
		score:'None'
//{"Title":"The Zombie Diaries","Year":"2006","Rated":"R","Released":"12 Oct 2007","Runtime":"85 min","Genre":"Horror","Director":"Michael G. Bartlett, Kevin Gates","Writer":"Michael G. Bartlett, Kevin Gates","Actors":"Scott Ainslie, Toby Bowman, Victoria Summer, Juliet Forester","Plot":"In the early part of the 21st century, an unknown deadly virus is spreading among the population. The planet becomes infested with a new threat unlike any other The Undead. Three compelling...","Language":"English","Country":"UK","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc0NTk4NjMzOF5BMl5BanBnXkFtZTcwMzk2OTIwMg@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.1","imdbVotes":"4,120","imdbID":"tt0876294","Type":"movie","Response":"True"}
	};
};