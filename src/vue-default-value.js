const attrIsTouched = 'data-vdv-touched';

const updateValue = (el, binding, vnode) => {
  if (!binding.value) return;
  if (el.getAttribute(attrIsTouched)) return;

  if (typeof el.value == 'undefined') {
    console.error('[vue-default-value warn] The element does not have a value property');
    return;
  }

  if (el.value && el.value === binding.value) return;

  el.value = binding.value;

  var model = vnode.data.directives.find(dir => dir.rawName === 'v-model');
  if (!model || !model.expression) return;
  vnode.context.$watch(model.expression, () => el.setAttribute(attrIsTouched, true));
};

const update = (el, binding, vnode) => {
  vnode.context.$nextTick(() => updateValue(el, binding, vnode));
};

const clear = el => el.removeAttribute(attrIsTouched);

export default {
  inserted: update,
  update: update,
  unbind: clear
};
