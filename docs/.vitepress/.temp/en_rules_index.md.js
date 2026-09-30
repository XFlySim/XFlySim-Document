import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/en/rules/index.md
var __pageData = JSON.parse("{\"title\":\"Platform Rules\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"en/rules/index.md\",\"filePath\":\"en/rules/index.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "en/rules/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="platform-rules" tabindex="-1">Platform Rules <a class="header-anchor" href="#platform-rules" aria-label="Permalink to “Platform Rules”">​</a></h1><blockquote><p>The codes of conduct and guidelines of the XFLYSIM online flight platform. All members participating in online flight shall comply.</p></blockquote><h2 id="user-guidelines" tabindex="-1">User Guidelines <a class="header-anchor" href="#user-guidelines" aria-label="Permalink to “User Guidelines”">​</a></h2><p>The code of conduct for aircraft pilots on the online flight server, covering general connection rules, airport usage, route usage, event rules and violation handling.</p><p><a href="/en/rules/user-rules.html">Read more →</a></p><h2 id="controller-online-flight-regulations" tabindex="-1">Controller Online Flight Regulations <a class="header-anchor" href="#controller-online-flight-regulations" aria-label="Permalink to “Controller Online Flight Regulations”">​</a></h2><p>Regulations that controllers shall follow when providing air traffic control services, covering rating and position application, control service standards, position operation, event control and violation handling.</p><p><a href="/en/rules/controller-rules.html">Read more →</a></p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/rules/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var rules_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, rules_default as default };
