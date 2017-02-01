# vue-default-value

Vue.js Directive to set a default value in the value attribute that will not affect the model state.

[![NPM version](https://img.shields.io/npm/v/vue-default-value.svg?style=flat-square)](https://www.npmjs.com/package/vue-default-value)
![Bower version](https://img.shields.io/bower/v/vue-default-value.svg?style=flat-square)

## Installation

### Via NPM

Install the package

```bash
$ npm install vue-default-value
```

and require it in the code

```js
var Vue = require('vue');
var VueDefaultValue = require('vue-default-value');
Vue.use(VueDefaultValue);
```

### Via Bower

Install the package

```bash
$ bower install vue-default-value
```

add script on page

```html
<script src="/bower_components/vue-default-value/dist/vue-default-value.js"></script>
<script>Vue.use(VueDefaultValue);</script>
```

or you can do it with [RequireJS](http://requirejs.org/) or any similar tool.

## Usage

The directive can be used with any element that has value attribute.

```js
Username: <input v-model="username" v-default-value="'Guest'" />
```

## License

MIT © [Stanislav Termosa](https://github.com/termosa)

