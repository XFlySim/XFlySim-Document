import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/en/contributors/index.md
var __pageData = JSON.parse("{\"title\":\"Contributors\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"en/contributors/index.md\",\"filePath\":\"en/contributors/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "en/contributors/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to “Contributors”">​</a></h1><p>This project is maintained together by members of the XFLYSIM community. Thank you to every contributor who helps build the documentation.</p><h2 id="maintainers" tabindex="-1">Maintainers <a class="header-anchor" href="#maintainers" aria-label="Permalink to “Maintainers”">​</a></h2><ul><li><strong>lvtenghui</strong> — Project founder / Documentation maintainer</li></ul><h2 id="how-to-contribute" tabindex="-1">How to Contribute <a class="header-anchor" href="#how-to-contribute" aria-label="Permalink to “How to Contribute”">​</a></h2><p>All community members are welcome to participate in the documentation:</p><ul><li><strong>Report issues</strong> — If you find errors or have questions about the docs, submit an <a href="https://github.com/XFlySim/XFlySim-Document/issues" target="_blank" rel="noreferrer">Issue</a>.</li><li><strong>Write content</strong> — Use the &quot;Edit this page on GitHub&quot; link at the bottom of each page to make changes directly.</li><li><strong>Review translations</strong> — The documentation supports Simplified Chinese, Traditional Chinese and English. Help with proofreading and improvement is welcome.</li></ul><p>All contributions are licensed under the <a href="https://github.com/XFlySim/XFlySim-Document/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.</p><hr><p>Thank you for your support!</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/contributors/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contributors_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, contributors_default as default };
