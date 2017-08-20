import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './users.route';
import services from './../services/services.module';

export default angular.module('app.users', [ngRoute, services])
    .config(routing)
    .name;