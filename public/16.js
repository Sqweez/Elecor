(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{98:function(t,e,n){"use strict";n.r(e);var s={props:{state:{type:Boolean,default:!1}},data:function(){return{title:""}},methods:{onSave:function(){this.$emit("onClose")}}},a=n(2),o={components:{AddClientFieldModal:Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"d-flex justify-content-between blue darken-1"},[n("span",{staticClass:"white--text"},[t._v("Добавление поля")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:function(e){return t.$emit("onClose")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",[n("v-form",{staticClass:"p-3"},[n("v-text-field",{attrs:{label:"Название поля"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:t.onSave}},[t._v("Сохранить "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"031baf23",null).exports},data:function(){return{showModal:!1,clientFields:[{name:"ИИН/БИН",status:1},{name:"Доверенный телефон",status:0}]}}},i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("\n            Поля клиента\n        ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"p-3"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.showModal=!0}}},[t._v("Добавить поле")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Название поля")]),t._v(" "),n("th",[t._v("Статус")]),t._v(" "),n("th",[t._v("Действие")])])]),t._v(" "),n("tbody",t._l(t.clientFields,(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[n("span",{class:1===e.status?"green--text":"red--text"},[t._v("\n                                        "+t._s(1===e.status?"Активно":"Неактивно")+"\n                                    ")])]),t._v(" "),n("td",[n("v-btn",{attrs:{icon:""}},[0===e.status?n("v-icon",[t._v("mdi-eye")]):t._e(),t._v(" "),1===e.status?n("v-icon",[t._v("mdi-eye-off")]):t._e()],1)],1)])})),0)]},proxy:!0}])})],1)])],1),t._v(" "),n("AddClientFieldModal",{attrs:{state:t.showModal},on:{onClose:function(e){t.showModal=!1}}})],1)}),[],!1,null,"e9f14758",null);e.default=i.exports}}]);