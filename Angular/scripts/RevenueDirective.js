(function () {
	angular
	    .module('app')
	    .directive('revenueDir', revenueDir);

	  	function revenueDir() {
		  	return {
			    restrict: 'E',
			   	scope: {
			      revenue: '='
			    },
			    controller: function ($scope) {
			    	$scope.barStyle = {};
			    	$scope.barLineStyle = {};
			    	$scope.quota = {};

			    	$scope.revenueValues = function (actual, target) {
			    		var act = Math.floor(actual),
			    			tar = Math.floor(target);
			  	    	
			  	    	getPercentages(act, tar); 
			    	}

					function getPercentages(actual, target) {
		    			var now = new Date(),
			    			day = now.getDate(),
			    			daysThisMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(),
			    			actualPercentage = (actual / target) * 100,
			    			barLinePercentage = (day / daysThisMonth) * 100,
			    			bgColor = (actualPercentage > barLinePercentage) ? '#32CD32' : '#e12324';

			    		$scope.quota = (target / daysThisMonth) * day;
						$scope.barStyle = {
							'width': actualPercentage + '%',
							'background-color': bgColor
			    		};
			    		$scope.barLineStyle = {
							'margin-left': barLinePercentage + '%'
			    		};
					} 
			    },
			    template:
			    '<div class="placeholder">' + 
				    '<div class="profile-cont" ng-repeat="revPerf in revenue">' +
				      	'<div class="profile">' +
				    		'<img src="./assets/images/placeholder.jpg">' +
				    	'</div>' +
					    '<div class="profile-info">'+
						    '<div class="name">{{ revPerf.owner.name }}</div>' +
						    '<div class="revenueCont">{{revenueValues(revPerf.revenue_actual, revPerf.revenue_target)}}' +
						    	'<div class="actual">{{ revPerf.revenue_actual | currency:"$":0}}</div>' +
							    '<div class="target">{{ revPerf.revenue_target | currency:"$":0}}</div>' +
							    '<div class="barCont" >' +
							    	'<div ng-style="barStyle" class="bar"></div>' +
									' <div ng-style="barLineStyle" class="bar-line"><div class="bar-value">{{quota | currency:"$":0}}</div></div>' +
							    '</div>' +
							'</div>' +
					    '</div>' +
					'</div>' +
				'</div>'
			};
		}
})();


