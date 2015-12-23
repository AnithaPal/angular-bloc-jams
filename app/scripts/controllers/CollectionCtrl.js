(function() {
	function CollectionCtrl(Fixtures){
		this.albums = Fixtures.getCollection(12);
		console.log(this.albums[0]);
	};
	
	angular
		.module('blocJams')
		.controller('CollectionCtrl', ['Fixtures', CollectionCtrl])
	
})();