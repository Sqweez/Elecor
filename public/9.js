(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{11:function(t,e,n){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},l=(n(57),n(2)),i=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=i.exports},22:function(t,e,n){var a=n(58);"string"==typeof a&&(a=[[t.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(10)(a,l);a.locals&&(t.exports=a.locals)},57:function(t,e,n){"use strict";var a=n(22);n.n(a).a},58:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"\n.modal-text[data-v-2adaa561] {\n    margin-top: 15px!important;;\n    font-size: 16px;\n}\n",""])},90:function(t,e,n){"use strict";n.r(e);String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Добавление шаблона"},editMode:{type:Boolean,default:!1}},computed:{message:function(){var t=this.body;return this.variables.forEach((function(e){t=t.replaceAll(e.key,e.example)})),t}},mounted:function(){this.editMode&&(this.header="Внимание!",this.name="Долговой шаблон",this.body="Уважаемый, %ИМЯ% оплатите долг, пожалуйста!")},data:function(){return{loading:!1,name:"",header:"",body:"",variables:[{key:"%ИМЯ%",name:"Имя клиента",example:"Александр Андреевич"},{key:"%ДОЛГ%",name:"Задолженность",example:"5000"}]}},methods:{onSave:function(){var t=this;this.loading=!0,setTimeout((function(){t.$emit("onSave")}),3e3)},addVariableToTemplate:function(t){this.body+=t.key}}},l=n(2),i=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"blue darken-1 d-flex justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("onClose")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[t.loading?t._e():n("v-form",{staticClass:"p-3"},[n("v-text-field",{attrs:{label:"Наименование шаблона"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Заголовок"},model:{value:t.header,callback:function(e){t.header=e},expression:"header"}}),t._v(" "),n("v-textarea",{attrs:{"auto-grow":"",rows:"5",counter:"",label:"Текст"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),t._v(" "),n("v-flex",{staticClass:"mb-2"},[n("h4",{staticClass:"ml-1"},[t._v("Переменные:")]),t._v(" "),t._l(t.variables,(function(e,a){return n("v-btn",{key:a,staticClass:"m-1",attrs:{small:"",color:"primary"},on:{click:function(n){return t.addVariableToTemplate(e)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),n("v-divider"),t._v(" "),n("v-flex",{staticClass:"mt-2"},[n("h3",[t._v("Предпросмотр шаблона:")]),t._v(" "),n("h4",[t._v(t._s(this.header))]),t._v(" "),n("p",[t._v(t._s(this.message))])])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t.loading?t._e():n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:t.onSave}},[t._v("\n                Сохранить\n                "),n("v-icon",[t._v("mdi-check")])],1)],1),t._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:t.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"74631178",null).exports,o=n(4),s=n(11),r={components:{ConfirmationModal:s.a,AddMailingTemplateModal:i},methods:{onEdit:function(){this.showEditModal=!1,Object(o.a)("","Шаблон успешно изменен!")},onSave:function(){this.showAddModal=!1,Object(o.a)("","Шаблон успешно добавлен!")}},data:function(){return{showEditModal:!1,showAddModal:!1,items:[{title:"День рождения",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null},{title:"День рождения",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null},{title:"День рождения",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null}],headers:[{text:"Наименование шаблона",value:"title",sortable:!1},{text:"Текст шаблона",value:"body",sortable:!1},{text:"Действие",value:"action",sortable:!1}],search:""}}},c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3"},[n("div",{staticClass:"d-flex justify-content-end"},[n("v-btn",{staticClass:"mb-2",attrs:{color:"primary"},on:{click:function(e){t.showAddModal=!0}}},[t._v("Добавить шаблон")])],1),t._v(" "),n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"item.action",fn:function(e){e.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.showEditModal=!0}}},[n("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(e){var n=e.pageStart,a=e.pageStop,l=e.itemsLength;return[t._v("\n            "+t._s(n)+"-"+t._s(a)+" из "+t._s(l)+"\n        ")]}}])}),t._v(" "),n("AddMailingTemplateModal",{attrs:{state:t.showAddModal},on:{onClose:function(e){t.showAddModal=!1},onSave:t.onSave}}),t._v(" "),n("AddMailingTemplateModal",{attrs:{title:"Редактирование шаблона",state:t.showEditModal,"edit-mode":!0},on:{onClose:function(e){t.showEditModal=!1},onSave:t.onEdit}}),t._v(" "),n("ConfirmationModal",{attrs:{state:t.showDeleteModal,message:"Вы действительно хотите удалить выбранный шаблон?"},on:{confirm:function(e){t.showDeleteModal=!1},cancel:function(e){t.showDeleteModal=!1}}})],1)}),[],!1,null,"7c44405f",null).exports;String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};var d={components:{ConfirmationModal:s.a},methods:{addVariableToTemplate:function(t){this.body+=t.key},sendMailing:function(){this.showModal=!1,Object(o.a)("Успех","Рассылка была отправлена")}},data:function(){return{showModal:!1,sendingTypes:["Все","SMS","Пуш-уведомления"],variables:[{key:"%ИМЯ%",name:"Имя клиента",example:"Александр Андреевич"},{key:"%ДОЛГ%",name:"Задолженность",example:"5000"}],methods:{addVariableToTemplate:function(t){this.body+=t.key}},search:"",selected:[],currentTemplate:null,headers:[{text:"Контрагент",align:"left",sortable:!1,value:"fullName"},{text:"Лицевой счет",value:"personalAccount",sortable:!1},{text:"Адрес",value:"address",sortable:!1},{text:"Торговое наименование",value:"trademark",sortable:!1}],isFreeTemplate:!1,clientGroup:null,clientGroups:["Все","Задолжники","Именинники"],title:"",body:"",templates:[{title:"День рождения",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null},{title:"Долг",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null},{title:"Новый год",body:"Уважаемый, %ИМЯ%! Поздравляем вас с днем рождения!",action:null}]}},computed:{clients:function(){return this.$store.getters.allClients},message:function(){var t=this.body;return this.variables.forEach((function(e){t=t.replaceAll(e.key,e.example)})),t}}},u=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",{staticClass:"p-3"},[n("v-select",{attrs:{label:"Тип отправки",items:t.sendingTypes}}),t._v(" "),n("v-flex",[t.isFreeTemplate?t._e():n("v-select",{attrs:{label:"Шаблон",items:t.templates,"item-text":"title","item-value":"title"},model:{value:t.currentTemplate,callback:function(e){t.currentTemplate=e},expression:"currentTemplate"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Произвольный шаблон"},model:{value:t.isFreeTemplate,callback:function(e){t.isFreeTemplate=e},expression:"isFreeTemplate"}})],1),t._v(" "),n("v-text-field",{attrs:{label:"Заголовок"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("v-textarea",{attrs:{label:"Текст","auto-grow":"",rows:"5",counter:""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),t._v(" "),n("v-flex",{staticClass:"mb-2"},[n("h4",{staticClass:"ml-1"},[t._v("Переменные:")]),t._v(" "),t._l(t.variables,(function(e,a){return n("v-btn",{key:a,staticClass:"m-1",attrs:{small:"",color:"primary"},on:{click:function(n){return t.addVariableToTemplate(e)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))],2),t._v(" "),n("v-select",{attrs:{label:"Группа клиентов",items:t.clientGroups},model:{value:t.clientGroup,callback:function(e){t.clientGroup=e},expression:"clientGroup"}}),t._v(" "),t.clientGroup?n("v-data-table",{attrs:{"item-key":"_id","show-select":"","no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,items:t.clients,search:t.search},scopedSlots:t._u([{key:"item.personalAccount",fn:function(e){var a=e.item;return[n("ul",t._l(a.personalAccount,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)]}},{key:"item.address",fn:function(e){var a=e.item;return[n("ul",t._l(a.address,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)]}},{key:"item.trademark",fn:function(e){var a=e.item;return[n("ul",t._l(a.trademark,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)]}},{key:"footer.page-text",fn:function(e){var n=e.pageStart,a=e.pageStop,l=e.itemsLength;return[t._v("\n                "+t._s(n)+"-"+t._s(a)+" из "+t._s(l)+"\n            ")]}}],null,!1,1489814283),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}):t._e(),t._v(" "),t.clientGroup?n("div",{staticClass:"d-flex"},[n("h4",[t._v("Количество получателей: "+t._s(t.selected.length))])]):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-flex",{staticClass:"mt-2"},[n("h3",[t._v("Предпросмотр шаблона:")]),t._v(" "),n("h4",[t._v(t._s(this.title))]),t._v(" "),n("p",[t._v(t._s(this.message))])]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.showModal=!0}}},[t._v("Отправить рассылку")])],1),t._v(" "),n("ConfirmationModal",{attrs:{state:t.showModal,message:"Вы действительно хотите отправить эту рассылку?"},on:{cancel:function(e){t.showModal=!1},confirm:t.sendMailing}})],1)}),[],!1,null,"5e303b53",null).exports;var v=function(t,e){return Math.random()*(e-t)+t},m={components:{ConfirmationModal:s.a},data:function(){return{showDeleteModal:!1,search:"",items:[{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null},{title:"Внимание!",body:"Вам необходимо закрыть задолженность до конца текущего месяца, иначе действие нашей охраны будут приостановлены!",date:"22.10.2019",recipient_count:195,action:null}],headers:[{text:"Заголовок",value:"title",sortable:!1},{text:"Текст",value:"body",sortable:!1},{text:"Дата рассылки",value:"date"},{text:"Количество получателей",value:"recipient_count"},{text:"Автор",value:"author",sortable:!1},{text:"Действие",value:"action",sortable:!1}]}},computed:{allItems:function(){return this.items.map((function(t){var e=v(1,100);return t.author=e>50?"Автоматическая рассылка":"Администратор",t}))}}},p={components:{MailingHistorySegment:Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2"},[n("v-text-field",{attrs:{label:"Поиск",clearable:"","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-data-table",{attrs:{"no-data-text":"Нет данных","no-results-text":"Нет результатов",items:t.allItems,"footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,search:t.search},scopedSlots:t._u([{key:"item.body",fn:function(e){var a=e.item;return[n("i",[t._v(t._s(a.body))])]}},{key:"item.action",fn:function(e){e.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.showDeleteModal=!0}}},[n("v-icon",[t._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(e){var n=e.pageStart,a=e.pageStop,l=e.itemsLength;return[t._v("\n            "+t._s(n)+"-"+t._s(a)+" из "+t._s(l)+"\n        ")]}}])}),t._v(" "),n("ConfirmationModal",{attrs:{state:t.showDeleteModal,message:"'Вы действительно хотите удалить данную рассылку из истории?"},on:{cancel:function(e){t.showDeleteModal=!1},confirm:function(e){t.showDeleteModal=!1}}})],1)}),[],!1,null,"f93c1674",null).exports,MailingSegment:u,MailingTemplateSegment:c},data:function(){return{currentSegment:"mailing"}}},_=Object(l.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("\n            Рассылка\n        ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"p-3"},[n("v-btn",{attrs:{depressed:"",color:"mailing"===t.currentSegment?"primary":""},on:{click:function(e){t.currentSegment="mailing"}}},[t._v("\n                    Рассылка\n                ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"mailing_history"===t.currentSegment?"primary":""},on:{click:function(e){t.currentSegment="mailing_history"}}},[t._v("\n                    История рассылок\n                ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"mailing_template"===t.currentSegment?"primary":""},on:{click:function(e){t.currentSegment="mailing_template"}}},[t._v("\n                    Шаблоны\n                ")]),t._v(" "),"mailing"===t.currentSegment?n("MailingSegment"):t._e(),t._v(" "),"mailing_history"===t.currentSegment?n("MailingHistorySegment"):t._e(),t._v(" "),"mailing_template"===t.currentSegment?n("MailingTemplateSegment"):t._e()],1)])],1)],1)}),[],!1,null,"13c38fa1",null);e.default=_.exports}}]);