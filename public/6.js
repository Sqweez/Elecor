(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+F2W":function(t,e,s){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},i=(s("dXLZ"),s("KHd+")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[s("v-card",[s("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[s("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),s("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[s("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),s("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),s("v-divider"),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),s("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),s("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=n.exports},F3ox:function(t,e,s){var a=s("toHN");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},HKfM:function(t,e,s){"use strict";var a=s("o0o1"),i=s.n(a),n=s("+z1p"),o=s.n(n),c=(s("GVEN"),s("ootA")),r=s("6cC8"),l={props:{state:{type:Boolean,default:!1},editMode:{type:Boolean,default:!1},title:{type:String,default:"Добавление новости"},okButton:{type:String,default:"Создать"},serviceId:{type:Number,default:null}},watch:{state:function(t){var e;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!t||!this.editMode||null===this.serviceId){s.next=9;break}return s.next=3,i.a.awrap(this.$store.getters.stock(this.serviceId));case 3:e=s.sent,this.stock.title=e.title,this.stock.body=e.body||"",this.stock.image=e.image,this.stockType=null==e.service_id?"stock":"banner",this.stock.service_id=e.service_id;case 9:case"end":return s.stop()}}),null,this)}},data:function(){return{loading:!1,editor:o.a,stockType:"stock",editorConfig:{language:"ru",height:700,autoGrow_minHeight:400},stock:{title:"",body:"",image:null,service_id:null}}},computed:{services:function(){return this.$store.getters.getMobileServices}},methods:{onSubmit:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.editMode){t.next=5;break}return t.next=3,i.a.awrap(this.editStock());case 3:t.next=7;break;case 5:return t.next=7,i.a.awrap(this.createStock());case 7:case"end":return t.stop()}}),null,this)},editStock:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.stock.service_id="banner"===this.stockType?this.stock.service_id:null,this.stock.body="stock"===this.stockType?this.stock.body:null,t.next=5,i.a.awrap(this.$store.dispatch(r.a.EDIT_STOCK,{id:this.serviceId,image:this.stock.image,body:this.stock.body||null,title:this.stock.title,service_id:this.stock.service_id}));case 5:this.$emit("onSave"),this.clearData();case 7:case"end":return t.stop()}}),null,this)},createStock:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.stock.service_id="banner"===this.stockType?this.stock.service_id:null,this.stock.body="stock"===this.stockType?this.stock.body:null,t.next=5,i.a.awrap(this.$store.dispatch(r.a.CREATE_STOCK,{image:this.stock.image,body:this.stock.body,title:this.stock.title,service_id:this.stock.service_id}));case 5:this.$emit("onSave"),this.clearData();case 7:case"end":return t.stop()}}),null,this)},choosePhoto:function(){this.$refs.fileInput.click()},uploadPhoto:function(t){var e;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.awrap(Object(c.a)(t.target.files[0]));case 2:e=s.sent,this.stock.image=e.data;case 4:case"end":return s.stop()}}),null,this)},clearData:function(){this.stock={title:"",body:"",image:null,service_id:null},this.stockType="stock",this.loading=!1}}},d=s("KHd+"),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[s("v-card",[s("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[s("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),s("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:function(e){return t.$emit("onClose")}}},[s("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),s("v-card-text",[t.loading?t._e():s("v-form",{staticClass:"p-2"},[s("v-text-field",{attrs:{label:"Заголовок"},model:{value:t.stock.title,callback:function(e){t.$set(t.stock,"title",e)},expression:"stock.title"}}),t._v(" "),s("v-radio-group",{model:{value:t.stockType,callback:function(e){t.stockType=e},expression:"stockType"}},[s("v-radio",{key:"1",attrs:{label:"Акция",value:"stock"}}),t._v(" "),s("v-radio",{key:"2",attrs:{label:"Баннер",value:"banner"}})],1),t._v(" "),"stock"===t.stockType?s("div",[s("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,rows:"10"},model:{value:t.stock.body,callback:function(e){t.$set(t.stock,"body",e)},expression:"stock.body"}})],1):t._e(),t._v(" "),"banner"===t.stockType?s("v-select",{attrs:{items:t.services,"item-text":"name","item-value":"id"},model:{value:t.stock.service_id,callback:function(e){t.$set(t.stock,"service_id",e)},expression:"stock.service_id"}}):t._e(),t._v(" "),s("input",{ref:"fileInput",staticClass:"d-none",attrs:{type:"file"},on:{change:t.uploadPhoto}}),t._v(" "),t.stock.image?s("img",{staticClass:"mt-2 mb-2",staticStyle:{"max-width":"400px",height:"auto"},attrs:{src:"../storage/"+t.stock.image,alt:""}}):t._e(),t._v(" "),s("div",[s("v-btn",{staticClass:"mt-4",attrs:{color:"primary","max-width":"400"},on:{click:t.choosePhoto}},[t._v("Загрузите фото\n                        "),s("v-icon",{staticClass:"ml-2"},[t._v("mdi-upload")])],1)],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),t.loading?t._e():s("v-card-actions",[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:"",color:"success",disabled:null===t.stock.image},on:{click:t.onSubmit}},[s("b",[t._v(t._s(t.okButton))]),t._v(" "),s("v-icon",[t._v("mdi-check")])],1)],1),t._v(" "),s("v-progress-linear",{attrs:{indeterminate:"",active:t.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"d25f9e90",null);e.a=u.exports},S3oV:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),i=s.n(a),n=s("+F2W"),o=s("HKfM"),c=s("BWV3"),r={components:{AddNewsModal:o.a,ConfirmationModal:n.a},methods:{closeDeleteModal:function(){this.deleteModal=!1},closeHideModal:function(){this.hideModal=!1},closeAddModal:function(){this.addModal=!1,Object(c.a)("","Новость успешно добавлена!")},closeEditModal:function(){this.editModal=!1,Object(c.a)("","Новость успешно изменена!")}},data:function(){return{editModal:!1,addModal:!1,hideModal:!1,deleteModal:!1,headers:[{text:"Наименование",value:"title",sortable:!1},{text:"Дата создания",value:"date",sortable:!1},{text:"Действие",value:"action",sortable:!1}],items:[{title:"Новая новость",date:"21.10.2019",isVisible:!0},{title:"Новая новость 2",date:"21.10.2019",isVisible:!1}],search:""}}},l=s("KHd+"),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-content-between"},[s("v-btn",{staticClass:"button-add",attrs:{color:"primary"}},[t._v("\n            Экспорт данных\n            "),s("v-icon",[t._v("mdi-file-excel-box")])],1),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("\n            Добавить новость\n            "),s("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-spacer"),t._v(" "),s("v-text-field",{staticClass:"mb-2",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),s("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,search:t.search,items:t.items},scopedSlots:t._u([{key:"item.action",fn:function(e){var a=e.item;return[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.hideModal=!0}}},[a.isVisible?s("v-icon",[t._v("mdi-eye-off")]):s("v-icon",[t._v("mdi-eye")])],1),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.editModal=!0}}},[s("v-icon",[t._v("mdi-pencil-outline")])],1),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.deleteModal=!0}}},[s("v-icon",[t._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(e){var s=e.pageStart,a=e.pageStop,i=e.itemsLength;return[t._v("\n            "+t._s(s)+"-"+t._s(a)+" из "+t._s(i)+"\n        ")]}}])}),t._v(" "),s("ConfirmationModal",{attrs:{message:"Вы действительно хотите удалить выбранную новость?",state:t.deleteModal,"ok-message":"Удалить"},on:{cancel:t.closeDeleteModal,confirm:t.closeDeleteModal}}),t._v(" "),s("ConfirmationModal",{attrs:{"ok-message":"Скрыть",message:"Вы действительно хотите скрыть выбранную новость?",state:t.hideModal},on:{cancel:t.closeHideModal,confirm:t.closeHideModal}}),t._v(" "),s("AddNewsModal",{attrs:{state:t.addModal},on:{onClose:t.closeAddModal}}),t._v(" "),s("AddNewsModal",{attrs:{title:"Редактирование новости","ok-button":"Сохранить","edit-mode":!0,state:t.editModal},on:{onClose:t.closeEditModal}})],1)}),[],!1,null,"75c4b975",null).exports,u=s("kxSr"),v=s("6cC8"),h={components:{NewsSegment:d,StocksSegment:u.a},mounted:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(this.$store.dispatch(v.a.GET_STOCKS));case 2:case"end":return t.stop()}}),null,this)},data:function(){return{currentSegment:"stocks"}},methods:{switchSegment:function(){this.currentSegment="news"===this.currentSegment?"stocks":"news"}}},p=Object(l.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",[t._v("\n        Акции\n    ")]),t._v(" "),s("v-card-text",[s("div",{staticClass:"d-flex p-2"},[s("v-btn",{staticStyle:{width:"300px"},attrs:{depressed:"",color:"stocks"===t.currentSegment?"primary":""},on:{click:function(e){t.currentSegment="stocks"}}},[t._v("Акции\n            ")])],1),t._v(" "),s("div",{staticClass:"p-4"},["news"===t.currentSegment?s("NewsSegment"):s("StocksSegment")],1)])],1)}),[],!1,null,"612f11e7",null);e.default=p.exports},dXLZ:function(t,e,s){"use strict";var a=s("F3ox");s.n(a).a},kxSr:function(t,e,s){"use strict";var a=s("o0o1"),i=s.n(a),n=s("BWV3"),o=s("HKfM"),c=s("+F2W"),r=s("6cC8"),l={components:{ConfirmationModal:c.a,AddNewsModal:o.a},props:{isAdmin:{type:Boolean}},computed:{stocks:function(){return this.$store.getters.stocks},headers:function(){var t=[{text:"Наименование",value:"title",sortable:!1},{text:"Дата создания",value:"date",sortable:!1},{text:"Тип",value:"type",sortable:!1},{text:"Статус",value:"status",sortable:!1},{text:"Баннер",value:"image",sortable:!1,align:"center"}];return this.isAdmin&&t.push({text:"Действие",value:"action",sortable:!1}),t}},data:function(){return{modalKey:0,currentStock:null,modalMessage:"",deleteModal:!1,editId:null,hideModal:!1,addModal:!1,editModal:!1,search:""}},methods:{showDeleteModal:function(t){this.currentStock=t,this.deleteModal=!0},showHideModal:function(t){this.currentStock=t,this.currentStock.is_visible?this.modalMessage="Вы действительно хотите скрыть данную акцию?":this.modalMessage="Вы действительно хотите показать данную акцию?",this.hideModal=!0},showEditModal:function(t){this.editId=t.id,this.editModal=!0},closeDeleteModal:function(){this.deleteModal=!1},closeHideModal:function(){this.hideModal=!1},closeAddModal:function(){this.addModal=!1,this.modalKey++},closeEditModal:function(){this.editModal=!1,this.editId=null},stockCreated:function(){this.addModal=!1,Object(n.a)("Акция успешно добавлена!"),this.modalKey++,this.currentStock=null},stockEdited:function(){this.editModal=!1,Object(n.a)("Акция успешно обновлена!"),this.editId=null},deleteStock:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(this.$store.dispatch(r.a.DELETE_STOCK,this.currentStock.id));case 2:this.currentStock=null,this.deleteModal=!1;case 4:case"end":return t.stop()}}),null,this)},changeStockStatus:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.hideModal=!1,t.next=3,i.a.awrap(this.$store.dispatch(r.a.CHANGE_STOCK_STATUS,{id:this.currentStock.id,is_visible:!this.currentStock.is_visible}));case 3:Object(n.a)("Акция успешно обновлена!"),this.currentStock=null;case 5:case"end":return t.stop()}}),null,this)}}},d=s("KHd+"),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-content-between"},[t.isAdmin?s("v-btn",{staticClass:"button-add",attrs:{color:"primary"}},[t._v("\n            Экспорт данных\n            "),s("v-icon",[t._v("mdi-file-excel-box")])],1):t._e(),t._v(" "),t.isAdmin?s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("\n            Добавить баннер\n            "),s("v-icon",[t._v("mdi-plus")])],1):t._e()],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-spacer"),t._v(" "),s("v-text-field",{staticClass:"mb-2",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.stocks?s("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,search:t.search,items:t.stocks},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[s("img",{staticStyle:{"max-width":"200px",height:"auto"},attrs:{src:"../storage/"+e.image,alt:""}})]}},{key:"item.type",fn:function(e){var a=e.item;return[s("span",[t._v(t._s(null===a.service_id?"Акция":"Баннер: "+a.service))])]}},{key:"item.status",fn:function(e){return[e.item.is_visible?s("h4",{staticClass:"green--text"},[t._v("Показывается")]):s("h4",{staticClass:"red--text"},[t._v("Скрыто")])]}},{key:"item.action",fn:function(e){var a=e.item;return[s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showHideModal(a)}}},[a.is_visible?s("v-icon",[t._v("mdi-eye-off")]):s("v-icon",[t._v("mdi-eye")])],1),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showEditModal(a)}}},[s("v-icon",[t._v("mdi-pencil-outline")])],1),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showDeleteModal(a)}}},[s("v-icon",[t._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(e){var s=e.pageStart,a=e.pageStop,i=e.itemsLength;return[t._v("\n            "+t._s(s)+"-"+t._s(a)+" из "+t._s(i)+"\n        ")]}}],null,!1,2187396637)}):t._e(),t._v(" "),t.isAdmin?s("ConfirmationModal",{attrs:{message:"Вы действительно хотите удалить выбранную акцию?",state:t.deleteModal,"ok-message":"Удалить"},on:{cancel:t.closeDeleteModal,confirm:t.deleteStock}}):t._e(),t._v(" "),t.isAdmin?s("ConfirmationModal",{attrs:{"ok-message":"Скрыть",message:t.modalMessage,state:t.hideModal},on:{cancel:t.closeHideModal,confirm:t.changeStockStatus}}):t._e(),t._v(" "),t.isAdmin?s("AddNewsModal",{attrs:{title:"Добавление баннера",state:t.addModal},on:{onClose:t.closeAddModal,onSave:t.stockCreated}}):t._e(),t._v(" "),t.isAdmin?s("AddNewsModal",{attrs:{title:"Редактирование баннера","service-id":t.editId,"ok-button":"Сохранить","edit-mode":!0,state:t.editModal},on:{onClose:t.closeEditModal,onSave:t.stockEdited}}):t._e()],1)}),[],!1,null,"3eb0e322",null);e.a=u.exports},ootA:function(t,e,s){"use strict";s.d(e,"a",(function(){return c})),s.d(e,"b",(function(){return r}));var a=s("o0o1"),i=s.n(a),n=s("vDqi"),o=s.n(n);function c(t){var e,s,a,n=arguments;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=n.length>1&&void 0!==n[1]?n[1]:"file",(s=new FormData).append(e,t),a={headers:{"content-type":"multipart/form-data"}},c.next=6,i.a.awrap(o.a.post("/api/upload",s,a));case 6:return c.abrupt("return",c.sent);case 7:case"end":return c.stop()}}))}function r(t){var e;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return(e=new FormData).append("file",t),s.next=4,i.a.awrap(o.a.post("/api/delete",e));case 4:return s.abrupt("return",s.sent);case 5:case"end":return s.stop()}}))}},toHN:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.modal-text[data-v-2adaa561] {\n    margin-top: 15px!important;;\n    font-size: 16px;\n}\n",""])}}]);