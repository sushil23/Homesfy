import angular from 'angular';
import AngularApollo from 'angular1-apollo';

import config from './services.config';
import dataService from './data.service';

export default angular.module('app.services', [AngularApollo])
    .config(config)
    .service('dataService', dataService)
    .name;