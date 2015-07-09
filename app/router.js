import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('line-up');
  this.route('sapient');
  this.route('zapnito');
  this.route('announcements');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('website');
  this.route('slack');
  this.route('datablast');
  this.route('2-0-0-beta');
  this.route('ember-data');
  this.route('ember-data-new-store-methods');
  this.route('ember-data-new-peek-methods');
  this.route('ember-data-new-fetch-methods');
  this.route('ember-data-new-reload');
  this.route('ember-data-new-background-reload');
  this.route('ember-data-new-should-reload');
  this.route('on-to-the-talks');
});

export default Router;
