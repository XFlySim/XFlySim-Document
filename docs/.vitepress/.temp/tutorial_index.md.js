import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/tutorial/index.md
var __pageData = JSON.parse("{\"title\":\"连线教程\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"tutorial/index.md\",\"filePath\":\"tutorial/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "tutorial/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="连线教程" tabindex="-1">连线教程 <a class="header-anchor" href="#连线教程" aria-label="Permalink to “连线教程”">​</a></h1><p>欢迎来到 XFLYSIM 连飞！本教程将帮助你完成第一次连线飞行。</p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to “快速开始”">​</a></h2><h3 id="_1-注册账号与呼号" tabindex="-1">1. 注册账号与呼号 <a class="header-anchor" href="#_1-注册账号与呼号" aria-label="Permalink to “1. 注册账号与呼号”">​</a></h3><ul><li>在连飞网站注册账号，并申请一个有效呼号。</li><li>呼号是你连入服务器后的唯一标识，请妥善保管，<strong>不要将账号借与他人使用</strong>。</li></ul><h3 id="_2-准备软件" tabindex="-1">2. 准备软件 <a class="header-anchor" href="#_2-准备软件" aria-label="Permalink to “2. 准备软件”">​</a></h3><p>你需要准备以下软件：</p><table tabindex="0"><thead><tr><th>用途</th><th>说明</th></tr></thead><tbody><tr><td>飞行模拟软件</td><td>如 Microsoft Flight Simulator、X-Plane 等</td></tr><tr><td>连飞客户端</td><td>用于连接 XFLYSIM 连飞服务器</td></tr><tr><td>XVoice</td><td>语音通讯软件，语音机组连线管制时需要</td></tr><tr><td>连飞地图</td><td>用于查看当前飞行空域内是否有管制员在线</td></tr></tbody></table><h3 id="_3-连接服务器" tabindex="-1">3. 连接服务器 <a class="header-anchor" href="#_3-连接服务器" aria-label="Permalink to “3. 连接服务器”">​</a></h3><ul><li>服务器地址：<code>ol.xflysim.com</code></li><li>请<strong>在机场设置的固定停机位</strong>连入服务器，严禁在滑行道、跑道上等非停机位直接连线。</li><li>连接服务器后，应当<strong>第一时间提交有效的飞行计划</strong>（包含起降机场、巡航高度层、计划航路、机型等）。</li></ul><h3 id="_4-通讯频率" tabindex="-1">4. 通讯频率 <a class="header-anchor" href="#_4-通讯频率" aria-label="Permalink to “4. 通讯频率”">​</a></h3><ul><li>自行连飞没有管制员时，请使用<strong>公用频率 122.800</strong>。</li><li>管制员上线时会在公用频道使用文字呼叫（<code>Please contact me on XXX.XX</code>），此时请将通讯面板调至管制员相应的频率，与管制员建立联系。</li><li><strong>文字机组</strong>：在游戏内直接文字交流即可。</li><li><strong>语音机组</strong>：需要连接 XVoice 语音软件。</li></ul><h3 id="_5-正式飞行" tabindex="-1">5. 正式飞行 <a class="header-anchor" href="#_5-正式飞行" aria-label="Permalink to “5. 正式飞行”">​</a></h3><p>在管制空域内请遵从管制员指挥，注意&quot;左窗避让原则&quot;，并在飞行前仔细阅读<a href="/rules/user-rules.html">用户准则</a>。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to “常见问题”">​</a></h2><h3 id="应答机如何设置" tabindex="-1">应答机如何设置？ <a class="header-anchor" href="#应答机如何设置" aria-label="Permalink to “应答机如何设置？”">​</a></h3><p>进入起飞跑道至脱离落地跑道期间置于 C 模式，其余时间置于 S 模式，仅在管制员要求识别时使用 IDENT 模式。</p><h3 id="什么是挂机飞行" tabindex="-1">什么是挂机飞行？ <a class="header-anchor" href="#什么是挂机飞行" aria-label="Permalink to “什么是挂机飞行？”">​</a></h3><p>指连接到服务器但无法对管制员或监察员指令做出回应的状态，例如外出用餐、睡眠等。活动期间严禁挂机飞行。</p><h3 id="紧急代码如何使用" tabindex="-1">紧急代码如何使用？ <a class="header-anchor" href="#紧急代码如何使用" aria-label="Permalink to “紧急代码如何使用？”">​</a></h3><p>连飞禁止使用 7500、7600 代码，如确有故障可以挂出 7700，正常情况禁止乱挂。</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tutorial/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var tutorial_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, tutorial_default as default };
