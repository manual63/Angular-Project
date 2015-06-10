angularProject.controller('MenuController', function($scope, Menu) {
	console.log( 'Initialized Menu Controller!');

	$scope.menuList = Menu.query();
	console.log( $scope.menuList );
});