(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+jcI":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".clients-details[data-v-7710eae1]{margin:4px 16px 8px}.button-add[data-v-7710eae1]{margin:10px 0;width:240px}",""])},"4dQF":function(e,t,n){var a=n("+jcI");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},BYcZ:function(e,t,n){"use strict";var a=n("4dQF");n.n(a).a},KnzN:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),s=n.n(a),i=n("L2JU"),r=n("BWV3"),l=n("hlRy"),o={props:{state:{type:Boolean,default:!1}}},c=n("KHd+"),u=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",color:"blue darken-1",width:"7"}})],1)}),[],!1,null,null,null).exports,d=n("ootA"),p=(n("wd/R"),n("6cC8")),v=n("wq7B"),h=n("75D1");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var b={components:{VTextField:l.a,SimpleLoader:u},data:function(){return{valid:!0,additionalData:[],duplicates:[],client:{phones:[],name:"",birth_date:null,client_type:null,comment:"",photo:"",gender:null,lang:null},showLoader:!1,loading:!1,phone:"",phoneInputs:[],phoneInputObject:{label:"Номер телефона",component:l.a},nameRules:[function(e){return!!e||"Требуется ввести контрагента"}],phoneRules:[function(e){return!!e||"Требуется ввести телефон"}],clientTypeRules:[function(e){return!!e||"Требуется выбрать тип клиента"}]}},props:{state:{type:Boolean,default:!0}},watch:{state:function(){this.client.gender=this.genders[0].id,this.client.lang=this.languages[0].id}},computed:{subjects:function(){return this.$store.getters.getSubjects},activeFields:function(){var e=this.$store.getters.active_fields;return this.additionalData=Array(e.length).fill(""),e},languages:function(){return this.$store.getters.LANGUAGES},genders:function(){return this.$store.getters.GENDERS},isPhysical:function(){return 1===this.client.client_type||null}},methods:{checkDuplicates:function(){this.loading=!0;var e=this.$store.getters[v.a.CLIENT_DUPLICATE](this.client);e.length?(this.duplicates=e,this.loading=!1,Object(r.a)("Обнаружены похожие клиенты","Внимание!",h.b.WARNING)):this.createUser()},openProfile:function(e){var t=window.location.protocol,n=window.location.host,a="clients/".concat(e.id),s="".concat(t,"//").concat(n,"/").concat(a);window.open(s,"_blank")},choosePhoto:function(){this.$refs.photoInput.click()},uploadPhoto:function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(Object(d.a)(e.target.files[0]));case 2:t=n.sent,this.client.photo=t.data;case 4:case"end":return n.stop()}}),null,this)},addPhoneInput:function(){this.phoneInputs.push(this.phoneInputObject)},createUser:function(){var e,t,n=this;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.loading=!0,this.client.additional_fields={},e=m({},this.additionalData),Object.keys(e).forEach((function(t,a){e[n.activeFields[a].alias]=e[a],delete e[t]})),this.client.additional_fields=JSON.stringify(m({},e)),this.client.phones=this.client.phones.filter((function(e){return!!e})).map((function(e){return e.replaceAll("-","")})),a.next=8,s.a.awrap(this.$store.dispatch(p.a.CREATE_CLIENT,this.client));case 8:t=a.sent,this.clearClient(),this.loading=!1,this.$emit("onSave",t);case 12:case"end":return a.stop()}}),null,this)},clearClient:function(){this.duplicates=[],this.valid=!0,this.client={phones:[],name:"",birth_date:null,client_type:null,comment:"",photo:""}},closeModal:function(){this.clearClient(),this.$emit("onClose")}}},x=Object(c.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"900",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v("Добавление нового клиента")]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:e.closeModal}},[n("v-icon",{attrs:{color:"white"}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[!e.loading&&e.duplicates.length?n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[e._v("#")]),e._v(" "),n("th",[e._v("Имя")]),e._v(" "),n("th",[e._v("Посмотреть")])])]),e._v(" "),n("tbody",e._l(e.duplicates,(function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(++a))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.openProfile(t)}}},[n("v-icon",[e._v("mdi-eye")])],1)],1)])})),0)]},proxy:!0}],null,!1,341009787)}):e._e(),e._v(" "),e.loading||e.duplicates.length?e._e():n("v-form",{staticClass:"p-2",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Контрагент",rules:e.nameRules},model:{value:e.client.name,callback:function(t){e.$set(e.client,"name","string"==typeof t?t.trim():t)},expression:"client.name"}}),e._v(" "),e._l(e.activeFields,(function(t,a){return n("v-text-field",{key:t.id,attrs:{label:t.alias},model:{value:e.additionalData[a],callback:function(t){e.$set(e.additionalData,a,t)},expression:"additionalData[index]"}})})),e._v(" "),e.isPhysical?n("v-text-field",{attrs:{label:"Дата рождения",type:"date"},model:{value:e.client.birth_date,callback:function(t){e.$set(e.client,"birth_date",t)},expression:"client.birth_date"}}):e._e(),e._v(" "),e.isPhysical?n("v-select",{attrs:{"item-value":"id","item-text":"lang",label:"Язык",items:e.languages},model:{value:e.client.lang,callback:function(t){e.$set(e.client,"lang",t)},expression:"client.lang"}}):e._e(),e._v(" "),e.isPhysical?n("v-select",{attrs:{"item-value":"id","item-text":"gender",label:"Пол",items:e.genders},model:{value:e.client.gender,callback:function(t){e.$set(e.client,"gender",t)},expression:"client.gender"}}):e._e(),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#-###-###-##-##",expression:"'#-###-###-##-##'"}],attrs:{label:"Номер телефона","append-outer-icon":"mdi-plus",clearable:"",rules:e.phoneRules},on:{"click:append-outer":e.addPhoneInput},model:{value:e.client.phones[0],callback:function(t){e.$set(e.client.phones,0,t)},expression:"client.phones[0]"}}),e._v(" "),e._l(e.phoneInputs,(function(t,a){return n(t.component,{directives:[{name:"mask",rawName:"v-mask",value:"#-###-###-##-##",expression:"'#-###-###-##-##'"}],key:a,tag:"component",attrs:{clearable:"",label:t.label},model:{value:e.client.phones[a+1],callback:function(t){e.$set(e.client.phones,a+1,t)},expression:"client.phones[index + 1]"}})})),e._v(" "),n("input",{ref:"photoInput",staticClass:"d-none",attrs:{type:"file",name:"photo"},on:{change:e.uploadPhoto}}),e._v(" "),e.client.photo?e._e():n("v-btn",{attrs:{color:"primary","max-width":"400"},on:{click:e.choosePhoto}},[e._v("\n                    Загрузите фото\n                    "),n("v-icon",{staticClass:"ml-2"},[e._v("mdi-upload")])],1),e._v(" "),e.client.photo?n("v-img",{attrs:{src:"../storage/"+e.client.photo,alt:"","max-width":"500","max-height":"300",contain:""}}):e._e(),e._v(" "),n("v-select",{staticClass:"mt-3",attrs:{rules:e.clientTypeRules,label:"Тип клиента",items:e.subjects,"item-text":"type","item-value":"id"},model:{value:e.client.client_type,callback:function(t){e.$set(e.client,"client_type",t)},expression:"client.client_type"}}),e._v(" "),n("v-textarea",{attrs:{label:"Комментарий","auto-grow":"",rows:"6"},model:{value:e.client.comment,callback:function(t){e.$set(e.client,"comment","string"==typeof t?t.trim():t)},expression:"client.comment"}})],2)],1),e._v(" "),e.loading?e._e():n("v-card-actions",{staticClass:"p-2"},[n("v-btn",{attrs:{text:""},on:{click:e.closeModal}},[e._v("Отмена")]),e._v(" "),n("v-spacer"),e._v(" "),e.duplicates.length?e._e():n("v-btn",{attrs:{text:"",color:"success",disabled:!e.valid},on:{click:e.checkDuplicates}},[n("b",[e._v("Создать")]),e._v(" "),n("v-icon",[e._v("mdi-check")])],1),e._v(" "),e.duplicates.length?n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.createUser}},[n("b",[e._v("Все равно создать")]),e._v(" "),n("v-icon",[e._v("mdi-check")])],1):e._e()],1),e._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:e.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,null,null).exports,g=n("uzyW");function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={props:{state:{type:Boolean,default:!1}},computed:{currentProgress:function(){return this.currentIndex/this.creatingTotal*100}},data:function(){return{duplicates:[],title:"",currentIndex:null,loading:!1,parsedClients:[],creatingStarted:!1,selectedClients:null,creatingTotal:null,fileUrl:"",headers:[{text:"#",value:"key",align:"left"},{text:"Контрагент",value:"name",align:"center"},{text:"Телефон",value:"phone",align:"center"}],selectedDuplicates:[],duplicateHeaders:[{text:"#",value:"key",align:"left"},{text:"Импортируемый клиент",value:"importName",align:"center"},{text:"Дубликаты в базе",value:"duplicates",align:"center"}]}},methods:{closeModal:function(){this.loading||(this.clearData(),this.$emit("onClose"))},showProfile:function(e){var t=window.location.protocol,n=window.location.host,a="clients/".concat(e.id),s="".concat(t,"//").concat(n,"/").concat(a);window.open(s,"_blank")},clearData:function(){this.parsedClients=[],this.selectedClients=null,this.fileUrl="",this.duplicates=[],this.selectedDuplicates=[]},storeClients:function(){var e=this;this.loading=!0;var t=this.duplicates.filter((function(t){return!e.selectedDuplicates.includes(t)})).map((function(e){return e.importName}));this.selectedClients=this.selectedClients.filter((function(e){return!t.includes(e.name)})),this.onSave()},checkDuplicates:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,s.a.awrap(this.$store.getters[v.a.CLIENT_DUPLICATES](this.selectedClients));case 3:if((e=t.sent).length){t.next=7;break}return this.onSave(),t.abrupt("return");case 7:this.loading=!1,this.duplicates=e.map((function(e,t){return e.key=t+1,e})),this.selectedDuplicates=y(this.duplicates);case 10:case"end":return t.stop()}}),null,this)},onSave:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.selectedClients.map((function(e){return delete e.key,e.phones=[],e.phone&&e.phones.push(e.phone),e})),this.loading=!0,t.next=4,s.a.awrap(Object(g.a)(e));case 4:return t.next=6,s.a.awrap(this.$store.dispatch(p.a.GET_CLIENTS));case 6:this.loading=!1,this.$emit("onSave"),this.clearData();case 9:case"end":return t.stop()}}),null,this)},uploadFile:function(e){var t,n,a;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.target.files[0],"application/vnd.ms-excel"===t.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===t.type){i.next=5;break}return Object(r.a)("Ошибка!","Выбран неверный тип файла","error"),i.abrupt("return");case 5:return this.loading=!0,i.next=8,s.a.awrap(Object(d.a)(t));case 8:return n=i.sent,this.fileUrl=n.data,i.next=12,s.a.awrap(Object(g.j)(this.fileUrl));case 12:return a=i.sent,i.next=15,s.a.awrap(Object(d.b)(this.fileUrl));case 15:if(this.loading=!1,0!==a.length){i.next=19;break}return Object(r.a)("Ошибка!","В данном файле не обнаружены клиенты!","error"),i.abrupt("return");case 19:this.parsedClients=a.map((function(e,t){return e.key=++t,e})),this.selectedClients=y(this.parsedClients);case 21:case"end":return i.stop()}}),null,this)},chooseFile:function(){this.$refs.fileInput.click()}}},w=Object(c.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"1100",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"d-flex justify-content-between blue darken-1"},[n("span",{staticClass:"white--text"},[e._v("Импорт клиентов")]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:e.closeModal}},[n("v-icon",{attrs:{color:"white"}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[e.duplicates.length&&!e.loading?n("div",[n("h3",[e._v("\n                    Обнаружено дубликатов: "+e._s(e.duplicates.length)+"\n                ")]),e._v(" "),n("v-data-table",{attrs:{"show-select":"","item-key":"key","no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.duplicateHeaders,items:e.duplicates},scopedSlots:e._u([{key:"item.duplicates",fn:function(t){var a=t.item;return e._l(a.duplicates,(function(t){return n("div",{key:t.key},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.showProfile(t)}}},[n("v-icon",[e._v("mdi-eye")])],1)],1)}))}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n                        "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n                    ")]}}],null,!1,4034924011),model:{value:e.selectedDuplicates,callback:function(t){e.selectedDuplicates=t},expression:"selectedDuplicates"}})],1):e._e(),e._v(" "),!e.parsedClients.length||e.loading||e.duplicates.length?e._e():n("div",{staticClass:"p-3"},[n("h3",[e._v("\n                    Выбрано клиентов: "+e._s(e.selectedClients.length)+"\n                ")]),e._v(" "),e.parsedClients.length?n("v-data-table",{attrs:{"show-select":"","item-key":"key","no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.parsedClients},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[n("v-text-field",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"item.name"}})]}},{key:"item.phone",fn:function(t){var a=t.item;return[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###########",expression:"'###########'"}],model:{value:a.phone,callback:function(t){e.$set(a,"phone",t)},expression:"item.phone"}})]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n                        "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n                    ")]}}],null,!1,317586889),model:{value:e.selectedClients,callback:function(t){e.selectedClients=t},expression:"selectedClients"}}):e._e()],1),e._v(" "),e.loading||e.parsedClients.length?e._e():n("v-form",{staticClass:"p-3"},[n("input",{ref:"fileInput",staticClass:"d-none",attrs:{type:"file"},on:{change:e.uploadFile}}),e._v(" "),n("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.chooseFile}},[e._v("Загрузить файл\n                    "),n("v-icon",[e._v("mdi-upload")])],1)],1),e._v(" "),n("v-divider")],1),e._v(" "),e.loading?e._e():n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:e.closeModal}},[e._v("Отмена")]),e._v(" "),n("v-spacer"),e._v(" "),e.parsedClients.length&&!e.duplicates.length?n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.checkDuplicates}},[e._v("\n                Загрузить клиентов\n                "),n("v-icon",[e._v("mdi-check")])],1):e._e(),e._v(" "),e.duplicates.length?n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.storeClients}},[e._v("\n                Загрузить клиентов\n                "),n("v-icon",[e._v("mdi-check")])],1):e._e()],1),e._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:e.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,null,null).exports,C=n("1jYr"),j={data:function(){return{loading:!1,fileUrl:null,clients:null,selectedClients:null,headers:[{text:"Контрагент",value:"client",sortable:!1},{text:"Лицевой счет",value:"account",sortable:!1},{text:"К зачислению",value:"balance",sortable:!1}]}},computed:{},props:{state:{type:Boolean,default:!0}},methods:{clearData:function(){this.clients=null,this.selectedClients=null,this.fileUrl=null},onClose:function(){this.clearData(),this.$emit("onClose")},addBalance:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,s.a.awrap(Object(C.b)(this.selectedClients));case 3:this.$emit("onSave"),this.clearData(),this.loading=!1;case 6:case"end":return e.stop()}}),null,this)},uploadFile:function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.target.files[0],"application/vnd.ms-excel"===t.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===t.type){a.next=5;break}return Object(r.a)("Ошибка!","Выбран неверный тип файла","error"),a.abrupt("return");case 5:return this.loading=!0,a.next=8,s.a.awrap(Object(d.a)(t));case 8:return n=a.sent,this.fileUrl=n.data,a.next=12,s.a.awrap(Object(g.i)(this.fileUrl));case 12:return this.clients=a.sent,this.selectedClients=this.clients.filter((function(e){return null!==e.client})),this.loading=!1,a.next=17,s.a.awrap(Object(d.b)(this.fileUrl));case 17:return a.abrupt("return");case 18:case"end":return a.stop()}}),null,this)},chooseFile:function(){this.$refs.fileInputBalance.click()},findClient:function(e){var t,n=this;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(Object(C.i)(e.account));case 2:if(t=a.sent){a.next=6;break}return Object(r.a)("Клиент с данным лицевым счетом не был найден!","","error"),a.abrupt("return");case 6:this.clients=this.clients.map((function(a){return e.key===a.key&&(a.client=t.client),n.selectedClients.push(a),a}));case 7:case"end":return a.stop()}}),null,this)}}},O=Object(c.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"900"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v("Пополнение баланса")]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:e.onClose}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),e.loading?e._e():n("v-card-text",{staticClass:"pt-5"},[e.clients?n("v-data-table",{attrs:{"show-select":"","item-key":"key","no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.clients},scopedSlots:e._u([{key:"item.client",fn:function(t){var a=t.item;return[n("td",{style:{backgroundColor:a.client?"#f5f5f5":"tomato",color:a.client?"black":"white",width:"100%"}},[a.client?n("span",[e._v(e._s(a.client.name))]):n("span",[e._v("Контрагент не найден")])])]}},{key:"item.account",fn:function(t){var a=t.item;return[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"## ## ##",expression:"'## ## ##'"}],on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.findClient(a)}},model:{value:a.account,callback:function(t){e.$set(a,"account",t)},expression:"item.account"}})]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n                    "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n                ")]}}],null,!1,395356533),model:{value:e.selectedClients,callback:function(t){e.selectedClients=t},expression:"selectedClients"}}):e._e(),e._v(" "),e.clients?e._e():n("v-form",[n("input",{ref:"fileInputBalance",staticClass:"d-none",attrs:{type:"file"},on:{change:e.uploadFile}}),e._v(" "),n("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.chooseFile}},[e._v("Загрузить файл\n                    "),n("v-icon",[e._v("mdi-upload")])],1)],1),e._v(" "),n("v-divider")],1),e._v(" "),!e.loading&&e.clients?n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.onClose}},[e._v("Отмена")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.addBalance}},[e._v("\n                Пополнить баланс\n                "),n("v-icon",[e._v("mdi-check")])],1)],1):e._e(),e._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:e.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,null,null).exports,S={data:function(){return{exportVariant:1,variants:[{text:"Экспорт всех клиентов",value:1},{text:"МТК все",value:2},{text:"МТК без долгов",value:3},{text:"МТК с тарифом 2000, активные, без долгов",value:4}]}},methods:{},computed:{},props:{state:{type:Boolean,default:!1}}},P=Object(c.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v("Экспорт клиентов")]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[n("v-select",{attrs:{label:"Выберите вариант экспорта",items:e.variants,"item-value":"value","item-text":"text"},model:{value:e.exportVariant,callback:function(t){e.exportVariant=t},expression:"exportVariant"}})],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("Отмена")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:function(t){return e.$emit("submit",e.exportVariant)}}},[e._v("Экспорт "),n("v-icon",[e._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"45a5ff75",null).exports,$=n("vDqi"),I=n.n($);function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={components:{ExportClientsModal:P,AddClientModal:x,ImportClientsModal:w,ParseBalanceModal:O},props:{title:{type:String,default:"Данные"}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(i.c)([v.a.CLIENTS_COUNT,"user","CURRENT_PAGE"]),{clients:function(){var e=this;return-1===this.client_type?this.$store.getters[v.a.CLIENTS]:this.$store.getters[v.a.CLIENTS].filter((function(t){return t.client_type===e.client_type}))},subjects:function(){return[{type:"Все",id:-1}].concat(E(this.$store.getters.getSubjects))}}),data:function(){return{showAddClientModal:!1,showImportModal:!1,showLoader:!1,search:"",showParseBalanceModal:!1,exportClientModal:!1,pageNumber:1,overlay:!1,client_type:-1,headers:[{text:"Контрагент",align:"left",sortable:!1,value:"name"},{text:"лиц счета",value:"_personalAccounts",visible:!1,align:" d-none"},{text:"адреса",value:"_addresses",visible:!1,align:" d-none"},{text:"торговые наименования",value:"_trademarks",visible:!1,align:" d-none"},{text:"Лицевой счет",value:"personalAccount",sortable:!1},{text:"Адрес",value:"address",sortable:!1},{text:"Торговое наименование",value:"trademark",sortable:!1}]}},methods:{rowClick:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(this.$router.push({name:"clients.show",params:{userId:e.id}}));case 2:case"end":return t.stop()}}),null,this)},updatePage:function(e){this.$store.commit("setCurrentPage",e)},closeModal:function(){this.showAddClientModal=!1},saveUser:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showAddClientModal=!1,Object(r.a)("Клиент успешно добавлен!"),t.next=4,s.a.awrap(this.$router.push({name:"clients.show",params:{userId:e.id}}));case 4:case"end":return t.stop()}}),null,this)},onClientImported:function(){this.showImportModal=!1,Object(r.a)("Клиенты успешно импортированы!")},parseBalance:function(){this.showParseBalanceModal=!0},onBalanceImported:function(){this.showParseBalanceModal=!1,Object(r.a)("Данные по балансу успешно обновлены!")},onExportSubmit:function(e){var t,n,a;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return this.exportClientModal=!1,this.overlay=!0,i.next=4,s.a.awrap(I.a.get("/api/export/clients?variant=".concat(e)));case 4:t=i.sent,n=t.data,(a=document.createElement("a")).href=n,a.click(),this.overlay=!1;case 10:case"end":return i.stop()}}),null,this)}},watch:{pageNumber:function(e){console.log(e)}}},B=(n("BYcZ"),{mounted:function(){this.$store.dispatch(p.a.GET_CLIENTS)},components:{ClientsTable:Object(c.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),n("v-overlay",{model:{value:e.overlay,callback:function(t){e.overlay=t},expression:"overlay"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1),e._v(" "),n("v-card-text",[n("div",{staticClass:"clients-details"},[n("h4",[e._v("\n                Всего клиентов: "+e._s(e.clientsCount)+"\n            ")]),e._v(" "),1===e.user.role_id||3===e.user.role_id?n("v-btn",{staticClass:"button-add",attrs:{color:"primary"},on:{click:function(t){e.showAddClientModal=!0}}},[e._v("\n                Добавить клиента\n                "),n("v-icon",[e._v("mdi-account-plus")])],1):e._e(),e._v(" "),3===e.user.role_id?n("v-btn",{staticClass:"button-add",attrs:{color:"success"},on:{click:function(t){e.exportClientModal=!0}}},[e._v("\n                Экспорт клиентов\n                "),n("v-icon",[e._v("mdi-file-excel-box")])],1):e._e(),e._v(" "),3===e.user.role_id?n("v-btn",{staticClass:"button-add",attrs:{color:"success"},on:{click:function(t){e.showImportModal=!0}}},[e._v("\n                Импорт клиентов\n                "),n("v-icon",[e._v("mdi-file-excel-box")])],1):e._e(),e._v(" "),1===e.user.role_id||3===e.user.role_id?n("v-btn",{staticClass:"button-add",attrs:{color:"success"},on:{click:e.parseBalance}},[e._v("\n                Пополнить баланс\n                "),n("v-icon",[e._v("mdi-cash")])],1):e._e(),e._v(" "),n("v-spacer"),e._v(" "),e.clients?e._e():n("div",{staticClass:"text-center d-flex align-items-center justify-content-center",staticStyle:{"min-height":"651px"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1),e._v(" "),e.clients?n("v-text-field",{attrs:{outlined:"",solo:"",clearable:"","append-icon":"mdi-account-search",label:"Поиск клиента","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e(),e._v(" "),n("v-select",{attrs:{label:"Тип клиента",items:e.subjects,"item-text":"type","item-value":"id"},model:{value:e.client_type,callback:function(t){e.client_type=t},expression:"client_type"}})],1),e._v(" "),e.clients?n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных",page:e.CURRENT_PAGE,"footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.clients,search:e.search},on:{"click:row":e.rowClick,"update:page":e.updatePage},scopedSlots:e._u([{key:"item.personalAccount",fn:function(t){var a=t.item;return[a.personal_accounts.length?e._e():n("span",[e._v("\n                Данные отсутствуют\n            ")]),e._v(" "),n("ul",e._l(a.personal_accounts,(function(t,a){return n("li",{key:a},[e._v(e._s(t))])})),0)]}},{key:"item.address",fn:function(t){var a=t.item;return[a.addresses.length?e._e():n("span",[e._v("\n                Данные отсутствуют\n            ")]),e._v(" "),n("ul",e._l(a.addresses,(function(t,a){return n("li",{key:a},[e._v(e._s(t))])})),0)]}},{key:"item.trademark",fn:function(t){var a=t.item;return[a.trademarks.length?e._e():n("span",[e._v("\n                Данные отсутствуют\n            ")]),e._v(" "),n("ul",e._l(a.trademarks,(function(t,a){return n("li",{key:a},[e._v(e._s(t))])})),0)]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n                "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n            ")]}}],null,!1,1912753731)}):e._e()],1),e._v(" "),n("AddClientModal",{attrs:{state:e.showAddClientModal},on:{onSave:e.saveUser,onClose:e.closeModal}}),e._v(" "),n("ImportClientsModal",{attrs:{state:e.showImportModal},on:{onClose:function(t){e.showImportModal=!1},onSave:e.onClientImported}}),e._v(" "),n("ParseBalanceModal",{attrs:{state:e.showParseBalanceModal},on:{onClose:function(t){e.showParseBalanceModal=!1},onSave:e.onBalanceImported}}),e._v(" "),n("ExportClientsModal",{attrs:{state:e.exportClientModal},on:{cancel:function(t){e.exportClientModal=!1},submit:e.onExportSubmit}})],1)}),[],!1,null,"7710eae1",null).exports},data:function(){return{}}}),N=Object(c.a)(B,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("clients-table",{attrs:{title:"Клиенты"}})],1)}),[],!1,null,null,null);t.default=N.exports},ootA:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n("o0o1"),s=n.n(a),i=n("vDqi"),r=n.n(i);function l(e){var t,n,a,i=arguments;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"file",(n=new FormData).append(t,e),a={headers:{"content-type":"multipart/form-data"}},l.next=6,s.a.awrap(r.a.post("/api/upload",n,a));case 6:return l.abrupt("return",l.sent);case 7:case"end":return l.stop()}}))}function o(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("file",e),n.next=4,s.a.awrap(r.a.post("/api/delete",t));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}))}}}]);