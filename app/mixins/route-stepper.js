import Ember from 'ember';
var { computed } = Ember;

export default Ember.Mixin.create({
  init: function() {
    this._super.apply(this, arguments);

    let keyboard = this.get('keyboard');

    keyboard.on('left', Ember.run.bind(this, 'prev'));
    keyboard.on('right', Ember.run.bind(this, 'next'));
  },

  paths: computed(function() {
    let paths = Ember.keys(this.router.recognizer.names);

    paths.removeObjects(['loading', 'error', 'index', 'application']);
    paths.unshiftObject('index');

    return paths;
  }),

  applicationController: computed(function() {
    return this.container.lookup('controller:application');
  }),

  currentPath: computed.readOnly('applicationController.currentPath'),

  currentIndex: computed('paths.@each', 'currentPath', function() {
    let paths        = this.get('paths');
    let currentPath  = this.get('currentPath');

    return paths.indexOf(currentPath);
  }),

  prevPath: computed('paths.@each', 'currentIndex', function() {
    let paths        = this.get('paths');
    let currentIndex = this.get('currentIndex');

    return paths.objectAt(currentIndex - 1);
  }),

  nextPath: computed('paths.@each', 'currentIndex', function() {
    let paths        = this.get('paths');
    let currentIndex = this.get('currentIndex');

    return paths.objectAt(currentIndex + 1);
  }),

  nextRoute: computed('nextPath', function() {
    let path = this.get('nextPath');
    return this.container.lookup(`route:${path}`);
  }),

  prev: function() {
    let path = this.get('prevPath');

    if (path) { this.transitionTo(path); }
  },

  next: function() {
    let path = this.get('nextPath');

    if (path) { this.transitionTo(path); }
  },

  didTransition: function(...args) {
    let result = this._super.apply(this, args);
    let nextRoute = this.get('nextRoute');

    if (nextRoute && nextRoute.preload) {
      nextRoute.preload();
    }

    return result;
  }
});
