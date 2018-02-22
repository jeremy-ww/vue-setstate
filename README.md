# vue-setState [![Build Status](https://img.shields.io/travis/Army-U/vue-setstate.svg?style=flat-square)](https://travis-ci.org/Army-U/vue-setstate) [![npm package](https://img.shields.io/npm/v/vue-setstate.svg?style=flat-square)](https://www.npmjs.com/package/vue-setstate)

Using React style setState method in Vue, Apply to optimize rendering speed of big data

## Install

```bash
$ npm i vue-setstate -S
```

CDN: [UNPKG](https://unpkg.com/vue-setstate) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-setstate/index.js)

## Usage

```js
import Vue from 'vue'
import setState from 'vue-setstate'

Vue.use(setState)
```

Then in your component:

```js
<script>
export default {
  state: {
    // your data here
    name: 'tom'
  },

  methods: {
    changeMyName () {
      this.setState({ name: 'mary' })
    }
  }
}
</script>
```

> Warning: `state` is not **reactive**!, you must use `setState` method if you want to change the view.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Army-U
