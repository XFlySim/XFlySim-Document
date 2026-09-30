import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/zh-TW/contributors/index.md
var __pageData = JSON.parse("{\"title\":\"貢獻成員\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"zh-TW/contributors/index.md\",\"filePath\":\"zh-TW/contributors/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "zh-TW/contributors/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="貢獻成員" tabindex="-1">貢獻成員 <a class="header-anchor" href="#貢獻成員" aria-label="Permalink to “貢獻成員”">​</a></h1><p>本專案由 XFLYSIM 社群成員共同維護，感謝每一位參與文件建設的貢獻者。</p><h2 id="維護者" tabindex="-1">維護者 <a class="header-anchor" href="#維護者" aria-label="Permalink to “維護者”">​</a></h2><ul><li><strong>lvtenghui</strong> — 專案發起人 / 文件維護</li></ul><h2 id="參與方式" tabindex="-1">參與方式 <a class="header-anchor" href="#參與方式" aria-label="Permalink to “參與方式”">​</a></h2><p>歡迎所有社群成員參與文件建設：</p><ul><li><strong>提交問題</strong> — 發現文件錯誤或有疑問，請提交 <a href="https://github.com/XFlySim/XFlySim-Document/issues" target="_blank" rel="noreferrer">Issue</a>。</li><li><strong>參與編寫</strong> — 頁面底部提供「在 GitHub 上編輯此頁面」入口，可直接修改。</li><li><strong>翻譯校對</strong> — 文件支援簡體中文、繁體中文、English 三種語言，歡迎幫忙校對與完善。</li></ul><p>所有貢獻內容均以 <a href="https://github.com/XFlySim/XFlySim-Document/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT 許可證</a> 授權。</p><hr><p>感謝大家的支持！</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-TW/contributors/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contributors_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, contributors_default as default };
