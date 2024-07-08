import { i as defineStore, k as useState, s as storeToRefs, j as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const useCounter = defineStore("count", {
  state: () => ({
    value: 1
  })
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const count1 = useCounter();
    const count2 = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}> Count1: ${ssrInterpolate(unref(count1))} Count2: ${ssrInterpolate(unref(count2))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => {
          count1.value++;
          count2.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => {
          count1.value--;
          count2.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "counter",
  __ssrInlineRender: true,
  setup(__props) {
    const counterRef = ref(Math.round(Math.random() * 1e3));
    const counter = useState("counter", () => Math.round(Math.random() * 1e3));
    const store = useCounter();
    const { value: count } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_Counter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}> count: ${ssrInterpolate(unref(count))} Counter: ${ssrInterpolate(unref(counter))} counterRef: ${ssrInterpolate(unref(counterRef))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => {
          counter.value++;
          counterRef.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` - `);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => {
          counter.value--;
          counterRef.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=counter-BcCznA6E.mjs.map
