import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './transactions.route';
import services from './../services/services.module';

export default angular.module('app.transactions', [ngRoute, services])
    .config(routing)
    .name;