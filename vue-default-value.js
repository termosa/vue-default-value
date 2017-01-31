const datasetName = 'vueDefaultValue';
const onChange = function(e) {
  e.target.dataset[datasetName] = 'changed';
};
const set = function(el, binding) {
  if (!binding.value) return;
  if (el.dataset[datasetName] === 'changed') return;

  if (typeof el.value == 'undefined') {
    console.error('[vue-default-value warn] The element does not have a value property');
    return;
  }

  if (el.value) return;

  el.value = binding.value;
  el.addEventListener('input', onChange);
};
const unbind = function(el) {
  el.removeEventListener('input', onChange);
};
Vue.directive('default-value', {
  inserted: set,
  update: set,
  unbind: unbind
});
