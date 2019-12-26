(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{17:function(e,t,n){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Отправка сообщения"},messageTitle:{type:String,default:"Заголовок сообщения"},messageBody:{type:String,default:"Текст сообщения"}},data:function(){return{title_:"",body:""}},methods:{onCancel:function(){this.$emit("modalClosed"),this.clearData()},onSend:function(){this.$emit("sendMessage",{title:this.title_,body:this.body}),this.clearData()},clearData:function(){this.title_="",this.body=""}}},s=n(2),r=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v(e._s(e.title))]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:e.onCancel}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:e.messageTitle},model:{value:e.title_,callback:function(t){e.title_=t},expression:"title_"}}),e._v(" "),n("v-textarea",{attrs:{label:e.messageBody,rows:"5","auto-grow":""},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.onCancel}},[e._v("Отмена")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.onSend}},[e._v("Отправить")])],1)],1)],1)}),[],!1,null,"1b408430",null);t.a=r.exports},93:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(17),c=n(11),o=n(1),i=n(4),l={components:{MessageModal:r.a},computed:{feedbacks:function(){return this.$store.getters.feedback}},data:function(){return{search:"",currentFeedback:null,showMessageModal:!1,feedbackHeaders:[{text:"Контрагент",value:"client",sortable:!1},{text:"Дата",value:"date",sortable:!1},{text:"Обратная связь",value:"feedback",sortable:!1},{text:"Ответ",value:"answer",sortable:!1},{text:"Действие",value:"action",sortable:!1}]}},methods:{showModal:function(e){this.currentFeedback=e,this.showMessageModal=!0},closeMessageModal:function(){this.showMessageModal=!1,this.currentFeedback=null},sendMessage:function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={title:e.title,body:e.body,client_id:this.currentFeedback.client_id},n.next=3,s.a.awrap(Object(c.k)(t));case 3:return n.next=5,s.a.awrap(this.changeFeedbackStatus(e.body));case 5:case"end":return n.stop()}}),null,this)},changeFeedbackStatus:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(this.$store.dispatch(o.a.CHANGE_FEEDBACK_STATUS,{id:this.currentFeedback.id,answer:e,is_worked:!0}));case 2:this.showMessageModal=!1,Object(i.a)("Заявка обработана");case 4:case"end":return t.stop()}}),null,this)}}},d=n(2),u=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feedback-container"},[n("v-btn",{staticClass:"button-add",attrs:{color:"primary"}},[e._v("\n        Экспорт данных\n        "),n("v-icon",[e._v("mdi-file-excel-box")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"mb-2",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),e.feedbacks?n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных",items:e.feedbacks,"footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.feedbackHeaders,search:e.search},scopedSlots:e._u([{key:"item.feedback",fn:function(t){var a=t.item;return[n("i",[e._v(e._s(a.feedback))])]}},{key:"item.message",fn:function(t){var a=t.item;return[n("i",[e._v(e._s(a.message))])]}},{key:"item.action",fn:function(t){var a=t.item;return[a.is_worked?n("div",[n("h3",{staticClass:"green--text"},[e._v("Отработано")])]):n("div",[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.showModal(a)}}},[e._v("Ответить\n                    "),n("v-icon",[e._v("mdi-message")])],1)],1)]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n            "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n        ")]}}],null,!1,3918982685)}):e._e(),e._v(" "),n("MessageModal",{attrs:{state:e.showMessageModal},on:{modalClosed:e.closeMessageModal,sendMessage:e.sendMessage}})],1)}),[],!1,null,null,null).exports,v={props:{state:{type:Boolean},title:{type:String,default:"Комментарий к заявке"}},data:function(){return{comment:""}},methods:{onCancel:function(){this.$emit("onCancel"),this.comment=""},onSave:function(){this.$emit("onSave",{comment:this.comment}),this.comment=""}}},m=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v(e._s(e.title))]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:e.onCancel}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"Комментарий"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.onCancel}},[e._v("Отмена")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.onSave}},[e._v("Отправить")])],1)],1)],1)}),[],!1,null,"fbfa0440",null).exports;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={components:{MessageModal:r.a,CommentModal:m},methods:{closeMessageModal:function(){this.showMessageModal=!1},showMessageModal:function(e){this.messageModal=!0,this.currentOrder=e},showCommentModal:function(e){this.commentModal=!0,this.currentOrder=e},changeOrderStatus:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(this.$store.dispatch(o.a.CHANGE_ORDER_STATUS,f({id:this.currentOrder.id,is_worked:!0},e)));case 2:this.commentModal=!1,Object(i.a)("Статус заявки изменен!");case 4:case"end":return t.stop()}}),null,this)},showClientPage:function(e){this.$router.push({name:"clients.show",params:{userId:e.client_id}})},sendMessage:function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={},this.currentOrder.client_id?t.client_id=this.currentOrder.client_id:(t.push_token=this.currentOrder.push_token,t.isGuest=!0),n=f({},t,{},e),a.next=5,s.a.awrap(Object(c.k)(n));case 5:this.currentOrder=null,this.messageModal=!1,Object(i.a)("Сообщение отправлено!");case 8:case"end":return a.stop()}}),null,this)}},computed:{orders:function(){return this.$store.getters.orders}},data:function(){return{currentOrder:null,messageModal:!1,commentModal:!1,search:"",orderHeaders:[{text:"Контрагент",value:"client",sortable:!1},{text:"Телефон",value:"phone",sortable:!1},{text:"Комментарий клиента",value:"client_comment",sortable:!1},{text:"Дата",value:"date",sortable:!1},{text:"Услуга",value:"service",sortable:!1},{text:"Комментарий",value:"comment",sortable:!1},{text:"Действие",value:"action",sortable:!1}]}}},_={components:{FeedbackSegment:u,OrderSegment:Object(d.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"orders-container"},[n("v-btn",{staticClass:"button-add",attrs:{color:"primary"}},[e._v("\n        Экспорт данных\n        "),n("v-icon",[e._v("mdi-file-excel-box")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"mb-2",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),e.orders?n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.orderHeaders,search:e.search,items:e.orders},scopedSlots:e._u([{key:"item.client",fn:function(t){var a=t.item;return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[e._v(e._s(a.client))]),e._v(" "),a.client_id?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.showClientPage(a)}}},[n("v-icon",[e._v("mdi-eye")])],1):e._e()],1)]}},{key:"item.action",fn:function(t){var a=t.item;return[a.is_worked?n("div",[n("h4",{staticClass:"green--text"},[e._v("Отработано")])]):n("div",[a.client_id||a.push_token?n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.showMessageModal(a)}}},[e._v("Ответить\n                    "),n("v-icon",[e._v("mdi-message")])],1):e._e(),e._v(" "),n("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.showCommentModal(a)}}},[e._v("Отработано\n                    "),n("v-icon",[e._v("mdi-check")])],1)],1)]}},{key:"item.comment",fn:function(t){var a=t.item;return[n("i",[e._v(e._s(a.comment))])]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,s=t.itemsLength;return[e._v("\n            "+e._s(n)+"-"+e._s(a)+" из "+e._s(s)+"\n        ")]}}],null,!1,3451665837)}):e._e(),e._v(" "),n("MessageModal",{attrs:{state:e.messageModal},on:{modalClosed:function(t){e.messageModal=!1,e.currentOrder=null},sendMessage:e.sendMessage}}),e._v(" "),n("CommentModal",{attrs:{state:e.commentModal},on:{onCancel:function(t){e.commentModal=!1,e.currentOrder=null},onSave:e.changeOrderStatus}})],1)}),[],!1,null,null,null).exports},mounted:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(this.$store.dispatch(o.a.GET_ORDERS));case 2:return e.next=4,s.a.awrap(this.$store.dispatch(o.a.GET_FEEDBACK));case 4:case"end":return e.stop()}}),null,this)},data:function(){return{search:"",currentSegment:"orders"}},methods:{switchSegment:function(){this.currentSegment="orders"===this.currentSegment?"feedback":"orders"}}},g=Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-title",[e._v("\n            Заявки и обратная связь\n        ")]),e._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex p-2"},[n("v-btn",{staticStyle:{width:"300px"},attrs:{depressed:"",color:"orders"===e.currentSegment?"primary":""},on:{click:function(t){e.currentSegment="orders"}}},[e._v("Заявки\n                ")]),e._v(" "),n("v-btn",{staticStyle:{width:"300px"},attrs:{depressed:"",color:"feedback"===e.currentSegment?"primary":""},on:{click:function(t){e.currentSegment="feedback"}}},[e._v("Обратная связь\n                ")])],1),e._v(" "),n("div",{staticClass:"p-4"},["orders"===e.currentSegment?n("OrderSegment"):n("FeedbackSegment")],1)])],1)],1)}),[],!1,null,"22305b69",null);t.default=g.exports}}]);