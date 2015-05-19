import Ember from 'ember';
const { Component, $, inject, run } = Ember;

export default Component.extend({
  tagName: 'x-tweet',
  window: inject.service(),

  didInsertElement() {
    if (!window.twttr) { return; }

    let id = this.attrs['tweet-id'];
    let el = this.$('x-tweet-container')[0];

    twttr.widgets.createTweet(id, el)
      .then(run.bind(this, 'reveal'));
  },

  reveal(tweet) {
    tweet = $(tweet);

    this.$().css({
      width: tweet.outerWidth(),
      height: tweet.outerHeight(),
      opacity: 1
    });

    this.get('window').notifyPropertyChange('height');
  }
});
