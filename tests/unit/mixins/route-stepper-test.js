import Ember from 'ember';
import RouteStepperMixin from '../../../mixins/route-stepper';

QUnit.module('RouteStepperMixin');

// Replace this with your real tests.
QUnit.test('it works', function(assert) {
  var RouteStepperObject = Ember.Object.extend(RouteStepperMixin);
  var subject = RouteStepperObject.create();
  assert.ok(subject);
});
