(this["webpackJsonpsherlock-web"]=this["webpackJsonpsherlock-web"]||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(59),i=t.n(c),o=(t(69),t(13)),l=t(29),u=t(14),m=(t(70),t(24)),s=t(26);t(95);function p(){var e=Object(o.a)(["\n  margin-top: 100px;\n"]);return p=function(){return e},e}function d(){var e=Object(o.a)(["\n  margin-top: 100px;\n"]);return d=function(){return e},e}function g(){var e=Object(o.a)(["\n  width: 80%;\n  margin: auto;\n  margin-top: 100px;\n"]);return g=function(){return e},e}function E(){var e=Object(o.a)(["\n  width: 60%;\n  height: 100%;\n  background-color: #868686;\n  margin: auto;\n  padding-top: 50px;\n  padding-bottom: 300px;\n"]);return E=function(){return e},e}function h(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  text-align: center;\n"]);return h=function(){return e},e}var f,v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"~~~\u30c8\u30e2\u30eb\u30de\u6c0f\u306e\u79d8\u5bc6~~~"))},b=function(e){return r.a.createElement(j,{key:e.url},r.a.createElement("h2",null,e.title),r.a.createElement(m.Player,{playsInline:!0,fluid:!0,aspectRatio:"16:9"},r.a.createElement(m.BigPlayButton,{position:"center"}),r.a.createElement("source",{src:e.url})))};!function(e){e[e.Opening=0]="Opening",e[e.HappyEnding=1]="HappyEnding",e[e.BadEnding=2]="BadEnding"}(f||(f={}));var w=function(e){var n=Object(a.useState)(""),t=Object(l.a)(n,2),c=t[0],i=t[1];return r.a.createElement(x,null,r.a.createElement("h3",null,"\u30c8\u30e2\u30eb\u30de\u6c0f\u306e\u79d8\u5bc6\u300cXX\u306e\u6ea2\u308c\u308b\u793e\u4f1a\u3092\u4f5c\u308a\u305f\u3044\u300dXX\u306f\uff1f (\u6f22\u5b57\u4e8c\u6587\u5b57)"),r.a.createElement("form",{onSubmit:function(n){0!==c.length?"\u610f\u5473"!==c?"\u6b7b\u4eba"!==c?window.alert("\u8aa4\u7b54\u3002\u6b8b\u5ff5\u3060\u3088\u3002\u3002"):e.changeAppState(f.BadEnding):e.changeAppState(f.HappyEnding):window.alert("\u56de\u7b54\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}},r.a.createElement("input",{type:"text",name:"text",onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"\u56de\u7b54")))},y=function(e){return r.a.createElement(B,{key:e.formUrl},r.a.createElement("h3",null,"\u3053\u308c\u3067\u8b0e\u89e3\u304d\u306f\u5168\u3066\u7d42\u4e86\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),r.a.createElement("a",{href:e.formUrl},"\u65e5\u7a0b\u8abf\u6574\u30d5\u30a9\u30fc\u30e0"))},k=u.a.div(h()),O=u.a.div(E()),j=u.a.div(g()),x=u.a.div(d()),B=u.a.div(p()),S=function(){var e=Object(a.useState)(f.Opening),n=Object(l.a)(e,2),t=n[0],c=n[1],i=function(e){c(e)};return s.isChrome&&s.isBrowser?r.a.createElement(k,null,r.a.createElement(O,null,r.a.createElement(v,null),function(){switch(t){case f.Opening:return r.a.createElement("div",null,r.a.createElement(b,{url:"".concat("/misc/sherlock","/videos/opening.mp4"),title:"\u30b7\u30e3\u30fc\u30ed\u30c3\u30af\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"}),r.a.createElement(w,{changeAppState:i}));case f.HappyEnding:return r.a.createElement("div",null,r.a.createElement(b,{url:"".concat("/misc/sherlock","/videos/happy-ending.mp4"),title:"\u30b7\u30e3\u30fc\u30ed\u30c3\u30af\u304b\u3089\u306e\u304a\u793c"}),r.a.createElement(y,{formUrl:"https://forms.gle/ucXo9M8vQzbiEP2H6"}));case f.BadEnding:return r.a.createElement("div",null,r.a.createElement(b,{url:"".concat("/misc/sherlock","/videos/bad-ending.mp4"),title:"\u30b7\u30e3\u30fc\u30ed\u30c3\u30af\u304b\u3089\u306e\u56de\u7b54"}),r.a.createElement(y,{formUrl:"https://forms.gle/PR2Em71HizodSAiKA"}))}}())):r.a.createElement("div",null,"Please open this page using Chrome as a browser.")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,n,t){e.exports=t(100)},69:function(e,n,t){},95:function(e,n,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.a366f7e2.chunk.js.map