(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function cl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ll(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=He(s)?Wy(s):ll(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(He(t))return t;if(Ie(t))return t}}const zy=/;(?![^(]*\))/g,Ky=/:([^]+)/,Gy=/\/\*.*?\*\//gs;function Wy(t){const e={};return t.replace(Gy,"").split(zy).forEach(n=>{if(n){const s=n.split(Ky);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ul(t){let e="";if(He(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=ul(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yy=cl(Jy);function uf(t){return!!t||t===""}function Qy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=jo(t[s],e[s]);return n}function jo(t,e){if(t===e)return!0;let n=Ju(t),s=Ju(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Br(t),s=Br(e),n||s)return t===e;if(n=X(t),s=X(e),n||s)return n&&s?Qy(t,e):!1;if(n=Ie(t),s=Ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!jo(t[o],e[o]))return!1}}return String(t)===String(e)}function Xy(t,e){return t.findIndex(n=>jo(n,e))}const Ge=t=>He(t)?t:t==null?"":X(t)||Ie(t)&&(t.toString===ff||!oe(t.toString))?JSON.stringify(t,hf,2):String(t),hf=(t,e)=>e&&e.__v_isRef?hf(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:qo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!X(e)&&!pf(e)?String(e):e,Te={},Ns=[],Bt=()=>{},Zy=()=>!1,ev=/^on[^a-z]/,Ho=t=>ev.test(t),hl=t=>t.startsWith("onUpdate:"),at=Object.assign,dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tv=Object.prototype.hasOwnProperty,fe=(t,e)=>tv.call(t,e),X=Array.isArray,Rs=t=>ui(t)==="[object Map]",qo=t=>ui(t)==="[object Set]",Ju=t=>ui(t)==="[object Date]",oe=t=>typeof t=="function",He=t=>typeof t=="string",Br=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",df=t=>Ie(t)&&oe(t.then)&&oe(t.catch),ff=Object.prototype.toString,ui=t=>ff.call(t),nv=t=>ui(t).slice(8,-1),pf=t=>ui(t)==="[object Object]",fl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sv=/-(\w)/g,Xt=zo(t=>t.replace(sv,(e,n)=>n?n.toUpperCase():"")),rv=/\B([A-Z])/g,tr=zo(t=>t.replace(rv,"-$1").toLowerCase()),Ko=zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=zo(t=>t?`on${Ko(t)}`:""),jr=(t,e)=>!Object.is(t,e),Yi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yu;const iv=()=>Yu||(Yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class ov{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function av(t,e=xt){e&&e.active&&e.effects.push(t)}function cv(){return xt}const pl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mf=t=>(t.w&On)>0,gf=t=>(t.n&On)>0,lv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=On},uv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];mf(r)&&!gf(r)?r.delete(t):e[n++]=r,r.w&=~On,r.n&=~On}e.length=n}},fc=new WeakMap;let Tr=0,On=1;const pc=30;let Ft;const es=Symbol(""),mc=Symbol("");class ml{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,av(this,s)}run(){if(!this.active)return this.fn();let e=Ft,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,Cn=!0,On=1<<++Tr,Tr<=pc?lv(this):Qu(this),this.fn()}finally{Tr<=pc&&uv(this),On=1<<--Tr,Ft=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ft===this?this.deferStop=!0:this.active&&(Qu(this),this.onStop&&this.onStop(),this.active=!1)}}function Qu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const yf=[];function nr(){yf.push(Cn),Cn=!1}function sr(){const t=yf.pop();Cn=t===void 0?!0:t}function gt(t,e,n){if(Cn&&Ft){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=pl()),vf(r)}}function vf(t,e){let n=!1;Tr<=pc?gf(t)||(t.n|=On,n=!mf(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function cn(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?fl(n)&&a.push(o.get("length")):(a.push(o.get(es)),Rs(t)&&a.push(o.get(mc)));break;case"delete":X(t)||(a.push(o.get(es)),Rs(t)&&a.push(o.get(mc)));break;case"set":Rs(t)&&a.push(o.get(es));break}if(a.length===1)a[0]&&gc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gc(pl(c))}}function gc(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&Xu(s);for(const s of n)s.computed||Xu(s)}function Xu(t,e){(t!==Ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hv=cl("__proto__,__v_isRef,__isVue"),_f=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),dv=gl(),fv=gl(!1,!0),pv=gl(!0),Zu=mv();function mv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)gt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const s=pe(this)[e].apply(this,n);return sr(),s}}),t}function gv(t){const e=pe(this);return gt(e,"has",t),e.hasOwnProperty(t)}function gl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ov:Tf:e?If:Ef).get(s))return s;const o=X(s);if(!t){if(o&&fe(Zu,r))return Reflect.get(Zu,r,i);if(r==="hasOwnProperty")return gv}const a=Reflect.get(s,r,i);return(Br(r)?_f.has(r):hv(r))||(t||gt(s,"get",r),e)?a:rt(a)?o&&fl(r)?a:a.value:Ie(a)?t?Sf(a):rr(a):a}}const yv=wf(),vv=wf(!0);function wf(t=!1){return function(n,s,r,i){let o=n[s];if(Vs(o)&&rt(o)&&!rt(r))return!1;if(!t&&(!uo(r)&&!Vs(r)&&(o=pe(o),r=pe(r)),!X(n)&&rt(o)&&!rt(r)))return o.value=r,!0;const a=X(n)&&fl(s)?Number(s)<n.length:fe(n,s),c=Reflect.set(n,s,r,i);return n===pe(i)&&(a?jr(r,o)&&cn(n,"set",s,r):cn(n,"add",s,r)),c}}function _v(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0),s}function wv(t,e){const n=Reflect.has(t,e);return(!Br(e)||!_f.has(e))&&gt(t,"has",e),n}function bv(t){return gt(t,"iterate",X(t)?"length":es),Reflect.ownKeys(t)}const bf={get:dv,set:yv,deleteProperty:_v,has:wv,ownKeys:bv},Ev={get:pv,set(t,e){return!0},deleteProperty(t,e){return!0}},Iv=at({},bf,{get:fv,set:vv}),yl=t=>t,Go=t=>Reflect.getPrototypeOf(t);function Mi(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);n||(e!==i&&gt(r,"get",e),gt(r,"get",i));const{has:o}=Go(r),a=s?yl:n?wl:Hr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function xi(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return e||(t!==r&&gt(s,"has",t),gt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Li(t,e=!1){return t=t.__v_raw,!e&&gt(pe(t),"iterate",es),Reflect.get(t,"size",t)}function eh(t){t=pe(t);const e=pe(this);return Go(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function th(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=Go(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?jr(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function nh(t){const e=pe(this),{has:n,get:s}=Go(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cn(e,"delete",t,void 0),i}function sh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Ui(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),c=e?yl:t?wl:Hr;return!t&&gt(a,"iterate",es),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Fi(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=Rs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?yl:e?wl:Hr;return!e&&gt(i,"iterate",c?mc:es),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:this}}function Tv(){const t={get(i){return Mi(this,i)},get size(){return Li(this)},has:xi,add:eh,set:th,delete:nh,clear:sh,forEach:Ui(!1,!1)},e={get(i){return Mi(this,i,!1,!0)},get size(){return Li(this)},has:xi,add:eh,set:th,delete:nh,clear:sh,forEach:Ui(!1,!0)},n={get(i){return Mi(this,i,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Ui(!0,!1)},s={get(i){return Mi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fi(i,!1,!1),n[i]=Fi(i,!0,!1),e[i]=Fi(i,!1,!0),s[i]=Fi(i,!0,!0)}),[t,n,e,s]}const[Sv,Cv,Av,kv]=Tv();function vl(t,e){const n=e?t?kv:Av:t?Cv:Sv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(fe(n,r)&&r in s?n:s,r,i)}const Nv={get:vl(!1,!1)},Rv={get:vl(!1,!0)},Dv={get:vl(!0,!1)},Ef=new WeakMap,If=new WeakMap,Tf=new WeakMap,Ov=new WeakMap;function Pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mv(t){return t.__v_skip||!Object.isExtensible(t)?0:Pv(nv(t))}function rr(t){return Vs(t)?t:_l(t,!1,bf,Nv,Ef)}function xv(t){return _l(t,!1,Iv,Rv,If)}function Sf(t){return _l(t,!0,Ev,Dv,Tf)}function _l(t,e,n,s,r){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Mv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ds(t){return Vs(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function uo(t){return!!(t&&t.__v_isShallow)}function Cf(t){return Ds(t)||Vs(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Af(t){return co(t,"__v_skip",!0),t}const Hr=t=>Ie(t)?rr(t):t,wl=t=>Ie(t)?Sf(t):t;function kf(t){Cn&&Ft&&(t=pe(t),vf(t.dep||(t.dep=pl())))}function Nf(t,e){t=pe(t);const n=t.dep;n&&gc(n)}function rt(t){return!!(t&&t.__v_isRef===!0)}function yc(t){return Rf(t,!1)}function Lv(t){return Rf(t,!0)}function Rf(t,e){return rt(t)?t:new Uv(t,e)}class Uv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Hr(e)}get value(){return kf(this),this._value}set value(e){const n=this.__v_isShallow||uo(e)||Vs(e);e=n?e:pe(e),jr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hr(e),Nf(this))}}function Os(t){return rt(t)?t.value:t}const Fv={get:(t,e,n)=>Os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return rt(r)&&!rt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Df(t){return Ds(t)?t:new Proxy(t,Fv)}var Of;class $v{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Of]=!1,this._dirty=!0,this.effect=new ml(e,()=>{this._dirty||(this._dirty=!0,Nf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return kf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Of="__v_isReadonly";function Vv(t,e,n=!1){let s,r;const i=oe(t);return i?(s=t,r=Bt):(s=t.get,r=t.set),new $v(s,r,i||!r,n)}function An(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Wo(i,e,n)}return r}function Nt(t,e,n,s){if(oe(t)){const i=An(t,e,n,s);return i&&df(i)&&i.catch(o=>{Wo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Nt(t[i],e,n,s));return r}function Wo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){An(c,null,10,[t,o,a]);return}}Bv(t,n,r,s)}function Bv(t,e,n,s=!0){console.error(t)}let qr=!1,vc=!1;const nt=[];let Wt=0;const Ps=[];let tn=null,Kn=0;const Pf=Promise.resolve();let bl=null;function Mf(t){const e=bl||Pf;return t?e.then(this?t.bind(this):t):e}function jv(t){let e=Wt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;zr(nt[s])<t?e=s+1:n=s}return e}function El(t){(!nt.length||!nt.includes(t,qr&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?nt.push(t):nt.splice(jv(t.id),0,t),xf())}function xf(){!qr&&!vc&&(vc=!0,bl=Pf.then(Uf))}function Hv(t){const e=nt.indexOf(t);e>Wt&&nt.splice(e,1)}function qv(t){X(t)?Ps.push(...t):(!tn||!tn.includes(t,t.allowRecurse?Kn+1:Kn))&&Ps.push(t),xf()}function rh(t,e=qr?Wt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function Lf(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,s)=>zr(n)-zr(s)),Kn=0;Kn<tn.length;Kn++)tn[Kn]();tn=null,Kn=0}}const zr=t=>t.id==null?1/0:t.id,zv=(t,e)=>{const n=zr(t)-zr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Uf(t){vc=!1,qr=!0,nt.sort(zv);const e=Bt;try{for(Wt=0;Wt<nt.length;Wt++){const n=nt[Wt];n&&n.active!==!1&&An(n,null,14)}}finally{Wt=0,nt.length=0,Lf(),qr=!1,bl=null,(nt.length||Ps.length)&&Uf()}}function Kv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Te;d&&(r=n.map(m=>He(m)?m.trim():m)),h&&(r=n.map(lo))}let a,c=s[a=La(e)]||s[a=La(Xt(e))];!c&&i&&(c=s[a=La(tr(e))]),c&&Nt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(l,t,6,r)}}function Ff(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Ff(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):at(o,i),Ie(t)&&s.set(t,o),o)}function Jo(t,e){return!t||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,tr(e))||fe(t,e))}let Ye=null,Yo=null;function ho(t){const e=Ye;return Ye=t,Yo=t&&t.type.__scopeId||null,e}function ir(t){Yo=t}function or(){Yo=null}function bt(t,e=Ye,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ph(-1);const i=ho(e);let o;try{o=t(...r)}finally{ho(i),s._d&&ph(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ua(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:_,inheritAttrs:v}=t;let N,A;const U=ho(t);try{if(n.shapeFlag&4){const R=r||s;N=Gt(u.call(R,R,h,i,m,d,_)),A=c}else{const R=e;N=Gt(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),A=e.props?c:Gv(c)}}catch(R){Or.length=0,Wo(R,t,1),N=re(Rt)}let P=N;if(A&&v!==!1){const R=Object.keys(A),{shapeFlag:H}=P;R.length&&H&7&&(o&&R.some(hl)&&(A=Wv(A,o)),P=Pn(P,A))}return n.dirs&&(P=Pn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,ho(U),N}const Gv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ho(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const s in t)(!hl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ih(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Jo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,l):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Jo(n,i))return!0}return!1}function Yv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qv=t=>t.__isSuspense;function Xv(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):qv(t)}function Qi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function on(t,e,n=!1){const s=Pe||Ye;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(s.proxy):e}}const $i={};function Ms(t,e,n){return $f(t,e,n)}function $f(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Te){const a=cv()===(Pe==null?void 0:Pe.scope)?Pe:null;let c,l=!1,u=!1;if(rt(t)?(c=()=>t.value,l=uo(t)):Ds(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(P=>Ds(P)||uo(P)),c=()=>t.map(P=>{if(rt(P))return P.value;if(Ds(P))return Yn(P);if(oe(P))return An(P,a,2)})):oe(t)?e?c=()=>An(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Nt(t,a,3,[d])}:c=Bt,e&&s){const P=c;c=()=>Yn(P())}let h,d=P=>{h=A.onStop=()=>{An(P,a,4)}},m;if(Gr)if(d=Bt,e?n&&Nt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const P=G_();m=P.__watcherHandles||(P.__watcherHandles=[])}else return Bt;let _=u?new Array(t.length).fill($i):$i;const v=()=>{if(A.active)if(e){const P=A.run();(s||l||(u?P.some((R,H)=>jr(R,_[H])):jr(P,_)))&&(h&&h(),Nt(e,a,3,[P,_===$i?void 0:u&&_[0]===$i?[]:_,d]),_=P)}else A.run()};v.allowRecurse=!!e;let N;r==="sync"?N=v:r==="post"?N=()=>pt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),N=()=>El(v));const A=new ml(c,N);e?n?v():_=A.run():r==="post"?pt(A.run.bind(A),a&&a.suspense):A.run();const U=()=>{A.stop(),a&&a.scope&&dl(a.scope.effects,A)};return m&&m.push(U),U}function Zv(t,e,n){const s=this.proxy,r=He(t)?t.includes(".")?Vf(s,t):()=>s[t]:t.bind(s,s);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Pe;js(this);const a=$f(r,i.bind(s),n);return o?js(o):ts(),a}function Vf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Yn(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))Yn(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(qo(t)||Rs(t))t.forEach(n=>{Yn(n,e)});else if(pf(t))for(const n in t)Yn(t[n],e);return t}function e_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zf(()=>{t.isMounted=!0}),Kf(()=>{t.isUnmounting=!0}),t}const St=[Function,Array],t_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:St,onEnter:St,onAfterEnter:St,onEnterCancelled:St,onBeforeLeave:St,onLeave:St,onAfterLeave:St,onLeaveCancelled:St,onBeforeAppear:St,onAppear:St,onAfterAppear:St,onAppearCancelled:St},setup(t,{slots:e}){const n=$_(),s=e_();let r;return()=>{const i=e.default&&jf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Rt){o=v;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return Fa(o);const l=oh(o);if(!l)return Fa(o);const u=_c(l,a,s,n);wc(l,u);const h=n.subTree,d=h&&oh(h);let m=!1;const{getTransitionKey:_}=l.type;if(_){const v=_();r===void 0?r=v:v!==r&&(r=v,m=!0)}if(d&&d.type!==Rt&&(!Gn(l,d)||m)){const v=_c(d,a,s,n);if(wc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Fa(o);c==="in-out"&&l.type!==Rt&&(v.delayLeave=(N,A,U)=>{const P=Bf(s,d);P[String(d.key)]=d,N._leaveCb=()=>{A(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=U})}return o}}},n_=t_;function Bf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _c(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:v,onAppear:N,onAfterAppear:A,onAppearCancelled:U}=e,P=String(t.key),R=Bf(n,t),H=(L,ue)=>{L&&Nt(L,s,9,ue)},Y=(L,ue)=>{const se=ue[1];H(L,ue),X(L)?L.every(Ae=>Ae.length<=1)&&se():L.length<=1&&se()},J={mode:i,persisted:o,beforeEnter(L){let ue=a;if(!n.isMounted)if(r)ue=v||a;else return;L._leaveCb&&L._leaveCb(!0);const se=R[P];se&&Gn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),H(ue,[L])},enter(L){let ue=c,se=l,Ae=u;if(!n.isMounted)if(r)ue=N||c,se=A||l,Ae=U||u;else return;let ze=!1;const $e=L._enterCb=_t=>{ze||(ze=!0,_t?H(Ae,[L]):H(se,[L]),J.delayedLeave&&J.delayedLeave(),L._enterCb=void 0)};ue?Y(ue,[L,$e]):$e()},leave(L,ue){const se=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return ue();H(h,[L]);let Ae=!1;const ze=L._leaveCb=$e=>{Ae||(Ae=!0,ue(),$e?H(_,[L]):H(m,[L]),L._leaveCb=void 0,R[se]===t&&delete R[se])};R[se]=t,d?Y(d,[L,ze]):ze()},clone(L){return _c(L,e,n,s)}};return J}function Fa(t){if(Qo(t))return t=Pn(t),t.children=null,t}function oh(t){return Qo(t)?t.children?t.children[0]:void 0:t}function wc(t,e){t.shapeFlag&6&&t.component?wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ve?(o.patchFlag&128&&r++,s=s.concat(jf(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Pn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Hf(t){return oe(t)?{setup:t,name:t.name}:t}const Rr=t=>!!t.type.__asyncLoader,Qo=t=>t.type.__isKeepAlive;function s_(t,e){qf(t,"a",e)}function r_(t,e){qf(t,"da",e)}function qf(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Qo(r.parent.vnode)&&i_(s,e,n,r),r=r.parent}}function i_(t,e,n,s){const r=Xo(e,t,s,!0);Gf(()=>{dl(s[e],r)},n)}function Xo(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),js(n);const a=Nt(e,n,t,o);return ts(),sr(),a});return s?r.unshift(i):r.push(i),i}}const mn=t=>(e,n=Pe)=>(!Gr||t==="sp")&&Xo(t,(...s)=>e(...s),n),o_=mn("bm"),zf=mn("m"),a_=mn("bu"),c_=mn("u"),Kf=mn("bum"),Gf=mn("um"),l_=mn("sp"),u_=mn("rtg"),h_=mn("rtc");function d_(t,e=Pe){Xo("ec",t,e)}function Ct(t,e){const n=Ye;if(n===null)return t;const s=na(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function jn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(nr(),Nt(c,n,8,[t.el,a,t,e]),sr())}}const Wf="components";function us(t,e){return p_(Wf,t,!0,e)||t}const f_=Symbol();function p_(t,e,n=!0,s=!1){const r=Ye||Pe;if(r){const i=r.type;if(t===Wf){const a=q_(i,!1);if(a&&(a===e||a===Xt(e)||a===Ko(Xt(e))))return i}const o=ah(r[t]||i[t],e)||ah(r.appContext[t],e);return!o&&s?i:o}}function ah(t,e){return t&&(t[e]||t[Xt(e)]||t[Ko(Xt(e))])}function Bs(t,e,n,s){let r;const i=n&&n[s];if(X(t)||He(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function br(t,e,n={},s,r){if(Ye.isCE||Ye.parent&&Rr(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),re("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),W();const o=i&&Jf(i(n)),a=Sl(ve,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Jf(t){return t.some(e=>po(e)?!(e.type===Rt||e.type===ve&&!Jf(e.children)):!0)?t:null}const bc=t=>t?op(t)?na(t)||t.proxy:bc(t.parent):null,Dr=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$emit:t=>t.emit,$options:t=>Il(t),$forceUpdate:t=>t.f||(t.f=()=>El(t.update)),$nextTick:t=>t.n||(t.n=Mf.bind(t.proxy)),$watch:t=>Zv.bind(t)}),$a=(t,e)=>t!==Te&&!t.__isScriptSetup&&fe(t,e),m_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($a(s,e))return o[e]=1,s[e];if(r!==Te&&fe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==Te&&fe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=Dr[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $a(r,e)?(r[e]=n,!0):s!==Te&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&fe(t,o)||$a(e,o)||(a=i[0])&&fe(a,o)||fe(s,o)||fe(Dr,o)||fe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ec=!0;function g_(t){const e=Il(t),n=t.proxy,s=t.ctx;Ec=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:_,activated:v,deactivated:N,beforeDestroy:A,beforeUnmount:U,destroyed:P,unmounted:R,render:H,renderTracked:Y,renderTriggered:J,errorCaptured:L,serverPrefetch:ue,expose:se,inheritAttrs:Ae,components:ze,directives:$e,filters:_t}=e;if(l&&y_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const _e=o[be];oe(_e)&&(s[be]=_e.bind(n))}if(r){const be=r.call(n,n);Ie(be)&&(t.data=rr(be))}if(Ec=!0,i)for(const be in i){const _e=i[be],Ot=oe(_e)?_e.bind(n,n):oe(_e.get)?_e.get.bind(n,n):Bt,Bn=!oe(_e)&&oe(_e.set)?_e.set.bind(n):Bt,Pt=At({get:Ot,set:Bn});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ft=>Pt.value=ft})}if(a)for(const be in a)Yf(a[be],s,n,be);if(c){const be=oe(c)?c.call(n):c;Reflect.ownKeys(be).forEach(_e=>{Qi(_e,be[_e])})}u&&ch(u,t,"c");function Me(be,_e){X(_e)?_e.forEach(Ot=>be(Ot.bind(n))):_e&&be(_e.bind(n))}if(Me(o_,h),Me(zf,d),Me(a_,m),Me(c_,_),Me(s_,v),Me(r_,N),Me(d_,L),Me(h_,Y),Me(u_,J),Me(Kf,U),Me(Gf,R),Me(l_,ue),X(se))if(se.length){const be=t.exposed||(t.exposed={});se.forEach(_e=>{Object.defineProperty(be,_e,{get:()=>n[_e],set:Ot=>n[_e]=Ot})})}else t.exposed||(t.exposed={});H&&t.render===Bt&&(t.render=H),Ae!=null&&(t.inheritAttrs=Ae),ze&&(t.components=ze),$e&&(t.directives=$e)}function y_(t,e,n=Bt,s=!1){X(t)&&(t=Ic(t));for(const r in t){const i=t[r];let o;Ie(i)?"default"in i?o=on(i.from||r,i.default,!0):o=on(i.from||r):o=on(i),rt(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ch(t,e,n){Nt(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yf(t,e,n,s){const r=s.includes(".")?Vf(n,s):()=>n[s];if(He(t)){const i=e[t];oe(i)&&Ms(r,i)}else if(oe(t))Ms(r,t.bind(n));else if(Ie(t))if(X(t))t.forEach(i=>Yf(i,e,n,s));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Ms(r,i,t)}}function Il(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>fo(c,l,o,!0)),fo(c,e,o)),Ie(e)&&i.set(e,c),c}function fo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&fo(t,i,n,!0),r&&r.forEach(o=>fo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=v_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const v_={data:lh,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:qn,directives:qn,watch:w_,provide:lh,inject:__};function lh(t,e){return e?t?function(){return at(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function __(t,e){return qn(Ic(t),Ic(e))}function Ic(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?at(at(Object.create(null),t),e):e}function w_(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=ut(t[s],e[s]);return n}function b_(t,e,n,s=!1){const r={},i={};co(i,ea,1),t.propsDefaults=Object.create(null),Qf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:xv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function E_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Jo(t.emitsOptions,d))continue;const m=e[d];if(c)if(fe(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const _=Xt(d);r[_]=Tc(c,a,_,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Qf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=tr(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Tc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs")}function Qf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ji(c))continue;const l=e[c];let u;r&&fe(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Jo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=pe(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Tc(r,c,h,l[h],t,!fe(l,h))}}return o}function Tc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(js(r),s=l[n]=c.call(null,e),ts())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tr(n))&&(s=!0))}return s}function Xf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[d,m]=Xf(h,e,!0);at(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&s.set(t,Ns),Ns;if(X(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);uh(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=Xt(u);if(uh(h)){const d=i[u],m=o[h]=X(d)||oe(d)?{type:d}:Object.assign({},d);if(m){const _=fh(Boolean,m.type),v=fh(String,m.type);m[0]=_>-1,m[1]=v<0||_<v,(_>-1||fe(m,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&s.set(t,l),l}function uh(t){return t[0]!=="$"}function hh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dh(t,e){return hh(t)===hh(e)}function fh(t,e){return X(e)?e.findIndex(n=>dh(n,t)):oe(e)&&dh(e,t)?0:-1}const Zf=t=>t[0]==="_"||t==="$stable",Tl=t=>X(t)?t.map(Gt):[Gt(t)],I_=(t,e,n)=>{if(e._n)return e;const s=bt((...r)=>Tl(e(...r)),n);return s._c=!1,s},ep=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Zf(r))continue;const i=t[r];if(oe(i))e[r]=I_(r,i,s);else if(i!=null){const o=Tl(i);e[r]=()=>o}}},tp=(t,e)=>{const n=Tl(e);t.slots.default=()=>n},T_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),co(e,"_",n)):ep(e,t.slots={})}else t.slots={},e&&tp(t,e);co(t.slots,ea,1)},S_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(at(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ep(e,r)),o=e}else e&&(tp(t,e),o={default:1});if(i)for(const a in r)!Zf(a)&&!(a in o)&&delete r[a]};function np(){return{app:null,config:{isNativeTag:Zy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C_=0;function A_(t,e){return function(s,r=null){oe(s)||(s=Object.assign({},s)),r!=null&&!Ie(r)&&(r=null);const i=np(),o=new Set;let a=!1;const c=i.app={_uid:C_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:W_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=re(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,na(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Sc(t,e,n,s,r=!1){if(X(t)){t.forEach((d,m)=>Sc(d,e&&(X(e)?e[m]:e),n,s,r));return}if(Rr(s)&&!r)return;const i=s.shapeFlag&4?na(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):rt(l)&&(l.value=null)),oe(c))An(c,a,12,[o,u]);else{const d=He(c),m=rt(c);if(d||m){const _=()=>{if(t.f){const v=d?fe(h,c)?h[c]:u[c]:c.value;r?X(v)&&dl(v,i):X(v)?v.includes(i)||v.push(i):d?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,fe(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,pt(_,n)):_()}}}const pt=Xv;function k_(t){return N_(t)}function N_(t,e){const n=iv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Bt,insertStaticContent:_}=t,v=(f,p,y,w=null,I=null,k=null,M=!1,C=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gn(f,p)&&(w=O(f),ft(f,I,k,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:T,ref:K,shapeFlag:V}=p;switch(T){case Zo:N(f,p,y,w);break;case Rt:A(f,p,y,w);break;case Xi:f==null&&U(p,y,w,M);break;case ve:ze(f,p,y,w,I,k,M,C,D);break;default:V&1?H(f,p,y,w,I,k,M,C,D):V&6?$e(f,p,y,w,I,k,M,C,D):(V&64||V&128)&&T.process(f,p,y,w,I,k,M,C,D,de)}K!=null&&I&&Sc(K,f&&f.ref,k,p||f,!p)},N=(f,p,y,w)=>{if(f==null)s(p.el=a(p.children),y,w);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},A=(f,p,y,w)=>{f==null?s(p.el=c(p.children||""),y,w):p.el=f.el},U=(f,p,y,w)=>{[f.el,f.anchor]=_(f.children,p,y,w,f.el,f.anchor)},P=({el:f,anchor:p},y,w)=>{let I;for(;f&&f!==p;)I=d(f),s(f,y,w),f=I;s(p,y,w)},R=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},H=(f,p,y,w,I,k,M,C,D)=>{M=M||p.type==="svg",f==null?Y(p,y,w,I,k,M,C,D):ue(f,p,I,k,M,C,D)},Y=(f,p,y,w,I,k,M,C)=>{let D,T;const{type:K,props:V,shapeFlag:G,transition:te,dirs:ce}=f;if(D=f.el=o(f.type,k,V&&V.is,V),G&8?u(D,f.children):G&16&&L(f.children,D,null,w,I,k&&K!=="foreignObject",M,C),ce&&jn(f,null,w,"created"),J(D,f,f.scopeId,M,w),V){for(const we in V)we!=="value"&&!Ji(we)&&i(D,we,null,V[we],k,f.children,w,I,x);"value"in V&&i(D,"value",null,V.value),(T=V.onVnodeBeforeMount)&&Kt(T,w,f)}ce&&jn(f,null,w,"beforeMount");const Ee=(!I||I&&!I.pendingBranch)&&te&&!te.persisted;Ee&&te.beforeEnter(D),s(D,p,y),((T=V&&V.onVnodeMounted)||Ee||ce)&&pt(()=>{T&&Kt(T,w,f),Ee&&te.enter(D),ce&&jn(f,null,w,"mounted")},I)},J=(f,p,y,w,I)=>{if(y&&m(f,y),w)for(let k=0;k<w.length;k++)m(f,w[k]);if(I){let k=I.subTree;if(p===k){const M=I.vnode;J(f,M,M.scopeId,M.slotScopeIds,I.parent)}}},L=(f,p,y,w,I,k,M,C,D=0)=>{for(let T=D;T<f.length;T++){const K=f[T]=C?wn(f[T]):Gt(f[T]);v(null,K,p,y,w,I,k,M,C)}},ue=(f,p,y,w,I,k,M)=>{const C=p.el=f.el;let{patchFlag:D,dynamicChildren:T,dirs:K}=p;D|=f.patchFlag&16;const V=f.props||Te,G=p.props||Te;let te;y&&Hn(y,!1),(te=G.onVnodeBeforeUpdate)&&Kt(te,y,p,f),K&&jn(p,f,y,"beforeUpdate"),y&&Hn(y,!0);const ce=I&&p.type!=="foreignObject";if(T?se(f.dynamicChildren,T,C,y,w,ce,k):M||_e(f,p,C,null,y,w,ce,k,!1),D>0){if(D&16)Ae(C,p,V,G,y,w,I);else if(D&2&&V.class!==G.class&&i(C,"class",null,G.class,I),D&4&&i(C,"style",V.style,G.style,I),D&8){const Ee=p.dynamicProps;for(let we=0;we<Ee.length;we++){const xe=Ee[we],Mt=V[xe],ws=G[xe];(ws!==Mt||xe==="value")&&i(C,xe,Mt,ws,I,f.children,y,w,x)}}D&1&&f.children!==p.children&&u(C,p.children)}else!M&&T==null&&Ae(C,p,V,G,y,w,I);((te=G.onVnodeUpdated)||K)&&pt(()=>{te&&Kt(te,y,p,f),K&&jn(p,f,y,"updated")},w)},se=(f,p,y,w,I,k,M)=>{for(let C=0;C<p.length;C++){const D=f[C],T=p[C],K=D.el&&(D.type===ve||!Gn(D,T)||D.shapeFlag&70)?h(D.el):y;v(D,T,K,null,w,I,k,M,!0)}},Ae=(f,p,y,w,I,k,M)=>{if(y!==w){if(y!==Te)for(const C in y)!Ji(C)&&!(C in w)&&i(f,C,y[C],null,M,p.children,I,k,x);for(const C in w){if(Ji(C))continue;const D=w[C],T=y[C];D!==T&&C!=="value"&&i(f,C,T,D,M,p.children,I,k,x)}"value"in w&&i(f,"value",y.value,w.value)}},ze=(f,p,y,w,I,k,M,C,D)=>{const T=p.el=f?f.el:a(""),K=p.anchor=f?f.anchor:a("");let{patchFlag:V,dynamicChildren:G,slotScopeIds:te}=p;te&&(C=C?C.concat(te):te),f==null?(s(T,y,w),s(K,y,w),L(p.children,y,K,I,k,M,C,D)):V>0&&V&64&&G&&f.dynamicChildren?(se(f.dynamicChildren,G,y,I,k,M,C),(p.key!=null||I&&p===I.subTree)&&sp(f,p,!0)):_e(f,p,y,K,I,k,M,C,D)},$e=(f,p,y,w,I,k,M,C,D)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?I.ctx.activate(p,y,w,M,D):_t(p,y,w,I,k,M,D):_r(f,p,D)},_t=(f,p,y,w,I,k,M)=>{const C=f.component=F_(f,w,I);if(Qo(f)&&(C.ctx.renderer=de),V_(C),C.asyncDep){if(I&&I.registerDep(C,Me),!f.el){const D=C.subTree=re(Rt);A(null,D,p,y)}return}Me(C,f,p,y,I,k,M)},_r=(f,p,y)=>{const w=p.component=f.component;if(Jv(f,p,y))if(w.asyncDep&&!w.asyncResolved){be(w,p,y);return}else w.next=p,Hv(w.update),w.update();else p.el=f.el,w.vnode=p},Me=(f,p,y,w,I,k,M)=>{const C=()=>{if(f.isMounted){let{next:K,bu:V,u:G,parent:te,vnode:ce}=f,Ee=K,we;Hn(f,!1),K?(K.el=ce.el,be(f,K,M)):K=ce,V&&Yi(V),(we=K.props&&K.props.onVnodeBeforeUpdate)&&Kt(we,te,K,ce),Hn(f,!0);const xe=Ua(f),Mt=f.subTree;f.subTree=xe,v(Mt,xe,h(Mt.el),O(Mt),f,I,k),K.el=xe.el,Ee===null&&Yv(f,xe.el),G&&pt(G,I),(we=K.props&&K.props.onVnodeUpdated)&&pt(()=>Kt(we,te,K,ce),I)}else{let K;const{el:V,props:G}=p,{bm:te,m:ce,parent:Ee}=f,we=Rr(p);if(Hn(f,!1),te&&Yi(te),!we&&(K=G&&G.onVnodeBeforeMount)&&Kt(K,Ee,p),Hn(f,!0),V&&ae){const xe=()=>{f.subTree=Ua(f),ae(V,f.subTree,f,I,null)};we?p.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=Ua(f);v(null,xe,y,w,f,I,k),p.el=xe.el}if(ce&&pt(ce,I),!we&&(K=G&&G.onVnodeMounted)){const xe=p;pt(()=>Kt(K,Ee,xe),I)}(p.shapeFlag&256||Ee&&Rr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&pt(f.a,I),f.isMounted=!0,p=y=w=null}},D=f.effect=new ml(C,()=>El(T),f.scope),T=f.update=()=>D.run();T.id=f.uid,Hn(f,!0),T()},be=(f,p,y)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,E_(f,p.props,w,y),S_(f,p.children,y),nr(),rh(),sr()},_e=(f,p,y,w,I,k,M,C,D=!1)=>{const T=f&&f.children,K=f?f.shapeFlag:0,V=p.children,{patchFlag:G,shapeFlag:te}=p;if(G>0){if(G&128){Bn(T,V,y,w,I,k,M,C,D);return}else if(G&256){Ot(T,V,y,w,I,k,M,C,D);return}}te&8?(K&16&&x(T,I,k),V!==T&&u(y,V)):K&16?te&16?Bn(T,V,y,w,I,k,M,C,D):x(T,I,k,!0):(K&8&&u(y,""),te&16&&L(V,y,w,I,k,M,C,D))},Ot=(f,p,y,w,I,k,M,C,D)=>{f=f||Ns,p=p||Ns;const T=f.length,K=p.length,V=Math.min(T,K);let G;for(G=0;G<V;G++){const te=p[G]=D?wn(p[G]):Gt(p[G]);v(f[G],te,y,null,I,k,M,C,D)}T>K?x(f,I,k,!0,!1,V):L(p,y,w,I,k,M,C,D,V)},Bn=(f,p,y,w,I,k,M,C,D)=>{let T=0;const K=p.length;let V=f.length-1,G=K-1;for(;T<=V&&T<=G;){const te=f[T],ce=p[T]=D?wn(p[T]):Gt(p[T]);if(Gn(te,ce))v(te,ce,y,null,I,k,M,C,D);else break;T++}for(;T<=V&&T<=G;){const te=f[V],ce=p[G]=D?wn(p[G]):Gt(p[G]);if(Gn(te,ce))v(te,ce,y,null,I,k,M,C,D);else break;V--,G--}if(T>V){if(T<=G){const te=G+1,ce=te<K?p[te].el:w;for(;T<=G;)v(null,p[T]=D?wn(p[T]):Gt(p[T]),y,ce,I,k,M,C,D),T++}}else if(T>G)for(;T<=V;)ft(f[T],I,k,!0),T++;else{const te=T,ce=T,Ee=new Map;for(T=ce;T<=G;T++){const wt=p[T]=D?wn(p[T]):Gt(p[T]);wt.key!=null&&Ee.set(wt.key,T)}let we,xe=0;const Mt=G-ce+1;let ws=!1,Ku=0;const wr=new Array(Mt);for(T=0;T<Mt;T++)wr[T]=0;for(T=te;T<=V;T++){const wt=f[T];if(xe>=Mt){ft(wt,I,k,!0);continue}let zt;if(wt.key!=null)zt=Ee.get(wt.key);else for(we=ce;we<=G;we++)if(wr[we-ce]===0&&Gn(wt,p[we])){zt=we;break}zt===void 0?ft(wt,I,k,!0):(wr[zt-ce]=T+1,zt>=Ku?Ku=zt:ws=!0,v(wt,p[zt],y,null,I,k,M,C,D),xe++)}const Gu=ws?R_(wr):Ns;for(we=Gu.length-1,T=Mt-1;T>=0;T--){const wt=ce+T,zt=p[wt],Wu=wt+1<K?p[wt+1].el:w;wr[T]===0?v(null,zt,y,Wu,I,k,M,C,D):ws&&(we<0||T!==Gu[we]?Pt(zt,y,Wu,2):we--)}}},Pt=(f,p,y,w,I=null)=>{const{el:k,type:M,transition:C,children:D,shapeFlag:T}=f;if(T&6){Pt(f.component.subTree,p,y,w);return}if(T&128){f.suspense.move(p,y,w);return}if(T&64){M.move(f,p,y,de);return}if(M===ve){s(k,p,y);for(let V=0;V<D.length;V++)Pt(D[V],p,y,w);s(f.anchor,p,y);return}if(M===Xi){P(f,p,y);return}if(w!==2&&T&1&&C)if(w===0)C.beforeEnter(k),s(k,p,y),pt(()=>C.enter(k),I);else{const{leave:V,delayLeave:G,afterLeave:te}=C,ce=()=>s(k,p,y),Ee=()=>{V(k,()=>{ce(),te&&te()})};G?G(k,ce,Ee):Ee()}else s(k,p,y)},ft=(f,p,y,w=!1,I=!1)=>{const{type:k,props:M,ref:C,children:D,dynamicChildren:T,shapeFlag:K,patchFlag:V,dirs:G}=f;if(C!=null&&Sc(C,null,y,f,!0),K&256){p.ctx.deactivate(f);return}const te=K&1&&G,ce=!Rr(f);let Ee;if(ce&&(Ee=M&&M.onVnodeBeforeUnmount)&&Kt(Ee,p,f),K&6)E(f.component,y,w);else{if(K&128){f.suspense.unmount(y,w);return}te&&jn(f,null,p,"beforeUnmount"),K&64?f.type.remove(f,p,y,I,de,w):T&&(k!==ve||V>0&&V&64)?x(T,p,y,!1,!0):(k===ve&&V&384||!I&&K&16)&&x(D,p,y),w&&_s(f)}(ce&&(Ee=M&&M.onVnodeUnmounted)||te)&&pt(()=>{Ee&&Kt(Ee,p,f),te&&jn(f,null,p,"unmounted")},y)},_s=f=>{const{type:p,el:y,anchor:w,transition:I}=f;if(p===ve){Pi(y,w);return}if(p===Xi){R(f);return}const k=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:C}=I,D=()=>M(y,k);C?C(f.el,k,D):D()}else k()},Pi=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:w,scope:I,update:k,subTree:M,um:C}=f;w&&Yi(w),I.stop(),k&&(k.active=!1,ft(M,f,p,y)),C&&pt(C,p),pt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,y,w=!1,I=!1,k=0)=>{for(let M=k;M<f.length;M++)ft(f[M],p,y,w,I)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),q=(f,p,y)=>{f==null?p._vnode&&ft(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,y),rh(),Lf(),p._vnode=f},de={p:v,um:ft,m:Pt,r:_s,mt:_t,mc:L,pc:_e,pbc:se,n:O,o:t};let Ne,ae;return e&&([Ne,ae]=e(de)),{render:q,hydrate:Ne,createApp:A_(q,Ne)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sp(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),n||sp(o,a)),a.type===Zo&&(a.el=o.el)}}function R_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const D_=t=>t.__isTeleport,ve=Symbol(void 0),Zo=Symbol(void 0),Rt=Symbol(void 0),Xi=Symbol(void 0),Or=[];let $t=null;function W(t=!1){Or.push($t=t?null:[])}function O_(){Or.pop(),$t=Or[Or.length-1]||null}let Kr=1;function ph(t){Kr+=t}function rp(t){return t.dynamicChildren=Kr>0?$t||Ns:null,O_(),Kr>0&&$t&&$t.push(t),t}function Q(t,e,n,s,r,i){return rp(g(t,e,n,s,r,i,!0))}function Sl(t,e,n,s,r){return rp(re(t,e,n,s,r,!0))}function po(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const ea="__vInternal",ip=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||rt(t)||oe(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function g(t,e=null,n=null,s=0,r=null,i=t===ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ip(e),ref:e&&Zi(e),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Cl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Kr>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const re=P_;function P_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===f_)&&(t=Rt),po(t)){const a=Pn(t,e,!0);return n&&Cl(a,n),Kr>0&&!i&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(z_(t)&&(t=t.__vccOpts),e){e=M_(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=ul(a)),Ie(c)&&(Cf(c)&&!X(c)&&(c=at({},c)),e.style=ll(c))}const o=He(t)?1:Qv(t)?128:D_(t)?64:Ie(t)?4:oe(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function M_(t){return t?Cf(t)||ea in t?at({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?x_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ip(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Zi(e)):[r,Zi(e)]:Zi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Re(t=" ",e=0){return re(Zo,null,t,e)}function ta(t,e){const n=re(Xi,null,t);return n.staticCount=e,n}function Oe(t="",e=!1){return e?(W(),Sl(Rt,null,t)):re(Rt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?re(Rt):X(t)?re(ve,null,t.slice()):typeof t=="object"?wn(t):re(Zo,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Cl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ea in e)?e._ctx=Ye:r===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function x_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ul([e.class,s.class]));else if(r==="style")e.style=ll([e.style,s.style]);else if(Ho(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Kt(t,e,n,s=null){Nt(t,e,7,[n,s])}const L_=np();let U_=0;function F_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||L_,i={uid:U_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ov(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(s,r),emitsOptions:Ff(s,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kv.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const $_=()=>Pe||Ye,js=t=>{Pe=t,t.scope.on()},ts=()=>{Pe&&Pe.scope.off(),Pe=null};function op(t){return t.vnode.shapeFlag&4}let Gr=!1;function V_(t,e=!1){Gr=e;const{props:n,children:s}=t.vnode,r=op(t);b_(t,n,r,e),T_(t,s);const i=r?B_(t,e):void 0;return Gr=!1,i}function B_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Af(new Proxy(t.ctx,m_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?H_(t):null;js(t),nr();const i=An(s,t,0,[t.props,r]);if(sr(),ts(),df(i)){if(i.then(ts,ts),e)return i.then(o=>{mh(t,o,e)}).catch(o=>{Wo(o,t,0)});t.asyncDep=i}else mh(t,i,e)}else ap(t,e)}function mh(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Df(e)),ap(t,n)}let gh;function ap(t,e,n){const s=t.type;if(!t.render){if(!e&&gh&&!s.render){const r=s.template||Il(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=at(at({isCustomElement:i,delimiters:a},o),c);s.render=gh(r,l)}}t.render=s.render||Bt}js(t),nr(),g_(t),sr(),ts()}function j_(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function H_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=j_(t))},slots:t.slots,emit:t.emit,expose:e}}function na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Df(Af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dr)return Dr[n](t)},has(e,n){return n in e||n in Dr}}))}function q_(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function z_(t){return oe(t)&&"__vccOpts"in t}const At=(t,e)=>Vv(t,e,Gr);function cp(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!X(e)?po(e)?re(t,null,[e]):re(t,e):re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&po(n)&&(n=[n]),re(t,e,n))}const K_=Symbol(""),G_=()=>on(K_),W_="3.2.47",J_="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,yh=Wn&&Wn.createElement("template"),Y_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wn.createElementNS(J_,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{yh.innerHTML=s?`<svg>${t}</svg>`:t;const a=yh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Q_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function X_(t,e,n){const s=t.style,r=He(n);if(n&&!r){if(e&&!He(e))for(const i in e)n[i]==null&&Cc(s,i,"");for(const i in n)Cc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const vh=/\s*!important$/;function Cc(t,e,n){if(X(n))n.forEach(s=>Cc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Z_(t,e);vh.test(n)?t.setProperty(tr(s),n.replace(vh,""),"important"):t[s]=n}}const _h=["Webkit","Moz","ms"],Va={};function Z_(t,e){const n=Va[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return Va[e]=s;s=Ko(s);for(let r=0;r<_h.length;r++){const i=_h[r]+s;if(i in t)return Va[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function ew(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n);else{const i=Yy(e);n==null||i&&!uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=uf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Jn(t,e,n,s){t.addEventListener(e,n,s)}function nw(t,e,n,s){t.removeEventListener(e,n,s)}function sw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=rw(e);if(s){const l=i[e]=aw(s,r);Jn(t,a,l,c)}else o&&(nw(t,a,o,c),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function rw(t){let e;if(bh.test(t)){e={};let s;for(;s=t.match(bh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let Ba=0;const iw=Promise.resolve(),ow=()=>Ba||(iw.then(()=>Ba=0),Ba=Date.now());function aw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(cw(s,n.value),e,5,[s])};return n.value=t,n.attached=ow(),n}function cw(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Eh=/^on[a-z]/,lw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Q_(t,s,r):e==="style"?X_(t,n,s):Ho(e)?hl(e)||sw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uw(t,e,s,r))?tw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ew(t,e,s,r))};function uw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&He(n)?!1:e in t}const hw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};n_.props;const mo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Yi(e,n):e};function dw(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=mo(r);const i=s||r.props&&r.props.type==="number";Jn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=lo(a)),t._assign(a)}),n&&Jn(t,"change",()=>{t.value=t.value.trim()}),e||(Jn(t,"compositionstart",dw),Jn(t,"compositionend",Ih),Jn(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=mo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&lo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},fw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=qo(e);Jn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?lo(go(o)):go(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=mo(s)},mounted(t,{value:e}){Th(t,e)},beforeUpdate(t,e,n){t._assign=mo(n)},updated(t,{value:e}){Th(t,e)}};function Th(t,e){const n=t.multiple;if(!(n&&!X(e)&&!qo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=go(i);if(n)X(e)?i.selected=Xy(e,o)>-1:i.selected=e.has(o);else if(jo(go(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function go(t){return"_value"in t?t._value:t.value}const pw=at({patchProp:lw},Y_);let Sh;function mw(){return Sh||(Sh=k_(pw))}const gw=(...t)=>{const e=mw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=yw(s);if(!r)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function yw(t){return He(t)?document.querySelector(t):t}function vw(){return lp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function lp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _w=typeof Proxy=="function",ww="devtools-plugin:setup",bw="plugin:settings:set";let bs,Ac;function Ew(){var t;return bs!==void 0||(typeof window<"u"&&window.performance?(bs=!0,Ac=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(bs=!0,Ac=global.perf_hooks.performance):bs=!1),bs}function Iw(){return Ew()?Ac.now():Date.now()}class Tw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return Iw()}},n&&n.on(bw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Sw(t,e){const n=t,s=lp(),r=vw(),i=_w&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(ww,t,e);else{const o=i?new Tw(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof window<"u";function Cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function ja(t,e){const n={};for(const s in e){const r=e[s];n[s]=jt(r)?r.map(t):t(r)}return n}const Pr=()=>{},jt=Array.isArray,Aw=/\/$/,kw=t=>t.replace(Aw,"");function Ha(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ow(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Nw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ch(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Dw(t[n],e[n]))return!1;return!0}function Dw(t,e){return jt(t)?Ah(t,e):jt(e)?Ah(e,t):t===e}function Ah(t,e){return jt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ow(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mr||(Mr={}));function Pw(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kw(t)}const Mw=/^[^#]+#/;function xw(t,e){return t.replace(Mw,"#")+e}function Lw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const sa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Lw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kh(t,e){return(history.state?history.state.position-e:-1)+t}const kc=new Map;function Fw(t,e){kc.set(t,e)}function $w(t){const e=kc.get(t);return kc.delete(t),e}let Vw=()=>location.protocol+"//"+location.host;function hp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ch(c,"")}return Ch(n,t)+s+r}function Bw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const m=hp(t,location),_=n.value,v=e.value;let N=0;if(d){if(n.value=m,e.value=d,o&&o===_){o=null;return}N=v?d.position-v.position:0}else s(m);r.forEach(A=>{A(n.value,_,{delta:N,type:Wr.pop,direction:N?N>0?Mr.forward:Mr.back:Mr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const m=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:sa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Nh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?sa():null}}function jw(t){const{history:e,location:n}=window,s={value:hp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Vw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=ye({},e.state,Nh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:sa()});i(u.current,u,!0);const h=ye({},Nh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Hw(t){t=Pw(t);const e=jw(t),n=Bw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:xw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function qw(t){return typeof t=="string"||t&&typeof t=="object"}function dp(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fp=Symbol("");var Rh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rh||(Rh={}));function qs(t,e){return ye(new Error,{type:t,[fp]:!0},e)}function en(t,e){return t instanceof Error&&fp in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",zw={sensitive:!1,strict:!1,start:!0,end:!0},Kw=/[.+*?^${}()[\]/\\]/g;function Gw(t,e){const n=ye({},zw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Kw,"\\$&"),m+=40;else if(d.type===1){const{value:_,repeatable:v,optional:N,regexp:A}=d;i.push({name:_,repeatable:v,optional:N});const U=A||Dh;if(U!==Dh){m+=10;try{new RegExp(`(${U})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${U}): `+R.message)}}let P=v?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=N&&l.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),r+=P,m+=20,N&&(m+=-8),v&&(m+=-20),U===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",_=i[d-1];h[_.name]=m&&_.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:v,optional:N}=m,A=_ in l?l[_]:"";if(jt(A)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const U=jt(A)?A.join("/"):A;if(!U)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Ww(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Oh(s))return 1;if(Oh(r))return-1}return r.length-s.length}function Oh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yw={type:0,value:""},Qw=/[a-zA-Z0-9_]/;function Xw(t){if(!t)return[[]];if(t==="/")return[[Yw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Qw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Zw(t,e,n){const s=Gw(Xw(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function e0(t,e){const n=[],s=new Map;e=xh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const m=!d,_=t0(u);_.aliasOf=d&&d.record;const v=xh(e,u),N=[_];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of P)N.push(ye({},_,{components:d?d.record.components:_.components,path:R,aliasOf:d?d.record:_}))}let A,U;for(const P of N){const{path:R}=P;if(h&&R[0]!=="/"){const H=h.record.path,Y=H[H.length-1]==="/"?"":"/";P.path=h.record.path+(R&&Y+R)}if(A=Zw(P,h,v),d?d.alias.push(A):(U=U||A,U!==A&&U.alias.push(A),m&&u.name&&!Mh(A)&&o(u.name)),_.children){const H=_.children;for(let Y=0;Y<H.length;Y++)i(H[Y],A,d&&d.children[Y])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return U?()=>{o(U)}:Pr}function o(u){if(dp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Jw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Mh(u)&&s.set(u.record.name,u)}function l(u,h){let d,m={},_,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw qs(1,{location:u});v=d.record.name,m=ye(Ph(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Ph(u.params,d.keys.map(U=>U.name))),_=d.stringify(m)}else if("path"in u)_=u.path,d=n.find(U=>U.re.test(_)),d&&(m=d.parse(_),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw qs(1,{location:u,currentLocation:h});v=d.record.name,m=ye({},h.params,u.params),_=d.stringify(m)}const N=[];let A=d;for(;A;)N.unshift(A.record),A=A.parent;return{name:v,path:_,params:m,matched:N,meta:s0(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ph(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function t0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function n0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Mh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s0(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function xh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pp(t,e){return e.children.some(n=>n===t||pp(t,n))}const mp=/#/g,r0=/&/g,i0=/\//g,o0=/=/g,a0=/\?/g,gp=/\+/g,c0=/%5B/g,l0=/%5D/g,yp=/%5E/g,u0=/%60/g,vp=/%7B/g,h0=/%7C/g,_p=/%7D/g,d0=/%20/g;function Al(t){return encodeURI(""+t).replace(h0,"|").replace(c0,"[").replace(l0,"]")}function f0(t){return Al(t).replace(vp,"{").replace(_p,"}").replace(yp,"^")}function Nc(t){return Al(t).replace(gp,"%2B").replace(d0,"+").replace(mp,"%23").replace(r0,"%26").replace(u0,"`").replace(vp,"{").replace(_p,"}").replace(yp,"^")}function p0(t){return Nc(t).replace(o0,"%3D")}function m0(t){return Al(t).replace(mp,"%23").replace(a0,"%3F")}function g0(t){return t==null?"":m0(t).replace(i0,"%2F")}function yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function y0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gp," "),o=i.indexOf("="),a=yo(o<0?i:i.slice(0,o)),c=o<0?null:yo(i.slice(o+1));if(a in e){let l=e[a];jt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lh(t){let e="";for(let n in t){const s=t[n];if(n=p0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(s)?s.map(i=>i&&Nc(i)):[s&&Nc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function v0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=jt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const _0=Symbol(""),Uh=Symbol(""),kl=Symbol(""),wp=Symbol(""),Rc=Symbol("");function Er(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(qs(4,{from:n,to:e})):h instanceof Error?a(h):qw(h)?a(qs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function qa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(w0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(bn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Cw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,i,o)()}))}}return r}function w0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fh(t){const e=on(kl),n=on(wp),s=At(()=>e.resolve(Os(t.to))),r=At(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Hs.bind(null,u));if(d>-1)return d;const m=$h(c[l-2]);return l>1&&$h(u)===m&&h[h.length-1].path!==m?h.findIndex(Hs.bind(null,c[l-2])):d}),i=At(()=>r.value>-1&&T0(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&up(n.params,s.value.params));function a(c={}){return I0(c)?e[Os(t.replace)?"replace":"push"](Os(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const b0=Hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(t,{slots:e}){const n=rr(Fh(t)),{options:s}=on(kl),r=At(()=>({[Vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),E0=b0;function I0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!jt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function $h(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vh=(t,e,n)=>t??e??n,S0=Hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=on(Rc),r=At(()=>t.route||s.value),i=on(Uh,0),o=At(()=>{let l=Os(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=At(()=>r.value.matched[o.value]);Qi(Uh,At(()=>o.value+1)),Qi(_0,a),Qi(Rc,r);const c=yc();return Ms(()=>[c.value,a.value,t.name],([l,u,h],[d,m,_])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Hs(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bh(n.default,{Component:d,route:l});const m=h.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=cp(d,ye({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Bh(n.default,{Component:N,route:l})||N}}});function Bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const C0=S0;function A0(t){const e=e0(t.routes,t),n=t.parseQuery||y0,s=t.stringifyQuery||Lh,r=t.history,i=Er(),o=Er(),a=Er(),c=Lv(vn);let l=vn;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ja.bind(null,E=>""+E),h=ja.bind(null,g0),d=ja.bind(null,yo);function m(E,x){let O,q;return dp(E)?(O=e.getRecordMatcher(E),q=x):q=E,e.addRoute(q,O)}function _(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function N(E){return!!e.getRecordMatcher(E)}function A(E,x){if(x=ye({},x||c.value),typeof E=="string"){const f=Ha(n,E,x.path),p=e.resolve({path:f.path},x),y=r.createHref(f.fullPath);return ye(f,p,{params:d(p.params),hash:yo(f.hash),redirectedFrom:void 0,href:y})}let O;if("path"in E)O=ye({},E,{path:Ha(n,E.path,x.path).path});else{const f=ye({},E.params);for(const p in f)f[p]==null&&delete f[p];O=ye({},E,{params:h(E.params)}),x.params=h(x.params)}const q=e.resolve(O,x),de=E.hash||"";q.params=u(d(q.params));const Ne=Nw(s,ye({},E,{hash:f0(de),path:q.path})),ae=r.createHref(Ne);return ye({fullPath:Ne,hash:de,query:s===Lh?v0(E.query):E.query||{}},q,{redirectedFrom:void 0,href:ae})}function U(E){return typeof E=="string"?Ha(n,E,c.value.path):ye({},E)}function P(E,x){if(l!==E)return qs(8,{from:x,to:E})}function R(E){return J(E)}function H(E){return R(ye(U(E),{replace:!0}))}function Y(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let q=typeof O=="function"?O(E):O;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=U(q):{path:q},q.params={}),ye({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function J(E,x){const O=l=A(E),q=c.value,de=E.state,Ne=E.force,ae=E.replace===!0,f=Y(O);if(f)return J(ye(U(f),{state:typeof f=="object"?ye({},de,f.state):de,force:Ne,replace:ae}),x||O);const p=O;p.redirectedFrom=x;let y;return!Ne&&Rw(s,q,O)&&(y=qs(16,{to:p,from:q}),Bn(q,q,!0,!1)),(y?Promise.resolve(y):ue(p,q)).catch(w=>en(w)?en(w,2)?w:Ot(w):be(w,p,q)).then(w=>{if(w){if(en(w,2))return J(ye({replace:ae},U(w.to),{state:typeof w.to=="object"?ye({},de,w.to.state):de,force:Ne}),x||p)}else w=Ae(p,q,!0,ae,de);return se(p,q,w),w})}function L(E,x){const O=P(E,x);return O?Promise.reject(O):Promise.resolve()}function ue(E,x){let O;const[q,de,Ne]=k0(E,x);O=qa(q.reverse(),"beforeRouteLeave",E,x);for(const f of q)f.leaveGuards.forEach(p=>{O.push(bn(p,E,x))});const ae=L.bind(null,E,x);return O.push(ae),Es(O).then(()=>{O=[];for(const f of i.list())O.push(bn(f,E,x));return O.push(ae),Es(O)}).then(()=>{O=qa(de,"beforeRouteUpdate",E,x);for(const f of de)f.updateGuards.forEach(p=>{O.push(bn(p,E,x))});return O.push(ae),Es(O)}).then(()=>{O=[];for(const f of E.matched)if(f.beforeEnter&&!x.matched.includes(f))if(jt(f.beforeEnter))for(const p of f.beforeEnter)O.push(bn(p,E,x));else O.push(bn(f.beforeEnter,E,x));return O.push(ae),Es(O)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),O=qa(Ne,"beforeRouteEnter",E,x),O.push(ae),Es(O))).then(()=>{O=[];for(const f of o.list())O.push(bn(f,E,x));return O.push(ae),Es(O)}).catch(f=>en(f,8)?f:Promise.reject(f))}function se(E,x,O){for(const q of a.list())q(E,x,O)}function Ae(E,x,O,q,de){const Ne=P(E,x);if(Ne)return Ne;const ae=x===vn,f=Ts?history.state:{};O&&(q||ae?r.replace(E.fullPath,ye({scroll:ae&&f&&f.scroll},de)):r.push(E.fullPath,de)),c.value=E,Bn(E,x,O,ae),Ot()}let ze;function $e(){ze||(ze=r.listen((E,x,O)=>{if(!Pi.listening)return;const q=A(E),de=Y(q);if(de){J(ye(de,{replace:!0}),q).catch(Pr);return}l=q;const Ne=c.value;Ts&&Fw(kh(Ne.fullPath,O.delta),sa()),ue(q,Ne).catch(ae=>en(ae,12)?ae:en(ae,2)?(J(ae.to,q).then(f=>{en(f,20)&&!O.delta&&O.type===Wr.pop&&r.go(-1,!1)}).catch(Pr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),be(ae,q,Ne))).then(ae=>{ae=ae||Ae(q,Ne,!1),ae&&(O.delta&&!en(ae,8)?r.go(-O.delta,!1):O.type===Wr.pop&&en(ae,20)&&r.go(-1,!1)),se(q,Ne,ae)}).catch(Pr)}))}let _t=Er(),_r=Er(),Me;function be(E,x,O){Ot(E);const q=_r.list();return q.length?q.forEach(de=>de(E,x,O)):console.error(E),Promise.reject(E)}function _e(){return Me&&c.value!==vn?Promise.resolve():new Promise((E,x)=>{_t.add([E,x])})}function Ot(E){return Me||(Me=!E,$e(),_t.list().forEach(([x,O])=>E?O(E):x()),_t.reset()),E}function Bn(E,x,O,q){const{scrollBehavior:de}=t;if(!Ts||!de)return Promise.resolve();const Ne=!O&&$w(kh(E.fullPath,0))||(q||!O)&&history.state&&history.state.scroll||null;return Mf().then(()=>de(E,x,Ne)).then(ae=>ae&&Uw(ae)).catch(ae=>be(ae,E,x))}const Pt=E=>r.go(E);let ft;const _s=new Set,Pi={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,hasRoute:N,getRoutes:v,resolve:A,options:t,push:R,replace:H,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_r.add,isReady:_e,install(E){const x=this;E.component("RouterLink",E0),E.component("RouterView",C0),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(c)}),Ts&&!ft&&c.value===vn&&(ft=!0,R(r.location).catch(de=>{}));const O={};for(const de in vn)O[de]=At(()=>c.value[de]);E.provide(kl,x),E.provide(wp,rr(O)),E.provide(Rc,c);const q=E.unmount;_s.add(E),E.unmount=function(){_s.delete(E),_s.size<1&&(l=vn,ze&&ze(),ze=null,c.value=vn,ft=!1,Me=!1),q()}}};return Pi}function Es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function k0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hs(l,c))||r.push(c))}return[n,s,r]}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var N0="store";function ar(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function bp(t){return t!==null&&typeof t=="object"}function R0(t){return t&&typeof t.then=="function"}function D0(t,e){return function(){return t(e)}}function Ep(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Ip(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ra(t,n,[],t._modules.root,!0),Nl(t,n,e)}function Nl(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};ar(r,function(o,a){i[a]=D0(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=rr({data:e}),t.strict&&L0(t),s&&n&&t._withCommit(function(){s.data=null})}function ra(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Rl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=O0(t,o,n);s.forEachMutation(function(u,h){var d=o+h;P0(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,m=u.handler||u;M0(t,d,m,l)}),s.forEachGetter(function(u,h){var d=o+h;x0(t,d,u,l)}),s.forEachChild(function(u,h){ra(t,e,n.concat(h),u,r)})}function O0(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=vo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=vo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Tp(t,e)}},state:{get:function(){return Rl(t.state,n)}}}),r}function Tp(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function P0(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function M0(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return R0(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function x0(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function L0(t){Ms(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Rl(t,e){return e.reduce(function(n,s){return n[s]},t)}function vo(t,e,n){return bp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var U0="vuex bindings",jh="vuex:mutations",za="vuex:actions",Is="vuex",F0=0;function $0(t,e){Sw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[U0]},function(n){n.addTimelineLayer({id:jh,label:"Vuex Mutations",color:Hh}),n.addTimelineLayer({id:za,label:"Vuex Actions",color:Hh}),n.addInspector({id:Is,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Is)if(s.filter){var r=[];kp(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Ap(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Is){var r=s.nodeId;Tp(e,r),s.state=j0(q0(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Is){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Is),n.sendInspectorState(Is),n.addTimelineEvent({layerId:jh,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=F0++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:za,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:za,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Hh=8702998,V0=6710886,B0=16777215,Sp={label:"namespaced",textColor:B0,backgroundColor:V0};function Cp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Ap(t,e){return{id:e||"root",label:Cp(e),tags:t.namespaced?[Sp]:[],children:Object.keys(t._children).map(function(n){return Ap(t._children[n],e+n+"/")})}}function kp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Sp]:[]}),Object.keys(e._children).forEach(function(r){kp(t,e._children[r],n,s+r+"/")})}function j0(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=H0(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Cp(o):o,editable:!1,value:Dc(function(){return i[o]})}})}return r}function H0(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Dc(function(){return t[n]})}else e[n]=Dc(function(){return t[n]})}),e}function q0(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Dc(t){try{return t()}catch(e){return e}}var qt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Np={namespaced:{configurable:!0}};Np.namespaced.get=function(){return!!this._rawModule.namespaced};qt.prototype.addChild=function(e,n){this._children[e]=n};qt.prototype.removeChild=function(e){delete this._children[e]};qt.prototype.getChild=function(e){return this._children[e]};qt.prototype.hasChild=function(e){return e in this._children};qt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};qt.prototype.forEachChild=function(e){ar(this._children,e)};qt.prototype.forEachGetter=function(e){this._rawModule.getters&&ar(this._rawModule.getters,e)};qt.prototype.forEachAction=function(e){this._rawModule.actions&&ar(this._rawModule.actions,e)};qt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ar(this._rawModule.mutations,e)};Object.defineProperties(qt.prototype,Np);var hs=function(e){this.register([],e,!1)};hs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};hs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};hs.prototype.update=function(e){Rp([],this.root,e)};hs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new qt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ar(n.modules,function(a,c){r.register(e.concat(c),a,s)})};hs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};hs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Rp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Rp(t.concat(s),e.getChild(s),n.modules[s])}}function z0(t){return new yt(t)}var yt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new hs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,m){return c.call(o,d,m)},this.commit=function(d,m,_){return l.call(o,d,m,_)},this.strict=r;var u=this._modules.root.state;ra(this,u,[],this._modules.root),Nl(this,u),s.forEach(function(h){return h(n)})},Dl={state:{configurable:!0}};yt.prototype.install=function(e,n){e.provide(n||N0,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&$0(e,this)};Dl.state.get=function(){return this._state.data};Dl.state.set=function(t){};yt.prototype.commit=function(e,n,s){var r=this,i=vo(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};yt.prototype.dispatch=function(e,n){var s=this,r=vo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,s.state,d)})}catch{}h(d)})})}};yt.prototype.subscribe=function(e,n){return Ep(e,this._subscribers,n)};yt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Ep(s,this._actionSubscribers,n)};yt.prototype.watch=function(e,n,s){var r=this;return Ms(function(){return e(r.state,r.getters)},n,Object.assign({},s))};yt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};yt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ra(this,this.state,e,this._modules.get(e),s.preserveState),Nl(this,this.state)};yt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Rl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Ip(this)};yt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};yt.prototype.hotUpdate=function(e){this._modules.update(e),Ip(this,!0)};yt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(yt.prototype,Dl);var K0=J0(function(t,e){var n={};return G0(e).forEach(function(s){var r=s.key,i=s.val;n[r]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var l=Y0(this.$store,"mapState",t);if(!l)return;a=l.context.state,c=l.context.getters}return typeof i=="function"?i.call(this,a,c):a[i]},n[r].vuex=!0}),n});function G0(t){return W0(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function W0(t){return Array.isArray(t)||bp(t)}function J0(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function Y0(t,e,n){var s=t._modulesNamespaceMap[n];return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Q0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new X0;const d=i<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z0=function(t){const e=Dp(t);return Op.encodeByteArray(e,!0)},_o=function(t){return Z0(t).replace(/\./g,"")},Pp=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=()=>eb().__FIREBASE_DEFAULTS__,nb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pp(t[1]);return e&&JSON.parse(e)},Ol=()=>{try{return tb()||nb()||sb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mp=t=>{var e,n;return(n=(e=Ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rb=t=>{const e=Mp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ib=()=>{var t;return(t=Ol())===null||t===void 0?void 0:t.config},xp=t=>{var e;return(e=Ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_o(JSON.stringify(n)),_o(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function lb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ub(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hb(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function db(){try{return typeof indexedDB=="object"}catch{return!1}}function fb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pb,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?mb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gn(r,a,s)}}function mb(t,e){return t.replace(gb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gb=/\{\$([^}]+)}/g;function yb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qh(i)&&qh(o)){if(!wo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vb(t,e){const n=new _b(t,e);return n.subscribe.bind(n)}class _b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ka),r.error===void 0&&(r.error=Ka),r.complete===void 0&&(r.complete=Ka);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ob;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(t){return t===zn?void 0:t}function Ib(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Sb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Cb=me.INFO,Ab={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},kb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ab[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pl{constructor(e){this.name=e,this._logLevel=Cb,this._logHandler=kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Nb=(t,e)=>e.some(n=>t instanceof n);let zh,Kh;function Rb(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Db(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Oc=new WeakMap,Up=new WeakMap,Ga=new WeakMap,Ml=new WeakMap;function Ob(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),Ml.set(e,t),e}function Pb(t){if(Oc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let Pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mb(t){Pc=t(Pc)}function xb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wa(this),e,...n);return Up.set(s,e.sort?e.sort():[e]),kn(s)}:Db().includes(t)?function(...e){return t.apply(Wa(this),e),kn(Lp.get(this))}:function(...e){return kn(t.apply(Wa(this),e))}}function Lb(t){return typeof t=="function"?xb(t):(t instanceof IDBTransaction&&Pb(t),Nb(t,Rb())?new Proxy(t,Pc):t)}function kn(t){if(t instanceof IDBRequest)return Ob(t);if(Ga.has(t))return Ga.get(t);const e=Lb(t);return e!==t&&(Ga.set(t,e),Ml.set(e,t)),e}const Wa=t=>Ml.get(t);function Ub(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Fb=["get","getKey","getAll","getAllKeys","count"],$b=["put","add","delete","clear"],Ja=new Map;function Gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$b.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Fb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ja.set(e,i),i}Mb(t=>({...t,get:(e,n,s)=>Gh(e,n)||t.get(e,n,s),has:(e,n)=>!!Gh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Wh="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Pl("@firebase/app"),jb="@firebase/app-compat",Hb="@firebase/analytics-compat",qb="@firebase/analytics",zb="@firebase/app-check-compat",Kb="@firebase/app-check",Gb="@firebase/auth",Wb="@firebase/auth-compat",Jb="@firebase/database",Yb="@firebase/database-compat",Qb="@firebase/functions",Xb="@firebase/functions-compat",Zb="@firebase/installations",eE="@firebase/installations-compat",tE="@firebase/messaging",nE="@firebase/messaging-compat",sE="@firebase/performance",rE="@firebase/performance-compat",iE="@firebase/remote-config",oE="@firebase/remote-config-compat",aE="@firebase/storage",cE="@firebase/storage-compat",lE="@firebase/firestore",uE="@firebase/firestore-compat",hE="firebase",dE="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",fE={[Mc]:"fire-core",[jb]:"fire-core-compat",[qb]:"fire-analytics",[Hb]:"fire-analytics-compat",[Kb]:"fire-app-check",[zb]:"fire-app-check-compat",[Gb]:"fire-auth",[Wb]:"fire-auth-compat",[Jb]:"fire-rtdb",[Yb]:"fire-rtdb-compat",[Qb]:"fire-fn",[Xb]:"fire-fn-compat",[Zb]:"fire-iid",[eE]:"fire-iid-compat",[tE]:"fire-fcm",[nE]:"fire-fcm-compat",[sE]:"fire-perf",[rE]:"fire-perf-compat",[iE]:"fire-rc",[oE]:"fire-rc-compat",[aE]:"fire-gcs",[cE]:"fire-gcs-compat",[lE]:"fire-fst",[uE]:"fire-fst-compat","fire-js":"fire-js",[hE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,Lc=new Map;function pE(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(Lc.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,t);for(const n of bo.values())pE(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new hi("app","Firebase",mE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=dE;function Fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Nn.create("bad-app-name",{appName:String(r)});if(n||(n=ib()),!n)throw Nn.create("no-options");const i=bo.get(r);if(i){if(wo(n,i.options)&&wo(s,i.config))return i;throw Nn.create("duplicate-app",{appName:r})}const o=new Tb(r);for(const c of Lc.values())o.addComponent(c);const a=new gE(n,s,o);return bo.set(r,a),a}function $p(t=xc){const e=bo.get(t);if(!e&&t===xc)return Fp();if(!e)throw Nn.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let r=(s=fE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}zs(new is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="firebase-heartbeat-database",vE=1,Jr="firebase-heartbeat-store";let Ya=null;function Vp(){return Ya||(Ya=Ub(yE,vE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Ya}async function _E(t){try{return(await Vp()).transaction(Jr).objectStore(Jr).get(Bp(t))}catch(e){if(e instanceof gn)os.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Jh(t,e){try{const s=(await Vp()).transaction(Jr,"readwrite");return await s.objectStore(Jr).put(e,Bp(t)),s.done}catch(n){if(n instanceof gn)os.warn(n.message);else{const s=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(s.message)}}}function Bp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=1024,bE=30*24*60*60*1e3;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=bE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yh(),{heartbeatsToSend:n,unsentEntries:s}=IE(this._heartbeatsCache.heartbeats),r=_o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yh(){return new Date().toISOString().substring(0,10)}function IE(t,e=wE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Qh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return db()?fb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _E(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qh(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){zs(new is("platform-logger",e=>new Vb(e),"PRIVATE")),zs(new is("heartbeat",e=>new EE(e),"PRIVATE")),Rn(Mc,Wh,t),Rn(Mc,Wh,"esm2017"),Rn("fire-js","")}SE("");var CE="firebase",AE="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(CE,AE,"app");function Ll(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function jp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kE=jp,Hp=new hi("auth","Firebase",jp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Pl("@firebase/auth");function eo(t,...e){Xh.logLevel<=me.ERROR&&Xh.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Ul(t,...e)}function Et(t,...e){return Ul(t,...e)}function NE(t,e,n){const s=Object.assign(Object.assign({},kE()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function Ul(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hp.create(t,...e)}function $(t,e,...n){if(!t)throw Ul(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function un(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;function sn(t){un(t instanceof Function,"Expected a class definition");let e=Zh.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){const n=xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(wo(i,e??{}))return r;ln(r,"already-initialized")}return n.initialize({options:e})}function DE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qp(){return ed()==="http:"||ed()==="https:"}function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qp()||lb()||"connection"in navigator)?navigator.onLine:!0}function PE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=cb()||ub()}get(){return OE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=new fi(3e4,6e4);function ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,s,r={}){return Kp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=cr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zp.fetch()(Gp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Kp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ME),e);try{const r=new LE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Sr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw NE(t,u,l);ln(t,u)}}catch(r){if(r instanceof gn)throw r;ln(t,"network-request-failed",{message:String(r)})}}async function ia(t,e,n,s,r={}){const i=await Fn(t,e,n,s,r);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Fl(t.config,r):`${t.config.apiScheme}://${r}`}class LE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Et(this.auth,"network-request-failed")),xE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Et(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function FE(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $E(t,e=!1){const n=dt(t),s=await n.getIdToken(e),r=$l(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xr(Qa(r.auth_time)),issuedAtTime:xr(Qa(r.iat)),expirationTime:xr(Qa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function $l(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pp(n);return r?JSON.parse(r):(eo("Failed to decode base64 JWT payload"),null)}catch(r){return eo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function VE(t){const e=$l(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gn&&BE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function BE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Yr(t,FE(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zE(i.providerUserInfo):[],a=qE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function HE(t){const e=dt(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zE(t){return t.map(e=>{var{providerId:n}=e,s=Ll(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(t,e){const n=await Kp(t,{},async()=>{const s=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Gp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await KE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Qr;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ns{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $E(this,e)}reload(){return HE(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yr(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:R,isAnonymous:H,providerData:Y,stsTokenManager:J}=n;$(P&&J,e,"internal-error");const L=Qr.fromJSON(this.name,J);$(typeof P=="string",e,"internal-error"),_n(h,e.name),_n(d,e.name),$(typeof R=="boolean",e,"internal-error"),$(typeof H=="boolean",e,"internal-error"),_n(m,e.name),_n(_,e.name),_n(v,e.name),_n(N,e.name),_n(A,e.name),_n(U,e.name);const ue=new ns({uid:P,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:H,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:L,createdAt:A,lastLoginAt:U});return Y&&Array.isArray(Y)&&(ue.providerData=Y.map(se=>Object.assign({},se))),N&&(ue._redirectEventId=N),ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new Qr;r.updateFromServerResponse(n);const i=new ns({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jp.type="NONE";const td=Jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=to(this.userKey,r.apiKey,i),this.fullPersistenceKey=to("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(sn(td),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||sn(td);const o=to(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ns._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(em(e))return"Blackberry";if(tm(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Zp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yp(t=ct()){return/firefox\//i.test(t)}function Vl(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(t=ct()){return/crios\//i.test(t)}function Xp(t=ct()){return/iemobile/i.test(t)}function Zp(t=ct()){return/android/i.test(t)}function em(t=ct()){return/blackberry/i.test(t)}function tm(t=ct()){return/webos/i.test(t)}function oa(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GE(t=ct()){var e;return oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WE(){return hb()&&document.documentMode===10}function nm(t=ct()){return oa(t)||Zp(t)||tm(t)||em(t)||/windows phone/i.test(t)||Xp(t)}function JE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e=[]){let n;switch(t){case"Browser":n=nd(ct());break;case"Worker":n=`${nd(ct())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new YE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function lr(t){return dt(t)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=vb(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XE(t,e,n){const s=lr(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=rm(e),{host:o,port:a}=ZE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||eI()}function rm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZE(t){const e=rm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:rd(o)}}}function rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return ia(t,"POST","/v1/accounts:signInWithIdp",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="http://localhost";class as extends Bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ll(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new as(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ls(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:tI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return Fn(t,"POST","/v1/accounts:sendVerificationCode",ds(t,e))}async function sI(t,e){return ia(t,"POST","/v1/accounts:signInWithPhoneNumber",ds(t,e))}async function rI(t,e){const n=await ia(t,"POST","/v1/accounts:signInWithPhoneNumber",ds(t,e));if(n.temporaryProof)throw Sr(t,"account-exists-with-different-credential",n);return n}const iI={USER_NOT_FOUND:"user-not-found"};async function oI(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ia(t,"POST","/v1/accounts:signInWithPhoneNumber",ds(t,n),iI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Bl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Lr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Lr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return sI(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return rI(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!n&&!r&&!i?null:new Lr({verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends im{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends pi{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends pi{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends pi{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ns._fromIdTokenResponse(e,s,r),o=id(s);return new Ks({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=id(s);return new Ks({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends gn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Io(e,n,s,r)}}function om(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,s):i})}async function aI(t,e,n=!1){const s=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Yr(t,om(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=$l(i.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),Ks._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e,n=!1){const s="signIn",r=await om(t,s,e),i=await Ks._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function lI(t,e){return am(lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){return dt(t).setPersistence(e)}function hI(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function dI(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function fI(t){return dt(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e){return Fn(t,"POST","/v2/accounts/mfaEnrollment:start",ds(t,e))}const To="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){const t=ct();return Vl(t)||oa(t)}const gI=1e3,yI=10;class lm extends cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mI()&&JE(),this.fallbackToPolling=nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);WE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const vI=lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}um.type="SESSION";const jl=um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _I(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Hl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function bI(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function EI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function II(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TI(){return ql()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",SI=1,So="firebaseLocalStorage",dm="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function CI(){const t=indexedDB.deleteDatabase(hm);return new mi(t).toPromise()}function Fc(){const t=indexedDB.open(hm,SI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(So,{keyPath:dm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(So)?e(s):(s.close(),await CI(),e(await Fc()))})})}async function od(t,e,n){const s=ca(t,!0).put({[dm]:e,value:n});return new mi(s).toPromise()}async function AI(t,e){const n=ca(t,!1).get(e),s=await new mi(n).toPromise();return s===void 0?null:s.value}function ad(t,e){const n=ca(t,!0).delete(e);return new mi(n).toPromise()}const kI=800,NI=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(TI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EI(),!this.activeServiceWorker)return;this.sender=new wI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||II()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await od(e,To,"1"),await ad(e,To),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>od(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>AI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ca(r,!1).getAll();return new mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const RI=fm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){return Fn(t,"POST","/v2/accounts/mfaSignIn:start",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t){return(await Fn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Et("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",PI().appendChild(s)})}function mm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=500,xI=6e4,Vi=1e12;class LI{constructor(e){this.auth=e,this.counter=Vi,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new UI(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||Vi;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||Vi;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||Vi;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class UI{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;$(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},xI)},MI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FI(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=mm("rcb"),$I=new fi(3e4,6e4),VI="https://www.google.com/recaptcha/api.js?";class BI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ve().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(jI(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ve().grecaptcha):new Promise((s,r)=>{const i=Ve().setTimeout(()=>{r(Et(e,"network-request-failed"))},$I.get());Ve()[Xa]=()=>{Ve().clearTimeout(i),delete Ve()[Xa];const a=Ve().grecaptcha;if(!a){r(Et(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,s(a)};const o=`${VI}?${cr({onload:Xa,render:"explicit",hl:n})}`;pm(o).catch(()=>{clearTimeout(i),r(Et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ve().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class HI{async load(e){return new LI(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="recaptcha",qI={theme:"light",type:"image"};class zI{constructor(e,n=Object.assign({},qI),s){this.parameters=n,this.type=gm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=lr(s),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;$(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new HI:new BI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(r=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=Ve()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(qp()&&!ql(),this.auth,"internal-error"),await KI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await OI(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function KI(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Lr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function WI(t,e,n){const s=lr(t),r=await JI(s,e,dt(n));return new GI(r,i=>lI(s,i))}async function JI(t,e,n){var s;const r=await n.verify();try{$(typeof r=="string",t,"argument-error"),$(n.type===gm,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return $(o.type==="enroll",t,"internal-error"),(await pI(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await DI(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await nI(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){return e?sn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Bl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QI(t){return am(t.auth,new zl(t),t.bypassAuthState)}function XI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),cI(n,new zl(t),t.bypassAuthState)}async function ZI(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),aI(n,new zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QI;case"linkViaPopup":case"linkViaRedirect":return ZI;case"reauthViaPopup":case"reauthViaRedirect":return XI;default:ln(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new fi(2e3,1e4);class As extends ym{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eT.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="pendingRedirect",no=new Map;class nT extends ym{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const s=await sT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sT(t,e){const n=oT(e),s=iT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function rT(t,e){no.set(t._key(),e)}function iT(t){return sn(t._redirectPersistence)}function oT(t){return to(tT,t.config.apiKey,t.name)}async function aT(t,e,n=!1){const s=lr(t),r=YI(s,e),o=await new nT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=10*60*1e3;class lT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cT&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fT=/^https?/;async function pT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hT(t);for(const n of e)try{if(mT(n))return}catch{}ln(t,"unauthorized-domain")}function mT(t){const e=Uc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fT.test(n))return!1;if(dT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new fi(3e4,6e4);function ld(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yT(t){return new Promise((e,n)=>{var s,r,i;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(Et(t,"network-request-failed"))},timeout:gT.get()})}if(!((r=(s=Ve().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=mm("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},pm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw so=null,e})}let so=null;function vT(t){return so=so||yT(t),so}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new fi(5e3,15e3),wT="__/auth/iframe",bT="emulator/auth/iframe",ET={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TT(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,bT):`https://${t.config.authDomain}/${wT}`,s={apiKey:e.apiKey,appName:t.name,v:di},r=IT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${cr(s).slice(1)}`}async function ST(t){const e=await vT(t),n=Ve().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:TT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ET,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},_T.get());function c(){Ve().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AT=500,kT=600,NT="_blank",RT="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DT(t,e,n,s=AT,r=kT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CT),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=Qp(l)?NT:n),Yp(l)&&(e=e||RT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(GE(l)&&a!=="_self")return OT(e||"",a),new ud(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new ud(h)}function OT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="__/auth/handler",MT="emulator/auth/handler";function hd(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:di,eventId:r};if(e instanceof im){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof pi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${xT(t)}?${cr(a).slice(1)}`}function xT({config:t}){return t.emulator?Fl(t,MT):`https://${t.authDomain}/${PT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class LT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jl,this._completeRedirectFn=aT,this._overrideRedirectResult=rT}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=hd(e,n,s,Uc(),r);return DT(e,o,Hl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),bI(hd(e,n,s,Uc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ST(e),s=new lT(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Za,{type:Za},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Za];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nm()||Vl()||oa()}}const UT=LT;var dd="@firebase/auth",fd="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VT(t){zs(new is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(t)},u=new QE(a,c,l);return DE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new is("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(s=>new FT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(dd,fd,$T(t)),Rn(dd,fd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=5*60,jT=xp("authIdTokenMaxAge")||BT;let pd=null;const HT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jT)return;const r=n==null?void 0:n.token;pd!==r&&(pd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Xr(t=$p()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RE(t,{popupRedirectResolver:UT,persistence:[RI,vI,jl]}),s=xp("authTokenSyncURL");if(s){const i=HT(s);dI(n,i,()=>i(n.currentUser)),hI(n,o=>i(o))}const r=Mp("auth");return r&&XE(n,`http://${r}`),n}VT("Browser");var qT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Kl=Kl||{},ee=qT||self;function Co(){}function la(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zT(t){return Object.prototype.hasOwnProperty.call(t,ec)&&t[ec]||(t[ec]=++KT)}var ec="closure_uid_"+(1e9*Math.random()>>>0),KT=0;function GT(t,e,n){return t.call.apply(t.bind,arguments)}function WT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=GT:it=WT,it.apply(null,arguments)}function Bi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function $n(){this.s=this.s,this.o=this.o}var JT=0;$n.prototype.s=!1;$n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),JT!=0)&&zT(this)};$n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _m=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function md(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(la(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var YT=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",Co,e),ee.removeEventListener("test",Co,e)}catch{}return t}();function Ao(t){return/^[\s\xa0]*$/.test(t)}var gd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tc(t,e){return t<e?-1:t>e?1:0}function ua(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return ua().indexOf(t)!=-1}function Wl(t){return Wl[" "](t),t}Wl[" "]=Co;function QT(t){var e=eS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XT=Jt("Opera"),Gs=Jt("Trident")||Jt("MSIE"),wm=Jt("Edge"),$c=wm||Gs,bm=Jt("Gecko")&&!(ua().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),ZT=ua().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function Em(){var t=ee.document;return t?t.documentMode:void 0}var ko;e:{var nc="",sc=function(){var t=ua();if(bm)return/rv:([^\);]+)(\)|;)/.exec(t);if(wm)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZT)return/WebKit\/(\S+)/.exec(t);if(XT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sc&&(nc=sc?sc[1]:""),Gs){var rc=Em();if(rc!=null&&rc>parseFloat(nc)){ko=String(rc);break e}}ko=nc}var eS={};function tS(){return QT(function(){let t=0;const e=gd(String(ko)).split("."),n=gd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=tc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||tc(r[2].length==0,i[2].length==0)||tc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Vc;if(ee.document&&Gs){var yd=Em();Vc=yd||parseInt(ko,10)||void 0}else Vc=void 0;var nS=Vc;function Zr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bm){e:{try{Wl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zr.X.h.call(this)}}Xe(Zr,ot);var sS={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yi="closure_listenable_"+(1e6*Math.random()|0),rS=0;function iS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++rS,this.ba=this.ea=!1}function ha(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Im(t){const e={};for(const n in t)e[n]=t[n];return e}const vd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vd.length;i++)n=vd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function da(t){this.src=t,this.g={},this.h=0}da.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=jc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new iS(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=_m(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Yl="closure_lm_"+(1e6*Math.random()|0),ic={};function Sm(t,e,n,s,r){if(s&&s.once)return Am(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sm(t,e[i],n,s,r);return null}return n=Zl(n),t&&t[yi]?t.N(e,n,gi(s)?!!s.capture:!!s,r):Cm(t,e,n,!1,s,r)}function Cm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=gi(r)?!!r.capture:!!r,a=Xl(t);if(a||(t[Yl]=a=new da(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=oS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)YT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Nm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oS(){function t(n){return e.call(t.src,t.listener,n)}const e=aS;return t}function Am(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Am(t,e[i],n,s,r);return null}return n=Zl(n),t&&t[yi]?t.O(e,n,gi(s)?!!s.capture:!!s,r):Cm(t,e,n,!0,s,r)}function km(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)km(t,e[i],n,s,r);else s=gi(s)?!!s.capture:!!s,n=Zl(n),t&&t[yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=jc(i,n,s,r),-1<n&&(ha(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,s,r)),(n=-1<t?e[t]:null)&&Ql(n))}function Ql(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yi])Bc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Nm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xl(e))?(Bc(n,t),n.h==0&&(n.src=null,e[Yl]=null)):ha(t)}}}function Nm(t){return t in ic?ic[t]:ic[t]="on"+t}function aS(t,e){if(t.ba)t=!0;else{e=new Zr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ql(t),t=n.call(s,e)}return t}function Xl(t){return t=t[Yl],t instanceof da?t:null}var oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(t){return typeof t=="function"?t:(t[oc]||(t[oc]=function(e){return t.handleEvent(e)}),t[oc])}function We(){$n.call(this),this.i=new da(this),this.P=this,this.I=null}Xe(We,$n);We.prototype[yi]=!0;We.prototype.removeEventListener=function(t,e,n,s){km(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var r=e;e=new ot(s,t),Tm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ji(o,s,!0,e)&&r}if(o=e.g=t,r=ji(o,s,!0,e)&&r,r=ji(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ji(o,s,!1,e)&&r}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ha(n[s]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ji(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Bc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var eu=ee.JSON.stringify;function cS(){var t=Om;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lS{constructor(){this.h=this.g=null}add(e,n){const s=Rm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uS,t=>t.reset());class uS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hS(t){ee.setTimeout(()=>{throw t},0)}function Dm(t,e){Hc||dS(),qc||(Hc(),qc=!0),Om.add(t,e)}var Hc;function dS(){var t=ee.Promise.resolve(void 0);Hc=function(){t.then(fS)}}var qc=!1,Om=new lS;function fS(){for(var t;t=cS();){try{t.h.call(t.g)}catch(n){hS(n)}var e=Rm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qc=!1}function fa(t,e){We.call(this),this.h=t||1,this.g=e||ee,this.j=it(this.lb,this),this.l=Date.now()}Xe(fa,We);B=fa.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(tu(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){fa.X.M.call(this),tu(this),delete this.g};function nu(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function Pm(t){t.g=nu(()=>{t.g=null,t.i&&(t.i=!1,Pm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pS extends $n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pm(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(t){$n.call(this),this.h=t,this.g={}}Xe(ei,$n);var _d=[];function Mm(t,e,n,s){Array.isArray(n)||(n&&(_d[0]=n.toString()),n=_d);for(var r=0;r<n.length;r++){var i=Sm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function xm(t){Jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ql(e)},t),t.g={}}ei.prototype.M=function(){ei.X.M.call(this),xm(this)};ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pa(){this.g=!0}pa.prototype.Aa=function(){this.g=!1};function mS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function gS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vS(t,n)+(s?" "+s:"")})}function yS(t,e){t.info(function(){return"TIMEOUT: "+e})}pa.prototype.info=function(){};function vS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return eu(n)}catch{return e}}var fs={},wd=null;function ma(){return wd=wd||new We}fs.Pa="serverreachability";function Lm(t){ot.call(this,fs.Pa,t)}Xe(Lm,ot);function ti(t){const e=ma();Qe(e,new Lm(e))}fs.STAT_EVENT="statevent";function Um(t,e){ot.call(this,fs.STAT_EVENT,t),this.stat=e}Xe(Um,ot);function ht(t){const e=ma();Qe(e,new Um(e,t))}fs.Qa="timingevent";function Fm(t,e){ot.call(this,fs.Qa,t),this.size=e}Xe(Fm,ot);function vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var ga={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$m={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function su(){}su.prototype.h=null;function bd(t){return t.h||(t.h=t.i())}function Vm(){}var _i={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ru(){ot.call(this,"d")}Xe(ru,ot);function iu(){ot.call(this,"c")}Xe(iu,ot);var zc;function ya(){}Xe(ya,su);ya.prototype.g=function(){return new XMLHttpRequest};ya.prototype.i=function(){return{}};zc=new ya;function wi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ei(this),this.O=_S,t=$c?125:void 0,this.T=new fa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bm}function Bm(){this.i=null,this.g="",this.h=!1}var _S=45e3,Kc={},No={};B=wi.prototype;B.setTimeout=function(t){this.O=t};function Gc(t,e,n){t.K=1,t.v=_a(hn(e)),t.s=n,t.P=!0,jm(t,null)}function jm(t,e){t.F=Date.now(),bi(t),t.A=hn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ym(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Bm,t.g=yg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new pS(it(t.La,t,t.g),t.N)),Mm(t.S,t.g,"readystatechange",t.ib),e=t.H?Im(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ti(),mS(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&rn(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=rn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||$c||this.g&&(this.h.h||this.g.fa()||Sd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ti(3):ti(2)),va(this);var n=this.g.aa();this.Y=n;t:if(Hm(this)){var s=Sd(this.g);t="";var r=s.length,i=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),Ur(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ao(a)){var l=a;break t}}l=null}if(n=l)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wc(this,n);else{this.i=!1,this.o=3,ht(12),Qn(this),Ur(this);break e}}this.P?(qm(this,u,o),$c&&this.i&&u==3&&(Mm(this.S,this.T,"tick",this.hb),this.T.start())):(ks(this.j,this.m,o,null),Wc(this,o)),u==4&&Qn(this),this.i&&!this.I&&(u==4?fg(this.l,this):(this.i=!1,bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),Qn(this),Ur(this)}}}catch{}finally{}};function Hm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function qm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=wS(t,n),r==No){e==4&&(t.o=4,ht(14),s=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Kc){t.o=4,ht(15),ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ks(t.j,t.m,r,null),Wc(t,r);Hm(t)&&r!=No&&r!=Kc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),du(e),e.K=!0,ht(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Ur(t))}B.hb=function(){if(this.g){var t=rn(this.g),e=this.g.fa();this.C<e.length&&(va(this),qm(this,t,e),this.i&&t!=4&&bi(this))}};function wS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?No:(n=Number(e.substring(n,s)),isNaN(n)?Kc:(s+=1,s+n>e.length?No:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,Qn(this)};function bi(t){t.V=Date.now()+t.O,zm(t,t.O)}function zm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vi(it(t.gb,t),e)}function va(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(yS(this.j,this.A),this.K!=2&&(ti(),ht(17)),Qn(this),this.o=2,Ur(this)):zm(this,this.V-t)};function Ur(t){t.l.G==0||t.I||fg(t.l,t)}function Qn(t){va(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,tu(t.T),xm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jc(n.h,t))){if(!t.J&&Jc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oo(n),Ea(n);else break e;hu(n),ht(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=vi(it(n.cb,n),6e3));if(1>=Zm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Oo(n),!Ao(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.h;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ou(i,i.h),i.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,ke(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=gg(s,s.H?s.ka:null,s.V),o.J){eg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(va(a),bi(a)),s.g=o}else hg(s);0<n.i.length&&Ia(n)}else l[0]!="stop"&&l[0]!="close"||Xn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xn(n,7):uu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ti(4)}catch{}}function bS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(la(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ES(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(la(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Km(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(la(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ES(t),s=bS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Gm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ss(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ss){this.h=e!==void 0?e:t.h,Ro(this,t.j),this.s=t.s,this.g=t.g,Do(this,t.m),this.l=t.l,e=t.i;var n=new ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ed(this,n),this.o=t.o}else t&&(n=String(t).match(Gm))?(this.h=!!e,Ro(this,n[1]||"",!0),this.s=Cr(n[2]||""),this.g=Cr(n[3]||"",!0),Do(this,n[4]),this.l=Cr(n[5]||"",!0),Ed(this,n[6]||"",!0),this.o=Cr(n[7]||"")):(this.h=!!e,this.i=new ni(null,this.h))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ar(e,Id,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ar(e,Id,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ar(n,n.charAt(0)=="/"?CS:SS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ar(n,kS)),t.join("")};function hn(t){return new ss(t)}function Ro(t,e,n){t.j=n?Cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Do(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ed(t,e,n){e instanceof ni?(t.i=e,NS(t.i,t.h)):(n||(e=Ar(e,AS)),t.i=new ni(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function _a(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ar(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Id=/[#\/\?@]/g,SS=/[#\?:]/g,CS=/[#\?]/g,AS=/[#\?@]/g,kS=/#/g;function ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&IS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=ni.prototype;B.add=function(t,e){Vn(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wm(t,e){Vn(t),e=ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jm(t,e){return Vn(t),e=ur(t,e),t.g.has(e)}B.forEach=function(t,e){Vn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};B.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};B.W=function(t){Vn(this);let e=[];if(typeof t=="string")Jm(this,t)&&(e=e.concat(this.g.get(ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return Vn(this),this.i=null,t=ur(this,t),Jm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ym(t,e,n){Wm(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),Gl(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NS(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wm(this,s),Ym(this,r,n))},t)),t.j=e}var RS=class{constructor(e,n){this.h=e,this.g=n}};function Qm(t){this.l=t||DS,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DS=10;function Xm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zm(t){return t.h?1:t.g?t.g.size:0}function Jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ou(t,e){t.g?t.g.add(e):t.h=e}function eg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qm.prototype.cancel=function(){if(this.i=tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gl(t.i)}function au(){}au.prototype.stringify=function(t){return ee.JSON.stringify(t,void 0)};au.prototype.parse=function(t){return ee.JSON.parse(t,void 0)};function OS(){this.g=new au}function PS(t,e,n){const s=n||"";try{Km(t,function(r,i){let o=r;gi(r)&&(o=eu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function MS(t,e){const n=new pa;if(ee.Image){const s=new Image;s.onload=Bi(Hi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Bi(Hi,n,s,"TestLoadImage: error",!1,e),s.onabort=Bi(Hi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Bi(Hi,n,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Hi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ei(t){this.l=t.ac||null,this.j=t.jb||!1}Xe(Ei,su);Ei.prototype.g=function(){return new wa(this.l,this.j)};Ei.prototype.i=function(t){return function(){return t}}({});function wa(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=cu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(wa,We);var cu=0;B=wa.prototype;B.open=function(t,e){if(this.readyState!=cu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,si(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=cu};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ng(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ng(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ii(this):si(this),this.readyState==3&&ng(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,Ii(this))};B.Ua=function(t){this.g&&(this.response=t,Ii(this))};B.ga=function(){this.g&&Ii(this)};function Ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,si(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xS=ee.JSON.parse;function De(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sg,this.K=this.L=!1}Xe(De,We);var sg="",LS=/^https?$/i,US=["POST","PUT"];B=De.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zc.g(),this.C=this.u?bd(this.u):bd(zc),this.g.onreadystatechange=it(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Td(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ee.FormData&&t instanceof ee.FormData,!(0<=_m(US,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{og(this),0<this.B&&((this.K=FS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.qa,this)):this.A=nu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Td(this,i)}};function FS(t){return Gs&&tS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof Kl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rg(t),ba(t)}function rg(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),ba(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ba(this,!0)),De.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?ig(this):this.fb())};B.fb=function(){ig(this)};function ig(t){if(t.h&&typeof Kl<"u"&&(!t.C[1]||rn(t)!=4||t.aa()!=2)){if(t.v&&rn(t)==4)nu(t.Ha,0,t);else if(Qe(t,"readystatechange"),rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Gm)[1]||null;if(!r&&ee.self&&ee.self.location){var i=ee.self.location.protocol;r=i.substr(0,i.length-1)}s=!LS.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",rg(t)}}finally{ba(t)}}}}function ba(t,e){if(t.g){og(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function og(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function rn(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xS(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ag(t){let e="";return Jl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function lu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ag(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Ir(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cg(t){this.Ca=0,this.i=[],this.j=new pa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ir("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ir("baseRetryDelayMs",5e3,t),this.bb=Ir("retryDelaySeedMs",1e4,t),this.$a=Ir("forwardChannelMaxRetries",2,t),this.ta=Ir("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Qm(t&&t.concurrentRequestLimit),this.Fa=new OS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=cg.prototype;B.ma=8;B.G=1;function uu(t){if(lg(t),t.G==3){var e=t.U++,n=hn(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),Ti(t,n),e=new wi(t,t.j,e,void 0),e.K=2,e.v=_a(hn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(e.v.toString(),"")),!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=yg(e.l,null),e.g.da(e.v)),e.F=Date.now(),bi(e)}mg(t)}function Ea(t){t.g&&(du(t),t.g.cancel(),t.g=null)}function lg(t){Ea(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Oo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Ia(t){Xm(t.h)||t.m||(t.m=!0,Dm(t.Ja,t),t.C=0)}function $S(t,e){return Zm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vi(it(t.Ja,t,e),pg(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new wi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Im(i),Tm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ug(this,r,e),n=hn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),Ti(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ag(i)))+"&"+e:this.o&&lu(n,this.o,i)),ou(this.h,r),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),r.Z=!0,Gc(r,n,null)):Gc(r,n,e),this.G=2}}else this.G==3&&(t?Cd(this,t):this.i.length==0||Xm(this.h)||Cd(this))};function Cd(t,e){var n;e?n=e.m:n=t.U++;const s=hn(t.F);ke(s,"SID",t.I),ke(s,"RID",n),ke(s,"AID",t.T),Ti(t,s),t.o&&t.s&&lu(s,t.o,t.s),n=new wi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ug(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ou(t.h,n),Gc(n,s,e)}function Ti(t,e){t.ia&&Jl(t.ia,function(n,s){ke(e,s,n)}),t.l&&Km({},function(n,s){ke(e,s,n)})}function ug(t,e,n){n=Math.min(t.i.length,n);var s=t.l?it(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{PS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function hg(t){t.g||t.u||(t.Z=1,Dm(t.Ia,t),t.A=0)}function hu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vi(it(t.Ia,t),pg(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,dg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vi(it(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),Ea(this),dg(this))};function du(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function dg(t){t.g=new wi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=hn(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),Ti(t,e),t.o&&t.s&&lu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_a(hn(e)),n.s=null,n.P=!0,jm(n,t)}B.cb=function(){this.v!=null&&(this.v=null,Ea(this),hu(this),ht(19))};function Oo(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function fg(t,e){var n=null;if(t.g==e){Oo(t),du(t),t.g=null;var s=2}else if(Jc(t.h,e))n=e.D,eg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ma(),Qe(s,new Fm(s,n)),Ia(t)}else hg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&$S(t,e)||s==2&&hu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function pg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=it(t.kb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ro(n,"https"),_a(n)),MS(n.toString(),s)}else ht(2);t.G=0,t.l&&t.l.va(e),mg(t),lg(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function mg(t){if(t.G=0,t.la=[],t.l){const e=tg(t.h);(e.length!=0||t.i.length!=0)&&(md(t.la,e),md(t.la,t.i),t.h.i.length=0,Gl(t.i),t.i.length=0),t.l.ua()}}function gg(t,e,n){var s=n instanceof ss?hn(n):new ss(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Do(s,s.m);else{var r=ee.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ss(null,void 0);s&&Ro(i,s),e&&(i.g=e),r&&Do(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ke(s,n,e),ke(s,"VER",t.ma),Ti(t,s),s}function yg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new Ei({jb:!0})):new De(t.ra),e.Ka(t.H),e}function vg(){}B=vg.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Po(){if(Gs&&!(10<=Number(nS)))throw Error("Environmental error: no available transport.")}Po.prototype.g=function(t,e){return new It(t,e)};function It(t,e){We.call(this),this.g=new cg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ao(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}Xe(It,We);It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gg(t,null,t.V),Ia(t)};It.prototype.close=function(){uu(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eu(t),t=n);e.i.push(new RS(e.ab++,t)),e.G==3&&Ia(e)};It.prototype.M=function(){this.g.l=null,delete this.j,uu(this.g),delete this.g,It.X.M.call(this)};function _g(t){ru.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(_g,ru);function wg(){iu.call(this),this.status=1}Xe(wg,iu);function hr(t){this.g=t}Xe(hr,vg);hr.prototype.xa=function(){Qe(this.g,"a")};hr.prototype.wa=function(t){Qe(this.g,new _g(t))};hr.prototype.va=function(t){Qe(this.g,new wg)};hr.prototype.ua=function(){Qe(this.g,"b")};Po.prototype.createWebChannel=Po.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;ga.NO_ERROR=0;ga.TIMEOUT=8;ga.HTTP_ERROR=6;$m.COMPLETE="complete";Vm.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";We.prototype.listen=We.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var VS=function(){return new Po},BS=function(){return ma()},ac=ga,jS=$m,HS=fs,Ad={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qS=Ei,qi=Vm,zS=De;const kd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Pl("@firebase/firestore");function Nd(){return cs.logLevel}function j(t,...e){if(cs.logLevel<=me.DEBUG){const n=e.map(fu);cs.debug(`Firestore (${dr}): ${t}`,...n)}}function dn(t,...e){if(cs.logLevel<=me.ERROR){const n=e.map(fu);cs.error(`Firestore (${dr}): ${t}`,...n)}}function Mo(t,...e){if(cs.logLevel<=me.WARN){const n=e.map(fu);cs.warn(`Firestore (${dr}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw dn(e),new Error(e)}function Ce(t,e){t||Z()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class GS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WS{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new an;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new an,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new an)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ce(typeof s.accessToken=="string"),new bg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new et(e)}}class JS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class YS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new JS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.T=n.token,new QS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ZS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Be(0,0))}static max(){return new ne(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ri{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const eC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ri{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return eC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Se.fromString(e))}static fromName(e){return new z(Se.fromString(e).popFirst(5))}static empty(){return new z(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Se(e.slice()))}}function tC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new Mn(r,z.empty(),e)}function nC(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Mn(ne.min(),z.empty(),-1)}static max(){return new Mn(ne.max(),z.empty(),-1)}}function sC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==rC)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}pu.ct=-1;function Ta(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function oC(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zi(this.root,e,this.comparator,!0)}}class zi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Je.RED,this.left=r??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dd(this.data.getIterator())}getIteratorFrom(e){return new Dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new je(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new aC("Invalid base64 string: "+r):r}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const cC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=cC.exec(t);if(Ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sg(t){const e=t.mapValue.fields.__previous_value__;return Tg(e)?Sg(e):e}function ii(t){const e=xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tg(t)?4:uC(t)?9007199254740991:10:Z()}function Zt(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ii(t).isEqual(ii(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xn(s.timestampValue),o=xn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Js(s.bytesValue).isEqual(Js(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ue(s.geoPointValue.latitude)===Ue(r.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ue(s.integerValue)===Ue(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ue(s.doubleValue),o=Ue(r.doubleValue);return i===o?xo(i)===xo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Rd(i)!==Rd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Zt(i[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function ai(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ls(t),s=ls(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ue(r.integerValue||r.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Od(t.timestampValue,e.timestampValue);case 4:return Od(ii(t),ii(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Js(r),a=Js(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(Ue(r.latitude),Ue(i.latitude));return o!==0?o:ge(Ue(r.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ys(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ki.mapValue&&i===Ki.mapValue)return 0;if(r===Ki.mapValue)return 1;if(i===Ki.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=Ys(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Od(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=xn(t),s=xn(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function Qs(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Js(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Yc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Yc(s.fields[a])}`;return i+"}"}(t.mapValue):Z();var e,n}function Pd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qc(t){return!!t&&"integerValue"in t}function mu(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function xd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ro(t){return!!t&&"mapValue"in t}function Fr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Fr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fr(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Fr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ro(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(Fr(this.value))}}function Cg(t){const e=[];return fr(t.fields,(n,s)=>{const r=new st([n]);if(ro(s)){const i=Cg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ne.min(),ne.min(),ne.min(),kt.empty(),0)}static newFoundDocument(e,n,s,r){return new tt(e,1,n,ne.min(),s,r,0)}static newNoDocument(e,n){return new tt(e,2,n,ne.min(),ne.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ne.min(),ne.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),n.key):s=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n="asc"){this.field=e,this.dir=n}}function hC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{}class Fe extends Ag{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fC(e,n,s):n==="array-contains"?new gC(e,s):n==="in"?new yC(e,s):n==="not-in"?new vC(e,s):n==="array-contains-any"?new _C(e,s):new Fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pC(e,s):new mC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ht extends Ag{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ht(e,n)}matches(e){return kg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kg(t){return t.op==="and"}function Ng(t){return dC(t)&&kg(t)}function dC(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Xc(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(Ng(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function Rg(t,e){return t instanceof Fe?function(n,s){return s instanceof Fe&&n.op===s.op&&n.field.isEqual(s.field)&&Zt(n.value,s.value)}(t,e):t instanceof Ht?function(n,s){return s instanceof Ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Rg(i,s.filters[o]),!0):!1}(t,e):void Z()}function Dg(t){return t instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(t):t instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(Dg).join(" ,")+"}"}(t):"Filter"}class fC extends Fe{constructor(e,n,s){super(e,n,s),this.key=z.fromName(s.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class pC extends Fe{constructor(e,n){super(e,"in",n),this.keys=Og("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mC extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=Og("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Og(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>z.fromName(s.referenceValue))}class gC extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mu(n)&&ai(n.arrayValue,this.value)}}class yC extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class vC extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class _C extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ai(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Fd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wC(t,e,n,s,r,i,o)}function gu(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Xc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),e.ft=n}return e.ft}function yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ud(t.startAt,e.startAt)&&Ud(t.endAt,e.endAt)}function Zc(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function bC(t,e,n,s,r,i,o,a){return new pr(t,e,n,s,r,i,o,a)}function vu(t){return new pr(t)}function $d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _u(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Pg(t){return t.collectionGroup!==null}function Fs(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=Sa(e),s=_u(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Us(n)),e.dt.push(new Us(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Us(st.keyField(),i))}}}return e.dt}function fn(t){const e=ie(t);if(!e.wt)if(e.limitType==="F")e.wt=Fd(e.path,e.collectionGroup,Fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Fs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Us(i.field,o))}const s=e.endAt?new Lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lo(e.startAt.position,e.startAt.inclusive):null;e.wt=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function el(t,e){e.getFirstInequalityField(),Sa(t);const n=t.filters.concat([e]);return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tl(t,e,n){return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ca(t,e){return yu(fn(t),fn(e))&&t.limitType===e.limitType}function Mg(t){return`${gu(fn(t))}|lt:${t.limitType}`}function nl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Dg(s)).join(", ")}]`),Ta(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),`Target(${n})`}(fn(t))}; limitType=${t.limitType})`}function Aa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Fs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ld(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Fs(n),s)||n.endAt&&!function(r,i,o){const a=Ld(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Fs(n),s))}(t,e)}function EC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xg(t){return(e,n)=>{let s=!1;for(const r of Fs(t)){const i=IC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IC(t,e,n){const s=t.field.isKeyField()?z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ys(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new qe(z.comparator);function pn(){return TC}const Lg=new qe(z.comparator);function kr(...t){let e=Lg;for(const n of t)e=e.insert(n.key,n);return e}function Ug(t){let e=Lg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zn(){return $r()}function Fg(){return $r()}function $r(){return new mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const SC=new qe(z.comparator),CC=new je(z.comparator);function le(...t){let e=CC;for(const n of t)e=e.add(n);return e}const AC=new je(ge);function $g(){return AC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Bg(t){return{integerValue:""+t}}function kC(t,e){return oC(e)?Bg(e):Vg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this._=void 0}}function NC(t,e,n){return t instanceof Uo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ci?Hg(t,e):t instanceof li?qg(t,e):function(s,r){const i=jg(s,r),o=Vd(i)+Vd(s._t);return Qc(i)&&Qc(s._t)?Bg(o):Vg(s.serializer,o)}(t,e)}function RC(t,e,n){return t instanceof ci?Hg(t,e):t instanceof li?qg(t,e):n}function jg(t,e){return t instanceof Fo?Qc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Uo extends ka{}class ci extends ka{constructor(e){super(),this.elements=e}}function Hg(t,e){const n=zg(e);for(const s of t.elements)n.some(r=>Zt(r,s))||n.push(s);return{arrayValue:{values:n}}}class li extends ka{constructor(e){super(),this.elements=e}}function qg(t,e){let n=zg(e);for(const s of t.elements)n=n.filter(r=>!Zt(r,s));return{arrayValue:{values:n}}}class Fo extends ka{constructor(e,n){super(),this.serializer=e,this._t=n}}function Vd(t){return Ue(t.integerValue||t.doubleValue)}function zg(t){return mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ci&&s instanceof ci||n instanceof li&&s instanceof li?Ws(n.elements,s.elements,Zt):n instanceof Fo&&s instanceof Fo?Zt(n._t,s._t):n instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class OC{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Na{}function Kg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wu(t.key,Yt.none()):new Ai(t.key,t.data,Yt.none());{const n=t.data,s=kt.empty();let r=new je(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ps(t.key,s,new Vt(r.toArray()),Yt.none())}}function PC(t,e,n){t instanceof Ai?function(s,r,i){const o=s.value.clone(),a=jd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,r,i){if(!io(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=jd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Gg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Vr(t,e,n,s){return t instanceof Ai?function(r,i,o,a){if(!io(r.precondition,i))return o;const c=r.value.clone(),l=Hd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ps?function(r,i,o,a){if(!io(r.precondition,i))return o;const c=Hd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Gg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return io(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function MC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=jg(s.transform,r||null);i!=null&&(n===null&&(n=kt.empty()),n.set(s.field,i))}return n||null}function Bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(r,i)=>DC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends Na{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ps extends Na{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jd(t,e,n){const s=new Map;Ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,RC(o,a,n[r]))}return s}function Hd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,NC(i,o,e))}return s}class wu extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xC extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&PC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Fg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Kg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>Bd(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>Bd(n,s))}}class bu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ce(e.mutations.length===s.length);let r=SC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new bu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,he;function $C(t){switch(t){default:return Z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Wg(t){if(t===void 0)return dn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return Z()}}(he=Le||(Le={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Gi}static getOrCreateInstance(){return Gi===null&&(Gi=new Eu),Gi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Gi=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ra(ne.min(),r,$g(),pn(),le())}}class ki{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ki(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Jg{constructor(e,n){this.targetId=e,this.Et=n}}class Yg{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qd{constructor(){this.At=0,this.Rt=Kd(),this.vt=lt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),s=le();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new ki(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Kd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class VC{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=pn(),this.qt=zd(),this.Ut=new je(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Zc(o))if(r===0){const a=new z(o.path);this.Qt(s,a,tt.newNoDocument(a,ne.min()))}else Ce(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Eu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Zc(a.target)){const c=new z(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,tt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=le();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ra(e,n,this.Ut,this.Lt,s);return this.Lt=pn(),this.qt=zd(),this.Ut=new je(ge),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new qd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new je(ge),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new qd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function zd(){return new qe(z.comparator)}function Kd(){return new qe(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HC=(()=>({and:"AND",or:"OR"}))();class qC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zC(t,e){return $o(t,e.toTimestamp())}function Qt(t){return Ce(!!t),ne.fromTimestamp(function(e){const n=xn(e);return new Be(n.seconds,n.nanos)}(t))}function Iu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xg(t){const e=Se.fromString(t);return Ce(ny(e)),e}function sl(t,e){return Iu(t.databaseId,e.path)}function cc(t,e){const n=Xg(e);if(n.get(1)!==t.databaseId.projectId)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Zg(n))}function rl(t,e){return Iu(t.databaseId,e)}function KC(t){const e=Xg(t);return e.length===4?Se.emptyPath():Zg(e)}function il(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zg(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gd(t,e,n){return{name:sl(t,e),fields:n.value.mapValue.fields}}function GC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ce(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(Ce(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:Wg(c.code);return new F(l,c.message||"")}(o);n=new Yg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=cc(t,s.document.name),i=Qt(s.document.updateTime),o=s.document.createTime?Qt(s.document.createTime):ne.min(),a=new kt({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new oo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=cc(t,s.document),i=s.readTime?Qt(s.readTime):ne.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new oo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=cc(t,s.document),i=s.removedTargetIds||[];n=new oo([],i,r,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new FC(r),o=s.targetId;n=new Jg(o,i)}}return n}function WC(t,e){let n;if(e instanceof Ai)n={update:Gd(t,e.key,e.value)};else if(e instanceof wu)n={delete:sl(t,e.key)};else if(e instanceof ps)n={update:Gd(t,e.key,e.data),updateMask:sA(e.fieldMask)};else{if(!(e instanceof xC))return Z();n={verify:sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof li)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:zC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(t,e.precondition)),n}function JC(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Qt(s.updateTime):Qt(r);return i.isEqual(ne.min())&&(i=Qt(r)),new OC(i,s.transformResults||[])}(n,e))):[]}function YC(t,e){return{documents:[rl(t,e.path)]}}function QC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=rl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ty(Ht.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ss(u.field),direction:eA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ta(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function XC(t){let e=KC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=ey(u);return h instanceof Ht&&Ng(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Us(Cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ta(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Lo(d,h)}(n.endAt)),bC(e,r,o,i,a,"F",c,l)}function ZC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ey(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cs(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(e.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cs(e.unaryFilter.field);return Fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cs(e.unaryFilter.field);return Fe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return Fe.create(Cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(n=>ey(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function eA(t){return BC[t]}function tA(t){return jC[t]}function nA(t){return HC[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Cs(t){return st.fromServerFormat(t.fieldPath)}function ty(t){return t instanceof Fe?function(e){if(e.op==="=="){if(xd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NAN"}};if(Md(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NAN"}};if(Md(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(e.field),op:tA(e.op),value:e.value}}}(t):t instanceof Ht?function(e){const n=e.getFilters().map(s=>ty(s));return n.length===1?n[0]:{compositeFilter:{op:nA(e.op),filters:n}}}(t):Z()}function sA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ny(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,r,i=ne.min(),o=ne.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.se=e}}function iA(t){const e=XC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.He=new aA}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Mn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class aA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(Se.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Xs(0)}static bn(){return new Xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.changes=new mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Vr(s.mutation,r,Vt.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=kr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=pn();const o=$r(),a=$r();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ps)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Vr(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new lA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=$r();let r=new qe((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Vt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||le()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Fg();u.forEach(d=>{if(!i.has(d)){const m=Kg(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Zn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:Ug(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(s=>{let r=kr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=kr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new pr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=kr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Vr(l.mutation,c,Vt.empty(),Be.now()),Aa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:iA(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.overlays=new qe(z.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zn();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Zn(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Zn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Zn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UC(n,s));let i=this.ts.get(n);i===void 0&&(i=le(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.es=new je(Ke.ns),this.ss=new je(Ke.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ke(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new z(new Se([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new z(new Se([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=le();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return z.comparator(e.key,n.key)||ge(e.ds,n.ds)}static rs(e,n){return ge(e.ds,n.ds)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new je(Ke.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(ge);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),S.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;z.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new z(i),0);let a=new je(ge);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ce(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return S.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ke(n,0),r=this._s.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.Ts=e,this.docs=new qe(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=pn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=pn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||sC(nC(u),s)<=0||(r.has(u.key)||Aa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Z()}Es(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mA(this)}getSize(e){return S.resolve(this.size)}}class mA extends cA{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.persistence=e,this.As=new mr(n=>gu(n),yu),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Tu,this.targetCount=0,this.bs=Xs.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new pu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new gA(this),this.indexManager=new oA,this.remoteDocumentCache=function(s){return new pA(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new rA(n),this.xs=new hA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new fA(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new vA(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return S.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class vA extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.$s=new Tu,this.Ms=null}static Fs(e){return new Su(e)}get Bs(){if(this.Ms)return this.Ms;throw Z()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,s=>{const r=z.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,ne.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=le(),r=le();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Cu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if($d(n))return S.resolve(null);let s=fn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=tl(n,null,"F"),s=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=le(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,tl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return $d(n)||r.isEqual(ne.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Nd()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nl(n)),this.Fi(e,o,n,tC(r,-1)))})}$i(e,n){let s=new je(xg(e));return n.forEach((r,i)=>{Aa(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Nd()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",nl(n)),this.xi.getDocumentsMatchingQuery(e,n,Mn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new qe(ge),this.qi=new mr(i=>gu(i),yu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uA(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function bA(t,e,n,s){return new wA(t,e,n,s)}async function sy(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=le();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function EA(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(_=>{const v=c.docVersions.get(m);Ce(v!==null),_.version.compareTo(v)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ry(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function IA(t,e){const n=ie(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(lt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(_,v,N){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,m,u)&&a.push(n.Ds.updateTargetData(i,m))});let c=pn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(TA(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(ne.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function TA(t,e,n){let s=le(),r=le();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=pn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function SA(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CA(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new rs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function ol(t,e,n){const s=ie(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ci(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Wd(t,e,n){const s=ie(t);let r=ne.min(),i=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.qi.get(l);return h!==void 0?S.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:ne.min(),n?i:le())).next(a=>(AA(s,EC(e),a),{documents:a,Wi:i})))}function AA(t,e,n){let s=t.Ui.get(e)||ne.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Jd{constructor(){this.activeTargetIds=$g()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.Br=new Jd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Jd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi=null;function lc(){return Wi===null?Wi=268435456+Math.round(2147483648*Math.random()):Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class OA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=lc(),a=this.ao(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Mo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=RA[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=lc();return new Promise((o,a)=>{const c=new zS;c.setWithCredentials(!0),c.listenOnce(jS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ac.NO_ERROR:const u=c.getResponseJson();j(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ac.TIMEOUT:j(Ze,`RPC '${e}' ${i} timed out`),a(new F(b.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const h=c.getStatus();if(j(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(v){const N=v.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(N)>=0?N:b.UNKNOWN}(m.status);a(new F(_,m.message))}else a(new F(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(b.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);j(Ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=lc(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VS(),a=BS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new qS({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");j(Ze,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const m=new DA({Wr:v=>{d?j(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(j(Ze,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),j(Ze,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},Hr:()=>u.close()}),_=(v,N,A)=>{v.listen(N,U=>{try{A(U)}catch(P){setTimeout(()=>{throw P},0)}})};return _(u,qi.EventType.OPEN,()=>{d||j(Ze,`RPC '${e}' stream ${r} transport opened.`)}),_(u,qi.EventType.CLOSE,()=>{d||(d=!0,j(Ze,`RPC '${e}' stream ${r} transport closed`),m.so())}),_(u,qi.EventType.ERROR,v=>{d||(d=!0,Mo(Ze,`RPC '${e}' stream ${r} transport errored:`,v),m.so(new F(b.UNAVAILABLE,"The operation could not be completed")))}),_(u,qi.EventType.MESSAGE,v=>{var N;if(!d){const A=v.data[0];Ce(!!A);const U=A,P=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(P){j(Ze,`RPC '${e}' stream ${r} received error:`,P);const R=P.status;let H=function(J){const L=Le[J];if(L!==void 0)return Wg(L)}(R),Y=P.message;H===void 0&&(H=b.INTERNAL,Y="Unknown error status: "+R+" with message "+P.message),d=!0,m.so(new F(H,Y)),u.close()}else j(Ze,`RPC '${e}' stream ${r} received:`,A),m.io(A)}}),_(a,HS.STAT_EVENT,v=>{v.stat===Ad.PROXY?j(Ze,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Ad.NOPROXY&&j(Ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return new qC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new iy(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new F(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PA extends oy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=GC(this.serializer,e),s=function(r){if(!("targetChange"in r))return ne.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ne.min():i.readTime?Qt(i.readTime):ne.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=il(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Zc(a)?{documents:YC(r,a)}:{query:QC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qg(r,i.resumeToken):i.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=$o(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=ZC(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=il(this.serializer),n.removeTarget=e,this.Fo(n)}}class MA extends oy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=JC(e.writeResults,e.commitTime),s=Qt(e.commitTime);return this.listener.Zo(s,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=il(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>WC(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(b.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(b.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class LA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(dn(n),this.ru=!1):j("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{ms(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.du.add(4),await Ni(c),c.mu.set("Unknown"),c.du.delete(4),await Oa(c)}(this))})}),this.mu=new LA(s,r)}}async function Oa(t){if(ms(t))for(const e of t.wu)await e(!0)}async function Ni(t){for(const e of t.wu)await e(!1)}function ay(t,e){const n=ie(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Nu(n)?ku(n):gr(n).No()&&Au(n,e))}function cy(t,e){const n=ie(t),s=gr(n);n.fu.delete(e),s.No()&&ly(n,e),n.fu.size===0&&(s.No()?s.$o():ms(n)&&n.mu.set("Unknown"))}function Au(t,e){t.gu.Ot(e.targetId),gr(t).jo(e)}function ly(t,e){t.gu.Ot(e),gr(t).Wo(e)}function ku(t){t.gu=new VC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),gr(t).start(),t.mu.ou()}function Nu(t){return ms(t)&&!gr(t).xo()&&t.fu.size>0}function ms(t){return ie(t).du.size===0}function uy(t){t.gu=void 0}async function FA(t){t.fu.forEach((e,n)=>{Au(t,e)})}async function $A(t,e){uy(t),Nu(t)?(t.mu.au(e),ku(t)):t.mu.set("Unknown")}async function VA(t,e,n){if(t.mu.set("Online"),e instanceof Yg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vo(t,s)}else if(e instanceof oo?t.gu.Kt(e):e instanceof Jg?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ne.min()))try{const s=await ry(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),ly(r,a);const l=new rs(c.target,a,1,c.sequenceNumber);Au(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Vo(t,s)}}async function Vo(t,e,n){if(!Ci(e))throw e;t.du.add(1),await Ni(t),t.mu.set("Offline"),n||(n=()=>ry(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Oa(t)})}function hy(t,e){return e().catch(n=>Vo(t,n,e))}async function Pa(t){const e=ie(t),n=Ln(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;BA(e);)try{const r=await SA(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,jA(e,r)}catch(r){await Vo(e,r)}dy(e)&&fy(e)}function BA(t){return ms(t)&&t.lu.length<10}function jA(t,e){t.lu.push(e);const n=Ln(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function dy(t){return ms(t)&&!Ln(t).xo()&&t.lu.length>0}function fy(t){Ln(t).start()}async function HA(t){Ln(t).tu()}async function qA(t){const e=Ln(t);for(const n of t.lu)e.Yo(n.mutations)}async function zA(t,e,n){const s=t.lu.shift(),r=bu.from(s,e,n);await hy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Pa(t)}async function KA(t,e){e&&Ln(t).Jo&&await async function(n,s){if(r=s.code,$C(r)&&r!==b.ABORTED){const i=n.lu.shift();Ln(n).Oo(),await hy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pa(n)}var r}(t,e),dy(t)&&fy(t)}async function Qd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=ms(n);n.du.add(3),await Ni(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Oa(n)}async function GA(t,e){const n=ie(t);e?(n.du.delete(2),await Oa(n)):e||(n.du.add(2),await Ni(n),n.mu.set("Unknown"))}function gr(t){return t.yu||(t.yu=function(e,n,s){const r=ie(e);return r.nu(),new PA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:FA.bind(null,t),Zr:$A.bind(null,t),zo:VA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Nu(t)?ku(t):t.mu.set("Unknown")):(await t.yu.stop(),uy(t))})),t.yu}function Ln(t){return t.pu||(t.pu=function(e,n,s){const r=ie(e);return r.nu(),new MA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:HA.bind(null,t),Zr:KA.bind(null,t),Xo:qA.bind(null,t),Zo:zA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Pa(t)):(await t.pu.stop(),t.lu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ru(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(dn("AsyncQueue",`${e}: ${t}`),Ci(t))return new F(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||z.comparator(n.key,s.key):(n,s)=>z.comparator(n.key,s.key),this.keyedMap=kr(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.Iu=new qe(z.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Z():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,$s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.Eu=void 0,this.listeners=[]}}class JA{constructor(){this.queries=new mr(e=>Mg(e),Ca),this.onlineState="Unknown",this.Au=new Set}}async function py(t,e){const n=ie(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new WA),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Du(o,`Initialization of query '${nl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Ou(n)}async function my(t,e){const n=ie(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function YA(t,e){const n=ie(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Ou(n)}function QA(t,e,n){const s=ie(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ou(t){t.Au.forEach(e=>{e.next()})}class gy{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.key=e}}class vy{constructor(e){this.key=e}}class XA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=xg(e),this.Gu=new $s(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Xd,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),m=Aa(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),N=!0):this.Wu(d,m)||(s.track({type:2,doc:m}),N=!0,(c&&this.Ku(m,c)>0||l&&this.Ku(m,l)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),N=!0):d&&!m&&(s.track({type:1,doc:d}),N=!0,(c||l)&&(a=!0)),N&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return m(h)-m(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Zs(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Xd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new vy(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new yy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Zs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class ZA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class e1{constructor(e){this.key=e,this.ec=!1}}class t1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new mr(a=>Mg(a),Ca),this.ic=new Map,this.rc=new Set,this.oc=new qe(z.comparator),this.uc=new Map,this.cc=new Tu,this.ac={},this.hc=new Map,this.lc=Xs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function n1(t,e){const n=d1(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await CA(n.localStore,fn(e));n.isPrimaryClient&&ay(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await s1(n,e,s,a==="current",o.resumeToken)}return r}async function s1(t,e,n,s,r){t.dc=(h,d,m)=>async function(_,v,N,A){let U=v.view.zu(N);U.Mi&&(U=await Wd(_.localStore,v.query,!1).then(({documents:H})=>v.view.zu(H,U)));const P=A&&A.targetChanges.get(v.targetId),R=v.view.applyChanges(U,_.isPrimaryClient,P);return ef(_,v.targetId,R.Yu),R.snapshot}(t,h,d,m);const i=await Wd(t.localStore,e,!0),o=new XA(e,i.Wi),a=o.zu(i.documents),c=ki.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);ef(t,n,l.Yu);const u=new ZA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function r1(t,e){const n=ie(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ca(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ol(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),cy(n.remoteStore,s.targetId),al(n,s.targetId)}).catch(Si)):(al(n,s.targetId),await ol(n.localStore,s.targetId,!0))}async function i1(t,e,n){const s=f1(t);try{const r=await function(i,o){const a=ie(i),c=Be.now(),l=o.reduce((d,m)=>d.add(m.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=pn(),_=le();return a.Ki.getEntries(d,l).next(v=>{m=v,m.forEach((N,A)=>{A.isValidDocument()||(_=_.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{u=v;const N=[];for(const A of o){const U=MC(A,u.get(A.key).overlayedDocument);U!=null&&N.push(new ps(A.key,U,Cg(U.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,N,o)}).next(v=>{h=v;const N=v.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,N)})}).then(()=>({batchId:h.batchId,changes:Ug(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new qe(ge)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ri(s,r.changes),await Pa(s.remoteStore)}catch(r){const i=Du(r,"Failed to persist write");n.reject(i)}}async function _y(t,e){const n=ie(t);try{const s=await IA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Ce(o.ec):r.removedDocuments.size>0&&(Ce(o.ec),o.ec=!1))}),await Ri(n,s,e)}catch(s){await Si(s)}}function Zd(t,e,n){const s=ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Ou(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function o1(t,e,n){const s=ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new qe(z.comparator);o=o.insert(i,tt.newNoDocument(i,ne.min()));const a=le().add(i),c=new Ra(ne.min(),new Map,new je(ge),o,a);await _y(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Pu(s)}else await ol(s.localStore,e,!1).then(()=>al(s,e,n)).catch(Si)}async function a1(t,e){const n=ie(t),s=e.batch.batchId;try{const r=await EA(n.localStore,e);by(n,s,null),wy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ri(n,r)}catch(r){await Si(r)}}async function c1(t,e,n){const s=ie(t);try{const r=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ce(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);by(s,e,n),wy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ri(s,r)}catch(r){await Si(r)}}function wy(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function by(t,e,n){const s=ie(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Ey(t,s)})}function Ey(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(cy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Pu(t))}function ef(t,e,n){for(const s of n)s instanceof yy?(t.cc.addReference(s.key,e),l1(t,s)):s instanceof vy?(j("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Ey(t,s.key)):Z()}function l1(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.rc.add(s),Pu(t))}function Pu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new z(Se.fromString(e)),s=t.lc.next();t.uc.set(s,new e1(n)),t.oc=t.oc.insert(n,s),ay(t.remoteStore,new rs(fn(vu(n.path)),s,2,pu.ct))}}async function Ri(t,e,n){const s=ie(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Cu.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ci(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);l.Li=l.Li.insert(h,_)}}}(s.localStore,i))}async function u1(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await sy(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new F(b.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ri(n,s.Qi)}}function h1(t,e){const n=ie(t),s=n.uc.get(e);if(s&&s.ec)return le().add(s.key);{let r=le();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function d1(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_y.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o1.bind(null,e),e.nc.zo=YA.bind(null,e.eventManager),e.nc.wc=QA.bind(null,e.eventManager),e}function f1(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c1.bind(null,e),e}class tf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bA(this.persistence,new _A,e.initialUser,this.serializer)}createPersistence(e){return new yA(Su.Fs,this.serializer)}createSharedClientState(e){return new kA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class p1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=u1.bind(null,this.syncEngine),await GA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JA}createDatastore(e){const n=Da(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new OA(r));var r;return function(i,o,a,c){return new xA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Zd(this.syncEngine,a,0),o=Yd.D()?new Yd:new NA,new UA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new t1(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);j("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ni(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Eg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Du(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hc(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await sy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await y1(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qd(e.remoteStore,i)),t._onlineComponents=e}function g1(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function y1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!g1(n))throw n;Mo("Error using user provided cache. Falling back to memory cache: "+n),await hc(t,new tf)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await hc(t,new tf);return t._offlineComponents}async function Ty(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await nf(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await nf(t,new p1))),t._onlineComponents}function v1(t){return Ty(t).then(e=>e.syncEngine)}async function Sy(t){const e=await Ty(t),n=e.eventManager;return n.onListen=n1.bind(null,e.syncEngine),n.onUnlisten=r1.bind(null,e.syncEngine),n}function _1(t,e,n={}){const s=new an;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Iy({next:h=>{i.enqueueAndForget(()=>my(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new F(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new gy(vu(o.path),l,{includeMetadataChanges:!0,xu:!0});return py(r,u)}(await Sy(t),t.asyncQueue,e,n,s)),s.promise}function w1(t,e,n={}){const s=new an;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Iy({next:h=>{i.enqueueAndForget(()=>my(r,u)),h.fromCache&&a.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new gy(o,l,{includeMetadataChanges:!0,xu:!0});return py(r,u)}(await Sy(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e,n){if(!n)throw new F(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function b1(t,e,n,s){if(e===!0&&s===!0)throw new F(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rf(t){if(!z.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function of(t){if(z.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ma(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ma(t);throw new F(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,b1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KS;switch(n.type){case"firstParty":return new YS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sf.get(e);n&&(j("ComponentProvider","Removing Datastore"),sf.delete(e),n.terminate())}(this),Promise.resolve()}}function E1(t,e,n,s={}){var r;const i=(t=Un(t,xa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=ab(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new GS(new bg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class gs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Dn extends gs{constructor(e,n,s){super(e,n,vu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new z(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function I1(t,e,...n){if(t=dt(t),Cy("collection","path",e),t instanceof xa){const s=Se.fromString(e,...n);return of(s),new Dn(t,null,s)}{if(!(t instanceof mt||t instanceof Dn))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return of(s),new Dn(t.firestore,null,s)}}function Mu(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Eg.A()),Cy("doc","path",e),t instanceof xa){const s=Se.fromString(e,...n);return rf(s),new mt(t,null,new z(s))}{if(!(t instanceof mt||t instanceof Dn))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return rf(s),new mt(t.firestore,t instanceof Dn?t.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new iy(this,"async_queue_retry"),this.qc=()=>{const n=uc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new an;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ci(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw dn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Ru.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&Z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Di extends xa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new T1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ay(this),this._firestoreClient.terminate()}}function S1(t,e){const n=typeof t=="object"?t:$p(),s=typeof t=="string"?t:e||"(default)",r=xl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rb("firestore");i&&E1(r,...i)}return r}function xu(t){return t._firestoreClient||Ay(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ay(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new lC(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new m1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(lt.fromBase64String(e))}catch(n){throw new F(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=/^__.*__$/;class A1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function Ny(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Fu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Bo(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Ny(this.Yc)&&C1.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class k1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Da(e)}ua(e,n,s,r=!1){return new Fu({Yc:e,methodName:n,oa:s,path:st.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ry(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new k1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function N1(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);Py("Data must be an object, but it was:",o,s);const a=Dy(s,o);let c,l;if(i.merge)c=new Vt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=D1(e,h,n);if(!o.contains(d))throw new F(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);P1(u,d)||u.push(d)}c=new Vt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new A1(new kt(a),c,l)}function R1(t,e,n,s=!1){return $u(n,t.ua(s?4:3,e))}function $u(t,e){if(Oy(t=dt(t)))return Py("Unsupported field value:",e,t),Dy(t,e);if(t instanceof ky)return function(n,s){if(!Ny(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=$u(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kC(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Be.fromDate(n);return{timestampValue:$o(s.serializer,r)}}if(n instanceof Be){const r=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(s.serializer,r)}}if(n instanceof Uu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:Qg(s.serializer,n._byteString)};if(n instanceof mt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ma(n)}`)}(t,e)}function Dy(t,e){const n={};return Ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(s,r)=>{const i=$u(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Uu||t instanceof er||t instanceof mt||t instanceof ky)}function Py(t,e,n){if(!Oy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ma(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function D1(t,e,n){if((e=dt(e))instanceof Lu)return e._internalPath;if(typeof e=="string")return My(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const O1=new RegExp("[~\\*/\\[\\]]");function My(t,e,n){if(e.search(O1)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lu(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(b.INVALID_ARGUMENT,a+t+c)}function P1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M1 extends xy{data(){return super.data()}}function Vu(t,e){return typeof e=="string"?My(t,e):e instanceof Lu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bu{}class Ly extends Bu{}function L1(t,e,...n){let s=[];e instanceof Bu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Hu).length,o=r.filter(a=>a instanceof ju).length;if(i>1||i>0&&o>0)throw new F(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ju extends Ly{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ju(e,n,s)}_apply(e){const n=this._parse(e);return Uy(e._query,n),new gs(e.firestore,e.converter,el(e._query,n))}_parse(e){const n=Ry(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){lf(u,l);const d=[];for(const m of u)d.push(cf(a,r,m));h={arrayValue:{values:d}}}else h=cf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||lf(u,l),h=R1(o,i,u,l==="in"||l==="not-in");return Fe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Hu extends Bu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Uy(i,a),i=el(i,a)}(e._query,n),new gs(e.firestore,e.converter,el(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qu extends Ly{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Us(r,i);return function(a,c){if(_u(a)===null){const l=Sa(a);l!==null&&Fy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new pr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function U1(t,e="asc"){const n=e,s=Vu("orderBy",t);return qu._create(s,n)}function cf(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new F(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pg(e)&&n.indexOf("/")!==-1)throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Se.fromString(n));if(!z.isDocumentKey(s))throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Pd(t,new z(s))}if(n instanceof mt)return Pd(t,n._key);throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ma(n)}.`)}function lf(t,e){if(!Array.isArray(t)||t.length===0)throw new F(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uy(t,e){if(e.isInequality()){const s=Sa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=_u(t);i!==null&&Fy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Fy(t,e,n){if(!n.isEqual(e))throw new F(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class F1{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const s={};return fr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Uu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const n=xn(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Ce(ny(s));const r=new oi(s.get(1),s.get(3)),i=new z(s.popFirst(5));return r.isEqual(n)||dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $y extends xy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ao extends $y{data(e={}){return super.data(e)}}class V1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ao(this._firestore,this._userDataWriter,s.key,s,new Nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:B1(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function B1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){t=Un(t,mt);const e=Un(t.firestore,Di);return _1(xu(e),t._key).then(n=>K1(e,t,n))}class Vy extends F1{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function H1(t){t=Un(t,gs);const e=Un(t.firestore,Di),n=xu(e),s=new Vy(e);return x1(t._query),w1(n,t._query).then(r=>new V1(e,s,t,r))}function q1(t,e,n){t=Un(t,mt);const s=Un(t.firestore,Di),r=$1(t.converter,e,n);return By(s,[N1(Ry(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Yt.none())])}function z1(t){return By(Un(t.firestore,Di),[new wu(t._key,Yt.none())])}function By(t,e){return function(n,s){const r=new an;return n.asyncQueue.enqueueAndForget(async()=>i1(await v1(n),s,r)),r.promise}(xu(t),e)}function K1(t,e,n){const s=n.docs.get(e._key),r=new Vy(t);return new $y(t,r,e._key,s,new Nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){dr=n})(di),zs(new is("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Di(new WS(n.getProvider("auth-internal")),new XS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rn(kd,"3.10.0",t),Rn(kd,"3.10.0","esm2017")})();const G1={apiKey:"AIzaSyA1edFnLIXTMe98ey2m1XnS3de0xTzX17E",authDomain:"pja-golf-tournament.firebaseapp.com",projectId:"pja-golf-tournament",storageBucket:"pja-golf-tournament.appspot.com",messagingSenderId:"191775654052",appId:"1:191775654052:web:4d08bdb790677759ad2631"},zu=Fp(G1),Oi=S1(zu),W1=Xr();async function jy(t,e){const n=Mu(t,"admins",e);return(await j1(n)).exists()?"admin":"user"}async function J1(t){const e=I1(Oi,t),n=L1(e,U1("teamName","asc")),s=await H1(n);let r=[];return s.forEach(i=>{const o={};o[i.id]=i.data(),r.push(o)}),r}async function Y1(t,e,n=null){const s=Mu(Oi,t,e);n.id=self.crypto.randomUUID(),console.log(n),q1(s,n,{merge:!0}).then(()=>(console.log("Document has been added successfully"),!0)).catch(r=>(console.log(r),!1))}async function Q1(t,e){try{if(await z1(Mu(Oi,t,e)))return!0}catch(n){throw n}}const X1=Xr(zu),Ut=z0({state:{user:{userData:{},userLoggedIn:!1}},mutations:{setUser(t,e){if(e)for(const[n,s]of Object.entries(e))t.user.userData[n]=s;else t.user.userData={},t.user.userLoggedIn=!1;console.log("store user commit"),console.log(t.user)},setUserLoggedIn(t,e){t.user.userLoggedIn=e},setPermissionLevel(t,e){t.user.userData.permissionLevel=e}},actions:{async logOut(t){await fI(X1),t.commit("setUser",null)},async fetchUser(t,e){t.commit("setUserLoggedIn",e!==null),e?t.commit("setUser",e):t.commit("setUser",null)}},getters:{checkAdmin(t){return t.user.userData.permissionLevel==="admin"},getUser(t){return t.user.userData},getLoginState(t){return t.user.userLoggedIn}}}),Tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Z1={props:["alert"],methods:{closeModal(t){t.target.closest(".modal").style=""},rerouteAndClose(t){this.closeModal(t),this.$router.push(`${this.alert.alertOptions.action.target}`)}}},ek={class:"modal show fade",style:{display:"block",opacity:"1"},tabindex:"-1",role:"dialog"},tk={class:"modal-dialog",role:"document"},nk={class:"modal-content"},sk={class:"modal-header"},rk={class:"modal-title"},ik=g("span",{"aria-hidden":"true"},"×",-1),ok=[ik],ak={class:"modal-body"},ck={class:"modal-footer"};function lk(t,e,n,s,r,i){return W(),Q("div",ek,[g("div",tk,[g("div",nk,[g("div",sk,[g("h5",rk,[g("p",null,Ge(n.alert.alertOptions.title),1)]),n.alert.alertOptions.removable?(W(),Q("button",{key:0,type:"button",class:"close",onClick:e[0]||(e[0]=(...o)=>i.closeModal&&i.closeModal(...o)),"aria-label":"Close"},ok)):Oe("",!0)]),g("div",ak,[g("p",null,Ge(n.alert.alertOptions.body),1)]),g("div",ck,[g("button",{onClick:e[1]||(e[1]=(...o)=>i.rerouteAndClose&&i.rerouteAndClose(...o)),type:"button",class:"btn btn-primary"},[g("p",null,Ge(n.alert.alertOptions.action.buttonText),1)])])])])])}const uk=Tt(Z1,[["render",lk]]),hk={name:"vuex3",data(){return{alert:{showAlert:!1,alertOptions:{type:"",title:"",body:"",removable:null,action:{}}}}},computed:K0(["user"]),mounted(){},unmounted(){this.unsubscribe()}},dk=Object.assign(hk,{setup(t){return(e,n)=>{const s=us("router-view");return W(),Q(ve,null,[e.alert.showAlert?(W(),Sl(uk,{key:0,alert:e.alert},null,8,["alert"])):Oe("",!0),re(s)],64)}}}),fk=new Promise(t=>{W1.onAuthStateChanged(async e=>{if(Ut.dispatch("fetchUser",e),e){const n=await jy(Oi,Ut.state.user.userData.phoneNumber);Ut.commit("setPermissionLevel",n),console.log("user set in store"),console.log(Ut.state.user),t(e)}else console.log("user null / logged out"),console.log(Ut.state.user),t(Ut.getters.getLoginState)})}),pk="/assets/logo-c8d0607d.svg",mk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAVCAYAAAB17tGhAAAABHNCSVQICAgIfAhkiAAACllJREFUaEOtmgvwp1MZx/evKAm5RVFtlOR+D5vGErEsuURLJWkUkhnXyGXccqtMbZRb04VNSSokKaEoRMu4M1rrXlKoEPr3+bxzzuv8zj7nt7/Z8cw88/7e9/2e59ye89ze39j4+PjSEyZMWDDxG7jKS8DLwdeOjY3dxrUn8K/jZnF4Sfit8Prw++E14S3A31riq7aLcr8qvA38AXh5eCH4GfhO+MfwFch4sJZBv4vw7AtpfOXrF7j5SpKxItet4A/BK8FvhJ+C/wifidzfBnJts09jzF/k+ctpzFOSXPGvhWfBP4RnIHe27RnjmxJ2KtdN4XfAr4f/Cl8Lfxu+Dvx4o7/uMXLenOQ4j43gd8Gu03/hh+A/wD+Hb0LW37OsMRrexI0b5ybJC8CvgcfgowEfW3YM/kTud4PdGBdrvuL9leC3qAdKG2XtACtrhdRPNJ//8fAJeG/k/Kzq142/B3YhS3qem93hvWAVyzHZX03/5sGRyD2tkrsH9y5yRI55f3jthlw35VF4W9gD8GVYJXINaxL7L/gQxvCtRn9u5Kd5dxjsnszfmIuyXoTvh/dA3o3KczOv4DrHBqTOLgS4c9kx+M9w3xrMY7xblTaeho7Ae9I9UYfAKsso9DdAmyDH05rlbM+PnwSNnZhcKlWrD0/Z8vkkpfGdnMYWtfEkRBtTY1VAT1OkRDX2bh5MZgyPly9YJ62cFmaXEeXk5p767ZF3vZt5AjeHN2Z/F6CVq04nc39VA++RX582D6SFciEusLPW6g55fgdyNMkdMc5TuBw8D3LqJtsi95IkUwv0A/gjr4LcUUV4Ot3MP1Xreh33mtR5IU/oJDdzR35cCEdapWYuTMde86Kux4/uWAdUb6YmSs2PTqRm7/ewGrlaIMtJr07ff/Ed49TnbDwvM63aTEOmCqZM/dDlr5LcUYfmWrqZ16cxqPBnwHuOKiDAKXOam+nmGBg4sYg0S92Cps5dUBc2Is3NGuCfQO47+a1JicyUz7cuTrBBVr2hz/FsIzAzkaUJfRbWZNekiTUI0rT/E14KNjhrmbwdkHlxmot+zkU1qIlIf6yCGqAtAy/WwOUxiP0H/BZY2RH9h4duZncgmJuB4KXwwg387Tx3s9eA9adak4jOcjONlK6Gl22A7Nj3HYH/BJfvNrB38Xx1YfDZsMFFTQY5G2fNTDKdmEpVkidzNXCz6NOgSVMSkQv9KdgxuqGbwW6WgVBE/XyQ65z1y0bK0Tg35+HNsH342/giIhXNCF2lfBo2cDIyj+hJHjoGN8n1PJ/LNDhSPqP6DcE+Bs5N1D0YrUd0o5upFnsye/9UIT+JsH7zwH+N959vCDwF7KFpkTy9RqA1XQpmKhij0rfDB8J7B5PRh7jpQMdNCy5r9KnVcMJaBRdnEpdfwq3NXAmsUbHY93ExzI8WcjY4U4uOkgVruZfavxtQtjbeeMLNnI1MrYipRuSGDNa0Xr0c8K676x/RQ66UO25A43GPaCA9AW8e6emr6SUerJAG6elwEJFJuJLnTshw382MokC1dx1lpYU8gKuRXkR/5qGbrg920T/MxfyvlR4YA2TssMW5BJwpR0fI1aed0xjDL8BuXWCHRfy3gHMzn0Gm+e3pDZn38XytPNY0Bs2sFi+ixzuNROg3uXy2AToXgQoRZ7T1OzhKAy4Dp6kRdyqXgxry5vbYkH0vZHUR5wjj+xWYLT3BCfs5rl+Ho9N2L7j3FHJn8FsTF9HxYI8ssPotLUhEZ4Ddt8AOS3e0GlOSxbmI35rkiPSj+nfzybwOh/LjpAb+/ryZw7TOSkPu8A5+94tRCDWa2oWOf+ozNtOgYsNGp8MeG2V+DDmamDwBTZCT7jW/EvBV8JrqjB+26FaBeqVlnJroiY0B7Qi2z2vB3gDOokREFgJUYOeuNToP/mgDm12RbsZTGkXyNjWX3ycraZKtZWhFvdfkzVwrCY7613dZmjIAcHKR+dKZa+qMJp3QI1xMOVrkKVIBdPBOyD6ugW8vB59kGZz8Bl63IWx32nwvv6NvsY43ojItsYJlwBRZmTritHxpSfDdDbkq8o/SeFW+X8OWOCPaDewMxqlPN9eMDoftTgQ3kP/TxgDTClNE0/NmqiVGj5EjNo1YB/bUWHOsSV+5TeWojeiiCNG2mmwX/JHShDQGmOuURpSWtyLSr8zML5iwAUWEVYGWA2v5Tbn6bOVGZCXLCtS9CesmXg23FHQDsJ7cnLuq3BMbslcBeyf9uz6WUltp0VHgjivmZd8ekojMEHbt/QrCFRxpv+Wio+DpsLXCklygi+nUwkNPyHLBzLUiOgD8QH20BtF+ATBdoYLfw/JV88tFwXoV6wmyFBidtifBGT12BNYypYFSRJ6AyeBzhKzL0Ne1FHSZAusYnH90MMydHe+L9G/O7Ml8b2MMJ4GzRpvHO8wVukeblZt5Jg8sVtek/5Ij82pU6JeSrppRdGyQ1DIzdmxJ0FJhDlqcuAut/9Cn+SWiW2gmbUQ5UHQvuroNnMl0nrBRtCYuopvB9sqKXBfqSw2s6cqm4C0aOIbtuOi3o+jcIsESxVyGlTtngtOlKdO113S3/LBz3gn8S2D98mJ20Mo4nPOUcjOHhdONOU84mhdGfR7znuj8GG48zS1yQ02w1WCrKqYo5rtuqErjQnafq5A1rHb8fXAWMToCazHfSDKii8DulHDO2wAjUl4hF4Dto1zkWhO2NhzR5WDNg/MYjuBHbx6rBueB/XiBHZaze4rNMnQFpjAbwJEy6ebWRe6t5WZapjPfrD8xNebQnQBP5Rzf5pi83zYtGrRKVC2Z+XmZ2NuPJy6ig+i/zz/p1yCkVTTvo15wugsj734TKuGHIbdPAcB/h/d+ZovIz2rHFxtkrXfLBraWa9VLqzbqmtditZiaYxXolVyMAft1xKjSD6yj0EDgUTbQ53FvSa21WHOTb2JvQOZp8xrVjVUilakzq6lPfVAr1N8P7DcS1o/xmrio+CFkK7D6yI6Q7ekwYIrIQMlIPGMt7UXVJ62Xn6pM9XpCtutkoWNeyMBvEjKNvgc202jJCb5tLlINTEzqW/XZPCkDF+1+a3Fb3TyI7Im+ZKKOpasCBWTEPBmsFSCxBlwqo/1GNBWsibhYLcYs2GClJpVkWbBGtGI9NaZckULpU42Qu6/9YI2ijaYjsr5rcUN/3BNtXB9LlXNb97KZptXsYn/k9d+OSzOrtqrZA98vg1ENJN6NgXePGagKYiHZGqhOvPUlQ7iaq1brB/dL7YcFE26ypyJ/InNRTHn6iLUam0X7XNw2HTDlisZTR72rgOvaBWTfys3lwU24n+OvKandQLpTymKdrItr9ifCra8iNtGsGq37b4/T6bcvrvhyYDIINSAwGBlG0xHSheyjEDJVEqNI/YgRrl9ADPHdPCPBWbD1Xn2Hi3Y38ruAirZGqi0f6KTOKRbScevXWv8M0LfkRVdhd22M/1FwVpE6Su6nhTXvOxu8J0WsZrs1Xud6VnYfdd+09b9YH4Sttlk29ROaVsHT72nX6niCb0DGw9HY/w/B8gh2E2+szgAAAABJRU5ErkJggg==",gk="/assets/home-a27523c9.svg",yk="/assets/signUp-8a741f4b.svg",vk="/assets/info-61919730.svg",_k="/assets/trophy-8d875605.svg",wk="/assets/admin-d05c0f9a.svg";const bk={data(){return{userInfo:{userSignedIn:Ut.getters.getLoginState,isAdmin:Ut.getters.checkAdmin}}},methods:{openMenuHandler:function(){document.querySelector(".menu--list").classList.add("menu--open"),document.querySelector(".ui--backdrop").classList.add("backdrop--open")},menuItemSelectHandler:function(t){document.querySelector(".menu--item.selected").classList.remove("selected"),console.log(t)},closeMenuHandler:function(){document.querySelector(".menu--open").classList.remove("menu--open"),document.querySelector(".ui--backdrop").classList.remove("backdrop--open")},signOutHandler:async function(){await Ut.dispatch("logOut"),this.closeMenuHandler(),this.$router.push("/"),location.reload()}}},yr=t=>(ir("data-v-7626b04e"),t=t(),or(),t),Ek={id:"menu",class:"menu--list"},Ik={class:"menu--row"},Tk={class:"menu--item"},Sk=yr(()=>g("img",{src:gk,alt:"Home"},null,-1)),Ck={class:"menu--item"},Ak=yr(()=>g("img",{src:yk,alt:"Sign up"},null,-1)),kk={class:"menu--row"},Nk={class:"menu--item"},Rk=yr(()=>g("img",{src:vk,alt:"About"},null,-1)),Dk={class:"menu--item"},Ok=yr(()=>g("img",{src:_k,alt:"Winner's Circle"},null,-1)),Pk={class:"menu--row"},Mk={key:0,class:"menu--item"},xk=yr(()=>g("img",{src:wk,alt:"admin page"},null,-1)),Lk={key:1,class:"menu--item"},Uk=yr(()=>g("div",{id:"menu--bg",class:"ui--backdrop"},null,-1));function Fk(t,e,n,s,r,i){const o=us("router-link");return W(),Q(ve,null,[g("div",{id:"open-menu",class:"menu--toggle",onClick:e[0]||(e[0]=(...a)=>i.openMenuHandler&&i.openMenuHandler(...a))}),g("div",Ek,[g("div",Ik,[g("div",Tk,[re(o,{to:"/"},{default:bt(()=>[Sk,br(t.$slots,"navItemText",{},()=>[Re("Home")],!0)]),_:3})]),g("div",Ck,[re(o,{to:"/sign-up"},{default:bt(()=>[Ak,br(t.$slots,"navItemText",{},()=>[Re("Sign Up")],!0)]),_:3})])]),g("div",kk,[g("div",Nk,[re(o,{to:"/about"},{default:bt(()=>[Rk,br(t.$slots,"navItemText",{},()=>[Re("About")],!0)]),_:3})]),g("div",Dk,[re(o,{to:"/winners-circle"},{default:bt(()=>[Ok,br(t.$slots,"navItemText",{},()=>[Re("Winner's Circle")],!0)]),_:3})])]),g("div",Pk,[this.$store.getters.checkAdmin?(W(),Q("div",Mk,[re(o,{to:"/admin"},{default:bt(()=>[xk,br(t.$slots,"navItemText",{},()=>[Re("Admin")],!0)]),_:3})])):Oe("",!0),this.$store.getters.getLoginState?(W(),Q("div",Lk,[g("button",{id:"menu-sign-out",class:"sign-out",onClick:e[1]||(e[1]=(...a)=>i.signOutHandler&&i.signOutHandler(...a))}," Sign Out ")])):Oe("",!0)]),g("span",{class:"delete",onClick:e[2]||(e[2]=(...a)=>i.closeMenuHandler&&i.closeMenuHandler(...a))})]),Uk],64)}const Hy=Tt(bk,[["render",Fk],["__scopeId","data-v-7626b04e"]]);const $k={class:"nav-container"},Vk={__name:"mainNav",setup(t){return(e,n)=>(W(),Q("div",$k,[re(Hy)]))}},Bk=Tt(Vk,[["__scopeId","data-v-abf67b92"]]);const vt=t=>(ir("data-v-d8daa5a0"),t=t(),or(),t),jk={class:"top-content"},Hk=vt(()=>g("div",{class:"logo py-3"},[g("img",{src:pk,alt:"PJA logo"})],-1)),qk={class:"top-info row py-3"},zk={class:"col-md-6 col-12 info--item"},Kk=vt(()=>g("div",{class:"col-md-6 col-12 info--item"},[g("p",null,"100+ Players")],-1)),Gk=vt(()=>g("div",{class:"col-md-6 col-12 info--item"},[g("p",null,"Trophies Awarded")],-1)),Wk=vt(()=>g("div",{class:"col-md-6 col-12 info--item"},[g("p",null,"Charitable Donations")],-1)),Jk=vt(()=>g("p",{class:"pt-3 mb-0"}," The PJA Tournament is organized by the Vitello family, and growing annually thanks to participation of amazing family and friends. ",-1)),Yk={class:"home"},Qk={class:"container info-container"},Xk={class:"card"},Zk={class:"button-container mb-4"},eN=vt(()=>g("small",{class:"text-center d-block w-100"},"(max 4 players)",-1)),tN={class:"card sub--card entry--info"},nN={class:"row"},sN=vt(()=>g("div",{class:"col-md-6 col-12"},[g("h1",null,"Entry Deadline:"),g("h2",null," September 31st, 2023 ")],-1)),rN={class:"col-md-6 col-12"},iN=vt(()=>g("h2",null,"When & where?",-1)),oN=vt(()=>g("p",null,"SHOTGUN START @ 8AM",-1)),aN={class:"card pricing"},cN={class:"card sub--card"},lN={class:"row"},uN=vt(()=>g("div",{class:"col-md-6 col-12"},[g("h1",null,"Pricing"),g("h2",null,"Entry fee: $85.00")],-1)),hN={class:"col-md-6 col-12"},dN=vt(()=>g("h2",null,"What's included:",-1)),fN=ta('<div class="row pricing--payment" data-v-d8daa5a0><div class="col-md-6 col-12" data-v-d8daa5a0><h2 data-v-d8daa5a0>Payment Methods</h2><h5 data-v-d8daa5a0>Check payable to:</h5><ul data-v-d8daa5a0><li data-v-d8daa5a0>John Vitello</li><li data-v-d8daa5a0>P.O Box 7009</li><li data-v-d8daa5a0>Meriden, CT, 06450</li><li data-v-d8daa5a0><a href="mailto:jayvee1@att.net" data-v-d8daa5a0>jayvee1@att.net</a></li></ul></div><div class="col-md-6 col-12" data-v-d8daa5a0><img src="'+mk+'" alt="Venmo Logo" data-v-d8daa5a0><p data-v-d8daa5a0>@PJA-tournament</p><div id="venmo" data-v-d8daa5a0></div></div></div>',1),pN=ta('<div class="card rules" data-v-d8daa5a0><div class="card sub--card" data-v-d8daa5a0><div class="row" data-v-d8daa5a0><div class="col-md-6 col-12" data-v-d8daa5a0><h2 data-v-d8daa5a0>Rules</h2><ul data-v-d8daa5a0><li data-v-d8daa5a0>Teams of four.</li><li data-v-d8daa5a0>Scramble (best ball) format.</li><li data-v-d8daa5a0>Men&#39;s and Co-ed Divisions available.</li><li data-v-d8daa5a0>Incomplete teams will be joined to make a foursome.</li><li data-v-d8daa5a0>Have fun!</li></ul></div><div class="col-md-6 col-12" data-v-d8daa5a0><h2 data-v-d8daa5a0>Questions?</h2><p data-v-d8daa5a0>Reach out to any of the tournament admins!</p><ul data-v-d8daa5a0><li data-v-d8daa5a0>John Vitello</li><li data-v-d8daa5a0>Al Vitello</li><li data-v-d8daa5a0>Paul Vitello</li><li data-v-d8daa5a0>Janice Vitello</li><li data-v-d8daa5a0>Matt Vitello</li><li data-v-d8daa5a0>Nicole Vitello</li><li data-v-d8daa5a0>Anthony Lowell</li></ul></div></div></div></div>',1),mN={class:"wrap-up"},gN={class:"wrap-up--text text-center"},yN=vt(()=>g("h2",null,"Ready to have some fun?",-1)),vN=vt(()=>g("h5",{class:"my-4"},"Sign up and get started",-1)),_N={class:"button-container my-4"},wN=vt(()=>g("p",{class:"text-center d-block w-100"},"(max 4 players)",-1)),bN={data(){return{date:"October 7th, 2023",time:"10:00am",golfCourse:"East Mountain Golf Course",golfCourseAddress:"171 E Mountain Rd, Waterbury, CT 06706",pricing:{ticketPrice:"$85.00",addOns:["$10 Pro Shop credit","Coffee & at check-in","Golf Cart (per 1-2 players)","Snacks and drinks at the tee boxes","Trophies (1st, 2nd, 3rd place per division, plus longest drive and closest to pin for both front and back 9)","All proceeds after operational expenses will be donated to the Valley Community Fund"],trophies:["First Place","Second Place","Third Place","longest drive (front 9)","longest drive (back 9)","closest to pin (front 9)","closest to pin  (back 9)"]}}},computed:{outputDate(){return this.date},outputTime(){return this.time},outputGolfCourse(){return this.golfCourse},outputGolfCourseAddress(){return this.golfCourseAddress},outputPrice(){return this.pricing.ticketPrice}}},EN=Object.assign(bN,{__name:"Home",setup(t){return(e,n)=>{const s=us("router-link");return W(),Q(ve,null,[re(Bk),g("header",jk,[Hk,g("div",qk,[g("div",zk,[g("p",null,Ge(e.outputDate),1)]),Kk,Gk,Wk,Jk,re(s,{to:"/about"},{default:bt(()=>[Re("Learn More")]),_:1})])]),g("div",Yk,[g("div",Qk,[g("div",Xk,[g("div",Zk,[g("button",null,[re(s,{to:"/sign-up"},{default:bt(()=>[Re("SIGN UP")]),_:1})]),eN]),g("div",tN,[g("div",nN,[sN,g("div",rN,[iN,g("p",null,Ge(e.outputDate),1),oN,g("p",null,Ge(e.outputGolfCourse)+",",1),g("p",null,Ge(e.outputGolfCourseAddress),1)])])])]),g("div",aN,[g("div",cN,[g("div",lN,[uN,g("div",hN,[dN,g("ul",null,[(W(!0),Q(ve,null,Bs(e.pricing.addOns,r=>(W(),Q("li",null,Ge(r),1))),256))])])]),fN])]),pN,g("div",mN,[g("div",gN,[yN,vN,g("div",_N,[g("button",null,[re(s,{to:"/sign-up"},{default:bt(()=>[Re("SIGN UP")]),_:1})]),wN])])])])])],64)}}}),IN=Tt(EN,[["__scopeId","data-v-d8daa5a0"]]),TN="/assets/logo-secondary-979fcede.svg";const SN=t=>(ir("data-v-b46cc0c7"),t=t(),or(),t),CN={class:"nav-container"},AN=SN(()=>g("img",{src:TN,alt:"PJA Tournament logo"},null,-1)),kN={__name:"secondaryNav",setup(t){return(e,n)=>(W(),Q("nav",CN,[AN,re(Hy)]))}},vr=Tt(kN,[["__scopeId","data-v-b46cc0c7"]]);const ys=t=>(ir("data-v-f3fc3ca4"),t=t(),or(),t),NN={class:"about"},RN=ys(()=>g("div",{class:"top-content"},[g("h1",null,[Re("A VITELLO FAMILY "),g("span",null,"TRADITION")])],-1)),DN={class:"container"},ON=ys(()=>g("h2",null,"34 Years and counting",-1)),PN={class:"mt-4"},MN=ys(()=>g("h5",null,"We are fun",-1)),xN=ys(()=>g("p",null," The PJA Tournament is fun, family golf contest with a cause. Any dollars not spent on the faciliation of the tournament go straight to the Valley League Fund, an organization that provides sports gear for underprivaleged young athletes. ",-1)),LN=ys(()=>g("h5",null,"We are inclusive",-1)),UN=ys(()=>g("p",null," We encourage men and women of all ages to join the tournament. We offer both a Men's League and a Co-Ed league to partcipate in. We accept all skill levels to come and play. We value family fun over everything else! ",-1)),FN=ys(()=>g("h5",null,"We are family",-1)),$N=ta('<div class="gallery" data-v-f3fc3ca4><h2 class="my-4 text-center" data-v-f3fc3ca4>A Look Through the Years</h2><div class="grid" data-v-f3fc3ca4><div class="grid-sizer" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width1 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width3 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width1 grid-item--height3" data-v-f3fc3ca4></div></div></div>',1),VN={mounted(){const t=[].slice.call(document.querySelectorAll(".lazy-background"));if("IntersectionObserver"in window){let e=new IntersectionObserver(function(n,s){n.forEach(function(r){r.isIntersecting&&(setTimeout(()=>{r.target.classList.add("visible")},500),e.unobserve(r.target))})});t.forEach(function(n){e.observe(n)})}}},BN=Object.assign(VN,{__name:"About",setup(t){return(e,n)=>{const s=us("router-link");return W(),Q(ve,null,[re(vr),g("div",NN,[RN,g("div",DN,[ON,g("div",PN,[MN,xN,LN,UN,FN,g("p",null,[Re(" For 30+ years this tournament has grown to be a can't-miss for our family and friends. In 2022, we had a record number of golfers attend, with over 100 players joining and playing for both fun and philanthropy. We plan to continue to keep the tradition alive and well for years to come. If you are a long time participant, or are just seeing what we're about, we encourage you to "),re(s,{to:"/sign-up"},{default:bt(()=>[Re("sign up")]),_:1}),Re(" and join us on the day of the tournament. ")])])]),$N])],64)}}}),jN=Tt(BN,[["__scopeId","data-v-f3fc3ca4"]]);var HN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qN={exports:{}};/*!
 * vue-simple-spinner v1.2.10 (https://github.com/dzwillia/vue-simple-spinner)
 * (c) 2018 David Z. Williams
 * Released under the MIT License.
 */(function(t,e){(function(s,r){t.exports=r()})(HN,function(){return function(n){var s={};function r(i){if(s[i])return s[i].exports;var o=s[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=s,r.d=function(i,o,a){r.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:a})},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=0)}([function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0}),s.VueSimpleSpinner=void 0;var i=r(1),o=a(i);function a(c){return c&&c.__esModule?c:{default:c}}typeof window<"u"&&window.Vue&&Vue.component("vue-simple-spinner",o.default),s.VueSimpleSpinner=o.default,s.default=o.default},function(n,s,r){r(2);var i=r(7)(r(8),r(9),null,null);n.exports=i.exports},function(n,s,r){var i=r(3);typeof i=="string"&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals),r(5)("d89557e4",i,!0)},function(n,s,r){s=n.exports=r(4)(),s.push([n.i,".vue-simple-spinner{transition:all .3s linear}@keyframes vue-simple-spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(n,s){n.exports=function(){var r=[];return r.toString=function(){for(var o=[],a=0;a<this.length;a++){var c=this[a];c[2]?o.push("@media "+c[2]+"{"+c[1]+"}"):o.push(c[1])}return o.join("")},r.i=function(i,o){typeof i=="string"&&(i=[[null,i,""]]);for(var a={},c=0;c<this.length;c++){var l=this[c][0];typeof l=="number"&&(a[l]=!0)}for(c=0;c<i.length;c++){var u=i[c];(typeof u[0]!="number"||!a[u[0]])&&(o&&!u[2]?u[2]=o:o&&(u[2]="("+u[2]+") and ("+o+")"),r.push(u))}},r}},function(n,s,r){var i=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(6),a={},c=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,u=0,h=!1,d=function(){},m=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(R,H,Y){h=Y;var J=o(R,H);return _(J),function(ue){for(var se=[],Ae=0;Ae<J.length;Ae++){var ze=J[Ae],$e=a[ze.id];$e.refs--,se.push($e)}ue?(J=o(R,ue),_(J)):J=[];for(var Ae=0;Ae<se.length;Ae++){var $e=se[Ae];if($e.refs===0){for(var _t=0;_t<$e.parts.length;_t++)$e.parts[_t]();delete a[$e.id]}}}};function _(R){for(var H=0;H<R.length;H++){var Y=R[H],J=a[Y.id];if(J){J.refs++;for(var L=0;L<J.parts.length;L++)J.parts[L](Y.parts[L]);for(;L<Y.parts.length;L++)J.parts.push(N(Y.parts[L]));J.parts.length>Y.parts.length&&(J.parts.length=Y.parts.length)}else{for(var ue=[],L=0;L<Y.parts.length;L++)ue.push(N(Y.parts[L]));a[Y.id]={id:Y.id,refs:1,parts:ue}}}}function v(){var R=document.createElement("style");return R.type="text/css",c.appendChild(R),R}function N(R){var H,Y,J=document.querySelector('style[data-vue-ssr-id~="'+R.id+'"]');if(J){if(h)return d;J.parentNode.removeChild(J)}if(m){var L=u++;J=l||(l=v()),H=U.bind(null,J,L,!1),Y=U.bind(null,J,L,!0)}else J=v(),H=P.bind(null,J),Y=function(){J.parentNode.removeChild(J)};return H(R),function(se){if(se){if(se.css===R.css&&se.media===R.media&&se.sourceMap===R.sourceMap)return;H(R=se)}else Y()}}var A=function(){var R=[];return function(H,Y){return R[H]=Y,R.filter(Boolean).join(`
`)}}();function U(R,H,Y,J){var L=Y?"":J.css;if(R.styleSheet)R.styleSheet.cssText=A(H,L);else{var ue=document.createTextNode(L),se=R.childNodes;se[H]&&R.removeChild(se[H]),se.length?R.insertBefore(ue,se[H]):R.appendChild(ue)}}function P(R,H){var Y=H.css,J=H.media,L=H.sourceMap;if(J&&R.setAttribute("media",J),L&&(Y+=`
/*# sourceURL=`+L.sources[0]+" */",Y+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(L))))+" */"),R.styleSheet)R.styleSheet.cssText=Y;else{for(;R.firstChild;)R.removeChild(R.firstChild);R.appendChild(document.createTextNode(Y))}}},function(n,s){n.exports=function(i,o){for(var a=[],c={},l=0;l<o.length;l++){var u=o[l],h=u[0],d=u[1],m=u[2],_=u[3],v={id:i+":"+l,css:d,media:m,sourceMap:_};c[h]?c[h].parts.push(v):a.push(c[h]={id:h,parts:[v]})}return a}},function(n,s){n.exports=function(i,o,a,c){var l,u=i=i||{},h=typeof i.default;(h==="object"||h==="function")&&(l=i,u=i.default);var d=typeof u=="function"?u.options:u;if(o&&(d.render=o.render,d.staticRenderFns=o.staticRenderFns),a&&(d._scopeId=a),c){var m=Object.create(d.computed||null);Object.keys(c).forEach(function(_){var v=c[_];m[_]=function(){return v}}),d.computed=m}return{esModule:l,exports:u,options:d}}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};s.default={props:{size:{default:32},"line-size":{type:Number,default:3},"line-bg-color":{type:String,default:"#eee"},"line-fg-color":{type:String,default:"#2196f3"},speed:{type:Number,default:.8},spacing:{type:Number,default:4},message:{type:String,default:""},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#555"}},computed:{size_px:function(){switch(this.size){case"tiny":return 12;case"small":return 16;case"medium":return 32;case"large":return 48;case"big":return 64;case"huge":return 96;case"massive":return 128}return i(this.size)?this.size:32},line_size_px:function(){switch(this.size){case"tiny":return 1;case"small":return 2;case"medium":return 3;case"large":return 3;case"big":return 4;case"huge":return 4;case"massive":return 5}return i(this.lineSize)?this.lineSize:4},text_margin_top:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return i(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px*.4),11),32)}return i(this.fontSize)?this.fontSize:13},spinner_style:function(){return{margin:"0 auto","border-radius":"100%",border:this.line_size_px+"px solid "+this.lineBgColor,"border-top":this.line_size_px+"px solid "+this.lineFgColor,width:this.size_px+"px",height:this.size_px+"px",animation:"vue-simple-spinner-spin "+this.speed+"s linear infinite"}},text_style:function(){return{"margin-top":this.text_margin_top+"px",color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":"center"}}}}},function(n,s){n.exports={render:function(){var r=this,i=r.$createElement,o=r._self._c||i;return o("div",[o("div",{staticClass:"vue-simple-spinner",style:r.spinner_style}),r._v(" "),r.message.length>0?o("div",{staticClass:"vue-simple-spinner-text",style:r.text_style},[r._v(r._s(r.message))]):r._e()])},staticRenderFns:[]}}]).default})})(qN);const Dt=t=>(ir("data-v-a103d24a"),t=t(),or(),t),zN=Dt(()=>g("h1",null,"Sign Up",-1)),KN={key:0},GN={key:1},WN={class:"form-inner"},JN={key:0,class:"error-list error"},YN=Dt(()=>g("span",null,"Please correct the following error(s):",-1)),QN={key:1,id:"players",class:"form-inset"},XN={key:0,class:"form-control card"},ZN=Dt(()=>g("h2",null,"Player 1",-1)),eR={key:0,class:"button-container"},tR={key:1,class:"form-control card"},nR=Dt(()=>g("h2",null,"Player 2",-1)),sR={key:0,class:"button-container"},rR={key:2,class:"form-control card"},iR=Dt(()=>g("h2",null,"Player 3",-1)),oR={key:0,class:"button-container"},aR={key:3,class:"form-control card"},cR=Dt(()=>g("h2",null,"Player 4",-1)),lR={key:0,class:"button-container"},uR={key:2,class:"form-control card card--summary"},hR={class:"row"},dR={key:3,class:"form-control card"},fR=Dt(()=>g("h2",null,"Choose Your Division",-1)),pR=Dt(()=>g("option",{value:"mens"},"Men's Division",-1)),mR=Dt(()=>g("option",{value:"coed"},"Co-ed Division",-1)),gR=[pR,mR],yR=Dt(()=>g("h2",null,"Team Name",-1)),vR=Dt(()=>g("p",null," If you leave this blank, your team name will be Player 1’s full name. Ex: Team John Smith ",-1)),_R=Dt(()=>g("button",{type:"submit"},"Sign Up",-1)),wR={data(){return{errors:[],numOfPlayers:1,players:{player1__firstName:null,player1__lastName:null,player2__firstName:null,player2__lastName:null,player3__firstName:null,player3__lastName:null,player4__firstName:null,player4__lastName:null},playersAdded:!1,teamName:null,division:"mens",needsGrouping:!1}},watch:{player1__firstName(t){this.player1__firstName=t,this.checkPlayerName(t)},player1__lastName(t){this.player1__lastName=t,this.checkPlayerName(t)},player2__firstName(t){this.player2__firstName=t,this.checkPlayerName(t)},player2__lastName(t){this.player2__lastName=t,this.checkPlayerName(t)},player3__firstName(t){this.player3__firstName=t,this.checkPlayerName(t)},player3__lastName(t){this.player3__lastName=t,this.checkPlayerName(t)},player4__firstName(t){this.player4__firstName=t,this.checkPlayerName(t)},player4__lastName(t){this.player4__lastName=t,this.checkPlayerName(t)}},methods:{checkPlayerName:function(t){return!(t===null||t.length==0||t.match(/\d+/g))},checkPlayerForm:function(t){t.preventDefault();for(let e=0;e<=this.numOfPlayers-1;e++){const n=this.checkPlayerName(this.players[`player${e+1}__firstName`]),s=this.checkPlayerName(this.players[`player${e+1}__lastName`]);!n||!s?this.addError("Please enter a first and last name for each player."):this.errors=[]}if(!this.errors.length)return this.playersAdded=!0,!0},checkForm:function(t){this.numOfPlayers&&this.players.player1__firstName&&this.players.player1__lastName&&this.division&&(t.preventDefault(),this.removeErrors(),this.preProcessData()),this.division||this.errors.push("Please choose a division to be entered in."),t.preventDefault()},addError:function(t){if(this.errors.length>0)for(const e of this.errors){if(e&&e===t)return;this.errors.push(t)}else this.errors.push(t)},removeErrors:function(t){this.errors=[]},preProcessData:function(){let t=Number(this.numOfPlayers);this.teamObj={};const e=[];switch(t){case 1:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName});break;case 2:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName});break;case 3:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName}),e.push({first_name:this.players.player3__firstName,last_name:this.players.player3__lastName});break;case 4:e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName}),e.push({first_name:this.players.player3__firstName,last_name:this.players.player3__lastName}),e.push({first_name:this.players.player4__firstName,last_name:this.players.player4__lastName});break}this.numOfPlayers=Number(this.numOfPlayers),e.forEach((n,s,r)=>{let i=n.first_name[0].toUpperCase()+n.first_name.substring(1),o=n.last_name[0].toUpperCase()+n.last_name.substring(1);n.first_name=i,n.last_name=o}),this.teamName||(this.teamName=`${e[0].first_name} ${e[0].last_name}'s Team`),this.teamObj.players=e,this.teamObj.numOfPlayers=this.numOfPlayers,this.teamObj.needsGrouping=this.needsGrouping,this.teamObj.teamName=this.teamName,this.teamObj.division=this.division,console.log(this.teamObj),this.formSubmitHandler()},formSubmitHandler:async function(){const t=this.teamObj;Y1(`${t.division}-league`,t.teamName,t).then(e=>{if(e){let n="";t.players.forEach((s,r,i)=>{r<i.length-1?n+=`${s.first_name} ${s.last_name}|`:n+=`${s.first_name} ${s.last_name}`}),this.$router.push({path:"/sign-up-success",query:{players:n,division:t.division,teamName:t.teamName}})}}).catch(e=>{console.error(error)})}}},bR=Object.assign(wR,{__name:"teamSignUpForm",setup(t){return yc("#003566"),yc("#FFC300"),(e,n)=>(W(),Q("form",{onSubmit:n[20]||(n[20]=(...s)=>e.checkForm&&e.checkForm(...s))},[zN,e.playersAdded?Oe("",!0):(W(),Q("p",KN,"Choose your squad")),e.playersAdded?(W(),Q("p",GN,"Choose your division and team name")):Oe("",!0),g("div",WN,[e.errors.length?(W(),Q("span",JN,[YN,g("ul",null,[(W(!0),Q(ve,null,Bs(e.errors,s=>(W(),Q("li",null,Ge(s),1))),256))])])):Oe("",!0),e.playersAdded?Oe("",!0):(W(),Q("div",QN,[e.numOfPlayers>=1?(W(),Q("div",XN,[ZN,Ct(g("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.players.player1__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Lt,e.players.player1__firstName]]),Ct(g("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.players.player1__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Lt,e.players.player1__lastName]]),e.numOfPlayers===1?(W(),Q("div",eR,[g("button",{type:"button",onClick:n[2]||(n[2]=s=>e.numOfPlayers++)},"Add player"),g("button",{type:"submit",onClick:n[3]||(n[3]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):Oe("",!0)])):Oe("",!0),e.numOfPlayers>=2?(W(),Q("div",tR,[nR,Ct(g("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>e.players.player2__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Lt,e.players.player2__firstName]]),Ct(g("input",{"onUpdate:modelValue":n[5]||(n[5]=s=>e.players.player2__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Lt,e.players.player2__lastName]]),e.numOfPlayers===2?(W(),Q("div",sR,[g("button",{type:"button",onClick:n[6]||(n[6]=s=>e.numOfPlayers++)},"Add player"),g("button",{type:"submit",onClick:n[7]||(n[7]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):Oe("",!0),g("span",{class:"delete",onClick:n[8]||(n[8]=s=>e.numOfPlayers--)})])):Oe("",!0),e.numOfPlayers>=3?(W(),Q("div",rR,[iR,Ct(g("input",{"onUpdate:modelValue":n[9]||(n[9]=s=>e.players.player3__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Lt,e.players.player3__firstName]]),Ct(g("input",{"onUpdate:modelValue":n[10]||(n[10]=s=>e.players.player3__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Lt,e.players.player3__lastName]]),e.numOfPlayers===3?(W(),Q("div",oR,[g("button",{type:"button",onClick:n[11]||(n[11]=s=>e.numOfPlayers++)},"Add player"),g("button",{type:"submit",onClick:n[12]||(n[12]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):Oe("",!0),g("span",{class:"delete",onClick:n[13]||(n[13]=s=>e.numOfPlayers--)})])):Oe("",!0),e.numOfPlayers>=4?(W(),Q("div",aR,[cR,Ct(g("input",{"onUpdate:modelValue":n[14]||(n[14]=s=>e.players.player4__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Lt,e.players.player4__firstName]]),Ct(g("input",{"onUpdate:modelValue":n[15]||(n[15]=s=>e.players.player4__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Lt,e.players.player4__lastName]]),e.numOfPlayers===4?(W(),Q("div",lR,[g("button",{type:"submit",onClick:n[16]||(n[16]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):Oe("",!0),g("span",{class:"delete",onClick:n[17]||(n[17]=s=>e.numOfPlayers--)})])):Oe("",!0)])),e.playersAdded?(W(),Q("div",uR,[g("div",hR,[(W(!0),Q(ve,null,Bs(Object.values(e.players),s=>(W(),Q("div",null,[g("p",null,Ge(s),1)]))),256))])])):Oe("",!0),e.playersAdded?(W(),Q("div",dR,[fR,Ct(g("select",{"onUpdate:modelValue":n[18]||(n[18]=s=>e.division=s),class:"input full-width"},gR,512),[[fw,e.division]]),yR,vR,Ct(g("input",{"onUpdate:modelValue":n[19]||(n[19]=s=>e.teamName=s),class:"input full-width",type:"text",placeholder:"Team Name (optional)"},null,512),[[Lt,e.teamName]]),_R])):Oe("",!0)])],32))}}),ER=Tt(bR,[["__scopeId","data-v-a103d24a"]]);const IR=Xr(zu);IR.languageCode="en";const TR=Oi,SR={data(){return{errors:[],userPhoneNumber:null,userSMSCode:null,smsCodeSent:!1}},mounted(){const t=Xr();window.recaptchaVerifier=new zI("recaptcha-container",{size:"normal",callback:e=>{this.showSMSForm()}},t),window.recaptchaVerifier.render().then(function(e){window.recaptchaWidgetId=e})},watch:{userSMSCode(t){this.userSMSCode.length===6&&this.validateSMSCode()}},methods:{openFormHandler:function(){},closeFormHandler:function(){},checkPhone:function(t){this.errors=[],this.userPhoneNumber?(this.removeErrors(),this.startSignIn()):this.errors.push("Please enter a phone number"),t.preventDefault()},removeErrors:function(){this.errors=[]},startSignIn:function(){const t=Xr(),e=window.recaptchaVerifier,n=`+1${this.userPhoneNumber}`;uI(t,jl).then(()=>{WI(t,n,e).then(s=>{window.confirmationResult=s,this.smsCodeSent=!0}).catch(s=>{console.error(s),window.recaptchaVerifier.render().then(function(r){grecaptcha.reset(r)})})})},validateSMSCode:async function(){const t=await confirmationResult.confirm(String(this.userSMSCode));t.user?(new URLSearchParams(window.location.search),Ut.commit("setPermissionLevel",await this.userPermissionsHandler(t.user.phoneNumber)),this.$router.push("/"),location.reload()):(this.errors.push("Sign in failed, please try again."),console.log(error),window.recaptchaVerifier.render().then(function(e){grecaptcha.reset(e)}))},userPermissionsHandler:async function(t){return await jy(TR,t)}}},vs=t=>(ir("data-v-d3906c4c"),t=t(),or(),t),CR={id:"phone-form"},AR={key:0,class:"form-inner"},kR=vs(()=>g("h1",{class:"text-center"},"Enter your phone number to sign in",-1)),NR=vs(()=>g("p",null," We'll send a code to your phone, you enter the code on the next screen, and you're ready to sign up! ",-1)),RR={class:"form-inset"},DR={key:0,class:"error-list error"},OR=vs(()=>g("span",null,"Please correct the following error(s):",-1)),PR={class:"form-control"},MR=vs(()=>g("div",{id:"recaptcha-container"},null,-1)),xR={key:1,class:"form-inner"},LR=vs(()=>g("h1",null,"Enter the 6-digit code",-1)),UR=vs(()=>g("br",null,null,-1)),FR={class:"form-inset"},$R={class:"form-control"},VR=vs(()=>g("div",{id:"form--bg",class:"ui--backdrop"},null,-1));function BR(t,e,n,s,r,i){const o=us("router-link");return W(),Q(ve,null,[g("form",CR,[r.smsCodeSent?Oe("",!0):(W(),Q("div",AR,[kR,NR,g("div",RR,[r.errors.length?(W(),Q("span",DR,[OR,g("ul",null,[(W(!0),Q(ve,null,Bs(r.errors,a=>(W(),Q("li",null,Ge(a),1))),256))])])):Oe("",!0),g("div",PR,[Ct(g("input",{type:"phone",id:"phoneNumber","onUpdate:modelValue":e[0]||(e[0]=a=>r.userPhoneNumber=a)},null,512),[[Lt,r.userPhoneNumber]])]),MR]),g("button",{id:"sign-in-button",type:"button",onClick:e[1]||(e[1]=(...a)=>i.checkPhone&&i.checkPhone(...a))}," Continue ")])),r.smsCodeSent?(W(),Q("div",xR,[LR,g("p",null,[Re(" Your code should arrive within a few minutes. Didn't get a code?"),UR,re(o,{to:"/sign-up"},{default:bt(()=>[Re("try again")]),_:1})]),g("div",FR,[g("div",$R,[Ct(g("input",{type:"text",id:"smsCode","onUpdate:modelValue":e[2]||(e[2]=a=>r.userSMSCode=a)},null,512),[[Lt,r.userSMSCode]])])])])):Oe("",!0)]),VR],64)}const qy=Tt(SR,[["render",BR],["__scopeId","data-v-d3906c4c"]]);const jR={class:"sign-up"},HR={class:"container"},qR={__name:"SignUp",setup(t){return(e,n)=>(W(),Q(ve,null,[re(vr),g("div",jR,[g("div",HR,[re(ER)])])],64))}},zR=Tt(qR,[["__scopeId","data-v-426ba690"]]),KR={data(){return{players:this.$route.query.players.replaceAll("%20"," ").split("%7C")}},computed:{}},GR={class:"col-12"};function WR(t,e,n,s,r,i){return W(),Q("div",GR,[g("h3",null,Ge(this.$route.query.teamName),1),g("p",null,[Re(" Entered in: "),g("span",null,Ge(this.$route.query.division),1),Re(" division ")]),g("ol",null,[(W(!0),Q(ve,null,Bs(r.players,o=>(W(),Q("li",null,Ge(o),1))),256))])])}const JR=Tt(KR,[["render",WR]]),YR={class:"sign-up__success"},QR={class:"container info-container"},XR=g("div",{class:"top-copy"},[g("h2",null,"Thanks for signing up"),g("p",null," Please take a screenshot, we'll use your team name to identify you moving forward. ")],-1),ZR={data(){return{user:null}}},eD=Object.assign(ZR,{__name:"SignUpSuccess",setup(t){return(e,n)=>{const s=us("topContent");return W(),Q("div",YR,[re(s,null,{heading:bt(()=>[Re("You're all set!")]),_:1}),g("div",QR,[XR,re(JR)])])}}}),tD={data(){return{user:null,teamsSignedUp:[],adminChoices:{division:null,teamName:null},errors:[]}},methods:{getTeamsListHandler:async function(){return await J1(this.adminChoices.division??"mens-league")},async deleteTeamHandler(t){const e=t.target.getAttribute("data-tool-target");let n;for(const r of this.teamsSignedUp)r.id===e&&(n=r);if(prompt(`Are you sure you want to delete this team?
        Type YES (all caps) below to delete.`)==="YES")await Q1(`${n.division}-league`,n.teamName).then(r=>{r?this.$router.go():this.errors.push("There was a problem deleting this team, please try again")});else return},editTeamHandler(){console.log(event)}},async mounted(){(await this.getTeamsListHandler()).forEach(e=>{const[[n,s]]=Object.entries(e),r={};r.teamName=s.teamName,r.division=s.division,r.players=`${s.players[0].first_name} ${s.players[0].last_name}`,r.needsGrouping=s.needsGrouping===!0?"yes":"no",r.id=s.id,this.teamsSignedUp.push(r)})}},nD=ta('<div class="row admin--row"><div class="admin--column"><h5>Team Name</h5></div><div class="admin--column"><h5>Players</h5></div><div class="admin--column"><h5>Division</h5></div><div class="admin--column"><h5>Needs Grouping</h5></div></div>',1),sD={class:"row admin--row"},rD={class:"admin--column"},iD={class:"admin--item"},oD={class:"admin--column"},aD={class:"admin--item"},cD={class:"admin--column"},lD={class:"admin--item"},uD={class:"admin--column"},hD={class:"admin--item"},dD={class:"admin--tools"},fD={class:"row admin--row"},pD=["data-tool-target"],mD=["data-tool-target"];function gD(t,e,n,s,r,i){return W(),Q(ve,null,[nD,(W(!0),Q(ve,null,Bs(r.teamsSignedUp,o=>(W(),Q("div",sD,[g("div",rD,[g("div",iD,[g("span",null,Ge(o.teamName),1)])]),g("div",oD,[g("div",aD,[g("span",null,Ge(o.players),1)])]),g("div",cD,[g("div",lD,[g("span",null,Ge(o.division),1)])]),g("div",uD,[g("div",hD,[g("span",null,Ge(o.needsGrouping),1)])]),g("div",dD,[g("div",fD,[g("button",{"data-tool-target":o.id,onClick:e[0]||(e[0]=(...a)=>i.deleteTeamHandler&&i.deleteTeamHandler(...a))}," DELETE TEAM ",8,pD),g("button",{"data-tool-target":o.id,onClick:e[1]||(e[1]=(...a)=>i.editTeamHandler&&i.editTeamHandler(...a))}," EDIT TEAM ",8,mD)])])]))),256))],64)}const yD=Tt(tD,[["render",gD]]);const vD={class:"container"},_D={__name:"Admin",setup(t){return(e,n)=>(W(),Q(ve,null,[re(vr),g("div",vD,[re(yD)])],64))}};const wD={class:"admin admin--sign-in"},bD={class:"container"},ED={__name:"adminSignIn",setup(t){return(e,n)=>(W(),Q(ve,null,[re(vr),g("div",wD,[g("div",bD,[re(qy)])])],64))}},ID=Tt(ED,[["__scopeId","data-v-d58ea8b2"]]);const TD={class:"winnders-circle"},SD=g("div",{class:"top--content"},[g("h1",null,[Re("The "),g("span",null,"winners"),Re(),g("span",{class:"large"},"circle")])],-1),CD={class:"container"},AD={class:"top-copy"},kD=g("div",{id:"dataOutput",class:"mt-4"},[g("div",{class:"line"})],-1),ND={data(){return{winners:[{year:2022,division:"Men's",team:["John Doe","John Doe","Ricky Jones","Jim Kramer"]},{year:2022,division:"Co-Ed",team:["John Doe","John Doe","Ricky Jones","Jim Kramer"]},{year:2021,division:"Men's",team:["Joe Lowell","Ryan Carey","Ethan Cheffer","Jim Carey"]},{year:2021,division:"Co-Ed",team:["Nicole Vitello","Hannah Dill","Kiarra Bonilla","Brian Dill"]},{year:2020,division:"Men's",team:["Kyle Phelan","Dennis Phelan","Steven Julius","Mark Julius"]},{year:2020,division:"Co-Ed",team:["Caitlyn Longwell","Lisa Longwell","Glenn Longwell","Matt Paolini"]},{year:2019,division:"Men's",team:["Richard Moore","Andy Vojt","Brian Glatzel","Donn Malner"]},{year:2019,division:"Co-Ed",team:["Marianne Elliott","Lisa Longwell","Donna Monks","Mary Okolo"]},{year:2018,division:"Men's",team:["Mike Cappetta","Ryan Cappetta","Kevin Mathews","Zach Bjornberg"]},{year:2018,division:"Co-Ed",team:["Lisa Longwell","Rhea Adler","Nicole Vitello","Cindy Moser"]},{year:2017,division:"Men's",team:["Del Koupf","Mike Seaver","Troy Sundwall","Mike Sundwall"]},{year:2017,division:"Co-Ed - *First year of inception",team:["Rhea Adler","Marianne Elliott","Janice Vitello","Nicole Vitello"]},{year:2016,division:"Men's",team:["Bill Cirscuolo","Mark Sytra","Troy Sundwall","Mike Sundwall"]},{year:2015,division:"Men's",team:["John Casertano","Mike Casertano","Kyle Dahn","Keith Crumb"]},{year:2014,division:"Men's",team:["John Casertano","Mike Casertano","Rick Dondero"]},{year:2013,division:"Men's",team:["John Casertano","Mike Casertano","Rick Dondero"]},{year:2012,division:"Men's",team:["Johnny Vitello","Tom Maher","Billy Mageski","Mike Sundwall"]},{year:2011,division:"Men's",team:["Rick Moore","Mike Hinckley","Pete Giannini"]},{year:2010,division:"Men's",team:["Johnny Vitello","Tom Maher","Billy Mageski","Tom Howard"]},{year:2009,division:"Men's",team:["Phil Curry","Dave LaClair","Kevin Langan","Joe Jarvie"]},{year:2008,division:"Men's",team:["Phil Curry","Joe Jarvie","Dave LaClair"]},{year:2007,division:"Men's",team:["Jonny Molchan","Jay Valentine","Jim Schmidt","Richard Schmidt"]},{year:2006,division:"Men's",team:["Jonny Molchan","Jay Valentine","Jim Schmidt","Richard Schmidt"]},{year:2005,division:"Men's",team:["John Casertano","Mike Casertano","Jeff Dahn","Bob Neibling"]},{year:2004,division:"Men's",team:["Del Koupf","Mike Seaver","Don Waldron","Mike Sundwall"]},{year:2003,division:"Men's",team:["Dennis Perrino","Steve Worley","Ed Yocher"]},{year:2002,division:"Men's",team:["Rick Schaefer","Ron Mitchell","Pete Andersen","Pete Czuchra"]},{year:2001,division:"Men's",team:["Del Koupf","Bill Criscuolo","Frank Wallaby","Mike Sundwall"]},{year:2e3,division:"Men's",team:["Del Koupf","Chris Dellavalle","Mike Silengo","Mike Sundwall"]},{year:1999,division:"Men's",team:["Del Koupf","Mike Seaver","Don Waldron","Mike Sundwall"]},{year:1998,division:"Men's",team:["Rick Diotalevi","Randy Diotalevi","Rod Diotalevi","Tino Diotalevi"]},{year:1997,division:"Men's",team:["Ed Yocher","Vin Malerba","Charley Mahoney"]},{year:1993,division:"Men's",team:["Paul Vitello","Tom Howard","Joe Mastrangelo","Adam Mastrangelo"]}]}},mounted(){const t=this.winners;for(const n of t){const s=document.createElement("div");document.createElement("div"),["winner--output","row"].forEach(l=>{s.classList.add(l)});const i=document.createElement("div");i.classList.add("year-container");const o=document.createElement("h1"),a=document.createElement("p"),c=document.createElement("div");c.classList.add("team-container"),o.textContent=n.year,a.textContent=n.division;for(const l of n.team){const u=document.createElement("span");u.textContent=l,c.appendChild(u)}i.appendChild(o),i.appendChild(a),s.appendChild(i),s.appendChild(c),document.querySelector("#dataOutput").appendChild(s)}const e=document.querySelector("#dataOutput").getBoundingClientRect().height;document.querySelector(".line").style.height=`${e}px`}},RD=Object.assign(ND,{__name:"winnersCircle",setup(t){return(e,n)=>{const s=us("router-link");return W(),Q(ve,null,[re(vr),g("div",TD,[SD,g("div",CD,[g("div",AD,[g("p",null,[Re(" Check out the past winners of our tournament! "),re(s,{to:"/sign-up"},{default:bt(()=>[Re("Sign up")]),_:1}),Re(" to get your name featured…if you can! ")])]),kD])])],64)}}});const DD={class:"sign-in"},OD={class:"container"},PD={class:"card"},MD={__name:"signIn",setup(t){return(e,n)=>(W(),Q(ve,null,[re(vr),g("div",DD,[g("div",OD,[g("div",PD,[re(qy)])])])],64))}},xD=Tt(MD,[["__scopeId","data-v-d6bf4486"]]),LD=()=>fk.then(t=>!!t);async function dc(t,e,n){const s=await LD();t.fullPath==="/sign-in"?s?n("/"):n():s?n():n("/sign-in")}const UD=A0({history:Hw(),routes:[{path:"/",name:"Home",component:IN},{path:"/about",name:"About",component:jN},{path:"/sign-up",name:"SignUp",component:zR,beforeEnter:dc},{path:"/sign-in",name:"SignIn",component:xD,beforeEnter:dc},{path:"/sign-up-success",name:"SignUp__success",component:eD},{path:"/admin/sign-in",name:"adminSignIn",component:ID},{path:"/admin",name:"admin",component:_D,beforeEnter:dc},{path:"/winners-circle",name:"winnersCircle",component:RD}]});gw(dk).use(UD).use(Ut).mount("#app");
