import Ember from 'ember';
import preloadImages from 'datablast/utils/preload-images';

export default Ember.Route.extend({
  preload: function() {
    return preloadImages('/images/sapient.png');
  },

  beforeModel: function() {
    return this.preload();
  }
});
