(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n.n(o),c=n(10),a=n(7),i=n(5),s=n.n(i),u=n(0),d=(n(20),n(14)),l=n(1),b=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){return f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},h=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},p=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(u.useState)(!0),i=Object(a.a)(r,2),p=i[0],y=i[1],O=Object(u.useCallback)(function(){var t=Object(c.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!1),t.prev=1,t.next=4,e();case 4:n=t.sent,o(n),y(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),y(!0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return O(f)},children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return O(j)},children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return O(h)},children:"Load red goods"}),p?Object(l.jsx)(b,{goods:n}):Object(l.jsx)(d.a,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})]})})};r.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.98067248.chunk.js.map