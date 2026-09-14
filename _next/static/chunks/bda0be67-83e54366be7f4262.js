"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6417],{89792:function(e,t,r){r.d(t,{$j:function(){return t8},Ct:function(){return t3},EK:function(){return ru},F2:function(){return nt},Fg:function(){return eB},J2:function(){return ol},Jh:function(){return tK},Kq:function(){return oy},Kx:function(){return oM},Lg:function(){return x},Lt:function(){return R},NM:function(){return rF},O8:function(){return T},OK:function(){return nQ},Od:function(){return nL},Oo:function(){return nn},Ph:function(){return ov},Q5:function(){return C},Qr:function(){return nI},R:function(){return nE},RE:function(){return rH},Re:function(){return rV},SV:function(){return rB},Tu:function(){return nm},VW:function(){return n5},Vq:function(){return nb},W2:function(){return rh},X6:function(){return rx},XL:function(){return eS},XZ:function(){return rd},Xp:function(){return r6},Y8:function(){return oc},Zb:function(){return ri},__:function(){return tA},bg:function(){return rK},d2:function(){return eQ},eb:function(){return eL},f6:function(){return eN},fo:function(){return rY},gF:function(){return ry},h4:function(){return eE},hO:function(){return z},h_:function(){return r5},iX:function(){return rL},j2:function(){return nj},kC:function(){return t5},kS:function(){return n_},li:function(){return rU},m4:function(){return v},mh:function(){return r0},oi:function(){return oV},p2:function(){return tX},p8:function(){return nx},pm:function(){return n6},qE:function(){return tW},qh:function(){return e_},rj:function(){return rm},rs:function(){return oE},sJ:function(){return rQ},sN:function(){return nT},sz:function(){return rA},td:function(){return nH},ts:function(){return eC},u:function(){return oZ},uE:function(){return oU},ue:function(){return eP},v2:function(){return nR},vI:function(){return r4},x4:function(){return nV},xu:function(){return tJ},xv:function(){return t1},zx:function(){return ro}});var o=r(4864),n=r(47936),i=r(85893),a=r(65490),l=r(67294),d=r(59864),s=r(964),c=r(46926),u=r(18612),f=r(18573),p=r(1371),h=r(88574),b=r(66828),m=r(73935),g=r(41622);let v=o.m4,x=(0,o.fi)(),w=[],y={},$="--motion-content-opacity",k={initial:{opacity:.5,[$]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[$]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[$]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function z(e){return 0===e?0:`${e/16}rem`}function R(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function j(e,t,r=w){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:i}=(0,n.aQ)(e);return R(o,r,e=>{var r;return r=z(i[e]),t.reduce((e,t)=>(e[t]=r,e),{})})}function E(e,t){let{$size:r,$weight:o}=t,{font:i,media:a}=(0,n.aQ)(t.theme),{family:l,sizes:d,weights:s}=i[e],c=o&&s[o]||s.regular,u=d[2],f={position:"relative",fontFamily:l,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[f,...R(a,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:n,letterSpacing:i,lineHeight:a}=e,l=t+r,d=a-l,s=2*Math.floor(1.125*o/2)+1;return{fontSize:z(o),lineHeight:`calc(${a} / ${o})`,letterSpacing:z(i),transform:`translateY(${z(r)})`,"&:before":{marginTop:`calc(${z(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:z((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:z((d-n)/2)}}})(d[e]||u))]:(E.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:f}),E.warned=!0),[f])}function S(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$align,e=>({textAlign:e}))}function C(e,t){let r=(0,l.useMemo)(()=>JSON.stringify(e??t),[t,e]);return(0,l.useMemo)(()=>void 0===e?t||w:Array.isArray(e)?e:[e],[r])}function _(e,t){let r=[e];for(let e of t)Array.isArray(e)?r.push(...e):r.push(e);return r.filter(Boolean)}function T(e,t,r){let o,n,i,d,s;let c=(0,a.c)(12),u=void 0===t?w:t,[f,p]=(0,l.useState)(null);c[0]!==f||c[1]!==u?(o=()=>_(f,u),c[0]=f,c[1]=u,c[2]=o):o=c[2];let[h,b]=(0,l.useState)(o),m=(0,l.useRef)(h);return c[3]!==f||c[4]!==u?(n=()=>{let e=m.current,t=_(f,u);if(e.length!==t.length){b(t),m.current=t;return}for(let r of e)if(!t.includes(r)){b(t),m.current=t;return}for(let r of t)if(!e.includes(r)){b(t),m.current=t;return}},i=[f,u],c[3]=f,c[4]=u,c[5]=n,c[6]=i):(n=c[5],i=c[6]),(0,l.useEffect)(n,i),c[7]!==e||c[8]!==r||c[9]!==h?(d=()=>{if(!e)return;let t=t=>{let o=t.target;if(o instanceof Node&&!(r&&!r.contains(o))){for(let e of h)if(o===e||e.contains(o))return;e(t)}};return window.addEventListener("mousedown",t),()=>{window.removeEventListener("mousedown",t)}},s=[r,e,h],c[7]=e,c[8]=r,c[9]=h,c[10]=d,c[11]=s):(d=c[10],s=c[11]),(0,l.useEffect)(d,s),p}function M(e,t,r){let o,n,i;let d=(0,a.c)(8),s=void 0===t?F:t;d[0]!==e||d[1]!==r||d[2]!==s?(o=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let n=r?.();if(!n||n.contains(o)){for(let e of s().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},d[0]=e,d[1]=r,d[2]=s,d[3]=o):o=d[3];let c=(0,g.i)(o),u=!!e;d[4]!==u||d[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i=[u,c],d[4]=u,d[5]=c,d[6]=n,d[7]=i):(n=d[6],i=d[7]),(0,l.useEffect)(n,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function F(){return w}function O(e,t){let r,o;let n=(0,a.c)(6);n[0]!==e.current||n[1]!==t?(r=()=>{e.current?.setCustomValidity(t||"")},n[0]=e.current,n[1]=t,n[2]=r):r=n[2],n[3]!==t||n[4]!==e?(o=[t,e],n[3]=t,n[4]=e,n[5]=o):o=n[5],(0,l.useEffect)(r,o)}var N,A=[],L="ResizeObserver loop completed with undelivered notifications.",B=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:L}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=L),window.dispatchEvent(e)};(I=N||(N={})).BORDER_BOX="border-box",I.CONTENT_BOX="content-box",I.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var I,D,Q=function(e){return Object.freeze(e)},P=function(e,t){this.inlineSize=e,this.blockSize=t,Q(this)},H=function(){function e(e,t,r,o){return this.x=e,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Q(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,r=this.top,o=this.right,n=this.bottom;return{x:e,y:t,top:r,right:o,bottom:n,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),V=function(e){return e instanceof SVGElement&&"getBBox"in e},W=function(e){if(V(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e.offsetWidth,i=e.offsetHeight;return!(n||i||e.getClientRects().length)},q=function(e){if(e instanceof Element)return!0;var t,r=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},X=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},G="u">typeof window?window:{},Y=new WeakMap,K=/auto|scroll/,U=/^tb|vertical/,J=/msie|trident/i.test(G.navigator&&G.navigator.userAgent),Z=function(e){return parseFloat(e||"0")},ee=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new P((r?t:e)||0,(r?e:t)||0)},et=Q({devicePixelContentBoxSize:ee(),borderBoxSize:ee(),contentBoxSize:ee(),contentRect:new H(0,0,0,0)}),er=function(e,t){if(void 0===t&&(t=!1),Y.has(e)&&!t)return Y.get(e);if(W(e))return Y.set(e,et),et;var r=getComputedStyle(e),o=V(e)&&e.ownerSVGElement&&e.getBBox(),n=!J&&"border-box"===r.boxSizing,i=U.test(r.writingMode||""),a=!o&&K.test(r.overflowY||""),l=!o&&K.test(r.overflowX||""),d=o?0:Z(r.paddingTop),s=o?0:Z(r.paddingRight),c=o?0:Z(r.paddingBottom),u=o?0:Z(r.paddingLeft),f=o?0:Z(r.borderTopWidth),p=o?0:Z(r.borderRightWidth),h=o?0:Z(r.borderBottomWidth),b=o?0:Z(r.borderLeftWidth),m=u+s,g=d+c,v=b+p,x=f+h,w=l?e.offsetHeight-x-e.clientHeight:0,y=a?e.offsetWidth-v-e.clientWidth:0,$=o?o.width:Z(r.width)-(n?m+v:0)-y,k=o?o.height:Z(r.height)-(n?g+x:0)-w,z=$+m+y+v,R=k+g+w+x,j=Q({devicePixelContentBoxSize:ee(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:ee(z,R,i),contentBoxSize:ee($,k,i),contentRect:new H(u,d,$,k)});return Y.set(e,j),j},eo=function(e,t,r){var o=er(e,r),n=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case N.DEVICE_PIXEL_CONTENT_BOX:return a;case N.BORDER_BOX:return n;default:return i}},en=function(e){var t=er(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=Q([t.borderBoxSize]),this.contentBoxSize=Q([t.contentBoxSize]),this.devicePixelContentBoxSize=Q([t.devicePixelContentBoxSize])},ei=function(e){if(W(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},ea=function(){var e=1/0,t=[];A.forEach(function(r){if(0!==r.activeTargets.length){var o=[];r.activeTargets.forEach(function(t){var r=new en(t.target),n=ei(t.target);o.push(r),t.lastReportedSize=eo(t.target,t.observedBox),n<e&&(e=n)}),t.push(function(){r.callback.call(r.observer,o,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var r=0;r<t.length;r++)(0,t[r])();return e},el=function(e){A.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(ei(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},ed=function(){var e=0;for(el(0);A.some(function(e){return e.activeTargets.length>0});)el(e=ea());return A.some(function(e){return e.skippedTargets.length>0})&&B(),e>0},es=[],ec=function(e){if(!D){var t=0,r=document.createTextNode("");new MutationObserver(function(){return es.splice(0).forEach(function(e){return e()})}).observe(r,{characterData:!0}),D=function(){r.textContent="".concat(t?t--:t++)}}es.push(e),D()},eu=function(e){ec(function(){requestAnimationFrame(e)})},ef=0,ep={attributes:!0,characterData:!0,childList:!0,subtree:!0},eh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],eb=function(e){return void 0===e&&(e=0),Date.now()+e},em=!1,eg=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!em){em=!0;var r=eb(e);eu(function(){var o=!1;try{o=ed()}finally{if(em=!1,e=r-eb(),!ef)return;o?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,ep)};document.body?t():G.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),eh.forEach(function(t){return G.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),eh.forEach(function(t){return G.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),ev=function(e){!ef&&e>0&&eg.start(),(ef+=e)||eg.stop()},ex=function(){function e(e,t){this.target=e,this.observedBox=t||N.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=eo(this.target,this.observedBox,!0);return V(e=this.target)||X(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ew=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},ey=new WeakMap,e$=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return -1},ek=function(){function e(){}return e.connect=function(e,t){var r=new ew(e,t);ey.set(e,r)},e.observe=function(e,t,r){var o=ey.get(e),n=0===o.observationTargets.length;0>e$(o.observationTargets,t)&&(n&&A.push(o),o.observationTargets.push(new ex(t,r&&r.box)),ev(1),eg.schedule())},e.unobserve=function(e,t){var r=ey.get(e),o=e$(r.observationTargets,t),n=1===r.observationTargets.length;o>=0&&(n&&A.splice(A.indexOf(r),1),r.observationTargets.splice(o,1),ev(-1))},e.disconnect=function(e){var t=this,r=ey.get(e);r.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),ez=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ek.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!q(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ek.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!q(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ek.unobserve(this,e)},e.prototype.disconnect=function(){ek.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let eR="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:ez,ej=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(r,o){let n=t.get(r)||[],i=e.get(r);return t.has(r)||(t.set(r,n),i=({subscribe(e,t){let r=new eR(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(r,e=>{for(let t of n)t(e)})),n.push(o),()=>{let e=n.indexOf(o);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function eE(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(null);return o[0]!==e?(t=()=>{if(e)return ej.subscribe(e,i)},r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,l.useEffect)(t,r),n}function eS(e){return eE(e)?._contentRect||null}function eC(e){let t;let r=(0,a.c)(1),o=(0,l.useRef)(null);return r[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>o.current,r[0]=t):t=r[0],(0,l.useImperativeHandle)(e,t),o}function e_(e){let t,r;let o=(0,a.c)(3);return o[0]!==e?(t=()=>(addEventListener("keydown",e),()=>removeEventListener("keydown",e)),r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,l.useEffect)(t,r)}function eT(e,t){let{subscribe:r,getSnapshot:o}=(0,l.useMemo)(()=>{let t;let r=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=r();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>r().matches}},[e]);return(0,l.useDebugValue)(e),(0,l.useSyncExternalStore)(r,o,t)}let eM=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function eF(e,t){let r=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(eM[r]=eM[r]||(0,l.createContext)(t),eM[r])}let eO=eF("@sanity/ui/context/theme",null);function eN(e){let t,r,n,d;let c=(0,a.c)(15),u=(0,l.useContext)(eO),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),b=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==b?(e={version:0,theme:h,scheme:p,tone:b},c[0]=h,c[1]=p,c[2]=b,c[3]=e):e=c[3],t=e}let m=t;t:{let e;if(!h){r=null;break t}c[4]!==h||c[5]!==p||c[6]!==b?(e=(0,o.BA)(h,p,b),c[4]=h,c[5]=p,c[6]=b,c[7]=e):e=c[7],r=e}let g=r;if(!g){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==g||c[10]!==f?(n=(0,i.jsx)(s.f6,{theme:g,children:f}),c[9]=g,c[10]=f,c[11]=n):n=c[11],c[12]!==m||c[13]!==n?(d=(0,i.jsx)(eO.Provider,{value:m,children:n}),c[12]=m,c[13]=n,c[14]=d):d=c[14],d}function eA(){let e=(0,l.useContext)(eO);if(!e)throw Error("useRootTheme(): missing context value");return e}function eL(e){let t;let r=(0,a.c)(5),{children:o,scheme:n,tone:l}=e,d=eA(),s=n||d.scheme;return r[0]!==s||r[1]!==d.theme||r[2]!==l||r[3]!==o?(t=(0,i.jsx)(eN,{scheme:s,theme:d.theme,tone:l,children:o}),r[0]=s,r[1]=d.theme,r[2]=l,r[3]=o,r[4]=t):t=r[4],t}function eB(){return(0,s.Fg)()}function eI(){let e;let t=(0,a.c)(2),r=(0,s.Fg)();return t[0]!==r?(e=(0,n.aQ)(r),t[0]=r,t[1]=e):e=t[1],e}function eD(){return 0}function eQ(){let e,t;let r=(0,a.c)(2),{media:o}=eI();return r[0]!==o?(t=function(e){let t;let r=e.length,o=()=>{if(!t){t=[];for(let n=r;n>-1;n-=1){var o;let r=0===(o=n)?`screen and (max-width: ${e[o]-1}px)`:o===e.length?`screen and (min-width: ${e[o-1]}px)`:`screen and (min-width: ${e[o-1]}px) and (max-width: ${e[o]-1}px)`;t.push({index:n,mq:window.matchMedia(r)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}}}(o),r[0]=o,r[1]=t):t=r[1],e=t,(0,l.useSyncExternalStore)(e.subscribe,e.getSnapshot,eD)}function eP(e){return eT("(prefers-color-scheme: dark)",void 0===e?eH:e)}function eH(){return!1}function eV(e){return eT("(prefers-reduced-motion: reduce)",void 0===e?eW:e)}function eW(){return!1}function eq(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function eX(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function eG(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function eY(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function eK(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}eN.displayName="ThemeProvider",eL.displayName="ThemeColorProvider";let eU={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eJ={content:"content-box",border:"border-box"},eZ={stretch:"stretch",fill:"100%"};function e0(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function e1(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$sizing,e=>({boxSizing:eJ[e]}))}function e2(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$height,e=>({height:eZ[e]}))}function e3(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$overflow,e=>({overflow:e}))}let e4={"&&:not([hidden])":{display:"flex"}};function e5(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$align,e=>({alignItems:e}))}function e6(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$gap,e=>({gap:e?z(r[e]):void 0}))}function e7(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$wrap,e=>({flexWrap:e}))}function e8(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$justify,e=>({justifyContent:e}))}function e9(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$direction,e=>({flexDirection:e}))}let te={minWidth:0,minHeight:0};function tt(){return[te,tr]}function tr(e){let{media:t}=(0,n.aQ)(e.theme);return e.$flex?R(t,e.$flex,e=>({flex:e})):w}function to(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tn(e){let{base:t,border:r,focusRing:o}=e,n=o.offset+o.width,i=0-o.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,r&&to(r),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let ti={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},ta={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},tl={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function td(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function ts(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$autoRows,e=>({gridAutoRows:e&&tl[e]}))}function tc(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$autoCols,e=>({gridAutoColumns:e&&ta[e]}))}function tu(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function tf(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function tp(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$gap,e=>({gridGap:e?z(r[e]):void 0}))}function th(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$gapX,e=>({columnGap:e?z(r[e]):void 0}))}function tb(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$gapY,e=>({rowGap:e?z(r[e]):void 0}))}let tm={auto:"auto",full:"1 / -1"},tg={auto:"auto",full:"1 / -1"};function tv(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tm[e]})}function tx(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$rowStart,e=>({gridRowStart:e}))}function tw(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$rowEnd,e=>({gridRowEnd:e}))}function ty(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tg[e]})}function t$(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$columnStart,e=>({gridColumnStart:e}))}function tk(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function tz(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,n.aQ)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return R(d,u,(e,t)=>{let n=l.text.sizes[p[t]]||l.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[u[t]],d=s[f[t]],c={paddingTop:z(a-n.ascenderHeight),paddingRight:z(a),paddingBottom:z(a-n.descenderHeight),paddingLeft:z(a)};return o&&(c.paddingRight=z(a+i+d)),r&&(c.paddingLeft=z(a+i+d)),c})}function tR(e){return tz({...e,$iconRight:!0})}let tj=s.iv`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tE(){return tj}function tS(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:i,font:a}=(0,n.aQ)(e.theme);return s.iv`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${o&&a.text.weights[o]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function tC(e){let{font:t,media:r}=(0,n.aQ)(e.theme);return R(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:z(r.fontSize),lineHeight:r.lineHeight/r.fontSize}})}function t_(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:d}=(0,n.aQ)(e.theme);return s.iv`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${to({color:l.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:tn({border:{color:l.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:tn({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${to({color:l.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function tT(e){let{theme:t}=e;return[j(t,["padding"],e.$padding),j(t,["paddingLeft","paddingRight"],e.$paddingX),j(t,["paddingTop","paddingBottom"],e.$paddingY),j(t,["paddingTop"],e.$paddingTop),j(t,["paddingRight"],e.$paddingRight),j(t,["paddingBottom"],e.$paddingBottom),j(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function tM(e){let{media:t,radius:r}=(0,n.aQ)(e.theme);return R(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=z(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function tF(e,t){return`${e.map(z).join(" ")} ${t}`}let tO=s.zo.div(function(e){return E("label",e)},S,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return s.iv`
    text-transform: uppercase;

    ${t&&s.iv`
      color: var(--card-accent-fg-color);
    `}

    ${r&&s.iv`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tN=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,tA=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(22);p[0]!==e?({accent:c,align:d,children:n,muted:r,size:o,textOverflow:l,weight:u,...s}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s,p[7]=c,p[8]=u):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==r&&r,b=void 0===o?2:o,m=n;if("ellipsis"===l){let e;p[9]!==m?(e=(0,i.jsx)(tN,{children:m}),p[9]=m,p[10]=e):e=p[10],m=e}else{let e;p[11]!==m?(e=(0,i.jsx)("span",{children:m}),p[11]=m,p[12]=e):e=p[12],m=e}let g=C(d),v=C(b);return p[13]!==s||p[14]!==c||p[15]!==g||p[16]!==h||p[17]!==v||p[18]!==u||p[19]!==t||p[20]!==m?(f=(0,i.jsx)(tO,{"data-ui":"Label",...s,$accent:c,$align:g,$muted:h,$size:v,$weight:u,ref:t,children:m}),p[13]=s,p[14]=c,p[15]=g,p[16]=h,p[17]=v,p[18]=u,p[19]=t,p[20]=m,p[21]=f):f=p[21],f});tA.displayName="ForwardRef(Label)";let tL={root:function(e){let{$color:t}=e,{avatar:r}=(0,n.aQ)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tn({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}},arrow:function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}},bgStroke:function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}},stroke:function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}},initials:function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}},image:function(){return{position:"relative"}}},tB=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:z(r.size),height:z(r.size),borderRadius:z(r.size/2),"&>svg":{width:z(r.size),height:z(r.size),borderRadius:z(r.size/2)}}})},tL.root),tI=s.zo.div(tL.arrow),tD=s.zo.ellipse(tL.bgStroke),tQ=s.zo.ellipse(tL.stroke),tP=s.zo.div(tL.initials),tH=(0,s.zo)(tA)({color:"inherit"}),tV=s.zo.svg(tL.image),tW=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S;let _=(0,a.c)(53);_[0]!==e?({__unstable_hideInnerStroke:h,as:s,color:r,src:f,title:g,initials:b,onImageLoadError:p,arrowPosition:u,animateArrowFrom:c,status:o,size:n,...m}=e,_[0]=e,_[1]=r,_[2]=o,_[3]=n,_[4]=s,_[5]=c,_[6]=u,_[7]=f,_[8]=p,_[9]=h,_[10]=b,_[11]=m,_[12]=g):(r=_[1],o=_[2],n=_[3],s=_[4],c=_[5],u=_[6],f=_[7],p=_[8],h=_[9],b=_[10],m=_[11],g=_[12]);let T=void 0===r?"gray":r,M=void 0===o?"online":o,F=void 0===n?1:n,{avatar:O}=eI(),N=d.isValidElementType(s)?s:"div",A=C(F),L=(O.sizes[A[0]]||O.sizes[0]).size,B=L/2,I=(0,l.useId)(),[D,Q]=(0,l.useState)(c||u||"inside"),[P,H]=(0,l.useState)(!1),V=`avatar-image-${I}`;_[13]!==D||_[14]!==u?(v=()=>{if(D===u)return;let e=requestAnimationFrame(()=>Q(u));return()=>cancelAnimationFrame(e)},x=[D,u],_[13]=D,_[14]=u,_[15]=v,_[16]=x):(v=_[15],x=_[16]),(0,l.useEffect)(v,x),_[17]!==f?(w=()=>{f&&H(!1)},y=[f],_[17]=f,_[18]=w,_[19]=y):(w=_[18],y=_[19]),(0,l.useEffect)(w,y),_[20]!==p?($=()=>{H(!0),p&&p(Error("Avatar: the image failed to load"))},_[20]=p,_[21]=$):$=_[21];let W=$;if(_[22]!==A){let e;_[24]===Symbol.for("react.memo_cache_sentinel")?(e=e=>1===e?1:2===e?3:3===e?5:0,_[24]=e):e=_[24],z=A.map(e),_[22]=A,_[23]=z}else z=_[23];k=z;let q="string"==typeof N?N:void 0;return _[25]!==T?(R=(0,i.jsx)(tI,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:T})})}),_[25]=T,_[26]=R):R=_[26],_[27]!==P||_[28]!==f||_[29]!==L||_[30]!==W||_[31]!==V||_[32]!==B||_[33]!==h?(j=!P&&f&&(0,i.jsxs)(tV,{viewBox:`0 0 ${L} ${L}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:V,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:f,width:"1",height:"1",onError:W})})}),(0,i.jsx)("circle",{cx:B,cy:B,r:B,fill:`url(#${V})`}),!h&&(0,i.jsx)(tD,{cx:B,cy:B,rx:B,ry:B,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tQ,{cx:B,cy:B,rx:B,ry:B,vectorEffect:"non-scaling-stroke"})]}),_[27]=P,_[28]=f,_[29]=L,_[30]=W,_[31]=V,_[32]=B,_[33]=h,_[34]=j):j=_[34],_[35]!==P||_[36]!==f||_[37]!==b||_[38]!==k?(E=(P||!f)&&b&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tP,{children:(0,i.jsx)(tH,{forwardedAs:"span",size:k,weight:"medium",children:b})})}),_[35]=P,_[36]=f,_[37]=b,_[38]=k,_[39]=E):E=_[39],_[40]!==N||_[41]!==q||_[42]!==m||_[43]!==T||_[44]!==A||_[45]!==g||_[46]!==D||_[47]!==M||_[48]!==t||_[49]!==R||_[50]!==j||_[51]!==E?(S=(0,i.jsxs)(tB,{as:N,"data-as":q,"data-ui":"Avatar",...m,$color:T,$size:A,"aria-label":g,"data-arrow-position":D,"data-status":M,ref:t,title:g,children:[R,j,E]}),_[40]=N,_[41]=q,_[42]=m,_[43]=T,_[44]=A,_[45]=g,_[46]=D,_[47]=M,_[48]=t,_[49]=R,_[50]=j,_[51]=E,_[52]=S):S=_[52],S});tW.displayName="ForwardRef(Avatar)";let tq=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:z(r.size/2),minWidth:z(r.size),height:z(r.size)}:y})},function(e){let{space:t}=(0,n.aQ)(e.theme);return s.iv`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${z(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tX=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(10),{count:s,size:c}=e,u=C(void 0===c?1:c);if(d[0]!==u){let e;d[2]===Symbol.for("react.memo_cache_sentinel")?(e=e=>1===e?1:2===e?3:3===e?5:0,d[2]=e):e=d[2],o=u.map(e),d[0]=u,d[1]=o}else o=d[1];return r=o,d[3]!==r||d[4]!==s?(n=(0,i.jsx)(tA,{as:"span",size:r,weight:"medium",children:s}),d[3]=r,d[4]=s,d[5]=n):n=d[5],d[6]!==u||d[7]!==t||d[8]!==n?(l=(0,i.jsx)(tq,{$size:u,"data-ui":"AvatarCounter",ref:t,children:n}),d[6]=u,d[7]=t,d[8]=n,d[9]=l):l=d[9],l});tX.displayName="ForwardRef(AvatarCounter)";let tG=s.iv`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tY=s.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:z(r.distance)}}:y})},function(){return tG}),tK=(0,l.forwardRef)(function(e,t){let{children:r,maxLength:o=4,size:n=1,...a}=e,d=(0,l.useMemo)(()=>l.Children.toArray(r).filter(l.isValidElement),[r]),s=C(n),c=d.length,u=c-(Math.max(o,0)-1),f=u>1?d.slice(u,c):d;return(0,i.jsxs)(tY,{"data-ui":"AvatarStack",...a,ref:t,$size:s,children:[0===c&&(0,i.jsx)("div",{children:(0,i.jsx)(tX,{count:c,size:s})}),0!==c&&u>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tX,{count:u,size:s})}),f.map((e,t)=>(0,i.jsx)("div",{children:(0,l.cloneElement)(e,{size:s})},String(t)))]})});tK.displayName="ForwardRef(AvatarStack)";let tU=s.zo.div(function(){return eU},tt,function(){return[e1,e2,e3,e0]},function(){return[tv,tx,tw,ty,t$,tk]},function(e){let{theme:t}=e;return[j(t,["margin"],e.$margin),j(t,["marginLeft","marginRight"],e.$marginX),j(t,["marginTop","marginBottom"],e.$marginY),j(t,["marginTop"],e.$marginTop),j(t,["marginRight"],e.$marginRight),j(t,["marginBottom"],e.$marginBottom),j(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},tT),tJ=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S,_,T,M;let F=(0,a.c)(59);F[0]!==e?({as:r,column:d,columnStart:s,columnEnd:c,display:o,flex:u,height:f,margin:n,marginX:p,marginY:h,marginTop:b,marginRight:m,marginBottom:g,marginLeft:v,overflow:x,padding:l,paddingX:w,paddingY:y,paddingTop:$,paddingRight:k,paddingBottom:z,paddingLeft:R,row:j,rowStart:E,rowEnd:S,sizing:_,...T}=e,F[0]=e,F[1]=r,F[2]=o,F[3]=n,F[4]=l,F[5]=d,F[6]=s,F[7]=c,F[8]=u,F[9]=f,F[10]=p,F[11]=h,F[12]=b,F[13]=m,F[14]=g,F[15]=v,F[16]=x,F[17]=w,F[18]=y,F[19]=$,F[20]=k,F[21]=z,F[22]=R,F[23]=j,F[24]=E,F[25]=S,F[26]=_,F[27]=T):(r=F[1],o=F[2],n=F[3],l=F[4],d=F[5],s=F[6],c=F[7],u=F[8],f=F[9],p=F[10],h=F[11],b=F[12],m=F[13],g=F[14],v=F[15],x=F[16],w=F[17],y=F[18],$=F[19],k=F[20],z=F[21],R=F[22],j=F[23],E=F[24],S=F[25],_=F[26],T=F[27]);let O=void 0===r?"div":r,N=void 0===o?"block":o,A=void 0===n?0:n,L=void 0===l?0:l,B="string"==typeof O?O:void 0,I=C(d),D=C(s),Q=C(c),P=C(N),H=C(u),V=C(f),W=C(A),q=C(p),X=C(h),G=C(b),Y=C(m),K=C(g),U=C(v),J=C(x),Z=C(L),ee=C(w),et=C(y),er=C($),eo=C(k),en=C(z),ei=C(R),ea=C(j),el=C(E),ed=C(S),es=C(_);return F[28]!==B||F[29]!==T||F[30]!==I||F[31]!==D||F[32]!==Q||F[33]!==P||F[34]!==H||F[35]!==V||F[36]!==W||F[37]!==q||F[38]!==X||F[39]!==G||F[40]!==Y||F[41]!==K||F[42]!==U||F[43]!==J||F[44]!==Z||F[45]!==ee||F[46]!==et||F[47]!==er||F[48]!==eo||F[49]!==en||F[50]!==ei||F[51]!==ea||F[52]!==el||F[53]!==ed||F[54]!==es||F[55]!==O||F[56]!==t||F[57]!==e.children?(M=(0,i.jsx)(tU,{"data-as":B,"data-ui":"Box",...T,$column:I,$columnStart:D,$columnEnd:Q,$display:P,$flex:H,$height:V,$margin:W,$marginX:q,$marginY:X,$marginTop:G,$marginRight:Y,$marginBottom:K,$marginLeft:U,$overflow:J,$padding:Z,$paddingX:ee,$paddingY:et,$paddingTop:er,$paddingRight:eo,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:el,$rowEnd:ed,$sizing:es,as:O,ref:t,children:e.children}),F[28]=B,F[29]=T,F[30]=I,F[31]=D,F[32]=Q,F[33]=P,F[34]=H,F[35]=V,F[36]=W,F[37]=q,F[38]=X,F[39]=G,F[40]=Y,F[41]=K,F[42]=U,F[43]=J,F[44]=Z,F[45]=ee,F[46]=et,F[47]=er,F[48]=eo,F[49]=en,F[50]=ei,F[51]=ea,F[52]=el,F[53]=ed,F[54]=es,F[55]=O,F[56]=t,F[57]=e.children,F[58]=M):M=F[58],M});tJ.displayName="ForwardRef(Box)";let tZ=s.zo.div(function(e){return E("text",e)},S,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return s.iv`
    color: var(--card-fg-color);

    ${t&&s.iv`
      color: var(--card-accent-fg-color);
    `}

    ${r&&s.iv`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),t0=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,t1=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:r,align:s,children:l,muted:o,size:n,textOverflow:d,weight:u,...c}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let b=void 0!==r&&r,m=void 0!==o&&o,g=void 0===n?2:n,v=l;if("ellipsis"===d){let e;h[9]!==v?(e=(0,i.jsx)(t0,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=C(s),w=C(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==c||h[14]!==b||h[15]!==x||h[16]!==m||h[17]!==t||h[18]!==w||h[19]!==u||h[20]!==f?(p=(0,i.jsx)(tZ,{"data-ui":"Text",...c,$accent:b,$align:x,$muted:m,ref:t,$size:w,$weight:u,children:f}),h[13]=c,h[14]=b,h[15]=x,h[16]=m,h[17]=t,h[18]=w,h[19]=u,h[20]=f,h[21]=p):p=h[21],p});t1.displayName="ForwardRef(Text)";let t2=(0,s.zo)(tJ)(tM,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),t3=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);if(f[0]!==e){let{children:t,fontSize:i,mode:a,padding:c,radius:u,tone:p,...h}=e;d=t,r=i,o=c,n=u,l=p,s=h,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s}else r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6];let p=void 0===r?1:r,h=void 0===o?1:o,b=void 0===l?"default":l,m=C(void 0===n?"full":n),g=C(h);return f[7]!==p||f[8]!==d?(c=(0,i.jsx)(t1,{size:p,children:d}),f[7]=p,f[8]=d,f[9]=c):c=f[9],f[10]!==s||f[11]!==b||f[12]!==m||f[13]!==g||f[14]!==t||f[15]!==c?(u=(0,i.jsx)(t2,{"data-ui":"Badge",...s,$tone:b,$radius:m,padding:g,ref:t,children:c}),f[10]=s,f[11]=b,f[12]=m,f[13]=g,f[14]=t,f[15]=c,f[16]=u):u=f[16],u});t3.displayName="ForwardRef(Badge)";let t4=(0,s.zo)(tJ)(tt,function(){return[e4,e5,e6,e7,e8,e9]}),t5=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({align:o,as:c,direction:r,gap:n,justify:l,wrap:d,...s}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s,f[7]=c):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6],c=f[7]);let p=void 0===r?"row":r,h=C(o),b=C(p),m=C(n),g=C(l),v=C(d);return f[8]!==s||f[9]!==h||f[10]!==b||f[11]!==m||f[12]!==g||f[13]!==v||f[14]!==c||f[15]!==t?(u=(0,i.jsx)(t4,{"data-ui":"Flex",...s,$align:h,$direction:b,$gap:m,$justify:g,$wrap:v,forwardedAs:c,ref:t}),f[8]=s,f[9]=h,f[10]=b,f[11]=m,f[12]=g,f[13]=v,f[14]=c,f[15]=t,f[16]=u):u=f[16],u});t5.displayName="ForwardRef(Flex)";let t6=s.F4`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t7=(0,s.zo)(t1)`
  & > span > svg {
    animation: ${t6} 500ms linear infinite;
  }
`,t8=(0,l.forwardRef)(function(e,t){let r,o;let n=(0,a.c)(4);return n[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,i.jsx)(c.L4p,{}),n[0]=r):r=n[0],n[1]!==e||n[2]!==t?(o=(0,i.jsx)(t7,{"data-ui":"Spinner",...e,ref:t,children:r}),n[1]=e,n[2]=t,n[3]=o):o=n[3],o});function t9(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function re(...e){return e.filter(Boolean).join(",")}t8.displayName="ForwardRef(Spinner)";let rt=s.zo.button(tM,function(e){let{$width:t}=e,{style:r}=(0,n.aQ)(e.theme);return s.iv`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&s.iv`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:i}=(0,n.aQ)(e.theme),a="ghost"===e.$mode,l=o.button[t]||o.button.default,d=l[e.$tone]||l.default,s={width:r.border.width,color:"var(--card-border-color)"},c=void 0;return[t9(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:to(s),'&:disabled, &[data-disabled="true"]':t9(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:re(to(s),a?c:void 0),"&:focus":{boxShadow:tn({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:re(to(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":t9(o,d.hovered),"&:active":t9(o,d.pressed),"&[data-hovered]":t9(o,d.hovered)},"&[data-selected]":t9(o,d.pressed)}},i?.button?.root].filter(Boolean)}),rr=s.zo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`,ro=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S,_,T,M,F,O,N,A,L;let B=(0,a.c)(64);B[0]!==e?({children:S,disabled:$,fontSize:r,icon:z,iconRight:j,justify:o,loading:y,mode:n,padding:s,paddingX:b,paddingY:m,paddingTop:g,paddingBottom:v,paddingLeft:x,paddingRight:w,radius:c,selected:k,space:u,text:R,textAlign:E,tone:f,type:p,muted:h,width:T,..._}=e,B[0]=e,B[1]=r,B[2]=o,B[3]=n,B[4]=s,B[5]=c,B[6]=u,B[7]=f,B[8]=p,B[9]=h,B[10]=b,B[11]=m,B[12]=g,B[13]=v,B[14]=x,B[15]=w,B[16]=y,B[17]=$,B[18]=k,B[19]=z,B[20]=R,B[21]=j,B[22]=E,B[23]=S,B[24]=_,B[25]=T):(r=B[1],o=B[2],n=B[3],s=B[4],c=B[5],u=B[6],f=B[7],p=B[8],h=B[9],b=B[10],m=B[11],g=B[12],v=B[13],x=B[14],w=B[15],y=B[16],$=B[17],k=B[18],z=B[19],R=B[20],j=B[21],E=B[22],S=B[23],_=B[24],T=B[25]);let I=void 0===r?1:r,D=void 0===o?"center":o,Q=void 0===n?"default":n,P=void 0===s?3:s,H=void 0===c?2:c,V=void 0===u?3:u,W=void 0===f?"default":f,q=void 0===p?"button":p,X=void 0!==h&&h,{button:G}=eI(),Y=C(D),K=C(P),U=C(b),J=C(m),Z=C(g),ee=C(v),et=C(x),er=C(w),eo=C(H),en=C(V);B[26]!==K||B[27]!==U||B[28]!==J||B[29]!==Z||B[30]!==ee||B[31]!==et||B[32]!==er?(F={padding:K,paddingX:U,paddingY:J,paddingTop:Z,paddingBottom:ee,paddingLeft:et,paddingRight:er},B[26]=K,B[27]=U,B[28]=J,B[29]=Z,B[30]=ee,B[31]=et,B[32]=er,B[33]=F):F=B[33],M=F;let ei=!!(y||$),ea=k?"":void 0,el=!!(y||$);return B[34]!==y?(O=!!y&&(0,i.jsx)(rr,{children:(0,i.jsx)(t8,{})}),B[34]=y,B[35]=O):O=B[35],B[36]!==z||B[37]!==R||B[38]!==j||B[39]!==I||B[40]!==X||B[41]!==E||B[42]!==G||B[43]!==Y||B[44]!==en||B[45]!==M?(N=(z||R||j)&&(0,i.jsx)(tJ,{as:"span",...M,children:(0,i.jsxs)(t5,{as:"span",justify:Y,gap:en,children:[z&&(0,i.jsxs)(t1,{size:I,children:[(0,l.isValidElement)(z)&&z,(0,d.isValidElementType)(z)&&(0,i.jsx)(z,{})]}),R&&(0,i.jsx)(tJ,{children:(0,i.jsx)(t1,{muted:X,align:E,size:I,textOverflow:"ellipsis",weight:G.textWeight,children:R})}),j&&(0,i.jsxs)(t1,{size:I,children:[(0,l.isValidElement)(j)&&j,(0,d.isValidElementType)(j)&&(0,i.jsx)(j,{})]})]})}),B[36]=z,B[37]=R,B[38]=j,B[39]=I,B[40]=X,B[41]=E,B[42]=G,B[43]=Y,B[44]=en,B[45]=M,B[46]=N):N=B[46],B[47]!==S||B[48]!==M?(A=S&&(0,i.jsx)(tJ,{as:"span",...M,children:S}),B[47]=S,B[48]=M,B[49]=A):A=B[49],B[50]!==_||B[51]!==Q||B[52]!==eo||B[53]!==W||B[54]!==ei||B[55]!==ea||B[56]!==el||B[57]!==t||B[58]!==q||B[59]!==T||B[60]!==O||B[61]!==N||B[62]!==A?(L=(0,i.jsxs)(rt,{"data-ui":"Button",..._,$mode:Q,$radius:eo,$tone:W,"data-disabled":ei,"data-selected":ea,disabled:el,ref:t,type:q,$width:T,children:[O,N,A]}),B[50]=_,B[51]=Q,B[52]=eo,B[53]=W,B[54]=ei,B[55]=ea,B[56]=el,B[57]=t,B[58]=q,B[59]=T,B[60]=O,B[61]=N,B[62]=A,B[63]=L):L=B[63],L});ro.displayName="ForwardRef(Button)";let rn=(0,s.zo)(tJ)(function(){return[eq,eX,eG,eY,eK]},tM,function(e){let{card:t,media:r,shadow:o}=(0,n.aQ)(e.theme);return R(r,e.$shadow,e=>(function(e,t=1){if(!e)return y;let r=`0 0 0 ${z(t)} var(--card-shadow-outline-color)`,o=tF(e.umbra,"var(--card-shadow-umbra-color)"),n=tF(e.penumbra,"var(--card-shadow-penumbra-color)"),i=tF(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${n}, ${i}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=(0,n.aQ)(e.theme);return s.iv`
    ${t&&s.iv`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:i,color:a,style:l}=(0,n.aQ)(e.theme),d={width:i.border.width,color:"var(--card-border-color)"};return s.iv`
    color-scheme: ${a._dark?"dark":"light"};

    ${t9(a,a,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t9(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t9(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t9(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t9(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t9(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tn({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t9(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t9(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t9(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t9(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t9(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tn({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),ri=(0,l.forwardRef)(function(e,t){let r,o,n,l,s,c,u,f,p,h,b,m,g,v,x,w,y,$;let k=(0,a.c)(42);k[0]!==e?({__unstable_checkered:r,__unstable_focusRing:o,as:s,border:c,borderTop:u,borderRight:f,borderBottom:p,borderLeft:h,muted:x,pressed:m,radius:n,scheme:w,selected:g,shadow:b,tone:l,...v}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=n,k[4]=l,k[5]=s,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=b,k[12]=m,k[13]=g,k[14]=v,k[15]=x,k[16]=w):(r=k[1],o=k[2],n=k[3],l=k[4],s=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],b=k[11],m=k[12],g=k[13],v=k[14],x=k[15],w=k[16]);let z=void 0!==r&&r,R=void 0!==o&&o,j=void 0===n?0:n,E=void 0===l?"default":l,S=(0,d.isValidElementType)(s)?s:"div",_=eA(),T="inherit"===E?_.tone:E,M="string"==typeof S?S:void 0,F=_.scheme,O=C(c),N=C(u),A=C(f),L=C(p),B=C(h),I=C(j),D=C(b),Q=z?"":void 0,P=m?"":void 0,H=g?"":void 0;return k[17]!==M||k[18]!==_.scheme||k[19]!==T||k[20]!==v||k[21]!==O||k[22]!==N||k[23]!==A||k[24]!==L||k[25]!==B||k[26]!==z||k[27]!==R||k[28]!==x||k[29]!==I||k[30]!==D||k[31]!==Q||k[32]!==P||k[33]!==H||k[34]!==S||k[35]!==t||k[36]!==g?(y=(0,i.jsx)(rn,{"data-as":M,"data-scheme":F,"data-ui":"Card","data-tone":T,...v,$border:O,$borderTop:N,$borderRight:A,$borderBottom:L,$borderLeft:B,$checkered:z,$focusRing:R,$muted:x,$radius:I,$shadow:D,$tone:T,"data-checkered":Q,"data-pressed":P,"data-selected":H,forwardedAs:S,ref:t,selected:g}),k[17]=M,k[18]=_.scheme,k[19]=T,k[20]=v,k[21]=O,k[22]=N,k[23]=A,k[24]=L,k[25]=B,k[26]=z,k[27]=R,k[28]=x,k[29]=I,k[30]=D,k[31]=Q,k[32]=P,k[33]=H,k[34]=S,k[35]=t,k[36]=g,k[37]=y):y=k[37],k[38]!==w||k[39]!==T||k[40]!==y?($=(0,i.jsx)(eL,{scheme:w,tone:T,children:y}),k[38]=w,k[39]=T,k[40]=y,k[41]=$):$=k[41],$});ri.displayName="ForwardRef(Card)";let ra=s.zo.div(function(){return s.iv`
    position: relative;
    display: inline-block;
  `}),rl=s.zo.input(function(e){let{color:t,input:r,radius:o}=(0,n.aQ)(e.theme),{focusRing:i}=r.checkbox;return s.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${z(r.checkbox.size)};
      width: ${z(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${to({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${z(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${to({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tn({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tn({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${to({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tn({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${to({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${to({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),rd=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v,x;let w=(0,a.c)(25);w[0]!==e?({checked:u,className:f,disabled:n,indeterminate:r,customValidity:o,readOnly:d,style:p,...s}=e,w[0]=e,w[1]=r,w[2]=o,w[3]=n,w[4]=d,w[5]=s,w[6]=u,w[7]=f,w[8]=p):(r=w[1],o=w[2],n=w[3],d=w[4],s=w[5],u=w[6],f=w[7],p=w[8]);let y=(0,l.useRef)(null);w[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>y.current,w[9]=h):h=w[9],(0,l.useImperativeHandle)(t,h),w[10]!==r?(b=()=>{y.current&&(y.current.indeterminate=r||!1)},m=[r],w[10]=r,w[11]=b,w[12]=m):(b=w[11],m=w[12]),(0,l.useEffect)(b,m),O(y,o);let $=!n&&d?"":void 0,k=o?"":void 0,z=n||d;return w[13]!==$||w[14]!==k||w[15]!==s||w[16]!==u||w[17]!==z||w[18]!==d?(g=(0,i.jsx)(rl,{"data-read-only":$,"data-error":k,...s,checked:u,disabled:z,type:"checkbox",readOnly:d,ref:y}),w[13]=$,w[14]=k,w[15]=s,w[16]=u,w[17]=z,w[18]=d,w[19]=g):g=w[19],w[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsxs)("span",{children:[(0,i.jsx)(c.KML,{}),(0,i.jsx)(c.HFL,{})]}),w[20]=v):v=w[20],w[21]!==f||w[22]!==p||w[23]!==g?(x=(0,i.jsxs)(ra,{className:f,"data-ui":"Checkbox",style:p,children:[g,v]}),w[21]=f,w[22]=p,w[23]=g,w[24]=x):x=w[24],x});function rs({theme:e}){let{color:{syntax:t}}=(0,n.aQ)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}rd.displayName="ForwardRef(Checkbox)";let rc=s.zo.pre(function(){return s.iv`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${rs}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return E("code",e)}),ru=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,f,p;let h=(0,a.c)(23);h[0]!==e?({children:n,language:o,size:r,weight:d,...l}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5]);let b=void 0===r?2:r,m="string"==typeof o?o:void 0;h[6]!==m?(s=!!m&&u.hasLanguage(m),h[6]=m,h[7]=s):s=h[7];let g=s,v=C(b);return h[8]!==m||h[9]!==g||h[10]!==n?(c=!(m&&g)&&(0,i.jsx)("code",{children:n}),h[8]=m,h[9]=g,h[10]=n,h[11]=c):c=h[11],h[12]!==m||h[13]!==g||h[14]!==n?(f=m&&g&&(0,i.jsx)(u,{inline:!0,language:m,value:String(n)}),h[12]=m,h[13]=g,h[14]=n,h[15]=f):f=h[15],h[16]!==l||h[17]!==v||h[18]!==d||h[19]!==t||h[20]!==c||h[21]!==f?(p=(0,i.jsxs)(rc,{"data-ui":"Code",...l,$size:v,$weight:d,ref:t,children:[c,f]}),h[16]=l,h[17]=v,h[18]=d,h[19]=t,h[20]=c,h[21]=f,h[22]=p):p=h[22],p});ru.displayName="ForwardRef(Code)";let rf={width:"100%",margin:"0 auto"},rp=(0,s.zo)(tJ)(function(){return rf},function(e){let{container:t,media:r}=(0,n.aQ)(e.theme);return R(r,e.$width,e=>({maxWidth:"auto"===e?"none":z(t[e])}))}),rh=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(9);d[0]!==e?({as:n,width:r,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s=C(void 0===r?2:r);return d[4]!==o||d[5]!==s||d[6]!==n||d[7]!==t?(l=(0,i.jsx)(rp,{"data-ui":"Container",...o,$width:s,forwardedAs:n,ref:t}),d[4]=o,d[5]=s,d[6]=n,d[7]=t,d[8]=l):l=d[8],l});rh.displayName="ForwardRef(Container)";let rb=(0,s.zo)(tJ)(function(){return[ti,td,ts,tc,tu,tf,tp,th,tb]}),rm=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b;let m=(0,a.c)(26);m[0]!==e?({as:r,autoRows:o,autoCols:n,autoFlow:l,columns:d,gap:s,gapX:c,gapY:u,rows:f,children:h,...p}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=u,m[9]=f,m[10]=p,m[11]=h):(r=m[1],o=m[2],n=m[3],l=m[4],d=m[5],s=m[6],c=m[7],u=m[8],f=m[9],p=m[10],h=m[11]);let g="string"==typeof r?r:void 0,v=C(o),x=C(n),w=C(l),y=C(d),$=C(s),k=C(c),z=C(u),R=C(f);return m[12]!==g||m[13]!==p||m[14]!==v||m[15]!==x||m[16]!==w||m[17]!==y||m[18]!==$||m[19]!==k||m[20]!==z||m[21]!==R||m[22]!==r||m[23]!==t||m[24]!==h?(b=(0,i.jsx)(rb,{"data-as":g,"data-ui":"Grid",...p,$autoRows:v,$autoCols:x,$autoFlow:w,$columns:y,$gap:$,$gapX:k,$gapY:z,$rows:R,forwardedAs:r,ref:t,children:h}),m[12]=g,m[13]=p,m[14]=v,m[15]=x,m[16]=w,m[17]=y,m[18]=$,m[19]=k,m[20]=z,m[21]=R,m[22]=r,m[23]=t,m[24]=h,m[25]=b):b=m[25],b});rm.displayName="ForwardRef(Grid)";let rg=s.zo.div(function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return s.iv`
    ${t&&s.iv`
      color: var(--card-accent-fg-color);
    `}

    ${r&&s.iv`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},S,function(e){return E("heading",e)}),rv=s.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,rx=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:r,align:s,children:l,muted:o,size:n,textOverflow:d,weight:u,...c}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let b=void 0!==r&&r,m=void 0!==o&&o,g=void 0===n?2:n,v=l;if("ellipsis"===d){let e;h[9]!==v?(e=(0,i.jsx)(rv,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=C(s),w=C(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==c||h[14]!==b||h[15]!==x||h[16]!==m||h[17]!==w||h[18]!==u||h[19]!==t||h[20]!==f?(p=(0,i.jsx)(rg,{"data-ui":"Heading",...c,$accent:b,$align:x,$muted:m,$size:w,$weight:u,ref:t,children:f}),h[13]=c,h[14]=b,h[15]=x,h[16]=m,h[17]=w,h[18]=u,h[19]=t,h[20]=f,h[21]=p):p=h[21],p});rx.displayName="ForwardRef(Heading)";let rw=(0,s.zo)(tJ)(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$space,e=>{let t=z(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),ry=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(13);if(f[0]!==e?({as:d,children:r,space:o,...n}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]),f[5]!==r){let e;f[7]===Symbol.for("react.memo_cache_sentinel")?(e=e=>e&&(0,i.jsx)("div",{children:e}),f[7]=e):e=f[7],c=l.Children.map(r,e),f[5]=r,f[6]=c}else c=f[6];s=c;let p=C(o);return f[8]!==n||f[9]!==p||f[10]!==d||f[11]!==s?(u=(0,i.jsx)(rw,{"data-ui":"Inline",...n,$space:p,forwardedAs:d,ref:t,children:s}),f[8]=n,f[9]=p,f[10]=d,f[11]=s,f[12]=u):u=f[12],u});ry.displayName="ForwardRef(Inline)";let r$=s.zo.kbd(tM,function(){return s.iv`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),rk=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({children:l,fontSize:r,padding:o,radius:n,...d}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5]);let p=void 0===r?0:r,h=void 0===o?1:o,b=C(void 0===n?2:n);return f[6]!==p||f[7]!==l?(s=(0,i.jsx)(t1,{as:"span",size:p,weight:"semibold",children:l}),f[6]=p,f[7]=l,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,i.jsx)(tJ,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==d||f[13]!==b||f[14]!==t||f[15]!==c?(u=(0,i.jsx)(r$,{"data-ui":"KBD",...d,$radius:b,ref:t,children:c}),f[12]=d,f[13]=b,f[14]=t,f[15]=c,f[16]=u):u=f[16],u});rk.displayName="ForwardRef(KBD)";let rz={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),n=r.floating.width,i=r.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(o)?{originX:rR(.5-a/n,0,1),originY:"bottom"===o?0:1}:{originX:"left"===o?1:0,originY:rR(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function rR(e,t,r){return Math.min(Math.max(e,t),r)}function rj(e,t,r){let o=t.x-e.x,n=t.y-e.y;return rE(e,t,Math.min(1,r/Math.sqrt(o*o+n*n)))}function rE(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let rS=s.zo.div(({$w:e})=>s.iv`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),rC=s.zo.path`
  stroke: var(--card-shadow-outline-color);
`,r_=s.zo.path`
  fill: var(--card-bg-color);
`,rT=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({width:o,height:n,radius:r,...l}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l):(r=p[1],o=p[2],n=p[3],l=p[4]);let h=void 0===r?0:r,{card:b}=eI(),m=b.shadow.outline,g=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],n=e[o-1],i=e[o+1];if(n&&t.radius){let e=rj(t,n,t.radius),o=rj(t,i,t.radius),a=rE(e,t,.5),l=rE(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:a,endControl:l})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:h,y:0,radius:h},{x:o/2,y:n-1,radius:h},{x:o-h,y:0,radius:h},{x:o,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${g}`,x=`${g} M ${o} -1 M 0 -1 Z`,w=`0 0 ${o} ${o}`;p[5]!==m||p[6]!==o?(d=(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:m,width:o,height:o,fill:"white"})}),p[5]=m,p[6]=o,p[7]=d):d=p[7];let y=2*m;return p[8]!==v||p[9]!==y?(s=(0,i.jsx)(rC,{d:v,mask:"url(#stroke-mask)",strokeWidth:y}),p[8]=v,p[9]=y,p[10]=s):s=p[10],p[11]!==x?(c=(0,i.jsx)(r_,{d:x}),p[11]=x,p[12]=c):c=p[12],p[13]!==o||p[14]!==w||p[15]!==d||p[16]!==s||p[17]!==c?(u=(0,i.jsxs)("svg",{width:o,height:o,viewBox:w,children:[d,s,c]}),p[13]=o,p[14]=w,p[15]=d,p[16]=s,p[17]=c,p[18]=u):u=p[18],p[19]!==l||p[20]!==o||p[21]!==t||p[22]!==u?(f=(0,i.jsx)(rS,{...l,$w:o,ref:t,children:u}),p[19]=l,p[20]=o,p[21]=t,p[22]=u,p[23]=f):f=p[23],f});rT.displayName="ForwardRef(Arrow)";let rM=eF("@sanity/ui/context/boundaryElement",null);function rF(e){let t,r,o;let n=(0,a.c)(5),{children:l,element:d}=e;return n[0]!==d?(r={version:0,element:d},n[0]=d,n[1]=r):r=n[1],t=r,n[2]!==t||n[3]!==l?(o=(0,i.jsx)(rM.Provider,{value:t,children:l}),n[2]=t,n[3]=l,n[4]=o):o=n[4],o}function rO(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}rF.displayName="BoundaryElementProvider";let rN={version:0,element:null};function rA(){let e=(0,l.useContext)(rM);if(e&&(!rO(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||rN}let rL=(0,l.forwardRef)(function(e,t){let r=eI(),{children:o,media:n=r.media,...a}=e,d=(0,l.useRef)(null),[s,c]=(0,l.useState)(null),u=eE(s),f=(0,l.useMemo)(()=>u?.border.width??window.innerWidth,[u]),p=(0,l.useMemo)(()=>(function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r})(n,f),[n,f]),h=(0,l.useMemo)(()=>(function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r})(n,f),[n,f]);(0,l.useImperativeHandle)(t,()=>d.current);let b=(0,l.useCallback)(e=>{d.current=e,c(e)},[]);return(0,i.jsx)("div",{"data-ui":"ElementQuery",...a,"data-eq-max":p.length?p.join(" "):void 0,"data-eq-min":h.length?h.join(" "):void 0,ref:b,children:o})});rL.displayName="ForwardRef(ElementQuery)";class rB extends l.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(ru,{children:t})}return this.props.children}}function rI(e){if(!rO(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let rD=eF("@sanity/ui/context/layer",null);function rQ(){let e=(0,a.c)(2),t=(0,l.useContext)(rD);if(!t)throw Error("useLayer(): missing context value");try{let r;return e[0]!==t?(r=rI(t),e[0]=t,e[1]=r):r=e[1],r}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function rP(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function rH(e){let t=null,r=rP(()=>{t=rP(e)});return()=>{t&&t(),r()}}function rV(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function rW(e){return rV(e)&&"A"===e.nodeName}function rq(e){return rV(e)&&"BUTTON"===e.nodeName}function rX(e,t){return e.contains(t)||e===t}function rG(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(rW(e)?!!e.href&&"ignore"!==e.rel:rV(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(rq(e)||rV(e)&&"SELECT"===e.nodeName||rV(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function rY(e){for(let t=0;t<e.childNodes.length;t++){let r=e.childNodes[t];if(rV(r)&&(rG(r)||rY(r)))return!0}return!1}function rK(e){for(let t=e.childNodes.length-1;t>=0;t--){let r=e.childNodes[t];if(rV(r)&&(rG(r)||rK(r)))return!0}return!1}function rU(e){let{children:t,zOffset:r=0}=e,o=(0,l.useContext)(rD),n=o&&rI(o),a=n?.registerChild,d=(n?.level??0)+1,s=C(r),c=s.length-1,u=Math.min(eQ(),c),f=n?n.zIndex+s[u]:s[u],[,p]=(0,l.useState)({}),[h,b]=(0,l.useState)(0),m=0===h,g=(0,l.useCallback)(e=>{let t=a?.(e);return void 0!==e?p(t=>{let r=t[e]??0,o={...t,[e]:r+1};return b(Object.keys(o).length),o}):b(e=>e+1),()=>{void 0!==e?p(t=>{let r={...t};return 1===r[e]?(delete r[e],b(Object.keys(r).length)):r[e]-=1,r}):b(e=>e-1),t?.()}},[a]);(0,l.useEffect)(()=>a?.(d),[d,a]);let v=(0,l.useMemo)(()=>({version:0,isTopLayer:m,level:d,registerChild:g,size:h,zIndex:f}),[m,d,g,h,f]);return(0,i.jsx)(rD.Provider,{value:v,children:t})}rU.displayName="LayerProvider";let rJ=s.zo.div({position:"relative"}),rZ=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b;let m=(0,a.c)(22);m[0]!==e?({children:s,onActivate:o,onFocus:n,style:r,...d}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n,m[4]=d,m[5]=s):(r=m[1],o=m[2],n=m[3],d=m[4],s=m[5]);let g=void 0===r?y:r,{zIndex:v,isTopLayer:x}=rQ(),w=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(x);m[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,m[6]=c):c=m[6],(0,l.useImperativeHandle)(t,c),m[7]!==x||m[8]!==o?(u=()=>{k.current!==x&&x&&o?.({activeElement:w.current}),k.current=x},f=[x,o],m[7]=x,m[8]=o,m[9]=u,m[10]=f):(u=m[9],f=m[10]),(0,l.useEffect)(u,f),m[11]!==n||m[12]!==x?(p=e=>{n?.(e);let t=$.current,r=document.activeElement;!x||!t||!r||rV(r)&&rX(t,r)&&(w.current=r)},m[11]=n,m[12]=x,m[13]=p):p=m[13];let z=p;return m[14]!==g||m[15]!==v?(h={...g,zIndex:v},m[14]=g,m[15]=v,m[16]=h):h=m[16],m[17]!==d||m[18]!==z||m[19]!==h||m[20]!==s?(b=(0,i.jsx)(rJ,{...d,"data-ui":"Layer",onFocus:z,ref:$,style:h,children:s}),m[17]=d,m[18]=z,m[19]=h,m[20]=s,m[21]=b):b=m[21],b}),r0=(0,l.forwardRef)(function(e,t){let r,o,n,l,d;let s=(0,a.c)(11);s[0]!==e?({children:n,zOffset:r,...o}=e,s[0]=e,s[1]=r,s[2]=o,s[3]=n):(r=s[1],o=s[2],n=s[3]);let c=void 0===r?1:r;return s[4]!==o||s[5]!==t||s[6]!==n?(l=(0,i.jsx)(rZ,{...o,ref:t,children:n}),s[4]=o,s[5]=t,s[6]=n,s[7]=l):l=s[7],s[8]!==c||s[9]!==l?(d=(0,i.jsx)(rU,{zOffset:c,children:l}),s[8]=c,s[9]=l,s[10]=d):d=s[10],d});r0.displayName="ForwardRef(Layer)";let r1="@sanity/ui/context/portal",r2=Symbol.for(`${r1}/element`);eM[r2]=null;let r3=eF(r1,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(eM[r2]||(eM[r2]=document.createElement("div"),eM[r2].setAttribute("data-portal",""),document.body.appendChild(eM[r2])),eM[r2])}});function r4(){let e=(0,l.useContext)(r3);if(!e)throw Error("usePortal(): missing context value");if(!rO(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function r5(e){let t;let r=(0,a.c)(3),{children:o,__unstable_name:n}=e,i=r4(),l=(n?i.elements&&i.elements[n]:i.element)||i.elements?.default;return l?(r[0]!==o||r[1]!==l?(t=(0,m.createPortal)(o,l),r[0]=o,r[1]=l,r[2]=t):t=r[2],t):null}function r6(e){let t,r,o;let n=(0,a.c)(7),{boundaryElement:d,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,l.useRef)(e);return function(e,t){if(!e||!t)return e===t;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}(t.current,e)||(t.current=e),t.current}(u),p=(0,l.useSyncExternalStore)(r9,r8,r7),h=d||null,b=c||p;return n[0]!==h||n[1]!==b||n[2]!==f?(r={version:0,boundaryElement:h,element:b,elements:f},n[0]=h,n[1]=b,n[2]=f,n[3]=r):r=n[3],t=r,n[4]!==t||n[5]!==s?(o=(0,i.jsx)(r3.Provider,{value:t,children:s}),n[4]=t,n[5]=s,n[6]=o):o=n[6],o}function r7(){return null}function r8(){return document.body}r5.displayName="Portal",r6.displayName="PortalProvider";let r9=()=>()=>{},oe=s.zo.div`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`;(0,l.forwardRef)(function(e,t){let r;let o=(0,a.c)(4),{as:n,children:l}=e;return o[0]!==n||o[1]!==t||o[2]!==l?(r=(0,i.jsx)(oe,{"aria-hidden":!0,as:n,"data-ui":"SrOnly",ref:t,children:l}),o[0]=n,o[1]=t,o[2]=l,o[3]=r):r=o[3],r}).displayName="ForwardRef(SrOnly)";let ot=s.zo.div`
  position: relative;
`,or=s.zo.div`
  position: absolute;
  left: 0;
  right: 0;
`;(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z;let R=(0,a.c)(56);R[0]!==e?({as:r,gap:o,getItemKey:c,items:n,onChange:s,renderItem:d,...u}=e,R[0]=e,R[1]=r,R[2]=o,R[3]=n,R[4]=d,R[5]=s,R[6]=c,R[7]=u):(r=R[1],o=R[2],n=R[3],d=R[4],s=R[5],c=R[6],u=R[7]);let j=void 0===r?"div":r,E=void 0===o?0:o;R[8]!==n?(f=void 0===n?[]:n,R[8]=n,R[9]=f):f=R[9];let S=f,{space:C}=eI(),_=(0,l.useRef)(null),T=(0,l.useRef)(null),[M,F]=(0,l.useState)(0),[O,N]=(0,l.useState)(0),[A,L]=(0,l.useState)(-1);R[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>_.current,R[10]=p):p=R[10],(0,l.useImperativeHandle)(t,p),R[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!T.current)return;let e=T.current.firstChild;e instanceof HTMLElement&&L(e.offsetHeight)},R[11]=h):h=R[11],R[12]!==d?(b=[d],R[12]=d,R[13]=b):b=R[13],(0,l.useEffect)(h,b),R[14]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{if(!_.current)return;let e=_.current.parentNode;for(;e&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(e);)e=e.parentNode;if(e){let t=e;if(!(t instanceof HTMLElement))return;let r=()=>{F(t.scrollTop)};t.addEventListener("scroll",r,{passive:!0});let o=new eR(e=>{N(e[0].contentRect.height)});return o.observe(t),r(),()=>{t.removeEventListener("scroll",r),o.unobserve(t),o.disconnect()}}let t=()=>{F(window.scrollY)},r=()=>{N(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),N(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},g=[],R[14]=m,R[15]=g):(m=R[14],g=R[15]),(0,l.useEffect)(m,g);let B=S.length,I=A?B*(A+C[E])-C[E]:0,D=I?Math.max(Math.floor(M/I*B)-2,0):0,Q=I?Math.ceil((M+O)/I*B)+1:0;R[16]!==s||R[17]!==D||R[18]!==C||R[19]!==E||R[20]!==A||R[21]!==O||R[22]!==M||R[23]!==Q?(v=()=>{s&&s({fromIndex:D,gap:C[E],itemHeight:A,scrollHeight:O,scrollTop:M,toIndex:Q})},x=[D,E,A,s,O,M,C,Q],R[16]=s,R[17]=D,R[18]=C,R[19]=E,R[20]=A,R[21]=O,R[22]=M,R[23]=Q,R[24]=v,R[25]=x):(v=R[24],x=R[25]),(0,l.useEffect)(v,x);e:{let e;if(!d||0===S.length){w=null;break e}if(-1===A){let e,t;let r=S[0];R[26]!==d||R[27]!==r?(e=d(r),R[26]=d,R[27]=r,R[28]=e):e=R[28],R[29]!==e?(t=[(0,i.jsx)(or,{children:e},0)],R[29]=e,R[30]=t):t=R[30],w=t;break e}if(R[31]!==S||R[32]!==D||R[33]!==Q||R[34]!==d||R[35]!==c||R[36]!==A||R[37]!==C||R[38]!==E){let t;R[40]!==D||R[41]!==d||R[42]!==c||R[43]!==A||R[44]!==C||R[45]!==E?(t=(e,t)=>{let r=D+t,o=d(e),n=c?c(e,r):r;return(0,i.jsx)(or,{style:{top:r*(A+C[E])},children:o},n)},R[40]=D,R[41]=d,R[42]=c,R[43]=A,R[44]=C,R[45]=E,R[46]=t):t=R[46],e=S.slice(D,Q).map(t),R[31]=S,R[32]=D,R[33]=Q,R[34]=d,R[35]=c,R[36]=A,R[37]=C,R[38]=E,R[39]=e}else e=R[39];w=e}let P=w;return R[47]!==I?($={height:I},R[47]=I,R[48]=$):$=R[48],y=$,R[49]!==y||R[50]!==P?(k=(0,i.jsx)("div",{ref:T,style:y,children:P}),R[49]=y,R[50]=P,R[51]=k):k=R[51],R[52]!==j||R[53]!==u||R[54]!==k?(z=(0,i.jsx)(ot,{as:j,"data-ui":"VirtualList",...u,ref:_,children:k}),R[52]=j,R[53]=u,R[54]=k,R[55]=z):z=R[55],z}).displayName="ForwardRef(VirtualList)";let oo=[0,0,0,0],on={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},oi=(0,s.zo)((0,h.E)(ri))`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,oa=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,z,R,j,E,S,C,_,T,M,F,O,N,A;let L=(0,a.c)(60);L[0]!==e?({__unstable_margins:r,animate:l,arrow:x,arrowRef:w,arrowX:p,arrowY:h,children:g,padding:m,placement:y,originX:d,originY:s,overflow:v,radius:$,scheme:z,shadow:R,strategy:c,style:u,tone:j,width:f,x:o,y:n,...b}=e,L[0]=e,L[1]=r,L[2]=o,L[3]=n,L[4]=l,L[5]=d,L[6]=s,L[7]=c,L[8]=u,L[9]=f,L[10]=p,L[11]=h,L[12]=b,L[13]=m,L[14]=g,L[15]=v,L[16]=x,L[17]=w,L[18]=y,L[19]=$,L[20]=z,L[21]=R,L[22]=j):(r=L[1],o=L[2],n=L[3],l=L[4],d=L[5],s=L[6],c=L[7],u=L[8],f=L[9],p=L[10],h=L[11],b=L[12],m=L[13],g=L[14],v=L[15],x=L[16],w=L[17],y=L[18],$=L[19],z=L[20],R=L[21],j=L[22]);let{zIndex:B}=rQ(),I=(o??0)+(E=r||oo)[3],D=(n??0)+E[0],Q=l?"transform":void 0;L[23]!==I||L[24]!==d||L[25]!==s||L[26]!==c||L[27]!==D||L[28]!==f||L[29]!==B||L[30]!==Q||L[31]!==u?(C={left:I,originX:d,originY:s,position:c,top:D,width:f,zIndex:B,willChange:Q,...u},L[23]=I,L[24]=d,L[25]=s,L[26]=c,L[27]=D,L[28]=f,L[29]=B,L[30]=Q,L[31]=u,L[32]=C):C=L[32],S=C;let P=null!==p?p:void 0,H=null!==h?h:void 0;L[33]!==P||L[34]!==H?(T={left:P,top:H,right:void 0,bottom:void 0},L[33]=P,L[34]=H,L[35]=T):T=L[35],_=T;let V=b;return L[36]!==l?(M=l?k:{},L[36]=l,L[37]=M):M=L[37],L[38]!==m||L[39]!==g?(F=(0,i.jsx)(t5,{direction:"column",flex:1,padding:m,children:g}),L[38]=m,L[39]=g,L[40]=F):F=L[40],L[41]!==v||L[42]!==F?(O=(0,i.jsx)(t5,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:v,children:F}),L[41]=v,L[42]=F,L[43]=O):O=L[43],L[44]!==x||L[45]!==w||L[46]!==_?(N=x&&(0,i.jsx)(rT,{ref:w,style:_,width:19,height:8,radius:2}),L[44]=x,L[45]=w,L[46]=_,L[47]=N):N=L[47],L[48]!==V||L[49]!==y||L[50]!==$||L[51]!==t||L[52]!==z||L[53]!==R||L[54]!==S||L[55]!==j||L[56]!==M||L[57]!==O||L[58]!==N?(A=(0,i.jsxs)(oi,{"data-ui":"Popover",...V,"data-placement":y,radius:$,ref:t,scheme:z,shadow:R,sizing:"border",style:S,tone:j,...M,children:[O,N]}),L[48]=V,L[49]=y,L[50]=$,L[51]=t,L[52]=z,L[53]=R,L[54]=S,L[55]=j,L[56]=M,L[57]=O,L[58]=N,L[59]=A):A=L[59],A}));oa.displayName="Memo(ForwardRef(PopoverCard))";let ol=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:r,layer:o}=eI(),n=rA(),{__unstable_margins:a=oo,animate:d=!1,arrow:s=!1,boundaryElement:c=n.element,children:u,constrainSize:h=!1,content:m,disabled:g,fallbackPlacements:v=e.fallbackPlacements??on[e.placement??"bottom"],matchReferenceWidth:x,floatingBoundary:w=e.boundaryElement??n.element,onActivate:y,open:$,overflow:k="hidden",padding:z,placement:R="bottom",portal:j,preventOverflow:E=!0,radius:S=3,referenceBoundary:_=e.boundaryElement??n.element,referenceElement:T,scheme:M,shadow:F=3,tone:O="inherit",width:N="auto",zOffset:A=o.popover.zOffset,updateRef:L,...B}=e,I=!eV()&&d,D=eE(c)?.border,Q=C(z),P=C(S),H=C(F),V=C(N),W=C(A),q=(0,l.useRef)(null),X=(0,l.useRef)(null),G="viewport";(0,l.useImperativeHandle)(t,()=>q.current);let Y=eQ(),K=h||E?D?.width:void 0,U=function(e){let{container:t,mediaIndex:r,width:o}=e,n=o[r],i=void 0===n?o[o.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:r,mediaIndex:Y,width:V}),J=(0,l.useRef)(U);(0,l.useEffect)(()=>{J.current=U},[U]);let Z=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(!(void 0===r&&void 0===t))return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:K,currentWidth:U}),ee=(0,l.useRef)(Z);(0,l.useEffect)(()=>{ee.current=Z},[Z]);let et=(0,l.useRef)();(0,l.useEffect)(()=>{let e=q.current;if(!$||!e)return;let t=et.current;x?void 0!==t&&(e.style.width=`${t}px`):void 0!==U&&(e.style.width=`${U}px`),"number"==typeof Z&&(e.style.maxWidth=`${Z}px`)},[U,x,Z,$]);let er=(0,l.useMemo)(()=>{let e=[];return(h||E)&&e.push((0,p.RR)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:G})),e.push((0,p.cv)({mainAxis:4})),(h||x)&&e.push(function(e){let{apply:t,margins:r,padding:o=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:l,rects:d}=n,{floating:s,reference:c}=d,u=await (0,f.US)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:o,rootBoundary:"viewport"}),p=1/0,h=1/0,b=s.width,m=s.height;a.includes("top")&&(p=b-(u.left+u.right),h=m-u.top),a.includes("right")&&(p=b-u.right,h=m-(u.top+u.bottom)),a.includes("bottom")&&(p=b-(u.left+u.right),h=m-u.bottom),a.includes("left")&&(p=b-u.left,h=m-(u.top+u.bottom)),t({availableWidth:p-r[1]-r[3],availableHeight:h-r[0]-r[2],elements:i,referenceWidth:c.width-r[1]-r[3]});let g=await l.getDimensions(i.floating),v=g.height;return b!==g.width||m!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:r,referenceWidth:o}){et.current=o;let n=J.current,i=ee.current;x?r.floating.style.width=`${o}px`:void 0!==n&&(r.floating.style.width=`${n}px`),h&&(r.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,r.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:h,margins:a,matchReferenceWidth:x,padding:4})),E&&e.push((0,p.uY)({boundary:w||void 0,rootBoundary:G,padding:4})),s&&e.push((0,p.x7)({element:X,padding:4})),I&&e.push(rz),e.push((0,p.Cp)({boundary:_||void 0,padding:4,strategy:"referenceHidden"})),e},[I,s,h,v,w,a,x,E,_]),{x:eo,y:en,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,p.YF)({middleware:er,placement:R,whileElementsMounted:f.Me}),ec=ei.hide?.referenceHidden,eu=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,eb=(0,l.useCallback)(e=>{X.current=e},[]),em=(0,l.useCallback)(e=>{q.current=e,el.setFloating(e)},[el]),eg=(0,l.useCallback)(e=>{let t,r;el.setReference(e);let o=(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref;"function"==typeof o?o(e):o&&(o.current=e)},[u,el]),ev=(0,l.useMemo)(()=>!u||T?null:(0,l.cloneElement)(u,{ref:eg}),[u,T,eg]);if((0,l.useEffect)(()=>{L&&("function"==typeof L?L(es):L&&(L.current=es))},[es,L]),(0,l.useEffect)(()=>{ev||el.setReference(T||null)},[T,el,ev]),g)return u||(0,i.jsx)(i.Fragment,{});let ex=(0,i.jsx)(rU,{zOffset:W,children:(0,i.jsx)(oa,{...B,__unstable_margins:a,animate:I,arrow:s,arrowRef:eb,arrowX:eu,arrowY:ef,hidden:ec,overflow:k,padding:Q,placement:ea,radius:P,ref:em,scheme:M,shadow:H,originX:ep,originY:eh,strategy:ed,tone:O,width:x?et.current:U,x:eo,y:en,children:m})}),ew=$&&(j?(0,i.jsx)(r5,{__unstable_name:"string"==typeof j?j:void 0,children:ex}):ex);return(0,i.jsxs)(i.Fragment,{children:[I?(0,i.jsx)(b.M,{children:ew}):ew,ev]})}));ol.displayName="Memo(ForwardRef(Popover))";let od=s.zo.div(function(){return s.iv`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),os=s.zo.input(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme),o=(r.radio.size-r.radio.markSize)/2;return s.iv`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${z(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${z(r.radio.size)};
      width: ${z(r.radio.size)};
      border-radius: ${z(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${to({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${z(o)};
        left: ${z(o)};
        height: ${z(r.radio.markSize)};
        width: ${z(r.radio.markSize)};
        border-radius: ${z(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tn({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${to({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${to({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),oc=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h;let b=(0,a.c)(19);b[0]!==e?({className:s,disabled:o,style:c,customValidity:r,readOnly:n,...d}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=n,b[4]=d,b[5]=s,b[6]=c):(r=b[1],o=b[2],n=b[3],d=b[4],s=b[5],c=b[6]);let m=(0,l.useRef)(null);b[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>m.current,b[7]=u):u=b[7],(0,l.useImperativeHandle)(t,u),O(m,r);let g=!o&&n?"":void 0,v=r?"":void 0,x=o||n;return b[8]!==g||b[9]!==v||b[10]!==d||b[11]!==x||b[12]!==n?(f=(0,i.jsx)(os,{"data-read-only":g,"data-error":v,...d,disabled:x,readOnly:n,ref:m,type:"radio"}),b[8]=g,b[9]=v,b[10]=d,b[11]=x,b[12]=n,b[13]=f):f=b[13],b[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,i.jsx)("span",{}),b[14]=p):p=b[14],b[15]!==s||b[16]!==c||b[17]!==f?(h=(0,i.jsxs)(od,{className:s,"data-ui":"Radio",style:c,children:[f,p]}),b[15]=s,b[16]=c,b[17]=f,b[18]=h):h=b[18],h});function ou(e){let{font:t}=(0,n.aQ)(e.theme);return s.iv`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function of(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return s.iv`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${to({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${to({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tn({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${to({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${to({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function op(e){let{$fontSize:t}=e,{font:r,media:o}=(0,n.aQ)(e.theme);return R(o,t,e=>{var t;return{fontSize:z((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:z(t.lineHeight)}})}oc.displayName="ForwardRef(Radio)";let oh={root:function(){return s.iv`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `},input:function(){return[tM,ou,of,op,tR]},iconBox:function(e){let{color:t}=(0,n.aQ)(e.theme);return s.iv`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}},ob=s.zo.div(oh.root),om=s.zo.select(oh.input),og=(0,s.zo)(tJ)(oh.iconBox),ov=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v,x,w;let y=(0,a.c)(29);y[0]!==e?({children:h,customValidity:s,disabled:u,fontSize:r,padding:o,radius:n,readOnly:f,space:d,...p}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=u,y[7]=f,y[8]=p,y[9]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],u=y[6],f=y[7],p=y[8],h=y[9]);let $=void 0===r?2:r,k=void 0===o?3:o,z=void 0===n?2:n,R=void 0===d?3:d,j=(0,l.useRef)(null);y[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>j.current,y[10]=b):b=y[10],(0,l.useImperativeHandle)(t,b),O(j,s);let E=!u&&f?"":void 0,S=C($),_=C(k),T=C(z),M=C(R),F=u||f;return y[11]!==E||y[12]!==p||y[13]!==S||y[14]!==_||y[15]!==T||y[16]!==M||y[17]!==F||y[18]!==h?(m=(0,i.jsx)(om,{"data-read-only":E,"data-ui":"Select",...p,$fontSize:S,$padding:_,$radius:T,$space:M,disabled:F,ref:j,children:h}),y[11]=E,y[12]=p,y[13]=S,y[14]=_,y[15]=T,y[16]=M,y[17]=F,y[18]=h,y[19]=m):m=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(g=(0,i.jsx)(c.v4q,{}),y[20]=g):g=y[20],y[21]!==$?(v=(0,i.jsx)(t1,{size:$,children:g}),y[21]=$,y[22]=v):v=y[22],y[23]!==k||y[24]!==v?(x=(0,i.jsx)(og,{padding:k,children:v}),y[23]=k,y[24]=v,y[25]=x):x=y[25],y[26]!==m||y[27]!==x?(w=(0,i.jsxs)(ob,{"data-ui":"Select",children:[m,x]}),y[26]=m,y[27]=x,y[28]=w):w=y[28],w});ov.displayName="ForwardRef(Select)";let ox={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},ow=(0,s.zo)(tJ)(function(){return ox},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return R(t,e.$space,e=>({gridGap:z(r[e])}))}),oy=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(10);d[0]!==e?({as:r,space:o,...n}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s="string"==typeof r?r:void 0,c=C(o);return d[4]!==s||d[5]!==n||d[6]!==c||d[7]!==r||d[8]!==t?(l=(0,i.jsx)(ow,{"data-as":s,"data-ui":"Stack",...n,$space:c,forwardedAs:r,ref:t}),d[4]=s,d[5]=n,d[6]=c,d[7]=r,d[8]=t,d[9]=l):l=d[9],l});oy.displayName="ForwardRef(Stack)";let o$=s.zo.span(function(){return s.iv`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),ok=s.zo.input(function(){return s.iv`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oz=s.zo.span(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return s.iv`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${z(r.switch.width)};
    height: ${z(r.switch.height)};
    border-radius: ${z(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tn({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oR=s.zo.span(function(e){let{input:t}=(0,n.aQ)(e.theme);return s.iv`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${z(t.switch.width)};
    height: ${z(t.switch.height)};
    border-radius: ${z(t.switch.height/2)};
  `}),oj=s.zo.span(function(e){let{$indeterminate:t}=e,{input:r}=(0,n.aQ)(e.theme),o=r.switch.width,i=r.switch.height,a=r.switch.padding,l=i-2*r.switch.padding,d=o-2*a-l,c=o/2-l/2-a,u=!0!==t&&!0===e.$checked;return s.iv`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${z(a)};
    top: ${z(a)};
    height: ${z(l)};
    width: ${z(l)};
    border-radius: ${z(l/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&s.iv`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&s.iv`
      transform: translate3d(${c}px, 0, 0);
    `}
  `}),oE=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v;let x=(0,a.c)(26);x[0]!==e?({checked:d,className:c,disabled:o,indeterminate:r,readOnly:n,style:u,...s}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=n,x[4]=d,x[5]=s,x[6]=c,x[7]=u):(r=x[1],o=x[2],n=x[3],d=x[4],s=x[5],c=x[6],u=x[7]);let w=(0,l.useRef)(null);x[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>w.current,x[8]=f):f=x[8],(0,l.useImperativeHandle)(t,f),x[9]!==r?(p=()=>{w.current&&(w.current.indeterminate=r||!1)},h=[r],x[9]=r,x[10]=p,x[11]=h):(p=x[10],h=x[11]),(0,l.useEffect)(p,h);let y=!o&&n?"":void 0,$=!0!==r&&d,k=o||n;return x[12]!==y||x[13]!==s||x[14]!==$||x[15]!==k?(b=(0,i.jsx)(ok,{"data-read-only":y,...s,checked:$,disabled:k,type:"checkbox",ref:w}),x[12]=y,x[13]=s,x[14]=$,x[15]=k,x[16]=b):b=x[16],x[17]===Symbol.for("react.memo_cache_sentinel")?(m=(0,i.jsx)(oR,{}),x[17]=m):m=x[17],x[18]!==d||x[19]!==r?(g=(0,i.jsxs)(oz,{"aria-hidden":!0,"data-name":"representation",children:[m,(0,i.jsx)(oj,{$checked:d,$indeterminate:r})]}),x[18]=d,x[19]=r,x[20]=g):g=x[20],x[21]!==c||x[22]!==u||x[23]!==b||x[24]!==g?(v=(0,i.jsxs)(o$,{className:c,"data-ui":"Switch",style:u,children:[b,g]}),x[21]=c,x[22]=u,x[23]=b,x[24]=g,x[25]=v):v=x[25],v});oE.displayName="ForwardRef(Switch)";let oS=s.zo.span(tE),oC=s.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,o_=s.zo.textarea(tz,tS,tC),oT=s.zo.div(tM,t_),oM=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g;let v=(0,a.c)(29);v[0]!==e?({border:r,customValidity:c,disabled:o,fontSize:n,padding:d,radius:s,weight:f,__unstable_disableFocusRing:p,...u}=e,v[0]=e,v[1]=r,v[2]=o,v[3]=n,v[4]=d,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(r=v[1],o=v[2],n=v[3],d=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let x=void 0===r||r,w=void 0!==o&&o,y=void 0===n?2:n,$=void 0===d?3:d,k=void 0===s?2:s,z=(0,l.useRef)(null),R=eA();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>z.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),O(z,c);let j=R.scheme,E=R.tone,S=C(y),_=C($),T=R.scheme,M=C(0);v[11]!==R.scheme||v[12]!==R.tone||v[13]!==u||v[14]!==S||v[15]!==_||v[16]!==M||v[17]!==f||v[18]!==w?(b=(0,i.jsx)(o_,{"data-as":"textarea","data-scheme":j,"data-tone":E,...u,$fontSize:S,$padding:_,$scheme:T,$space:M,$tone:R.tone,$weight:f,disabled:w,ref:z}),v[11]=R.scheme,v[12]=R.tone,v[13]=u,v[14]=S,v[15]=_,v[16]=M,v[17]=f,v[18]=w,v[19]=b):b=v[19];let F=C(k),N=x?"":void 0;return v[20]!==F||v[21]!==p||v[22]!==R.scheme||v[23]!==R.tone||v[24]!==N?(m=(0,i.jsx)(oT,{$radius:F,$unstableDisableFocusRing:p,$scheme:R.scheme,$tone:R.tone,"data-border":N,"data-scheme":R.scheme,"data-tone":R.tone}),v[20]=F,v[21]=p,v[22]=R.scheme,v[23]=R.tone,v[24]=N,v[25]=m):m=v[25],v[26]!==b||v[27]!==m?(g=(0,i.jsx)(oS,{"data-ui":"TextArea",children:(0,i.jsxs)(oC,{children:[b,m]})}),v[26]=b,v[27]=m,v[28]=g):g=v[28],g});oM.displayName="ForwardRef(TextArea)";let oF={zIndex:2},oO=(0,s.zo)(ri).attrs({forwardedAs:"span"})(tE),oN=s.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oA=(0,s.zo)(ri).attrs({forwardedAs:"span"})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oL=(0,s.zo)(ri).attrs({forwardedAs:"span"})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oB=s.zo.input(tz,tS,tC),oI=s.zo.span(tM,t_),oD=(0,s.zo)(tJ)`
  position: absolute;
  top: 0;
  left: 0;
`,oQ=(0,s.zo)(tJ)`
  position: absolute;
  top: 0;
  right: 0;
`,oP=(0,s.zo)(ri)`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`,oH=(0,s.zo)(ro)({"&:not([hidden])":{display:"block"}}),oV=(0,l.forwardRef)(function(e,t){let r,o,n,s,u,f,p,h,b,m,g,v,x,w,$,k,z,R,j,E,S,_,T,M,F,N,A,L,B,I,D,Q,P,H,V,W,q,X;let G=(0,a.c)(86);G[0]!==e?({__unstable_disableFocusRing:$,border:r,clearButton:h,disabled:o,fontSize:n,icon:b,iconRight:m,onClear:w,padding:s,prefix:v,radius:u,readOnly:k,space:f,suffix:g,customValidity:x,type:p,weight:R,...z}=e,G[0]=e,G[1]=r,G[2]=o,G[3]=n,G[4]=s,G[5]=u,G[6]=f,G[7]=p,G[8]=h,G[9]=b,G[10]=m,G[11]=g,G[12]=v,G[13]=x,G[14]=w,G[15]=$,G[16]=k,G[17]=z,G[18]=R):(r=G[1],o=G[2],n=G[3],s=G[4],u=G[5],f=G[6],p=G[7],h=G[8],b=G[9],m=G[10],g=G[11],v=G[12],x=G[13],w=G[14],$=G[15],k=G[16],z=G[17],R=G[18]);let Y=void 0===r||r,K=void 0!==o&&o,U=void 0===n?2:n,J=void 0===s?3:s,Z=void 0===u?2:u,ee=void 0===f?3:f,et=void 0===p?"text":p,er=(0,l.useRef)(null),eo=eA(),en=C(U),ei=C(J),ea=C(Z),el=C(ee),ed=!!h,es=!!b,ec=!!m,eu=!!g,ef=!!v;G[19]===Symbol.for("react.memo_cache_sentinel")?(j=()=>er.current,G[19]=j):j=G[19],(0,l.useImperativeHandle)(t,j),O(er,x),G[20]!==w?(E=e=>{e.preventDefault(),e.stopPropagation(),w&&w(),er.current?.focus()},G[20]=w,G[21]=E):E=G[21];let ep=E;G[22]!==v||G[23]!==ea?(_=v&&(0,i.jsx)(oA,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:v})}),G[22]=v,G[23]=ea,G[24]=_):_=G[24],S=_;let eh=Y?"":void 0;if(G[25]!==b||G[26]!==en||G[27]!==ei?(M=b&&(0,i.jsx)(oD,{padding:ei,children:(0,i.jsxs)(t1,{size:en,children:[(0,l.isValidElement)(b)&&b,(0,d.isValidElementType)(b)&&(0,i.jsx)(b,{})]})}),G[25]=b,G[26]=en,G[27]=ei,G[28]=M):M=G[28],G[29]!==ed||G[30]!==m||G[31]!==en||G[32]!==ei?(F=!ed&&m&&(0,i.jsx)(oQ,{padding:ei,children:(0,i.jsxs)(t1,{size:en,children:[(0,l.isValidElement)(m)&&m,(0,d.isValidElementType)(m)&&(0,i.jsx)(m,{})]})}),G[29]=ed,G[30]=m,G[31]=en,G[32]=ei,G[33]=F):F=G[33],G[34]!==ef||G[35]!==$||G[36]!==eu||G[37]!==ea||G[38]!==eo.scheme||G[39]!==eo.tone||G[40]!==eh||G[41]!==M||G[42]!==F?(N=(0,i.jsxs)(oI,{$hasPrefix:ef,$unstableDisableFocusRing:$,$hasSuffix:eu,$radius:ea,$scheme:eo.scheme,$tone:eo.tone,"data-border":eh,"data-scheme":eo.scheme,"data-tone":eo.tone,children:[M,F]}),G[34]=ef,G[35]=$,G[36]=eu,G[37]=ea,G[38]=eo.scheme,G[39]=eo.tone,G[40]=eh,G[41]=M,G[42]=F,G[43]=N):N=G[43],T=N,G[44]!==ei){let e;G[46]===Symbol.for("react.memo_cache_sentinel")?(e=e=>0===e?0:1===e||2===e?1:e-2,G[46]=e):e=G[46],L=ei.map(e),G[44]=ei,G[45]=L}else L=G[45];if(A=L,G[47]!==ei){let e;G[49]===Symbol.for("react.memo_cache_sentinel")?(e=e=>0===e||1===e?0:2===e?1:e-1,G[49]=e):e=G[49],I=ei.map(e),G[47]=ei,G[48]=I}else I=G[48];B=I,D="object"==typeof h?h:y,G[50]!==K||G[51]!==k||G[52]!==h||G[53]!==x||G[54]!==en||G[55]!==B||G[56]!==ea||G[57]!==D||G[58]!==ep||G[59]!==A?(P=!K&&!k&&h&&(0,i.jsx)(oP,{forwardedAs:"span",padding:A,style:oF,tone:x?"critical":"inherit",children:(0,i.jsx)(oH,{"aria-label":"Clear","data-qa":"clear-button",fontSize:en,icon:c.Two,mode:"bleed",padding:B,radius:ea,...D,onClick:ep,onMouseDown:oW})}),G[50]=K,G[51]=k,G[52]=h,G[53]=x,G[54]=en,G[55]=B,G[56]=ea,G[57]=D,G[58]=ep,G[59]=A,G[60]=P):P=G[60],Q=P,G[61]!==g||G[62]!==ea?(V=g&&(0,i.jsx)(oL,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:g})}),G[61]=g,G[62]=ea,G[63]=V):V=G[63],H=V;let eb=ec||ed;return G[64]!==eo.scheme||G[65]!==eo.tone||G[66]!==z||G[67]!==en||G[68]!==es||G[69]!==eb||G[70]!==ei||G[71]!==el||G[72]!==R||G[73]!==K||G[74]!==k||G[75]!==et?(W=(0,i.jsx)(oB,{"data-as":"input","data-scheme":eo.scheme,"data-tone":eo.tone,...z,$fontSize:en,$iconLeft:es,$iconRight:eb,$padding:ei,$scheme:eo.scheme,$space:el,$tone:eo.tone,$weight:R,disabled:K,readOnly:k,ref:er,type:et}),G[64]=eo.scheme,G[65]=eo.tone,G[66]=z,G[67]=en,G[68]=es,G[69]=eb,G[70]=ei,G[71]=el,G[72]=R,G[73]=K,G[74]=k,G[75]=et,G[76]=W):W=G[76],G[77]!==W||G[78]!==T||G[79]!==Q?(q=(0,i.jsxs)(oN,{children:[W,T,Q]}),G[77]=W,G[78]=T,G[79]=Q,G[80]=q):q=G[80],G[81]!==eo.tone||G[82]!==S||G[83]!==q||G[84]!==H?(X=(0,i.jsxs)(oO,{"data-ui":"TextInput",tone:eo.tone,children:[S,q,H]}),G[81]=eo.tone,G[82]=S,G[83]=q,G[84]=H,G[85]=X):X=G[85],X});function oW(e){e.preventDefault(),e.stopPropagation()}function oq(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(e),d=(0,l.useRef)();o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let r=()=>{i(e)};if(d.current&&(clearTimeout(d.current),d.current=void 0),!t)return r();d.current=setTimeout(r,t)},o[0]=t):t=o[0];let s=t;return o[1]!==n?(r=[n,s],o[1]=n,o[2]=r):r=o[2],r}oV.displayName="ForwardRef(TextInput)";let oX={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},oG=(0,s.zo)((0,h.E)(ri))`
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,oY=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,z,R,j;let E=(0,a.c)(42);E[0]!==e?({animate:r,arrow:u,arrowRef:f,arrowX:d,arrowY:s,children:v,originX:o,originY:n,padding:h,placement:p,radius:b,scheme:m,shadow:g,style:l,...c}=e,E[0]=e,E[1]=r,E[2]=o,E[3]=n,E[4]=l,E[5]=d,E[6]=s,E[7]=c,E[8]=u,E[9]=f,E[10]=p,E[11]=h,E[12]=b,E[13]=m,E[14]=g,E[15]=v):(r=E[1],o=E[2],n=E[3],l=E[4],d=E[5],s=E[6],c=E[7],u=E[8],f=E[9],p=E[10],h=E[11],b=E[12],m=E[13],g=E[14],v=E[15]);let S=r?"transform":void 0;E[16]!==o||E[17]!==n||E[18]!==S||E[19]!==l?(w={originX:o,originY:n,willChange:S,...l},E[16]=o,E[17]=n,E[18]=S,E[19]=l,E[20]=w):w=E[20],x=w;let C=null!==d?d:void 0,_=null!==s?s:void 0;E[21]!==C||E[22]!==_?($={left:C,top:_,right:void 0,bottom:void 0},E[21]=C,E[22]=_,E[23]=$):$=E[23],y=$;let T=c;return E[24]!==r?(z=r?k:{},E[24]=r,E[25]=z):z=E[25],E[26]!==u||E[27]!==f||E[28]!==y?(R=u&&(0,i.jsx)(rT,{ref:f,style:y,width:15,height:6,radius:2}),E[26]=u,E[27]=f,E[28]=y,E[29]=R):R=E[29],E[30]!==T||E[31]!==p||E[32]!==h||E[33]!==b||E[34]!==t||E[35]!==m||E[36]!==g||E[37]!==x||E[38]!==z||E[39]!==v||E[40]!==R?(j=(0,i.jsxs)(oG,{"data-ui":"Tooltip__card",...T,"data-placement":p,padding:h,radius:b,ref:t,scheme:m,shadow:g,style:x,...z,children:[v,R]}),E[30]=T,E[31]=p,E[32]=h,E[33]=b,E[34]=t,E[35]=m,E[36]=g,E[37]=x,E[38]=z,E[39]=v,E[40]=R,E[41]=j):j=E[41],j}));oY.displayName="Memo(ForwardRef(TooltipCard))";let oK=eF("@sanity/ui/context/tooltipDelayGroup",null);function oU(e){let t,r,o;let n=(0,a.c)(10),{children:l,delay:d}=e,[s,c]=oq(!1),[u,f]=oq(null),p="number"==typeof d?d:d?.open||0,h="number"==typeof d?d:d?.close||0,b=s?1:p;return n[0]!==s||n[1]!==c||n[2]!==u||n[3]!==f||n[4]!==b||n[5]!==h?(r={isGroupActive:s,setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:b,closeDelay:h},n[0]=s,n[1]=c,n[2]=u,n[3]=f,n[4]=b,n[5]=h,n[6]=r):r=n[6],t=r,n[7]!==t||n[8]!==l?(o=(0,i.jsx)(oK.Provider,{value:t,children:l}),n[7]=t,n[8]=l,n[9]=o):o=n[9],o}oU.displayName="TooltipDelayGroupProvider";let oJ=(0,s.zo)(r0)`
  pointer-events: none;
`,oZ=(0,l.forwardRef)(function(e,t){let r=rA(),{layer:o}=eI(),{animate:n=!1,arrow:d=!1,boundaryElement:s=r?.element,children:c,content:u,disabled:h,fallbackPlacements:m=e.fallbackPlacements??oX[e.placement??"bottom"],padding:v=2,placement:x="bottom",portal:w,radius:y=2,scheme:$,shadow:k=2,zOffset:z=o.tooltip.zOffset,delay:R,...j}=e,E=!eV()&&n,S=C(m),_=(0,l.useRef)(null),[T,M]=(0,l.useState)(null),F=(0,l.useRef)(null),O="viewport",[N,A]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>_.current);let L=r4(),B="string"==typeof w?L.elements?.[w]||null:L.element,I=(0,l.useMemo)(()=>{let e=[];return e.push((0,p.RR)({boundary:s||void 0,fallbackPlacements:S,padding:4,rootBoundary:O})),e.push((0,p.cv)({mainAxis:4})),e.push((0,p.uY)({boundary:s||void 0,rootBoundary:O,padding:4})),d&&e.push((0,p.x7)({element:F,padding:4})),E&&e.push(rz),e},[E,d,s,S]),{floatingStyles:D,placement:Q,middlewareData:P,refs:H,update:V}=(0,p.YF)({middleware:I,placement:x,whileElementsMounted:f.Me}),W=P.arrow?.x,q=P.arrow?.y,X=P["@sanity/ui/origin"]?.originX,G=P["@sanity/ui/origin"]?.originY,Y=(0,l.useId)(),[K,U]=oq(!1),J=(0,l.useContext)(oK),Z=K||J?.openTooltipId===Y,ee=null!==J,et="number"==typeof R?R:R?.open||0,er="number"==typeof R?R:R?.close||0,eo=ee?J.openDelay:et,en=ee?J.closeDelay:er,ei=(0,l.useCallback)((e,t)=>{if(ee){if(e){let r=t?0:eo;J.setIsGroupActive(e,r),J.setOpenTooltipId(Y,r)}else{let r=en>200?en:200;J.setIsGroupActive(e,r),J.setOpenTooltipId(null,t?0:en)}}else U(e,t?0:e?eo:en)},[ee,J,eo,Y,en,U]),ea=(0,l.useCallback)(e=>{ei(!1),c?.props?.onBlur?.(e)},[c?.props,ei]),el=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onClick?.(e)},[c?.props,ei]),ed=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ei]),es=(0,l.useCallback)(e=>{ei(!0),c?.props?.onFocus?.(e)},[c?.props,ei]),ec=(0,l.useCallback)(e=>{ei(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ei]),eu=(0,l.useCallback)(e=>{ei(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ei]);(function(e){let t,r,o;let n=(0,a.c)(7),{handleIsOpenChange:i,referenceElement:d,showTooltip:s}=e;n[0]!==d||n[1]!==i?(t=(e,t)=>{d&&(d===e||e instanceof Node&&d.contains(e)||(i(!1),t()))},n[0]=d,n[1]=i,n[2]=t):t=n[2];let c=(0,g.i)(t);n[3]!==s||n[4]!==c?(r=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},o=[c,s],n[3]=s,n[4]=c,n[5]=r,n[6]=o):(r=n[5],o=n[6]),(0,l.useEffect)(r,o)})({handleIsOpenChange:ei,referenceElement:T,showTooltip:Z}),(0,l.useEffect)(()=>{h&&Z&&ei(!1)},[h,ei,Z]),(0,l.useEffect)(()=>{!u&&Z&&ei(!1)},[u,ei,Z]),(0,l.useEffect)(()=>H.setReference(T),[T,H]),(0,l.useEffect)(()=>{if(Z)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ei(!1,!0)}},[ei,Z]),(0,l.useLayoutEffect)(()=>{A(Math.min(...[...s?[s.offsetWidth]:[],B?.offsetWidth||document.body.offsetWidth])-8)},[s,B]);let ef=(0,l.useCallback)(e=>{F.current=e,V()},[V]),ep=(0,l.useCallback)(e=>{_.current=e,H.setFloating(e)},[H]),eh=(0,l.useRef)(null);(0,l.useImperativeHandle)(c?.ref,()=>eh.current);let eb=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ea,onFocus:es,onMouseEnter:ec,onMouseLeave:eu,onClick:el,onContextMenu:ed,ref:eh}):null,[c,ea,el,ed,es,ec,eu]);if((0,l.useEffect)(()=>{if(eb)return M(eh.current),()=>M(null)},[eb]),!eb)return(0,i.jsx)(i.Fragment,{});if(h)return eb;let em=(0,i.jsx)(oJ,{"data-ui":"Tooltip",...j,ref:ep,style:{...D,maxWidth:N>0?`${N}px`:void 0},zOffset:z,children:(0,i.jsx)(oY,{...j,animate:E,arrow:d,arrowRef:ef,arrowX:W,arrowY:q,originX:X,originY:G,padding:v,placement:Q,radius:y,ref:ep,scheme:$,shadow:k,children:u})}),eg=Z&&(w?(0,i.jsx)(r5,{__unstable_name:"string"==typeof w?w:void 0,children:em}):em);return(0,i.jsxs)(i.Fragment,{children:[E?(0,i.jsx)(b.M,{children:eg}):eg,eb]})});oZ.displayName="ForwardRef(Tooltip)";let o0=s.zo.div`
  line-height: 0;
`,o1=(0,s.zo)(tJ)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`,o2=s.F4`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,o3=(0,s.zo)(c.L4p)`
  animation: ${o2} 500ms linear infinite;
`;function o4(e){let t,r,o;let n=(0,a.c)(11),{children:l,id:d,onSelect:s,selected:c,value:u}=e;n[0]!==s||n[1]!==u?(t=()=>{setTimeout(()=>{s(u)},0)},n[0]=s,n[1]=u,n[2]=t):t=n[2];let f=t;n[3]!==f?(r=e=>{var t;"Enter"!==e.key||rW(t=e.currentTarget)||rq(t)||f()},n[3]=f,n[4]=r):r=n[4];let p=r;return n[5]!==c||n[6]!==d||n[7]!==f||n[8]!==p||n[9]!==l?(o=(0,i.jsx)("li",{"aria-selected":c,"data-ui":"AutocompleteOption",id:d,role:"option",onClick:f,onKeyDown:p,children:l}),n[5]=c,n[6]=d,n[7]=f,n[8]=p,n[9]=l,n[10]=o):o=n[10],o}function o5(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let o6=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],o7=["bottom-start","top-start"],o8=(e,t)=>t?t.value:e,o9=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,ne=(0,l.forwardRef)(function(e,t){let{border:r=!0,customValidity:o,disabled:n,filterOption:a,fontSize:d=2,icon:s,id:u,listBox:f=y,loading:p,onBlur:h,onChange:b,onFocus:m,onQueryChange:g,onSelect:v,openButton:x,openOnFocus:$,options:k,padding:z=3,popover:R=y,prefix:j,radius:E=2,readOnly:S,relatedElements:_,renderOption:T,renderPopover:M,renderValue:F=o8,suffix:O,value:N,...A}=e,[L,B]=(0,l.useReducer)(o5,{activeValue:N||null,focused:!1,listFocused:!1,query:null,value:N||null}),{activeValue:I,focused:D,listFocused:Q,query:P,value:H}=L,V=(0,l.useCallback)(({value:e})=>(0,i.jsx)(ri,{"data-as":"button",padding:z,radius:2,tone:"inherit",children:(0,i.jsx)(t1,{size:d,textOverflow:"ellipsis",children:e})}),[d,z]),W="function"==typeof T?T:V,q="function"==typeof a?a:o9,X=(0,l.useRef)(null),G=(0,l.useRef)(null),Y=(0,l.useRef)(null),K=(0,l.useRef)(null),U=(0,l.useRef)(!1),J=(0,l.useRef)(H),Z=(0,l.useRef)(N),ee=(0,l.useRef)(!1);(0,l.useImperativeHandle)(t,()=>Y.current);let et=`${u}-listbox`,er=Array.isArray(k)?k:w,eo=C(z),en=(0,l.useMemo)(()=>null!==H?er.find(e=>e.value===H):void 0,[er,H]),ei=(0,l.useMemo)(()=>er.filter(e=>!P||q(P,e)),[q,er,P]),ea=ei.length,el=I?`${u}-option-${I}`:void 0,ed=null!==P&&p||D&&null!==P,es=(0,l.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(_||[]).concat(X.current?[X.current]:[],G.current?[G.current]:[]),r=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){r=!0;break}}!1===r&&(B({type:"root/blur"}),ee.current=!1,g&&g(null),h&&h(e))},0)},[h,g,_]),ec=(0,l.useCallback)(e=>{let t=K.current,r=e.target instanceof HTMLElement?e.target:null,o=t?.contains(r)||!1;o!==U.current&&(U.current=o,B({type:"root/setListFocused",listFocused:o}))},[]),eu=(0,l.useCallback)(e=>{B({type:"value/change",value:e}),ee.current=!1,v&&v(e),J.current=e,b&&b(e),g&&g(null),Y.current?.focus()},[b,v,g]),ef=(0,l.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===I),r=t?ei.indexOf(t):-1,o=ei[(r+1)%ea];o&&B({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===I),r=t?ei.indexOf(t):-1,o=ei[-1===r?ea-1:(ea+r-1)%ea];o&&B({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("Escape"===e.key){B({type:"root/escape"}),ee.current=!1,g&&g(null),Y.current?.focus();return}let t=e.target,r=K.current;if((r===t||r?.contains(t))&&!o6.includes(e.key)){Y.current?.focus();return}},[I,ei,ea,g]),ep=(0,l.useCallback)(e=>{let t=e.currentTarget.value;B({type:"input/change",query:t}),g&&g(t)},[g]),eh=(0,l.useCallback)(()=>{B({type:"root/open",query:H?F(H,en):""})},[en,F,H]),eb=(0,l.useCallback)(e=>{D||(B({type:"input/focus"}),m&&m(e),$&&eh())},[D,m,$,eh]),em=(0,l.useCallback)(()=>{ee.current=!0},[]),eg=(0,l.useCallback)(()=>{ee.current=!1},[]),ev=(0,l.useCallback)(()=>{B({type:"root/clear"}),J.current="",b&&b(""),g&&g(null),Y.current?.focus()},[b,g]),ex=(0,l.useCallback)(()=>{B({type:"input/focus"})},[]);(0,l.useEffect)(()=>{if(N!==Z.current){Z.current=N,void 0!==N&&(B({type:"value/change",value:N}),J.current=N);return}N!==J.current&&(J.current=N||null,B({type:"value/change",value:N||null}))},[N]),(0,l.useEffect)(()=>{!D&&J.current&&B({type:"root/setActiveValue",value:J.current})},[D]),(0,l.useEffect)(()=>{let e=K.current;if(!e)return;let t=ei.find(e=>e.value===I);if(t){let r=ei.indexOf(t),o=e.childNodes[r];if(o){if(document.activeElement&&o.contains(document.activeElement))return;rY(o)}}},[I,ei]);let ew=(0,l.useMemo)(()=>{if(!p&&!n&&H)return{"aria-label":"Clear",onFocus:ex}},[n,ex,p,H]),ey=(0,l.useMemo)(()=>eo.map(e=>0===e?0:1===e||2===e?1:e-2),[eo]),e$=(0,l.useMemo)(()=>eo.map(e=>Math.max(e-1,0)),[eo]),ek=(0,l.useMemo)(()=>"object"==typeof x?x:y,[x]),ez=(0,l.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),rP(()=>Y.current?.focus())},[ek,eh]),eR=(0,l.useMemo)(()=>n||S||!x?void 0:(0,i.jsx)(tJ,{"aria-hidden":ed,padding:ey,children:(0,i.jsx)(ro,{"aria-label":"Open",disabled:ed,fontSize:d,icon:c.v4q,mode:"bleed",padding:e$,...ek,onClick:ez})}),[n,ed,d,ez,x,ey,e$,ek,S]),ej=(0,l.useMemo)(()=>null===P?null!==H?F(H,en):"":P,[en,P,F,H]),eE=(0,i.jsx)(oV,{...A,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:r,clearButton:ew,customValidity:o,disabled:n,fontSize:d,icon:s,iconRight:p&&o3,id:u,inputMode:"search",onChange:ep,onClear:ev,onFocus:eb,padding:eo,prefix:j,radius:E,readOnly:S,ref:Y,role:"combobox",spellCheck:!1,suffix:O||eR,value:ej}),eS=(0,l.useCallback)(e=>{"Tab"===e.key&&Q&&Y.current?.focus()},[Q]),eC=(0,l.useMemo)(()=>0===ei.length?null:(0,i.jsx)(o1,{"data-ui":"AutoComplete__results",onKeyDown:eS,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(oy,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:K,role:"listbox",space:1,children:ei.map(e=>{let t=null!==I?e.value===I:en===e;return(0,i.jsx)(o4,{id:`${u}-option-${e.value}`,onSelect:eu,selected:t,value:e.value,children:(0,l.cloneElement)(W(e),{disabled:p,selected:t,tabIndex:Q&&t?0:-1})},e.value)})})}),[I,en,ei,eu,eS,u,f,et,Q,p,W]),e_=(0,l.useMemo)(()=>M?M({content:eC,hidden:!ed,inputElement:Y.current,onMouseEnter:em,onMouseLeave:eg},G):0===ea?null:(0,i.jsx)(ol,{arrow:!1,constrainSize:!0,content:eC,fallbackPlacements:o7,matchReferenceWidth:!0,onMouseEnter:em,onMouseLeave:eg,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:E,ref:G,referenceElement:Y.current,...R}),[eC,ed,ea,em,eg,R,E,M]);return(0,i.jsxs)(o0,{"data-ui":"Autocomplete",onBlur:es,onFocus:ec,onKeyDown:ef,ref:X,children:[eE,e_]})});ne.displayName="ForwardRef(Autocomplete)";let nt=ne,nr=s.zo.ol`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`,no=(0,s.zo)(ro)`
  appearance: none;
  margin: -4px;
`,nn=(0,l.forwardRef)(function(e,t){let{children:r,maxLength:o,separator:n,space:a=2,...d}=e,s=C(a),[c,u]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),h=(0,l.useCallback)(()=>u(!1),[]),b=(0,l.useCallback)(()=>u(!0),[]);M(h,()=>[f.current,p.current]);let m=(0,l.useMemo)(()=>l.Children.toArray(r).filter(l.isValidElement),[r]),g=(0,l.useMemo)(()=>{let e=m.length;if(o&&e>o){let t=Math.ceil(o/2),r=Math.floor(o/2);return[...m.slice(0,t-1),(0,i.jsx)(ol,{constrainSize:!0,content:(0,i.jsx)(oy,{as:"ol",overflow:"auto",padding:s,space:s,children:m.slice(t-1,e-r)}),open:c,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(no,{fontSize:1,mode:"bleed",onClick:c?h:b,padding:1,ref:f,selected:c,text:"…"})},"button"),...m.slice(e-r)]}return m},[h,b,o,c,m,s]);return(0,i.jsx)(nr,{"data-ui":"Breadcrumbs",...d,ref:t,children:g.map((e,t)=>(0,i.jsxs)(l.Fragment,{children:[t>0&&(0,i.jsx)(tJ,{"aria-hidden":!0,as:"li",paddingX:s,children:n||(0,i.jsx)(t1,{muted:!0,children:"/"})}),(0,i.jsx)(tJ,{as:"li",children:e})]},t))})});nn.displayName="ForwardRef(Breadcrumbs)";let ni=eF("@sanity/ui/context/dialog",{version:0});function na(e,t,r){return!e||!t||rX(e,r)||rX(t,r)}let nl=(0,s.zo)(r0)(tT,function({theme:e}){let{color:t}=(0,n.aQ)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,n.aQ)(e.theme);return R(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?s.iv`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:s.iv``}),nd=(0,s.zo)(rh)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ns=(0,s.zo)(ri)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`,nc=(0,s.zo)(t5)`
  flex: 1;
  min-height: 0;
  width: 100%;
`,nu=(0,s.zo)(tJ)`
  position: relative;
  z-index: 2;
`,nf=(0,s.zo)(tJ)`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`,np=(0,s.zo)(tJ)`
  position: relative;
  z-index: 3;
`,nh=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v;let x=(0,a.c)(38),{__unstable_autoFocus:w,__unstable_hideCloseButton:y,children:$,contentRef:k,footer:z,header:R,id:j,onClickOutside:E,onClose:S,portal:_,radius:T,scheme:F,shadow:O,width:N}=e,A=r4(),L=_?A.elements?.[_]||null:A.element,B=rA().element,I=C(T),D=C(O),Q=C(N),P=(0,l.useRef)(null),H=(0,l.useRef)(null),{isTopLayer:V}=rQ(),W=`${j}_label`,q=!!S&&!1===y,X=!!R||q;return x[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>P.current,x[0]=r):r=x[0],(0,l.useImperativeHandle)(t,r),x[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>H.current,x[1]=o):o=x[1],(0,l.useImperativeHandle)(k,o),x[2]!==w?(n=()=>{w&&P.current&&rY(P.current)},d=[w,P],x[2]=w,x[3]=n,x[4]=d):(n=x[3],d=x[4]),(0,l.useEffect)(n,d),x[5]!==V||x[6]!==S||x[7]!==B||x[8]!==L?(s=e=>{if(!V||!S)return;let t=document.activeElement;t&&!na(B,L,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),S())},x[5]=V,x[6]=S,x[7]=B,x[8]=L,x[9]=s):s=x[9],e_(s),x[10]!==V||x[11]!==E||x[12]!==B||x[13]!==L?(u=V&&E&&(e=>{let t=e.target;t&&!na(B,L,t)||E()}),x[10]=V,x[11]=E,x[12]=B,x[13]=L,x[14]=u):u=x[14],x[15]===Symbol.for("react.memo_cache_sentinel")?(f=()=>[P.current],x[15]=f):f=x[15],M(u,f),x[16]!==X||x[17]!==R||x[18]!==W||x[19]!==q||x[20]!==S?(p=X&&(0,i.jsx)(nu,{children:(0,i.jsxs)(t5,{align:"flex-start",padding:3,children:[(0,i.jsx)(tJ,{flex:1,padding:2,children:R&&(0,i.jsx)(t1,{id:W,size:1,weight:"semibold",children:R})}),q&&(0,i.jsx)(tJ,{flex:"none",children:(0,i.jsx)(ro,{"aria-label":"Close dialog",disabled:!S,icon:c.Two,mode:"bleed",onClick:S,padding:2})})]})}),x[16]=X,x[17]=R,x[18]=W,x[19]=q,x[20]=S,x[21]=p):p=x[21],x[22]!==$?(h=(0,i.jsx)(nf,{flex:1,ref:H,tabIndex:-1,children:$}),x[22]=$,x[23]=h):h=x[23],x[24]!==z?(b=z&&(0,i.jsx)(np,{children:z}),x[24]=z,x[25]=b):b=x[25],x[26]!==p||x[27]!==h||x[28]!==b?(m=(0,i.jsxs)(nc,{direction:"column",children:[p,h,b]}),x[26]=p,x[27]=h,x[28]=b,x[29]=m):m=x[29],x[30]!==I||x[31]!==F||x[32]!==D||x[33]!==m?(g=(0,i.jsx)(ns,{radius:I,ref:P,scheme:F,shadow:D,children:m}),x[30]=I,x[31]=F,x[32]=D,x[33]=m,x[34]=g):g=x[34],x[35]!==Q||x[36]!==g?(v=(0,i.jsx)(nd,{"data-ui":"DialogCard",width:Q,children:g}),x[35]=Q,x[36]=g,x[37]=v):v=x[37],v});nh.displayName="ForwardRef(DialogCard)";let nb=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S,_,T,M,F;let O=(0,a.c)(60),N=(0,l.useContext)(ni),{layer:A}=eI();O[0]!==e?({__unstable_autoFocus:r,__unstable_hideCloseButton:o,cardRadius:n,cardShadow:d,children:k,contentRef:g,footer:v,header:x,id:m,onActivate:R,onClickOutside:w,onClose:y,onFocus:b,padding:s,portal:h,position:f,scheme:$,width:c,zOffset:p,animate:u,...z}=e,O[0]=e,O[1]=r,O[2]=o,O[3]=n,O[4]=d,O[5]=s,O[6]=c,O[7]=u,O[8]=f,O[9]=p,O[10]=h,O[11]=b,O[12]=m,O[13]=g,O[14]=v,O[15]=x,O[16]=w,O[17]=y,O[18]=$,O[19]=k,O[20]=z,O[21]=R):(r=O[1],o=O[2],n=O[3],d=O[4],s=O[5],c=O[6],u=O[7],f=O[8],p=O[9],h=O[10],b=O[11],m=O[12],g=O[13],v=O[14],x=O[15],w=O[16],y=O[17],$=O[18],k=O[19],z=O[20],R=O[21]);let L=void 0===r||r,B=void 0!==o&&o,I=void 0===n?4:n,D=void 0===d?3:d,Q=void 0===s?3:s,P=void 0===c?0:c,H=void 0!==u&&u,V=f??(N.position||"fixed"),W=p??(N.zOffset||A.dialog.zOffset),q=!eV()&&H,X=r4(),G=h?X.elements?.[h]||null:X.element,Y=rA().element,K=C(I),U=C(Q),J=C(V),Z=C(P),ee=C(W),et=(0,l.useRef)(null),er=(0,l.useRef)(null),eo=(0,l.useRef)(null),en=(0,l.useRef)(null);O[22]!==b?(j=e=>{b?.(e);let t=e.target,r=eo.current;if(r&&t===et.current){rK(r);return}if(r&&t===er.current){rY(r);return}rV(e.target)&&(en.current=e.target)},O[22]=b,O[23]=j):j=O[23];let ei=j,ea=`${m}_label`,el=(0,l.useRef)();O[24]!==Y||O[25]!==G?(E=()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{let e=document.activeElement;if(e&&!na(Y,G,e)){let e=en.current;if(!e||!document.body.contains(e)){let e=eo.current;e&&rY(e);return}e.focus()}},0)},O[24]=Y,O[25]=G,O[26]=E):E=O[26];let ed=E;return O[27]===Symbol.for("react.memo_cache_sentinel")?(S=(0,i.jsx)("div",{ref:et,tabIndex:0}),O[27]=S):S=O[27],O[28]!==L||O[29]!==B||O[30]!==g||O[31]!==v||O[32]!==x||O[33]!==m||O[34]!==w||O[35]!==y||O[36]!==h||O[37]!==K||O[38]!==$||O[39]!==D||O[40]!==Z||O[41]!==k?(_=(0,i.jsx)(nh,{__unstable_autoFocus:L,__unstable_hideCloseButton:B,contentRef:g,footer:v,header:x,id:m,onClickOutside:w,onClose:y,portal:h,radius:K,ref:eo,scheme:$,shadow:D,width:Z,children:k}),O[28]=L,O[29]=B,O[30]=g,O[31]=v,O[32]=x,O[33]=m,O[34]=w,O[35]=y,O[36]=h,O[37]=K,O[38]=$,O[39]=D,O[40]=Z,O[41]=k,O[42]=_):_=O[42],O[43]===Symbol.for("react.memo_cache_sentinel")?(T=(0,i.jsx)("div",{ref:er,tabIndex:0}),O[43]=T):T=O[43],O[44]!==z||O[45]!==q||O[46]!==U||O[47]!==J||O[48]!==ea||O[49]!==m||O[50]!==R||O[51]!==ed||O[52]!==ei||O[53]!==t||O[54]!==ee||O[55]!==_?(M=(0,i.jsxs)(nl,{...z,$animate:q,$padding:U,$position:J,"aria-labelledby":ea,"aria-modal":!0,"data-ui":"Dialog",id:m,onActivate:R,onClick:ed,onFocus:ei,ref:t,role:"dialog",zOffset:ee,children:[S,_,T]}),O[44]=z,O[45]=q,O[46]=U,O[47]=J,O[48]=ea,O[49]=m,O[50]=R,O[51]=ed,O[52]=ei,O[53]=t,O[54]=ee,O[55]=_,O[56]=M):M=O[56],O[57]!==h||O[58]!==M?(F=(0,i.jsx)(r5,{__unstable_name:h,children:M}),O[57]=h,O[58]=M,O[59]=F):F=O[59],F});function nm(e){let t,r,o;let n=(0,a.c)(6),{children:l,position:d,zOffset:s}=e;return n[0]!==d||n[1]!==s?(r={version:0,position:d,zOffset:s},n[0]=d,n[1]=s,n[2]=r):r=n[2],t=r,n[3]!==t||n[4]!==l?(o=(0,i.jsx)(ni.Provider,{value:t,children:l}),n[3]=t,n[4]=l,n[5]=o):o=n[5],o}nb.displayName="ForwardRef(Dialog)",nm.displayName="DialogProvider";let ng=s.zo.kbd`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`,nv=(0,s.zo)(rk)`
  &:not([hidden]) {
    display: block;
  }
`,nx=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({fontSize:n,keys:o,padding:l,radius:d,space:r,...s}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6]);let h=C(void 0===r?.5:r);if(!o||0===o.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)(i.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==n||p[9]!==l||p[10]!==d||p[11]!==o){let e;p[13]!==n||p[14]!==l||p[15]!==d?(e=(e,t)=>(0,i.jsx)(nv,{fontSize:n,padding:l,radius:d,children:e},t),p[13]=n,p[14]=l,p[15]=d,p[16]=e):e=p[16],c=o.map(e),p[8]=n,p[9]=l,p[10]=d,p[11]=o,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,i.jsx)(ry,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==s||p[21]!==t||p[22]!==u?(f=(0,i.jsx)(ng,{"data-ui":"Hotkeys",...s,ref:t,children:u}),p[20]=s,p[21]=t,p[22]=u,p[23]=f):f=p[23],f});nx.displayName="ForwardRef(Hotkeys)";let nw=eF("@sanity/ui/context/menu",null);function ny(e){return rW(e)&&"true"!==e.getAttribute("data-disabled")||rq(e)&&!e.disabled}function n$(e){return e.filter(ny)}let nk=[],nz=(0,s.zo)(tJ)`
  outline: none;
  overflow: auto;
`,nR=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S;let C=(0,a.c)(50);if(C[0]!==e){let{children:t,focusFirst:i,focusLast:a,onClickOutside:l,onEscape:g,onItemClick:v,onItemSelect:x,onKeyDown:w,originElement:y,padding:$,registerElement:k,shouldFocus:z,space:R,...j}=e;b=t,f=l,p=g,h=v,u=x,d=w,s=y,r=$,c=k,n=z,o=R,m=j,C[0]=e,C[1]=r,C[2]=o,C[3]=n,C[4]=d,C[5]=s,C[6]=c,C[7]=u,C[8]=f,C[9]=p,C[10]=h,C[11]=b,C[12]=m}else r=C[1],o=C[2],n=C[3],d=C[4],s=C[5],c=C[6],u=C[7],f=C[8],p=C[9],h=C[10],b=C[11],m=C[12];let _=void 0===r?1:r,T=void 0===o?1:o,F=n??(e.focusFirst&&"first"||e.focusLast&&"last"||null),O=(0,l.useRef)(null);C[13]===Symbol.for("react.memo_cache_sentinel")?(g=()=>O.current,C[13]=g):g=C[13],(0,l.useImperativeHandle)(t,g);let{isTopLayer:N}=rQ();C[14]!==d||C[15]!==s||C[16]!==F?(v={onKeyDown:d,originElement:s,shouldFocus:F,rootElementRef:O},C[14]=d,C[15]=s,C[16]=F,C[17]=v):v=C[17];let{activeElement:A,activeIndex:L,handleItemMouseEnter:B,handleItemMouseLeave:I,handleKeyDown:D,mount:Q}=function(e){let{onKeyDown:t,originElement:r,shouldFocus:o,rootElementRef:n}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!n.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(o);if(r.unshift(n),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||nk,n=r.get(t)||nk,i=Math.max(o.length,n.length);for(let e=0;e<i;e+=1){let t=o[e]||-1,r=n[e]||-1;if(t!==r)return t-r}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){r&&r.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=n$(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=n$(i.current),r=t[t.length-1];if(!r)return;f(i.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=n$(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n-1+r)%r];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=n$(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n+1)%r];f(i.current.indexOf(a));return}t&&t(e)},[t,r,f]),b=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),m=(0,l.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===o){let e=n$(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===o){let e=n$(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,o]),{activeElement:c,activeIndex:a,handleItemMouseEnter:b,handleItemMouseLeave:m,handleKeyDown:h,mount:p}}(v),P=(0,l.useRef)(null);C[18]!==c?(x=e=>{P.current&&(P.current(),P.current=null),O.current=e,O.current&&c&&(P.current=c(O.current))},C[18]=c,C[19]=x):x=C[19];let H=x;return C[20]!==u||C[21]!==L?(w=()=>{u&&u(L)},y=[L,u],C[20]=u,C[21]=L,C[22]=w,C[23]=y):(w=C[22],y=C[23]),(0,l.useEffect)(w,y),C[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[O.current],C[24]=$):$=C[24],M(N&&f,$),C[25]!==N||C[26]!==p?(k=e=>{N&&"Escape"===e.key&&(e.stopPropagation(),p&&p())},C[25]=N,C[26]=p,C[27]=k):k=C[27],e_(k),C[28]!==A||C[29]!==L||C[30]!==Q||C[31]!==f||C[32]!==p||C[33]!==h||C[34]!==B||C[35]!==I||C[36]!==c?(R={version:0,activeElement:A,activeIndex:L,mount:Q,onClickOutside:f,onEscape:p,onItemClick:h,onItemMouseEnter:B,onItemMouseLeave:I,registerElement:c,onMouseEnter:B,onMouseLeave:I},C[28]=A,C[29]=L,C[30]=Q,C[31]=f,C[32]=p,C[33]=h,C[34]=B,C[35]=I,C[36]=c,C[37]=R):R=C[37],z=R,C[38]!==T||C[39]!==b?(j=(0,i.jsx)(oy,{space:T,children:b}),C[38]=T,C[39]=b,C[40]=j):j=C[40],C[41]!==m||C[42]!==D||C[43]!==_||C[44]!==H||C[45]!==j?(E=(0,i.jsx)(nz,{"data-ui":"Menu",...m,onKeyDown:D,padding:_,ref:H,role:"menu",tabIndex:-1,children:j}),C[41]=m,C[42]=D,C[43]=_,C[44]=H,C[45]=j,C[46]=E):E=C[46],C[47]!==z||C[48]!==E?(S=(0,i.jsx)(nw.Provider,{value:z,children:E}),C[47]=z,C[48]=E,C[49]=S):S=C[49],S});nR.displayName="ForwardRef(Menu)";let nj=(0,l.forwardRef)(function(e,t){let{__unstable_disableRestoreFocusOnClose:r=!1,boundaryElement:o,button:n,id:a,menu:d,onClose:s,onOpen:c,placement:u,popoverScheme:f,portal:p=!0,popover:h,popoverRadius:b,preventOverflow:m}=e,[g,v]=(0,l.useState)(!1),[x,w]=(0,l.useState)(null),[y,$]=(0,l.useState)(null),[k,z]=(0,l.useState)([]),R=(0,l.useRef)(g);(0,l.useEffect)(()=>{c&&g&&!R.current&&c()},[c,g]),(0,l.useEffect)(()=>{s&&!g&&R.current&&s()},[s,g]),(0,l.useEffect)(()=>{R.current=g},[g]);let j=(0,l.useCallback)(()=>{v(e=>!e),w(null)},[]),E=(0,l.useCallback)(e=>{g&&e.preventDefault()},[g]),S=(0,l.useCallback)(e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),v(!0),w("first");return}if("ArrowUp"===e.key){e.preventDefault(),v(!0),w("last");return}},[]),C=(0,l.useCallback)(e=>{let t=e.target;if(t instanceof Node&&!(y&&(t===y||y.contains(t)))){for(let e of k)if(t===e||e.contains(t))return;v(!1)}},[y,k]),_=(0,l.useCallback)(()=>{v(!1),!r&&y&&y.focus()},[y,r]),T=(0,l.useCallback)(e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of k)if(e===t||e.contains(t))return;v(!1)}},[k]),M=(0,l.useCallback)(()=>{v(!1),!r&&y&&y.focus()},[y,r]),F=(0,l.useCallback)(e=>(z(t=>t.concat([e])),()=>z(t=>t.filter(t=>t!==e))),[]),O=(0,l.useMemo)(()=>({"aria-labelledby":a,onBlurCapture:T,onClickOutside:C,onEscape:_,onItemClick:M,originElement:y,registerElement:F,shouldFocus:x}),[y,C,_,M,a,T,F,x]),N=d&&(0,l.cloneElement)(d,O),A=(0,l.useRef)(null),L=(0,l.useMemo)(()=>n&&(0,l.cloneElement)(n,{"data-ui":"MenuButton",id:a,onClick:j,onKeyDown:S,onMouseDown:E,"aria-haspopup":!0,"aria-expanded":g,ref:A,selected:n.props.selected??g}),[n,j,S,E,a,g]);(0,l.useImperativeHandle)(t,()=>A.current),(0,l.useEffect)(()=>{if(L)return $(A.current),()=>$(null)},[L]);let B=(0,l.useMemo)(()=>({boundaryElement:o,overflow:"auto",placement:u,portal:p,preventOverflow:m,radius:b,scheme:f,...h||{}}),[o,u,b,f,p,m,h]);return(0,i.jsx)(ol,{"data-ui":"MenuButton__popover",...B,content:N,open:g,children:L||(0,i.jsx)(i.Fragment,{})})});nj.displayName="ForwardRef(MenuButton)";let nE=s.zo.hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`;nE.displayName="MenuDivider";let nS=(0,s.zo)(tJ)(tM,function(){return s.iv`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=(0,n.aQ)(e.theme),i=r.selectable[t];return s.iv`
    ${t9(r,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t9(r,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t9(r,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t9(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t9(r,i.hovered)}
            }

            &:active {
              ${t9(r,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t9(r,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t9(r,i.pressed)}
        }

        &[data-selected] {
          ${t9(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t9(r,i.hovered)}
            }
            &:active {
              ${t9(r,i.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function nC(){let e=(0,l.useContext)(nw);if(!e)throw Error("useMenu(): missing context value");if(!rO(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function n_(e){let t,r,o,n,s,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S,_,T,M,F,O,N,A,L,B,I,D;let Q=(0,a.c)(77);Q[0]!==e?({as:t,children:p,fontSize:r,icon:h,onClick:f,padding:o,popover:g,radius:n,space:s,text:b,tone:u,...m}=e,Q[0]=e,Q[1]=t,Q[2]=r,Q[3]=o,Q[4]=n,Q[5]=s,Q[6]=u,Q[7]=f,Q[8]=p,Q[9]=h,Q[10]=b,Q[11]=m,Q[12]=g):(t=Q[1],r=Q[2],o=Q[3],n=Q[4],s=Q[5],u=Q[6],f=Q[7],p=Q[8],h=Q[9],b=Q[10],m=Q[11],g=Q[12]);let P=void 0===t?"button":t,H=void 0===r?1:r,V=void 0===o?3:o,W=void 0===n?2:n,q=void 0===s?3:s,X=void 0===u?"default":u,G=nC(),{scheme:Y}=eA(),{activeElement:K,mount:U,onClickOutside:J,onEscape:Z,onItemClick:ee,onItemMouseEnter:et,registerElement:er}=G,eo=et??G.onMouseEnter,[en,ei]=(0,l.useState)(null),[ea,el]=(0,l.useState)(!1),[ed,es]=(0,l.useState)(null),ec=!!K&&K===en,[eu,ef]=(0,l.useState)(!1);Q[13]!==eo?(v=e=>{ef(!1),eo(e),el(!0)},Q[13]=eo,Q[14]=v):v=Q[14];let ep=v;Q[15]!==en?(x=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),el(!1),requestAnimationFrame(()=>{en?.focus()}))},Q[15]=en,Q[16]=x):x=Q[16];let eh=x;Q[17]!==f?(w=e=>{f?.(e),es("first"),el(!0)},Q[17]=f,Q[18]=w):w=Q[18];let eb=w;Q[19]!==ee?(y=()=>{el(!1),ee?.()},Q[19]=ee,Q[20]=y):y=Q[20];let em=y;Q[21]===Symbol.for("react.memo_cache_sentinel")?($=()=>ef(!0),Q[21]=$):$=Q[21];let eg=$;Q[22]!==U||Q[23]!==en?(k=()=>U(en),z=[U,en],Q[22]=U,Q[23]=en,Q[24]=k,Q[25]=z):(k=Q[24],z=Q[25]),(0,l.useEffect)(k,z),Q[26]!==ec?(R=()=>{ec||el(!1)},j=[ec],Q[26]=ec,Q[27]=R,Q[28]=j):(R=Q[27],j=Q[28]),(0,l.useEffect)(R,j),Q[29]!==ea?(E=()=>{ea||ef(!1)},S=[ea],Q[29]=ea,Q[30]=E,Q[31]=S):(E=Q[30],S=Q[31]),(0,l.useEffect)(E,S),Q[32]!==ed?(_=()=>{if(!ed)return;let e=requestAnimationFrame(()=>es(null));return()=>cancelAnimationFrame(e)},T=[ed],Q[32]=ed,Q[33]=_,Q[34]=T):(_=Q[33],T=Q[34]),(0,l.useEffect)(_,T),Q[35]!==J||Q[36]!==Z||Q[37]!==em||Q[38]!==eh||Q[39]!==er||Q[40]!==ed||Q[41]!==p?(M=(0,i.jsx)(nR,{onClickOutside:J,onEscape:Z,onItemClick:em,onKeyDown:eh,onMouseEnter:eg,registerElement:er,shouldFocus:ed,children:p}),Q[35]=J,Q[36]=Z,Q[37]=em,Q[38]=eh,Q[39]=er,Q[40]=ed,Q[41]=p,Q[42]=M):M=Q[42];let ev=M;Q[43]===Symbol.for("react.memo_cache_sentinel")?(F=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){es("first"),el(!0),ef(!0);return}},Q[43]=F):F=Q[43];let ex=F,ew="button"===P?eu:void 0,ey="button"!==P?eu:void 0,e$=!eu&&ec?"":void 0,ek=C(W),ez="button"===P?"button":void 0;return Q[44]!==h||Q[45]!==H?(O=h&&(0,i.jsxs)(t1,{size:H,children:[(0,l.isValidElement)(h)&&h,(0,d.isValidElementType)(h)&&(0,i.jsx)(h,{})]}),Q[44]=h,Q[45]=H,Q[46]=O):O=Q[46],Q[47]!==H||Q[48]!==b?(N=(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t1,{size:H,textOverflow:"ellipsis",weight:"medium",children:b})}),Q[47]=H,Q[48]=b,Q[49]=N):N=Q[49],Q[50]===Symbol.for("react.memo_cache_sentinel")?(A=(0,i.jsx)(c.XCv,{}),Q[50]=A):A=Q[50],Q[51]!==H?(L=(0,i.jsx)(t1,{size:H,children:A}),Q[51]=H,Q[52]=L):L=Q[52],Q[53]!==q||Q[54]!==V||Q[55]!==O||Q[56]!==N||Q[57]!==L?(B=(0,i.jsxs)(t5,{gap:q,padding:V,children:[O,N,L]}),Q[53]=q,Q[54]=V,Q[55]=O,Q[56]=N,Q[57]=L,Q[58]=B):B=Q[58],Q[59]!==P||Q[60]!==m||Q[61]!==ew||Q[62]!==ey||Q[63]!==e$||Q[64]!==ek||Q[65]!==X||Q[66]!==Y||Q[67]!==eb||Q[68]!==ep||Q[69]!==ez||Q[70]!==B?(I=(0,i.jsx)(nS,{"data-as":P,"data-ui":"MenuGroup",forwardedAs:P,...m,"aria-pressed":ew,"data-pressed":ey,"data-selected":e$,$radius:ek,$tone:X,$scheme:Y,onClick:eb,onKeyDown:ex,onMouseEnter:ep,ref:ei,tabIndex:-1,type:ez,children:B}),Q[59]=P,Q[60]=m,Q[61]=ew,Q[62]=ey,Q[63]=e$,Q[64]=ek,Q[65]=X,Q[66]=Y,Q[67]=eb,Q[68]=ep,Q[69]=ez,Q[70]=B,Q[71]=I):I=Q[71],Q[72]!==g||Q[73]!==ev||Q[74]!==ea||Q[75]!==I?(D=(0,i.jsx)(ol,{...g,content:ev,"data-ui":"MenuGroup__popover",open:ea,children:I}),Q[72]=g,Q[73]=ev,Q[74]=ea,Q[75]=I,Q[76]=D):D=Q[76],D}nS.displayName="Selectable",n_.displayName="MenuGroup";let nT=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E,S,_,T,M,F,O,N,A,L,B,I;let D=(0,a.c)(74);D[0]!==e?({as:r,children:j,disabled:p,fontSize:o,hotkeys:R,icon:$,iconRight:z,onClick:h,padding:n,paddingX:b,paddingY:m,paddingTop:g,paddingRight:v,paddingBottom:x,paddingLeft:w,pressed:y,radius:s,selected:f,space:c,text:k,tone:u,...E}=e,D[0]=e,D[1]=r,D[2]=o,D[3]=n,D[4]=s,D[5]=c,D[6]=u,D[7]=f,D[8]=p,D[9]=h,D[10]=b,D[11]=m,D[12]=g,D[13]=v,D[14]=x,D[15]=w,D[16]=y,D[17]=$,D[18]=k,D[19]=z,D[20]=R,D[21]=j,D[22]=E):(r=D[1],o=D[2],n=D[3],s=D[4],c=D[5],u=D[6],f=D[7],p=D[8],h=D[9],b=D[10],m=D[11],g=D[12],v=D[13],x=D[14],w=D[15],y=D[16],$=D[17],k=D[18],z=D[19],R=D[20],j=D[21],E=D[22]);let Q=void 0===r?"button":r,P=void 0===o?1:o,H=void 0===n?3:n,V=void 0===s?2:s,W=void 0===c?3:c,q=void 0===u?"default":u,{scheme:X}=eA(),G=nC(),{activeElement:Y,mount:K,onItemClick:U,onItemMouseEnter:J,onItemMouseLeave:Z}=G,ee=J??G.onMouseEnter,et=Z??G.onMouseLeave,[er,eo]=(0,l.useState)(null),en=!!Y&&Y===er,ei=(0,l.useRef)(null);D[23]===Symbol.for("react.memo_cache_sentinel")?(S=()=>ei.current,D[23]=S):S=D[23],(0,l.useImperativeHandle)(t,S),D[24]!==K||D[25]!==er||D[26]!==f?(_=()=>K(er,f),T=[K,er,f],D[24]=K,D[25]=er,D[26]=f,D[27]=_,D[28]=T):(_=D[27],T=D[28]),(0,l.useEffect)(_,T),D[29]!==p||D[30]!==h||D[31]!==U?(M=e=>{p||(h&&h(e),U&&U())},D[29]=p,D[30]=h,D[31]=U,D[32]=M):M=D[32];let ea=M;D[33]!==H||D[34]!==b||D[35]!==m||D[36]!==g||D[37]!==v||D[38]!==x||D[39]!==w?(O={padding:H,paddingX:b,paddingY:m,paddingTop:g,paddingRight:v,paddingBottom:x,paddingLeft:w},D[33]=H,D[34]=b,D[35]=m,D[36]=g,D[37]=v,D[38]=x,D[39]=w,D[40]=O):O=D[40],F=O;let el=C(P);D[41]!==el?(N=el.map(nM),D[41]=el,D[42]=N):N=D[42];let ed=N;D[43]===Symbol.for("react.memo_cache_sentinel")?(A=e=>{ei.current=e,eo(e)},D[43]=A):A=D[43];let es=A,ec="button"===Q&&y,eu="button"!==Q&&y?"":void 0,ef=en?"":void 0,ep=p?"":void 0,eh=C(V),eb=C(0),em=p?"default":q,eg="button"===Q?"button":void 0;return D[44]!==$||D[45]!==k||D[46]!==z||D[47]!==P||D[48]!==R||D[49]!==ed||D[50]!==W||D[51]!==F?(L=($||k||z)&&(0,i.jsxs)(t5,{as:"span",gap:W,align:"center",...F,children:[$&&(0,i.jsxs)(t1,{size:P,children:[(0,l.isValidElement)($)&&$,(0,d.isValidElementType)($)&&(0,i.jsx)($,{})]}),k&&(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t1,{size:P,textOverflow:"ellipsis",weight:"medium",children:k})}),R&&(0,i.jsx)(nx,{fontSize:ed,keys:R,style:{marginTop:-4,marginBottom:-4}}),z&&(0,i.jsxs)(t1,{size:P,children:[(0,l.isValidElement)(z)&&z,(0,d.isValidElementType)(z)&&(0,i.jsx)(z,{})]})]}),D[44]=$,D[45]=k,D[46]=z,D[47]=P,D[48]=R,D[49]=ed,D[50]=W,D[51]=F,D[52]=L):L=D[52],D[53]!==j||D[54]!==F?(B=j&&(0,i.jsx)(tJ,{as:"span",...F,children:j}),D[53]=j,D[54]=F,D[55]=B):B=D[55],D[56]!==E||D[57]!==ec||D[58]!==eu||D[59]!==ef||D[60]!==ep||D[61]!==Q||D[62]!==eh||D[63]!==eb||D[64]!==em||D[65]!==X||D[66]!==p||D[67]!==ea||D[68]!==ee||D[69]!==et||D[70]!==eg||D[71]!==L||D[72]!==B?(I=(0,i.jsxs)(nS,{"data-ui":"MenuItem",...E,"aria-pressed":ec,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:Q,$radius:eh,$padding:eb,$tone:em,$scheme:X,disabled:p,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,role:"menuitem",tabIndex:-1,type:eg,children:[L,B]}),D[56]=E,D[57]=ec,D[58]=eu,D[59]=ef,D[60]=ep,D[61]=Q,D[62]=eh,D[63]=eb,D[64]=em,D[65]=X,D[66]=p,D[67]=ea,D[68]=ee,D[69]=et,D[70]=eg,D[71]=L,D[72]=B,D[73]=I):I=D[73],I});function nM(e){return e-1}nT.displayName="ForwardRef(MenuItem)";let nF=s.F4`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,nO=s.iv`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${nF};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,nN=s.iv`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?nO:s.iv`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,nA=(0,s.zo)(tJ)(tM,nN),nL=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(14);f[0]!==e?({animated:r,delay:o,radius:n,...d}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]);let p=void 0!==r&&r,[h,b]=(0,l.useState)(!o);f[5]!==o?(s=()=>{if(!o)return b(!0);let e=setTimeout(()=>{b(!0)},o);return()=>{clearTimeout(e)}},c=[o],f[5]=o,f[6]=s,f[7]=c):(s=f[6],c=f[7]),(0,l.useEffect)(s,c);let m=C(n);return f[8]!==d||f[9]!==p||f[10]!==m||f[11]!==h||f[12]!==t?(u=(0,i.jsx)(nA,{...d,$animated:p,$radius:m,$visible:h,ref:t}),f[8]=d,f[9]=p,f[10]=m,f[11]=h,f[12]=t,f[13]=u):u=f[13],u});nL.displayName="ForwardRef(Skeleton)";let nB=(0,s.zo)(nL)(e=>{let{$size:t,$style:r}=e,{font:o,media:i}=(0,n.aQ)(e.theme),a=o[r];return R(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),nI=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===r?2:r);return l[3]!==o||l[4]!==d||l[5]!==t?(n=(0,i.jsx)(nB,{...o,$size:d,ref:t,$style:"text"}),l[3]=o,l[4]=d,l[5]=t,l[6]=n):n=l[6],n});nI.displayName="ForwardRef(TextSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===r?2:r);return l[3]!==o||l[4]!==d||l[5]!==t?(n=(0,i.jsx)(nB,{...o,$size:d,ref:t,$style:"label"}),l[3]=o,l[4]=d,l[5]=t,l[6]=n):n=l[6],n}).displayName="ForwardRef(LabelSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===r?2:r);return l[3]!==o||l[4]!==d||l[5]!==t?(n=(0,i.jsx)(nB,{...o,$size:d,ref:t,$style:"heading"}),l[3]=o,l[4]=d,l[5]=t,l[6]=n):n=l[6],n}).displayName="ForwardRef(HeadingSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=C(void 0===r?2:r);return l[3]!==o||l[4]!==d||l[5]!==t?(n=(0,i.jsx)(nB,{...o,$size:d,ref:t,$style:"code"}),l[3]=o,l[4]=d,l[5]=t,l[6]=n):n=l[6],n}).displayName="ForwardRef(CodeSkeleton)";let nD=(0,s.zo)(ro)`
  max-width: 100%;
`,nQ=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w;let y=(0,a.c)(30);y[0]!==e?({icon:u,id:f,focused:d,fontSize:r,label:h,onClick:p,onFocus:n,padding:o,selected:s,...c}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=c,y[7]=u,y[8]=f,y[9]=p,y[10]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],c=y[6],u=y[7],f=y[8],p=y[9],h=y[10]);let $=void 0===r?1:r,k=void 0===o?2:o,z=(0,l.useRef)(null),R=(0,l.useRef)(!1);y[11]===Symbol.for("react.memo_cache_sentinel")?(b=()=>z.current,y[11]=b):b=y[11],(0,l.useImperativeHandle)(t,b),y[12]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{R.current=!1},y[12]=m):m=y[12];let j=m;y[13]!==n?(g=e=>{R.current=!0,n&&n(e)},y[13]=n,y[14]=g):g=y[14];let E=g;y[15]!==d?(v=()=>{d&&!R.current&&(z.current&&z.current.focus(),R.current=!0)},x=[d],y[15]=d,y[16]=v,y[17]=x):(v=y[16],x=y[17]),(0,l.useEffect)(v,x);let S=s?"true":"false",C=s?0:-1;return y[18]!==c||y[19]!==S||y[20]!==$||y[21]!==u||y[22]!==f||y[23]!==p||y[24]!==E||y[25]!==k||y[26]!==s||y[27]!==C||y[28]!==h?(w=(0,i.jsx)(nD,{"data-ui":"Tab",...c,"aria-selected":S,fontSize:$,icon:u,id:f,mode:"bleed",onClick:p,onBlur:j,onFocus:E,padding:k,ref:z,role:"tab",selected:s,tabIndex:C,text:h,type:"button"}),y[18]=c,y[19]=S,y[20]=$,y[21]=u,y[22]=f,y[23]=p,y[24]=E,y[25]=k,y[26]=s,y[27]=C,y[28]=h,y[29]=w):w=y[29],w});nQ.displayName="ForwardRef(Tab)";let nP=(0,s.zo)(ry)`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`,nH=(0,l.forwardRef)(function(e,t){let r,o,n,d,s;let c=(0,a.c)(15);c[0]!==e?({children:r,...o}=e,c[0]=e,c[1]=r,c[2]=o):(r=c[1],o=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==r||c[4]!==u){let e;let t=l.Children.toArray(r).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],n=t.map(e),c[3]=r,c[4]=u,c[5]=n}else n=c[5];let p=n,h=p.length;c[8]!==h?(d=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=d):d=c[9];let b=d;return c[10]!==o||c[11]!==b||c[12]!==t||c[13]!==p?(s=(0,i.jsx)(nP,{"data-ui":"TabList",...o,onKeyDown:b,ref:t,role:"tablist",children:p}),c[10]=o,c[11]=b,c[12]=t,c[13]=p,c[14]=s):s=c[14],s});nH.displayName="ForwardRef(TabList)";let nV=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(9);l[0]!==e?({flex:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=void 0===e.tabIndex?0:e.tabIndex;return l[3]!==r||l[4]!==o||l[5]!==t||l[6]!==d||l[7]!==e.children?(n=(0,i.jsx)(tJ,{"data-ui":"TabPanel",...r,flex:o,ref:t,role:"tabpanel",tabIndex:d,children:e.children}),l[3]=r,l[4]=o,l[5]=t,l[6]=d,l[7]=e.children,l[8]=n):n=l[8],n});nV.displayName="ForwardRef(TabPanel)";let nW=(0,s.zo)(t5)`
  overflow-x: auto;
`,nq=s.F4`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,nX={error:"critical",warning:"caution",success:"positive",info:"primary"},nG={error:"critical",warning:"caution",success:"positive",info:"primary"},nY={error:"alert",warning:"alert",success:"alert",info:"alert"},nK=(0,s.zo)(ri)(function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.button.default[e.tone].enabled.bg;return e.$duration?s.iv`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${r};
      animation-name: ${nq};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${$}, 1);
      will-change: opacity;
    }
  `:s.iv`
      pointer-events: all;
      & > * {
        opacity: var(${$}, 1);
        will-change: opacity;
      }
    `});function nU(e){let t,r,o,n,l,d,s,u,f,p,h,b,m,g;let v=(0,a.c)(30);v[0]!==e?({closable:l,description:n,duration:u,onClose:d,radius:t,title:o,status:r,...s}=e,v[0]=e,v[1]=t,v[2]=r,v[3]=o,v[4]=n,v[5]=l,v[6]=d,v[7]=s,v[8]=u):(t=v[1],r=v[2],o=v[3],n=v[4],l=v[5],d=v[6],s=v[7],u=v[8]);let x=void 0===t?3:t,w=r?nX[r]:"default",y=r?nG[r]:"default",$=r?nY[r]:"status";return v[9]!==o?(f=o&&(0,i.jsx)(t1,{size:1,weight:"medium",children:o}),v[9]=o,v[10]=f):f=v[10],v[11]!==n?(p=n&&(0,i.jsx)(t1,{muted:!0,size:1,children:n}),v[11]=n,v[12]=p):p=v[12],v[13]!==f||v[14]!==p?(h=(0,i.jsx)(nW,{flex:1,padding:3,children:(0,i.jsxs)(oy,{space:3,children:[f,p]})}),v[13]=f,v[14]=p,v[15]=h):h=v[15],v[16]!==l||v[17]!==y||v[18]!==d?(b=l&&(0,i.jsx)(tJ,{padding:1,children:(0,i.jsx)(ro,{as:"button",icon:c.Two,mode:"bleed",padding:2,tone:y,onClick:d,style:{verticalAlign:"top"}})}),v[16]=l,v[17]=y,v[18]=d,v[19]=b):b=v[19],v[20]!==h||v[21]!==b?(m=(0,i.jsxs)(t5,{align:"flex-start",children:[h,b]}),v[20]=h,v[21]=b,v[22]=m):m=v[22],v[23]!==$||v[24]!==s||v[25]!==x||v[26]!==w||v[27]!==u||v[28]!==m?(g=(0,i.jsx)(nK,{"data-ui":"Toast",role:$,...s,marginTop:3,radius:x,shadow:2,tone:w,$duration:u,children:m}),v[23]=$,v[24]=s,v[25]=x,v[26]=w,v[27]=u,v[28]=m,v[29]=g):g=v[29],g}function nJ(){return!1}function nZ(){return!0}nU.displayName="Toast";let n0=()=>()=>{},n1=eF("@sanity/ui/context/toast",null),n2=(0,s.zo)(r0)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,n3=s.zo.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`,n4=0;function n5(e){let{children:t,padding:r=4,paddingX:o,paddingY:n,zOffset:a}=e,[d,s]=(0,l.useState)([]),c=(0,l.useRef)({}),u=(0,l.useSyncExternalStore)(n0,nZ,nJ),f=eV(),p=(0,l.useMemo)(()=>({initial:{opacity:0,[$]:0,y:32,scale:.25,willChange:"transform"},animate:{opacity:[0,1,1],[$]:[0,0,1],y:0,scale:1},exit:{opacity:[1,1,0],[$]:[1,0,0],scale:.5,transition:f?{duration:0}:{duration:.2}}}),[f]),m=(0,l.useMemo)(()=>({version:0,push:e=>{let t=e=>(0,l.startTransition)(()=>s(e)),r=e.id||String(n4++),o=e.duration||5e3,n=()=>{let e=c.current[r]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===r);if(t>-1){let r=e.slice(0);return r.splice(t,1),r}return e}),void 0!==e&&(clearTimeout(e),delete c.current[r])};return t(t=>t.filter(e=>e.id!==r).concat([{dismiss:n,id:r,params:{...e,duration:o}}])),c.current[r]&&(clearTimeout(c.current[r].timeoutId),delete c.current[r]),c.current[r]={timeoutId:setTimeout(n,o)},r}}),[]);return(0,l.useEffect)(()=>()=>{for(let{timeoutId:e}of Object.values(c.current))clearTimeout(e);c.current={}},[]),(0,i.jsxs)(n1.Provider,{value:m,children:[t,u&&(0,i.jsx)(n2,{"data-ui":"ToastProvider",zOffset:a,children:(0,i.jsx)(n3,{children:(0,i.jsx)(tJ,{padding:r,paddingX:o,paddingY:n,children:(0,i.jsx)(b.M,{initial:!1,children:d.map(({dismiss:e,id:t,params:r})=>(0,i.jsx)(h.E.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:p,transition:f?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(nU,{closable:r.closable,description:r.description,onClose:e,status:r.status,title:r.title,duration:r.duration})},t))})})})})]})}function n6(){let e=(0,l.useContext)(n1);if(!e)throw Error("useToast(): missing context value");if(!rO(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function n7(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}n5.displayName="ToastProvider";let n8=eF("@sanity/ui/context/tree",null);function n9(){let e=(0,l.useContext)(n8);if(!e)throw Error("Tree: missing context value");return e}(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,z,R,j,E;let S=(0,a.c)(37);S[0]!==e?({children:n,space:r,onFocus:o,...d}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=n,S[4]=d):(r=S[1],o=S[2],n=S[3],d=S[4]);let C=void 0===r?1:r,_=(0,l.useRef)(null),[T,M]=(0,l.useState)(null),F=(0,l.useRef)(T);S[5]===Symbol.for("react.memo_cache_sentinel")?(c=[],S[5]=c):c=S[5],s=c,S[6]===Symbol.for("react.memo_cache_sentinel")?(u=[],S[6]=u):u=S[6];let[O,N]=(0,l.useState)(u);S[7]===Symbol.for("react.memo_cache_sentinel")?(f={},S[7]=f):f=S[7];let[A,L]=(0,l.useState)(f),B=(0,l.useRef)(A);S[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>_.current,S[8]=p):p=S[8],(0,l.useImperativeHandle)(t,p),S[9]!==T?(h=()=>{F.current=T},b=[T],S[9]=T,S[10]=h,S[11]=b):(h=S[10],b=S[11]),(0,l.useEffect)(h,b),S[12]!==A?(m=()=>{B.current=A},g=[A],S[12]=A,S[13]=m,S[14]=g):(m=S[13],g=S[14]),(0,l.useEffect)(m,g),S[15]===Symbol.for("react.memo_cache_sentinel")?(v=(e,t,r,o)=>(L(o=>({...o,[t]:{element:e,expanded:r}})),o&&M(e),()=>{L(e=>{let r={...e};return delete r[t],r})}),S[15]=v):v=S[15];let I=v;S[16]===Symbol.for("react.memo_cache_sentinel")?(x=(e,t)=>{L(r=>{let o=r[e];return o?{...r,[e]:{...o,expanded:t}}:r})},S[16]=x):x=S[16];let D=x,Q=T||O[0]||null;S[17]!==Q||S[18]!==C||S[19]!==A?(y={version:0,focusedElement:Q,level:0,path:s,registerItem:I,setExpanded:D,setFocusedElement:M,space:C,state:A},S[17]=Q,S[18]=C,S[19]=A,S[20]=y):y=S[20],w=y,S[21]!==O?($=e=>{if(F.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(o),i=t.length;for(let t=1;t<i;t+=1){if(!n[t])continue;let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(B.current,O,F.current);t&&(n7(t),M(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(0,o),i=n.length;for(let t=i-1;t>=0;t-=1){let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(B.current,O,F.current);t&&(n7(t),M(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=F.current.getAttribute("data-tree-key");if(!t)return;let r=B.current[t];if(!r)return;if(r.expanded)L(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!1}}:e});else{let e=t.split("/");e.pop();let r=e.join("/"),o=r&&B.current[r];o&&(o.element.focus(),M(o.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=F.current.getAttribute("data-tree-key");if(!t)return;B.current[t]?.expanded||L(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!0}}:e});return}}},S[21]=O,S[22]=$):$=S[22];let P=$;S[23]!==o?(k=e=>{M(e.target),o?.(e)},S[23]=o,S[24]=k):k=S[24];let H=k;return S[25]===Symbol.for("react.memo_cache_sentinel")?(z=()=>{_.current&&N(Array.from(_.current.querySelectorAll('[data-ui="TreeItem"]')))},S[25]=z):z=S[25],S[26]!==n?(R=[n],S[26]=n,S[27]=R):R=S[27],(0,l.useEffect)(z,R),S[28]!==d||S[29]!==H||S[30]!==P||S[31]!==C||S[32]!==n?(j=(0,i.jsx)(oy,{as:"ul","data-ui":"Tree",...d,onFocus:H,onKeyDown:P,ref:_,role:"tree",space:C,children:n}),S[28]=d,S[29]=H,S[30]=P,S[31]=C,S[32]=n,S[33]=j):j=S[33],S[34]!==w||S[35]!==j?(E=(0,i.jsx)(n8.Provider,{value:w,children:j}),S[34]=w,S[35]=j,S[36]=E):E=S[36],E})).displayName="Memo(ForwardRef(Tree))";let ie=(0,l.memo)(function(e){let t,r,o,n;let l=(0,a.c)(9);l[0]!==e?({children:o,expanded:t,...r}=e,l[0]=e,l[1]=t,l[2]=r,l[3]=o):(t=l[1],r=l[2],o=l[3]);let d=void 0!==t&&t,s=n9(),c=!d;return l[4]!==r||l[5]!==c||l[6]!==s.space||l[7]!==o?(n=(0,i.jsx)(oy,{as:"ul","data-ui":"TreeGroup",...r,hidden:c,marginTop:s.space,role:"group",space:s.space,children:o}),l[4]=r,l[5]=c,l[6]=s.space,l[7]=o,l[8]=n):n=l[8],n}),it=(0,l.memo)(s.zo.li(function(){return s.iv`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.selectable.default;return s.iv`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t9(t,r.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t9(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t9(t,r.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t9(t,r.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t9(t,r.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t9(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t9(t,r.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t9(t,r.selected)}
        }
      }
    }
  `})),ir=(0,s.zo)(tJ).attrs({forwardedAs:"a"})(function(e){let{$level:t}=e,{space:r}=(0,n.aQ)(e.theme);return s.iv`
    padding-left: ${z(r[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),io=(0,s.zo)(t1)`
  & > svg {
    transition: transform 100ms;
  }
`;(0,l.memo)(function(e){let{children:t,expanded:r=!1,fontSize:o=1,href:n,icon:a,id:d,linkAs:s,muted:u,onClick:f,padding:p=2,selected:h=!1,space:b=2,text:m,weight:g,...v}=e,x=(0,l.useRef)(null),w=(0,l.useRef)(null),y=n9(),{path:$,registerItem:k,setExpanded:z,setFocusedElement:R}=y,j=(0,l.useId)(),E=d||j,S=(0,l.useMemo)(()=>$.concat([E||""]),[E,$]),C=S.join("/"),_=y.state[C],T=y.focusedElement===x.current,M=_?.expanded===void 0?r:_?.expanded||!1,F=y.focusedElement&&y.focusedElement===x.current?0:-1,O=(0,l.useMemo)(()=>({...y,level:y.level+1,path:S}),[S,y]),N=(0,l.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),z(C,!M),R(x.current))},[M,C,f,z,R]),A=(0,l.useCallback)(e=>{T&&"Enter"===e.key&&(w.current||x.current)?.click()},[T]);(0,l.useEffect)(()=>{if(x.current)return k(x.current,S.join("/"),M,h)},[M,S,k,h]);let L=(0,i.jsxs)(t5,{padding:p,children:[(0,i.jsxs)(tJ,{marginRight:b,style:{visibility:a||t?"visible":"hidden",pointerEvents:"none"},children:[a&&(0,i.jsx)(t1,{muted:u,size:o,weight:g,children:(0,i.jsx)(a,{})}),!a&&(0,i.jsx)(io,{muted:u,size:o,weight:g,children:(0,i.jsx)(c.tgp,{style:{transform:M?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t1,{muted:u,size:o,textOverflow:"ellipsis",weight:g,children:m})})]});return n?(0,i.jsxs)(it,{"data-selected":h?"":void 0,"data-tree-id":E,"data-tree-key":C,"data-ui":"TreeItem",...v,onClick:N,ref:x,role:"none",children:[(0,i.jsx)(ir,{$level:y.level,"aria-expanded":M,as:s,"data-ui":"TreeItem__box",href:n,ref:w,role:"treeitem",tabIndex:F,children:L}),(0,i.jsx)(n8.Provider,{value:O,children:t&&(0,i.jsx)(ie,{hidden:!M,children:t})})]}):(0,i.jsxs)(it,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":E,"data-tree-key":C,...v,"aria-expanded":M,onClick:N,onKeyDown:A,ref:x,role:"treeitem",tabIndex:F,children:[(0,i.jsx)(ir,{$level:y.level,as:"div","data-ui":"TreeItem__box",children:L}),(0,i.jsx)(n8.Provider,{value:O,children:t&&(0,i.jsx)(ie,{expanded:M,children:t})})]})}).displayName="Memo(TreeItem)"}}]);
//# sourceMappingURL=bda0be67-83e54366be7f4262.js.map