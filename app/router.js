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
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('hello');
  this.route('roster');
  this.route('embercamp');
  this.route('emberfest');
  this.route('translation');
  this.route('emberconf-vids');
  this.route('on-to-the-talks');
});

export default Router;
