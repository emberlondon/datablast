import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('line-up');
  this.route('sapient');
  this.route('announcements');
  this.route('code-school');
  this.route('enhance-conf');
  this.route('recap-2015');

  this.route('emberconf');
  this.route('embercamp');

  this.route('rfcs');
  this.route('ember-twiddle');

  this.route('ember-cli');
  this.route('babel-6');
  this.route('mirage');
  this.route('ember-cli-deploy');
  this.route('liquid-fire');
  this.route('fastboot');

  this.route('htmlbars');
  this.route('glimmer');

  this.route('ember-data');
  this.route('jsonapi');

  this.route('ember-cli-101');
  this.route('rock-n-roll');
  this.route('deliver-audacious');
  this.route('emberobserver');
  this.route('emberscreencasts');
  this.route('emberland');
  this.route('emberweekend');
  this.route('frontside-podcast');
  this.route('modern-web');
  this.route('global-meetup');

  this.route('this-year');
  this.route('diversity');
  this.route('diversity-why');
  this.route('diversity-what');
  this.route('code-of-conduct');
  this.route('diversity-sponsors');
  this.route('project-nights');
  this.route('roster');
  this.route('exchange');

  this.route('emberconf-2016');

  this.route('on-to-the-talks');
  this.route('upcoming-events');
});

export default Router;
