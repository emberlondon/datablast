import Ember from 'ember';

export default Ember.Mixin.create({
  init: function() {
    this._super.apply(this, arguments);

    var keyboard = this.get('keyboard');

    keyboard.on('left', Ember.run.bind(this, 'prev'));
    keyboard.on('right', Ember.run.bind(this, 'next'));
  },

  applicationController: function() {
    return this.container.lookup('controller:application');
  }.property(),

  currentPath: Ember.computed.readOnly('applicationController.currentPath'),

  paths: function() {
    var paths = Ember.keys(this.router.recognizer.names);

    paths.removeObjects(['loading', 'error', 'index', 'application']);
    paths.unshiftObject('index');

    return paths;
  }.property(),

  prev: function() {
    this._step(-1);
  },

  next: function() {
    this._step(1);
  },

  _step: function(m) {
    var currentPath  = this.get('currentPath');
    var paths        = this.get('paths');
    var currentIndex = paths.indexOf(currentPath);
    var nextIndex    = currentIndex + m;
    var nextPath     = paths[nextIndex];

    if (nextPath) {
      this.transitionTo(nextPath);
    }
  }
});
