import Route from 'ember-route';
import Ember from 'ember';
const { getOwner } = Ember;

export default Route.extend({
  model() {
    let owner = getOwner(this);
    let template = owner.lookup('template:glimmer-2');

    debugger;
    return {
      spec: template.spec,
      src: `{{#db-slide}}
  <h2>Glimmer 2</h2>

  {{#code-block language="handlebars"}}{{model.src}}{{/code-block}}
  {{#code-block language="javascript"}}{{pretty model.spec}}{{/code-block}}
{{/db-slide}}`
    };
  }
});
