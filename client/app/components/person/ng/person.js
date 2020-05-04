import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from "ng-redux";

import personComponent from './person.component';
import personDirective from './person.directive';

let personModule = angular.module('person', [
  uiRouter,
  ngRedux
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('person', {
      url: '/person/{personId}',
      component: 'person'
    });
})

.component('person', personComponent)
.directive('personDirective', personDirective)

.name;

export default personModule;
