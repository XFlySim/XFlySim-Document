import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region docs/contributors/index.md
var __pageData = JSON.parse("{\"title\":\"贡献成员\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\"contributors/index.md\",\"filePath\":\"contributors/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "contributors/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="贡献成员" tabindex="-1">贡献成员 <a class="header-anchor" href="#贡献成员" aria-label="Permalink to “贡献成员”">​</a></h1><p>本项目由 XFLYSIM 社区成员共同维护，感谢每一位参与文档建设的贡献者。</p><h2 id="维护者" tabindex="-1">维护者 <a class="header-anchor" href="#维护者" aria-label="Permalink to “维护者”">​</a></h2><ul><li><strong>XFS7412</strong> — 项目发起人 / 文档维护</li></ul><h2 id="参与方式" tabindex="-1">参与方式 <a class="header-anchor" href="#参与方式" aria-label="Permalink to “参与方式”">​</a></h2><p>欢迎所有社区成员参与文档建设：</p><ul><li><strong>提交问题</strong> — 发现文档错误或有疑问，请提交 <a href="https://github.com/XFlySim/XFlySim-Document/issues" target="_blank" rel="noreferrer">Issue</a>。</li><li><strong>参与编写</strong> — 页面底部提供「在 GitHub 上编辑此页面」入口，可直接修改。</li><li><strong>翻译校对</strong> — 文档支持简体中文、繁體中文、English 三种语言，欢迎帮忙校对与完善。</li></ul><p>所有贡献内容均以 <a href="https://github.com/XFlySim/XFlySim-Document/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT 许可证</a> 授权。</p><hr><p>感谢大家的支持！</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contributors/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contributors_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, contributors_default as default };
