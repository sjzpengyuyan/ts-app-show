(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{213:function(e,t,n){"use strict";n.r(t);n(98);var r=n(106),c=n.n(r),a=(n(156),n(159)),s=n.n(a),o=n(86),i=n.n(o),l=n(87),p=n(97),u=n(0),j=(n(163),n(165)),b=n.n(j),d=(n(58),n(59)),f=n.n(d),h=n(6),m=function(e){var t=e.title;return Object(h.jsx)(b.a,{mode:"dark",icon:Object(h.jsx)(f.a,{type:"left"}),onLeftClick:function(){return console.log("onLeftClick")},rightContent:[Object(h.jsx)(f.a,{type:"search",style:{marginRight:"16px"}},"0")],children:t})},O=n(166),g=n.n(O),x=[{title:"\u5f85\u5ba1\u6279",key:"todo",picUrl:"https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",selectUrl:"https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"},{title:"\u6211\u53d1\u8d77",key:"category",picUrl:"https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg",selectUrl:"https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg"},{title:"\u5df2\u5ba1\u6279",key:"cart",picUrl:"https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",selectUrl:"https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"},{title:"\u5df2\u6284\u9001",key:"concemed",picUrl:"https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",selectUrl:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"}],y=(n(168),n(170)),v=n.n(y),k=(n(173),n(175)),w=n.n(k),U=(n(176),n(178)),z=n.n(U),S=(n(182),n(184)),C=n.n(S),P=(n(185),n(187)),T=n.n(P),q=n(190),M=n.n(q);M.a.defaults.timeout=5e3,M.a.interceptors.request.use((function(e){return T.a.loading("\u62fc\u547d\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e~",0),e}),(function(e){return T.a.hide(),Promise.reject(e)})),M.a.interceptors.response.use((function(e){return T.a.hide(),e}),(function(e){return T.a.hide(),T.a.info("\u670d\u52a1\u5668\u9519\u8bef\u8bf7\u7a0d\u540e\u91cd\u8bd5~",2),Promise.reject(e)}));var I=function(e){var t=Object(u.useState)(!1),n=Object(p.a)(t,2),r=n[0],c=n[1],a=Object(u.useState)([]),s=Object(p.a)(a,2),o=s[0],j=s[1],b=function(){var t=Object(l.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e.param,M.a.get("api/data?type="+r);case 2:n=t.sent,j(n.data);case 4:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){b()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(v.a,{damping:60,style:{height:document.documentElement.clientHeight-131,overflow:"auto"},distanceToRefresh:25,getScrollContainer:function(){},indicator:{},direction:"up",refreshing:r,onRefresh:function(){c(!0),setTimeout((function(){c(!1)}),1e3)},children:o.map((function(e){return Object(h.jsxs)(w.a,{size:"lg",children:[Object(h.jsx)(C.a,{size:"lg"}),Object(h.jsxs)(z.a,{children:[Object(h.jsx)(z.a.Header,{title:e.current_node,extra:e.flow_name}),Object(h.jsx)(z.a.Body,{children:e.name}),Object(h.jsx)(z.a.Footer,{content:e.start_handler,extra:e.time})]}),Object(h.jsx)(C.a,{size:"lg"})]},e.id)}))})})};t.default=function(){var e=Object(u.useState)("todo"),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)("\u5f85\u5ba1\u6279\u6d41\u7a0b"),o=Object(p.a)(a,2),j=o[0],b=o[1],d=Object(u.useState)({}),f=Object(p.a)(d,2),O=f[0],y=f[1],v=Object(u.useState)("\u6682\u65f6\u65e0\u6cd5\u83b7\u53d6\u4f4d\u7f6e\u4fe1\u606f"),k=Object(p.a)(v,2),w=k[0],U=k[1];Object(u.useEffect)((function(){S()}),[]);var z,S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.sessionStorage.getItem("position")){e.next=3;break}return e.abrupt("return");case 3:return n=JSON.parse(t),U(n.city),console.log(),e.next=8,c=n.lng+","+n.lat,M.a.get("now?location=".concat(c,"&key=00e4a28d1a1b4432a3e3769ce70afa0e"));case 8:r=e.sent,y(r.data.now);case 10:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{title:j}),Object(h.jsxs)(s.a,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}},children:[(z=O.obsTime,g()(z).format("YYYY\u5e74MM\u6708DD\u65e5")),"\uff0c",w,"\uff0c\u5929\u6c14\uff1a",O.text,"\uff0c\u6e29\u5ea6\uff1a",O.temp,"\xb0\uff0c\u4f53\u611f\u6e29\u5ea6\uff1a",O.feelsLike,"\xb0"]}),Object(h.jsx)(c.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:!1,tabBarPosition:"top",prerenderingSiblingsNumber:0,children:x.map((function(e){return Object(h.jsx)(c.a.Item,{title:e.title,icon:Object(h.jsx)("div",{style:{width:"22px",height:"22px",background:"url(".concat(e.picUrl,") center center /  21px 21px no-repeat")}}),selectedIcon:Object(h.jsx)("div",{style:{width:"22px",height:"22px",background:"url(".concat(e.selectUrl,") center center /  21px 21px no-repeat")}}),selected:n===e.key,onPress:function(){!function(e,t){b(t+"\u6d41\u7a0b"),r(e)}(e.key,e.title)},children:Object(h.jsx)(I,{param:e.key})},e.key)}))})]})}}}]);
//# sourceMappingURL=4.0c6208b6.chunk.js.map