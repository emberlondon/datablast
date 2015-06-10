import Ember from 'ember';
const { Component, computed, inject, observer, run } = Ember;

export default Component.extend({
  tagName: 'db-slide',
  window: inject.service(),
  height: computed.readOnly('window.height'),

  didInsertElement() {
    this.schedulePositionContainer();
  },

  heightDidChange: observer('height', function() {
    this.schedulePositionContainer();
  }),

  schedulePositionContainer() {
    run.schedule('afterRender', this, 'positionContainer');
  },

  positionContainer() {
    if (!this.element) { return; }

    let height          = this.get('height');
    let container       = this.$('db-slide-container');
    let containerHeight = container.outerHeight(true);
    let offset          = (height - containerHeight) / 2;

    container.css({ top: `${offset}px` });
  }
});
