import Ember from 'ember';
import config from 'datablast/config/environment';
const { Route, $, RSVP, isEmpty } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      meetup: this.fetchMeetupData(),
      vimeo: this.fetchVimeoData()
    });
  },

  fetchMeetupData() {
    let key = config.meetup.key;

    if (isEmpty(key)) {
      return {};
    }

    let handle = config.meetup.handle;
    let url = `https://api.meetup.com/${handle}?key=${key}`;
    let dataType = 'jsonp';

    return $.ajax(url, { dataType })
      .then(response => {
        return response.data;
      });
  },

  fetchVimeoData() {
    let token = config.vimeo.token;

    if (isEmpty(token)) {
      return {};
    }

    let url = 'https://api.vimeo.com/me';
    let dataType = 'json';
    let headers = {
      'Authorization': `bearer ${token}`
    };

    return $.ajax(url, { dataType, headers });
  }
});
