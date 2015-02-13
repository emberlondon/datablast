import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application'],
  attributeBindings: ['aria-live'],
  'aria-live': 'polite'
});
