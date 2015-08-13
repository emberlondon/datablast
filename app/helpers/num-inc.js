import Ember from 'ember';

export function numInc(input) {
  return (+input) + 1;
}

export default Ember.Helper.helper(numInc);
