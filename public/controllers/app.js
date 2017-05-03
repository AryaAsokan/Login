var LoginApp = angular.module('LoginApp', ['ngRoute']);
LoginApp.controller('mainController', function($scope , $location, $http, $routeParams) {	
	$scope.message = 'Welcomeee';
     $scope.formData = {}; 
    $scope.createUser = function() {
        $http.post('/api/register', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.users = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});
 