import UserController from './users.controller';

routes.$inject = ['$routeProvider', '$locationProvider'];
export default function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/users', {
            template: require('./users.html'),
            controller: UserController,
            controllerAs: 'users',
            resolve: {
                users: (dataService) => {
                    return dataService.getUsers();
                }
            }
        })
}