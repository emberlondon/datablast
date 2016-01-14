import Ember from 'ember';
const { Component, computed, run } = Ember;

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  src: computed('name', function() {
    let name = this.get('name');
    return `images/tomsters/${name}.png`;
  }),

  didInsertElement() {
    let el = this.element;

    el.style.width = '128px';
    el.style.position = 'fixed';
    el.style.top = '0px';
    el.style.left = '0px';

    let w = window.innerWidth - el.width;
    let x = Math.random() * window.innerWidth;
    let y = window.innerHeight;
    let p = -200;
    let t = 6 + (Math.random() * 9);
    let d = .5 + (Math.random() * 14.5);

    el.style.transition = `none`;
    el.style.transform = `translate(${x}px, ${p}px)`;
    el.width;
    el.style.transition = `all ${t}s linear ${d}s`;
    el.style.transform = `translate(${x}px, ${y}px`;

    run.later(this, 'didInsertElement', (d + t) * 1000);
  }
});
