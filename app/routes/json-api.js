import Ember from 'ember';
import preloadImages from '../utils/preload-images';

export default Ember.Route.extend({
  beforeModel: function() {
    return preloadImages('/images/json-api.png');
  }
});
