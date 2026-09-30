import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/en/tutorial/xvoice.md
var __pageData = JSON.parse("{\"title\":\"XVoice Voice Tutorial\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"en/tutorial/xvoice.md\",\"filePath\":\"en/tutorial/xvoice.md\",\"lastUpdated\":1790760735000}");
var _sfc_main = { name: "en/tutorial/xvoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xvoice-voice-tutorial" tabindex="-1">XVoice Voice Tutorial <a class="header-anchor" href="#xvoice-voice-tutorial" aria-label="Permalink to “XVoice Voice Tutorial”">​</a></h1><p>This tutorial explains how to use the XVoice voice software for voice communication.</p><h2 id="what-is-xvoice" tabindex="-1">What is XVoice <a class="header-anchor" href="#what-is-xvoice" aria-label="Permalink to “What is XVoice”">​</a></h2><p>XVoice is the voice communication software of the XFLYSIM online flight platform. In airspace where ATC services are provided, voice crews need to use XVoice to communicate with controllers and other crews.</p><h2 id="installation-and-login" tabindex="-1">Installation and Login <a class="header-anchor" href="#installation-and-login" aria-label="Permalink to “Installation and Login”">​</a></h2><ol><li>Download and install the XVoice client.</li><li>Log in with the account and password registered on the online flight website.</li></ol><h2 id="connecting-to-the-server" tabindex="-1">Connecting to the Server <a class="header-anchor" href="#connecting-to-the-server" aria-label="Permalink to “Connecting to the Server”">​</a></h2><ol><li>Open XVoice, select the XFLYSIM server and connect.</li><li>After connecting, confirm that the software shows an online status.</li></ol><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to “Notes”">​</a></h2><ul><li>After entering controlled airspace, follow controller instructions and keep the voice channel clear.</li><li>During an activity, all aircraft pilots within the activity airspace must have two-way voice communication capability.</li><li>For crews who are unable to use voice communication, the platform provides English text-based ATC services.</li><li>Please use civil language and communicate in harmony. Abusing crew members or controllers is prohibited; any such conduct results in immediate permanent grounding.</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/tutorial/xvoice.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var xvoice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, xvoice_default as default };
