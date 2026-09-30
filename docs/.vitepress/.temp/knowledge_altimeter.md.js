import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/knowledge/altimeter.md
var __pageData = JSON.parse("{\"title\":\"过渡高度与高度表拨正（QNH/QFE/QNE）\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"knowledge/altimeter.md\",\"filePath\":\"knowledge/altimeter.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "knowledge/altimeter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="过渡高度与高度表拨正-qnh-qfe-qne" tabindex="-1">过渡高度与高度表拨正（QNH/QFE/QNE） <a class="header-anchor" href="#过渡高度与高度表拨正-qnh-qfe-qne" aria-label="Permalink to “过渡高度与高度表拨正（QNH/QFE/QNE）”">​</a></h1><blockquote><p>本页内容整理自公开资料，仅供学习参考；具体数值以现行有效的《航行资料汇编》及机场资料为准。</p></blockquote><h2 id="高度表的三种基准" tabindex="-1">高度表的三种基准 <a class="header-anchor" href="#高度表的三种基准" aria-label="Permalink to “高度表的三种基准”">​</a></h2><p>高度表显示的高度取决于气压基准，常见的三种拨正方式为：</p><table tabindex="0"><thead><tr><th>拨正值</th><th>含义</th><th>高度表指示</th></tr></thead><tbody><tr><td><strong>QNH</strong></td><td>修正海平面气压</td><td>修正海平面高度（近似于海拔高度）</td></tr><tr><td><strong>QFE</strong></td><td>场面气压</td><td>相对机场标高的高度</td></tr><tr><td><strong>QNE</strong></td><td>标准大气压（1013.25 hPa / 29.92 inHg）</td><td>气压高度，过渡高度层以上统一使用</td></tr></tbody></table><h2 id="过渡高度与过渡高度层" tabindex="-1">过渡高度与过渡高度层 <a class="header-anchor" href="#过渡高度与过渡高度层" aria-label="Permalink to “过渡高度与过渡高度层”">​</a></h2><ul><li><strong>过渡高度（TA，Transition Altitude）</strong>：在终端区内飞至该高度后，须将高度表由 QNH 拨正为 QNE，此后高度以飞行高度层（FL）表示。中国大陆多数地区过渡高度为 <strong>3000 米</strong>，高原等高海拔机场另有调整，以机场资料为准。</li><li><strong>过渡高度层（TL，Transition Level）</strong>：标准气压面上第一个可使用的飞行高度层。中国大陆多数地区为 <strong>3600 米</strong>（约相当于 FL118）。</li><li>过渡高度与过渡高度层之间的部分称为<strong>过渡夹层</strong>，其中禁止穿越，以保证由机场气压向标准气压过渡时的垂直间隔。</li></ul><h2 id="飞行高度层" tabindex="-1">飞行高度层 <a class="header-anchor" href="#飞行高度层" aria-label="Permalink to “飞行高度层”">​</a></h2><p>超过过渡高度层后，高度以<strong>飞行高度层（FL）</strong>表示：高度表拨正至 QNE，按“高度英尺数 ÷ 100”取值，例如 FL118 表示 11800 英尺。</p><p>米制与英尺的换算关系为 1 米 = 3.28084 英尺。中国民航巡航高度层以米制填写，两者的对照可参考<a href="/knowledge/rvsm.html">中国民航实施缩小垂直间隔（RVSM）与米制飞行高度层</a>。</p><h2 id="连线飞行的应用" tabindex="-1">连线飞行的应用 <a class="header-anchor" href="#连线飞行的应用" aria-label="Permalink to “连线飞行的应用”">​</a></h2><ol><li>进近、离场阶段使用管制员指定的机场 QNH（或按要求使用 QFE）设定高度表。</li><li>巡航阶段高度表拨正至 QNE，并按管制员指令使用飞行高度层。</li><li>由中国大陆地区起飞的航空器，飞行计划中的巡航高度层须按中国民航 RVSM 高度层配备规则填写（见<a href="/rules/user-rules.html">用户准则</a>）。</li></ol></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/altimeter.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var altimeter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, altimeter_default as default };
