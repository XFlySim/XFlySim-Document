import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/tutorial/xvoice.md
var __pageData = JSON.parse("{\"title\":\"XVoice 语音教程\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/xvoice.md\",\"filePath\":\"tutorial/xvoice.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "tutorial/xvoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xvoice-语音教程" tabindex="-1">XVoice 语音教程 <a class="header-anchor" href="#xvoice-语音教程" aria-label="Permalink to “XVoice 语音教程”">​</a></h1><div class="info custom-block"><p class="custom-block-title">内容筹备中</p><p>本页面正在编写中，敬请期待。</p></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tutorial/xvoice.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var xvoice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, xvoice_default as default };
