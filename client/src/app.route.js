import ngRoute from 'angular-route';

routes.$inject = ['$routeProvider', '$locationProvider'];
export default function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .otherwise('/books');
}