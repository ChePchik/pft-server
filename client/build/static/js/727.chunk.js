(self.webpackChunkPFT_client=self.webpackChunkPFT_client||[]).push([[727],{1657:(e,t,n)=>{"use strict";n.d(t,{L:()=>c,m:()=>a});var r=n(5962),o=(t=n(9669),n.n(t)),c=function(e){return console.log(e),{type:r.gZ,payload:{sidebarState:e}}},a=function(){return function(e,t){o().get("/api/group/teacher").then((function(t){t.data&&e({type:r.wF,payload:t.data})})).catch((function(e){console.log("catch",e)}))}}},5727:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var r=n(7294),o=n(7703),c=n(5977),a=(n.p,n(3727)),u=n(7585);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=f(e),r=t?(r=f(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==l(r)&&"function"!=typeof r?function(){if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():r});function o(){return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),n.apply(this,arguments)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){return r.createElement(a.OL,{to:"/",onClick:this.props.logoutUser,className:"d-inline"},"Выйти")}}]),o}(),p=(0,o.$j)(null,(function(e){return{logoutUser:function(){return e((0,u.TX)())}}}))(s),y=(n(9081),n(1657));function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=d(e),r=t?(r=d(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==b(r)&&"function"!=typeof r?h(n):r});function o(){var e;!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t=arguments.length,r=Array(t),c=0;c<t;c++)r[c]=arguments[c];return E(h(e=n.call.apply(n,[this].concat(r))),"state",{isOpen:!1}),E(h(e),"settingsShow",(function(){e.setState({isOpen:!e.state.isOpen})})),E(h(e),"sidebarToggle",(function(){e.props.sidebarToggle(!e.props.sidebarState)})),e}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){var e=this.props.auth.user;return r.createElement("header",{className:"header"},r.createElement("div",{className:"header_container header_container d-flex flex-column flex-md-row "},r.createElement("div",{className:"header_logo "},r.createElement("h1",{className:"white header_title h3"},r.createElement("strong",null,"PFT")),r.createElement("p",{id:"sidebarToggle",className:this.props.sidebarState?"normal":"compact",onClick:this.sidebarToggle},r.createElement("span",null),r.createElement("span",null),r.createElement("span",null))),r.createElement("div",{className:"header_user m-3"},e?r.createElement("p",{className:"d-inline"},e.name):"",r.createElement(p,null))))}}]),o}();var O=(0,o.$j)((function(e){return{auth:e.auth,sidebarState:e.helper.sidebarState}}),(function(e){return{sidebarToggle:function(t){return e((0,y.L)(t))}}}))(t);function v(){return r.createElement("footer",{className:"footer"},r.createElement("p",null,r.createElement("strong",null,"PFT")," © 20... always"))}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e){var t=e.title,n=e.icon;return e=function(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),c=0;c<o.length;c++)n=o[c],~t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),c=0;c<o.length;c++)n=o[c],~t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["title","icon"]),r.createElement("li",{className:"sidebar_item"},r.createElement(a.OL,g({},e,{className:"sidebar_link",activeClassName:"sidebar_link__active"}),r.createElement("i",{className:"fa "+n}),t))}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}s=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=S(e),r=t?(r=S(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==w(r)&&"function"!=typeof r?function(){if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():r});function o(){return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),n.apply(this,arguments)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"render",value:function(){var e=this.props.sidebarState;return r.createElement("aside",{className:e?"sidebar":"sidebar compact"},r.createElement(j,{exact:!0,icon:"fa-home",title:e?" Главная":"",to:"/dashboard"}),r.createElement(j,{icon:"fa-list",title:e?" Тесты":"",to:"/dashboard/test"}),r.createElement(j,{icon:"fa-users",title:e?" Пользователи":"",to:"/dashboard/users"}),r.createElement(j,{icon:"fa-users",title:e?" Группы":"",to:"/dashboard/groups"}),r.createElement(j,{icon:"fa-users",title:e?" Access":"",to:"/dashboard/access"}))}}]),o}();var P=(0,o.$j)((function(e){return{sidebarState:e.helper.sidebarState}}),null)(s),R=n(955),x=n(3735);function k(){return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(x.ScrollTop,null),r.createElement("p",null,"Принимая во внимание показатели успешности, высокое качество позиционных исследований не оставляет шанса для поэтапного и последовательного развития общества. С учётом сложившейся международной обстановки, высокое качество позиционных исследований однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации укрепления моральных ценностей. Учитывая ключевые сценарии поведения, внедрение современных методик выявляет срочную потребность распределения внутренних резервов и ресурсов. С учётом сложившейся международной обстановки, укрепление и развитие внутренней структуры в значительной степени обусловливает важность как самодостаточных, так и внешне зависимых концептуальных решений."),r.createElement("p",null,"Мы вынуждены отталкиваться от того, что повышение уровня гражданского сознания играет определяющее значение для форм воздействия. Внезапно, сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. А также некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно. В частности, реализация намеченных плановых заданий в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности."),r.createElement("p",null,"Кстати, реплицированные с зарубежных источников, современные исследования набирают популярность среди определенных слоев населения, а значит, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. В частности, сплочённость команды профессионалов, в своём классическом представлении, допускает внедрение прогресса профессионального сообщества. Элементы политического процесса, инициированные исключительно синтетически, указаны как претенденты на роль ключевых факторов."),r.createElement("p",null,"Таким образом, реализация намеченных плановых заданий играет важную роль в формировании направлений прогрессивного развития. Кстати, представители современных социальных резервов неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали."),r.createElement("p",null,"Задача организации, в особенности же граница обучения кадров однозначно определяет каждого участника как способного принимать собственные решения касаемо новых принципов формирования материально-технической и кадровой базы. Как принято считать, ключевые особенности структуры проекта, инициированные исключительно синтетически, функционально разнесены на независимые элементы. Внезапно, элементы политического процесса призваны к ответу. Сложно сказать, почему действия представителей оппозиции, инициированные исключительно синтетически, обнародованы."),r.createElement("p",null,"Но действия представителей оппозиции и по сей день остаются уделом либералов, которые жаждут быть объединены в целые кластеры себе подобных. Как уже неоднократно упомянуто, стремящиеся вытеснить традиционное производство, нанотехнологии преданы социально-демократической анафеме. Таким образом, повышение уровня гражданского сознания играет важную роль в формировании вывода текущих активов! Как принято считать, действия представителей оппозиции формируют глобальную экономическую сеть и при этом - призваны к ответу. Мы вынуждены отталкиваться от того, что высококачественный прототип будущего проекта предоставляет широкие возможности для вывода текущих активов. Следует отметить, что перспективное планирование представляет собой интересный эксперимент проверки переосмысления внешнеэкономических политик."),r.createElement("p",null,"В целом, конечно, социально-экономическое развитие способствует повышению качества благоприятных перспектив! В частности, консультация с широким активом требует определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Повышение уровня гражданского сознания в значительной степени обусловливает важность укрепления моральных ценностей. Современные технологии достигли такого уровня, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации новых принципов формирования материально-технической и кадровой базы. Экономическая повестка сегодняшнего дня играет определяющее значение для дальнейших направлений развития. Господа, сплочённость команды профессионалов требует определения и уточнения кластеризации усилий."),r.createElement("p",null,"Кстати, ключевые особенности структуры проекта призывают нас к новым свершениям, которые, в свою очередь, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Господа, постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества."),r.createElement("p",null,"В рамках спецификации современных стандартов, непосредственные участники технического прогресса ассоциативно распределены по отраслям. Прежде всего, внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании анализа существующих паттернов поведения. Современные технологии достигли такого уровня, что реализация намеченных плановых заданий предполагает независимые способы реализации существующих финансовых и административных условий. А также независимые государства, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме. Безусловно, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации переосмысления внешнеэкономических политик. Равным образом, внедрение современных методик позволяет выполнить важные задания по разработке дальнейших направлений развития."),r.createElement("p",null,"В частности, выбранный нами инновационный путь требует от нас анализа направлений прогрессивного развития. И нет сомнений, что акционеры крупнейших компаний и по сей день остаются уделом либералов, которые жаждут быть заблокированы в рамках своих собственных рациональных ограничений. В своём стремлении улучшить пользовательский опыт мы упускаем, что независимые государства лишь добавляют фракционных разногласий и представлены в исключительно положительном свете."),r.createElement("p",null,"Внезапно, предприниматели в сети интернет объективно рассмотрены соответствующими инстанциями. Банальные, но неопровержимые выводы, а также ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом - объединены в целые кластеры себе подобных. В своём стремлении повысить качество жизни, они забывают, что существующая теория предоставляет широкие возможности для форм воздействия."),r.createElement("p",null,"В своём стремлении улучшить пользовательский опыт мы упускаем, что стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Принимая во внимание показатели успешности, экономическая повестка сегодняшнего дня способствует повышению качества системы обучения кадров, соответствующей насущным потребностям. Следует отметить, что высокое качество позиционных исследований предоставляет широкие возможности для модели развития. Противоположная точка зрения подразумевает, что представители современных социальных резервов, вне зависимости от их уровня, должны быть подвергнуты целой серии независимых исследований. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры предполагает независимые способы реализации приоритизации разума над эмоциями."),r.createElement("p",null,"Ясность нашей позиции очевидна: перспективное планирование, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для своевременного выполнения сверхзадачи! Значимость этих проблем настолько очевидна, что новая модель организационной деятельности выявляет срочную потребность кластеризации усилий. Равным образом, внедрение современных методик создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых предложений. Но постоянный количественный рост и сфера нашей активности является качественно новой ступенью первоочередных требований!"),r.createElement("p",null,"Значимость этих проблем настолько очевидна, что современная методология разработки создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса позиций, занимаемых участниками в отношении поставленных задач. Господа, консультация с широким активом требует определения и уточнения новых принципов формирования материально-технической и кадровой базы. Прежде всего, убеждённость некоторых оппонентов не оставляет шанса для вывода текущих активов. Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть в равной степени предоставлены сами себе."),r.createElement("p",null,"Безусловно, глубокий уровень погружения играет важную роль в формировании направлений прогрессивного развития. Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь играет определяющее значение для поставленных обществом задач.")))}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t=n(5697),(s=function(e){var t=e.component,n=e.users;return e=function(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),c=0;c<o.length;c++)n=o[c],~t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),c=0;c<o.length;c++)n=o[c],~t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}(e,["component","users"]),r.createElement(c.AW,T({},e,{render:function(e){return"user"!==n.currentUser.role?r.createElement(t,e):r.createElement(c.l_,{to:"/dashboard/access"})}}))}).propTypes={users:n.n(t)().object.isRequired};var N=(0,o.$j)((function(e){return{users:e.users}}))(s),C=n(5962),A=(s=n(9669),n.n(s));function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=r.lazy((function(){return n.e(16).then(n.bind(n,3016))})),W=r.lazy((function(){return Promise.all([n.e(275),n.e(519)]).then(n.bind(n,6519))})),$=r.lazy((function(){return n.e(410).then(n.bind(n,6410))})),L=r.lazy((function(){return n.e(319).then(n.bind(n,3319))}));s=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(o,r.Component);var e,t,n=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var n=U(e),r=t?(r=U(this).constructor,Reflect.construct(n,arguments,r)):n.apply(this,arguments);return n=this,!r||"object"!==B(r)&&"function"!=typeof r?function(){if(void 0!==n)return n;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}():r});function o(){return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),n.apply(this,arguments)}return function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,[{key:"componentDidMount",value:function(){this.props.loadUser(this.props.auth.user.name)}},{key:"render",value:function(){var e=this.props,t=e.sidebarState;return e.isAuthenticated?r.createElement(r.Fragment,null,r.createElement(r.Suspense,{fallback:r.createElement(R.Z,null)},r.createElement(O,null),r.createElement("div",{className:"dashboard"},r.createElement(P,null),r.createElement("div",{className:t?"content":"content compact"},r.createElement(c.rs,null,r.createElement(c.AW,{exact:!0,path:"/dashboard",component:k}),r.createElement(c.AW,{exact:!0,path:"/dashboard/test",component:$}),r.createElement(c.AW,{exact:!0,path:"/dashboard/users",component:z}),r.createElement(N,{exact:!0,path:"/dashboard/groups",component:W}),r.createElement(c.AW,{exact:!0,path:"/dashboard/access",component:L})))),r.createElement(v,null))):"you not autorization"}}]),o}();const I=(0,o.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,auth:e.auth,sidebarState:e.helper.sidebarState,currentUser:e.users.currentUser}}),(function(e){return{loadUser:function(t){return e((n=t,function(e,t){A().post("/api/users/user",{email:n}).then((function(t){t.data&&e({type:C.JA,payload:t.data})})).catch((function(e){console.log("catch",e)}))}));var n}}}))(s)}}]);