(this["webpackJsonptask-timer-app"]=this["webpackJsonptask-timer-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return d}));var a="CHANGE_TIMER",r="GET_TASK_NAME",i="CHANGE_SECONDS",o="RESET_COUNT",u="REMOVE_ITEM",c=function(){return{type:a}},s=function(e){return{type:r,payload:e}},l=function(){return{type:i}},m=function(){return{type:o}},d=function(e){return{type:u,payload:e}}},49:function(e,t,n){"use strict";(function(e){var a=n(34),r=n(35),i=n(39),o=n(38),u=n(0),c=n.n(u),s=n(15),l=n(13),m=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"componentDidMount",value:function(){this.props.changeSecondsCount()}},{key:"render",value:function(){var t=this.props,n=t.isTimerWorking,a=t.seconds,r=t.changeSecondsCount,i=t.resetCount;n?setTimeout((function(){return r()}),1e3):a&&e((function(){return i()}));var o=parseInt(parseInt(a)/60),u=parseInt(a)%60;return c.a.createElement("div",{id:"clock"},o<10?"0".concat(o):o,":",u<10?"0".concat(u):u)}}]),u}(c.a.Component),d={changeSecondsCount:l.f,resetCount:l.j};t.a=Object(s.b)((function(e){return{isTimerWorking:e.isTimerWorking,seconds:e.seconds}}),d)(m)}).call(this,n(66).setImmediate)},56:function(e,t,n){e.exports=n(70)},61:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(7),u=n.n(o),c=(n(61),n(44)),s=n(18),l=n(13);a=localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):{isTimerWorking:!1,attentionBanner:!1,seconds:0,startTime:{hours:null,minutes:null},startMoment:null,taskNameInput:"",doneTasks:[]};var m=n(33),d=n(15),p=n(26),E=n(10),T=n(34),h=n(35),f=n(39),k=n(38),b=n(49),g=n(101),v={changeTimer:l.g,inputTaskName:l.h},O=Object(d.b)((function(e){return{isTimerWorking:e.isTimerWorking,attentionBanner:e.attentionBanner,taskNameInput:e.taskNameInput}}),v)((function(e){var t=e.isTimerWorking,n=e.attentionBanner,a=e.taskNameInput,r=e.changeTimer,o=e.inputTaskName;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"inputTaskTrue"},i.a.createElement("form",{onSubmit:r},i.a.createElement(g.a,{id:"standard-basic",label:"Enter task name",value:a,onChange:function(e){return o(e.target.value)},disabled:t}))),n?i.a.createElement("div",{id:"attentionBanner"},"Enter your task name!"):null)})),j=n(102),N=function(e){var t=e.action;return i.a.createElement("div",{id:"task-btn"},i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:t},"Start/Stop"))},y={removeItem:l.i},I=Object(d.b)(null,y)((function(e){var t=e.id,n=e.removeItem;return i.a.createElement("button",{className:"removeButton",onClick:function(){return n(t)}},"\xd7")})),S=function(e){var t=e.data;return i.a.createElement("table",{style:t.length?{}:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",{className:"headRow"},i.a.createElement("th",null,"\u2116"),i.a.createElement("th",null,"Id"),i.a.createElement("th",null,"Task name"),i.a.createElement("th",null,"Start time"),i.a.createElement("th",null,"Stop time"),i.a.createElement("th",null,"Duration"))),i.a.createElement("tbody",null,t.map((function(e){return i.a.createElement("tr",{key:e.id,className:"hoverRows"},i.a.createElement("td",null,t.indexOf(e)+1),i.a.createElement("td",null,e.id),i.a.createElement("td",null,i.a.createElement("div",{className:"wrapperTableItem"},i.a.createElement(p.b,{className:"itemRoute",to:"/id".concat(e.id)},e.name),i.a.createElement(I,{id:e.id}))),i.a.createElement("td",null,e.startTime.hours<10?"0".concat(e.startTime.hours):e.startTime.hours,":",e.startTime.minutes<10?"0".concat(e.startTime.minutes):e.startTime.minutes),i.a.createElement("td",null,e.stopTime.hours<10?"0".concat(e.stopTime.hours):e.stopTime.hours,":",e.stopTime.minutes<10?"0".concat(e.stopTime.minutes):e.stopTime.minutes),i.a.createElement("td",null,e.duration,"s"))}))))},w=function(e){Object(f.a)(n,e);var t=Object(k.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.doneTasks,n=e.changeTimer;return i.a.createElement("div",{id:"wrapper"},i.a.createElement(b.a,null),i.a.createElement(O,null),i.a.createElement(N,{action:n}),i.a.createElement(S,{data:t}))}}]),n}(i.a.Component),W={changeTimer:l.g};window.addEventListener("beforeunload",(function(){return e=B,void localStorage.setItem("redux-store",JSON.stringify(e.getState()));var e}));var C=Object(d.b)((function(e){return{doneTasks:e.doneTasks}}),W)(w),D=Object(d.b)((function(e){return{doneTasks:e.doneTasks}}))((function(e){var t=e.doneTasks,n=e.match.params.id,a=t.find((function(e){return"id".concat(e.id)===n}));return a?i.a.createElement(i.a.Fragment,null,i.a.createElement("table",{className:"tableTrue"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Id"),i.a.createElement("th",null,"Task name"),i.a.createElement("th",null,"Start time"),i.a.createElement("th",null,"Stop time"),i.a.createElement("th",null,"Duration"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,a.id),i.a.createElement("td",null,a.name),i.a.createElement("td",null,a.startTime.hours<10?"0".concat(a.startTime.hours):a.startTime.hours,":",a.startTime.minutes<10?"0".concat(a.startTime.minutes):a.startTime.minutes),i.a.createElement("td",null,a.stopTime.hours<10?"0".concat(a.stopTime.hours):a.stopTime.hours,":",a.stopTime.minutes<10?"0".concat(a.stopTime.minutes):a.stopTime.minutes),i.a.createElement("td",null,a.duration,"s")))),i.a.createElement("div",{class:"return"},i.a.createElement(p.b,{id:"return-to-main",to:"/"},i.a.createElement(j.a,{id:"startStopButton",variant:"contained",color:"primary"},"Back to main page")))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"error"},"404 Not Found :("),i.a.createElement("hr",null))})),M=function(e){var t=e.store;return i.a.createElement(d.a,{store:t},i.a.createElement(p.a,{basename:"/"},i.a.createElement(E.a,{exact:!0,path:"/",component:C}),i.a.createElement(E.a,{path:"/:id",component:D})))};n.d(t,"store",(function(){return B}));var B=Object(m.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:return Object(s.a)(Object(s.a)({},e),{},{isTimerWorking:e.taskNameInput?!e.isTimerWorking:e.isTimerWorking,attentionBanner:!e.taskNameInput,startTime:{hours:e.isTimerWorking?null:(new Date).getHours(),minutes:e.isTimerWorking?null:(new Date).getMinutes()},startMoment:e.isTimerWorking?null:Date.now(),taskNameInput:e.isTimerWorking?"":e.taskNameInput,doneTasks:e.isTimerWorking?[].concat(Object(c.a)(e.doneTasks),[{id:Date.now(),name:e.taskNameInput,startTime:e.startTime,stopTime:{hours:(new Date).getHours(),minutes:(new Date).getMinutes()},duration:((Date.now()-e.startMoment)/1e3).toFixed(1)}]):Object(c.a)(e.doneTasks)});case l.c:return Object(s.a)(Object(s.a)({},e),{},{taskNameInput:t.payload});case l.a:return Object(s.a)(Object(s.a)({},e),{},{seconds:e.startMoment?parseInt((Date.now()-e.startMoment)/1e3):0});case l.e:return Object(s.a)(Object(s.a)({},e),{},{seconds:0});case l.d:return Object(s.a)(Object(s.a)({},e),{},{doneTasks:e.doneTasks.filter((function(e){return e.id!==t.payload}))});default:return e}}));u.a.render(i.a.createElement(M,{store:B}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.75b032b0.chunk.js.map