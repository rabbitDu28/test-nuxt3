import { m as mergeConfig, c as appConfig, d as __nuxt_component_0$3, e as useUI, t as twMerge, f as twJoin, g as useAppConfig, h as useRuntimeConfig, b as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { defineComponent, onMounted, onUnmounted, ref, unref, computed, provide, inject, watch, h, Fragment, toRef, useSSRContext, mergeProps, watchEffect, cloneVNode, getCurrentInstance, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { u as useFormGroup } from './useFormGroup-Bx3QvuH9.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const toggle = {
  base: "relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  rounded: "rounded-full",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  active: "bg-{color}-500 dark:bg-{color}-400",
  inactive: "bg-gray-200 dark:bg-gray-700",
  size: {
    "2xs": "h-3 w-5",
    xs: "h-3.5 w-6",
    sm: "h-4 w-7",
    md: "h-5 w-9",
    lg: "h-6 w-11",
    xl: "h-7 w-[3.25rem]",
    "2xl": "h-8 w-[3.75rem]"
  },
  container: {
    base: "pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    active: {
      "2xs": "translate-x-2 rtl:-translate-x-2",
      xs: "translate-x-2.5 rtl:-translate-x-2.5",
      sm: "translate-x-3 rtl:-translate-x-3",
      md: "translate-x-4 rtl:-translate-x-4",
      lg: "translate-x-5 rtl:-translate-x-5",
      xl: "translate-x-6 rtl:-translate-x-6",
      "2xl": "translate-x-7 rtl:-translate-x-7"
    },
    inactive: "translate-x-0 rtl:-translate-x-0",
    size: {
      "2xs": "h-2 w-2",
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
      "2xl": "h-7 w-7"
    }
  },
  icon: {
    base: "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    active: "opacity-100 ease-in duration-200",
    inactive: "opacity-0 ease-out duration-100",
    size: {
      "2xs": "h-2 w-2",
      xs: "h-2 w-2",
      sm: "h-2 w-2",
      md: "h-3 w-3",
      lg: "h-4 w-4",
      xl: "h-5 w-5",
      "2xl": "h-6 w-6"
    },
    on: "text-{color}-500 dark:text-{color}-400",
    off: "text-gray-400 dark:text-gray-500",
    loading: "animate-spin text-{color}-500 dark:text-{color}-400"
  },
  default: {
    onIcon: null,
    offIcon: null,
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    color: "primary",
    size: "md"
  }
};
function d$1(u2, e, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e == null ? void 0 : e(t2);
  }];
}
let t = Symbol("headlessui.useid"), i = 0;
function I() {
  return inject(t, () => `${++i}`)();
}
function l(e) {
  provide(t, e);
}
function o$1(e) {
  var l2;
  if (e == null || e.value == null)
    return null;
  let n = (l2 = e.value.$el) != null ? l2 : e.value;
  return n instanceof Node ? n : null;
}
function u$2(r2, n, ...a2) {
  if (r2 in n) {
    let e = n[r2];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
function r(t2, e) {
  if (t2)
    return t2;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function s(t2, e) {
  let n = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n.value || o$1(e) && o$1(e) instanceof HTMLButtonElement && !((u2 = o$1(e)) != null && u2.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A({ visible: r2 = true, features: t2 = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a2;
  let n = j(o2, e), l2 = Object.assign(i2, { props: n });
  if (r2 || t2 & 2 && n.static)
    return y(l2);
  if (t2 & 1) {
    let d2 = (a2 = n.unmount) == null || a2 ? 0 : 1;
    return u$2(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r2, attrs: t2, slots: e, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m = e.default) == null ? void 0 : m.call(e, o2), d2 = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c.push(p2);
    u2 && (d2["data-headlessui-state"] = c.join(" "));
  }
  if (n === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a2 != null ? a2 : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p2 = j((h$1 = u2.props) != null ? h$1 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s2 in p2)
        s2.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s2] = p2[s2]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e = {};
  for (let i2 of r2)
    for (let n in i2)
      n.startsWith("on") && typeof i2[n] == "function" ? (e[n] != null || (e[n] = []), e[n].push(i2[n])) : t2[n] = i2[n];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e)
    Object.assign(t2, { [i2](n, ...l2) {
      let a2 = e[i2];
      for (let d2 of a2) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        d2(n, ...l2);
      }
    } });
  return t2;
}
function E$1(r2) {
  let t2 = Object.assign({}, r2);
  for (let e in t2)
    t2[e] === void 0 && delete t2[e];
  return t2;
}
function T(r2, t2 = []) {
  let e = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e && delete e[o2];
  return e;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$1 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(u$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e, ...d2 } = t2, o2 = { "aria-hidden": (e & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n, name: "Hidden" });
  };
} });
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function p(i2) {
  var t2, r2;
  let s2 = (t2 = i2 == null ? void 0 : i2.form) != null ? t2 : i2.closest("form");
  if (s2) {
    for (let n of s2.elements)
      if (n !== i2 && (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image")) {
        n.click();
        return;
      }
    (r2 = s2.requestSubmit) == null || r2.call(s2);
  }
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e = ref([]);
  function r2(n) {
    return e.value.push(n), () => {
      let i2 = e.value.indexOf(n);
      i2 !== -1 && e.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s2 }) {
  var n;
  let e = (n = t2.id) != null ? n : `headlessui-description-${I()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g, m]) => Object.assign(a2, { [g]: unref(m) }), {}), id: e };
    return A({ ourProps: f2, theirProps: c, slot: l2.value, attrs: o2, slots: s2, name: i2 });
  };
} });
let a = Symbol("LabelContext");
function d() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, d), n;
  }
  return t2;
}
function E({ slot: t2 = {}, name: n = "Label", props: i2 = {} } = {}) {
  let e = ref([]);
  function o2(r2) {
    return e.value.push(r2), () => {
      let l2 = e.value.indexOf(r2);
      l2 !== -1 && e.value.splice(l2, 1);
    };
  }
  return provide(a, { register: o2, slot: t2, name: n, props: i2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { slots: n, attrs: i2 }) {
  var r2;
  let e = (r2 = t2.id) != null ? r2 : `headlessui-label-${I()}`, o2 = d();
  return onMounted(() => onUnmounted(o2.register(e))), () => {
    let { name: l2 = "Label", slot: p2 = {}, props: c = {} } = o2, { passive: f2, ...s2 } = t2, u2 = { ...Object.entries(c).reduce((b2, [g, m]) => Object.assign(b2, { [g]: unref(m) }), {}), id: e };
    return f2 && (delete u2.onClick, delete u2.htmlFor, delete s2.onClick), A({ ourProps: u2, theirProps: s2, slot: p2, attrs: i2, slots: n, name: l2 });
  };
} });
let C = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: c, attrs: i2 }) {
  let r2 = ref(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t2;
    return (t2 = r2.value) == null ? void 0 : t2.id;
  }), onClick(t2) {
    r2.value && (t2.currentTarget.tagName === "LABEL" && t2.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
  } } }), p2 = k({ name: "SwitchDescription" });
  return provide(C, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A({ theirProps: l2, ourProps: {}, slot: {}, slots: c, attrs: i2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l2, { emit: c, attrs: i2, slots: r2, expose: f$1 }) {
  var h$1;
  let p$1 = (h$1 = l2.id) != null ? h$1 : `headlessui-switch-${I()}`, n = inject(C, null), [t2, s$1] = d$1(computed(() => l2.modelValue), (e) => c("update:modelValue", e), computed(() => l2.defaultChecked));
  function m() {
    s$1(!t2.value);
  }
  let E2 = ref(null), o$2 = n === null ? E2 : n.switchRef, L = s(computed(() => ({ as: l2.as, type: i2.type })), o$2);
  f$1({ el: o$2, $el: o$2 });
  function D(e) {
    e.preventDefault(), m();
  }
  function R(e) {
    e.key === o.Space ? (e.preventDefault(), m()) : e.key === o.Enter && p(e.currentTarget);
  }
  function x(e) {
    e.preventDefault();
  }
  let d2 = computed(() => {
    var e, a2;
    return (a2 = (e = o$1(o$2)) == null ? void 0 : e.closest) == null ? void 0 : a2.call(e, "form");
  });
  return onMounted(() => {
    watch([d2], () => {
      if (!d2.value || l2.defaultChecked === void 0)
        return;
      function e() {
        s$1(l2.defaultChecked);
      }
      return d2.value.addEventListener("reset", e), () => {
        var a2;
        (a2 = d2.value) == null || a2.removeEventListener("reset", e);
      };
    }, { immediate: true });
  }), () => {
    let { name: e, value: a2, form: K, tabIndex: y2, ...b2 } = l2, T$1 = { checked: t2.value }, B = { id: p$1, ref: o$2, role: "switch", type: L.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t2.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: D, onKeyup: R, onKeypress: x };
    return h(Fragment, [e != null && t2.value != null ? h(f, E$1({ features: u$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t2.value, form: K, disabled: b2.disabled, name: e, value: a2 })) : null, A({ ourProps: B, theirProps: { ...i2, ...T(b2, ["modelValue", "defaultChecked"]) }, slot: T$1, attrs: i2, slots: r2, name: "Switch" })]);
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
const _sfc_main$1 = defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_0$3
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emit("change", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.rounded,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container.size[props.size],
        active.value ? ui.value.container.active[props.size] : ui.value.container.inactive
      );
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    const loadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.loading.replaceAll("{color}", color.value)
      );
    });
    l(() => useId("$dazCNkvw4l"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      containerClass,
      onIconClass,
      offIconClass,
      loadingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    id: _ctx.inputId,
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(_ctx.containerClass)}"${_scopeId}>`);
        if (_ctx.loading) {
          _push2(`<span class="${ssrRenderClass([_ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.loadingIcon,
            class: _ctx.loadingIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: _ctx.containerClass }, [
            _ctx.loading ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.loadingIcon,
                class: _ctx.loadingIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 2,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.17.0_nuxt@3.12.1_vite@5.2.13_vue@3.4.27/node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "config",
  __ssrInlineRender: true,
  setup(__props) {
    const appConfig2 = useAppConfig();
    const runtimeConfig = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UToggle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { dark: unref(appConfig2).theme.dark }
      }, _attrs))}><p class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200"> appConfig: ${ssrInterpolate(unref(appConfig2).title)} runtimeConfig.public.apiBase: ${ssrInterpolate(unref(runtimeConfig).public.apiBase)}</p><label> dark mode: ${ssrInterpolate(unref(appConfig2).theme.dark)} `);
      _push(ssrRenderComponent(_component_UToggle, {
        modelValue: unref(appConfig2).theme.dark,
        "onUpdate:modelValue": ($event) => unref(appConfig2).theme.dark = $event
      }, null, _parent));
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=config-BMBxNLa1.mjs.map
