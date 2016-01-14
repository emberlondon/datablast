import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      tomsters: [
        'portland',
        'vancouver',
        'denver',
        'atlanta',
        'pirate',
        'boston',
        'montevideo',
        'dallas',
        'seattle',
        'louisville',
        'jacksonville',
        'austin',
        'houston',
        'philly',
        '0-rfc',
        'builtwith',
        'sherpa',
        'kayaking',
        'slc',
        'london',
        'munich',
        '5k',
        '2-beta',
        '1-canary',
        '3-release',
        'hanggliding',
        'officehours',
        'construction',
        'deprecated',
        'teaching',
        'embercamp',
        'fishy',
        'original'
      ]
    };
  }
});
