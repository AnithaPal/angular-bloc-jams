(function() {
	function AlbumCtrl($scope, Fixtures, SongPlayer){
		var ctrl = this;
		ctrl.currentAlbum = {};
		ctrl.songPlayer = SongPlayer;

		Fixtures.getAlbum(function(album) {
			ctrl.currentAlbum = album;
			ctrl.songPlayer.currentAlbum = album;
			ctrl.songPlayer.setFirstSongToCurrent();
			$scope.$apply;
			console.log(ctrl.currentAlbum);
		});

	};

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['$scope', 'Fixtures','SongPlayer', AlbumCtrl]);

})();
