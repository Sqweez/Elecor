(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+F2W":function(e,t,i){"use strict";var n={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},s=(i("dXLZ"),i("KHd+")),a=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[i("v-card",[i("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[i("span",{staticClass:"white--text"},[e._v(e._s(e.title))]),e._v(" "),i("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[i("v-icon",{attrs:{color:"white"},on:{click:e.onCancel}},[e._v("\n                        mdi-close\n                    ")])],1)],1),e._v(" "),i("v-card-text",{staticClass:"modal-text"},[e._v("\n                "+e._s(e.message)+"\n            ")]),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:""},on:{click:e.onCancel}},[e._v("\n                    "+e._s(e.cancelMessage)+"\n                ")]),e._v(" "),i("v-btn",{attrs:{color:"success",text:""},on:{click:e.onConfirm}},[e._v("\n                    "+e._s(e.okMessage)+"\n                    "),i("v-icon",[e._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);t.a=a.exports},BKZr:function(e,t,i){"use strict";i.r(t);var n=i("o0o1"),s=i.n(n),a=i("6cC8"),r={data:function(){return{loading:!1,select_key:null}},props:{editMode:{type:Boolean,default:!1},services:{type:Array},service:{type:Object,default:function(){return{name:"",price:null,trademark_default:"",main_id:null,isOneTime:!1}}},state:{type:Boolean,default:!1},title:{type:String,default:"Добавление услуги"}},computed:{_services:function(){var e=this;return this.services.filter((function(t){return t.id!==e.service.id}))}},methods:{save:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.service.isOneTime||(this.service.main_id=null),delete this.service.isOneTime,this.editMode?this.editService():this.createService(),this.loading=!1,e.next=7,s.a.awrap(this.$emit("onSave"));case 7:case"end":return e.stop()}}),null,this)},closeModal:function(){this.$emit("onClose")},createService:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(this.$store.dispatch(a.a.CREATE_SERVICE,this.service));case 2:case"end":return e.stop()}}),null,this)},editService:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(this.$store.dispatch(a.a.EDIT_SERVICE,this.service));case 2:case"end":return e.stop()}}),null,this)}}},c=i("KHd+"),o=Object(c.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{"max-width":"700",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[i("v-card",[i("v-card-title",{staticClass:"blue darken-1 d-flex justify-content-between"},[i("span",{staticClass:"white--text"},[e._v(e._s(e.title))]),e._v(" "),i("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:e.closeModal}},[i("v-icon",{attrs:{color:"white"}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),i("v-card-text",[e.loading?e._e():i("div",{staticClass:"p-3"},[i("v-text-field",{attrs:{label:"Наименование услуги"},model:{value:e.service.name,callback:function(t){e.$set(e.service,"name",t)},expression:"service.name"}}),e._v(" "),i("v-text-field",{attrs:{label:"Тариф",type:"number"},model:{value:e.service.price,callback:function(t){e.$set(e.service,"price",t)},expression:"service.price"}}),e._v(" "),i("v-text-field",{attrs:{label:"Торговое наименование по умолчанию"},model:{value:e.service.trademark_default,callback:function(t){e.$set(e.service,"trademark_default",t)},expression:"service.trademark_default"}}),e._v(" "),i("v-checkbox",{attrs:{label:"Разовая услуга"},on:{change:function(t){e.select_key++}},model:{value:e.service.isOneTime,callback:function(t){e.$set(e.service,"isOneTime",t)},expression:"service.isOneTime"}}),e._v(" "),i("v-select",{directives:[{name:"show",rawName:"v-show",value:!!e.service.isOneTime,expression:"!!service.isOneTime"}],key:e.select_key,attrs:{items:e._services,"item-value":"id","item-text":"name",label:"Привязать к услуге"},model:{value:e.service.main_id,callback:function(t){e.$set(e.service,"main_id",t)},expression:"service.main_id"}})],1)]),e._v(" "),i("v-divider"),e._v(" "),e.loading?e._e():i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:e.closeModal}},[e._v("Отмена")]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:"",color:"success"},on:{click:e.save}},[e._v("\n                Сохранить\n                "),i("v-icon",[e._v("mdi-check")])],1)],1),e._v(" "),i("v-progress-linear",{attrs:{indeterminate:"",active:e.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"113fd4c5",null).exports,l=i("BWV3"),d=i("+F2W"),v=i("wq7B"),u={components:{ConfirmationModal:d.a,AddService:o},data:function(){return{modalKey:0,editModal:!1,addModal:!1,deleteModal:!1,deleteId:null,filterValue:-1,itemFilters:[{name:"Все услуги",value:-1},{name:"Обычные услуги",value:0},{name:"Разовые услуги",value:1}],items:[{title:"МТК",cost:3e3,isOneTime:!1},{title:"Автосопровождение",cost:null,isOneTime:!0}],editingService:{}}},computed:{displayItems:function(){return-1==+this.filterValue?this.services:0===this.filterValue?this.basicServices:this.oneTimeServices},services:function(){return this.$store.getters[v.a.SERVICES]},basicServices:function(){return this.services.filter((function(e){return!e.main_id}))},oneTimeServices:function(){return this.services.filter((function(e){return e.main_id}))},user:function(){return this.$store.getters.user},headers:function(){var e=[{text:"Наименование",align:"left",sortable:!1,value:"name"},{text:"Тариф",value:"price",sortable:!1}];return 3===this.user.role_id&&e.push({text:"Действие",value:"action",sortable:!1}),e}},methods:{onSave:function(){this.addModal=!1,Object(l.a)("Услуга успешно добавлена"),this.modalKey++},closeEditModal:function(){this.editModal=!1,this.modalKey++},onEdit:function(){this.editModal=!1,this.modalKey++,Object(l.a)("Услуга успешно изменена")},deleteService:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(this.$store.dispatch(a.a.DELETE_SERVICE,this.deleteId));case 2:return this.deleteId=null,this.deleteModal=!1,e.next=6,s.a.awrap(Object(l.a)("Услуга была удалена"));case 6:case"end":return e.stop()}}),null,this)},showDeleteModal:function(e){this.deleteId=e,this.deleteModal=!0},showEditModal:function(e){this.editingService=e,this.editingService.isOneTime=!!this.editingService.main_id,this.editModal=!0}}},m=Object(c.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-card",[i("v-card-title",[e._v("\n            Прайс-лист\n        ")]),e._v(" "),i("v-card-text",[i("div",{staticClass:"p-3"},[3===e.user.role_id?i("div",{staticClass:"d-flex justify-content-between"},[i("v-btn",{attrs:{color:"primary"}},[e._v("\n                        Экспорт данных\n                        "),i("v-icon",[e._v("mdi-file-excel")])],1),e._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){t.stopPropagation(),e.addModal=!0}}},[e._v("\n                        Добавить услугу\n                        "),i("v-icon",{staticClass:"white--text"},[e._v("mdi-plus")])],1)],1):e._e(),e._v(" "),i("div",{staticClass:"mb-2 d-flex justify-content-end"},[i("v-select",{staticStyle:{"max-width":"300px"},attrs:{items:e.itemFilters,"item-text":"name","item-value":"value"},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1),e._v(" "),i("v-data-table",{staticClass:"mt-2",attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.displayItems},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.name)+"\n                        "),n.main_id?i("span",[e._v(" (Разовая услуга) ")]):e._e()]}},{key:"item.price",fn:function(t){var n=t.item;return[null===n.price?i("span",[e._v("Не указан")]):i("span",[e._v(e._s(n.price)+" тенге")])]}},{key:"item.action",fn:function(t){var n=t.item;return[i("v-btn",{attrs:{icon:"",text:""},on:{click:function(t){return t.stopPropagation(),e.showEditModal(n)}}},[i("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),i("v-btn",{attrs:{icon:"",text:""},on:{click:function(t){return t.stopPropagation(),e.showDeleteModal(n.id)}}},[i("v-icon",[e._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(t){var i=t.pageStart,n=t.pageStop,s=t.itemsLength;return[e._v("\n                        "+e._s(i)+"-"+e._s(n)+" из "+e._s(s)+"\n                    ")]}}])})],1)])],1),e._v(" "),i("AddService",{key:e.modalKey,attrs:{state:e.addModal,services:e.basicServices},on:{onClose:function(t){e.addModal=!1,e.modalKey++},onSave:e.onSave}}),e._v(" "),e.editModal?i("AddService",{key:e.modalKey+1,attrs:{title:"Редактирование услуги",state:e.editModal,service:e.editingService,"edit-mode":!0,services:e.basicServices},on:{onClose:e.closeEditModal,onSave:e.onEdit}}):e._e(),e._v(" "),i("ConfirmationModal",{attrs:{state:e.deleteModal,message:"Вы действительно хотите удалить выбранную услугу"},on:{cancel:function(t){e.deleteModal=!1},confirm:e.deleteService}})],1)}),[],!1,null,"0e3f90ec",null);t.default=m.exports},F3ox:function(e,t,i){var n=i("toHN");"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,s);n.locals&&(e.exports=n.locals)},dXLZ:function(e,t,i){"use strict";var n=i("F3ox");i.n(n).a},toHN:function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"\n.modal-text[data-v-2adaa561] {\n    margin-top: 15px!important;;\n    font-size: 16px;\n}\n",""])}}]);