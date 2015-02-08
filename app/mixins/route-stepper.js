import Ember from 'ember';

export default Ember.Mixin.create({
  init: function() {
    this._super.apply(this, arguments);

    let keyboard = this.get('keyboard');

    keyboard.on('left', Ember.run.bind(this, 'prev'));
    keyboard.on('right', Ember.run.bind(this, 'next'));
  },

  applicationController: function() {
    return this.container.lookup('controller:application');
  }.property(),

  currentPath: Ember.computed.readOnly('applicationController.currentPath'),

  paths: function() {
    let paths = Ember.keys(this.router.recognizer.names);

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
    let currentPath  = this.get('currentPath');
    let paths        = this.get('paths');
    let currentIndex = paths.indexOf(currentPath);
    let nextIndex    = currentIndex + m;
    let nextPath     = paths[nextIndex];

    if (nextPath) {
      this.transitionTo(nextPath);
    }
  }
});
