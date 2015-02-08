import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'db-slide',

  align: function() {
    var height = this.$().height();
    var container = this.$('db-slide-container');
    var containerHeight = container.outerHeight(true);
    var offset = (height - containerHeight) / 2;
    container.css({ top: offset });
  }.on('didInsertElement')
});
