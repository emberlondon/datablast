import Ember from 'ember';

export default Ember.Controller.extend({
  codeSample: `
// party.hbs
{{my-component salute=(action "say" "hello")}}

// my-component/template.hbs
{{another-component geekSalute=(action salute "world")}}

// another-component/template.hbs
<button {{action geekSalute "!!!"}}>Greet</button>

// controllers/party.js
actions: {
  say(...words) {
    alert(words.join(' '));  // "Hello world !!!"
  }
}`
});
