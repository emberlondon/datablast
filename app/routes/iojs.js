import Ember from 'ember';
import preloadImages from '../utils/preload-images';

export default Ember.Route.extend({
  beforeModel: function() {
    return preloadImages('https://iojs.org/images/1.0.0.png');
  }
});
