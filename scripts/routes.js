angular.module('App')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when("/monitor", {templateUrl: "views/monitor.html", controller: "Monitor"}).
	otherwise({redirectTo: '/monitor'});
}]);