import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'db-slide',

  activate: function() {
    this.set('active', true);
  }.on('didInsertElement'),

  containerStyle: function() {
    if (!this.get('active')) { return; }

    let height          = this.get('window.height');
    let container       = this.$('db-slide-container');
    let containerHeight = container.outerHeight(true);
    let offset          = (height - containerHeight) / 2;

    return `top: ${offset}px`;
  }.property('window.height', 'active')
});
