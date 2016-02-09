
(function() {
	function Fixtures(FIREBASE_URI, $firebaseArray) {
		
		var Fixtures = {};
		var ref = new Firebase(FIREBASE_URI);
		var albums = $firebaseArray(ref);
		var albumPiccaso = {};		


		Fixtures.getAlbum = function() {
			console.log(albumPiccaso);
			return albumPiccaso;
		};

		Fixtures.getCollection = function(numberOfAlbums) {
			this.albums = [];
				for (var i = 0; i < numberOfAlbums; i++) {
					this.albums.push(angular.copy(albumPicasso));
			}
			return this.albums;
		}


		function dataRetrieved() {
			console.log(albumPiccaso);
		}

		ref.once("value", function (snapshot) {
			snapshot.forEach(function (childSnapshot) {
				var key = childSnapshot.key();
				var childData = childSnapshot.val();
				albumPiccaso[key] = childData;
			});

			dataRetrieved();
		});			

		return Fixtures;
	}
 
	angular
		.module('blocJams')
		.factory('Fixtures', ['FIREBASE_URI', '$firebaseArray', Fixtures]);
	
})();






//		 Fixtures.getSong = function (id, callback) {
//			ref.orderByChild(id).equalTo(id).on("value", function (snapshot) {
//				console.log(snapshot.val());
//			callback(snapshot.val());
//			});
//		};
