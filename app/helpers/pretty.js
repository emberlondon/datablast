import { helper } from 'ember-helper';
import prettyJs from 'npm:pretty-js';
import Ember from 'ember';

const { typeOf } = Ember;

export function pretty([obj]) {
  if (typeOf(obj) !== 'string') {
    obj = JSON.stringify(obj);
  }

  return prettyJs(obj, {
    indent: '  '
  });
}

export default helper(pretty);
