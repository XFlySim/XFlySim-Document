import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/zh-TW/tutorial/msfs.md
var __pageData = JSON.parse("{\"title\":\"微軟模擬飛行 2020/2024 連線教程\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"zh-TW/tutorial/msfs.md\",\"filePath\":\"zh-TW/tutorial/msfs.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "zh-TW/tutorial/msfs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="微軟模擬飛行-2020-2024-連線教程" tabindex="-1">微軟模擬飛行 2020/2024 連線教程 <a class="header-anchor" href="#微軟模擬飛行-2020-2024-連線教程" aria-label="Permalink to “微軟模擬飛行 2020/2024 連線教程”">​</a></h1><p>本教程適用於 Microsoft Flight Simulator 2020 與 2024，介紹如何連入 XFLYSIM 連飛伺服器。</p><h2 id="準備階段" tabindex="-1">準備階段 <a class="header-anchor" href="#準備階段" aria-label="Permalink to “準備階段”">​</a></h2><h3 id="_1-安裝飛行模擬軟體" tabindex="-1">1. 安裝飛行模擬軟體 <a class="header-anchor" href="#_1-安裝飛行模擬軟體" aria-label="Permalink to “1. 安裝飛行模擬軟體”">​</a></h3><ul><li>透過 Microsoft Store 或 Xbox Game Pass 安裝 Microsoft Flight Simulator 2020 / 2024。</li><li>確認已安裝最新版本，並完成基礎飛行訓練（或熟悉基本操作）。</li></ul><h3 id="_2-安裝連飛客戶端" tabindex="-1">2. 安裝連飛客戶端 <a class="header-anchor" href="#_2-安裝連飛客戶端" aria-label="Permalink to “2. 安裝連飛客戶端”">​</a></h3><ul><li>下載並安裝 XFLYSIM 連飛客戶端。</li><li>在客戶端中填寫連飛網站註冊的賬號與呼號。</li></ul><h3 id="_3-安裝語音軟體" tabindex="-1">3. 安裝語音軟體 <a class="header-anchor" href="#_3-安裝語音軟體" aria-label="Permalink to “3. 安裝語音軟體”">​</a></h3><ul><li>語音機組需要安裝 <strong>XVoice</strong> 語音軟體（詳見 <a href="/zh-TW/tutorial/xvoice.html">XVoice 語音教程</a>）。</li><li>文字機組可跳過此步驟，在遊戲內直接使用文字交流。</li></ul><h2 id="連線步驟" tabindex="-1">連線步驟 <a class="header-anchor" href="#連線步驟" aria-label="Permalink to “連線步驟”">​</a></h2><ol><li>開啟 Microsoft Flight Simulator，選擇需要飛行的機型和機場。</li><li>將飛機停放在<strong>固定停機位</strong>，等待載入完成。</li><li>啟動連飛客戶端，填入呼號並連線伺服器 <code>ol.xflysim.com</code>。</li><li>連線成功後，第一時間提交飛行計劃（起降機場、巡航高度層、計劃航路、機型等）。</li><li>在未提供管制服務的空域，使用公用頻率 122.800；有管制員線上時聽從其指揮。</li></ol><h2 id="注意事項" tabindex="-1">注意事項 <a class="header-anchor" href="#注意事項" aria-label="Permalink to “注意事項”">​</a></h2><ul><li>嚴禁在滑行道、跑道上等非停機位直接連線。</li><li>飛行前請仔細閱讀<a href="/zh-TW/rules/user-rules.html">使用者準則</a>。</li><li>管制空域內注意收聽管制員指令，遵守&quot;左窗避讓原則&quot;。</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-TW/tutorial/msfs.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var msfs_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, msfs_default as default };
