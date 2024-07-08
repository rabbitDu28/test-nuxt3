import { p as useRouter, x as clearError, j as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.error);
    useRouter();
    const retry = () => (void 0).location.href = props.error.url;
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10" }, _attrs))}><h1 class="text-2xl text-center mb-2"> \u51FA\u4E86\u70B9\u9519 - ${ssrInterpolate((_a = __props.error) == null ? void 0 : _a.statusCode)}</h1><p class="text-center p-4">${ssrInterpolate((_b = __props.error) == null ? void 0 : _b.statusMessage)}</p><div class="text-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: retry,
        class: "mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u91CD\u8BD5`);
          } else {
            return [
              createTextVNode("\u91CD\u8BD5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, { onClick: handleError }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u56DE\u5230\u9996\u9875`);
          } else {
            return [
              createTextVNode("\u56DE\u5230\u9996\u9875")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=error-Db6E8bnL.mjs.map
