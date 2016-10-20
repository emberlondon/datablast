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
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('website');
  this.route('slack');
  this.route('datablast');
  this.route('ember-fest');
  this.route('ember-conf');
  this.route('ember-conf-cfp');
  this.route('module-unification');
  this.route('module-unification-b');
  this.route('ember-release');
  this.route('on-to-the-talks');
});

export default Router;
