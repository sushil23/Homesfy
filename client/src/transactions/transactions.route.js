import TransactionController from './transactions.controller';

routes.$inject = ['$routeProvider', '$locationProvider'];
export default function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/transactions', {
            template: require('./transactions.html'),
            controller: TransactionController,
            controllerAs: 'transactions',
            resolve: {
                transactions: (dataService) => {
                    return dataService.getTransactions();
                }
            }
        });
}