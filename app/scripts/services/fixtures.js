
(function() {
     function Fixtures(FIREBASE_URI, $firebaseArray) {
		
        var Fixtures = {};
		var ref = new Firebase(FIREBASE_URI);
		var albums = $firebaseArray(ref);
		console.log(albums);
		 var albumObj;
	 
		 Fixtures.addSong = function(song){
			albums.$add({name: albumName,
						artist: artistName,
						label: labelName,
						year: year,
						albumUrl: url,
						songs: {name: songName,
							   length: songLength,
							   audioUrl: audioUrl
							   }
						});
		 };
		 
		 Fixtures.getAlbum = function(){
			return albums;
		 };
		 		 
		ref.once("value", function(snapshot) {
		var data = snapshot.exportVal();
		 console.log(data);
	  	});

			 
  	return Fixtures;
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', ['FIREBASE_URI', '$firebaseArray', Fixtures]);
 })();
