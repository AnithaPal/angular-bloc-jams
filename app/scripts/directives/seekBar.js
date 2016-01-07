(function(){
	function seekBar($document){
		/**
			* @desc returns a distance that seekbar has to move from its current position to the latest(where event occured) 
 			* @param {Object} offsetPercent
		*/
		var calculatePercent = function(seekBar, event){
			var offsetX = event.pageX - seekBar.offset().left;
			var seekBarWidth = seekBar.width();
			var offsetXPercent = offsetX / seekBarWidth;
			offsetXPercent = Math.max(0, offsetXPercent);
			offsetXPercent = Math.min(1, offsetXPercent);
			return offsetXPercent;
		}
		
		return{
			templateUrl: '/templates/directives/seek_bar.html',
			replace: true,
			restrict: 'E',
			scope: {},
			link: function(scope, element, attributes){
				scope.value = 0;
				scope.max = 100;
				
				// @desc target element where change happens according to an event
				var seekBar = $(element);
				
				/**
					* @desc returns a percent value to fill the element) 
 					* @param {Object} percent
				*/
				var percentString = function(){
					var value = scope.value;
					var max = scope.max;
					var percent = value/max * 100;
					return percent + '%';
				};
				
				/**
					* @desc returns css rule to apply on an element) 
 					* @param {Object} percent
				*/
				scope.fillStyle = function(){
					return {width: percentString()};
				};
				
				/**
					* @desc reset value according to the new position
 	
				*/
				scope.onClickSeekBar = function(event){
					var percent = calculatePercent(seekBar, event);
					scope.value = percent * scope.max;
				};
				
				/**
					*it tracks the mouse events on the element
				*/
				scope.trackThumb = function(){
					$document.bind('mousemove.thumb', function(event){
						var percent = calculatePercent(seekBar, event);
						scope.$apply(function(){
							scope.value = percent * scope.max;
						});
					});
					
					$document.bind('mouseup.thumb', function(){
						$document.unbind('mousemove.thumb');
						$document.unbind('mouseup.thumb');
					});
				};
				
				/**
					* @desc returns css rule to apply on thumb  
 					* @param {Object} percent
				*/
				scope.thumbStyle = function(){
					return {left: percentString()};
				};
				
			}
		};
	}
	angular
		.module('blocJams')
		.directive('seekBar', ['$document', seekBar]);
})();