import directive from './src/vue-default-value';

const VueDefaultValue = {
  install: function(Vue) {
    if (this.installed) return;
    this.installed = true;
    Vue.directive('default-value', directive);
  },
  apply: function() {
    console.warn('lock');
  }
};

module.exports = VueDefaultValue;
