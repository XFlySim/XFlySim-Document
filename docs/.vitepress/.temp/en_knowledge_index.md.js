import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/en/knowledge/index.md
var __pageData = JSON.parse("{\"title\":\"Aviation Knowledge\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"en/knowledge/index.md\",\"filePath\":\"en/knowledge/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "en/knowledge/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aviation-knowledge" tabindex="-1">Aviation Knowledge <a class="header-anchor" href="#aviation-knowledge" aria-label="Permalink to “Aviation Knowledge”">​</a></h1><blockquote><p>Content in this section is compiled from public sources for learning purposes only. For actual operations, always refer to the currently effective Aeronautical Information Publication (AIP) and civil aviation regulations.</p></blockquote><h2 id="articles" tabindex="-1">Articles <a class="header-anchor" href="#articles" aria-label="Permalink to “Articles”">​</a></h2><h3 id="rvsm-and-metric-flight-levels-in-china" tabindex="-1">RVSM and Metric Flight Levels in China <a class="header-anchor" href="#rvsm-and-metric-flight-levels-in-china" aria-label="Permalink to “RVSM and Metric Flight Levels in China”">​</a></h3><p>Learn the background and definition of Reduced Vertical Separation Minimum (RVSM), its implementation scope, and the 8,900–12,500 m metric flight level allocation in China.</p><p><a href="/en/knowledge/rvsm.html">Read more →</a></p><h3 id="transition-altitude-altimeter-settings-qnh-qfe-qne" tabindex="-1">Transition Altitude &amp; Altimeter Settings (QNH/QFE/QNE) <a class="header-anchor" href="#transition-altitude-altimeter-settings-qnh-qfe-qne" aria-label="Permalink to “Transition Altitude &amp; Altimeter Settings (QNH/QFE/QNE)”">​</a></h3><p>Understand QNH, QFE and QNE, learn about transition altitude and transition level, and correctly interpret cruise flight levels.</p><p><a href="/en/knowledge/altimeter.html">Read more →</a></p><div class="tip custom-block"><p class="custom-block-title">Continuously Updated</p><p>More aviation knowledge articles are being written. Contributions via GitHub are welcome.</p></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/knowledge/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var knowledge_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, knowledge_default as default };
