import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('line-up');
  // this.route('sapient');
  this.route('announcements');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('datablast');
  this.route('ember-2');
  this.route('ember-2-blog');
  this.route('ember-2-horse');
  this.route('lifecycle-hooks');
  this.route('on-to-the-talks');
  this.route('upcoming-events');
  this.route('website');
  this.route('pub');
});

export default Router;
