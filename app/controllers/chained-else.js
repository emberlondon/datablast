import Ember from 'ember';

export default Ember.Controller.extend({
  password: '',
  empty: Ember.computed.equal('password.length', 0),
  tooShort: Ember.computed.lt('password.length', 6),
  tooLong: Ember.computed.gt('password.length', 12)
});
