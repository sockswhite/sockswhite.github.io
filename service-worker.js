if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>r(e,c),f={module:{uri:c},exports:a,require:n};i[c]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-0ff1265b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/05/22/Golang基础语法/index.html",revision:"89f770690912922be69400095c9d8d3c"},{url:"404.html",revision:"6d547011f37335a8d187c19f1b733ca4"},{url:"archives/2022/05/index.html",revision:"83d40a4c2270831813d2d303e36e5aae"},{url:"archives/2022/index.html",revision:"d66eea3ad291c607fa657ae5558b6e4b"},{url:"archives/index.html",revision:"1d2e4d0318e517a50b7cb6b328d10890"},{url:"categories/Golang笔记/index.html",revision:"2c5f2e7eb7191ba48f56f8fd6afee72e"},{url:"categories/index.html",revision:"636f6415897802cd22889f31ade67378"},{url:"css/index.css",revision:"87a050041c011846eedc427bdb93f211"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"2123f36cbbdb8fec5481b3eb88558cf9"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/Golang基础知识/index.html",revision:"7a0d0edf77ff2f3e9fa6ea14756b3eae"},{url:"tags/Go语言学习笔记/index.html",revision:"f31fe8cd1d7210ee06491b1fcf62ab0c"},{url:"tags/index.html",revision:"5fb79d7dcba659132354108a430870ad"}],{})}));
//# sourceMappingURL=service-worker.js.map
