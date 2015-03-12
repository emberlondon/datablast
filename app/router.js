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
  this.route('dockyard');
  this.route('hire-dockyard');
  this.route('wicked-good-ember');
  this.route('kayako');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('slack');
  this.route('forum');
  this.route('website');
  this.route('datablast');
  this.route('emberconf');
  this.route('emberconfreaks');
  this.route('glimmer');
  this.route('release-cycle');
  this.route('favourite-talks');
  this.route('end');
  this.route('on-to-the-talks');
});

export default Router;
