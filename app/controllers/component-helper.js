import Ember from 'ember';

export default Ember.Controller.extend({
  componentType: function() {
    return this.get('isRed') ? 'red-square' : 'green-square';
  }.property('isRed')
});
