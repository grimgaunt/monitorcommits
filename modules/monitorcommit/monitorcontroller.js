angular.module('App').controller('Monitor', function( $websocket, 
	$timeout,
	$scope,
	$http){

	$scope.events=[];


	// Setup websocket connection 

	var ws = $websocket.$new('ws://localhost:12345', 'gitevents'); // instance of ngWebsocket, handled by $websocket service

	ws.$on('$open', function () {
		console.log('Connection to server established');

	});

	ws.$on('$message', function(message) {

		
		$scope.$apply(function(){
			$scope.events.push(message)
			var emailAddr = message["user"].toString();

			console.log(emailAddr);

			if (emailAddr != null && emailAddr.includes('microsoft')){

				persist(message);
			}
		});


		
		function persist(event){

			 $http.post('http://localhost:12345/event', event);
		}
		


	});




	function addEvent(event){

		$scope.events.push(event);
		console.log($scope.events);

	}




});