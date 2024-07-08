import { defineComponent, ref, onErrorCaptured, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { b as useNuxtApp, _ as _export_sfc, j as __nuxt_component_0$1 } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const __nuxt_component_0 = defineComponent({
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    onErrorCaptured((err, target, info) => {
    });
    function clearError() {
      error.value = null;
    }
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error, clearError }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThrowError",
  __ssrInlineRender: true,
  setup(__props) {
    const throwError = () => {
      throw new Error("\u6765\u81EA ThrowError \u7EC4\u4EF6\u7684\u5F02\u5E38");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, { onClick: throwError }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4F60\u70B9\u6211\u8BD5\u8BD5`);
          } else {
            return [
              createTextVNode("\u4F60\u70B9\u6211\u8BD5\u8BD5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThrowError.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtErrorBoundary = __nuxt_component_0;
  const _component_ThrowError = _sfc_main$1;
  const _component_UButton = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtErrorBoundary, _attrs, {
    error: withCtx(({ error }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="my-4 text-xl text-gray-500"${_scopeId}>\u53D1\u751F\u4E86\u4E00\u4E9B\u9519\u8BEF ${ssrInterpolate(error)}</p>`);
        _push2(ssrRenderComponent(_component_UButton, {
          type: "success",
          onClick: ($event) => error.value = null
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u4FEE\u6B63\u9519\u8BEF `);
            } else {
              return [
                createTextVNode(" \u4FEE\u6B63\u9519\u8BEF ")
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("p", { class: "my-4 text-xl text-gray-500" }, "\u53D1\u751F\u4E86\u4E00\u4E9B\u9519\u8BEF " + toDisplayString(error), 1),
          createVNode(_component_UButton, {
            type: "success",
            onClick: ($event) => error.value = null
          }, {
            default: withCtx(() => [
              createTextVNode(" \u4FEE\u6B63\u9519\u8BEF ")
            ]),
            _: 2
          }, 1032, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ThrowError, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ThrowError)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/error-handle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const errorHandle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { errorHandle as default };
//# sourceMappingURL=error-handle-ClUfSB0H.mjs.map
