webpackJsonp([38],{

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7624da2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_layout_md__ = __webpack_require__(396);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7624da2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_layout_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Layout 布局")]),_vm._v(" "),_c('p',[_vm._v("提供了"),_c('code',{pre:true},[_vm._v("v-row")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("v-col")]),_vm._v("两个组件来进行行列布局")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Row, Col } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" { Col } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" Row;\nVue.component(Row.name, Row);\nVue.component(Col.name, Col);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('h4',[_vm._v("基本用法")]),_vm._v(" "),_c('p',[_vm._v("Layout 组件提供了"),_c('code',{pre:true},[_vm._v("24列栅格")]),_vm._v("，通过在"),_c('code',{pre:true},[_vm._v("Col")]),_vm._v("上添加"),_c('code',{pre:true},[_vm._v("span")]),_vm._v("属性设置列所占的宽度百分比"),_c('br'),_vm._v("\n此外，添加"),_c('code',{pre:true},[_vm._v("offset")]),_vm._v("属性可以设置列的偏移宽度，计算方式与 span 相同")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("span: 4"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"10\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("offset")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("offset: 4, span: 10"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("offset")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(">")]),_vm._v("offset: 12, span: 12"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("设置列元素间距")]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("gutter")]),_vm._v("属性可以设置列元素之间的间距，默认间距为 0")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("gutter")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"20\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"8\"")]),_vm._v(">")]),_vm._v("span: 8"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("flex")]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("warp")]),_vm._v("属性可以设置子元素换行方式")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("wrap")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"wrap\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("wrap")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"wrap-reverse\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("align")]),_vm._v("属性可以设置子元素交叉轴对齐方式")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"start\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"end\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("justify")]),_vm._v("属性可以设置子元素主轴对齐方式")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("justify")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"start\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("justify")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("justify")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"end\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("justify")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"between\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("justify")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"around\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6\"")]),_vm._v(">")]),_vm._v("span: 6"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-col")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-row")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('h4',[_vm._v("Row 行元素")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("属性")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("direction")]),_vm._v(" "),_c('td',[_vm._v("子元素定位方向")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("row")])]),_vm._v(" "),_c('td',[_vm._v("可选 "),_c('code',{pre:true},[_vm._v("row")]),_vm._v(","),_c('code',{pre:true},[_vm._v("row-reverse")]),_vm._v(","),_c('code',{pre:true},[_vm._v("column")]),_vm._v(","),_c('code',{pre:true},[_vm._v("column-reverse")]),_vm._v(", RN 仅支持"),_c('code',{pre:true},[_vm._v("row")]),_vm._v(","),_c('code',{pre:true},[_vm._v("column")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("wrap")]),_vm._v(" "),_c('td',[_vm._v("子元素换行方式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("nowrap")])]),_vm._v(" "),_c('td',[_vm._v("可选"),_c('code',{pre:true},[_vm._v("nowrap")]),_vm._v(","),_c('code',{pre:true},[_vm._v("wrap")]),_vm._v(","),_c('code',{pre:true},[_vm._v("wrap-reverse")]),_vm._v(", RN 仅支持"),_c('code',{pre:true},[_vm._v("nowrap")]),_vm._v(","),_c('code',{pre:true},[_vm._v("wrap")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("justify")]),_vm._v(" "),_c('td',[_vm._v("子元素主轴对齐方式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("start")])]),_vm._v(" "),_c('td',[_vm._v("可选"),_c('code',{pre:true},[_vm._v("start")]),_vm._v(","),_c('code',{pre:true},[_vm._v("end")]),_vm._v(","),_c('code',{pre:true},[_vm._v("center")]),_vm._v(","),_c('code',{pre:true},[_vm._v("between")]),_vm._v(","),_c('code',{pre:true},[_vm._v("around")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("align")]),_vm._v(" "),_c('td',[_vm._v("子元素交叉轴对齐方式")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("center")])]),_vm._v(" "),_c('td',[_vm._v("可选"),_c('code',{pre:true},[_vm._v("start")]),_vm._v(","),_c('code',{pre:true},[_vm._v("center")]),_vm._v(","),_c('code',{pre:true},[_vm._v("end")]),_vm._v(","),_c('code',{pre:true},[_vm._v("baseline")]),_vm._v(","),_c('code',{pre:true},[_vm._v("stretch")]),_vm._v(" RN仅支持"),_c('code',{pre:true},[_vm._v("start")]),_vm._v(","),_c('code',{pre:true},[_vm._v("end")]),_vm._v(","),_c('code',{pre:true},[_vm._v("center")]),_vm._v(","),_c('code',{pre:true},[_vm._v("stretch")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("alignContent")]),_vm._v(" "),_c('td',[_vm._v("多根轴线时对齐方式("),_c('code',{pre:true},[_vm._v("web only")]),_vm._v(")")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("stretch")])]),_vm._v(" "),_c('td',[_vm._v("可选"),_c('code',{pre:true},[_vm._v("start")]),_vm._v(","),_c('code',{pre:true},[_vm._v("end")]),_vm._v(","),_c('code',{pre:true},[_vm._v("center")]),_vm._v(","),_c('code',{pre:true},[_vm._v("between")]),_vm._v(","),_c('code',{pre:true},[_vm._v("around")]),_vm._v(","),_c('code',{pre:true},[_vm._v("stretch")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("gutter")]),_vm._v(" "),_c('td',[_vm._v("子元素间距（单位为px）")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String | Number")])]),_vm._v(" "),_c('td',[_vm._v("0")]),_vm._v(" "),_c('td',[_vm._v("-")])])])]),_vm._v(" "),_c('h4',[_vm._v("Column 列元素")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("span")]),_vm._v(" "),_c('td',[_vm._v("列元素宽度")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String | Number")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("offset")]),_vm._v(" "),_c('td',[_vm._v("列元素偏移距离")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String | Number")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});