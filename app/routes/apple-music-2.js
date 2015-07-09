import Ember from 'ember';
import preloadImages from '../utils/preload-images';
const { Route } = Ember;

export default Route.extend({
  preload() {
    return preloadImages('/images/apple-music.png');
  },

  beforeModel() {
    return this.preload();
  }
});
