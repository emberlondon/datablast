import Ember from 'ember';
import RouteStepperMixin from '../../../mixins/route-stepper';
import { module, test } from 'qunit';

module('RouteStepperMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteStepperObject = Ember.Object.extend(RouteStepperMixin);
  var subject = RouteStepperObject.create();
  assert.ok(subject);
});
