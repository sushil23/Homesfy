import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './books.route';
import services from './../services/services.module';

export default angular.module('app.books', [ngRoute, services])
    .config(routing)
    .name;