(function(e){function t(t){for(var r,i,l=t[0],o=t[1],s=t[2],d=0,b=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=o;c.push([4,"chunk-vendors"]),n()})({0:function(e,t){},"02b8":function(e,t,n){},"0a5b":function(e,t,n){},1:function(e,t){},"124b":function(e,t,n){"use strict";n("c703")},1541:function(e,t,n){"use strict";n("6f87")},2:function(e,t){},"20d7":function(e,t,n){"use strict";n("c911")},"25a4":function(e,t,n){"use strict";n("5456")},"29bc":function(e,t,n){},3:function(e,t){},4:function(e,t,n){e.exports=n("cd49")},4168:function(e,t,n){"use strict";n("0a5b")},"4bf5":function(e,t,n){},"4ebc":function(e,t,n){"use strict";n("5c4b")},5:function(e,t){},5456:function(e,t,n){},"5c4b":function(e,t,n){},"608a":function(e,t,n){},"6f87":function(e,t,n){},"827b":function(e,t,n){},"99dd":function(e,t,n){"use strict";n("df85")},a19d:function(e,t,n){"use strict";n("29bc")},ad9d:function(e,t,n){"use strict";n("02b8")},b044:function(e,t,n){"use strict";n("608a")},c161:function(e,t,n){"use strict";n("827b")},c556:function(e,t,n){"use strict";n("e583")},c703:function(e,t,n){},c911:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("b85c"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("9911"),n("b3e9"),n("95f0"),n("e4cb"),n("b0c0"),["href","tabindex"]),i=["title"],l=["data-src"],o=["innerHTML"],s={key:0,class:"reading-time"},u=["href","tabindex"],d=["datetime"];function b(e,t,n,a,b,f){return Object(r["n"])(),Object(r["f"])("article",{class:Object(r["l"])([{"no-img":""===e.img},"card"])},[Object(r["g"])("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:t[0]||(t[0]=Object(r["A"])((function(t){return e.$emit("open")}),["prevent"])),tabindex:e.disaledTab?"-1":""},[""!==e.img?(Object(r["n"])(),Object(r["f"])("div",{key:0,class:"img-container",title:e.title},[Object(r["g"])("img",{"data-src":e.img,class:"lazyload"},null,8,l)],8,i)):Object(r["e"])("",!0),Object(r["g"])("h1",{innerHTML:e.title},null,8,o)],8,c),null!==e.readingTime?(Object(r["n"])(),Object(r["f"])("div",s,Object(r["t"])(e.tf("readingTime",[e.readingTime])),1)):Object(r["e"])("",!0),Object(r["g"])("p",null,Object(r["t"])(e.contentText),1),Object(r["g"])("footer",null,[Object(r["g"])("div",null,[(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["r"])(e.tags,(function(t,n){return Object(r["n"])(),Object(r["f"])("a",{key:n,href:t.link,target:"_blank",rel:"noopener noreferrer",tabindex:e.disaledTab?"-1":""},[Object(r["g"])("span",null,Object(r["t"])(t.name),1)],8,u)})),128))]),Object(r["g"])("time",{datetime:e.date},Object(r["t"])(e.tDate(new Date(e.date))),9,d)])],2)}n("99af");var f={en:{iso:"en",timeFormat:function(e,t,n){return"".concat(n," ").concat(t,", ").concat(e)},strings:{loadMore:"Load more",more:"More",theEnd:"The End",readingTime:"Read: %s",listView:"List view",cardView:"Card view",authors:"Authors",author:"Author",close:"Close",share:"Share",openWebsit:"Open in website",published:"Published: %s",previous:"Previous",next:"Next",noPrevious:"No revious post",noNext:"No next post",loading:"Loading…",shareToFacebook:"Share to Facebook",shareToTwitter:"Share to Twitter",loadError:"Failed to load",retry:"Retry",refresh:"Refresh"}},zh:{iso:"zh-CN",timeFormat:function(e,t,n){return"".concat(e).concat(t).concat(n)},strings:{loadMore:"加载更多",more:"继续阅读",theEnd:"完",readingTime:"阅读时间 %s",listView:"列表视图",cardView:"卡片视图",authors:"作者",author:"作者",close:"关闭",share:"分享",openWebsit:"在网站中打开",published:"发布于 %s",previous:"上一篇",next:"下一篇",noPrevious:"没有上一篇了",noNext:"没有下一篇了",loading:"加载中…",shareToFacebook:"分享到 Facebook",shareToTwitter:"分享到 Twitter",loadError:"加载失败",retry:"重试",refresh:"刷新"}}},j=f,O=n("e19f"),v=function(){var e=Object(r["q"])("en"),t=Object(r["b"])((function(){return j[e.value]})),n=function(e){return t.value.strings[e]},a=function(e,n){return Object(O["vsprintf"])(t.value.strings[e],n)},c=function(e){var n=new Intl.DateTimeFormat(t.value.iso,{year:"numeric"}).format(e),r=new Intl.DateTimeFormat(t.value.iso,{month:"short"}).format(e),a=new Intl.DateTimeFormat(t.value.iso,{day:"numeric"}).format(e);return t.value.timeFormat(n,r,a)};return{localeName:e,locale:t,t:n,tf:a,tDate:c}},g=function(e,t){Object(r["m"])((function(){t.value=e.value})),Object(r["x"])(e,(function(){t.value=e.value}))},p=(n("1276"),n("498a"),n("5319"),function(e){var t=Object(r["q"])(""),n=Object(r["q"])(""),a=function(e){var r,a=(new DOMParser).parseFromString(e.value,"text/html").body.getElementsByTagName("p")[0],c=a.getElementsByClassName("rt-reading-time");if(1===c.length){var i,l=(null===(i=c[0].textContent)||void 0===i?void 0:i.trim().split(": "))||[];2===l.length&&(t.value=l[l.length-1].replace("minute","min").replace("hour","hr")),null!==c[0].parentNode&&a.removeChild(c[0])}n.value=(null===(r=a.textContent)||void 0===r?void 0:r.replace(/\.{0,1} \[…\]/,"…").trim())||""};return Object(r["x"])(e,(function(){a(e)})),Object(r["m"])((function(){a(e)})),{readingTime:t,contentText:n}}),m=Object(r["j"])({name:"PostCard",emits:["open"],props:{localeString:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,required:!0},img:{type:String,required:!0},href:{type:String,required:!0},date:{type:String,required:!0},tags:{type:Object,required:!0},disaledTab:{type:Boolean,required:!0}},setup:function(e){var t=v(),n=t.localeName,a=t.locale,c=t.t,i=t.tf,l=t.tDate;g(Object(r["u"])(e,"localeString"),n);var o=p(Object(r["u"])(e,"content")),s=o.readingTime,u=o.contentText;return{localeName:n,locale:a,t:c,tf:i,tDate:l,contentText:u,readingTime:s}}}),h=(n("20d7"),n("c556"),n("6b0d")),y=n.n(h);const k=y()(m,[["render",b],["__scopeId","data-v-ac57aaa6"]]);var w=k,x={class:"list"},T=["href","tabindex"],_=["innerHTML"],C=["datetime"];function S(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("article",x,[Object(r["g"])("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:t[0]||(t[0]=Object(r["A"])((function(t){return e.$emit("open")}),["prevent"])),tabindex:e.disaledTab?"-1":""},[Object(r["g"])("h1",{innerHTML:e.title},null,8,_)],8,T),Object(r["g"])("time",{datetime:e.date},Object(r["t"])(e.tDate(new Date(e.date))),9,C)])}var L=Object(r["j"])({name:"PostCard",emits:["open"],props:{localeString:{type:String,required:!0},title:{type:String,required:!0},href:{type:String,required:!0},date:{type:String,required:!0},disaledTab:{type:Boolean,required:!0}},setup:function(e){var t=v(),n=t.localeName,a=t.locale,c=t.t,i=t.tf,l=t.tDate;return g(Object(r["u"])(e,"localeString"),n),{localeName:n,locale:a,t:c,tf:i,tDate:l}}});n("4168"),n("99dd");const q=y()(L,[["render",S],["__scopeId","data-v-5242d305"]]);var M=q,H=function(e){return Object(r["p"])("data-v-7b3e58d3"),e=e(),Object(r["o"])(),e},N={class:"loading-bar-container"},B=H((function(){return Object(r["g"])("div",{class:"bar-1"},null,-1)})),F=H((function(){return Object(r["g"])("div",{class:"bar-2"},null,-1)})),P=[B,F];function D(e,t){return Object(r["n"])(),Object(r["f"])("div",N,P)}n("f4e0"),n("25a4");const V={},z=y()(V,[["render",D],["__scopeId","data-v-7b3e58d3"]]);var E=z,A=function(e){return Object(r["p"])("data-v-76c5cffe"),e=e(),Object(r["o"])(),e},R={class:"head-img"},I={key:0,class:"img-container"},$=["data-src"],Z=["innerHTML","data-readingtime"],J=["title"],K=A((function(){return Object(r["g"])("svg",{viewBox:"0 0 24 24"},[Object(r["g"])("path",{fill:"#FFF",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})],-1)})),W=[K],U=["title"],G=A((function(){return Object(r["g"])("svg",{viewBox:"0 0 24 24"},[Object(r["g"])("path",{fill:"#FFF",d:"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"})],-1)})),Q=[G],X=["title","href"],Y=A((function(){return Object(r["g"])("svg",{viewBox:"0 0 24 24"},[Object(r["g"])("path",{fill:"#FFF",d:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"})],-1)})),ee=[Y],te=["title","href"],ne=A((function(){return Object(r["g"])("svg",{viewBox:"0 0 24 24"},[Object(r["g"])("path",{fill:"#FFF",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"})],-1)})),re=[ne],ae=["title","href"],ce=A((function(){return Object(r["g"])("svg",{viewBox:"0 0 1024 1024"},[Object(r["g"])("path",{fill:"#FFF",d:"M597 128v85h154L331 633l60 60 420-420v154h85V128H597zm214 683H213V213h299v-85H128v768h768V512h-85v299z"})],-1)})),ie=[ce],le=["innerHTML","data-readingtime"],oe=["innerHTML"],se={key:3,class:"tags"},ue=["href"],de=["datetime"],be={key:4,class:"author"},fe=["href","title"],je={key:0,class:"avatar-container"},Oe=["data-src"],ve={class:"author-info"},ge=["innerHTML"],pe={key:5},me=["href"],he={class:"previous"},ye={class:"post-date"},ke=["innerHTML"],we=["data-src"],xe={key:1,class:"bg"},Te={key:1,class:"previous-a a-disabled"},_e={class:"previous"},Ce={key:2,class:"previous-a a-disabled"},Se={class:"previous"},Le=["href"],qe={class:"next"},Me={class:"post-date"},He=["innerHTML"],Ne=["data-src"],Be={key:1,class:"bg"},Fe={key:4,class:"next-a a-disabled"},Pe={class:"next"},De=A((function(){return Object(r["g"])("div",{class:"divider"},[Object(r["g"])("div")],-1)}));function Ve(e,t,n,a,c,i){var l=Object(r["s"])("LoadingBlock"),o=Object(r["s"])("Error");return Object(r["n"])(),Object(r["f"])("article",{class:Object(r["l"])([{"no-img":""===e.img.src},"viewer"])},[Object(r["g"])("div",R,[""!==e.img.src?(Object(r["n"])(),Object(r["f"])("figure",I,[(Object(r["n"])(),Object(r["f"])("img",{"data-src":e.img.src,class:"lazyload",key:e.img.src},null,8,$)),""!==e.cleanedCaption?(Object(r["n"])(),Object(r["f"])("figcaption",{key:0,innerHTML:e.cleanedCaption,"data-readingtime":""===e.readingTime?"":e.tf("readingTime",[e.readingTime]),class:Object(r["l"])({"has-readingtime":""!==e.readingTime&&!e.loading&&!e.error&&""!==e.cleanedCaption})},null,10,Z)):Object(r["e"])("",!0)])):Object(r["e"])("",!0),Object(r["g"])("button",{class:"action-btn close",title:e.t("close"),onClick:t[0]||(t[0]=function(t){return e.$emit("close")})},W,8,J),Object(r["g"])("button",{class:"action-btn share",title:e.t("share"),onClick:t[1]||(t[1]=function(t){return e.showShare=!e.showShare})},Q,8,U),Object(r["y"])(Object(r["g"])("a",{class:"action-btn share-fb",title:e.t("shareToFacebook"),href:"".concat(e.href,"?share=facebook&nb=1"),target:"_blank",rel:"noopener noreferrer"},ee,8,X),[[r["w"],e.showShare]]),Object(r["y"])(Object(r["g"])("a",{class:"action-btn share-tw",title:e.t("shareToTwitter"),href:"".concat(e.href,"?share=twitter&nb=1"),target:"_blank",rel:"noopener noreferrer"},re,8,te),[[r["w"],e.showShare]]),Object(r["g"])("a",{class:"action-btn link-to",title:e.t("openWebsit"),href:e.href,target:"_blank",rel:"noopener noreferrer"},ie,8,ae)]),Object(r["g"])("h1",{innerHTML:e.title,"data-readingtime":""===e.readingTime?"":e.tf("readingTime",[e.readingTime]),class:Object(r["l"])({"has-readingtime":""!==e.readingTime&&!e.loading&&!e.error&&""===e.cleanedCaption})},null,10,le),e.loading&&!e.error?(Object(r["n"])(),Object(r["d"])(l,{key:0,class:"loading"})):Object(r["e"])("",!0),!e.loading&&e.error?(Object(r["n"])(),Object(r["d"])(o,{key:1,localeString:e.localeString,onRetry:t[2]||(t[2]=function(t){return e.load(e.linkRef)}),class:"error-block"},null,8,["localeString"])):Object(r["e"])("",!0),e.loading||e.error?Object(r["e"])("",!0):(Object(r["n"])(),Object(r["f"])("main",{key:2,innerHTML:e.content,class:"markdown-body"},null,8,oe)),e.loading||e.error?Object(r["e"])("",!0):(Object(r["n"])(),Object(r["f"])("div",se,[Object(r["g"])("div",null,[(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["r"])(e.tags,(function(e,t){return Object(r["n"])(),Object(r["f"])("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer"},[Object(r["g"])("span",null,Object(r["t"])(e.name),1)],8,ue)})),128))]),Object(r["g"])("time",{datetime:e.date},Object(r["t"])(e.tf("published",[e.tDate(new Date(e.date))])),9,de)])),e.authors.length>0&&!e.loading&&!e.error?(Object(r["n"])(),Object(r["f"])("aside",be,[Object(r["g"])("div",null,[Object(r["g"])("h2",null,Object(r["t"])(e.authors.length>1?e.t("authors"):e.t("author")),1),(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["r"])(e.authors,(function(e,t){return Object(r["n"])(),Object(r["f"])("section",{key:t},[Object(r["g"])("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",title:e.name},[""!==e.avatar?(Object(r["n"])(),Object(r["f"])("div",je,[Object(r["g"])("img",{"data-src":e.avatar,class:"lazyload"},null,8,Oe)])):Object(r["e"])("",!0)],8,fe),Object(r["g"])("div",ve,[Object(r["g"])("h3",null,Object(r["t"])(e.name),1),""!==e.cleanedDescription?(Object(r["n"])(),Object(r["f"])("p",{key:0,innerHTML:e.cleanedDescription},null,8,ge)):Object(r["e"])("",!0)])])})),128))])])):Object(r["e"])("",!0),e.loading||e.error?Object(r["e"])("",!0):(Object(r["n"])(),Object(r["f"])("footer",pe,[e.previous&&""!==e.previous.href?(Object(r["n"])(),Object(r["f"])("a",{key:0,href:e.previous.href,target:"_blank",rel:"noopener noreferrer",class:"previous-a",onClick:t[3]||(t[3]=Object(r["A"])((function(t){return e.$emit("open:previous")}),["prevent"]))},[Object(r["g"])("article",he,[Object(r["g"])("span",null,[Object(r["i"])(Object(r["t"])(e.t("previous")),1),Object(r["g"])("span",ye,"  •  "+Object(r["t"])(e.tDate(new Date(e.previous.date))),1)]),Object(r["g"])("h2",{innerHTML:e.previous.title},null,8,ke),""!==e.previous.img?(Object(r["n"])(),Object(r["f"])("img",{"data-src":e.previous.img,class:"lazyload",key:e.previous.img},null,8,we)):(Object(r["n"])(),Object(r["f"])("div",xe))])],8,me)):Object(r["e"])("",!0),e.previous&&""===e.previous.href?(Object(r["n"])(),Object(r["f"])("a",Te,[Object(r["g"])("article",_e,[Object(r["g"])("span",null,Object(r["t"])(e.t("previous")),1),Object(r["g"])("h2",null,Object(r["t"])(e.t("loading")),1)])])):Object(r["e"])("",!0),e.previous?Object(r["e"])("",!0):(Object(r["n"])(),Object(r["f"])("a",Ce,[Object(r["g"])("article",Se,[Object(r["g"])("span",null,Object(r["t"])(e.t("previous")),1),Object(r["g"])("h2",null,Object(r["t"])(e.t("noPrevious")),1)])])),e.next?(Object(r["n"])(),Object(r["f"])("a",{key:3,href:e.next.href,target:"_blank",rel:"noopener noreferrer",class:"next-a",onClick:t[4]||(t[4]=Object(r["A"])((function(t){return e.$emit("open:next")}),["prevent"]))},[Object(r["g"])("article",qe,[Object(r["g"])("span",null,[Object(r["g"])("span",Me,Object(r["t"])(e.tDate(new Date(e.next.date)))+"  •  ",1),Object(r["i"])(Object(r["t"])(e.t("next")),1)]),Object(r["g"])("h2",{innerHTML:e.next.title},null,8,He),""!==e.next.img?(Object(r["n"])(),Object(r["f"])("img",{"data-src":e.next.img,class:"lazyload",key:e.next.img},null,8,Ne)):(Object(r["n"])(),Object(r["f"])("div",Be))])],8,Le)):(Object(r["n"])(),Object(r["f"])("a",Fe,[Object(r["g"])("article",Pe,[Object(r["g"])("span",null,Object(r["t"])(e.t("next")),1),Object(r["g"])("h2",null,Object(r["t"])(e.t("noNext")),1)])])),De]))],2)}n("00b4");var ze={class:"loading-block-container"},Ee=Object(r["h"])('<div class="line" data-v-17331f73></div><div class="line" data-v-17331f73></div><div class="line" data-v-17331f73></div><div class="line" data-v-17331f73></div><div class="line line-short" data-v-17331f73></div>',5),Ae=[Ee];function Re(e,t){return Object(r["n"])(),Object(r["f"])("div",ze,Ae)}n("1541"),n("4ebc");const Ie={},$e=y()(Ie,[["render",Re],["__scopeId","data-v-17331f73"]]);var Ze=$e,Je={class:"error"};function Ke(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",Je,[Object(r["g"])("h2",null,Object(r["t"])(e.t("loadError")),1),Object(r["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("retry")})},Object(r["t"])(e.t("retry")),1)])}var We=Object(r["j"])({name:"Error",emits:["retry"],props:{localeString:{type:String,required:!0}},setup:function(e){var t=v(),n=t.localeName,a=t.locale,c=t.t,i=t.tf,l=t.tDate;return g(Object(r["u"])(e,"localeString"),n),{localeName:n,locale:a,t:c,tf:i,tDate:l}}});n("b044"),n("a19d");const Ue=y()(We,[["render",Ke],["__scopeId","data-v-3bda5782"]]);var Ge=Ue,Qe=n("1da1"),Xe=(n("96cf"),n("caad"),n("2532"),n("5e22")),Ye=n.n(Xe),et=function(){var e=Object(r["q"])(""),t=Object(r["q"])(""),n=Object(r["q"])(!1),a=Object(r["q"])(!1),c=function(){var r=Object(Qe["a"])(regeneratorRuntime.mark((function r(c){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.value){r.next=2;break}return r.abrupt("return");case 2:return n.value=!0,a.value=!1,r.next=6,fetch("".concat(c,"?_fields=content"),{credentials:"omit"}).then((function(e){return e.json()})).catch((function(){return n.value=!1,a.value=!0,!1}));case 6:if(i=r.sent,!1!==i){r.next=9;break}return r.abrupt("return");case 9:a.value=!1,e.value=Ye()(i.content.rendered,{allowedTags:Ye.a.defaults.allowedTags.concat(["img","iframe"]),allowedAttributes:{a:["href","target","style","rel"],img:["src","srcset","data-src","data-srcset","style","class"],iframe:["src","loading","width","height","srcdoc","allowfullscreen","sandbox","style"],figure:["class","style"],"*":["style"]},allowedIframeDomains:["zoom.us","youtube.com","vimeo.com","man.ac.uk","manchester.ac.uk"],transformTags:{img:function(e,t){return t["data-src"]=t.src||"",delete t.src,t["data-srcset"]=t.srcset||"",delete t.srcset,t.class="lazyload",{tagName:e,attribs:t}},a:function(e,t){return t.target&&"_blank"===t.target||(t.target="_blank"),{tagName:e,attribs:t}},iframe:function(e,t){return t.sandbox||(t.sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"),{tagName:e,attribs:t}},figure:function(e,t){return t.class&&t.class.includes("wp-block-embed")&&t.class.includes("is-type-video")?t.class.includes("wp-embed-aspect-16-9")?t.class="video-iframe video-16-9":t.class.includes("wp-embed-aspect-16-10")?t.class="video-iframe video-16-10":t.class.includes("wp-embed-aspect-4-3")?t.class="video-iframe video-4-3":t.class="video-iframe video-unknown":delete t.class,{tagName:e,attribs:t}}},exclusiveFilter:function(e){if("span"===e.tag&&0===e.tagPosition&&e.text.includes("Reading Time")){var n=e.text.trim().split(": ")||[];return 2===n.length&&(t.value=n[n.length-1].replace("minute","min").replace("hour","hr")),!0}return("a"===e.tag||"p"===e.tag||"b"===e.tag||"i"===e.tag||"em"===e.tag||"strong"===e.tag||"code"===e.tag||"sub"===e.tag||"sup"===e.tag||"ol"===e.tag||"ul"===e.tag||"li"===e.tag||"h1"===e.tag||"h2"===e.tag||"h3"===e.tag||"h4"===e.tag||"h5"===e.tag||"h6"===e.tag)&&!e.text.trim()},enforceHtmlBoundary:!0}),n.value=!1;case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return{content:e,readingTime:t,loading:n,error:a,load:c}},tt=(n("a4d3"),n("e01a"),function(e,t){var n=Object(r["q"])(""),c=function(e){return Ye()(e,{allowedTags:["b","em","i","strong","a"],allowedAttributes:{a:["href","target","rel"]},transformTags:{a:function(e,t){return t.target&&"_blank"===t.target||(t.target="_blank"),{tagName:e,attribs:t}}},exclusiveFilter:function(e){return!e.text.trim()},enforceHtmlBoundary:!0})},i=function(){""!==e.value.caption?n.value=c(e.value.caption):n.value=""},l=function(){var e,n=Object(a["a"])(t.value);try{for(n.s();!(e=n.n()).done;){var r=e.value;""!==r.description?r.cleanedDescription=c(r.description):r.cleanedDescription=""}}catch(i){n.e(i)}finally{n.f()}};return Object(r["x"])(e,i),Object(r["x"])(t,l),Object(r["m"])((function(){i(),l()})),{cleanedCaption:n}}),nt=Object(r["j"])({name:"PostView",emits:["open:previous","open:next","close"],components:{LoadingBlock:Ze,Error:Ge},props:{localeString:{type:String,required:!0},title:{type:String,required:!0},img:{type:Object,required:!0},href:{type:String,required:!0},link:{type:String,required:!0},date:{type:String,required:!0},authors:{type:Object,required:!0},tags:{type:Object,required:!0},next:Object,previous:Object},setup:function(e){var t=v(),n=t.localeName,a=t.locale,c=t.t,i=t.tf,l=t.tDate,o=et(),s=o.content,u=o.readingTime,d=o.loading,b=o.error,f=o.load;g(Object(r["u"])(e,"localeString"),n);var j=tt(Object(r["u"])(e,"img"),Object(r["u"])(e,"authors")),O=j.cleanedCaption,p=Object(r["q"])(!1),m=Object(r["u"])(e,"link");return Object(r["x"])(m,(function(e,t){e!==t&&/https:\/\/studentnews\.manchester\.ac\.uk\/wp-json\/wp\/v2\/posts\/\d{1,}/.test(e)&&(p.value=!1,f(e))})),Object(r["m"])((function(){f(m.value)})),{localeName:n,locale:a,t:c,tf:i,tDate:l,showShare:p,content:s,readingTime:u,loading:d,error:b,load:f,cleanedCaption:O,linkRef:m}}});n("c161"),n("ad9d");const rt=y()(nt,[["render",Ve],["__scopeId","data-v-76c5cffe"]]);var at=rt,ct=(n("07ac"),n("7db0"),function(){var e=Object(r["q"])([]),t=Object(r["q"])(1),n=Object(r["q"])(!1),c=Object(r["q"])(!1),i=Object(r["q"])(!1),l=function(){var l=Object(Qe["a"])(regeneratorRuntime.mark((function l(){var o,s,u,d,b,f,j,O,v,g,p,m,h,y,k,w,x,T=arguments;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(o=!(T.length>0&&void 0!==T[0])||T[0],!n.value&&!c.value){l.next=3;break}return l.abrupt("return");case 3:return c.value=!0,i.value=!1,l.next=7,fetch("https://studentnews.manchester.ac.uk/wp-json/wp/v2/posts?_fields=id,date,title,link,excerpt,_links,_embedded&_embed=1&page=".concat(t.value),{credentials:"omit"}).then((function(e){return{headers:e.headers,response:e}})).catch((function(){return c.value=!1,i.value=!0,{headers:new Headers,response:new Response}}));case 7:if(s=l.sent,u=s.headers,d=s.response,!i.value){l.next=12;break}return l.abrupt("return");case 12:return l.next=14,d.json();case 14:b=l.sent,f=Object(a["a"])(b);try{for(f.s();!(j=f.n()).done;){if(v=j.value,g=[],v._embedded["wp:term"]&&v._embedded["wp:term"][0]){p=Object(a["a"])(v._embedded["wp:term"][0]);try{for(p.s();!(m=p.n()).done;)h=m.value,g.push({name:h.name,link:h.link})}catch(_){p.e(_)}finally{p.f()}}if(y=[],v._embedded.author){k=Object(a["a"])(v._embedded.author);try{for(k.s();!(w=k.n()).done;)x=w.value,y.push({name:x.name,link:x.link,description:x.description,avatar:Object.values(x.avatar_urls)[Object.values(x.avatar_urls).length-1].replace(/(\?|&)s=\d{1,2}/,"s=256")||""})}catch(_){k.e(_)}finally{k.f()}}e.value.push({id:v.id,title:Ye()(v.title.rendered,{allowedTags:[],allowedAttributes:{},enforceHtmlBoundary:!0}),href:v.link,link:(null===(O=v._links.self[0])||void 0===O?void 0:O.href)||"",img:{src:v._embedded["wp:featuredmedia"]&&v._embedded["wp:featuredmedia"][0]&&v._embedded["wp:featuredmedia"][0].source_url?v._embedded["wp:featuredmedia"][0].source_url:"",caption:v._embedded["wp:featuredmedia"]&&v._embedded["wp:featuredmedia"][0]&&v._embedded["wp:featuredmedia"][0].caption&&v._embedded["wp:featuredmedia"][0].caption.rendered?v._embedded["wp:featuredmedia"][0].caption.rendered:""},date:v.date,content:v.excerpt.rendered,authors:y,tags:g})}}catch(_){f.e(_)}finally{f.f()}t.value>=parseInt(u.get("x-wp-totalpages")||"0")&&(n.value=!0),c.value=!1,i.value=!1,t.value+=1,t.value>2&&o&&Object(r["k"])((function(){var e=document.querySelectorAll(".card, .list")[10*(t.value-2)];e&&e.getElementsByTagName("a")[0].focus()}));case 22:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),o=function(){var r=Object(Qe["a"])(regeneratorRuntime.mark((function r(){var i,o,s,u,d,b,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!c.value){r.next=2;break}return r.abrupt("return");case 2:return c.value=!0,r.next=5,fetch("https://studentnews.manchester.ac.uk/wp-json/wp/v2/posts?_fields=id,date,title,link,excerpt,_links,_embedded&_embed=1&page=1",{credentials:"omit"}).then((function(e){return e.json()})).catch((function(){return c.value=!1,!1}));case 5:if(i=r.sent,i){r.next=8;break}return r.abrupt("return");case 8:c.value=!1,o=!1,s=[],u=Object(a["a"])(i),r.prev=12,b=function(){var t=d.value;if(void 0!==e.value.find((function(e){return e.id===t.id})))return o=!0,"break";var n,r=[];if(t._embedded["wp:term"]&&t._embedded["wp:term"][0]){var c,i=Object(a["a"])(t._embedded["wp:term"][0]);try{for(i.s();!(c=i.n()).done;){var l=c.value;r.push({name:l.name,link:l.link})}}catch(O){i.e(O)}finally{i.f()}}var u=[];if(t._embedded.author){var b,f=Object(a["a"])(t._embedded.author);try{for(f.s();!(b=f.n()).done;){var j=b.value;u.push({name:j.name,link:j.link,description:j.description,avatar:Object.values(j.avatar_urls)[Object.values(j.avatar_urls).length-1].replace(/(\?|&)s=\d{1,2}/,"s=256")||""})}}catch(O){f.e(O)}finally{f.f()}}s.push({id:t.id,title:t.title.rendered,href:t.link,link:(null===(n=t._links.self[0])||void 0===n?void 0:n.href)||"",img:{src:t._embedded["wp:featuredmedia"]&&t._embedded["wp:featuredmedia"][0]&&t._embedded["wp:featuredmedia"][0].source_url?t._embedded["wp:featuredmedia"][0].source_url:"",caption:t._embedded["wp:featuredmedia"]&&t._embedded["wp:featuredmedia"][0]&&t._embedded["wp:featuredmedia"][0].caption&&t._embedded["wp:featuredmedia"][0].caption.rendered?t._embedded["wp:featuredmedia"][0].caption.rendered:""},date:t.date,content:t.excerpt.rendered,authors:u,tags:r})},u.s();case 15:if((d=u.n()).done){r.next=21;break}if(f=b(),"break"!==f){r.next=19;break}return r.abrupt("break",21);case 19:r.next=15;break;case 21:r.next=26;break;case 23:r.prev=23,r.t0=r["catch"](12),u.e(r.t0);case 26:return r.prev=26,u.f(),r.finish(26);case 29:o?e.value=s.concat(e.value):(e.value=[],t.value=1,n.value=!1,l());case 30:case"end":return r.stop()}}),r,null,[[12,23,26,29]])})));return function(){return r.apply(this,arguments)}}();return Object(r["m"])(l),{postList:e,page:t,loading:c,error:i,noMore:n,loadNextPage:l,refresh:o}}),it=function(){var e=Object(r["q"])("card"),t=function(t){e.value=t,Object(r["k"])((function(){var e=document.querySelector(".card, .list");e?e.getElementsByTagName("a")[0].focus():document.getElementsByClassName("mode-".concat(t))[0].blur()}))};return{viewMode:e,changeModeTo:t}},lt=function(){var e=Object(r["q"])(!1);return Object(r["x"])(e,(function(){e.value?(document.documentElement.classList.add("dark"),document.body.classList.add("dark")):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark"))})),{dark:e}},ot=function(e,t,n){var a=Object(r["q"])(!1),c=Object(r["q"])(!1),i=Object(r["q"])(!1),l=Object(r["q"])(null),o=Object(r["q"])(-1),s=function(s){l.value=e.value[s],a.value=!0,o.value=s,Object(r["k"])((function(){c.value=!0;var e=document.getElementsByClassName("close");e.length>0&&e[0].focus();var t=document.getElementsByClassName("viewer");t.length>0&&(t[0].scrollTop=0),setTimeout((function(){document.body.classList.add("lock-scroll"),i.value=!0}),150)})),s!==e.value.length-1||t.value||n(!1)},u=function(){c.value=!1,i.value=!1,document.body.classList.remove("lock-scroll"),Object(r["k"])((function(){var e=document.querySelectorAll(".card, .list");e[o.value]&&e[o.value].getElementsByTagName("a")[0].focus(),setTimeout((function(){a.value=!1,o.value=-1}),150)}))},d=Object(r["b"])((function(){if(e.value.length>=o.value+2){var n=e.value[o.value+1];return{title:n.title,img:n.img.src,href:n.href,date:n.date}}if(!t.value)return{title:"",img:"",href:"",date:""}})),b=Object(r["b"])((function(){if(o.value>0){var t=e.value[o.value-1];return{title:t.title,img:t.img.src,href:t.href,date:t.date}}}));return{showPostView:a,showPostViewAnimation:c,postViewScroll:i,selectedPost:l,openPost:s,closePost:u,openedIndex:o,previous:d,next:b}},st={class:"header"},ut=["tabindex"],dt=Object(r["i"])("My "),bt=Object(r["g"])("span",null,"Manchester",-1),ft=Object(r["i"])(" News"),jt=[dt,bt,ft],Ot={class:"mode-switch"},vt=["tabindex"],gt=Object(r["g"])("path",{fill:"#BBB",d:"M0 0h474v1024H0zm550 0h474v1024H550z"},null,-1),pt=["tabindex"],mt=Object(r["g"])("path",{fill:"#BBB",d:"M85 597h171V427H85v170zm0 256h171V683H85v170zm0-512h171V171H85v170zm256 256h598V427H341v170zm0 256h598V683H341v170zm0-682v170h598V171H341z"},null,-1),ht=["tabindex"],yt=Object(r["g"])("path",{fill:"#BBB",d:"M832 704l192-224H895a385 385 0 00-313-346h-5l-3-1c-20-3-41-5-62-5h-1a384 384 0 00-373 297l-2 7v3l-1 4-1 5v2l-2 8c-2 13-3 25-3 38v2l-1 8v20l1 8v2c0 13 2 26 3 38v1l2 7v2l1 5 1 4v3l2 7a385 385 0 00374 297c86 0 166-28 234-81l15-12-87-93-12 10a256 256 0 11-150-464c133 0 246 93 259 224H624l208 224z"},null,-1),kt={key:0,class:"loading-container"},wt={key:2},xt={key:3},Tt=["tabindex"],_t=Object(r["j"])({setup:function(e){var t=v(),n=t.localeName,c=t.t,i=ct(),l=i.postList,o=i.loading,s=i.error,u=i.noMore,d=i.loadNextPage,b=i.refresh,f=it(),O=f.viewMode,g=f.changeModeTo,p=lt(),m=p.dark,h=ot(l,u,d),y=h.showPostView,k=h.showPostViewAnimation,x=h.postViewScroll,T=h.selectedPost,_=h.openPost,C=h.closePost,S=h.openedIndex,L=h.previous,q=h.next;return Object(r["m"])((function(){var e=new URLSearchParams(window.location.search);n.value=j[e.get("locale")||"en"]&&e.get("locale")||"en",m.value="true"===(e.get("dark")||"false");var t=e.get("origin")||"";window.addEventListener("message",(function(e){if(e.origin===t){var r,c=JSON.parse(e.data),i=Object(a["a"])(c);try{for(i.s();!(r=i.n()).done;){var l=r.value;"dark"===l.type?m.value=l.payload:"locale"===l.type&&(n.value=j[l.payload]?l.payload:"en")}}catch(o){i.e(o)}finally{i.f()}}}),!1)})),function(e,t){return Object(r["n"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("header",st,[Object(r["g"])("a",{href:"https://studentnews.manchester.ac.uk/",target:"_blank",rel:"noopener noreferrer",tabindex:Object(r["v"])(y)?"-1":""},jt,8,ut),Object(r["g"])("div",Ot,[Object(r["g"])("div",null,[(Object(r["n"])(),Object(r["f"])("svg",{viewBox:"0 0 1024 1024",class:Object(r["l"])(["mode-icon mode-card",{active:"card"===Object(r["v"])(O)}]),onClick:t[0]||(t[0]=function(e){return Object(r["v"])(g)("card")}),onKeypress:t[1]||(t[1]=Object(r["z"])((function(e){return Object(r["v"])(g)("card")}),["enter"])),tabindex:Object(r["v"])(y)?"-1":"0"},[Object(r["g"])("title",null,Object(r["t"])(Object(r["v"])(c)("cardView")),1),gt],42,vt)),(Object(r["n"])(),Object(r["f"])("svg",{viewBox:"0 0 1024 1024",class:Object(r["l"])(["mode-icon mode-list",{active:"list"===Object(r["v"])(O)}]),onClick:t[2]||(t[2]=function(e){return Object(r["v"])(g)("list")}),onKeypress:t[3]||(t[3]=Object(r["z"])((function(e){return Object(r["v"])(g)("list")}),["enter"])),tabindex:Object(r["v"])(y)?"-1":"0"},[Object(r["g"])("title",null,Object(r["t"])(Object(r["v"])(c)("listView")),1),mt],42,pt)),(Object(r["n"])(),Object(r["f"])("svg",{viewBox:"0 0 1024 1024",class:Object(r["l"])(["mode-icon mode-refresh",{loading:Object(r["v"])(o)&&!Object(r["v"])(s)}]),onClick:t[4]||(t[4]=function(){return Object(r["v"])(b)&&Object(r["v"])(b).apply(void 0,arguments)}),onKeypress:t[5]||(t[5]=Object(r["z"])((function(){return Object(r["v"])(b)&&Object(r["v"])(b).apply(void 0,arguments)}),["enter"])),tabindex:Object(r["v"])(y)?"-1":"0"},[Object(r["g"])("title",null,Object(r["t"])(Object(r["v"])(c)("refresh")),1),yt],42,ht))])])]),(Object(r["v"])(o)||Object(r["v"])(s))&&0===Object(r["v"])(l).length?(Object(r["n"])(),Object(r["f"])("div",kt,[Object(r["v"])(o)&&!Object(r["v"])(s)?(Object(r["n"])(),Object(r["d"])(E,{key:0})):Object(r["e"])("",!0),!Object(r["v"])(o)&&Object(r["v"])(s)?(Object(r["n"])(),Object(r["d"])(Ge,{key:1,localeString:Object(r["v"])(n),onRetry:Object(r["v"])(d),class:"error-block"},null,8,["localeString","onRetry"])):Object(r["e"])("",!0)])):Object(r["e"])("",!0),null!==Object(r["v"])(T)?Object(r["y"])((Object(r["n"])(),Object(r["d"])(at,{key:1,title:Object(r["v"])(T).title,img:Object(r["v"])(T).img,date:Object(r["v"])(T).date,href:Object(r["v"])(T).href,link:Object(r["v"])(T).link,authors:Object(r["v"])(T).authors,tags:Object(r["v"])(T).tags,localeString:Object(r["v"])(n),next:Object(r["v"])(q),previous:Object(r["v"])(L),class:Object(r["l"])({opened:Object(r["v"])(k),"no-scroll":!Object(r["v"])(x)}),"onOpen:next":t[6]||(t[6]=function(e){return Object(r["v"])(_)(Object(r["v"])(S)-1)}),"onOpen:previous":t[7]||(t[7]=function(e){return Object(r["v"])(_)(Object(r["v"])(S)+1)}),onClose:Object(r["v"])(C)},null,8,["title","img","date","href","link","authors","tags","localeString","next","previous","class","onClose"])),[[r["w"],Object(r["v"])(y)]]):Object(r["e"])("",!0),"card"===Object(r["v"])(O)&&Object(r["v"])(l).length>0?(Object(r["n"])(),Object(r["f"])("main",wt,[(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["r"])(Object(r["v"])(l),(function(e,t){return Object(r["n"])(),Object(r["d"])(w,{key:e.id,title:e.title,content:e.content,img:e.img.src,date:e.date,href:e.href,tags:e.tags,localeString:Object(r["v"])(n),disaledTab:Object(r["v"])(y),onOpen:function(e){return Object(r["v"])(_)(t)}},null,8,["title","content","img","date","href","tags","localeString","disaledTab","onOpen"])})),128))])):Object(r["e"])("",!0),"list"===Object(r["v"])(O)&&Object(r["v"])(l).length>0?(Object(r["n"])(),Object(r["f"])("main",xt,[(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["r"])(Object(r["v"])(l),(function(e,t){return Object(r["n"])(),Object(r["d"])(M,{key:e.id,title:e.title,date:e.date,href:e.href,disaledTab:Object(r["v"])(y),localeString:Object(r["v"])(n),onOpen:function(e){return Object(r["v"])(_)(t)}},null,8,["title","date","href","disaledTab","localeString","onOpen"])})),128))])):Object(r["e"])("",!0),Object(r["v"])(l).length>0?(Object(r["n"])(),Object(r["f"])("footer",{key:4,class:Object(r["l"])(["foot-container",{end:Object(r["v"])(u),"on-error":Object(r["v"])(s)}])},[Object(r["y"])(Object(r["g"])("div",{class:"the-end"},"- "+Object(r["t"])(Object(r["v"])(c)("theEnd"))+" -",513),[[r["w"],Object(r["v"])(u)]]),Object(r["y"])(Object(r["g"])("button",{class:"load-more",onClick:t[8]||(t[8]=function(e){return Object(r["v"])(d)(!0)}),tabindex:Object(r["v"])(y)?"-1":""},Object(r["t"])(Object(r["v"])(c)("loadMore")),9,Tt),[[r["w"],!Object(r["v"])(u)&&!Object(r["v"])(o)&&!Object(r["v"])(s)]]),Object(r["v"])(o)&&!Object(r["v"])(s)?(Object(r["n"])(),Object(r["d"])(E,{key:0,class:"loading"})):Object(r["e"])("",!0),!Object(r["v"])(o)&&Object(r["v"])(s)?(Object(r["n"])(),Object(r["d"])(Ge,{key:1,localeString:Object(r["v"])(n),onRetry:Object(r["v"])(d),class:"error-block-list"},null,8,["localeString","onRetry"])):Object(r["e"])("",!0)],2)):Object(r["e"])("",!0)],64)}}});n("124b");const Ct=_t;var St=Ct;Object(r["c"])(St).mount("#app")},df85:function(e,t,n){},e583:function(e,t,n){},f4e0:function(e,t,n){"use strict";n("4bf5")}});