<<<<<<< HEAD
(self.webpackChunkPFT_client=self.webpackChunkPFT_client||[]).push([[14],{7014:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(7294),o=n(3727),a=n(5977),s=n(5697),i=n.n(s),l=n(7703),u=(t=n(4184),n.n(t)),p=(s=n(1241),t=n(7746),n(6137));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,r.Component);var e,t,n=(e=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=h(e),r=t?(r=h(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==c(r)&&"function"!=typeof r?d(n):r});function a(){var e;return function(e){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this),m(d(e=n.call(this)),"onChange",(function(t){e.setState(m({},t.target.id,t.target.value))})),m(d(e),"onSubmit",(function(t){t.preventDefault(),t={name:e.state.name,surname:e.state.surname,thirdname:e.state.thirdname,group:e.state.group,email:e.state.email,password:e.state.password,password2:e.state.password2},e.props.registerUser(t,e.props.history)})),e.state={name:"",surname:"",thirdname:"",group:"",email:"",password:"",password2:"",role:"",errors:{}},e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a.prototype,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard"),this.props.loadGroup()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.props.groups;return r.createElement("section",null,r.createElement("div",{className:"container-sm mt-4 forms"},r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col"},r.createElement(o.rU,{to:"/",className:"link"},r.createElement("i",{className:"fa fa-angle-double-left"})," На главную"))),r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col-10 offset-1 text-center registerText"},r.createElement("p",null,"Ты с нами?"," ",r.createElement(o.rU,{to:"/login",className:"link"},"Добро пожаловать домой")))),r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col-12 offset-0 text-center"},r.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.createElement("span",{className:"text-danger"},e.name),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.name,error:e.name,id:"name",className:u()("form-control",{invalid:e.name}),placeholder:"Введите своё имя..."})),r.createElement("span",{className:"text-danger"},e.surname),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.surname,error:e.surname,id:"surname",className:u()("form-control",{invalid:e.surname}),placeholder:"Введите свою Фамилию..."})),r.createElement("span",{className:"text-danger"},e.thirdname),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.thirdname,error:e.thirdname,id:"thirdname",className:u()("form-control",{invalid:e.thirdname}),placeholder:"Введите своё отчество..."})),r.createElement("span",{className:"text-danger"},e.group),r.createElement("div",{className:"form-group input-group"},r.createElement("select",{type:"text",onChange:this.onChange,value:this.state.group||"null",error:e.group,id:"group",className:u()("form-control",{invalid:e.group}),placeholder:"Введите свою группу..."},r.createElement("option",{value:"null",disabled:!0},"Выбери свою группу"),t?t.map((function(e,t){return r.createElement("option",{key:t,value:e.name},e.name)})):"")),r.createElement("span",{className:"text-danger"},e.email),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-envelope "})," ")),r.createElement("input",{type:"email",onChange:this.onChange,value:this.state.email,error:e.email,id:"email",className:u()("form-control",{invalid:e.email}),placeholder:"Введите свой емайл..."})),r.createElement("span",{className:"text-danger"},e.password),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-lock "})," ")),r.createElement(p.Password,{type:"password",onChange:this.onChange,value:this.state.password,error:e.password,id:"password",className:u()("form-control",{invalid:e.password}),placeholder:"Введите свой пароль...",toggleMask:!0})),r.createElement("span",{className:"text-danger"},e.password2),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-lock "})," ")),r.createElement(p.Password,{type:"password",onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",className:u()("form-control",{invalid:e.password2}),placeholder:"Повтори пароль...",toggleMask:!0})),r.createElement("div",{className:"col-8 offset-2"},r.createElement("button",{className:"btn btn-info m-3",type:"submit"},"ВОЙТИ")))))))}}]),a}()).propTypes={registerUser:i().func.isRequired,loadGroup:i().func.isRequired,auth:i().object.isRequired,errors:i().object.isRequired};const y=(0,l.$j)((function(e){return{auth:e.auth,errors:e.errors,groups:e.group.groups}}),{registerUser:s.a$,loadGroup:t.uA})((0,a.EN)(n))},1436:(e,t,n)=>{"use strict";n.d(t,{jW:()=>a});var r=n(45),o=n(9249),a=function(e){return o.Am.dismiss(),o.Am.error("Ошибка загрузки данных! \n Код ошибки: "+e,{position:o.Am.POSITION.TOP_RIGHT,autoClose:1e4}),{type:r.EB,payload:{message:"error"}}}},7746:(e,t,n)=>{"use strict";n.d(t,{uA:()=>s,mD:()=>i,Rp:()=>l,iE:()=>u});var r=n(45),o=(t=n(9669),n.n(t)),a=n(1436),s=function(){return function(e,t){o().get("/api/group/").then((function(t){t.data&&e({type:r.IP,payload:t.data})})).catch((function(t){e({type:r.Cg,payload:t}),e((0,a.jW)(t))}))}},i=function(e,t){return function(n,s){o().put("/api/group/".concat(e),t).then((function(e){e.data.success&&n({type:r.t3,payload:e.data})})).catch((function(e){n({type:r.Cg,payload:e}),n((0,a.jW)(e))}))}},l=function(e,t){return function(n,s){console.log("добавлена группа"),o().post("/api/group",{name:e,teacherID:t}).then((function(o){e&&t&&n({type:r.Po,payload:o.data})})).catch((function(e){n({type:r.Cg,payload:e}),n((0,a.jW)(e))}))}},u=function(e){return function(t,n){o().delete("/api/group/".concat(e)).then((function(e){e.data.success&&t({type:r.iP,payload:e.data})})).catch((function(e){t({type:r.Cg,payload:e}),t((0,a.jW)(e))}))}}},6833:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.InputText=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n,o,a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&((o=s?Object.getOwnPropertyDescriptor(e,n):null)&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]);return a.default=e,t&&t.set(e,a),a}(n(7294)),a=c(n(5697)),s=n(5359),i=c(n(6900)),l=n(1090),u=c(n(3401)),p=c(n(1962));function c(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,o.Component);var e,t,n=(e=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=y(e),o=t?(o=y(this).constructor,Reflect.construct(n,arguments,o)):n.apply(this,arguments);return n=this,!o||"object"!==r(o)&&"function"!=typeof o?m(n):o});function a(e){return function(e){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this),(e=n.call(this,e)).onInput=e.onInput.bind(m(e)),e.onKeyPress=e.onKeyPress.bind(m(e)),e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a.prototype,[{key:"getElementRef",value:function(e){return this.element=e,this.props.forwardRef?p.default.isFunction(this.props.forwardRef)?this.props.forwardRef(e):this.props.forwardRef:this.element}},{key:"isFilled",value:function(){return null!=this.props.value&&0<this.props.value.toString().length||null!=this.props.defaultValue&&0<this.props.defaultValue.toString().length}},{key:"onKeyPress",value:function(e){this.props.onKeyPress&&this.props.onKeyPress(e),this.props.keyfilter&&i.default.onKeyPress(e,this.props.keyfilter,this.props.validateOnly)}},{key:"onInput",value:function(e){var t=!0;this.props.keyfilter&&this.props.validateOnly&&(t=i.default.validate(e,this.props.keyfilter)),this.props.onInput&&this.props.onInput(e,t),this.props.onChange||(0<e.target.value.length?u.default.addClass(e.target,"p-filled"):u.default.removeClass(e.target,"p-filled"))}},{key:"componentDidMount",value:function(){this.props.tooltip&&this.renderTooltip()}},{key:"componentDidUpdate",value:function(e){e.tooltip!==this.props.tooltip&&(this.tooltip?this.tooltip.updateContent(this.props.tooltip):this.renderTooltip())}},{key:"componentWillUnmount",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"renderTooltip",value:function(){this.tooltip=(0,l.tip)({target:this.element,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"render",value:function(){var e=this,t=(0,s.classNames)("p-inputtext p-component",{"p-disabled":this.props.disabled,"p-filled":this.isFilled()},this.props.className),n=p.default.findDiffKeys(this.props,a.defaultProps);return o.default.createElement("input",d({ref:function(t){return e.getElementRef(t)}},n,{className:t,onInput:this.onInput,onKeyPress:this.onKeyPress}))}}]),a}();g(v,"defaultProps",{onInput:null,onKeyPress:null,keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,forwardRef:null}),g(v,"propTypes",{onInput:a.default.func,onKeyPress:a.default.func,keyfilter:a.default.any,validateOnly:a.default.bool,tooltip:a.default.string,tooltipOptions:a.default.object,forwardRef:a.default.func}),a=o.default.forwardRef((function(e,t){return o.default.createElement(v,d({forwardRef:t},e))})),t.InputText=a},6900:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(n=n(3401))&&n.__esModule?n:{default:n};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){function e(){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this)}var t=e,n=[{key:"isNavKeyPress",value:function(t){return t=t.keyCode,33<=(t=r.default.getBrowser().safari&&e.SAFARI_KEYS[t]||t)&&t<=40||t===e.KEYS.RETURN||t===e.KEYS.TAB||t===e.KEYS.ESC}},{key:"isSpecialKey",value:function(e){var t=e.keyCode;return 9===t||13===t||27===t||16===t||17===t||18<=t&&t<=20||r.default.getBrowser().opera&&!e.shiftKey&&(8===t||33<=t&&t<=35||36<=t&&t<=39||44<=t&&t<=45)}},{key:"getKey",value:function(t){return t=t.keyCode||t.charCode,r.default.getBrowser().safari&&e.SAFARI_KEYS[t]||t}},{key:"getCharCode",value:function(e){return e.charCode||e.keyCode||e.which}},{key:"onKeyPress",value:function(t,n,o){var a;o||(a=e.DEFAULT_MASKS[n]||n,o=r.default.getBrowser(),t.ctrlKey||t.altKey||(n=this.getKey(t),o.mozilla&&(this.isNavKeyPress(t)||n===e.KEYS.BACKSPACE||n===e.KEYS.DELETE&&0===t.charCode)||(n=this.getCharCode(t),n=String.fromCharCode(n),o.mozilla&&(this.isSpecialKey(t)||!n)||a.test(n)||t.preventDefault())))}},{key:"validate",value:function(e,t){var n=e.target.value;return e=!0,!(n&&!t.test(n))&&e}}];return o(t,n),e}(),a(t.default=n,"DEFAULT_MASKS",{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i}),a(n,"KEYS",{TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46}),a(n,"SAFARI_KEYS",{63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35})},4755:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.Password=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n,o,a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&((o=s?Object.getOwnPropertyDescriptor(e,n):null)&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]);return a.default=e,t&&t.set(e,a),a}(n(7294)),a=y(n(3935)),s=y(n(5697)),i=y(n(3401)),l=n(1090),u=n(6833),p=y(n(1962)),c=y(n(2353)),f=n(8911),d=n(5359),h=y(n(6114)),m=n(8446);function y(e){return e&&e.__esModule?e:{default:e}}function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,o.Component);var e,t,n=(e=s,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=k(e),o=t?(o=k(this).constructor,Reflect.construct(n,arguments,o)):n.apply(this,arguments);return n=this,!o||"object"!==r(o)&&"function"!=typeof o?E(n):o});function s(e){return function(e){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this),(e=n.call(this,e)).state={overlayVisible:!1,meter:null,infoText:e.promptLabel(),focused:!1,unmasked:!1},e.onFocus=e.onFocus.bind(E(e)),e.onBlur=e.onBlur.bind(E(e)),e.onKeyup=e.onKeyup.bind(E(e)),e.onMaskToggle=e.onMaskToggle.bind(E(e)),e.onOverlayEnter=e.onOverlayEnter.bind(E(e)),e.onOverlayEntered=e.onOverlayEntered.bind(E(e)),e.onOverlayExit=e.onOverlayExit.bind(E(e)),e.id=e.props.id||(0,c.default)(),e.overlayRef=o.default.createRef(),e.mediumCheckRegExp=RegExp(e.props.mediumRegex),e.strongCheckRegExp=RegExp(e.props.strongRegex),e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(s.prototype,[{key:"promptLabel",value:function(){return this.props.promptLabel||(0,m.localeOption)("passwordPrompt")}},{key:"weakLabel",value:function(){return this.props.weakLabel||(0,m.localeOption)("weak")}},{key:"mediumLabel",value:function(){return this.props.mediumLabel||(0,m.localeOption)("medium")}},{key:"strongLabel",value:function(){return this.props.strongLabel||(0,m.localeOption)("strong")}},{key:"isFilled",value:function(){return null!=this.props.value&&0<this.props.value.toString().length}},{key:"getInputType",value:function(){return this.state.unmasked?"text":"password"}},{key:"updateLabels",value:function(){if(this.state.meter){var e=null;switch(this.state.meter.strength){case"weak":e=this.weakLabel();break;case"medium":e=this.mediumLabel();break;case"strong":e=this.strongLabel()}e&&this.state.infoText!==e&&this.setState({infoText:e})}else{var t=this.promptLabel();this.state.infoText!==t&&this.setState({infoText:t})}}},{key:"onMaskToggle",value:function(){this.setState((function(e){return{unmasked:!e.unmasked}}))}},{key:"showOverlay",value:function(){this.updateLabels(),this.setState({overlayVisible:!0})}},{key:"hideOverlay",value:function(){this.setState({overlayVisible:!1})}},{key:"alignOverlay",value:function(){this.props.appendTo?(this.overlayRef.current.style.minWidth=i.default.getOuterWidth(this.inputEl)+"px",i.default.absolutePosition(this.overlayRef.current,this.inputEl)):i.default.relativePosition(this.overlayRef.current,this.inputEl)}},{key:"onOverlayEnter",value:function(){this.overlayRef.current.style.zIndex=""+i.default.generateZIndex(),this.alignOverlay()}},{key:"onOverlayEntered",value:function(){this.bindScrollListener(),this.bindResizeListener()}},{key:"onOverlayExit",value:function(){this.unbindScrollListener(),this.unbindResizeListener()}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.setState({focused:!0},(function(){t.props.feedback&&t.showOverlay(),t.props.onFocus&&t.props.onFocus(e)}))}},{key:"onBlur",value:function(e){var t=this;e.persist(),this.setState({focused:!1},(function(){t.props.feedback&&t.hideOverlay(),t.props.onBlur&&t.props.onBlur(e)}))}},{key:"onKeyup",value:function(e){var t=this;if(this.props.feedback){var n=e.target.value,r=null,o=null;switch(this.testStrength(n)){case 1:r=this.weakLabel(),o={strength:"weak",width:"33.33%"};break;case 2:r=this.mediumLabel(),o={strength:"medium",width:"66.66%"};break;case 3:r=this.strongLabel(),o={strength:"strong",width:"100%"};break;default:r=this.promptLabel(),o=null}this.setState({meter:o,infoText:r},(function(){t.state.overlayVisible||t.showOverlay()}))}this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"testStrength",value:function(e){var t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t}},{key:"bindScrollListener",value:function(){var e=this;this.scrollHandler||(this.scrollHandler=new h.default(this.inputEl,(function(){e.state.overlayVisible&&e.hideOverlay()}))),this.scrollHandler.bindScrollListener()}},{key:"unbindScrollListener",value:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}},{key:"bindResizeListener",value:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.state.overlayVisible&&e.hideOverlay()},window.addEventListener("resize",this.resizeListener))}},{key:"unbindResizeListener",value:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}},{key:"componentDidMount",value:function(){this.props.tooltip&&this.renderTooltip()}},{key:"componentDidUpdate",value:function(e){e.tooltip!==this.props.tooltip&&(this.tooltip?this.tooltip.updateContent(this.props.tooltip):this.renderTooltip()),e.mediumRegex!==this.props.mediumRegex&&(this.mediumCheckRegExp=RegExp(this.props.mediumRegex)),e.strongRegex!==this.props.strongRegex&&(this.strongCheckRegExp=RegExp(this.props.strongRegex))}},{key:"componentWillUnmount",value:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"renderTooltip",value:function(){this.tooltip=(0,l.tip)({target:this.inputEl,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"renderIcon",value:function(){if(this.props.toggleMask){var e=this.state.unmasked?"pi pi-eye-slash":"pi pi-eye",t=o.default.createElement("i",{className:e,onClick:this.onMaskToggle});return this.props.icon&&(e={onClick:this.onMaskToggle,className:e,element:t,props:this.props},t=p.default.getJSXElement(this.props.icon,e)),t}return null}},{key:"renderPanel",value:function(){var e=(0,d.classNames)("p-password-panel p-component",this.props.panelClassName),t=(s=this.state.meter||{strength:"",width:"0%"}).strength,n=s.width,r=p.default.getJSXElement(this.props.header,this.props),s=p.default.getJSXElement(this.props.footer,this.props);return n=this.props.content?p.default.getJSXElement(this.props.content,this.props):o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"p-password-meter"},o.default.createElement("div",{className:"p-password-strength ".concat(t),style:{width:n}})),o.default.createElement("div",{className:"p-password-info"},this.state.infoText)),s=o.default.createElement(f.CSSTransition,{nodeRef:this.overlayRef,classNames:"p-connected-overlay",in:this.state.overlayVisible,timeout:{enter:120,exit:100},unmountOnExit:!0,onEnter:this.onOverlayEnter,onEntered:this.onOverlayEntered,onExit:this.onOverlayExit},o.default.createElement("div",{ref:this.overlayRef,className:e,style:this.props.panelStyle},r,n,s)),this.props.appendTo?a.default.createPortal(s,this.props.appendTo):s}},{key:"render",value:function(){var e=this,t=(0,d.classNames)("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":this.isFilled(),"p-inputwrapper-focus":this.state.focused,"p-input-icon-right":this.props.toggleMask},this.props.className),n=(0,d.classNames)("p-password-input",this.props.inputClassName),r=this.getInputType(),a=p.default.findDiffKeys(this.props,s.defaultProps),i=this.renderIcon(),l=this.renderPanel();return o.default.createElement("div",{className:t,style:this.props.style},o.default.createElement(u.InputText,v({id:this.id,ref:function(t){return e.inputEl=t}},a,{type:r,className:n,style:this.props.inputStyle,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyup})),i,l)}}]),s}(),w(t.Password=n,"defaultProps",{id:null,value:null,promptLabel:null,weakLabel:null,mediumLabel:null,strongLabel:null,mediumRegex:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",strongRegex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",feedback:!0,toggleMask:!1,appendTo:null,header:null,content:null,footer:null,icon:null,tooltip:null,tooltipOptions:null,style:null,className:null,inputStyle:null,inputClassName:null,panelStyle:null,panelClassName:null}),w(n,"propTypes",{id:s.default.string,value:s.default.string,promptLabel:s.default.string,weakLabel:s.default.string,mediumLabel:s.default.string,strongLabel:s.default.string,mediumRegex:s.default.string,strongRegex:s.default.string,feedback:s.default.bool,toggleMask:s.default.bool,appendTo:s.default.any,header:s.default.any,content:s.default.any,footer:s.default.any,icon:s.default.any,tooltip:s.default.string,tooltipOptions:s.default.object,style:s.default.object,className:s.default.string,inputStyle:s.default.object,inputClassName:s.default.string,panelStyle:s.default.object,panelClassName:s.default.string})},6137:(e,t,n)=>{"use strict";e.exports=n(4755)}}]);
=======
(self.webpackChunkPFT_client=self.webpackChunkPFT_client||[]).push([[14],{9853:(e,t,a)=>{"use strict";a.d(t,{jW:()=>o});var r=a(5962),n=a(9249),o=function(e){return n.Am.error("Ошибка загрузки данных! \n Код ошибки "+e,{position:n.Am.POSITION.TOP_RIGHT,autoClose:1e4}),{type:r.EB,payload:{message:"error"}}}},8623:(e,t,a)=>{"use strict";a.d(t,{uA:()=>s,mD:()=>c,Rp:()=>l,iE:()=>i});var r=a(5962),n=(t=a(9669),a.n(t)),o=a(9853),s=function(){return function(e,t){n().get("/api/group/").then((function(t){t.data&&e({type:r.IP,payload:t.data})})).catch((function(t){e({type:r.Cg,payload:t}),e((0,o.jW)(t))}))}},c=function(e,t){return function(a,s){n().put("/api/group/".concat(e),t).then((function(e){e.data.success&&a({type:r.t3,payload:e.data})})).catch((function(e){a({type:r.Cg,payload:e}),a((0,o.jW)(e))}))}},l=function(e,t){return function(a,s){n().post("/api/group",{name:e,teacherID:t}).then((function(n){e&&t&&a({type:r.Po,payload:n.data})})).catch((function(e){a({type:r.Cg,payload:e}),a((0,o.jW)(e))}))}},i=function(e){return function(t,a){n().delete("/api/group/".concat(e)).then((function(e){e.data.success&&t({type:r.iP,payload:e.data})})).catch((function(e){t({type:r.Cg,payload:e}),t((0,o.jW)(e))}))}}},7014:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(7294),n=a(3727),o=a(5977),s=a(5697),c=a.n(s),l=a(7703),i=a(7585),u=(t=a(8623),s=a(4184),a.n(s));function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}(s=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,r.Component);var e,t,a=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var a=d(e),r=t?(r=d(this).constructor,Reflect.construct(a,arguments,r)):a.apply(this,arguments);return a=this,!r||"object"!==p(r)&&"function"!=typeof r?f(a):r});function o(){var e;return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),h(f(e=a.call(this)),"onChange",(function(t){e.setState(h({},t.target.id,t.target.value))})),h(f(e),"onSubmit",(function(t){t.preventDefault(),t={id:0,name:e.state.name,surname:e.state.surname,thirdname:e.state.thirdname,group:e.state.group,email:e.state.email,password:e.state.password,password2:e.state.password2,role:"user"},e.props.registerUser(t,e.props.history)})),e.state={id:null,name:"",surname:"",thirdname:"",group:"",email:"",password:"",password2:"",role:"",errors:{}},e}return function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard"),this.props.loadGroup()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.props.groups;return r.createElement("section",null,r.createElement("div",{className:"container-sm mt-4 forms"},r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col"},r.createElement(n.rU,{to:"/",className:"link"},r.createElement("i",{className:"fa fa-angle-double-left"})," На главную"))),r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col-10 offset-1 text-center registerText"},r.createElement("p",null,"Ты с нами?"," ",r.createElement(n.rU,{to:"/login",className:"link"},"Добро пожаловать домой")))),r.createElement("div",{className:"row forms__container"},r.createElement("div",{className:"col-12 offset-0 text-center"},r.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.createElement("span",{className:"text-danger"},e.name),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.name,error:e.name,id:"name",className:u()("form-control",{invalid:e.name}),placeholder:"Введите своё имя..."})),r.createElement("span",{className:"text-danger"},e.surname),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.surname,error:e.surname,id:"surname",className:u()("form-control",{invalid:e.surname}),placeholder:"Введите свою Фамилию..."})),r.createElement("span",{className:"text-danger"},e.thirdname),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-user"})," ")),r.createElement("input",{type:"text",onChange:this.onChange,value:this.state.thirdname,error:e.thirdname,id:"thirdname",className:u()("form-control",{invalid:e.thirdname}),placeholder:"Введите своё отчество..."})),r.createElement("span",{className:"text-danger"},e.group),r.createElement("div",{className:"form-group input-group"},r.createElement("select",{type:"text",onChange:this.onChange,value:this.state.group||"null",error:e.group,id:"group",className:u()("form-control",{invalid:e.group}),placeholder:"Введите свою группу..."},r.createElement("option",{value:"null",disabled:!0},"Выбери свою группу"),t?t.map((function(e,t){return r.createElement("option",{key:t,value:e.name},e.name)})):"")),r.createElement("span",{className:"text-danger"},e.email),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-envelope "})," ")),r.createElement("input",{type:"email",onChange:this.onChange,value:this.state.email,error:e.email,id:"email",className:u()("form-control",{invalid:e.email}),placeholder:"Введите своё имя..."})),r.createElement("span",{className:"text-danger"},e.password),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-lock "})," ")),r.createElement("input",{type:"password",onChange:this.onChange,value:this.state.password,error:e.password,id:"password",className:u()("form-control",{invalid:e.password}),placeholder:"Введите свой пароль..."})),r.createElement("span",{className:"text-danger"},e.password2),r.createElement("div",{className:"form-group input-group"},r.createElement("div",{className:"input-group-prepend"},r.createElement("span",{className:"input-group-text"}," ",r.createElement("i",{className:"fa fa-lock "})," ")),r.createElement("input",{type:"password",onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",className:u()("form-control",{invalid:e.password2}),placeholder:"Повтори пароль..."})),r.createElement("div",{className:"col-8 offset-2"},r.createElement("button",{className:"btn btn-info m-3",type:"submit"},"ВОЙТИ")))))))}}]),o}()).propTypes={registerUser:c().func.isRequired,loadGroup:c().func.isRequired,auth:c().object.isRequired,errors:c().object.isRequired};const g=(0,l.$j)((function(e){return{auth:e.auth,errors:e.errors,groups:e.group.groups}}),{registerUser:i.a$,loadGroup:t.uA})((0,o.EN)(s))},4184:(e,t)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"==o||"number"==o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"==o)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=r)||(e.exports=a)}()}}]);
>>>>>>> baea96053af1603e6cdfdfeddb3cf89dcb9b8520
