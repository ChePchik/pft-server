(self.webpackChunkPFT_client=self.webpackChunkPFT_client||[]).push([[990],{3990:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(7294),o=n(7703),a=n(1657),c=n(5962),l=(t=n(9669),n.n(t)),u=n(76);function i(e){var t=e.add;return e=e.placeholder,r.createElement("div",{className:"content_block_input"},r.createElement("form",{onSubmit:t,className:""},r.createElement("input",{name:"test",autoComplete:"off",required:!0,placeholder:e}),r.createElement("span",null,r.createElement(u.Button,{label:"Добавить",icon:"pi pi-plus",className:"p-button-warning"}))))}n(5356);var s=n(9249),f=n(3727);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e){return p({},e=e.payloads),r.createElement(f.rU,{className:"test content_block content_block__medium",to:"/dashboard/test/".concat(e._id)},r.createElement("div",{className:"test_name"},r.createElement("h2",{className:"test_name_title"},e.nameTest),r.createElement("h4",{className:"test_name_subtitle"},e.nameTest)))}function d(e){var t=e.add;return e=e.placeholder,r.createElement("div",{className:"content_block_input"},r.createElement("form",{onSubmit:t,className:"test"},r.createElement("input",{name:"test",autoComplete:"off",required:!0,placeholder:e,disabled:!0})))}t=n(9081);var y=n.n(t);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=g(e),r=t?(r=g(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==b(r)&&"function"!=typeof r?_(n):r});function o(){var e;!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t,r,a,c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=function(t){if(t.preventDefault(),t=t.target.test.value.trim(),console.log(t),!t)return s.Am.error("Имя теста не добавлена, заполните поля!",{position:s.Am.POSITION.TOP_RIGHT,autoClose:5e3}),0;e.props.createdTest(t)},(r="addTest")in(t=_(e=n.call.apply(n,[this].concat(l))))?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"componentDidMount",value:function(){this.props.sidebarToggle(!1),this.props.loadTest()}},{key:"render",value:function(){var e=((e=this.props).currentTest,e.tests);return console.log(e),r.createElement(r.Fragment,null,r.createElement(s.Ix,null),r.createElement(i,{placeholder:"Добавить название тест, напрмер по Программированию",add:this.addTest}),e?r.createElement(r.Fragment,null,r.createElement(d,{placeholder:"Начни вводить название теста"}),r.createElement(y(),{transitionName:"fadeIn",transitionEnterTimeout:400,transitionLeaveTimeout:200,className:"testWrap"},e.map((function(e){return e=h({},e),r.createElement(m,{key:e._id,payloads:e})})))):r.createElement("p",null,"Ещё не создан ни один тест"))}}]),o}();const E=(0,o.$j)((function(e){return{currentTest:e.test.currentTest,tests:e.test.tests}}),(function(e){return{createdTest:function(t){return e((n=t,function(e,t){l().post("/api/test/",{name:n}).then((function(t){t.data&&e({type:c.i8,payload:t.data})})).catch((function(e){console.log("catch",e)}))}));var n},sidebarToggle:function(t){return e((0,a.L)(t))},loadTest:function(){return e((function(e,t){l().get("/api/test/").then((function(t){t.data&&e({type:c.fv,payload:t.data})})).catch((function(e){console.log("catch",e)}))}))}}}))(t)}}]);