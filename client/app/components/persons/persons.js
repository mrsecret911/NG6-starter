import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from "ng-redux";

import personsComponent from './persons.component';

let personsModule = angular.module('persons', [
  uiRouter,
  ngRedux
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/persons');

  $stateProvider
    .state('persons', {
      url: '/persons',
      component: 'persons'
    });
})

.component('persons', personsComponent)

.name;

export default personsModule;
