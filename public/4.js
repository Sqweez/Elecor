(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(t,e,n){"use strict";var i={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},a=(n(57),n(2)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=s.exports},12:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var i=n(0),a=n.n(i),s=n(3),o=n.n(s);function c(t){var e,n,i,s=arguments;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"file",(n=new FormData).append(e,t),i={headers:{"content-type":"multipart/form-data"}},c.next=6,a.a.awrap(o.a.post("/api/upload",n,i));case 6:return c.abrupt("return",c.sent);case 7:case"end":return c.stop()}}))}function r(t){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new FormData).append("file",t),n.next=4,a.a.awrap(o.a.post("/api/delete",e));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}))}},17:function(t,e,n){"use strict";var i={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Отправка сообщения"},messageTitle:{type:String,default:"Заголовок сообщения"},messageBody:{type:String,default:"Текст сообщения"}},data:function(){return{title_:"",body:""}},methods:{onCancel:function(){this.$emit("modalClosed"),this.clearData()},onSend:function(){this.$emit("sendMessage",{title:this.title_,body:this.body}),this.clearData()},clearData:function(){this.title_="",this.body=""}}},a=n(2),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:t.messageTitle},model:{value:t.title_,callback:function(e){t.title_=e},expression:"title_"}}),t._v(" "),n("v-textarea",{attrs:{label:t.messageBody,rows:"5","auto-grow":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("Отмена")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:t.onSend}},[t._v("Отправить")])],1)],1)],1)}),[],!1,null,"1b408430",null);e.a=s.exports},20:function(t,e,n){var i=n(58);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(i,a);i.locals&&(t.exports=i.locals)},22:function(t,e,n){var i=n(80);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(i,a);i.locals&&(t.exports=i.locals)},23:function(t,e,n){var i=n(82);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(i,a);i.locals&&(t.exports=i.locals)},24:function(t,e,n){var i=n(84);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(i,a);i.locals&&(t.exports=i.locals)},57:function(t,e,n){"use strict";var i=n(20);n.n(i).a},58:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.modal-text[data-v-2adaa561] {\n    margin-top: 15px!important;;\n    font-size: 16px;\n}\n",""])},79:function(t,e,n){"use strict";var i=n(22);n.n(i).a},80:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.modal-text[data-v-71dc1e6d] {\n    padding: 30px !important;\n}\n",""])},81:function(t,e,n){"use strict";var i=n(23);n.n(i).a},82:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.d-flex[data-v-78022c50] {\n    padding: 10px;\n}\n.subject__select[data-v-78022c50] {\n    padding-top: 0 !important;\n    margin-top: -2px !important;\n    margin-left: 10px;\n}\n.change-photo[data-v-78022c50] {\n    margin-top: 15px;\n}\n.button-container[data-v-78022c50] {\n    margin: 10px;\n    max-width: 300px;\n}\np[data-v-78022c50] {\n    font-size: 16px;\n}\n",""])},83:function(t,e,n){"use strict";var i=n(24);n.n(i).a},84:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".client-container[data-v-7cf3c3d9]{margin-top:50px}p[data-v-7cf3c3d9]{font-size:16px}.button-container[data-v-7cf3c3d9]{margin:10px;max-width:300px}tr.deactivated[data-v-7cf3c3d9]{background-color:rgba(255,130,130,.69)}.d-flex[data-v-7cf3c3d9]{padding:10px}.subject__select[data-v-7cf3c3d9]{padding-top:0 !important;margin-top:-2px !important;margin-left:10px}.change-photo[data-v-7cf3c3d9]{margin-top:15px}td[data-v-7cf3c3d9]{min-height:50px}",""])},90:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(10),o=n(17),c=n(7),r=n.n(c),l=n(6),d=n(13),u=n(1);String.prototype.replaceAll=function(t,e){return this.split(t).join(e)};var v={data:function(){return{valid:!0,calendarModal:!1,picker:!0,isUnique:!0,loading:!1,errorMessage:"",connection:{service_id:null,address:"",personal_account:null,price:0,date_start:r()().format("YYYY-MM-DD"),month_price:0,trademark:"",client_id:null},personalAccountRules:[function(t){return!!t||"Введите лицевой счет"}],serviceRules:[function(t){return!!t||"Выберите услугу!"}]}},props:{state:{type:Boolean,default:!1}},methods:{setData:function(){this.setTrademark(),this.setPrice()},connectService:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.connection.client_id=this.$route.params.userId,this.connection.personal_account=this.connection.personal_account.replaceAll(" ",""),this.connection.balance=-1*this.connection.month_price,t.next=6,a.a.awrap(this.$store.dispatch(u.a.ADD_CONNECTION,this.connection));case 6:this.$emit("connect"),this.loading=!1;case 8:case"end":return t.stop()}}),null,this)},checkDuplicates:function(){var t,e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.connection.personal_account){n.next=2;break}return n.abrupt("return");case 2:return t=this.connection.personal_account.replaceAll(" ",""),n.next=5,a.a.awrap(Object(d.i)(t));case 5:e=n.sent,this.errorMessage=1===e?"Данный лицевой счет уже используется!":"";case 7:case"end":return n.stop()}}),null,this)},setTrademark:function(){var t=this,e="";this.connection.service_id&&(e=this.services.find((function(e){return e.id===t.connection.service_id})).trademark_default);this.$set(this.connection,"trademark",e)},setPrice:function(){var t=this,e="";this.connection.service_id&&(e=this.services.find((function(e){return e.id===t.connection.service_id})).price);this.$set(this.connection,"price",e)}},computed:{services:function(){return this.$store.getters[l.a.NORMAL_SERVICES]},correctDate:function(){var t=this.connection.date_start;return t?t=(t=t.toString()).split("-").reverse().join("."):null}}},p=(n(79),n(2)),h=Object(p.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v("Подключение новой услуги")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"modal-text"},[t.loading?t._e():n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-select",{attrs:{label:"Услуга",rules:t.serviceRules,items:t.services,"item-text":"name","item-value":"id"},on:{change:t.setData},model:{value:t.connection.service_id,callback:function(e){t.$set(t.connection,"service_id",e)},expression:"connection.service_id"}}),t._v(" "),n("v-text-field",{attrs:{label:"Торговое наименование"},model:{value:t.connection.trademark,callback:function(e){t.$set(t.connection,"trademark",e)},expression:"connection.trademark"}}),t._v(" "),n("v-text-field",{attrs:{label:"Адрес"},model:{value:t.connection.address,callback:function(e){t.$set(t.connection,"address",e)},expression:"connection.address"}}),t._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"## ## ##",expression:"'## ## ##'"}],attrs:{label:"Лицевой счет",rules:t.personalAccountRules,"error-messages":t.errorMessage},on:{blur:t.checkDuplicates},model:{value:t.connection.personal_account,callback:function(e){t.$set(t.connection,"personal_account",e)},expression:"connection.personal_account"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",prefix:"₸",label:"Тариф"},model:{value:t.connection.price,callback:function(e){t.$set(t.connection,"price",e)},expression:"connection.price"}}),t._v(" "),n("v-dialog",{ref:"dialog",attrs:{"return-value":t.connection.date_start,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.connection,"date_start",e)},"update:return-value":function(e){return t.$set(t.connection,"date_start",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-text-field",t._g({attrs:{label:"Дата начала",readonly:""},model:{value:t.correctDate,callback:function(e){t.correctDate=e},expression:"correctDate"}},i))]}}],null,!1,1413910340),model:{value:t.calendarModal,callback:function(e){t.calendarModal=e},expression:"calendarModal"}},[t._v(" "),n("v-date-picker",{attrs:{locale:"ru","first-day-of-week":"1",scrollable:""},model:{value:t.connection.date_start,callback:function(e){t.$set(t.connection,"date_start",e)},expression:"connection.date_start"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.calendarModal=!1}}},[t._v("Отмена")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.connection.date_start)}}},[t._v("OK")])],1)],1),t._v(" "),n("v-text-field",{attrs:{prefix:"₸",type:"number",label:"Стоимость на месяц"},model:{value:t.connection.month_price,callback:function(e){t.$set(t.connection,"month_price",t._n(e))},expression:"connection.month_price"}})],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:t.loading,color:"green",absolute:"",bottom:""}}),t._v(" "),t.loading?t._e():n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("cancel")}}},[t._v("Отмена")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"success",disabled:!t.valid},on:{click:t.connectService}},[t._v("Подключить")])],1)],1)],1)}),[],!1,null,"71dc1e6d",null).exports,f=n(147),_=n(12),m=n(4),x=n(11);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C={components:{MessageModal:o.a,ConnectServiceModal:h,VTextField:f.a,ConfirmationModal:s.a},data:function(){return{connectKey:0,dummy:Date.now(),deleteModal:!1,valid:!0,connectModal:!1,showSendModal:!1,editMode:!1,newPhoto:"",nameRules:[function(t){return!!t||"Требуется ввести контрагента"}],phoneRules:[function(t){return!!t||"Требуется ввести телефон"}]}},computed:{phoneInputs:function(){if(0===this.client.phones.length)return[{component:f.a}];var t=[];return this.client.phones.forEach((function(e){t.push({component:f.a})})),t}},props:{client:{type:Object,required:!0},subjects:{type:Array,required:!0}},methods:{toggleEdit:function(){this.editMode=!0,this.$emit("editToggled",{})},saveUser:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.client.phones=this.client.phones.filter((function(t){return!!t})).map((function(t){return t.replaceAll("-","")})),t.next=3,a.a.awrap(this.$store.dispatch(u.a.EDIT_CLIENT,{client:this.client,newPhoto:this.newPhoto}));case 3:this.newPhoto="",this.editMode=!1,this.$emit("saveToggled",this.user);case 6:case"end":return t.stop()}}),null,this)},showConnectModal:function(){this.connectModal=!0},closeConnectModal:function(){this.connectKey++,this.connectModal=!1},onConnectModal:function(){this.connectKey++,this.connectModal=!1,Object(m.a)("Услуга была успешно подключена")},closeModal:function(){this.showSendModal=!1},deleteClient:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(this.$store.dispatch(u.a.DELETE_CLIENT,this.client.id));case 2:return t.next=4,a.a.awrap(this.$router.push("/"));case 4:case"end":return t.stop()}}),null,this)},editUser:function(){this.editMode?(this.phoneInputs=[],this.saveUser()):this.toggleEdit()},addPhoneInput:function(){this.client.phones.push("")},choosePhoto:function(){this.$refs.photoInput.click()},uploadPhoto:function(t){var e,n;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=t.target.files[0],i.next=3,a.a.awrap(Object(_.a)(e));case 3:n=i.sent,this.newPhoto=n.data;case 5:case"end":return i.stop()}}),null,this)},sendMessage:function(t){var e,n;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=y({},t,{client_id:this.client.id,user_id:1}),i.next=3,a.a.awrap(Object(x.j)(e));case 3:n=i.sent,console.log(n),this.showSendModal=!1,Object(m.a)("Сообщение отправлено");case 7:case"end":return i.stop()}}),null,this)},showPushModal:function(){this.client.push_token?this.showSendModal=!0:Object(m.a)("Данный клиент не установил мобильное приложение: отправка пуш-уведомления невозможна","Ошибка","warning")}}},M=(n(81),Object(p.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{col:"4"}},[n("div",{staticClass:"d-flex"},[n("p",[n("span",{staticClass:"font-weight-black"},[t._v("СПО: ")]),t._v(" "),t.editMode?t._e():n("span",[t._v(t._s(t.client.type))])]),t._v(" "),t.editMode?n("v-select",{staticClass:"subject__select",attrs:{items:t.subjects,"item-text":"type","item-value":"id"},model:{value:t.client.client_type,callback:function(e){t.$set(t.client,"client_type",e)},expression:"client.client_type"}}):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("p",[n("span",{staticClass:"font-weight-black"},[t._v("Контрагент: ")]),t._v(" "),t.editMode?t._e():n("span",[t._v(t._s(t.client.name))])]),t._v(" "),t.editMode?n("v-text-field",{staticClass:"subject__select",attrs:{rules:t.nameRules},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}}):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("p",[n("span",{staticClass:"font-weight-black"},[t._v("Телефон:")])]),t._v(" "),n("p",{staticClass:"ml-2"},t._l(t.client.phones,(function(e,i){return t.editMode?t._e():n("span",{key:i},[t._v("\n                        "+t._s(e)),n("br")])})),0),t._v(" "),t.editMode?n("div",[t._l(t.phoneInputs,(function(e,i){return n(e.component,{directives:[{name:"mask",rawName:"v-mask",value:"#-###-###-##-##",expression:"'#-###-###-##-##'"}],key:i,tag:"component",staticClass:"subject__select",attrs:{rules:t.phoneRules,label:"Телефон","append-outer-icon":"mdi-plus"},on:{"click:append-outer":t.addPhoneInput},model:{value:t.client.phones[i],callback:function(e){t.$set(t.client.phones,i,e)},expression:"client.phones[index]"}})})),t._v(" "),t.phoneInputs.length>1?n("v-btn",{staticClass:"ml-2",attrs:{color:"primary"},on:{click:function(e){return t.client.phones.pop()}}},[t._v("\n                            Удалить поле\n                            "),n("v-icon",[t._v("mdi-delete")])],1):t._e()],2):t._e()]),t._v(" "),n("div",{staticClass:"d-flex"},[n("p",[n("span",{staticClass:"font-weight-black"},[t._v("Комментарий: ")]),t._v(" "),t.editMode?t._e():n("span",[t._v(t._s(t.client.comment))])]),t._v(" "),t.editMode?n("v-textarea",{staticClass:"subject__select",attrs:{"auto-grow":""},model:{value:t.client.comment,callback:function(e){t.$set(t.client,"comment",e)},expression:"client.comment"}}):t._e()],1)]),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-row",{attrs:{justify:"center"}},[n("div",[t.newPhoto||t.client.photo?n("v-avatar",{attrs:{size:"200",tile:""}},[n("v-img",{directives:[{name:"show",rawName:"v-show",value:!t.newPhoto,expression:"!newPhoto"}],attrs:{src:"../storage/"+t.client.photo+"?"+t.dummy,alt:"аватар",contain:""}}),t._v(" "),n("v-img",{directives:[{name:"show",rawName:"v-show",value:t.newPhoto,expression:"newPhoto"}],attrs:{src:"../storage/"+t.newPhoto+"?"+t.dummy,alt:"аватар",contain:""}})],1):t._e(),t._v(" "),n("div",[n("input",{ref:"photoInput",staticClass:"d-none",attrs:{type:"file",name:"photo"},on:{change:t.uploadPhoto}}),t._v(" "),t.editMode?n("v-btn",{staticClass:"change-photo",attrs:{block:"",color:"primary"},on:{click:t.choosePhoto}},[t._v("\n                                Сменить фото\n                            ")]):t._e()],1)],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("div",{staticClass:"button-container"},[n("v-btn",{attrs:{block:"",color:t.editMode?"success":"primary",disabled:!t.valid},on:{click:t.editUser}},[t.editMode?n("span",[t._v("Сохранить")]):n("span",[t._v("Редактировать")]),t._v(" "),t.editMode?n("v-icon",[t._v("mdi-check")]):t._e()],1),t._v(" "),t.editMode?n("v-btn",{staticClass:"mt-5",attrs:{block:"",color:"red darken-2"},on:{click:function(e){t.deleteModal=!0}}},[n("span",{staticClass:"white--text"},[t._v("\n                            Удалить клиента\n                            "),n("v-icon",[t._v("mdi-delete")])],1)]):t._e()],1),t._v(" "),t.editMode?t._e():n("div",{staticClass:"button-container"},[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.showConnectModal}},[t._v("Новая услуга")])],1),t._v(" "),t.editMode?t._e():n("div",{staticClass:"button-container"},[n("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.showPushModal}},[t._v("Отправить пуш")])],1)]),t._v(" "),n("message-modal",{attrs:{state:t.showSendModal,title:"Отправка пуш-уведомления"},on:{sendMessage:t.sendMessage,modalClosed:t.closeModal}}),t._v(" "),n("ConnectServiceModal",{key:t.connectKey,attrs:{state:t.connectModal},on:{cancel:t.closeConnectModal,connect:t.onConnectModal}}),t._v(" "),n("ConfirmationModal",{attrs:{state:t.deleteModal,message:"Вы действительно хотите удалить клиента "+t.client.name+"?"},on:{cancel:function(e){t.deleteModal=!1},confirm:t.deleteClient}})],1)],1)],1)}),[],!1,null,"78022c50",null).exports),w={data:function(){return{valid:!0,newService:!1,service_id:-1,name:"",price:null}},computed:{getName:function(){var t=this;return this.services.find((function(e){return t.service_id===e.id})).name},services:function(){return this.$store.getters[l.a.TEMP_SERVICES](this.service)}},props:{service:{type:Number,default:0},connection:{type:Number,default:0},state:{type:Boolean,default:!0}},methods:{setPrice:function(){var t=this;-1!==this.service_id&&this.services.length||(this.price=null),this.price=this.services.find((function(e){return t.service_id===e.id})).price},onClose:function(){this.$emit("onClose")},saleService:function(){var t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:this.name||this.getName,price:+this.price,connection_id:this.connection},e.next=3,a.a.awrap(this.$store.dispatch(u.a.SALE,t));case 3:this.$emit("onSale");case 4:case"end":return e.stop()}}),null,this)}}},k=Object(p.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v("Подключение разовой услуги")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onClose}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"pt-5"},[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t.services.length?n("div",[t.newService?t._e():n("v-select",{attrs:{label:"Разовая услуга",items:t.services,rules:[function(t){return!!t||"Выберите услугу"}],"item-text":"name","item-value":"id"},on:{change:t.setPrice},model:{value:t.service_id,callback:function(e){t.service_id=e},expression:"service_id"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Услуга не из списка"},model:{value:t.newService,callback:function(e){t.newService=e},expression:"newService"}})],1):t._e(),t._v(" "),!t.services.length||t.newService?n("v-text-field",{attrs:{rules:[function(t){return!!t||"Введите наименование услуги"}],label:"Разовая услуга"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}):t._e(),t._v(" "),n("v-text-field",{attrs:{type:"number",label:"Стоимость",rules:[function(t){return!!t||"Введите стоимость услуги"}]},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onClose}},[t._v("Отмена")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"success",disabled:!t.valid},on:{click:t.saleService}},[t._v("\n                Начислить\n                "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"6bbd352e",null).exports,S=n(18),$={data:function(){return{paymentsSegment:!0,history:null,sum:0,historySegment:!1,totalSum:null,filter:0,dateFilters:[{text:"За последние полгода",value:0},{text:"За последний год",value:1},{text:"За все время",value:2}]}},computed:{payments:function(){var t=this.history.payments,e=null;return 0===this.filter?(e=r()().subtract(6,"months"),console.log(e),t.filter((function(t){var n=r()(t.created_at);return r()(n).isAfter(r()(e))||r()(n).isSame(r()(e),"day")}))):1===this.filter?(e=r()().subtract(1,"year"),console.log(e),t.filter((function(t){var n=r()(t.created_at);return r()(n).isAfter(r()(e))||r()(n).isSame(r()(e),"day")}))):this.history.payments},transactions:function(){var t=null,e=this.history.transactions;return 0===this.filter?(t=r()().subtract(6,"months"),console.log(t),e.filter((function(e){var n=r()(e.created_at);return r()(n).isAfter(r()(t))||r()(n).isSame(r()(t),"day")}))):1===this.filter?(t=r()().subtract(1,"year"),e.filter((function(e){var n=r()(e.created_at);return r()(n).isAfter(r()(t))||r()(n).isSame(r()(t),"day")}))):this.history.transactions}},filters:{positive:function(t){return t<0?-1*t:t}},props:{state:{type:Boolean,default:!0},connection:{type:Number,default:0}},methods:{showPayments:function(){this.paymentsSegment=!0,this.historySegment=!1},showHistory:function(){this.paymentsSegment=!1,this.historySegment=!0}},mounted:function(){var t=this;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.connection){e.next=7;break}return e.next=3,a.a.awrap(Object(d.j)(this.connection));case 3:this.history=e.sent,this.sum=this.history.sum,this.history.payments=this.history.payments.map((function(e){t.sum-e.price>0?e.paid=e.price:e.paid=t.sum,t.sum<=0&&(e.paid=0),t.sum-=e.paid;var n=r()(e.created_at).format("MM");return e.month=S.a[n-1],e})).reverse(),this.history.transactions=this.history.transaction.map((function(t){return t.date=r()(t.created_at).format("DD.MM.YYYY"),t})).reverse();case 7:case"end":return e.stop()}}),null,this)}},j=Object(p.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v("История баланса")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:function(e){return t.$emit("closeModal")}}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"pt-2"},[t.history?n("div",[n("v-flex",[n("v-btn",{attrs:{depressed:"",text:!t.paymentsSegment,color:t.paymentsSegment?"primary":"default"},on:{click:t.showPayments}},[t._v("\n                        Начисления\n                    ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",text:!t.historySegment,color:t.history?"primary":"default"},on:{click:t.showHistory}},[t._v("\n                        История\n                    ")])],1),t._v(" "),n("div",{staticClass:"d-flex justify-content-between p-2"},[n("h3",[n("b",[t._v("Лицевой счет: ")]),t._v(" "+t._s(t._f("account_pipe")(this.history.personal_account))+" ")]),t._v(" "),n("div",[n("h4",[t._v("Фильтр")]),t._v(" "),n("v-select",{staticStyle:{"max-width":"250px"},attrs:{items:t.dateFilters,"item-text":"text","item-value":"value"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)]),t._v(" "),t.paymentsSegment?n("div",{staticClass:"payments-block p-2"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Начисление")]),t._v(" "),n("th",[t._v("Оплата")])])]),t._v(" "),n("tbody",t._l(t.payments,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.month)+"'"+t._s(e.price)+" "),e.sale?n("span",[t._v("("+t._s(e.sale)+")")]):t._e()]),t._v(" "),n("td",[t._v(t._s(e.paid))])])})),0)]},proxy:!0}],null,!1,3115217924)})],1):t._e(),t._v(" "),t.historySegment?n("div",{staticClass:"history-block"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Дата")]),t._v(" "),n("th",[t._v("Тип")]),t._v(" "),n("th",[t._v("Кассир")]),t._v(" "),n("th",[t._v("Сумма")]),t._v(" "),n("th",[t._v("Основание")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[e.balance<0?n("span",[t._v("Списание")]):n("span",[t._v("Пополнение")])]),t._v(" "),n("td",[t._v("Кассир")]),t._v(" "),n("td",[t._v(t._s(t._f("positive")(e.balance)))]),t._v(" "),n("td",[e.sale?n("span",[t._v(t._s(e.sale))]):n("span",[t._v("Абонентская плата")])])])})),0)]},proxy:!0}],null,!1,781557431)})],1):t._e()],1):n("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"min-height":"400px"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1)])],1)],1)}),[],!1,null,"3ced9f67",null).exports,E={beforeRouteLeave:function(t,e,n){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(this.$store.dispatch(u.a.CLEAR_CLIENT));case 2:n();case 3:case"end":return t.stop()}}),null,this)},components:{ClientBio:M,ConfirmationModal:s.a,OneTimeServiceModal:k,HistoryModal:j},filters:{accountPipe:function(t){var e=t;e=e.split("");var n="";return e.forEach((function(t,e){n+=t,e%2!=0&&(n+=" ")})),n}},created:function(){var t=this.$route.params.userId;this.$store.dispatch(u.a.GET_CLIENT,t)},computed:{client:function(){return this.$store.getters[l.a.CLIENT]},subjects:function(){return this.$store.getters.getSubjects}},data:function(){return{tempModalKey:0,editingConnection:null,editConnectionMode:!1,service_id:null,historyModalKey:0,connection_id:null,historyModal:!1,balance:null,oneTimeServiceModal:!1,showConfirmationModal:!1,connectModal:!1,disconnectModal:!1,deleteModal:!1,modalMessage:"",paymentMode:!1,editMode:!1,destroy:!1}},methods:{showTempServiceModal:function(t){this.oneTimeServiceModal=!0,this.connection_id=t.id,this.service_id=t.service_id},onEdit:function(){this.editMode=!0},onSave:function(t){this.editMode=!1},onSale:function(){Object(m.a)("Разовая услуга успешно продана!"),this.oneTimeServiceModal=!1,this.tempModalKey++},triggerBalanceField:function(t){this.client.connections=this.client.connections.map((function(e){return e.id===t.id&&(e.paymentMode=!0),e}))},cancelBalance:function(t){return this.balance=null,this.client.connections=this.client.connections.map((function(e){return e.id===t.id&&(e.paymentMode=!1),e})),0},addBalance:function(t){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.balance<1)){e.next=4;break}return Object(m.a)("Введенное число должно быть больше 0!","","warning"),this.client.connections=this.client.connections.map((function(e){return e.id===t.id&&(e.paymentMode=!1),e})),e.abrupt("return");case 4:return e.next=6,a.a.awrap(this.$store.dispatch(u.a.ADD_BALANCE,{id:t.id,balance:this.balance}));case 6:this.balance=null,this.client.connections=this.client.connections.map((function(e){return e.id===t.id&&(e.paymentMode=!1),e}));case 8:case"end":return e.stop()}}),null,this)},showDisconnectModal:function(t){this.connection_id=t.id,this.showConfirmationModalFunction("Вы действительно хотите отключить выбранную услугу?"),this.disconnectModal=!0},showHistoryModal:function(t){this.connection_id=t.id,this.historyModalKey++,this.historyModal=!0},showDeleteModal:function(t){this.connection_id=t.id,this.showConfirmationModalFunction("Вы действительно хотите удалить выбранную услугу?"),this.deleteModal=!0},showConnectModal:function(t){this.connection_id=t.id,this.showConfirmationModalFunction("Вы действительно хотите подключить выбранную услугу?"),this.connectModal=!0},showPaymentModal:function(t){this.showConfirmationModalFunction("Вы действительно хотите оплатить выбранную услугу?")},showConfirmationModalFunction:function(t){this.modalMessage=t},disconnectService:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(this.$store.dispatch(u.a.DISCONNECT,this.connection_id));case 2:this.disconnectModal=!1,this.connection_id=null;case 4:case"end":return t.stop()}}),null,this)},connectService:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(this.$store.dispatch(u.a.CONNECT,this.connection_id));case 2:this.connectModal=!1,this.connection_id=null;case 4:case"end":return t.stop()}}),null,this)},deleteService:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.deleteModal=!1,t.next=3,a.a.awrap(this.$store.dispatch(u.a.DELETE_CONNECTION,this.connection_id));case 3:this.connection_id=null;case 4:case"end":return t.stop()}}),null,this)},enableEditMode:function(t){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.editConnectionMode=!0,this.editingConnection=t;case 2:case"end":return e.stop()}}),null,this)},editConnection:function(){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(this.$store.dispatch(u.a.EDIT_CONNECTION,{id:this.editingConnection.id,trademark:this.editingConnection.trademark,personal_account:this.editingConnection.personal_account,price:this.editingConnection.price,address:this.editingConnection.address}));case 2:this.editConnectionMode=!1,this.editingConnection=null;case 4:case"end":return t.stop()}}),null,this)},onEditClick:function(t){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.editConnectionMode?this.editConnection():this.enableEditMode(t);case 1:case"end":return e.stop()}}),null,this)}}},O=(n(83),Object(p.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client-container"},[n("v-card",[n("v-card-title",[t.client?n("span",[t._v("Информация о контрагенте")]):n("span",[t._v("Пожалуйста, подождите...")])]),t._v(" "),n("v-card-text",[t.client?n("div",[n("client-bio",{attrs:{client:t.client,subjects:t.subjects},on:{editToggled:t.onEdit,saveToggled:t.onSave}}),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Торговое наименование")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Адрес")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Тариф")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Лицевой счет")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Баланс")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Действие")])])]),t._v(" "),t.client.connections.length?t._e():n("div",{staticClass:"d-flex-align-center justify-content-center p-3 w-100"},[n("h2",[t._v("Нет подключенных услуг")])]),t._v(" "),t.client.connections.length?n("tbody",t._l(t.client.connections,(function(e){return t.editConnectionMode&&t.editingConnection.id!==e.id?t._e():n("tr",{key:e.id,class:{deactivated:!e.is_active}},[n("td",{staticClass:"d-flex justify-content-between",staticStyle:{"padding-top":"5px"}},[t.editConnectionMode&&t.editingConnection.id===e.id?n("v-text-field",{staticStyle:{"padding-top":"0"},model:{value:t.editingConnection.trademark,callback:function(e){t.$set(t.editingConnection,"trademark",e)},expression:"editingConnection.trademark"}}):t._e(),t._v(" "),t.editConnectionMode?t._e():n("span",{staticClass:"mt-2"},[n("span",[t._v(t._s(e.trademark))])]),t._v(" "),n("v-menu",{staticClass:"menu",attrs:{transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"float-left",attrs:{icon:"",text:""}},i),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[1===e.is_active?n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.showDisconnectModal(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s("Отключить")}})],1):t._e(),t._v(" "),0===e.is_active?n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.showConnectModal(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s("Подключить")}})],1):t._e(),t._v(" "),0===e.is_active?n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.showDeleteModal(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s("Удалить")}})],1):t._e(),t._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.showHistoryModal(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s("История")}})],1),t._v(" "),1===e.is_active?n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.showTempServiceModal(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s("Разовые услуги")}})],1):t._e()],1)],1)],1),t._v(" "),n("td",{staticClass:"text-center"},[t.editConnectionMode&&t.editingConnection.id===e.id?n("v-text-field",{model:{value:t.editingConnection.address,callback:function(e){t.$set(t.editingConnection,"address",e)},expression:"editingConnection.address"}}):t._e(),t._v(" "),t.editConnectionMode?t._e():n("span",[t._v(t._s(e.address))])],1),t._v(" "),n("td",{staticClass:"text-center"},[t.editConnectionMode&&t.editingConnection.id===e.id?n("v-text-field",{model:{value:t.editingConnection.price,callback:function(e){t.$set(t.editingConnection,"price",e)},expression:"editingConnection.price"}}):t._e(),t._v(" "),t.editConnectionMode?t._e():n("span",[t._v(t._s(e.price))])],1),t._v(" "),n("td",{staticClass:"text-center"},[t.editConnectionMode&&t.editingConnection.id===e.id?n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"## ## ##",expression:"'## ## ##'"}],model:{value:t.editingConnection.personal_account,callback:function(e){t.$set(t.editingConnection,"personal_account",e)},expression:"editingConnection.personal_account"}}):t._e(),t._v(" "),t.editConnectionMode?t._e():n("span",[t._v(t._s(t._f("account_pipe")(e.personal_account)))])],1),t._v(" "),n("td",{staticClass:"text-center"},[e.paymentMode?n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"########",expression:"'########'"}],attrs:{type:"number"},model:{value:t.balance,callback:function(e){t.balance=e},expression:"balance"}}):n("span",[t._v(t._s(e.balance))])],1),t._v(" "),n("td",{staticClass:"text-center d-flex align-items-center justify-content-center"},[t.editConnectionMode?t._e():n("div",[e.paymentMode?n("div",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.cancelBalance(e)}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary",disabled:!e.is_active},on:{click:function(n){return t.addBalance(e)}}},[t._v("\n                                                Оплатить услугу\n                                            ")])],1):n("v-btn",{attrs:{color:"primary",disabled:!e.is_active},on:{click:function(n){return t.triggerBalanceField(e)}}},[t._v("\n                                            Оплатить услугу\n                                        ")])],1),t._v(" "),n("v-btn",{staticClass:"ml-1",attrs:{icon:"",disabled:!e.is_active},on:{click:function(n){return t.onEditClick(e)}}},[t.editConnectionMode?n("v-icon",[t._v("mdi-check")]):n("v-icon",[t._v("mdi-pencil")])],1)],1)])})),0):t._e()]},proxy:!0}])})],1)],1):n("div",{staticClass:"text-center d-flex align-items-center justify-content-center",staticStyle:{"min-height":"500px"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1)]),t._v(" "),n("ConfirmationModal",{attrs:{message:t.modalMessage,state:t.connectModal},on:{cancel:function(e){t.connectModal=!1},confirm:t.connectService}}),t._v(" "),n("ConfirmationModal",{attrs:{message:t.modalMessage,state:t.disconnectModal},on:{cancel:function(e){t.disconnectModal=!1},confirm:t.disconnectService}}),t._v(" "),n("ConfirmationModal",{attrs:{message:t.modalMessage,state:t.deleteModal},on:{confirm:t.deleteService,cancel:function(e){t.deleteModal=!1}}}),t._v(" "),n("OneTimeServiceModal",{key:t.tempModalKey+78797897,attrs:{service:t.service_id,connection:t.connection_id,state:t.oneTimeServiceModal},on:{onSale:t.onSale,onClose:function(e){t.oneTimeServiceModal=!1,t.tempModalKey++}}}),t._v(" "),n("HistoryModal",{key:t.historyModalKey,attrs:{connection:t.connection_id,state:t.historyModal},on:{closeModal:function(e){t.historyModal=!1}}})],1)],1)}),[],!1,null,"7cf3c3d9",null));e.default=O.exports}}]);