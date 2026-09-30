import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/zh-TW/knowledge/altimeter.md
var __pageData = JSON.parse("{\"title\":\"過渡高度與高度表撥正（QNH/QFE/QNE）\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"zh-TW/knowledge/altimeter.md\",\"filePath\":\"zh-TW/knowledge/altimeter.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "zh-TW/knowledge/altimeter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="過渡高度與高度表撥正-qnh-qfe-qne" tabindex="-1">過渡高度與高度表撥正（QNH/QFE/QNE） <a class="header-anchor" href="#過渡高度與高度表撥正-qnh-qfe-qne" aria-label="Permalink to “過渡高度與高度表撥正（QNH/QFE/QNE）”">​</a></h1><blockquote><p>本頁內容整理自公開資料，僅供學習參考；具體數值以現行有效的《航行資料彙編》及機場資料為準。</p></blockquote><h2 id="高度表的三種基準" tabindex="-1">高度表的三種基準 <a class="header-anchor" href="#高度表的三種基準" aria-label="Permalink to “高度表的三種基準”">​</a></h2><p>高度表顯示的高度取決於氣壓基準，常見的三種撥正方式為：</p><table tabindex="0"><thead><tr><th>撥正值</th><th>含義</th><th>高度表指示</th></tr></thead><tbody><tr><td><strong>QNH</strong></td><td>修正海平面氣壓</td><td>修正海平面高度（近似於海拔高度）</td></tr><tr><td><strong>QFE</strong></td><td>場面氣壓</td><td>相對機場標高的高度</td></tr><tr><td><strong>QNE</strong></td><td>標準大氣壓（1013.25 hPa / 29.92 inHg）</td><td>氣壓高度，過渡高度層以上統一使用</td></tr></tbody></table><h2 id="過渡高度與過渡高度層" tabindex="-1">過渡高度與過渡高度層 <a class="header-anchor" href="#過渡高度與過渡高度層" aria-label="Permalink to “過渡高度與過渡高度層”">​</a></h2><ul><li><strong>過渡高度（TA，Transition Altitude）</strong>：在終端區內飛至該高度後，須將高度表由 QNH 撥正為 QNE，此後高度以飛行高度層（FL）表示。中國大陸多數地區過渡高度為 <strong>3000 米</strong>，高原等高海拔機場另有調整，以機場資料為準。</li><li><strong>過渡高度層（TL，Transition Level）</strong>：標準氣壓面上第一個可使用的飛行高度層。中國大陸多數地區為 <strong>3600 米</strong>（約相當於 FL118）。</li><li>過渡高度與過渡高度層之間的部分稱為<strong>過渡夾層</strong>，其中禁止穿越，以保證由機場氣壓向標準氣壓過渡時的垂直間隔。</li></ul><h2 id="飛行高度層" tabindex="-1">飛行高度層 <a class="header-anchor" href="#飛行高度層" aria-label="Permalink to “飛行高度層”">​</a></h2><p>超過過渡高度層後，高度以<strong>飛行高度層（FL）</strong>表示：高度表撥正至 QNE，按「高度英尺數 ÷ 100」取值，例如 FL118 表示 11800 英尺。</p><p>米制與英尺的換算關係為 1 米 = 3.28084 英尺。中國民航巡航高度層以米制填寫，兩者的對照可參考<a href="/zh-TW/knowledge/rvsm.html">中國民航實施縮小垂直間隔（RVSM）與米制飛行高度層</a>。</p><h2 id="連線飛行的應用" tabindex="-1">連線飛行的應用 <a class="header-anchor" href="#連線飛行的應用" aria-label="Permalink to “連線飛行的應用”">​</a></h2><ol><li>進近、離場階段使用管制員指定的機場 QNH（或按要求使用 QFE）設定高度表。</li><li>巡航階段高度表撥正至 QNE，並按管制員指令使用飛行高度層。</li><li>由中國大陸地區起飛的航空器，飛行計劃中的巡航高度層須按中國民航 RVSM 高度層配備規則填寫（見<a href="/zh-TW/rules/user-rules.html">使用者準則</a>）。</li></ol></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh-TW/knowledge/altimeter.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var altimeter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, altimeter_default as default };
