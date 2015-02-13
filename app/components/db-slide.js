import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'db-slide',
  active: false,
  window: Ember.inject.service(),
  height: Ember.computed.readOnly('window.height'),

  activate: function() {
    this.set('active', true);
  }.on('didInsertElement'),

  containerStyle: function() {
    if (!this.get('active')) { return; }

    let height          = this.get('height');
    let container       = this.$('db-slide-container');
    let containerHeight = container.outerHeight(true);
    let offset          = (height - containerHeight) / 2;

    return `top: ${offset}px`;
  }.property('height', 'active')
});
