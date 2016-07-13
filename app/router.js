import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('line-up');
  this.route('host', { path: 'sapient'});
  this.route('announcements');
  this.route('upcoming-events');
  this.route('roster');
  this.route('embercamp');
  this.route('embercamp-photo');
  this.route('embercamp-stats');
  this.route('emberfest');
  this.route('on-to-the-talks');
});

export default Router;
