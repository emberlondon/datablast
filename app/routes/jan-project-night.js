import Ember from 'ember';
import preloadImages from '../utils/preload-images';

export default Ember.Route.extend({
  preload: function() {
    return preloadImages('/images/jan-project-night.jpg');
  },

  beforeModel: function() {
    return this.preload();
  }
});
