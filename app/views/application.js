import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['application'],
  attributeBindings: ['aria-live'],
  'aria-live': 'polite'
});
