import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/zh-TW/tutorial/xvoice.md
var __pageData = JSON.parse("{\"title\":\"XVoice 語音教程\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"zh-TW/tutorial/xvoice.md\",\"filePath\":\"zh-TW/tutorial/xvoice.md\",\"lastUpdated\":1790760735000}");
var _sfc_main = { name: "zh-TW/tutorial/xvoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xvoice-語音教程" tabindex="-1">XVoice 語音教程 <a class="header-anchor" href="#xvoice-語音教程" aria-label="Permalink to “XVoice 語音教程”">​</a></h1><p>本教程介紹如何使用 XVoice 語音軟體進行語音通訊。</p><h2 id="xvoice-是什麼" tabindex="-1">XVoice 是什麼 <a class="header-anchor" href="#xvoice-是什麼" aria-label="Permalink to “XVoice 是什麼”">​</a></h2><p>XVoice 是 XFLYSIM 連飛平臺的語音通訊軟體。在提供管制服務的空域，語音機組需要使用 XVoice 與管制員及其他機組進行語音通訊。</p><h2 id="安裝與登入" tabindex="-1">安裝與登入 <a class="header-anchor" href="#安裝與登入" aria-label="Permalink to “安裝與登入”">​</a></h2><ol><li>下載並安裝 XVoice 客戶端。</li><li>使用連飛網站註冊的賬號密碼登入。</li></ol><h2 id="連線伺服器" tabindex="-1">連線伺服器 <a class="header-anchor" href="#連線伺服器" aria-label="Permalink to “連線伺服器”">​</a></h2><ol><li>開啟 XVoice，選擇 XFLYSIM 伺服器並連線。</li><li>連線成功後，確認軟體顯示已上線狀態。</li></ol><h2 id="使用注意事項" tabindex="-1">使用注意事項 <a class="header-anchor" href="#使用注意事項" aria-label="Permalink to “使用注意事項”">​</a></h2><ul><li>語音機組連入管制空域後，聽從管制員指揮並保持語音暢通。</li><li>活動期間，活動空域內的所有航空器駕駛員必須具有雙向語音通訊能力。</li><li>不方便語音通訊的機組，平臺提供英文文字管制服務。</li><li>請文明用語，和諧溝通。不得辱罵機組或管制員，一經發現直接永久停飛處理。</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-TW/tutorial/xvoice.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var xvoice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, xvoice_default as default };
