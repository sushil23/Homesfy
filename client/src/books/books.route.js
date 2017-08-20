import BookController from './books.controller';

routes.$inject = ['$routeProvider', '$locationProvider'];
export default function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/books', {
            template: require('./books.html'),
            controller: BookController,
            controllerAs: 'books',
            resolve: {
                books: (dataService) => {
                    return dataService.getBooks();
                }
            }
        })
}