(self.webpackChunkPFT_client=self.webpackChunkPFT_client||[]).push([[448],{3448:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>me});var r=n(7294),o=n(7703),a=n(5977),c=(n.p,n(3727)),l=n(1241);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=s(e),r=t?(r=s(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==u(r)&&"function"!=typeof r?function(){if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():r});function o(){return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),n.apply(this,arguments)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){return r.createElement(c.OL,{to:"/",onClick:this.props.logoutUser,className:"d-inline"},"Выйти")}}]),o}(),p=(0,o.$j)(null,(function(e){return{logoutUser:function(){return e((0,l.TX)())}}}))(f),m=(n(9081),n(5858));function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=h(e),r=t?(r=h(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==y(r)&&"function"!=typeof r?b(n):r});function o(){var e;!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return v(b(e=n.call.apply(n,[this].concat(r))),"state",{isOpen:!1}),v(b(e),"sidebarToggle",(function(){e.props.sidebarToggle(!e.props.sidebarState)})),e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){var e=this.props.auth.user;return r.createElement("header",{className:"header"},r.createElement("div",{className:"header_container header_container d-flex flex-column flex-md-row "},r.createElement("div",{className:"header_logo "},r.createElement("h1",{className:"white header_title h3 "},r.createElement("strong",null,"PFT")),r.createElement("p",{id:"sidebarToggle",className:this.props.sidebarState?"normal":"compact",onClick:this.sidebarToggle},r.createElement("span",null),r.createElement("span",null),r.createElement("span",null))),r.createElement("div",{className:"header_user m-3"},e?r.createElement("p",{className:"d-inline"},e.email," "):"",r.createElement(p,null))))}}]),o}();var g=(0,o.$j)((function(e){return{auth:e.auth,sidebarState:e.helper.sidebarState}}),(function(e){return{sidebarToggle:function(t){return e((0,m.LR)(t))}}}))(t);function E(){return r.createElement("footer",{className:"footer"},r.createElement("p",null,r.createElement("strong",null,"PFT")," © 20... always"))}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e){var t=e.title,n=e.icon;return e=function(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["title","icon"]),r.createElement("li",{className:"sidebar_item"},r.createElement(c.OL,O({},e,{className:"sidebar_link",activeClassName:"sidebar_link__active"}),r.createElement("i",{className:"fa "+n}),t))}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=_(e),r=t?(r=_(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==j(r)&&"function"!=typeof r?function(){if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():r});function o(){return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),n.apply(this,arguments)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){var e=this.props.sidebarState;return r.createElement("aside",{className:e?"sidebar":"sidebar compact"},r.createElement(w,{exact:!0,icon:"fa-home",title:e?" Главная":"",to:"/dashboard"}),r.createElement(w,{icon:"fa-list",title:e?" Тесты":"",to:"/dashboard/test"}),r.createElement(w,{icon:"fa-users",title:e?" Пользователи":"",to:"/dashboard/users"}),r.createElement(w,{icon:"fa-users",title:e?" Группы":"",to:"/dashboard/groups"}),r.createElement(w,{icon:"fa-times",title:e?" Access":"",to:"/dashboard/access"}))}}]),o}();var P=(0,o.$j)((function(e){return{sidebarState:e.helper.sidebarState}}),(function(e){return{sidebarToggle:function(t){return e((0,m.LR)(t))}}}))(f),x=n(955),N=n(6941),T=n(8089),R=n(5351),k=n(1121),C=n(6094),A=n(2904);function Z(){return r.createElement(r.Fragment,null,r.createElement(N.Z,null,r.createElement(T.Z,null,r.createElement(R.Z,null,"Kick start your project 🚀")),r.createElement(k.Z,null,r.createElement(C.Z,null,"All the best for your new project."),r.createElement(C.Z,null,"Please make sure to read our"," ",r.createElement(A.Z,{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/",target:"_blank"},"Template Documentation")," ","to understand where to go from here and how to use our template."))),r.createElement(N.Z,null,r.createElement(T.Z,null,r.createElement(R.Z,null,"Want to integrate JWT? 🔒")),r.createElement(k.Z,null,r.createElement(C.Z,null,"We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts."),r.createElement(C.Z,null,"Please read our"," ",r.createElement(A.Z,{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth",target:"_blank"},"JWT Documentation")," ","to get more out of JWT authentication."))))}n(4184);var I=n(45),F=(t=n(9669),n.n(t));function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}f=n(5697),t=n.n(f),(f=function(e){var t=e.component,n=e.users;return e=function(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["component","users"]),r.createElement(a.AW,W({},e,{render:function(e){return"user"!==n.currentUser.role?r.createElement(t,e):r.createElement(a.l_,{to:"/dashboard/access"})}}))}).propTypes={users:t().object.isRequired};var q=(0,o.$j)((function(e){return{users:e.users}}))(f),B=(n(4975),n(9249)),D=n(7975),z=n(8268),U=n(3789),J=n(1896),$=n(833);(f=function(e){var t=e.count,n=e.tag,o=e.children;e=function(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],~t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["count","tag","children"]),console.log("===================================="),console.log(t,"count"),console.log(n,"tag"),console.log(o,"children"),console.log(e,"rest"),console.log("===================================="),n=n;for(var a=[],c=0;c<t;c++)a.push(o(c));return r.createElement(n,e,a)}).propTypes={count:t().number.isRequired,tag:t().string.isRequired},f.defaultProps={tag:"div"};var L=f,H=n(2234),G=n(3920);function K(){return r.createElement("div",{className:"col-sm-6 mb-5"},r.createElement("input",{className:"effect-1",type:"text",required:!0,placeholder:"Ответ",id:"ans"}),r.createElement("span",{className:"focus-border"},r.createElement("div",{className:"wrapper"},r.createElement("input",{type:"checkbox",name:"checkbox",id:"ansType"}))))}function M(){return r.createElement("div",{className:"col-sm-6 mb-5"},r.createElement("input",{className:"effect-1",type:"text",required:!0,placeholder:"Ответ",id:"ans"}),r.createElement("span",{className:"focus-border"},r.createElement("div",{className:"wrapper"},r.createElement("input",{type:"radio",name:"radio",id:"ansType"}))))}function Q(){return r.createElement("div",{className:"col-sm-12 mb-5"},r.createElement("input",{className:"effect-1",type:"text",required:!0,id:"textInput",placeholder:"Ответ"}),r.createElement("span",{className:"focus-border"}))}function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=ne(e),r=t?(r=ne(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==X(r)&&"function"!=typeof r?te(n):r});function o(){var e;!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return re(te(e=n.call.apply(n,[this].concat(r))),"state",{valueInput:"",valueArea:[],valueSelect:[],countForm:1,countAnswer:1}),re(te(e),"deleteTest",(function(t){(0,G.confirmPopup)({target:t.currentTarget,message:"Удалить?",icon:"pi pi-exclamation-triangle",accept:function(){var n=null;t.target.baseURI.split("/").forEach((function(e){n=20<e.length?e:null})),e.props.deleteTest(n),B.Am.warn("Тест ".concat(n," удален!"),{position:B.Am.POSITION.TOP_RIGHT,autoClose:3e3}),e.props.history.push("/dashboard/test")},reject:function(){return 0}})})),re(te(e),"increaseCount",(function(){e.setState({countForm:e.state.countForm+1})})),re(te(e),"deleteForm",(function(t){return t.preventDefault(),e.state.countForm<=1?(B.Am.error("Должен остаться как минимум один вопрос",{position:"top-right",autoClose:5e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),0):void t.target.closest(".component").remove()})),re(te(e),"handleSubmit",(function(t){t.preventDefault();var n=(t=e.state).valueArea,r=t.valueSelect,o=t.valueInput;console.log(o,"valueInput"),console.log(n,"valueArea"),console.log(r,"valueSelect"),console.log("===========================");try{var a=document.querySelectorAll("input#ans"),c=document.querySelectorAll("input#ansType"),l=document.querySelectorAll("input#textInput"),u=e.props.auth.user.id;console.log(a,"text"),console.log(c,"type"),console.log(l,"textInput");var i,s=[],f=[],p=-1;for(i in r){var m=[];if("text"==r[i]){console.log(l[++p].value.trim());var y={idx:i,text:l[p].value.trim(),rigt:!0};m.push(y)}else{console.log(a.length);for(var d=0;d<a.length;d++){var b={idx:d,text:a[d].value.trim(),rigt:c[d].checked};console.log(b,"answersArrTemp"),m.push(b)}}y={IDQ:i,type:r[i],question:n[i],note:"заметки к конкретному вопросу",answers:m},f.push(y),console.log(f,"questions"),s={nameTest:o,authorID:u,notes:"заметки",timeINsecond:0,errorCount:3,attemptCount:3,questions:f}}return void console.log(s,"testReady")}catch(t){B.Am.dismiss(),console.log(t),B.Am.error("Уппс что-то пошло не так \n Возможно вы не заполнили поля",{position:"top-right",autoClose:5e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}})),e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){var e=this,t=(a=this.state).valueArea,n=a.valueSelect,o=a.valueInput,a=a.countForm;return console.log(t,"valueArea"),console.log(n,"valueSelect"),r.createElement(r.Fragment,null,r.createElement(B.Ix,null),r.createElement("div",{className:"forms"},r.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit,required:!0},r.createElement("div",{className:"forms__container"},r.createElement("h4",{className:"name"},"Тест по:",r.createElement("input",{className:"titleInput",id:"valueInput",value:o,onChange:function(t){e.setState(re({},t.target.id,t.target.value))},required:!0,type:"text"}))),r.createElement(L,{count:a},(function(o){return r.createElement("div",{className:"component",key:o},r.createElement("div",{className:"form__wrapper"},r.createElement("textarea",{id:"valueArea",value:t[o],onChange:function(n){console.log(L,"Repeater"),console.log(o,"countForm"),console.log(L.count,"Repeater.count"),e.setState({valueArea:Y(Y({},t),{},re({},o,n.target.value))})},required:!0,placeholder:"Вопрос"})),r.createElement("hr",null),r.createElement("select",{className:"form-control",onChange:function(t){e.setState({valueSelect:Y(Y({},n),{},re({},o,t.target.value))})},id:"valueSelect",required:!0,value:null==n[o]?"null":n[o]},r.createElement("option",{value:"null",disabled:!0},"Выбери из меню тип вопроса"),r.createElement("option",{value:"checkbox"},"checkbox"),r.createElement("option",{value:"radio"},"radio"),r.createElement("option",{value:"text"},"text")),r.createElement("hr",null),r.createElement("div",{className:"row"},"text"==n[o]?r.createElement(Q,null):r.createElement(r.Fragment,null),"checkbox"==n[o]?r.createElement(r.Fragment,null,r.createElement(K,null),r.createElement(K,null),r.createElement(K,null),r.createElement(K,null)):r.createElement(r.Fragment,null),"radio"==n[o]?r.createElement(r.Fragment,null,r.createElement(M,null),r.createElement(M,null),r.createElement(M,null),r.createElement(M,null)):r.createElement(r.Fragment,null)),r.createElement("div",{className:"forms__button justify-content-end"},r.createElement(D.Z,{color:"danger",className:"text-nowrap px-1 m-3",onClick:e.deleteForm,outline:!0},r.createElement(z.Z,{size:14,className:"mr-50"}),r.createElement("span",null,"Удалить"))))})),r.createElement("div",{className:"forms__button pt-4 p-2"},r.createElement(D.Z,{className:"btn-icon mt-5 mb-4",color:"success",onClick:this.handleSubmit},r.createElement(U.Z,{size:14}),r.createElement("span",{className:"align-middle ml-25"},"Сохранить Тест")),r.createElement(D.Z,{className:"btn-icon mt-5 mb-4",color:"warning",onClick:this.increaseCount},r.createElement(J.Z,{size:14}),r.createElement("span",{className:"align-middle ml-25"},"Добавить")),r.createElement(D.Z,{className:"btn-icon mt-5 mb-4",color:"danger",onClick:this.deleteTest},r.createElement($.Z,{size:14}),r.createElement("span",{className:"align-middle ml-25"}," Удалить Тест"))))))}}]),o}();var oe=(0,o.$j)((function(e){return{tests:e.test.tests,auth:e.auth}}),(function(e){return{deleteTest:function(t){return e((0,H.cB)(t))}}}))(f);function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=r.lazy((function(){return n.e(536).then(n.bind(n,8536))})),se=r.lazy((function(){return Promise.all([n.e(188),n.e(773)]).then(n.bind(n,6773))})),fe=r.lazy((function(){return n.e(487).then(n.bind(n,1487))})),pe=r.lazy((function(){return n.e(319).then(n.bind(n,3319))}));f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=ue(e),r=t?(r=ue(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==ae(r)&&"function"!=typeof r?le(n):r});function o(){var e;!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t,r,a,c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return t=le(e=n.call.apply(n,[this].concat(l))),r="state",a={windowWidth:window.innerWidth},r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"componentDidMount",value:function(){this.props.sidebarState,this.props.loadUser(this.props.auth.user.email)}},{key:"render",value:function(){var e=this.props,t=e.sidebarState;return e.isAuthenticated?r.createElement(r.Fragment,null,r.createElement(r.Suspense,{fallback:r.createElement(x.Z,null)},r.createElement(g,null),r.createElement("div",{className:"dashboard"},r.createElement(P,null),r.createElement("div",{className:t?"content":"content compact"},r.createElement(a.rs,null,r.createElement(a.AW,{exact:!0,path:"/dashboard",component:Z}),r.createElement(a.AW,{exact:!0,path:"/dashboard/test",component:fe}),r.createElement(a.AW,{path:"/dashboard/test/:id",component:oe}),r.createElement(a.AW,{exact:!0,path:"/dashboard/users",component:ie}),r.createElement(q,{exact:!0,path:"/dashboard/groups",component:se}),r.createElement(a.AW,{exact:!0,path:"/dashboard/access",component:pe})))),r.createElement(E,null))):"you not autorization"}}]),o}();const me=(0,o.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,auth:e.auth,sidebarState:e.helper.sidebarState,currentUser:e.users.currentUser}}),(function(e){return{loadUser:function(t){return e((n=t,function(e,t){F().post("/api/users/user",{email:n}).then((function(t){t.data&&e({type:I.JA,payload:t.data})})).catch((function(t){e({type:GET_ERRORS,payload:t}),e(toastErrors(t))}))}));var n}}}))(f)},1436:(e,t,n)=>{"use strict";n.d(t,{jW:()=>a});var r=n(45),o=n(9249),a=function(e){return o.Am.dismiss(),o.Am.error("Ошибка загрузки данных! \n Код ошибки: "+e,{position:o.Am.POSITION.TOP_RIGHT,autoClose:1e4}),{type:r.EB,payload:{message:"error"}}}},5858:(e,t,n)=>{"use strict";n.d(t,{LR:()=>c,mS:()=>l});var r=n(45),o=(t=n(9669),n.n(t)),a=n(1436),c=function(e){return console.log(e),{type:r.gZ,payload:{sidebarState:e}}},l=function(){return function(e,t){o().get("/api/group/teacher").then((function(t){t.data&&e({type:r.wF,payload:t.data})})).catch((function(t){e({type:r.Cg,payload:t}),e((0,a.jW)(t))}))}}},2234:(e,t,n)=>{"use strict";n.d(t,{mr:()=>c,_b:()=>l,cB:()=>u});var r=n(45),o=(t=n(9669),n.n(t)),a=n(1436),c=function(){return function(e,t){o().get("/api/test/").then((function(t){t.data&&e({type:r.fv,payload:t.data})})).catch((function(t){e({type:r.Cg,payload:t}),e((0,a.jW)(t))}))}},l=function(e,t){return function(n,c){o().post("/api/test/",{name:e,author:t}).then((function(e){e.data&&n({type:r.i8,payload:e.data})})).catch((function(e){n({type:r.Cg,payload:e}),n((0,a.jW)(e))}))}},u=function(e){return function(t,n){o().delete("/api/test/".concat(e)).then((function(e){e.data.success&&t({type:r._6,payload:e.data})})).catch((function(e){t({type:r.Cg,payload:e}),t((0,a.jW)(e))}))}}}}]);