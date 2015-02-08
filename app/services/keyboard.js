import Ember from 'ember';

let KEYS = {
  37: 'left',
  39: 'right'
};

export default Ember.Object.extend(Ember.Evented, {
  init: function() {
    this.listener = Ember.run.bind(this, 'keyDown');
    window.addEventListener('keydown', this.listener);
  },

  keyDown: function(event) {
    let name = KEYS[event.keyCode];

    if (name) {
      this.trigger(name);
    }
  },

  willDestroy: function() {
    window.removeEventListener('keydown', this.listener);
    delete this.listener;
  }
});
