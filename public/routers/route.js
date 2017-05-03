LoginApp.config(function($routeProvider) {
        $routeProvider
        //route for the home page
        .when('/', {
            templateUrl : 'loginView.html',
            controller : 'mainController'
        })
        .when('/register', {
        	templateUrl : 'registerView.html',
        	controller : 'registrationController'
        })
    }); 