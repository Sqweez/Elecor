(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{23:function(t,e,n){var a=n(59);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(11)(a,s);a.locals&&(t.exports=a.locals)},58:function(t,e,n){"use strict";var a=n(23);n.n(a).a},59:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"\n.modal-text[data-v-2adaa561] {\n    margin-top: 15px!important;;\n    font-size: 16px;\n}\n",""])},9:function(t,e,n){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},s=(n(58),n(2)),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=i.exports},98:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i={props:{state:{type:Boolean,default:!1}},data:function(){return{title:""}},methods:{onSave:function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(this.$store.dispatch("createField",{alias:this.title}));case 2:this.$emit("onClose");case 3:case"end":return t.stop()}}),null,this)}}},c=n(2),o=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"d-flex justify-content-between blue darken-1"},[n("span",{staticClass:"white--text"},[t._v("Добавление поля")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:function(e){return t.$emit("onClose")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",[n("v-form",{staticClass:"p-3"},[n("v-text-field",{attrs:{label:"Название поля"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:t.onSave}},[t._v("Сохранить "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"04694a44",null).exports,l={components:{ConfirmationModal:n(9).a,AddClientFieldModal:o},computed:{fields:function(){return this.$store.getters.get_fields}},data:function(){return{showModal:!1,delete_id:null,deleteModal:!1}},methods:{changeStatus:function(t){var e;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e={id:t.id,is_active:1==t.is_active?0:1},n.next=3,s.a.awrap(this.$store.dispatch("changeField",e));case 3:case"end":return n.stop()}}),null,this)},deleteItem:function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(this.$store.dispatch("deleteField",this.delete_id));case 2:this.delete_id=null,this.deleteModal=!1;case 4:case"end":return t.stop()}}),null,this)}}},r=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("\n            Поля клиента\n        ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"p-3"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.showModal=!0}}},[t._v("Добавить поле")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Название поля")]),t._v(" "),n("th",[t._v("Статус")]),t._v(" "),n("th",[t._v("Действие")])])]),t._v(" "),n("tbody",t._l(t.fields,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.alias))]),t._v(" "),n("td",[n("span",{class:1==e.is_active?"green--text":"red--text"},[t._v("\n                                        "+t._s(1==e.is_active?"Активно":"Неактивно")+"\n                                    ")])]),t._v(" "),n("td",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.changeStatus(e)}}},[0==e.is_active?n("v-icon",[t._v("mdi-eye")]):t._e(),t._v(" "),1==e.is_active?n("v-icon",[t._v("mdi-eye-off")]):t._e()],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(n){t.delete_id=e.id,t.deleteModal=!0}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)])],1),t._v(" "),n("AddClientFieldModal",{attrs:{state:t.showModal},on:{onClose:function(e){t.showModal=!1}}}),t._v(" "),n("ConfirmationModal",{attrs:{state:t.deleteModal,message:"Вы действительно хотите удалить выбранное поле?"},on:{cancel:function(e){t.deleteModal=!1,t.delete_id=null},confirm:t.deleteItem}})],1)}),[],!1,null,"204012c2",null);e.default=r.exports}}]);