# Datablast

These are the [Ember London](http://emberlondon.com) intro slides.

## Contributing

Every month’s slide deck lives in its own branch. The naming convention is `YYYY-MM`.

Please submit a PR against the desired month with the slides you’d like to add.

## Adding Slides

1. Declare a route at the desired point
2. Create a template to match

For example, to add a slide called `foo`:

```js
// app/router.js

Router.map(function() {
  this.route('line-up');
  this.route('sapient');
  this.route('announcements');
  this.route('ember-london');
  this.route('ember-london-stats');
  this.route('upcoming-events');
  this.route('slack');
  this.route('forum');
  this.route('website');
  this.route('datablast');
  this.route('foo'); // <--- Foo goes here
  this.route('on-to-the-talks');
});
```

```hbs
{{! app/templates/foo.hbs }}

{{#db-slide}}
  Slide content here.
{{/db-slide}}
```

## Adding Tweets

Tweets may be added with the `x-tweet` component:

```hbs
{{! app/templates/foo.hbs }}

{{#db-slide}}
  {{x-tweet tweet-id="1234567890"}}
{{/db-slide}}
```
