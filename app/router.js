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
  this.route('in-the-wild');
  this.route('apple-music');
  this.route('playstation-now');
  this.route('consul');
  this.route('cool-tools');
  this.route('ember-twiddle');
  this.route('2-0-0');
  this.route('2-0-blog-post');
  this.route('ember-data');
  this.route('ember-data-blog-post');
  this.route('ember-data-new-store-methods');
  this.route('ember-data-new-peek-methods');
  this.route('ember-data-new-fetch-methods');
  this.route('ember-data-new-reload');
  this.route('ember-data-new-background-reload');
  this.route('ember-data-new-should-reload');
  this.route('ember-cli');
  this.route('ember-cli-1-13');
  this.route('ember-cli-1-13-1');
  this.route('ember-cli-migrate');
  this.route('on-to-the-talks');
});

export default Router;
