Vue.component('custom-input', {
  props: ['value'],
  template: '<input ref=input v-model=localValue />',
  computed: {
    localValue: {
      get: function() { return this.value },
      set: function(value) { this.$emit('input', value) }
    }
  }
});

new Vue({
  el: '#dv',
  data: {
    model1: null,
    model2: null,
    model3: null,
    value: 'default'
  },
  methods: {
    def: function() {
      this.value = 'new default';
    },
    mod: function() {
      this.model1 = this.model2 = this.model3 = 'new model';
    }
  }
});
