(function() {
  const attrIsTouched = 'data-vdv-touched';

  const update = function(el, binding, vnode) {
    if (!binding.value) return;
    if (el.getAttribute(attrIsTouched)) return;

    if (typeof el.value == 'undefined') {
      console.error('[vue-default-value warn] The element does not have a value property');
      return;
    }

    if (el.value && el.value === binding.value) return;

    el.value = binding.value;

    var model = vnode.data.directives
      .find(function(dir) { return dir.rawName === 'v-model' });
    if (!model || !model.expression) return;
    vnode.context.$watch(model.expression, function() {
      el.setAttribute(attrIsTouched, true);
    });
  };

  const up = function(el, binding, vnode) {
    vnode.context.$nextTick(function() { update(el, binding, vnode) });
  };

  const clear = function(el) { el.removeAttribute(attrIsTouched) };

  Vue.directive('default-value', {
    inserted: up,
    update: up,
    unbind: clear
  });
})();
