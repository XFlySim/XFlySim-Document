import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/index.md
var __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"home\",\"hero\":{\"name\":\"XFlySim 文档\",\"text\":\"XFlySim 连飞文档中心\",\"tagline\":\"用户准则 · 连线教程 · 平台资讯\",\"image\":{\"src\":\"/logo.png\",\"alt\":\"XFlySim\"},\"actions\":[{\"theme\":\"brand\",\"text\":\"快速开始\",\"link\":\"/tutorial/\"},{\"theme\":\"alt\",\"text\":\"用户准则\",\"link\":\"/rules/user-rules\"}]},\"features\":[{\"title\":\"连线教程\",\"details\":\"从注册呼号到首次连线飞行，一步步带你走进 XFLYSIM 连飞世界。\",\"link\":\"/tutorial/\"},{\"title\":\"用户准则\",\"details\":\"了解连飞服务器秩序与行为规范，做一个合格的航空器驾驶员。\",\"link\":\"/rules/user-rules\"},{\"title\":\"航空知识\",\"details\":\"了解 RVSM 米制飞行高度层与高度表拨正等实用航空知识。\",\"link\":\"/knowledge/\"},{\"title\":\"社区共建\",\"details\":\"文档开源托管于 GitHub，欢迎每一位社区成员参与编写与翻译。\",\"link\":\"/contributors/\"}]},\"headers\":[],\"relativePath\":\"index.md\",\"filePath\":\"index.md\",\"lastUpdated\":1790760735000}");
var _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var docs_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, docs_default as default };
