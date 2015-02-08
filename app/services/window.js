import Ember from 'ember';
var $ = Ember.$;

export default Ember.Object.extend({
  height: 0,

  init: function() {
    this.listener = Ember.run.bind(this, 'resize');
    window.addEventListener('resize', this.listener);
    Ember.run(this, 'resize');
  },

  resize: function() {
    this.set('height', $(window).height());
  },

  willDestroy: function() {
    window.removeEventListener('resize', this.listener);
    delete this.listener;
  }
});
