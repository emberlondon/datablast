import Ember from 'ember';

export default Ember.Controller.extend({
  snippetOldStyle: '{{input type="text" value=myValue}}',
  snippetNewStyle: '<input type="text" value={{myValue}} oninput={{action (mut myValue) value="target.value"}}>'
});
