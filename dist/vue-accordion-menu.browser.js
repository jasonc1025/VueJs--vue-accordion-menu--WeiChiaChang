!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueAccordionMenu=factory():root.VueAccordionMenu=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(4);var Component=__webpack_require__(5)(__webpack_require__(3),__webpack_require__(6),"data-v-656f4e42",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("vue-accordion-menu",__WEBPACK_IMPORTED_MODULE_0__components_accordionMenu_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_accordionMenu_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_accordionMenu_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_accordionMenu_vue__);__webpack_require__.d(__webpack_exports__,"AccordionMenu",function(){return __WEBPACK_IMPORTED_MODULE_0__components_accordionMenu_vue___default.a});var plugin={version:"0.1.44",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"vue-accordion-menu",props:{items_Stage01:{type:Array,default:[{title:"How are you?",msg:"I am fine thank you."}]}},methods:{toggle:function(num){if(console.log("1"),console.log(this),console.log(this.$el),console.log(this.$el.children),this.$el.children[num].classList.contains("open"))this.$el.children[num].classList.remove("open"),this.$el.children[num].querySelectorAll(".faq-content")[0].style.display="none";else{var prevFaqQuestion=this.$el.querySelectorAll(".open");0!==prevFaqQuestion.length&&(prevFaqQuestion[0].classList.remove("open"),prevFaqQuestion[0].querySelectorAll(".faq-content")[0].style.display="none"),this.$el.children[num].classList.add("open"),this.$el.children[num].querySelectorAll(".faq-content")[0].style.display=""}}}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"faq-container"},_vm._l(_vm.items_Stage01,function(item,index){return _c("div",{staticClass:"faq-question",on:{click:function($event){_vm.toggle(index)}}},[_c("div",{staticClass:"faq-description"},[_c("span",{staticClass:"faq-number"},[_vm._v(_vm._s(index+1))]),_vm._v(_vm._s(item.title)),_c("span",[_vm._v("+")])]),_vm._v(" "),_c("div",{staticClass:"faq-content",staticStyle:{display:"none"}},[_c("p",[_c("span",{staticClass:"fade-in",domProps:{innerHTML:_vm._s(item.msg)}})]),_vm._v(" "),_vm._l(item.itemsSub,function(itemSub,indexSub){return _c("div",{staticClass:"faq-content"},[_c("p",[_c("span",{staticClass:"fade-in",domProps:{innerHTML:_vm._s(itemSub.text)}})])])})],2)])}))},staticRenderFns:[]}}])});