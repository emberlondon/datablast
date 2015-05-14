import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'x-tweet',
  window: Ember.inject.service(),

  didInsertElement() {
    if (typeof twttr === 'undefined') { return; }

    let id = this.get('tweetId');
    let el = this.$('x-tweet-container')[0];

    twttr.widgets.createTweet(id, el)
      .then(Ember.run.bind(this, 'reveal'));
  },

  reveal: function(tweet) {
    tweet = $(tweet);

    this.$().css({
      width: tweet.outerWidth(),
      height: tweet.outerHeight(),
      opacity: 1
    });

    this.get('window').notifyPropertyChange('height');
  }
});
