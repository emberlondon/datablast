import Ember from 'ember';
import config from './config/environment';
import RouteStepper from './mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('sapient');
  this.route('announcements');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('line-up');
  this.route('datablast');
  this.route('bad-influence');
  this.route('emberconf-sold-out');
  this.route('esnext-6to5');
  this.route('iojs');
  this.route('broccoli-thursdays');
  this.route('broccolijs');
  this.route('data-sources');
  this.route('ember-flash');
  this.route('ember-inspector');
  this.route('survey');
  this.route('tom-blog');
  this.route('one-ten');
  this.route('one-ten-upgrading');
  this.route('chained-else');
  this.route('block-params');
  this.route('injected-properties');
  this.route('one-eleven');
  this.route('one-eleven-upgrading');
  this.route('inline-if');
  this.route('each-with-index');
  this.route('bound-attributes');
  this.route('component-helper');
  this.route('ember-cli');
  this.route('ember-data');
  this.route('json-api');
});

export default Router;
