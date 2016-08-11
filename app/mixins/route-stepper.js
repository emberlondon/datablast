import Ember from 'ember';
var { Mixin, computed, inject, keys, run } = Ember;

const BLACKLIST = /index|loading|error/;

export default Mixin.create({
  keyboard: inject.service(),

  init() {
    this._super.apply(this, arguments);

    let keyboard = this.get('keyboard');

    keyboard.on('left', run.bind(this, 'prev'));
    keyboard.on('right', run.bind(this, 'next'));
  },

  paths: computed(function() {
    let paths = keys(this.router.recognizer.names);

    paths = paths.reject(path => BLACKLIST.test(path));

    paths.unshiftObject('index');

    return paths;
  }),

  applicationController: computed(function() {
    return this.container.lookup('controller:application');
  }),

  currentIndex: computed('paths.[]', 'currentPath', function() {
    let paths        = this.get('paths');
    let currentPath  = this.get('currentPath');

    return paths.indexOf(currentPath);
  }),

  count: computed.readOnly('paths.length'),

  prevPath: computed('paths.[]', 'currentIndex', function() {
    let paths        = this.get('paths');
    let currentIndex = this.get('currentIndex');

    return paths.objectAt(currentIndex - 1);
  }),

  nextPath: computed('paths.[]', 'currentIndex', function() {
    let paths        = this.get('paths');
    let currentIndex = this.get('currentIndex');

    return paths.objectAt(currentIndex + 1);
  }),

  nextRoute: computed('nextPath', function() {
    let path = this.get('nextPath');
    return this.container.lookup(`route:${path}`);
  }),

  prev() {
    let path = this.get('prevPath');

    if (path) { this.transitionTo(path); }
  },

  next() {
    let path = this.get('nextPath');

    if (path) { this.transitionTo(path); }
  },

  didTransition(...args) {
    let result = this._super.apply(this, args);
    let nextRoute = this.get('nextRoute');

    if (nextRoute && nextRoute.preload) {
      nextRoute.preload();
    }

    return result;
  }
});
