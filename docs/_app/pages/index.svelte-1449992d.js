import{S as t,i as e,s as n,e as s,t as a,c as r,a as l,g as o,d as c,b as u,f as i,F as h,G as d,H as f,k as m,n as p,I as g,J as v,K as y,L as $,M as k,N as w,z as b,O as E,h as x,P as A,l as I,j as D,Q as T,m as P,o as U,v as N,r as S,w as G}from"../chunks/vendor-ac7f235a.js";function B(t){let e,n,f=function(){const t=(new Date).getHours();switch(!0){case t>=5&&t<12:return"Good morning";case t>=12&&t<18:return"Good afternoon";case t>=18&&t<23:return"Good evening";case 23===t||t>=0&&t<5:return"Good night";default:return"Welcome"}}()+"";return{c(){e=s("p"),n=a(f),this.h()},l(t){e=r(t,"P",{class:!0});var s=l(e);n=o(s,f),s.forEach(c),this.h()},h(){u(e,"class","svelte-1cnudfb")},m(t,s){i(t,e,s),h(e,n)},p:d,i:d,o:d,d(t){t&&c(e)}}}class V extends t{constructor(t){super(),e(this,t,null,B,n,{})}}function j(t,e,n){const s=t.slice();return s[14]=e[n],s[16]=n,s}function q(t){let e,n,d=t[17].message+"";return{c(){e=s("p"),n=a(d),this.h()},l(t){e=r(t,"P",{style:!0});var s=l(e);n=o(s,d),s.forEach(c),this.h()},h(){u(e,"style","color: red")},m(t,s){i(t,e,s),h(e,n)},p(t,e){32&e&&d!==(d=t[17].message+"")&&x(n,d)},d(t){t&&c(e)}}}function H(t){let e,n=Array.isArray(t[13])&&0!==t[13].length&&0!==t[0].length,s=n&&L(t);return{c(){s&&s.c(),e=I()},l(t){s&&s.l(t),e=I()},m(t,n){s&&s.m(t,n),i(t,e,n)},p(t,a){33&a&&(n=Array.isArray(t[13])&&0!==t[13].length&&0!==t[0].length),n?s?s.p(t,a):(s=L(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&c(e)}}}function L(t){let e,n=t[13],a=[];for(let s=0;s<n.length;s+=1)a[s]=O(j(t,n,s));return{c(){e=s("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=r(t,"DIV",{id:!0,class:!0});var n=l(e);for(let e=0;e<a.length;e+=1)a[e].l(n);n.forEach(c),this.h()},h(){u(e,"id","autocomplete-list"),u(e,"class",g("autocomplete-items")+" svelte-14e1ako")},m(t,n){i(t,e,n);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(t,s){if(43&s){let r;for(n=t[13],r=0;r<n.length;r+=1){const l=j(t,n,r);a[r]?a[r].p(l,s):(a[r]=O(l),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(t){t&&c(e),A(a,t)}}}function O(t){let e,n,d,f,v,$,k,w,b,E,A,I=t[14].substr(t[0].length)+"";function D(){return t[10](t[14])}return{c(){e=s("div"),n=s("b"),d=a(t[0]),f=a(I),v=m(),$=s("input"),w=m(),this.h()},l(s){e=r(s,"DIV",{class:!0});var a=l(e);n=r(a,"B",{});var u=l(n);d=o(u,t[0]),u.forEach(c),f=o(a,I),v=p(a),$=r(a,"INPUT",{type:!0,value:!0}),w=p(a),a.forEach(c),this.h()},h(){u($,"type","hidden"),$.value=k=t[14],u(e,"class",b=g(t[3]===t[16]?"autocomplete-active":"")+" svelte-14e1ako")},m(t,s){i(t,e,s),h(e,n),h(n,d),h(e,f),h(e,v),h(e,$),h(e,w),E||(A=y(e,"click",D),E=!0)},p(n,s){t=n,1&s&&x(d,t[0]),33&s&&I!==(I=t[14].substr(t[0].length)+"")&&x(f,I),32&s&&k!==(k=t[14])&&$.value!==k&&($.value=k),8&s&&b!==(b=g(t[3]===t[16]?"autocomplete-active":"")+" svelte-14e1ako")&&u(e,"class",b)},d(t){t&&c(e),E=!1,A()}}}function R(t){return{c:d,l:d,m:d,p:d,d:d}}function F(t){let e,n,b,E,x,A,I,D,T,P,U="Search",N={ctx:t,current:null,token:null,hasCatch:!0,pending:R,then:H,catch:q,value:13,error:17};return f(x=t[5],N),{c(){e=s("form"),n=s("div"),b=s("input"),E=m(),N.block.c(),A=m(),I=s("button"),D=a(U),this.h()},l(t){e=r(t,"FORM",{autocomplete:!0,class:!0});var s=l(e);n=r(s,"DIV",{class:!0});var a=l(n);b=r(a,"INPUT",{class:!0,type:!0,placeholder:!0}),E=p(a),N.block.l(a),a.forEach(c),A=p(s),I=r(s,"BUTTON",{type:!0,disabled:!0,class:!0});var u=l(I);D=o(u,U),u.forEach(c),s.forEach(c),this.h()},h(){u(b,"class",g("input-search-box")+" svelte-14e1ako"),u(b,"type","text"),u(b,"placeholder","Search for something?"),u(n,"class","input-container svelte-14e1ako"),u(I,"type","submit"),I.disabled=t[4],u(I,"class","svelte-14e1ako"),u(e,"autocomplete","off"),u(e,"class","svelte-14e1ako")},m(s,a){i(s,e,a),h(e,n),h(n,b),v(b,t[0]),t[9](b),h(n,E),N.block.m(n,N.anchor=null),N.mount=()=>n,N.anchor=null,h(e,A),h(e,I),h(I,D),T||(P=[y(b,"input",t[8]),y(b,"keydown",t[6]),y(e,"submit",$(t[11]))],T=!0)},p(e,[n]){t=e,1&n&&b.value!==t[0]&&v(b,t[0]),N.ctx=t,32&n&&x!==(x=t[5])&&f(x,N)||k(N,t,n),16&n&&(I.disabled=t[4])},i:d,o:d,d(n){n&&c(e),t[9](null),N.block.d(),N.token=null,N=null,T=!1,w(P)}}}function M(t,e,n){let s,a,r,l=-1,o="",c="",u="";const i=function(t,e){let n;return s=>{n&&clearTimeout(n),n=setTimeout((()=>t(s)),e)}}((t=>n(7,c=t)),250);b((()=>null==r?void 0:r.focus()));return t.$$.update=()=>{1&t.$$.dirty&&n(4,s=!o),1&t.$$.dirty&&i(o),128&t.$$.dirty&&n(5,a=async function(t){if(!t)return[];const e=new URLSearchParams({client:"firefox",q:t}).toString(),n=await fetch(`https://cors.bridged.cc/https://suggestqueries.google.com/complete/search?${e}`),s=await n.json();return!Array.isArray(s)||s.length<2?void 0:s[1]}(c)),2&t.$$.dirty&&u&&window.open(function(t){return`https://www.google.com/search?q=${encodeURI(t)}`}(u),"_self")},[o,u,r,l,s,a,function(t){if(t.defaultPrevented)return;if(void 0===t.key)return;if(!["ArrowDown","ArrowUp","Enter"].includes(t.key))return;const e=document.getElementById("autocomplete-list");if(!e)return;const s=e.getElementsByTagName("div");s&&("Enter"===t.key?-1===l?n(1,u=o):s[l].click():("ArrowDown"===t.key?n(3,l+=1):"ArrowUp"===t.key&&n(3,l-=1),l>=s.length&&n(3,l=0),l<-1&&n(3,l=s.length-1)),t.preventDefault())},c,function(){o=this.value,n(0,o)},function(t){E[t?"unshift":"push"]((()=>{r=t,n(2,r)}))},t=>n(1,u=t),()=>n(1,u=o)]}class z extends t{constructor(t){super(),e(this,t,M,F,n,{})}}function C(t){let e,n,f,g,v,y,$,k;return document.title="Home",v=new V({}),$=new z({}),{c(){e=s("style"),n=a("body {\n\t\t\tmargin: 0px;\n\t\t}"),f=m(),g=s("div"),D(v.$$.fragment),y=m(),D($.$$.fragment),this.h()},l(t){const s=T('[data-svelte="svelte-1eu5k7m"]',document.head);e=r(s,"STYLE",{});var a=l(e);n=o(a,"body {\n\t\t\tmargin: 0px;\n\t\t}"),a.forEach(c),s.forEach(c),f=p(t),g=r(t,"DIV",{class:!0});var u=l(g);P(v.$$.fragment,u),y=p(u),P($.$$.fragment,u),u.forEach(c),this.h()},h(){u(g,"class","svelte-riy18x")},m(t,s){h(document.head,e),h(e,n),i(t,f,s),i(t,g,s),U(v,g,null),h(g,y),U($,g,null),k=!0},p:d,i(t){k||(N(v.$$.fragment,t),N($.$$.fragment,t),k=!0)},o(t){S(v.$$.fragment,t),S($.$$.fragment,t),k=!1},d(t){c(e),t&&c(f),t&&c(g),G(v),G($)}}}export default class extends t{constructor(t){super(),e(this,t,null,C,n,{})}}
