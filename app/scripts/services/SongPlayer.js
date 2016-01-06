(function() {
	function SongPlayer(Fixtures){
		
 		// @desc Service Song Player 
		var SongPlayer = {};
		
		//desc album contains list of songs
		var currentAlbum = Fixtures.getAlbum();
		
		// @desc Buzz object audio file
		var currentBuzzObject = null;
		
		/**
 			* @desc Stops currently playing song and loads new audio file as currentBuzzObject
 			* @param {Object} song
		*/
		var setSong = function(song) {
    		if (currentBuzzObject) {
        		stopSong();
    		}
 
    		currentBuzzObject = new buzz.sound(song.audioUrl, {
        		formats: ['mp3'],
        		preload: true
    		});
 
    		SongPlayer.currentSong = song;
 		};
		
		/**
 			* @desc uses play method on currentBuzzObject
 			* @param {Object} song
		*/
		var playSong = function(song, currentBuzzObject){
			currentBuzzObject.play();
			song.playing = true;
		};
		
		/**
 			* @desc gets an index of given sobg from the currentAlbum
 			* @param {Object} song index
		*/
		var getSongIndex = function(song){
			return currentAlbum.songs.indexOf(song);
		};
		
		
		/**
 			* @desc stops playing song 
		*/
		var stopSong = function(){
			currentBuzzObject.stop();
			SongPlayer.currentSong.playing = null;
		};
		
		//This sets first song of the album as default
		setSong(currentAlbum.songs[0]);
		
		/**
 			* @desc Plays a song whether it is paused or not.
 			* @param {Object} currentSong
		*/
		SongPlayer.play = function(song) {
			song = song || SongPlayer.currentSong;
			if(SongPlayer.currentSong !== song){
				setSong(song);
       			playSong(song, currentBuzzObject);
			}
			else if(SongPlayer.currentSong === song) {
				if(currentBuzzObject !== null && currentBuzzObject.isPaused()){
					playSong(song, currentBuzzObject);
				}
				
			}
     	};
		
		/**
 			* @desc Pauses a song when it is playing and updates song.playing parameter
		*/
		SongPlayer.pause = function(song){
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		};
		
		/**
 			* @desc gets the previous song in the album by decrementing the index
		*/
		
		SongPlayer.previous = function(){
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;
			
			if(currentSongIndex < 0){
				stopSong();
			} else{
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song, currentBuzzObject);
			}
		};
		
		
		/**
 			* @desc gets the next song in the album by incrementing the index
		*/
		SongPlayer.next = function(){
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;
		
			if(currentSongIndex >= currentAlbum.songs.length){
				stopSong();
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song, currentBuzzObject);
			}
		};

		return SongPlayer;
	}
	
	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();


