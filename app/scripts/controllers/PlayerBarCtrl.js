(function(){
	function PlayerBarCtrl(Fixtures, SongPlayer){
		this.albumData = Fixtures.getAlbum();
		this.songPlayer = SongPlayer;
		
		this.filterTimeCode = function(timeInSeconds) {
			var seconds = Number.parseFloat(timeInSeconds);
			var wholeSeconds = Math.floor(seconds);
			var minutes = Math.floor(wholeSeconds / 60);

			var remainingSeconds = wholeSeconds % 60;
			var output = minutes + ':';

			if (remainingSeconds < 10) {
				output += '0';   
			}

			output += remainingSeconds;
			return output;
		};
	};
	
	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);		
})();

