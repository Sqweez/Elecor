(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{BWKn:function(t,a,e){var r=e("Ftjb");"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,n);r.locals&&(t.exports=r.locals)},CuGy:function(t,a,e){"use strict";var r=e("BWKn");e.n(r).a},Ftjb:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.chart-block[data-v-87d70534] {\n    border: 1px solid #ccc;\n    padding: 20px;\n    max-width: 800px;\n    margin: auto;\n}\n",""])},cyjJ:function(t,a,e){"use strict";e.r(a);var r=e("o0o1"),n=e.n(r),s=e("H8ri"),o=s.b.reactiveProp,c={extends:s.a,mixins:[o],props:["options"],mounted:function(){this.renderChart(this.chartData,{responsive:!0,maintainAspectRatio:!1})}},i=e("wd/R"),l=e.n(i),d=e("BWV3"),u=e("vDqi"),h=e.n(u);function b(t){var a,e,r,s,o;return n.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=t.dateStart,e=t.dateEnd,r="start_date=".concat(a,"&end_date=").concat(e),c.next=4,n.a.awrap(h.a.get("/api/stats?".concat(r)));case 4:return s=c.sent,o=s.data,c.abrupt("return",o);case 7:case"end":return c.stop()}}))}function m(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f={components:{BarChart:c},mounted:function(){this.months=this.parseMonths()},data:function(){return{dataCollection:null,dateStart:null,dateEnd:null,monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],months:[{name:"Текущий месяц"},{name:"Сентябрь, 2019"},{name:"Август, 2019"},{name:"Июль, 2019"},{name:"Июнь, 2019"},{name:"Май, 2019"},{name:"Апрель, 2019"}]}},methods:{getData:function(){var t,a,e;return n.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.dateStart&&this.dateEnd){r.next=3;break}return Object(d.a)("Выберите дату","","warning"),r.abrupt("return");case 3:if(t=l()(this.dateStart).format("YYYY-MM-DD"),a=l()(this.dateEnd).endOf("month").format("YYYY-MM-DD"),!(l()(a).diff(t)<1)){r.next=8;break}return Object(d.a)("Некорректный промежуток дат","","warning"),r.abrupt("return");case 8:return r.next=10,n.a.awrap(b({dateStart:t,dateEnd:a}));case 10:e=r.sent,this.dataCollection={checkoutCash:{labels:m(e.checkoutCash.map((function(t){return t.key}))),datasets:[{label:"Пополнений в кассе",data:m(e.checkoutCash.map((function(t){return t.sum}))),backgroundColor:Array(e.checkoutCash.length).fill("rgba(54, 162, 235, 0.2)"),borderColor:Array(e.checkoutCash.length).fill("rgba(54, 162, 235, 1)"),borderWidth:1}]},debts:{labels:m(e.debts.map((function(t){return t.key}))),datasets:[{label:"Денег в минусе",data:m(e.debts.map((function(t){return t.debt}))),backgroundColor:Array(e.debts.length).fill("rgba(54, 162, 235, 0.2)"),borderColor:Array(e.debts.length).fill("rgba(54, 162, 235, 1)"),borderWidth:1}]},increases:{labels:m(e.increases.map((function(t){return t.key}))),datasets:[{label:"Прирост абонентской платы",data:m(e.increases.map((function(t){return t.sum}))),backgroundColor:Array(e.increases.length).fill("rgba(54, 162, 235, 0.2)"),borderColor:Array(e.increases.length).fill("rgba(54, 162, 235, 1)"),borderWidth:1}]},decreases:{labels:m(e.decreases.map((function(t){return t.key}))),datasets:[{label:"Потери абонентской платы",data:m(e.decreases.map((function(t){return t.sum}))),backgroundColor:Array(e.decreases.length).fill("rgba(54, 162, 235, 0.2)"),borderColor:Array(e.decreases.length).fill("rgba(54, 162, 235, 1)"),borderWidth:1}]}};case 12:case"end":return r.stop()}}),null,this)},parseMonths:function(){for(var t=this,a=l()(),e=l()().subtract(11,"months").clone(),r=[];a>e||e.format("M")===a.format("M");)r.push(e.format("YYYY-MM")),e.add(1,"month");return r.map((function(a){var e=a.split("-"),r=e[0],n=t.monthNames[parseInt(e[1])-1];return{name:"".concat(n,", ").concat(r," г."),value:a+"-01"}})).reverse()},fillData:function(){this.dataCollection={labels:["Июль, 2019","Август, 2019","Сентябрь, 2019","Октябрь, 2019"],datasets:[{label:"Экономические показатели",data:[this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)","rgba(54, 162, 235, 1)","rgba(54, 162, 235, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]}},getRandomInt:function(){return Math.floor(46*Math.random())+5}}},v=(e("CuGy"),e("KHd+")),p=Object(v.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",[e("v-card-title",[t._v("\n            Экономическая статистика\n        ")]),t._v(" "),e("v-card-text",[e("div",{staticClass:"d-flex"},[e("v-select",{staticClass:"mr-5",attrs:{label:"Начало",items:t.months,"item-value":"value","item-text":"name"},model:{value:t.dateStart,callback:function(a){t.dateStart=a},expression:"dateStart"}}),t._v(" "),e("v-select",{staticClass:"ml-5",attrs:{label:"Конец",items:t.months,"item-value":"value","item-text":"name"},model:{value:t.dateEnd,callback:function(a){t.dateEnd=a},expression:"dateEnd"}})],1),t._v(" "),e("v-btn",{attrs:{color:"primary",block:""},on:{click:t.getData}},[t._v("Отобразить статистику")])],1),t._v(" "),t.dataCollection?e("div",[e("div",{staticClass:"chart-block"},[e("h2",{staticClass:"text-center"},[t._v("Пополнений в кассе")]),t._v(" "),e("BarChart",{attrs:{"chart-data":t.dataCollection.checkoutCash}})],1),t._v(" "),e("div",{staticClass:"chart-block"},[e("h2",{staticClass:"text-center"},[t._v("Денег в минусе")]),t._v(" "),e("BarChart",{attrs:{"chart-data":t.dataCollection.debts}})],1),t._v(" "),e("div",{staticClass:"chart-block"},[e("h2",{staticClass:"text-center"},[t._v("Прирост абонентской платы")]),t._v(" "),e("BarChart",{attrs:{"chart-data":t.dataCollection.increases}})],1),t._v(" "),e("div",{staticClass:"chart-block"},[e("h2",{staticClass:"text-center"},[t._v("Потери по абонентской плате")]),t._v(" "),e("BarChart",{attrs:{"chart-data":t.dataCollection.decreases}})],1)]):t._e()],1)],1)}),[],!1,null,"87d70534",null);a.default=p.exports}}]);