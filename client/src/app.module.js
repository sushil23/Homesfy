import angular from 'angular';
import 'bootstrap';

import './styles/app.scss';
import MainController from './main.controller';
import routing from './app.route';
import books from './books/books.module';
import users from './users/users.module';
import transactions from './transactions/transactions.module';

angular.module('libraryApp', [books, users, transactions])
    .config(routing)
    .controller('MainController', MainController);