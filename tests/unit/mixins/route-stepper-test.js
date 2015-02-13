import Ember from 'ember';
import RouteStepperMixin from '../../../mixins/route-stepper';
import { module, test } from 'qunit';
let { Container } = Ember;
let FakeKeyboard = Ember.Object.extend({
  on: function() {}
});

module('RouteStepperMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let container = new Container();
  container.register('service:keyboard', FakeKeyboard);

  let Klass = Ember.Object.extend(RouteStepperMixin);
  let subject = Klass.create({ container: container });

  assert.ok(subject);
});
