import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/rules/index.md
var __pageData = JSON.parse("{\"title\":\"平台守则\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"rules/index.md\",\"filePath\":\"rules/index.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "rules/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="平台守则" tabindex="-1">平台守则 <a class="header-anchor" href="#平台守则" aria-label="Permalink to “平台守则”">​</a></h1><blockquote><p>XFLYSIM 连飞平台的行为规范与准则，所有参与连线飞行的成员均应遵守。</p></blockquote><h2 id="用户准则" tabindex="-1">用户准则 <a class="header-anchor" href="#用户准则" aria-label="Permalink to “用户准则”">​</a></h2><p>航空器驾驶员在连飞服务器上的行为规范，包括连线通用规则、机场使用规则、航路使用规则、连飞活动规则及违规处理办法等。</p><p><a href="/rules/user-rules.html">阅读全文 →</a></p><h2 id="管制员连线条例" tabindex="-1">管制员连线条例 <a class="header-anchor" href="#管制员连线条例" aria-label="Permalink to “管制员连线条例”">​</a></h2><p>管制员提供空中交通管制服务时应遵守的连线条例，包括资格与席位申请、管制服务规范、席位开合与值守、活动管制及违规处理等内容。</p><p><a href="/rules/controller-rules.html">阅读全文 →</a></p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("rules/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var rules_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, rules_default as default };
