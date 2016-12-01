
	var width = 7; 
	var nblines = 7;

	function initTiles() {
		console.log("initTiles");//je sais pas débug
		/*for(var i = 0 ; i < nblines; i++){
			$(document).findElementById("gameview").append(`<div class="line col-md-7" id=line`+i+`></div>`); 
			for(var j = 0 ; j < width ; j++){
				$(document).findElementById("line"+i).append(`<div class="tile col-md-1" id=tile`+j+`></div>`); 
			}
		}*/
	}

	function updateScore(i){
		console.log("updateScore");
		$(document).findElementById("score").textContent = i ;
	}

	$(document).onload(function(e){
		initTiles();
		updateScore(5);
	});