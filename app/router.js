import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('sapient');
  this.route('announcements');
  this.route('line-up');
  this.route('embercamp');
  this.route('embercamp-yehuda');
  this.route('embercamp-miguel');
  this.route('embercamp-ghost');
  this.route('embercamp-conversation');
  this.route('ember-news');
  this.route('glimmer-2');
  this.route('htmlbars-deep-dive');
  this.route('ember-cli-perf');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('short-talks');
  this.route('remote-talks');
  this.route('project-night-roster');
  this.route('on-to-the-talks');
});

export default Router;
