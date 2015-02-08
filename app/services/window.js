import Ember from 'ember';

export default Ember.Object.extend({
  height: 0,

  init: function() {
    this.listener = Ember.run.bind(this, 'resize');
    window.addEventListener('resize', this.listener);
    Ember.run(this, 'resize');
  },

  resize: function(event) {
    this.set('height', $(window).height());
  },

  willDestroy: function() {
    window.removeEventListener('resize', this.listener);
    delete this.listener;
  }
});
