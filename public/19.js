(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{xH17:function(t,e,s){"use strict";s.r(e);var n=s("o0o1"),a=s.n(n);function i(t,e,s,n,a,i,r){try{var c=t[i](r),o=c.value}catch(t){return void s(t)}c.done?e(o):Promise.resolve(o).then(n,a)}function r(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var r=t.apply(e,s);function c(t){i(r,n,a,c,o,"next",t)}function o(t){i(r,n,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{settings:{}}},methods:{updateSettings:function(){var t=this;return r(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updateReferralSettings",t.settings);case 2:case"end":return e.stop()}}),e)})))()}},computed:{REFERRAL_SETTING:function(){return this.$store.getters.REFERRAL_SETTINGS}},watch:{REFERRAL_SETTING:function(t){this.settings=JSON.parse(JSON.stringify(t))}},created:function(){var t=this;return r(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getReferralSettings");case 2:case"end":return e.stop()}}),e)})))()}},o=s("KHd+"),u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",[s("v-card-title",[t._v("\n            Настройки реферральной системы\n        ")]),t._v(" "),s("v-card-text",[s("div",{staticClass:"p-3"},[s("div",{staticClass:"d-flex justify-content-end mb-3"}),t._v(" "),s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",[t._v("Шаблон сообщения")]),t._v(" "),s("th",[t._v("Базовая ссылка")]),t._v(" "),s("th",[t._v("Скидка")]),t._v(" "),s("th",[t._v("Подарочные бонусы")]),t._v(" "),s("th",[t._v("Шифровать ссылку?")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("v-text-field",{attrs:{type:"text"},model:{value:t.settings.message_template,callback:function(e){t.$set(t.settings,"message_template",e)},expression:"settings.message_template"}})],1),t._v(" "),s("td",[s("v-text-field",{attrs:{type:"text"},model:{value:t.settings.base_url,callback:function(e){t.$set(t.settings,"base_url",e)},expression:"settings.base_url"}})],1),t._v(" "),s("td",[s("v-text-field",{attrs:{type:"number"},model:{value:t.settings.discount,callback:function(e){t.$set(t.settings,"discount",e)},expression:"settings.discount"}})],1),t._v(" "),s("td",[s("v-text-field",{attrs:{type:"number"},model:{value:t.settings.cashback,callback:function(e){t.$set(t.settings,"cashback",e)},expression:"settings.cashback"}})],1),t._v(" "),s("td",{staticClass:"d-flex justify-content-center"},[s("v-checkbox",{model:{value:t.settings.hash_ref,callback:function(e){t.$set(t.settings,"hash_ref",e)},expression:"settings.hash_ref"}})],1)])])]},proxy:!0}])}),t._v(" "),s("div",{staticClass:"d-flex justify-content-end"},[s("v-btn",{staticClass:"my-5 text-left",attrs:{color:"success"},on:{click:t.updateSettings}},[t._v("\n                        Сохранить "),s("v-icon",[t._v("mdi-check")])],1)],1)],1)])],1)],1)}),[],!1,null,"b5febdd2",null);e.default=u.exports}}]);