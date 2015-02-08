import Ember from 'ember';
var $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'x-tweet',

  insertTweet: function() {
    var id = this.get('tweetId');
    var el = this.get('element');

    twttr.widgets.createTweet(id, el)
      .then(Ember.run.bind(this, 'reveal'));
  }.on('didInsertElement'),

  reveal: function(tweet) {
    tweet = $(tweet);

    this.$().css({
      width: tweet.outerWidth(),
      height: tweet.outerHeight(),
      opacity: 1
    });

    this.window.notifyPropertyChange('height');
  }
});
