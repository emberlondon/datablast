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
  this.route('enhance-conf');
  this.route('recap-2015');
  this.route('on-to-the-talks');
  this.route('upcoming-events');
});

export default Router;
