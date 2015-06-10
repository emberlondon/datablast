import Ember from 'ember';
const { Service, $, run } = Ember;

export default Service.extend({
  height: 0,

  init() {
    this.listener = run.bind(this, 'resize');
    window.addEventListener('resize', this.listener);
    run(this, 'resize');
  },

  resize() {
    this.set('height', $(window).height());
  },

  willDestroy() {
    window.removeEventListener('resize', this.listener);
    delete this.listener;
  }
});
