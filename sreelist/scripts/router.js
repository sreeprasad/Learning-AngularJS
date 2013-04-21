var sreesapp = angular.module('sreeprasadApp',[]);

sreesapp.config(function($routeProvider){

	$routeProvider.

		when('/',
				{
					controller:'ListController',
					templateUrl:'partials/list.ngt'
				}
			)
		.otherwise( {redirectTo:'/'});

});
	 





