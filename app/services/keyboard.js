import Ember from 'ember';

const { Service, Evented, run } = Ember;

const KEYS = {
  33: 'left',
  34: 'right',
  37: 'left',
  39: 'right'
};

export default Service.extend(Evented, {
  init() {
    this.listener = run.bind(this, 'keyDown');
    window.addEventListener('keydown', this.listener);
  },

  keyDown(event) {
    let name = KEYS[event.keyCode];

    if (name) {
      this.trigger(name);
    }
  },

  willDestroy() {
    window.removeEventListener('keydown', this.listener);
    delete this.listener;
  }
});
