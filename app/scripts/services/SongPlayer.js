(function() {
	function SongPlayer(){
		/**
 			* @desc Service Song Player 
 			* @type {Object}
		*/
		var SongPlayer = {};
		
		/**
 			* @desc current song 
 			* @type {Object}
		*/
		var currentSong = null;
		/**
 			* @desc Buzz object audio file
 			* @type {Object}
 		*/
		var currentBuzzObject = null;
		
		/**
 			* @function setSong
 			* @desc Stops currently playing song and loads new audio file as currentBuzzObject
 			* @param {Object} song
		*/
		var setSong = function(song) {
    		if (currentBuzzObject) {
        		currentBuzzObject.stop();
        		currentSong.playing = null;
    		}
 
    		currentBuzzObject = new buzz.sound(song.audioUrl, {
        		formats: ['mp3'],
        		preload: true
    		});
 
    		currentSong = song;
 		};
		
		/**
 			* @function playSong
 			* @desc uses play method on currentBuzzObject
 			* @param {Object} song
		*/
		var playSong = function(song, currentBuzzObject){
			currentBuzzObject.play();
			song.playing = true;
		};
		
		/**
 			* @function play
 			* @desc Plays a song whether it is paused or not.
 			* @param {Object} currentSong
		*/
		
		SongPlayer.play = function(song) {
			if(currentSong !== song){
				setSong(song);
       			playSong(song, currentBuzzObject);
			}
			else if(currentSong === song) {
				if(currentBuzzObject.isPaused()){
					currentBuzzObject.play();
				}
				
			}
     	};
		/**
 			* @function pause
 			* @desc Pauses a song when it is playing and updates song.playing parameter
 			* @param {Object} currentSong
		*/
		SongPlayer.pause = function(song){
			currentBuzzObject.pause();
			song.playing = false;
		};

		return SongPlayer;
	}
	
	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();


