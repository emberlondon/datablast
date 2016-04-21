import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('sapient');
  this.route('announcements');
  this.route('codeschool');
  this.route('emberfest');
  this.route('jazoon');
  this.route('survey');
  this.route('embercamp');
  this.route('upcoming-events');
});

export default Router;
