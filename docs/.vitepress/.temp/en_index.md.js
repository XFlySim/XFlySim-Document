import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/en/index.md
var __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"home\",\"hero\":{\"name\":\"XFlySim Docs\",\"text\":\"XFlySim Online Flight Docs\",\"tagline\":\"User Guidelines · Online Flight Tutorial · Platform News\",\"image\":{\"src\":\"/logo.png\",\"alt\":\"XFlySim\"},\"actions\":[{\"theme\":\"brand\",\"text\":\"Get Started\",\"link\":\"/en/tutorial/\"},{\"theme\":\"alt\",\"text\":\"User Guidelines\",\"link\":\"/en/rules/user-rules\"}]},\"features\":[{\"title\":\"Online Flight Tutorial\",\"details\":\"From registering your callsign to your first online flight, step by step into the world of XFLYSIM.\",\"link\":\"/en/tutorial/\"},{\"title\":\"User Guidelines\",\"details\":\"Learn about the order and code of conduct of the online flight server, and be a qualified aircraft pilot.\",\"link\":\"/en/rules/user-rules\"},{\"title\":\"Aviation Knowledge\",\"details\":\"Practical aviation knowledge including RVSM metric flight levels and altimeter settings.\",\"link\":\"/en/knowledge/\"},{\"title\":\"Community Built\",\"details\":\"Docs are open source on GitHub. Everyone in the community is welcome to write and translate.\",\"link\":\"/en/contributors/\"}]},\"headers\":[],\"relativePath\":\"en/index.md\",\"filePath\":\"en/index.md\",\"lastUpdated\":1790769845000}");
var _sfc_main = { name: "en/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var en_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, en_default as default };
