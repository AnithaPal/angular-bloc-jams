
(function() {
	function Fixtures(FIREBASE_URI, $firebaseObject) {

		var Fixtures = {};
		var ref = new Firebase(FIREBASE_URI);
		var albumRef = ref.child('albums');
		var albums = $firebaseObject(albumRef);
		var albumPicasso = {};
		var songs = [];
		var firstSong;

		Fixtures.getAlbum = function(callback) {
			albumRef.orderByChild("The Colors").limitToFirst(1).once("value", function(snap) {
				console.log(callback);
				snap.forEach(function(album) {
					console.log(callback);
					if (callback) {
						callback(album.val());
					}
				})
			});
		};

		// Fixtures.getAlbum = function(ctrl) {
		// 	albumRef.orderByChild("The Colors").limitToFirst(1).once("value", function(snap) {
		// 		snap.forEach(function(album) {
		// 			ctrl.albumData = album.val();
		// 		})
		// 	});
		// };

		// TaskService.bindLastTaskToValue = function(callback) {
		// 	tasksRef.orderByChild("createdAt").limitToLast(1).once("value", function (snap) {
		// 		snap.forEach(function (task) {
		// 			callback(task.key(), task.val());
		// 		});
		// 	});
		// };

		Fixtures.getCollection = function(numberOfAlbums) {
			this.albums = [];
				for (var i = 0; i < numberOfAlbums; i++) {
					this.albums.push(angular.copy(albumPicasso));
			}
			return this.albums;
		}

		return Fixtures;
	}

	angular
		.module('blocJams')
		.factory('Fixtures', ['FIREBASE_URI', '$firebaseObject', Fixtures]);

})();
