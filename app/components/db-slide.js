import Ember from 'ember';
const { observer, run } = Ember;

export default Ember.Component.extend({
  tagName: 'db-slide',
  window: Ember.inject.service(),
  height: Ember.computed.readOnly('window.height'),

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
