angular.module("Hoppy", [])
	//build  a factory on aother page and just keep the above in here. 
	.controller("HoppyController", HopCtrl);

HopCtrl.$inject = ['$http'];

function HopCtrl ($http)	{
		var Hph=this;
		Hph.users=[];
		window.Hph = Hph;

		Hph.greeting = "Hello!";
		Hph.beerData = {};
		Hph.showWell = false;


		Hph.searchBeers = function() {

		$http.get('/api/beers?name=' + Hph.beerName)
		.then(function(success) {
			console.log("Success: ", success);
			if(success.data.data) {
				Hph.beerData = success.data.data[0];
			if(Hph.beerData!={}) {
				Hph.showWell = true;
				} else {
					Hph.showWell = false;
				}
				console.log(Hph.beerData);
			} else {
				console.log("Beer not found!");
			}
			
		}, function(error) {
			console.log("Error: ", error);
		});
		// above is the pattern to specify a "promise" which is a future result
	}
		
}