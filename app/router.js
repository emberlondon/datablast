import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('line-up');
  this.route('sapient');
  this.route('crowdstrike');
  this.route('announcements');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('slack');
  this.route('forum');
  this.route('website');
  this.route('datablast');
  this.route('glimmer');
  this.route('on-to-the-talks');
});

export default Router;
