import angular from 'angular';
import Persons from './persons/persons';
import Person from './person/ng/person';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Persons,
  Person,
  About
])

.name;

export default componentModule;
