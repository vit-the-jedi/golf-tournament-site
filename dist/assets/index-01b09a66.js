(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function mc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function gc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?ov(s):gc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(je(t))return t;if(Ee(t))return t}}const sv=/;(?![^(]*\))/g,iv=/:([^]+)/,rv=/\/\*.*?\*\//gs;function ov(t){const e={};return t.replace(rv,"").split(sv).forEach(n=>{if(n){const s=n.split(iv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yc(t){let e="";if(je(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=yc(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lv=mc(av);function vf(t){return!!t||t===""}function cv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ko(t[s],e[s]);return n}function Ko(t,e){if(t===e)return!0;let n=th(t),s=th(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qi(t),s=qi(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?cv(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ko(t[o],e[o]))return!1}}return String(t)===String(e)}function uv(t,e){return t.findIndex(n=>Ko(n,e))}const oe=t=>je(t)?t:t==null?"":W(t)||Ee(t)&&(t.toString===bf||!se(t.toString))?JSON.stringify(t,_f,2):String(t),_f=(t,e)=>e&&e.__v_isRef?_f(t,e.value):Ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Jo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!W(e)&&!If(e)?String(e):e,Ce={},Ms=[],qt=()=>{},hv=()=>!1,dv=/^on[^a-z]/,Wo=t=>dv.test(t),vc=t=>t.startsWith("onUpdate:"),at=Object.assign,_c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fv=Object.prototype.hasOwnProperty,de=(t,e)=>fv.call(t,e),W=Array.isArray,Ls=t=>pr(t)==="[object Map]",Jo=t=>pr(t)==="[object Set]",th=t=>pr(t)==="[object Date]",se=t=>typeof t=="function",je=t=>typeof t=="string",qi=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",wf=t=>Ee(t)&&se(t.then)&&se(t.catch),bf=Object.prototype.toString,pr=t=>bf.call(t),pv=t=>pr(t).slice(8,-1),If=t=>pr(t)==="[object Object]",wc=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,eo=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mv=/-(\w)/g,tn=Qo(t=>t.replace(mv,(e,n)=>n?n.toUpperCase():"")),gv=/\B([A-Z])/g,ri=Qo(t=>t.replace(gv,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Qo(t=>t?`on${Yo(t)}`:""),Gi=(t,e)=>!Object.is(t,e),to=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},po=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nh;const yv=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $t;class vv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function _v(t,e=$t){e&&e.active&&e.effects.push(t)}function wv(){return $t}const bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ef=t=>(t.w&Un)>0,Tf=t=>(t.n&Un)>0,bv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Un},Iv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ef(i)&&!Tf(i)?i.delete(t):e[n++]=i,i.w&=~Un,i.n&=~Un}e.length=n}},vl=new WeakMap;let Ai=0,Un=1;const _l=30;let Bt;const rs=Symbol(""),wl=Symbol("");class Ic{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_v(this,s)}run(){if(!this.active)return this.fn();let e=Bt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,Dn=!0,Un=1<<++Ai,Ai<=_l?bv(this):sh(this),this.fn()}finally{Ai<=_l&&Iv(this),Un=1<<--Ai,Bt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(sh(this),this.onStop&&this.onStop(),this.active=!1)}}function sh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Cf=[];function oi(){Cf.push(Dn),Dn=!1}function ai(){const t=Cf.pop();Dn=t===void 0?!0:t}function bt(t,e,n){if(Dn&&Bt){let s=vl.get(t);s||vl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=bc()),Sf(i)}}function Sf(t,e){let n=!1;Ai<=_l?Tf(t)||(t.n|=Un,n=!Ef(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function dn(t,e,n,s,i,r){const o=vl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?wc(n)&&a.push(o.get("length")):(a.push(o.get(rs)),Ls(t)&&a.push(o.get(wl)));break;case"delete":W(t)||(a.push(o.get(rs)),Ls(t)&&a.push(o.get(wl)));break;case"set":Ls(t)&&a.push(o.get(rs));break}if(a.length===1)a[0]&&bl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);bl(bc(l))}}function bl(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&ih(s);for(const s of n)s.computed||ih(s)}function ih(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ev=mc("__proto__,__v_isRef,__isVue"),Af=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qi)),Tv=Ec(),Cv=Ec(!1,!0),Sv=Ec(!0),rh=Av();function Av(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let r=0,o=this.length;r<o;r++)bt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){oi();const s=fe(this)[e].apply(this,n);return ai(),s}}),t}function kv(t){const e=fe(this);return bt(e,"has",t),e.hasOwnProperty(t)}function Ec(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?qv:Of:e?Df:Rf).get(s))return s;const o=W(s);if(!t){if(o&&de(rh,i))return Reflect.get(rh,i,r);if(i==="hasOwnProperty")return kv}const a=Reflect.get(s,i,r);return(qi(i)?Af.has(i):Ev(i))||(t||bt(s,"get",i),e)?a:it(a)?o&&wc(i)?a:a.value:Ee(a)?t?Pf(a):li(a):a}}const Nv=kf(),Rv=kf(!0);function kf(t=!1){return function(n,s,i,r){let o=n[s];if(Gs(o)&&it(o)&&!it(i))return!1;if(!t&&(!go(i)&&!Gs(i)&&(o=fe(o),i=fe(i)),!W(n)&&it(o)&&!it(i)))return o.value=i,!0;const a=W(n)&&wc(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===fe(r)&&(a?Gi(i,o)&&dn(n,"set",s,i):dn(n,"add",s,i)),l}}function Dv(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&dn(t,"delete",e,void 0),s}function Ov(t,e){const n=Reflect.has(t,e);return(!qi(e)||!Af.has(e))&&bt(t,"has",e),n}function Pv(t){return bt(t,"iterate",W(t)?"length":rs),Reflect.ownKeys(t)}const Nf={get:Tv,set:Nv,deleteProperty:Dv,has:Ov,ownKeys:Pv},Mv={get:Sv,set(t,e){return!0},deleteProperty(t,e){return!0}},Lv=at({},Nf,{get:Cv,set:Rv}),Tc=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function $r(t,e,n=!1,s=!1){t=t.__v_raw;const i=fe(t),r=fe(e);n||(e!==r&&bt(i,"get",e),bt(i,"get",r));const{has:o}=Xo(i),a=s?Tc:n?Ac:zi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Vr(t,e=!1){const n=this.__v_raw,s=fe(n),i=fe(t);return e||(t!==i&&bt(s,"has",t),bt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Br(t,e=!1){return t=t.__v_raw,!e&&bt(fe(t),"iterate",rs),Reflect.get(t,"size",t)}function oh(t){t=fe(t);const e=fe(this);return Xo(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function ah(t,e){e=fe(e);const n=fe(this),{has:s,get:i}=Xo(n);let r=s.call(n,t);r||(t=fe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Gi(e,o)&&dn(n,"set",t,e):dn(n,"add",t,e),this}function lh(t){const e=fe(this),{has:n,get:s}=Xo(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&dn(e,"delete",t,void 0),r}function ch(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&dn(t,"clear",void 0,void 0),n}function jr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=fe(o),l=e?Tc:t?Ac:zi;return!t&&bt(a,"iterate",rs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Hr(t,e,n){return function(...s){const i=this.__v_raw,r=fe(i),o=Ls(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Tc:e?Ac:zi;return!e&&bt(r,"iterate",l?wl:rs),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function xv(){const t={get(r){return $r(this,r)},get size(){return Br(this)},has:Vr,add:oh,set:ah,delete:lh,clear:ch,forEach:jr(!1,!1)},e={get(r){return $r(this,r,!1,!0)},get size(){return Br(this)},has:Vr,add:oh,set:ah,delete:lh,clear:ch,forEach:jr(!1,!0)},n={get(r){return $r(this,r,!0)},get size(){return Br(this,!0)},has(r){return Vr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:jr(!0,!1)},s={get(r){return $r(this,r,!0,!0)},get size(){return Br(this,!0)},has(r){return Vr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hr(r,!1,!1),n[r]=Hr(r,!0,!1),e[r]=Hr(r,!1,!0),s[r]=Hr(r,!0,!0)}),[t,n,e,s]}const[Uv,Fv,$v,Vv]=xv();function Cc(t,e){const n=e?t?Vv:$v:t?Fv:Uv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const Bv={get:Cc(!1,!1)},jv={get:Cc(!1,!0)},Hv={get:Cc(!0,!1)},Rf=new WeakMap,Df=new WeakMap,Of=new WeakMap,qv=new WeakMap;function Gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zv(t){return t.__v_skip||!Object.isExtensible(t)?0:Gv(pv(t))}function li(t){return Gs(t)?t:Sc(t,!1,Nf,Bv,Rf)}function Kv(t){return Sc(t,!1,Lv,jv,Df)}function Pf(t){return Sc(t,!0,Mv,Hv,Of)}function Sc(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=zv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function xs(t){return Gs(t)?xs(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function go(t){return!!(t&&t.__v_isShallow)}function Mf(t){return xs(t)||Gs(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Lf(t){return po(t,"__v_skip",!0),t}const zi=t=>Ee(t)?li(t):t,Ac=t=>Ee(t)?Pf(t):t;function xf(t){Dn&&Bt&&(t=fe(t),Sf(t.dep||(t.dep=bc())))}function Uf(t,e){t=fe(t);const n=t.dep;n&&bl(n)}function it(t){return!!(t&&t.__v_isRef===!0)}function Il(t){return Ff(t,!1)}function Wv(t){return Ff(t,!0)}function Ff(t,e){return it(t)?t:new Jv(t,e)}class Jv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:zi(e)}get value(){return xf(this),this._value}set value(e){const n=this.__v_isShallow||go(e)||Gs(e);e=n?e:fe(e),Gi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zi(e),Uf(this))}}function Us(t){return it(t)?t.value:t}const Qv={get:(t,e,n)=>Us(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return it(i)&&!it(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $f(t){return xs(t)?t:new Proxy(t,Qv)}var Vf;class Yv{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Vf]=!1,this._dirty=!0,this.effect=new Ic(e,()=>{this._dirty||(this._dirty=!0,Uf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=fe(this);return xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Vf="__v_isReadonly";function Xv(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=qt):(s=t.get,i=t.set),new Yv(s,i,r||!i,n)}function On(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Zo(r,e,n)}return i}function Rt(t,e,n,s){if(se(t)){const r=On(t,e,n,s);return r&&wf(r)&&r.catch(o=>{Zo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Rt(t[r],e,n,s));return i}function Zo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[t,o,a]);return}}Zv(t,n,i,s)}function Zv(t,e,n,s=!0){console.error(t)}let Ki=!1,El=!1;const nt=[];let Yt=0;const Fs=[];let on=null,Yn=0;const Bf=Promise.resolve();let kc=null;function jf(t){const e=kc||Bf;return t?e.then(this?t.bind(this):t):e}function e_(t){let e=Yt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;Wi(nt[s])<t?e=s+1:n=s}return e}function Nc(t){(!nt.length||!nt.includes(t,Ki&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?nt.push(t):nt.splice(e_(t.id),0,t),Hf())}function Hf(){!Ki&&!El&&(El=!0,kc=Bf.then(Gf))}function t_(t){const e=nt.indexOf(t);e>Yt&&nt.splice(e,1)}function n_(t){W(t)?Fs.push(...t):(!on||!on.includes(t,t.allowRecurse?Yn+1:Yn))&&Fs.push(t),Hf()}function uh(t,e=Ki?Yt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function qf(t){if(Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,on){on.push(...e);return}for(on=e,on.sort((n,s)=>Wi(n)-Wi(s)),Yn=0;Yn<on.length;Yn++)on[Yn]();on=null,Yn=0}}const Wi=t=>t.id==null?1/0:t.id,s_=(t,e)=>{const n=Wi(t)-Wi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gf(t){El=!1,Ki=!0,nt.sort(s_);const e=qt;try{for(Yt=0;Yt<nt.length;Yt++){const n=nt[Yt];n&&n.active!==!1&&On(n,null,14)}}finally{Yt=0,nt.length=0,qf(),Ki=!1,kc=null,(nt.length||Fs.length)&&Gf()}}function i_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||Ce;f&&(i=n.map(g=>je(g)?g.trim():g)),d&&(i=n.map(mo))}let a,l=s[a=Ba(e)]||s[a=Ba(tn(e))];!l&&r&&(l=s[a=Ba(ri(e))]),l&&Rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(c,t,6,i)}}function zf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=zf(c,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):at(o,r),Ee(t)&&s.set(t,o),o)}function ea(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,ri(e))||de(t,e))}let We=null,ta=null;function yo(t){const e=We;return We=t,ta=t&&t.type.__scopeId||null,e}function Ot(t){ta=t}function Pt(){ta=null}function At(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wh(-1);const r=yo(e);let o;try{o=t(...i)}finally{yo(r),s._d&&wh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ja(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:g,ctx:w,inheritAttrs:_}=t;let O,R;const $=yo(t);try{if(n.shapeFlag&4){const X=i||s;O=Qt(u.call(X,X,d,r,g,f,w)),R=l}else{const X=e;O=Qt(X.length>1?X(r,{attrs:l,slots:a,emit:c}):X(r,null)),R=e.props?l:r_(l)}}catch(X){Li.length=0,Zo(X,t,1),O=te(Dt)}let L=O;if(R&&_!==!1){const X=Object.keys(R),{shapeFlag:ue}=L;X.length&&ue&7&&(o&&X.some(vc)&&(R=o_(R,o)),L=Fn(L,R))}return n.dirs&&(L=Fn(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),O=L,yo($),O}const r_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},o_=(t,e)=>{const n={};for(const s in t)(!vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function a_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!ea(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hh(s,o,c):!0:!!o;return!1}function hh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ea(n,r))return!0}return!1}function l_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const c_=t=>t.__isSuspense;function u_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):n_(t)}function no(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function un(t,e,n=!1){const s=Oe||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s.proxy):e}}const qr={};function $s(t,e,n){return Kf(t,e,n)}function Kf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){const a=wv()===(Oe==null?void 0:Oe.scope)?Oe:null;let l,c=!1,u=!1;if(it(t)?(l=()=>t.value,c=go(t)):xs(t)?(l=()=>t,s=!0):W(t)?(u=!0,c=t.some(L=>xs(L)||go(L)),l=()=>t.map(L=>{if(it(L))return L.value;if(xs(L))return ts(L);if(se(L))return On(L,a,2)})):se(t)?e?l=()=>On(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Rt(t,a,3,[f])}:l=qt,e&&s){const L=l;l=()=>ts(L())}let d,f=L=>{d=R.onStop=()=>{On(L,a,4)}},g;if(Yi)if(f=qt,e?n&&Rt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const L=rw();g=L.__watcherHandles||(L.__watcherHandles=[])}else return qt;let w=u?new Array(t.length).fill(qr):qr;const _=()=>{if(R.active)if(e){const L=R.run();(s||c||(u?L.some((X,ue)=>Gi(X,w[ue])):Gi(L,w)))&&(d&&d(),Rt(e,a,3,[L,w===qr?void 0:u&&w[0]===qr?[]:w,f]),w=L)}else R.run()};_.allowRecurse=!!e;let O;i==="sync"?O=_:i==="post"?O=()=>yt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),O=()=>Nc(_));const R=new Ic(l,O);e?n?_():w=R.run():i==="post"?yt(R.run.bind(R),a&&a.suspense):R.run();const $=()=>{R.stop(),a&&a.scope&&_c(a.scope.effects,R)};return g&&g.push($),$}function h_(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?Wf(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=Oe;zs(this);const a=Kf(i,r.bind(s),n);return o?zs(o):os(),a}function Wf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ts(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))ts(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Jo(t)||Ls(t))t.forEach(n=>{ts(n,e)});else if(If(t))for(const n in t)ts(t[n],e);return t}function d_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zf(()=>{t.isMounted=!0}),ep(()=>{t.isUnmounting=!0}),t}const St=[Function,Array],f_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:St,onEnter:St,onAfterEnter:St,onEnterCancelled:St,onBeforeLeave:St,onLeave:St,onAfterLeave:St,onLeaveCancelled:St,onBeforeAppear:St,onAppear:St,onAfterAppear:St,onAppearCancelled:St},setup(t,{slots:e}){const n=Y_(),s=d_();let i;return()=>{const r=e.default&&Qf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==Dt){o=_;break}}const a=fe(t),{mode:l}=a;if(s.isLeaving)return Ha(o);const c=dh(o);if(!c)return Ha(o);const u=Tl(c,a,s,n);Cl(c,u);const d=n.subTree,f=d&&dh(d);let g=!1;const{getTransitionKey:w}=c.type;if(w){const _=w();i===void 0?i=_:_!==i&&(i=_,g=!0)}if(f&&f.type!==Dt&&(!Xn(c,f)||g)){const _=Tl(f,a,s,n);if(Cl(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ha(o);l==="in-out"&&c.type!==Dt&&(_.delayLeave=(O,R,$)=>{const L=Jf(s,f);L[String(f.key)]=f,O._leaveCb=()=>{R(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},p_=f_;function Jf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Tl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:_,onAppear:O,onAfterAppear:R,onAppearCancelled:$}=e,L=String(t.key),X=Jf(n,t),ue=(Z,Te)=>{Z&&Rt(Z,s,9,Te)},Ne=(Z,Te)=>{const _e=Te[1];ue(Z,Te),W(Z)?Z.every(Ye=>Ye.length<=1)&&_e():Z.length<=1&&_e()},Fe={mode:r,persisted:o,beforeEnter(Z){let Te=a;if(!n.isMounted)if(i)Te=_||a;else return;Z._leaveCb&&Z._leaveCb(!0);const _e=X[L];_e&&Xn(t,_e)&&_e.el._leaveCb&&_e.el._leaveCb(),ue(Te,[Z])},enter(Z){let Te=l,_e=c,Ye=u;if(!n.isMounted)if(i)Te=O||l,_e=R||c,Ye=$||u;else return;let Xe=!1;const Lt=Z._enterCb=sn=>{Xe||(Xe=!0,sn?ue(Ye,[Z]):ue(_e,[Z]),Fe.delayedLeave&&Fe.delayedLeave(),Z._enterCb=void 0)};Te?Ne(Te,[Z,Lt]):Lt()},leave(Z,Te){const _e=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Te();ue(d,[Z]);let Ye=!1;const Xe=Z._leaveCb=Lt=>{Ye||(Ye=!0,Te(),Lt?ue(w,[Z]):ue(g,[Z]),Z._leaveCb=void 0,X[_e]===t&&delete X[_e])};X[_e]=t,f?Ne(f,[Z,Xe]):Xe()},clone(Z){return Tl(Z,e,n,s)}};return Fe}function Ha(t){if(na(t))return t=Fn(t),t.children=null,t}function dh(t){return na(t)?t.children?t.children[0]:void 0:t}function Cl(t,e){t.shapeFlag&6&&t.component?Cl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qf(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ie?(o.patchFlag&128&&i++,s=s.concat(Qf(o.children,e,a))):(e||o.type!==Dt)&&s.push(a!=null?Fn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Yf(t){return se(t)?{setup:t,name:t.name}:t}const Pi=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function m_(t,e){Xf(t,"a",e)}function g_(t,e){Xf(t,"da",e)}function Xf(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(sa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&y_(s,e,n,i),i=i.parent}}function y_(t,e,n,s){const i=sa(e,t,s,!0);tp(()=>{_c(s[e],i)},n)}function sa(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;oi(),zs(n);const a=Rt(e,n,t,o);return os(),ai(),a});return s?i.unshift(r):i.push(r),r}}const _n=t=>(e,n=Oe)=>(!Yi||t==="sp")&&sa(t,(...s)=>e(...s),n),v_=_n("bm"),Zf=_n("m"),__=_n("bu"),w_=_n("u"),ep=_n("bum"),tp=_n("um"),b_=_n("sp"),I_=_n("rtg"),E_=_n("rtc");function T_(t,e=Oe){sa("ec",t,e)}function vt(t,e){const n=We;if(n===null)return t;const s=oa(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(oi(),Rt(l,n,8,[t.el,a,t,e]),ai())}}const np="components";function ci(t,e){return S_(np,t,!0,e)||t}const C_=Symbol();function S_(t,e,n=!0,s=!1){const i=We||Oe;if(i){const r=i.type;if(t===np){const a=nw(r,!1);if(a&&(a===e||a===tn(e)||a===Yo(tn(e))))return r}const o=fh(i[t]||r[t],e)||fh(i.appContext[t],e);return!o&&s?r:o}}function fh(t,e){return t&&(t[e]||t[tn(e)]||t[Yo(tn(e))])}function _t(t,e,n,s){let i;const r=n&&n[s];if(W(t)||je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Ti(t,e,n={},s,i){if(We.isCE||We.parent&&Pi(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),te("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),b();const o=r&&sp(r(n)),a=Qi(ie,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function sp(t){return t.some(e=>_o(e)?!(e.type===Dt||e.type===ie&&!sp(e.children)):!0)?t:null}const Sl=t=>t?pp(t)?oa(t)||t.proxy:Sl(t.parent):null,Mi=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>Nc(t.update)),$nextTick:t=>t.n||(t.n=jf.bind(t.proxy)),$watch:t=>h_.bind(t)}),qa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&de(t,e),A_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(qa(s,e))return o[e]=1,s[e];if(i!==Ce&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==Ce&&de(n,e))return o[e]=4,n[e];Al&&(o[e]=0)}}const u=Mi[e];let d,f;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ce&&de(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return qa(i,e)?(i[e]=n,!0):s!==Ce&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&de(t,o)||qa(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(Mi,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Al=!0;function k_(t){const e=Rc(t),n=t.proxy,s=t.ctx;Al=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:w,activated:_,deactivated:O,beforeDestroy:R,beforeUnmount:$,destroyed:L,unmounted:X,render:ue,renderTracked:Ne,renderTriggered:Fe,errorCaptured:Z,serverPrefetch:Te,expose:_e,inheritAttrs:Ye,components:Xe,directives:Lt,filters:sn}=e;if(c&&N_(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const ye=o[we];se(ye)&&(s[we]=ye.bind(n))}if(i){const we=i.call(n,n);Ee(we)&&(t.data=li(we))}if(Al=!0,r)for(const we in r){const ye=r[we],xt=se(ye)?ye.bind(n,n):se(ye.get)?ye.get.bind(n,n):qt,zn=!se(ye)&&se(ye.set)?ye.set.bind(n):qt,Ut=kt({get:xt,set:zn});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:gt=>Ut.value=gt})}if(a)for(const we in a)ip(a[we],s,n,we);if(l){const we=se(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{no(ye,we[ye])})}u&&ph(u,t,"c");function Pe(we,ye){W(ye)?ye.forEach(xt=>we(xt.bind(n))):ye&&we(ye.bind(n))}if(Pe(v_,d),Pe(Zf,f),Pe(__,g),Pe(w_,w),Pe(m_,_),Pe(g_,O),Pe(T_,Z),Pe(E_,Ne),Pe(I_,Fe),Pe(ep,$),Pe(tp,X),Pe(b_,Te),W(_e))if(_e.length){const we=t.exposed||(t.exposed={});_e.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:xt=>n[ye]=xt})})}else t.exposed||(t.exposed={});ue&&t.render===qt&&(t.render=ue),Ye!=null&&(t.inheritAttrs=Ye),Xe&&(t.components=Xe),Lt&&(t.directives=Lt)}function N_(t,e,n=qt,s=!1){W(t)&&(t=kl(t));for(const i in t){const r=t[i];let o;Ee(r)?"default"in r?o=un(r.from||i,r.default,!0):o=un(r.from||i):o=un(r),it(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ph(t,e,n){Rt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ip(t,e,n,s){const i=s.includes(".")?Wf(n,s):()=>n[s];if(je(t)){const r=e[t];se(r)&&$s(i,r)}else if(se(t))$s(i,t.bind(n));else if(Ee(t))if(W(t))t.forEach(r=>ip(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&$s(i,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>vo(l,c,o,!0)),vo(l,e,o)),Ee(e)&&r.set(e,l),l}function vo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vo(t,r,n,!0),i&&i.forEach(o=>vo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=R_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const R_={data:mh,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Jn,directives:Jn,watch:O_,provide:mh,inject:D_};function mh(t,e){return e?t?function(){return at(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function D_(t,e){return Jn(kl(t),kl(e))}function kl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?at(at(Object.create(null),t),e):e}function O_(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function P_(t,e,n,s=!1){const i={},r={};po(r,ra,1),t.propsDefaults=Object.create(null),rp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Kv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function M_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=fe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ea(t.emitsOptions,f))continue;const g=e[f];if(l)if(de(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const w=tn(f);i[w]=Nl(l,a,w,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{rp(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!de(e,d)&&((u=ri(d))===d||!de(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Nl(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!de(e,d))&&(delete r[d],c=!0)}c&&dn(t,"set","$attrs")}function rp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(eo(l))continue;const c=e[l];let u;i&&de(i,u=tn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ea(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=fe(n),c=a||Ce;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Nl(i,l,d,c[d],t,!de(c,d))}}return o}function Nl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&se(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(zs(i),s=c[n]=l.call(null,e),os())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ri(n))&&(s=!0))}return s}function op(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=d=>{l=!0;const[f,g]=op(d,e,!0);at(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,Ms),Ms;if(W(r))for(let u=0;u<r.length;u++){const d=tn(r[u]);gh(d)&&(o[d]=Ce)}else if(r)for(const u in r){const d=tn(u);if(gh(d)){const f=r[u],g=o[d]=W(f)||se(f)?{type:f}:Object.assign({},f);if(g){const w=_h(Boolean,g.type),_=_h(String,g.type);g[0]=w>-1,g[1]=_<0||w<_,(w>-1||de(g,"default"))&&a.push(d)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function gh(t){return t[0]!=="$"}function yh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vh(t,e){return yh(t)===yh(e)}function _h(t,e){return W(e)?e.findIndex(n=>vh(n,t)):se(e)&&vh(e,t)?0:-1}const ap=t=>t[0]==="_"||t==="$stable",Dc=t=>W(t)?t.map(Qt):[Qt(t)],L_=(t,e,n)=>{if(e._n)return e;const s=At((...i)=>Dc(e(...i)),n);return s._c=!1,s},lp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ap(i))continue;const r=t[i];if(se(r))e[i]=L_(i,r,s);else if(r!=null){const o=Dc(r);e[i]=()=>o}}},cp=(t,e)=>{const n=Dc(e);t.slots.default=()=>n},x_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),po(e,"_",n)):lp(e,t.slots={})}else t.slots={},e&&cp(t,e);po(t.slots,ra,1)},U_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(at(i,e),!n&&a===1&&delete i._):(r=!e.$stable,lp(e,i)),o=e}else e&&(cp(t,e),o={default:1});if(r)for(const a in i)!ap(a)&&!(a in o)&&delete i[a]};function up(){return{app:null,config:{isNativeTag:hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F_=0;function $_(t,e){return function(s,i=null){se(s)||(s=Object.assign({},s)),i!=null&&!Ee(i)&&(i=null);const r=up(),o=new Set;let a=!1;const l=r.app={_uid:F_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ow,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const f=te(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,oa(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Rl(t,e,n,s,i=!1){if(W(t)){t.forEach((f,g)=>Rl(f,e&&(W(e)?e[g]:e),n,s,i));return}if(Pi(s)&&!i)return;const r=s.shapeFlag&4?oa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,de(d,c)&&(d[c]=null)):it(c)&&(c.value=null)),se(l))On(l,a,12,[o,u]);else{const f=je(l),g=it(l);if(f||g){const w=()=>{if(t.f){const _=f?de(d,l)?d[l]:u[l]:l.value;i?W(_)&&_c(_,r):W(_)?_.includes(r)||_.push(r):f?(u[l]=[r],de(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,de(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,yt(w,n)):w()}}}const yt=u_;function V_(t){return B_(t)}function B_(t,e){const n=yv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=qt,insertStaticContent:w}=t,_=(p,m,y,v=null,C=null,N=null,M=!1,k=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!Xn(p,m)&&(v=P(p),gt(p,C,N,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:S,ref:z,shapeFlag:B}=m;switch(S){case ia:O(p,m,y,v);break;case Dt:R(p,m,y,v);break;case so:p==null&&$(m,y,v,M);break;case ie:Xe(p,m,y,v,C,N,M,k,D);break;default:B&1?ue(p,m,y,v,C,N,M,k,D):B&6?Lt(p,m,y,v,C,N,M,k,D):(B&64||B&128)&&S.process(p,m,y,v,C,N,M,k,D,he)}z!=null&&C&&Rl(z,p&&p.ref,N,m||p,!m)},O=(p,m,y,v)=>{if(p==null)s(m.el=a(m.children),y,v);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},R=(p,m,y,v)=>{p==null?s(m.el=l(m.children||""),y,v):m.el=p.el},$=(p,m,y,v)=>{[p.el,p.anchor]=w(p.children,m,y,v,p.el,p.anchor)},L=({el:p,anchor:m},y,v)=>{let C;for(;p&&p!==m;)C=f(p),s(p,y,v),p=C;s(m,y,v)},X=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=f(p),i(p),p=y;i(m)},ue=(p,m,y,v,C,N,M,k,D)=>{M=M||m.type==="svg",p==null?Ne(m,y,v,C,N,M,k,D):Te(p,m,C,N,M,k,D)},Ne=(p,m,y,v,C,N,M,k)=>{let D,S;const{type:z,props:B,shapeFlag:K,transition:Y,dirs:ae}=p;if(D=p.el=o(p.type,N,B&&B.is,B),K&8?u(D,p.children):K&16&&Z(p.children,D,null,v,C,N&&z!=="foreignObject",M,k),ae&&Kn(p,null,v,"created"),Fe(D,p,p.scopeId,M,v),B){for(const ve in B)ve!=="value"&&!eo(ve)&&r(D,ve,null,B[ve],N,p.children,v,C,x);"value"in B&&r(D,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Jt(S,v,p)}ae&&Kn(p,null,v,"beforeMount");const be=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;be&&Y.beforeEnter(D),s(D,m,y),((S=B&&B.onVnodeMounted)||be||ae)&&yt(()=>{S&&Jt(S,v,p),be&&Y.enter(D),ae&&Kn(p,null,v,"mounted")},C)},Fe=(p,m,y,v,C)=>{if(y&&g(p,y),v)for(let N=0;N<v.length;N++)g(p,v[N]);if(C){let N=C.subTree;if(m===N){const M=C.vnode;Fe(p,M,M.scopeId,M.slotScopeIds,C.parent)}}},Z=(p,m,y,v,C,N,M,k,D=0)=>{for(let S=D;S<p.length;S++){const z=p[S]=k?Cn(p[S]):Qt(p[S]);_(null,z,m,y,v,C,N,M,k)}},Te=(p,m,y,v,C,N,M)=>{const k=m.el=p.el;let{patchFlag:D,dynamicChildren:S,dirs:z}=m;D|=p.patchFlag&16;const B=p.props||Ce,K=m.props||Ce;let Y;y&&Wn(y,!1),(Y=K.onVnodeBeforeUpdate)&&Jt(Y,y,m,p),z&&Kn(m,p,y,"beforeUpdate"),y&&Wn(y,!0);const ae=C&&m.type!=="foreignObject";if(S?_e(p.dynamicChildren,S,k,y,v,ae,N):M||ye(p,m,k,null,y,v,ae,N,!1),D>0){if(D&16)Ye(k,m,B,K,y,v,C);else if(D&2&&B.class!==K.class&&r(k,"class",null,K.class,C),D&4&&r(k,"style",B.style,K.style,C),D&8){const be=m.dynamicProps;for(let ve=0;ve<be.length;ve++){const Me=be[ve],Ft=B[Me],Cs=K[Me];(Cs!==Ft||Me==="value")&&r(k,Me,Ft,Cs,C,p.children,y,v,x)}}D&1&&p.children!==m.children&&u(k,m.children)}else!M&&S==null&&Ye(k,m,B,K,y,v,C);((Y=K.onVnodeUpdated)||z)&&yt(()=>{Y&&Jt(Y,y,m,p),z&&Kn(m,p,y,"updated")},v)},_e=(p,m,y,v,C,N,M)=>{for(let k=0;k<m.length;k++){const D=p[k],S=m[k],z=D.el&&(D.type===ie||!Xn(D,S)||D.shapeFlag&70)?d(D.el):y;_(D,S,z,null,v,C,N,M,!0)}},Ye=(p,m,y,v,C,N,M)=>{if(y!==v){if(y!==Ce)for(const k in y)!eo(k)&&!(k in v)&&r(p,k,y[k],null,M,m.children,C,N,x);for(const k in v){if(eo(k))continue;const D=v[k],S=y[k];D!==S&&k!=="value"&&r(p,k,S,D,M,m.children,C,N,x)}"value"in v&&r(p,"value",y.value,v.value)}},Xe=(p,m,y,v,C,N,M,k,D)=>{const S=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:Y}=m;Y&&(k=k?k.concat(Y):Y),p==null?(s(S,y,v),s(z,y,v),Z(m.children,y,z,C,N,M,k,D)):B>0&&B&64&&K&&p.dynamicChildren?(_e(p.dynamicChildren,K,y,C,N,M,k),(m.key!=null||C&&m===C.subTree)&&hp(p,m,!0)):ye(p,m,y,z,C,N,M,k,D)},Lt=(p,m,y,v,C,N,M,k,D)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?C.ctx.activate(m,y,v,M,D):sn(m,y,v,C,N,M,D):Ii(p,m,D)},sn=(p,m,y,v,C,N,M)=>{const k=p.component=Q_(p,v,C);if(na(p)&&(k.ctx.renderer=he),X_(k),k.asyncDep){if(C&&C.registerDep(k,Pe),!p.el){const D=k.subTree=te(Dt);R(null,D,m,y)}return}Pe(k,p,m,y,C,N,M)},Ii=(p,m,y)=>{const v=m.component=p.component;if(a_(p,m,y))if(v.asyncDep&&!v.asyncResolved){we(v,m,y);return}else v.next=m,t_(v.update),v.update();else m.el=p.el,v.vnode=m},Pe=(p,m,y,v,C,N,M)=>{const k=()=>{if(p.isMounted){let{next:z,bu:B,u:K,parent:Y,vnode:ae}=p,be=z,ve;Wn(p,!1),z?(z.el=ae.el,we(p,z,M)):z=ae,B&&to(B),(ve=z.props&&z.props.onVnodeBeforeUpdate)&&Jt(ve,Y,z,ae),Wn(p,!0);const Me=ja(p),Ft=p.subTree;p.subTree=Me,_(Ft,Me,d(Ft.el),P(Ft),p,C,N),z.el=Me.el,be===null&&l_(p,Me.el),K&&yt(K,C),(ve=z.props&&z.props.onVnodeUpdated)&&yt(()=>Jt(ve,Y,z,ae),C)}else{let z;const{el:B,props:K}=m,{bm:Y,m:ae,parent:be}=p,ve=Pi(m);if(Wn(p,!1),Y&&to(Y),!ve&&(z=K&&K.onVnodeBeforeMount)&&Jt(z,be,m),Wn(p,!0),B&&re){const Me=()=>{p.subTree=ja(p),re(B,p.subTree,p,C,null)};ve?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Me()):Me()}else{const Me=p.subTree=ja(p);_(null,Me,y,v,p,C,N),m.el=Me.el}if(ae&&yt(ae,C),!ve&&(z=K&&K.onVnodeMounted)){const Me=m;yt(()=>Jt(z,be,Me),C)}(m.shapeFlag&256||be&&Pi(be.vnode)&&be.vnode.shapeFlag&256)&&p.a&&yt(p.a,C),p.isMounted=!0,m=y=v=null}},D=p.effect=new Ic(k,()=>Nc(S),p.scope),S=p.update=()=>D.run();S.id=p.uid,Wn(p,!0),S()},we=(p,m,y)=>{m.component=p;const v=p.vnode.props;p.vnode=m,p.next=null,M_(p,m.props,v,y),U_(p,m.children,y),oi(),uh(),ai()},ye=(p,m,y,v,C,N,M,k,D=!1)=>{const S=p&&p.children,z=p?p.shapeFlag:0,B=m.children,{patchFlag:K,shapeFlag:Y}=m;if(K>0){if(K&128){zn(S,B,y,v,C,N,M,k,D);return}else if(K&256){xt(S,B,y,v,C,N,M,k,D);return}}Y&8?(z&16&&x(S,C,N),B!==S&&u(y,B)):z&16?Y&16?zn(S,B,y,v,C,N,M,k,D):x(S,C,N,!0):(z&8&&u(y,""),Y&16&&Z(B,y,v,C,N,M,k,D))},xt=(p,m,y,v,C,N,M,k,D)=>{p=p||Ms,m=m||Ms;const S=p.length,z=m.length,B=Math.min(S,z);let K;for(K=0;K<B;K++){const Y=m[K]=D?Cn(m[K]):Qt(m[K]);_(p[K],Y,y,null,C,N,M,k,D)}S>z?x(p,C,N,!0,!1,B):Z(m,y,v,C,N,M,k,D,B)},zn=(p,m,y,v,C,N,M,k,D)=>{let S=0;const z=m.length;let B=p.length-1,K=z-1;for(;S<=B&&S<=K;){const Y=p[S],ae=m[S]=D?Cn(m[S]):Qt(m[S]);if(Xn(Y,ae))_(Y,ae,y,null,C,N,M,k,D);else break;S++}for(;S<=B&&S<=K;){const Y=p[B],ae=m[K]=D?Cn(m[K]):Qt(m[K]);if(Xn(Y,ae))_(Y,ae,y,null,C,N,M,k,D);else break;B--,K--}if(S>B){if(S<=K){const Y=K+1,ae=Y<z?m[Y].el:v;for(;S<=K;)_(null,m[S]=D?Cn(m[S]):Qt(m[S]),y,ae,C,N,M,k,D),S++}}else if(S>K)for(;S<=B;)gt(p[S],C,N,!0),S++;else{const Y=S,ae=S,be=new Map;for(S=ae;S<=K;S++){const Et=m[S]=D?Cn(m[S]):Qt(m[S]);Et.key!=null&&be.set(Et.key,S)}let ve,Me=0;const Ft=K-ae+1;let Cs=!1,Xu=0;const Ei=new Array(Ft);for(S=0;S<Ft;S++)Ei[S]=0;for(S=Y;S<=B;S++){const Et=p[S];if(Me>=Ft){gt(Et,C,N,!0);continue}let Wt;if(Et.key!=null)Wt=be.get(Et.key);else for(ve=ae;ve<=K;ve++)if(Ei[ve-ae]===0&&Xn(Et,m[ve])){Wt=ve;break}Wt===void 0?gt(Et,C,N,!0):(Ei[Wt-ae]=S+1,Wt>=Xu?Xu=Wt:Cs=!0,_(Et,m[Wt],y,null,C,N,M,k,D),Me++)}const Zu=Cs?j_(Ei):Ms;for(ve=Zu.length-1,S=Ft-1;S>=0;S--){const Et=ae+S,Wt=m[Et],eh=Et+1<z?m[Et+1].el:v;Ei[S]===0?_(null,Wt,y,eh,C,N,M,k,D):Cs&&(ve<0||S!==Zu[ve]?Ut(Wt,y,eh,2):ve--)}}},Ut=(p,m,y,v,C=null)=>{const{el:N,type:M,transition:k,children:D,shapeFlag:S}=p;if(S&6){Ut(p.component.subTree,m,y,v);return}if(S&128){p.suspense.move(m,y,v);return}if(S&64){M.move(p,m,y,he);return}if(M===ie){s(N,m,y);for(let B=0;B<D.length;B++)Ut(D[B],m,y,v);s(p.anchor,m,y);return}if(M===so){L(p,m,y);return}if(v!==2&&S&1&&k)if(v===0)k.beforeEnter(N),s(N,m,y),yt(()=>k.enter(N),C);else{const{leave:B,delayLeave:K,afterLeave:Y}=k,ae=()=>s(N,m,y),be=()=>{B(N,()=>{ae(),Y&&Y()})};K?K(N,ae,be):be()}else s(N,m,y)},gt=(p,m,y,v=!1,C=!1)=>{const{type:N,props:M,ref:k,children:D,dynamicChildren:S,shapeFlag:z,patchFlag:B,dirs:K}=p;if(k!=null&&Rl(k,null,y,p,!0),z&256){m.ctx.deactivate(p);return}const Y=z&1&&K,ae=!Pi(p);let be;if(ae&&(be=M&&M.onVnodeBeforeUnmount)&&Jt(be,m,p),z&6)E(p.component,y,v);else{if(z&128){p.suspense.unmount(y,v);return}Y&&Kn(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,y,C,he,v):S&&(N!==ie||B>0&&B&64)?x(S,m,y,!1,!0):(N===ie&&B&384||!C&&z&16)&&x(D,m,y),v&&Ts(p)}(ae&&(be=M&&M.onVnodeUnmounted)||Y)&&yt(()=>{be&&Jt(be,m,p),Y&&Kn(p,null,m,"unmounted")},y)},Ts=p=>{const{type:m,el:y,anchor:v,transition:C}=p;if(m===ie){Fr(y,v);return}if(m===so){X(p);return}const N=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:M,delayLeave:k}=C,D=()=>M(y,N);k?k(p.el,N,D):D()}else N()},Fr=(p,m)=>{let y;for(;p!==m;)y=f(p),i(p),p=y;i(m)},E=(p,m,y)=>{const{bum:v,scope:C,update:N,subTree:M,um:k}=p;v&&to(v),C.stop(),N&&(N.active=!1,gt(M,p,m,y)),k&&yt(k,m),yt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},x=(p,m,y,v=!1,C=!1,N=0)=>{for(let M=N;M<p.length;M++)gt(p[M],m,y,v,C)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),q=(p,m,y)=>{p==null?m._vnode&&gt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),uh(),qf(),m._vnode=p},he={p:_,um:gt,m:Ut,r:Ts,mt:sn,mc:Z,pc:ye,pbc:_e,n:P,o:t};let Re,re;return e&&([Re,re]=e(he)),{render:q,hydrate:Re,createApp:$_(q,Re)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hp(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Cn(i[r]),a.el=o.el),n||hp(o,a)),a.type===ia&&(a.el=o.el)}}function j_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const H_=t=>t.__isTeleport,ie=Symbol(void 0),ia=Symbol(void 0),Dt=Symbol(void 0),so=Symbol(void 0),Li=[];let jt=null;function b(t=!1){Li.push(jt=t?null:[])}function q_(){Li.pop(),jt=Li[Li.length-1]||null}let Ji=1;function wh(t){Ji+=t}function dp(t){return t.dynamicChildren=Ji>0?jt||Ms:null,q_(),Ji>0&&jt&&jt.push(t),t}function T(t,e,n,s,i,r){return dp(h(t,e,n,s,i,r,!0))}function Qi(t,e,n,s,i){return dp(te(t,e,n,s,i,!0))}function _o(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const ra="__vInternal",fp=({key:t})=>t??null,io=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||it(t)||se(t)?{i:We,r:t,k:e,f:!!n}:t:null;function h(t,e=null,n=null,s=0,i=null,r=t===ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fp(e),ref:e&&io(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return a?(Oc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Ji>0&&!o&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const te=G_;function G_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===C_)&&(t=Dt),_o(t)){const a=Fn(t,e,!0);return n&&Oc(a,n),Ji>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag|=-2,a}if(sw(t)&&(t=t.__vccOpts),e){e=z_(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=yc(a)),Ee(l)&&(Mf(l)&&!W(l)&&(l=at({},l)),e.style=gc(l))}const o=je(t)?1:c_(t)?128:H_(t)?64:Ee(t)?4:se(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function z_(t){return t?Mf(t)||ra in t?at({},t):t:null}function Fn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?K_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fp(a),ref:e&&e.ref?n&&i?W(i)?i.concat(io(e)):[i,io(e)]:io(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ie?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ie(t=" ",e=0){return te(ia,null,t,e)}function mr(t,e){const n=te(so,null,t);return n.staticCount=e,n}function F(t="",e=!1){return e?(b(),Qi(Dt,null,t)):te(Dt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?te(Dt):W(t)?te(ie,null,t.slice()):typeof t=="object"?Cn(t):te(ia,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function Oc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Oc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ra in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function K_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yc([e.class,s.class]));else if(i==="style")e.style=gc([e.style,s.style]);else if(Wo(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Jt(t,e,n,s=null){Rt(t,e,7,[n,s])}const W_=up();let J_=0;function Q_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||W_,r={uid:J_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(s,i),emitsOptions:zf(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=i_.bind(null,r),t.ce&&t.ce(r),r}let Oe=null;const Y_=()=>Oe||We,zs=t=>{Oe=t,t.scope.on()},os=()=>{Oe&&Oe.scope.off(),Oe=null};function pp(t){return t.vnode.shapeFlag&4}let Yi=!1;function X_(t,e=!1){Yi=e;const{props:n,children:s}=t.vnode,i=pp(t);P_(t,n,i,e),x_(t,s);const r=i?Z_(t,e):void 0;return Yi=!1,r}function Z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lf(new Proxy(t.ctx,A_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?tw(t):null;zs(t),oi();const r=On(s,t,0,[t.props,i]);if(ai(),os(),wf(r)){if(r.then(os,os),e)return r.then(o=>{bh(t,o,e)}).catch(o=>{Zo(o,t,0)});t.asyncDep=r}else bh(t,r,e)}else mp(t,e)}function bh(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=$f(e)),mp(t,n)}let Ih;function mp(t,e,n){const s=t.type;if(!t.render){if(!e&&Ih&&!s.render){const i=s.template||Rc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=at(at({isCustomElement:r,delimiters:a},o),l);s.render=Ih(i,c)}}t.render=s.render||qt}zs(t),oi(),k_(t),ai(),os()}function ew(t){return new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}})}function tw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ew(t))},slots:t.slots,emit:t.emit,expose:e}}function oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($f(Lf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mi)return Mi[n](t)},has(e,n){return n in e||n in Mi}}))}function nw(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return se(t)&&"__vccOpts"in t}const kt=(t,e)=>Xv(t,e,Yi);function gp(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!W(e)?_o(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_o(n)&&(n=[n]),te(t,e,n))}const iw=Symbol(""),rw=()=>un(iw),ow="3.2.47",aw="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,Eh=Zn&&Zn.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zn.createElementNS(aw,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Eh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Eh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uw(t,e,n){const s=t.style,i=je(n);if(n&&!i){if(e&&!je(e))for(const r in e)n[r]==null&&Dl(s,r,"");for(const r in n)Dl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Th=/\s*!important$/;function Dl(t,e,n){if(W(n))n.forEach(s=>Dl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hw(t,e);Th.test(n)?t.setProperty(ri(s),n.replace(Th,""),"important"):t[s]=n}}const Ch=["Webkit","Moz","ms"],Ga={};function hw(t,e){const n=Ga[e];if(n)return n;let s=tn(e);if(s!=="filter"&&s in t)return Ga[e]=s;s=Yo(s);for(let i=0;i<Ch.length;i++){const r=Ch[i]+s;if(r in t)return Ga[e]=r}return e}const Sh="http://www.w3.org/1999/xlink";function dw(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sh,e.slice(6,e.length)):t.setAttributeNS(Sh,e,n);else{const r=lv(e);n==null||r&&!vf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function fw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function pw(t,e,n,s){t.removeEventListener(e,n,s)}function mw(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=gw(e);if(s){const c=r[e]=_w(s,i);es(t,a,c,l)}else o&&(pw(t,a,o,l),r[e]=void 0)}}const Ah=/(?:Once|Passive|Capture)$/;function gw(t){let e;if(Ah.test(t)){e={};let s;for(;s=t.match(Ah);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ri(t.slice(2)),e]}let za=0;const yw=Promise.resolve(),vw=()=>za||(yw.then(()=>za=0),za=Date.now());function _w(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(ww(s,n.value),e,5,[s])};return n.value=t,n.attached=vw(),n}function ww(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kh=/^on[a-z]/,bw=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?cw(t,s,i):e==="style"?uw(t,n,s):Wo(e)?vc(e)||mw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,s,i))?fw(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dw(t,e,s,i))};function Iw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&kh.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||kh.test(e)&&je(n)?!1:e in t}const Ew={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};p_.props;const wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>to(e,n):e};function Tw(t){t.target.composing=!0}function Nh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=wo(i);const r=s||i.props&&i.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=mo(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",Tw),es(t,"compositionend",Nh),es(t,"change",Nh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=wo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&mo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ol={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Jo(e);es(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?mo(bo(o)):bo(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=wo(s)},mounted(t,{value:e}){Rh(t,e)},beforeUpdate(t,e,n){t._assign=wo(n)},updated(t,{value:e}){Rh(t,e)}};function Rh(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Jo(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=bo(r);if(n)W(e)?r.selected=uv(e,o)>-1:r.selected=e.has(o);else if(Ko(bo(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bo(t){return"_value"in t?t._value:t.value}const Cw=at({patchProp:bw},lw);let Dh;function Sw(){return Dh||(Dh=V_(Cw))}const Aw=(...t)=>{const e=Sw().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=kw(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function kw(t){return je(t)?document.querySelector(t):t}function Nw(){return yp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function yp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Rw=typeof Proxy=="function",Dw="devtools-plugin:setup",Ow="plugin:settings:set";let Ss,Pl;function Pw(){var t;return Ss!==void 0||(typeof window<"u"&&window.performance?(Ss=!0,Pl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ss=!0,Pl=global.perf_hooks.performance):Ss=!1),Ss}function Mw(){return Pw()?Pl.now():Date.now()}class Lw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Mw()}},n&&n.on(Ow,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function xw(t,e){const n=t,s=yp(),i=Nw(),r=Rw&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Dw,t,e);else{const o=r?new Lw(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof window<"u";function Uw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Ka(t,e){const n={};for(const s in e){const i=e[s];n[s]=Gt(i)?i.map(t):t(i)}return n}const xi=()=>{},Gt=Array.isArray,Fw=/\/$/,$w=t=>t.replace(Fw,"");function Wa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Hw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Vw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ks(e.matched[s],n.matched[i])&&vp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jw(t[n],e[n]))return!1;return!0}function jw(t,e){return Gt(t)?Ph(t,e):Gt(e)?Ph(e,t):t===e}function Ph(t,e){return Gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Xi;(function(t){t.pop="pop",t.push="push"})(Xi||(Xi={}));var Ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ui||(Ui={}));function qw(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$w(t)}const Gw=/^[^#]+#/;function zw(t,e){return t.replace(Gw,"#")+e}function Kw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ww(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Kw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mh(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function Jw(t,e){Ml.set(t,e)}function Qw(t){const e=Ml.get(t);return Ml.delete(t),e}let Yw=()=>location.protocol+"//"+location.host;function _p(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Oh(l,"")}return Oh(n,t)+s+i}function Xw(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const g=_p(t,location),w=n.value,_=e.value;let O=0;if(f){if(n.value=g,e.value=f,o&&o===w){o=null;return}O=_?f.position-_.position:0}else s(g);i.forEach(R=>{R(n.value,w,{delta:O,type:Xi.pop,direction:O?O>0?Ui.forward:Ui.back:Ui.unknown})})};function l(){o=n.value}function c(f){i.push(f);const g=()=>{const w=i.indexOf(f);w>-1&&i.splice(w,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:aa()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Lh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?aa():null}}function Zw(t){const{history:e,location:n}=window,s={value:_p(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Yw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,Lh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ge({},i.value,e.state,{forward:l,scroll:aa()});r(u.current,u,!0);const d=ge({},Lh(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function e0(t){t=qw(t);const e=Zw(t),n=Xw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ge({location:"",base:t,go:s,createHref:zw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function t0(t){return typeof t=="string"||t&&typeof t=="object"}function wp(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bp=Symbol("");var xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xh||(xh={}));function Ws(t,e){return ge(new Error,{type:t,[bp]:!0},e)}function rn(t,e){return t instanceof Error&&bp in t&&(e==null||!!(t.type&e))}const Uh="[^/]+?",n0={sensitive:!1,strict:!1,start:!0,end:!0},s0=/[.+*?^${}()[\]/\\]/g;function i0(t,e){const n=ge({},n0,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(s0,"\\$&"),g+=40;else if(f.type===1){const{value:w,repeatable:_,optional:O,regexp:R}=f;r.push({name:w,repeatable:_,optional:O});const $=R||Uh;if($!==Uh){g+=10;try{new RegExp(`(${$})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${w}" (${$}): `+X.message)}}let L=_?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(L=O&&c.length<2?`(?:/${L})`:"/"+L),O&&(L+="?"),i+=L,g+=20,O&&(g+=-8),_&&(g+=-20),$===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",w=r[f-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:_,optional:O}=g,R=w in c?c[w]:"";if(Gt(R)&&!_)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const $=Gt(R)?R.join("/"):R;if(!$)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=$}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function r0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function o0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=r0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Fh(s))return 1;if(Fh(i))return-1}return i.length-s.length}function Fh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const a0={type:0,value:""},l0=/[a-zA-Z0-9_]/;function c0(t){if(!t)return[[]];if(t==="/")return[[a0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:l0.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function u0(t,e,n){const s=i0(c0(t.path),n),i=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function h0(t,e){const n=[],s=new Map;e=Bh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,f){const g=!f,w=d0(u);w.aliasOf=f&&f.record;const _=Bh(e,u),O=[w];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of L)O.push(ge({},w,{components:f?f.record.components:w.components,path:X,aliasOf:f?f.record:w}))}let R,$;for(const L of O){const{path:X}=L;if(d&&X[0]!=="/"){const ue=d.record.path,Ne=ue[ue.length-1]==="/"?"":"/";L.path=d.record.path+(X&&Ne+X)}if(R=u0(L,d,_),f?f.alias.push(R):($=$||R,$!==R&&$.alias.push(R),g&&u.name&&!Vh(R)&&o(u.name)),w.children){const ue=w.children;for(let Ne=0;Ne<ue.length;Ne++)r(ue[Ne],R,f&&f.children[Ne])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return $?()=>{o($)}:xi}function o(u){if(wp(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&o0(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ip(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Vh(u)&&s.set(u.record.name,u)}function c(u,d){let f,g={},w,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ws(1,{location:u});_=f.record.name,g=ge($h(d.params,f.keys.filter($=>!$.optional).map($=>$.name)),u.params&&$h(u.params,f.keys.map($=>$.name))),w=f.stringify(g)}else if("path"in u)w=u.path,f=n.find($=>$.re.test(w)),f&&(g=f.parse(w),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find($=>$.re.test(d.path)),!f)throw Ws(1,{location:u,currentLocation:d});_=f.record.name,g=ge({},d.params,u.params),w=f.stringify(g)}const O=[];let R=f;for(;R;)O.unshift(R.record),R=R.parent;return{name:_,path:w,params:g,matched:O,meta:p0(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function $h(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function d0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:f0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function f0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Vh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function p0(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Bh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ip(t,e){return e.children.some(n=>n===t||Ip(t,n))}const Ep=/#/g,m0=/&/g,g0=/\//g,y0=/=/g,v0=/\?/g,Tp=/\+/g,_0=/%5B/g,w0=/%5D/g,Cp=/%5E/g,b0=/%60/g,Sp=/%7B/g,I0=/%7C/g,Ap=/%7D/g,E0=/%20/g;function Pc(t){return encodeURI(""+t).replace(I0,"|").replace(_0,"[").replace(w0,"]")}function T0(t){return Pc(t).replace(Sp,"{").replace(Ap,"}").replace(Cp,"^")}function Ll(t){return Pc(t).replace(Tp,"%2B").replace(E0,"+").replace(Ep,"%23").replace(m0,"%26").replace(b0,"`").replace(Sp,"{").replace(Ap,"}").replace(Cp,"^")}function C0(t){return Ll(t).replace(y0,"%3D")}function S0(t){return Pc(t).replace(Ep,"%23").replace(v0,"%3F")}function A0(t){return t==null?"":S0(t).replace(g0,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function k0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tp," "),o=r.indexOf("="),a=Io(o<0?r:r.slice(0,o)),l=o<0?null:Io(r.slice(o+1));if(a in e){let c=e[a];Gt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function jh(t){let e="";for(let n in t){const s=t[n];if(n=C0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(s)?s.map(r=>r&&Ll(r)):[s&&Ll(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function N0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const R0=Symbol(""),Hh=Symbol(""),Mc=Symbol(""),kp=Symbol(""),xl=Symbol("");function Ci(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Sn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ws(4,{from:n,to:e})):d instanceof Error?a(d):t0(d)?a(Ws(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ja(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(D0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Sn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Uw(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Sn(f,n,s,r,o)()}))}}return i}function D0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qh(t){const e=un(Mc),n=un(kp),s=kt(()=>e.resolve(Us(t.to))),i=kt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ks.bind(null,u));if(f>-1)return f;const g=Gh(l[c-2]);return c>1&&Gh(u)===g&&d[d.length-1].path!==g?d.findIndex(Ks.bind(null,l[c-2])):f}),r=kt(()=>i.value>-1&&L0(n.params,s.value.params)),o=kt(()=>i.value>-1&&i.value===n.matched.length-1&&vp(n.params,s.value.params));function a(l={}){return M0(l)?e[Us(t.replace)?"replace":"push"](Us(t.to)).catch(xi):Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const O0=Yf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qh,setup(t,{slots:e}){const n=li(qh(t)),{options:s}=un(Mc),i=kt(()=>({[zh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[zh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),P0=O0;function M0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Gh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zh=(t,e,n)=>t??e??n,x0=Yf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=un(xl),i=kt(()=>t.route||s.value),r=un(Hh,0),o=kt(()=>{let c=Us(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=kt(()=>i.value.matched[o.value]);no(Hh,kt(()=>o.value+1)),no(R0,a),no(xl,i);const l=Il();return $s(()=>[l.value,a.value,t.name],([c,u,d],[f,g,w])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Ks(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Kh(n.default,{Component:f,route:c});const g=d.props[u],w=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=gp(f,ge({},w,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Kh(n.default,{Component:O,route:c})||O}}});function Kh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const U0=x0;function F0(t){const e=h0(t.routes,t),n=t.parseQuery||k0,s=t.stringifyQuery||jh,i=t.history,r=Ci(),o=Ci(),a=Ci(),l=Wv(En);let c=En;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ka.bind(null,E=>""+E),d=Ka.bind(null,A0),f=Ka.bind(null,Io);function g(E,x){let P,q;return wp(E)?(P=e.getRecordMatcher(E),q=x):q=E,e.addRoute(q,P)}function w(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function _(){return e.getRoutes().map(E=>E.record)}function O(E){return!!e.getRecordMatcher(E)}function R(E,x){if(x=ge({},x||l.value),typeof E=="string"){const p=Wa(n,E,x.path),m=e.resolve({path:p.path},x),y=i.createHref(p.fullPath);return ge(p,m,{params:f(m.params),hash:Io(p.hash),redirectedFrom:void 0,href:y})}let P;if("path"in E)P=ge({},E,{path:Wa(n,E.path,x.path).path});else{const p=ge({},E.params);for(const m in p)p[m]==null&&delete p[m];P=ge({},E,{params:d(E.params)}),x.params=d(x.params)}const q=e.resolve(P,x),he=E.hash||"";q.params=u(f(q.params));const Re=Vw(s,ge({},E,{hash:T0(he),path:q.path})),re=i.createHref(Re);return ge({fullPath:Re,hash:he,query:s===jh?N0(E.query):E.query||{}},q,{redirectedFrom:void 0,href:re})}function $(E){return typeof E=="string"?Wa(n,E,l.value.path):ge({},E)}function L(E,x){if(c!==E)return Ws(8,{from:x,to:E})}function X(E){return Fe(E)}function ue(E){return X(ge($(E),{replace:!0}))}function Ne(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let q=typeof P=="function"?P(E):P;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=$(q):{path:q},q.params={}),ge({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function Fe(E,x){const P=c=R(E),q=l.value,he=E.state,Re=E.force,re=E.replace===!0,p=Ne(P);if(p)return Fe(ge($(p),{state:typeof p=="object"?ge({},he,p.state):he,force:Re,replace:re}),x||P);const m=P;m.redirectedFrom=x;let y;return!Re&&Bw(s,q,P)&&(y=Ws(16,{to:m,from:q}),zn(q,q,!0,!1)),(y?Promise.resolve(y):Te(m,q)).catch(v=>rn(v)?rn(v,2)?v:xt(v):we(v,m,q)).then(v=>{if(v){if(rn(v,2))return Fe(ge({replace:re},$(v.to),{state:typeof v.to=="object"?ge({},he,v.to.state):he,force:Re}),x||m)}else v=Ye(m,q,!0,re,he);return _e(m,q,v),v})}function Z(E,x){const P=L(E,x);return P?Promise.reject(P):Promise.resolve()}function Te(E,x){let P;const[q,he,Re]=$0(E,x);P=Ja(q.reverse(),"beforeRouteLeave",E,x);for(const p of q)p.leaveGuards.forEach(m=>{P.push(Sn(m,E,x))});const re=Z.bind(null,E,x);return P.push(re),As(P).then(()=>{P=[];for(const p of r.list())P.push(Sn(p,E,x));return P.push(re),As(P)}).then(()=>{P=Ja(he,"beforeRouteUpdate",E,x);for(const p of he)p.updateGuards.forEach(m=>{P.push(Sn(m,E,x))});return P.push(re),As(P)}).then(()=>{P=[];for(const p of E.matched)if(p.beforeEnter&&!x.matched.includes(p))if(Gt(p.beforeEnter))for(const m of p.beforeEnter)P.push(Sn(m,E,x));else P.push(Sn(p.beforeEnter,E,x));return P.push(re),As(P)}).then(()=>(E.matched.forEach(p=>p.enterCallbacks={}),P=Ja(Re,"beforeRouteEnter",E,x),P.push(re),As(P))).then(()=>{P=[];for(const p of o.list())P.push(Sn(p,E,x));return P.push(re),As(P)}).catch(p=>rn(p,8)?p:Promise.reject(p))}function _e(E,x,P){for(const q of a.list())q(E,x,P)}function Ye(E,x,P,q,he){const Re=L(E,x);if(Re)return Re;const re=x===En,p=Ns?history.state:{};P&&(q||re?i.replace(E.fullPath,ge({scroll:re&&p&&p.scroll},he)):i.push(E.fullPath,he)),l.value=E,zn(E,x,P,re),xt()}let Xe;function Lt(){Xe||(Xe=i.listen((E,x,P)=>{if(!Fr.listening)return;const q=R(E),he=Ne(q);if(he){Fe(ge(he,{replace:!0}),q).catch(xi);return}c=q;const Re=l.value;Ns&&Jw(Mh(Re.fullPath,P.delta),aa()),Te(q,Re).catch(re=>rn(re,12)?re:rn(re,2)?(Fe(re.to,q).then(p=>{rn(p,20)&&!P.delta&&P.type===Xi.pop&&i.go(-1,!1)}).catch(xi),Promise.reject()):(P.delta&&i.go(-P.delta,!1),we(re,q,Re))).then(re=>{re=re||Ye(q,Re,!1),re&&(P.delta&&!rn(re,8)?i.go(-P.delta,!1):P.type===Xi.pop&&rn(re,20)&&i.go(-1,!1)),_e(q,Re,re)}).catch(xi)}))}let sn=Ci(),Ii=Ci(),Pe;function we(E,x,P){xt(E);const q=Ii.list();return q.length?q.forEach(he=>he(E,x,P)):console.error(E),Promise.reject(E)}function ye(){return Pe&&l.value!==En?Promise.resolve():new Promise((E,x)=>{sn.add([E,x])})}function xt(E){return Pe||(Pe=!E,Lt(),sn.list().forEach(([x,P])=>E?P(E):x()),sn.reset()),E}function zn(E,x,P,q){const{scrollBehavior:he}=t;if(!Ns||!he)return Promise.resolve();const Re=!P&&Qw(Mh(E.fullPath,0))||(q||!P)&&history.state&&history.state.scroll||null;return jf().then(()=>he(E,x,Re)).then(re=>re&&Ww(re)).catch(re=>we(re,E,x))}const Ut=E=>i.go(E);let gt;const Ts=new Set,Fr={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,hasRoute:O,getRoutes:_,resolve:R,options:t,push:X,replace:ue,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ii.add,isReady:ye,install(E){const x=this;E.component("RouterLink",P0),E.component("RouterView",U0),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Us(l)}),Ns&&!gt&&l.value===En&&(gt=!0,X(i.location).catch(he=>{}));const P={};for(const he in En)P[he]=kt(()=>l.value[he]);E.provide(Mc,x),E.provide(kp,li(P)),E.provide(xl,l);const q=E.unmount;Ts.add(E),E.unmount=function(){Ts.delete(E),Ts.size<1&&(c=En,Xe&&Xe(),Xe=null,l.value=En,gt=!1,Pe=!1),q()}}};return Fr}function As(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ks(c,l))||i.push(l))}return[n,s,i]}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var V0="store";function ui(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Np(t){return t!==null&&typeof t=="object"}function B0(t){return t&&typeof t.then=="function"}function j0(t,e){return function(){return t(e)}}function Rp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Dp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;la(t,n,[],t._modules.root,!0),Lc(t,n,e)}function Lc(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};ui(i,function(o,a){r[a]=j0(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=li({data:e}),t.strict&&K0(t),s&&n&&t._withCommit(function(){s.data=null})}function la(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=xc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=H0(t,o,n);s.forEachMutation(function(u,d){var f=o+d;q0(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,g=u.handler||u;G0(t,f,g,c)}),s.forEachGetter(function(u,d){var f=o+d;z0(t,f,u,c)}),s.forEachChild(function(u,d){la(t,e,n.concat(d),u,i)})}function H0(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Eo(r,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(r,o,a){var l=Eo(r,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Op(t,e)}},state:{get:function(){return xc(t.state,n)}}}),i}function Op(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function q0(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function G0(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return B0(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function z0(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function K0(t){$s(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function xc(t,e){return e.reduce(function(n,s){return n[s]},t)}function Eo(t,e,n){return Np(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var W0="vuex bindings",Wh="vuex:mutations",Qa="vuex:actions",ks="vuex",J0=0;function Q0(t,e){xw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[W0]},function(n){n.addTimelineLayer({id:Wh,label:"Vuex Mutations",color:Jh}),n.addTimelineLayer({id:Qa,label:"Vuex Actions",color:Jh}),n.addInspector({id:ks,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ks)if(s.filter){var i=[];xp(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Lp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ks){var i=s.nodeId;Op(e,i),s.state=Z0(tb(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ks){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(ks),n.sendInspectorState(ks),n.addTimelineEvent({layerId:Wh,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=J0++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Qa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Qa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Jh=8702998,Y0=6710886,X0=16777215,Pp={label:"namespaced",textColor:X0,backgroundColor:Y0};function Mp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Lp(t,e){return{id:e||"root",label:Mp(e),tags:t.namespaced?[Pp]:[],children:Object.keys(t._children).map(function(n){return Lp(t._children[n],e+n+"/")})}}function xp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Pp]:[]}),Object.keys(e._children).forEach(function(i){xp(t,e._children[i],n,s+i+"/")})}function Z0(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=eb(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Mp(o):o,editable:!1,value:Ul(function(){return r[o]})}})}return i}function eb(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Ul(function(){return t[n]})}else e[n]=Ul(function(){return t[n]})}),e}function tb(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ul(t){try{return t()}catch(e){return e}}var Kt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Up={namespaced:{configurable:!0}};Up.namespaced.get=function(){return!!this._rawModule.namespaced};Kt.prototype.addChild=function(e,n){this._children[e]=n};Kt.prototype.removeChild=function(e){delete this._children[e]};Kt.prototype.getChild=function(e){return this._children[e]};Kt.prototype.hasChild=function(e){return e in this._children};Kt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Kt.prototype.forEachChild=function(e){ui(this._children,e)};Kt.prototype.forEachGetter=function(e){this._rawModule.getters&&ui(this._rawModule.getters,e)};Kt.prototype.forEachAction=function(e){this._rawModule.actions&&ui(this._rawModule.actions,e)};Kt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ui(this._rawModule.mutations,e)};Object.defineProperties(Kt.prototype,Up);var ms=function(e){this.register([],e,!1)};ms.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ms.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};ms.prototype.update=function(e){Fp([],this.root,e)};ms.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new Kt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&ui(n.modules,function(a,l){i.register(e.concat(l),a,s)})};ms.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};ms.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Fp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Fp(t.concat(s),e.getChild(s),n.modules[s])}}function nb(t){return new It(t)}var It=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ms(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,g){return l.call(o,f,g)},this.commit=function(f,g,w){return c.call(o,f,g,w)},this.strict=i;var u=this._modules.root.state;la(this,u,[],this._modules.root),Lc(this,u),s.forEach(function(d){return d(n)})},Uc={state:{configurable:!0}};It.prototype.install=function(e,n){e.provide(n||V0,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Q0(e,this)};Uc.state.get=function(){return this._state.data};Uc.state.set=function(t){};It.prototype.commit=function(e,n,s){var i=this,r=Eo(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};It.prototype.dispatch=function(e,n){var s=this,i=Eo(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}d(f)})})}};It.prototype.subscribe=function(e,n){return Rp(e,this._subscribers,n)};It.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Rp(s,this._actionSubscribers,n)};It.prototype.watch=function(e,n,s){var i=this;return $s(function(){return e(i.state,i.getters)},n,Object.assign({},s))};It.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};It.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),la(this,this.state,e,this._modules.get(e),s.preserveState),Lc(this,this.state)};It.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=xc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Dp(this)};It.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};It.prototype.hotUpdate=function(e){this._modules.update(e),Dp(this,!0)};It.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(It.prototype,Uc);var sb=ob(function(t,e){var n={};return ib(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){var a=this.$store.state,l=this.$store.getters;if(t){var c=ab(this.$store,"mapState",t);if(!c)return;a=c.context.state,l=c.context.getters}return typeof r=="function"?r.call(this,a,l):a[r]},n[i].vuex=!0}),n});function ib(t){return rb(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function rb(t){return Array.isArray(t)||Np(t)}function ob(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function ab(t,e,n){var s=t._modulesNamespaceMap[n];return s}/**
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
 */const $p=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[d],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new cb;const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ub=function(t){const e=$p(t);return Vp.encodeByteArray(e,!0)},To=function(t){return ub(t).replace(/\./g,"")},Bp=function(t){try{return Vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const db=()=>hb().__FIREBASE_DEFAULTS__,fb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bp(t[1]);return e&&JSON.parse(e)},Fc=()=>{try{return db()||fb()||pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jp=t=>{var e,n;return(n=(e=Fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mb=t=>{const e=jp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gb=()=>{var t;return(t=Fc())===null||t===void 0?void 0:t.config},Hp=t=>{var e;return(e=Fc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function vb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[To(JSON.stringify(n)),To(JSON.stringify(o)),a].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _b(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function wb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ib(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eb(){try{return typeof indexedDB=="object"}catch{return!1}}function Tb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Cb="FirebaseError";class wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cb,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Sb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,s)}}function Sb(t,e){return t.replace(Ab,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ab=/\{\$([^}]+)}/g;function kb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Qh(r)&&Qh(o)){if(!Co(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Qh(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Nb(t,e){const n=new Rb(t,e);return n.subscribe.bind(n)}class Rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class Ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mb(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pb(t){return t===Qn?void 0:t}function Mb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const xb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Ub=pe.INFO,Fb={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},$b=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=Ub,this._logHandler=$b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Vb=(t,e)=>e.some(n=>t instanceof n);let Yh,Xh;function Bb(){return Yh||(Yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jb(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qp=new WeakMap,Fl=new WeakMap,Gp=new WeakMap,Xa=new WeakMap,Vc=new WeakMap;function Hb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qp.set(n,t)}).catch(()=>{}),Vc.set(e,t),e}function qb(t){if(Fl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Fl.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gb(t){$l=t($l)}function zb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Za(this),e,...n);return Gp.set(s,e.sort?e.sort():[e]),Pn(s)}:jb().includes(t)?function(...e){return t.apply(Za(this),e),Pn(qp.get(this))}:function(...e){return Pn(t.apply(Za(this),e))}}function Kb(t){return typeof t=="function"?zb(t):(t instanceof IDBTransaction&&qb(t),Vb(t,Bb())?new Proxy(t,$l):t)}function Pn(t){if(t instanceof IDBRequest)return Hb(t);if(Xa.has(t))return Xa.get(t);const e=Kb(t);return e!==t&&(Xa.set(t,e),Vc.set(e,t)),e}const Za=t=>Vc.get(t);function Wb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Pn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Jb=["get","getKey","getAll","getAllKeys","count"],Qb=["put","add","delete","clear"],el=new Map;function Zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(el.get(e))return el.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Qb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Jb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return el.set(e,r),r}Gb(t=>({...t,get:(e,n,s)=>Zh(e,n)||t.get(e,n,s),has:(e,n)=>!!Zh(e,n)||t.has(e,n)}));/**
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
 */class Yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",ed="0.9.7";/**
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
 */const hs=new $c("@firebase/app"),Zb="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",sI="@firebase/app-check",iI="@firebase/auth",rI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/database-compat",lI="@firebase/functions",cI="@firebase/functions-compat",uI="@firebase/installations",hI="@firebase/installations-compat",dI="@firebase/messaging",fI="@firebase/messaging-compat",pI="@firebase/performance",mI="@firebase/performance-compat",gI="@firebase/remote-config",yI="@firebase/remote-config-compat",vI="@firebase/storage",_I="@firebase/storage-compat",wI="@firebase/firestore",bI="@firebase/firestore-compat",II="firebase",EI="9.19.1";/**
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
 */const Bl="[DEFAULT]",TI={[Vl]:"fire-core",[Zb]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[sI]:"fire-app-check",[nI]:"fire-app-check-compat",[iI]:"fire-auth",[rI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-rtdb-compat",[lI]:"fire-fn",[cI]:"fire-fn-compat",[uI]:"fire-iid",[hI]:"fire-iid-compat",[dI]:"fire-fcm",[fI]:"fire-fcm-compat",[pI]:"fire-perf",[mI]:"fire-perf-compat",[gI]:"fire-rc",[yI]:"fire-rc-compat",[vI]:"fire-gcs",[_I]:"fire-gcs-compat",[wI]:"fire-fst",[bI]:"fire-fst-compat","fire-js":"fire-js",[II]:"fire-js-all"};/**
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
 */const So=new Map,jl=new Map;function CI(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(jl.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of So.values())CI(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new gr("app","Firebase",SI);/**
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
 */class AI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=EI;function zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=gb()),!n)throw Mn.create("no-options");const r=So.get(i);if(r){if(Co(n,r.options)&&Co(s,r.config))return r;throw Mn.create("duplicate-app",{appName:i})}const o=new Lb(i);for(const l of jl.values())o.addComponent(l);const a=new AI(n,s,o);return So.set(i,a),a}function Kp(t=Bl){const e=So.get(t);if(!e&&t===Bl)return zp();if(!e)throw Mn.create("no-app",{appName:t});return e}function Ln(t,e,n){var s;let i=(s=TI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}Js(new us(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kI="firebase-heartbeat-database",NI=1,Zi="firebase-heartbeat-store";let tl=null;function Wp(){return tl||(tl=Wb(kI,NI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),tl}async function RI(t){try{return(await Wp()).transaction(Zi).objectStore(Zi).get(Jp(t))}catch(e){if(e instanceof wn)hs.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function td(t,e){try{const s=(await Wp()).transaction(Zi,"readwrite");return await s.objectStore(Zi).put(e,Jp(t)),s.done}catch(n){if(n instanceof wn)hs.warn(n.message);else{const s=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(s.message)}}}function Jp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DI=1024,OI=30*24*60*60*1e3;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=OI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:s}=MI(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nd(){return new Date().toISOString().substring(0,10)}function MI(t,e=DI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class LI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eb()?Tb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sd(t){return To(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xI(t){Js(new us("platform-logger",e=>new Yb(e),"PRIVATE")),Js(new us("heartbeat",e=>new PI(e),"PRIVATE")),Ln(Vl,ed,t),Ln(Vl,ed,"esm2017"),Ln("fire-js","")}xI("");var UI="firebase",FI="9.19.1";/**
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
 */Ln(UI,FI,"app");function jc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Qp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $I=Qp,Yp=new gr("auth","Firebase",Qp());/**
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
 */const id=new $c("@firebase/auth");function ro(t,...e){id.logLevel<=pe.ERROR&&id.error(`Auth (${yr}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Hc(t,...e)}function Tt(t,...e){return Hc(t,...e)}function VI(t,e,n){const s=Object.assign(Object.assign({},$I()),{[e]:n});return new gr("auth","Firebase",s).create(e,{appName:t.name})}function Hc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yp.create(t,...e)}function V(t,e,...n){if(!t)throw Hc(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function pn(t,e){t||an(e)}/**
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
 */const rd=new Map;function ln(t){pn(t instanceof Function,"Expected a class definition");let e=rd.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rd.set(t,e),e)}/**
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
 */function BI(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Co(r,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function jI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||wb()||"connection"in navigator)?navigator.onLine:!0}function qI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=_b()||bb()}get(){return HI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qc(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const zI=new vr(3e4,6e4);function gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,s,i={}){return em(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zp.fetch()(tm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function em(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},GI),e);try{const i=new KI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ki(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw VI(t,u,c);fn(t,u)}}catch(i){if(i instanceof wn)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,s,i={}){const r=await Hn(t,e,n,s,i);return"mfaPendingCredential"in r&&fn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function tm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?qc(t.config,i):`${t.config.apiScheme}://${i}`}class KI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Tt(this.auth,"network-request-failed")),zI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Tt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function WI(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function JI(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QI(t,e=!1){const n=mt(t),s=await n.getIdToken(e),i=Gc(s);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Fi(nl(i.auth_time)),issuedAtTime:Fi(nl(i.iat)),expirationTime:Fi(nl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function nl(t){return Number(t)*1e3}function Gc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bp(n);return i?JSON.parse(i):(ro("Failed to decode base64 JWT payload"),null)}catch(i){return ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YI(t){const e=Gc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wn&&XI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function XI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ao(t){var e;const n=t.auth,s=await t.getIdToken(),i=await er(t,JI(n,{idToken:s}));V(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nE(r.providerUserInfo):[],a=tE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function eE(t){const e=mt(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nE(t){return t.map(e=>{var{providerId:n}=e,s=jc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sE(t,e){const n=await em(t,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=tm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await sE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new tr;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function Tn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class as{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QI(this,e)}reload(){return eE(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new as(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await er(this,WI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:X,isAnonymous:ue,providerData:Ne,stsTokenManager:Fe}=n;V(L&&Fe,e,"internal-error");const Z=tr.fromJSON(this.name,Fe);V(typeof L=="string",e,"internal-error"),Tn(d,e.name),Tn(f,e.name),V(typeof X=="boolean",e,"internal-error"),V(typeof ue=="boolean",e,"internal-error"),Tn(g,e.name),Tn(w,e.name),Tn(_,e.name),Tn(O,e.name),Tn(R,e.name),Tn($,e.name);const Te=new as({uid:L,auth:e,email:f,emailVerified:X,displayName:d,isAnonymous:ue,photoURL:w,phoneNumber:g,tenantId:_,stsTokenManager:Z,createdAt:R,lastLoginAt:$});return Ne&&Array.isArray(Ne)&&(Te.providerData=Ne.map(_e=>Object.assign({},_e))),O&&(Te._redirectEventId=O),Te}static async _fromIdTokenResponse(e,n,s=!1){const i=new tr;i.updateFromServerResponse(n);const r=new as({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ao(r),r}}/**
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
 */class sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sm.type="NONE";const ad=sm;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=oo(this.userKey,i.apiKey,r),this.fullPersistenceKey=oo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?as._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Vs(ln(ad),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ln(ad);const o=oo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=as._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vs(r,e,s))}}/**
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
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lm(e))return"Blackberry";if(cm(e))return"Webos";if(zc(e))return"Safari";if((e.includes("chrome/")||rm(e))&&!e.includes("edge/"))return"Chrome";if(am(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function im(t=lt()){return/firefox\//i.test(t)}function zc(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rm(t=lt()){return/crios\//i.test(t)}function om(t=lt()){return/iemobile/i.test(t)}function am(t=lt()){return/android/i.test(t)}function lm(t=lt()){return/blackberry/i.test(t)}function cm(t=lt()){return/webos/i.test(t)}function ua(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iE(t=lt()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rE(){return Ib()&&document.documentMode===10}function um(t=lt()){return ua(t)||am(t)||cm(t)||lm(t)||/windows phone/i.test(t)||om(t)}function oE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hm(t,e=[]){let n;switch(t){case"Browser":n=ld(lt());break;case"Worker":n=`${ld(lt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}/**
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
 */class aE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class lE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cd(this),this.idTokenSubscription=new cd(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function di(t){return mt(t)}class cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cE(t,e,n){const s=di(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=dm(e),{host:o,port:a}=uE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hE()}function dm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uE(t){const e=dm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ud(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ud(o)}}}function ud(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
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
 */async function Bs(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",gs(t,e))}/**
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
 */const dE="http://localhost";class ds extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=jc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ds(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */async function fE(t,e){return Hn(t,"POST","/v1/accounts:sendVerificationCode",gs(t,e))}async function pE(t,e){return ca(t,"POST","/v1/accounts:signInWithPhoneNumber",gs(t,e))}async function mE(t,e){const n=await ca(t,"POST","/v1/accounts:signInWithPhoneNumber",gs(t,e));if(n.temporaryProof)throw ki(t,"account-exists-with-different-credential",n);return n}const gE={USER_NOT_FOUND:"user-not-found"};async function yE(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ca(t,"POST","/v1/accounts:signInWithPhoneNumber",gs(t,n),gE)}/**
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
 */class $i extends Kc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new $i({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new $i({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return pE(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return mE(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return yE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:i,temporaryProof:r}=e;return!s&&!n&&!i&&!r?null:new $i({verificationId:n,verificationCode:s,phoneNumber:i,temporaryProof:r})}}/**
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
 */class fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _r extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class An extends _r{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
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
 */class kn extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class Nn extends _r{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Rn extends _r{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rn.credential(n,s)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await as._fromIdTokenResponse(e,s,i),o=hd(s);return new Qs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=hd(s);return new Qs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ko extends wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ko(e,n,s,i)}}function pm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(t,r,e,s):r})}async function vE(t,e,n=!1){const s=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",s)}/**
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
 */async function _E(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await er(t,pm(s,i,e,t),n);V(r.idToken,s,"internal-error");const o=Gc(r.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Qs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),r}}/**
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
 */async function mm(t,e,n=!1){const s="signIn",i=await pm(t,s,e),r=await Qs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function wE(t,e){return mm(di(t),e)}/**
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
 */function bE(t,e){return mt(t).setPersistence(e)}function IE(t,e,n,s){return mt(t).onIdTokenChanged(e,n,s)}function EE(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function TE(t){return mt(t).signOut()}/**
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
 */function CE(t,e){return Hn(t,"POST","/v2/accounts/mfaEnrollment:start",gs(t,e))}const No="__sak";/**
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
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SE(){const t=lt();return zc(t)||ua(t)}const AE=1e3,kE=10;class ym extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SE()&&oE(),this.fallbackToPolling=um(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);rE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const NE=ym;/**
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
 */class vm extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vm.type="SESSION";const Wc=vm;/**
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
 */function RE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await RE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ha.receivers=[];/**
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
 */function Jc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Jc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function OE(t){$e().location.href=t}/**
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
 */function Qc(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function PE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ME(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LE(){return Qc()?self:null}/**
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
 */const _m="firebaseLocalStorageDb",xE=1,Ro="firebaseLocalStorage",wm="fbase_key";class wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([Ro],e?"readwrite":"readonly").objectStore(Ro)}function UE(){const t=indexedDB.deleteDatabase(_m);return new wr(t).toPromise()}function ql(){const t=indexedDB.open(_m,xE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ro,{keyPath:wm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ro)?e(s):(s.close(),await UE(),e(await ql()))})})}async function dd(t,e,n){const s=da(t,!0).put({[wm]:e,value:n});return new wr(s).toPromise()}async function FE(t,e){const n=da(t,!1).get(e),s=await new wr(n).toPromise();return s===void 0?null:s.value}function fd(t,e){const n=da(t,!0).delete(e);return new wr(n).toPromise()}const $E=800,VE=3;class bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>VE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ha._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PE(),!this.activeServiceWorker)return;this.sender=new DE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ME()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await dd(e,No,"1"),await fd(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=da(i,!1).getAll();return new wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bm.type="LOCAL";const BE=bm;/**
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
 */function jE(t,e){return Hn(t,"POST","/v2/accounts/mfaSignIn:start",gs(t,e))}/**
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
 */async function HE(t){return(await Hn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function qE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Im(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Tt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",qE().appendChild(s)})}function Em(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const GE=500,zE=6e4,Gr=1e12;class KE{constructor(e){this.auth=e,this.counter=Gr,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new WE(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||Gr;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||Gr;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||Gr;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class WE{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;V(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=JE(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},zE)},GE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function JE(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const sl=Em("rcb"),QE=new vr(3e4,6e4),YE="https://www.google.com/recaptcha/api.js?";class XE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return V(ZE(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve($e().grecaptcha):new Promise((s,i)=>{const r=$e().setTimeout(()=>{i(Tt(e,"network-request-failed"))},QE.get());$e()[sl]=()=>{$e().clearTimeout(r),delete $e()[sl];const a=$e().grecaptcha;if(!a){i(Tt(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,s(a)};const o=`${YE}?${hi({onload:sl,render:"explicit",hl:n})}`;Im(o).catch(()=>{clearTimeout(r),i(Tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZE(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class eT{async load(e){return new KE(e)}clearedOneInstance(){}}/**
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
 */const Tm="recaptcha",tT={theme:"light",type:"image"};class nT{constructor(e,n=Object.assign({},tT),s){this.parameters=n,this.type=Tm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=di(s),this.isInvisible=this.parameters.size==="invisible",V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;V(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eT:new XE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(i=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),i(o))};this.tokenChangeListeners.add(r),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=$e()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){V(Xp()&&!Qc(),this.auth,"internal-error"),await sT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await HE(this.auth);V(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function sT(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class iT{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=$i._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function rT(t,e,n){const s=di(t),i=await oT(s,e,mt(n));return new iT(i,r=>wE(s,r))}async function oT(t,e,n){var s;const i=await n.verify();try{V(typeof i=="string",t,"argument-error"),V(n.type===Tm,t,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return V(o.type==="enroll",t,"internal-error"),(await CE(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(o.type==="signin",t,"internal-error");const a=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;return V(a,t,"missing-multi-factor-info"),(await jE(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await fE(t,{phoneNumber:r.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
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
 */function aT(t,e){return e?ln(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yc extends Kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lT(t){return mm(t.auth,new Yc(t),t.bypassAuthState)}function cT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),_E(n,new Yc(t),t.bypassAuthState)}async function uT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),vE(n,new Yc(t),t.bypassAuthState)}/**
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
 */class Cm{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return uT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:fn(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hT=new vr(2e3,1e4);class Os extends Cm{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Os.currentPopupAction=null;/**
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
 */const dT="pendingRedirect",ao=new Map;class fT extends Cm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const s=await pT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pT(t,e){const n=yT(e),s=gT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function mT(t,e){ao.set(t._key(),e)}function gT(t){return ln(t._redirectPersistence)}function yT(t){return oo(dT,t.config.apiKey,t.name)}async function vT(t,e,n=!1){const s=di(t),i=aT(s,e),o=await new fT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _T=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_T&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(t);default:return!1}}/**
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
 */async function IT(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const ET=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TT=/^https?/;async function CT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IT(t);for(const n of e)try{if(ST(n))return}catch{}fn(t,"unauthorized-domain")}function ST(t){const e=Hl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TT.test(n))return!1;if(ET.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const AT=new vr(3e4,6e4);function md(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kT(t){return new Promise((e,n)=>{var s,i,r;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),n(Tt(t,"network-request-failed"))},timeout:AT.get()})}if(!((i=(s=$e().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$e().gapi)===null||r===void 0)&&r.load)o();else{const a=Em("iframefcb");return $e()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},Im(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lo=null,e})}let lo=null;function NT(t){return lo=lo||kT(t),lo}/**
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
 */const RT=new vr(5e3,15e3),DT="__/auth/iframe",OT="emulator/auth/iframe",PT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LT(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qc(e,OT):`https://${t.config.authDomain}/${DT}`,s={apiKey:e.apiKey,appName:t.name,v:yr},i=MT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hi(s).slice(1)}`}async function xT(t){const e=await NT(t),n=$e().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:LT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=$e().setTimeout(()=>{r(o)},RT.get());function l(){$e().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const UT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,$T=600,VT="_blank",BT="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jT(t,e,n,s=FT,i=$T){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=lt().toLowerCase();n&&(a=rm(c)?VT:n),im(c)&&(e=e||BT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,w])=>`${f}${g}=${w},`,"");if(iE(c)&&a!=="_self")return HT(e||"",a),new gd(null);const d=window.open(e||"",a,u);V(d,t,"popup-blocked");try{d.focus()}catch{}return new gd(d)}function HT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const qT="__/auth/handler",GT="emulator/auth/handler";function yd(t,e,n,s,i,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yr,eventId:i};if(e instanceof fm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof _r){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zT(t)}?${hi(a).slice(1)}`}function zT({config:t}){return t.emulator?qc(t,GT):`https://${t.authDomain}/${qT}`}/**
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
 */const il="webStorageSupport";class KT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wc,this._completeRedirectFn=vT,this._overrideRedirectResult=mT}async _openPopup(e,n,s,i){var r;pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=yd(e,n,s,Hl(),i);return jT(e,o,Jc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),OE(yd(e,n,s,Hl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xT(e),s=new wT(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(il,{type:il},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[il];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return um()||zc()||ua()}}const WT=KT;var vd="@firebase/auth",_d="0.22.0";/**
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
 */class JT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YT(t){Js(new us("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{V(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hm(t)},u=new lE(a,l,c);return jI(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Js(new us("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(s=>new JT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(vd,_d,QT(t)),Ln(vd,_d,"esm2017")}/**
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
 */const XT=5*60,ZT=Hp("authIdTokenMaxAge")||XT;let wd=null;const eC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZT)return;const i=n==null?void 0:n.token;wd!==i&&(wd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nr(t=Kp()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(t,{popupRedirectResolver:WT,persistence:[BE,NE,Wc]}),s=Hp("authTokenSyncURL");if(s){const r=eC(s);EE(n,r,()=>r(n.currentUser)),IE(n,o=>r(o))}const i=jp("auth");return i&&cE(n,`http://${i}`),n}YT("Browser");var tC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,Xc=Xc||{},Q=tC||self;function Do(){}function fa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nC(t){return Object.prototype.hasOwnProperty.call(t,rl)&&t[rl]||(t[rl]=++sC)}var rl="closure_uid_"+(1e9*Math.random()>>>0),sC=0;function iC(t,e,n){return t.call.apply(t.bind,arguments)}function rC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=iC:rt=rC,rt.apply(null,arguments)}function zr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function qn(){this.s=this.s,this.o=this.o}var oC=0;qn.prototype.s=!1;qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oC!=0)&&nC(this)};qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function bd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(fa(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var aC=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Do,e),Q.removeEventListener("test",Do,e)}catch{}return t}();function Oo(t){return/^[\s\xa0]*$/.test(t)}var Id=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ol(t,e){return t<e?-1:t>e?1:0}function pa(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return pa().indexOf(t)!=-1}function eu(t){return eu[" "](t),t}eu[" "]=Do;function lC(t){var e=hC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cC=Xt("Opera"),Ys=Xt("Trident")||Xt("MSIE"),km=Xt("Edge"),Gl=km||Ys,Nm=Xt("Gecko")&&!(pa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),uC=pa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Rm(){var t=Q.document;return t?t.documentMode:void 0}var Po;e:{var al="",ll=function(){var t=pa();if(Nm)return/rv:([^\);]+)(\)|;)/.exec(t);if(km)return/Edge\/([\d\.]+)/.exec(t);if(Ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uC)return/WebKit\/(\S+)/.exec(t);if(cC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ll&&(al=ll?ll[1]:""),Ys){var cl=Rm();if(cl!=null&&cl>parseFloat(al)){Po=String(cl);break e}}Po=al}var hC={};function dC(){return lC(function(){let t=0;const e=Id(String(Po)).split("."),n=Id("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ol(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ol(i[2].length==0,r[2].length==0)||ol(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var zl;if(Q.document&&Ys){var Ed=Rm();zl=Ed||parseInt(Po,10)||void 0}else zl=void 0;var fC=zl;function sr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nm){e:{try{eu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sr.X.h.call(this)}}Qe(sr,ot);var pC={2:"touch",3:"pen",4:"mouse"};sr.prototype.h=function(){sr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ir="closure_listenable_"+(1e6*Math.random()|0),mC=0;function gC(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++mC,this.ba=this.ea=!1}function ma(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Dm(t){const e={};for(const n in t)e[n]=t[n];return e}const Td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Om(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Td.length;r++)n=Td[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ga(t){this.src=t,this.g={},this.h=0}ga.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Wl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gC(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Kl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Am(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ma(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),ul={};function Pm(t,e,n,s,i){if(s&&s.once)return Lm(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pm(t,e[r],n,s,i);return null}return n=ru(n),t&&t[Ir]?t.N(e,n,br(s)?!!s.capture:!!s,i):Mm(t,e,n,!1,s,i)}function Mm(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=br(i)?!!i.capture:!!i,a=iu(t);if(a||(t[nu]=a=new ga(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)aC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Um(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yC(){function t(n){return e.call(t.src,t.listener,n)}const e=vC;return t}function Lm(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Lm(t,e[r],n,s,i);return null}return n=ru(n),t&&t[Ir]?t.O(e,n,br(s)?!!s.capture:!!s,i):Mm(t,e,n,!0,s,i)}function xm(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)xm(t,e[r],n,s,i);else s=br(s)?!!s.capture:!!s,n=ru(n),t&&t[Ir]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Wl(r,n,s,i),-1<n&&(ma(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=iu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wl(e,n,s,i)),(n=-1<t?e[t]:null)&&su(n))}function su(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ir])Kl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Um(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=iu(e))?(Kl(n,t),n.h==0&&(n.src=null,e[nu]=null)):ma(t)}}}function Um(t){return t in ul?ul[t]:ul[t]="on"+t}function vC(t,e){if(t.ba)t=!0;else{e=new sr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&su(t),t=n.call(s,e)}return t}function iu(t){return t=t[nu],t instanceof ga?t:null}var hl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(t){return typeof t=="function"?t:(t[hl]||(t[hl]=function(e){return t.handleEvent(e)}),t[hl])}function Ge(){qn.call(this),this.i=new ga(this),this.P=this,this.I=null}Qe(Ge,qn);Ge.prototype[Ir]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){xm(this,t,e,n,s)};function Je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(s,t),Om(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Kr(o,s,!0,e)&&i}if(o=e.g=t,i=Kr(o,s,!0,e)&&i,i=Kr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Kr(o,s,!1,e)&&i}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ma(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Kr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Kl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ou=Q.JSON.stringify;function _C(){var t=Vm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wC{constructor(){this.h=this.g=null}add(e,n){const s=Fm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bC,t=>t.reset());class bC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IC(t){Q.setTimeout(()=>{throw t},0)}function $m(t,e){Jl||EC(),Ql||(Jl(),Ql=!0),Vm.add(t,e)}var Jl;function EC(){var t=Q.Promise.resolve(void 0);Jl=function(){t.then(TC)}}var Ql=!1,Vm=new wC;function TC(){for(var t;t=_C();){try{t.h.call(t.g)}catch(n){IC(n)}var e=Fm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ql=!1}function ya(t,e){Ge.call(this),this.h=t||1,this.g=e||Q,this.j=rt(this.lb,this),this.l=Date.now()}Qe(ya,Ge);j=ya.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(au(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function au(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){ya.X.M.call(this),au(this),delete this.g};function lu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Bm(t){t.g=lu(()=>{t.g=null,t.i&&(t.i=!1,Bm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CC extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bm(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(t){qn.call(this),this.h=t,this.g={}}Qe(ir,qn);var Cd=[];function jm(t,e,n,s){Array.isArray(n)||(n&&(Cd[0]=n.toString()),n=Cd);for(var i=0;i<n.length;i++){var r=Pm(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Hm(t){tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&su(e)},t),t.g={}}ir.prototype.M=function(){ir.X.M.call(this),Hm(this)};ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Aa=function(){this.g=!1};function SC(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function AC(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ps(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NC(t,n)+(s?" "+s:"")})}function kC(t,e){t.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function NC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ou(n)}catch{return e}}var ys={},Sd=null;function _a(){return Sd=Sd||new Ge}ys.Pa="serverreachability";function qm(t){ot.call(this,ys.Pa,t)}Qe(qm,ot);function rr(t){const e=_a();Je(e,new qm(e))}ys.STAT_EVENT="statevent";function Gm(t,e){ot.call(this,ys.STAT_EVENT,t),this.stat=e}Qe(Gm,ot);function pt(t){const e=_a();Je(e,new Gm(e,t))}ys.Qa="timingevent";function zm(t,e){ot.call(this,ys.Qa,t),this.size=e}Qe(zm,ot);function Er(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var wa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Km={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function cu(){}cu.prototype.h=null;function Ad(t){return t.h||(t.h=t.i())}function Wm(){}var Tr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uu(){ot.call(this,"d")}Qe(uu,ot);function hu(){ot.call(this,"c")}Qe(hu,ot);var Yl;function ba(){}Qe(ba,cu);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};Yl=new ba;function Cr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ir(this),this.O=RC,t=Gl?125:void 0,this.T=new ya(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jm}function Jm(){this.i=null,this.g="",this.h=!1}var RC=45e3,Xl={},Mo={};j=Cr.prototype;j.setTimeout=function(t){this.O=t};function Zl(t,e,n){t.K=1,t.v=Ea(mn(e)),t.s=n,t.P=!0,Qm(t,null)}function Qm(t,e){t.F=Date.now(),Sr(t),t.A=mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ig(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Jm,t.g=Cg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CC(rt(t.La,t,t.g),t.N)),jm(t.S,t.g,"readystatechange",t.ib),e=t.H?Dm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),rr(),SC(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&cn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||Gl||this.g&&(this.h.h||this.g.fa()||Dd(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?rr(3):rr(2)),Ia(this);var n=this.g.aa();this.Y=n;t:if(Ym(this)){var s=Dd(this.g);t="";var i=s.length,r=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),Vi(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AC(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oo(a)){var c=a;break t}}c=null}if(n=c)Ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ec(this,n);else{this.i=!1,this.o=3,pt(12),ns(this),Vi(this);break e}}this.P?(Xm(this,u,o),Gl&&this.i&&u==3&&(jm(this.S,this.T,"tick",this.hb),this.T.start())):(Ps(this.j,this.m,o,null),ec(this,o)),u==4&&ns(this),this.i&&!this.I&&(u==4?bg(this.l,this):(this.i=!1,Sr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),ns(this),Vi(this)}}}catch{}finally{}};function Ym(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=DC(t,n),i==Mo){e==4&&(t.o=4,pt(14),s=!1),Ps(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xl){t.o=4,pt(15),Ps(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ps(t.j,t.m,i,null),ec(t,i);Ym(t)&&i!=Mo&&i!=Xl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vu(e),e.K=!0,pt(11))):(Ps(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),Vi(t))}j.hb=function(){if(this.g){var t=cn(this.g),e=this.g.fa();this.C<e.length&&(Ia(this),Xm(this,t,e),this.i&&t!=4&&Sr(this))}};function DC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Mo:(n=Number(e.substring(n,s)),isNaN(n)?Xl:(s+=1,s+n>e.length?Mo:(e=e.substr(s,n),t.C=s+n,e)))}j.cancel=function(){this.I=!0,ns(this)};function Sr(t){t.V=Date.now()+t.O,Zm(t,t.O)}function Zm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Er(rt(t.gb,t),e)}function Ia(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kC(this.j,this.A),this.K!=2&&(rr(),pt(17)),ns(this),this.o=2,Vi(this)):Zm(this,this.V-t)};function Vi(t){t.l.G==0||t.I||bg(t.l,t)}function ns(t){Ia(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,au(t.T),Hm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ec(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tc(n.h,t))){if(!t.J&&tc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Uo(n),Sa(n);else break e;yu(n),pt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Er(rt(n.cb,n),6e3));if(1>=ag(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ss(n,11)}else if((t.J||n.g==t)&&Uo(n),!Oo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=c[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.h;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(du(r,r.h),r.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,ke(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Tg(s,s.H?s.ka:null,s.V),o.J){lg(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ia(a),Sr(a)),s.g=o}else _g(s);0<n.i.length&&Aa(n)}else c[0]!="stop"&&c[0]!="close"||ss(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ss(n,7):gu(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}rr(4)}catch{}}function OC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function PC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function eg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PC(t),s=OC(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ls(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ls){this.h=e!==void 0?e:t.h,Lo(this,t.j),this.s=t.s,this.g=t.g,xo(this,t.m),this.l=t.l,e=t.i;var n=new or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kd(this,n),this.o=t.o}else t&&(n=String(t).match(tg))?(this.h=!!e,Lo(this,n[1]||"",!0),this.s=Ni(n[2]||""),this.g=Ni(n[3]||"",!0),xo(this,n[4]),this.l=Ni(n[5]||"",!0),kd(this,n[6]||"",!0),this.o=Ni(n[7]||"")):(this.h=!!e,this.i=new or(null,this.h))}ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ri(e,Nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ri(e,Nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ri(n,n.charAt(0)=="/"?UC:xC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ri(n,$C)),t.join("")};function mn(t){return new ls(t)}function Lo(t,e,n){t.j=n?Ni(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kd(t,e,n){e instanceof or?(t.i=e,VC(t.i,t.h)):(n||(e=Ri(e,FC)),t.i=new or(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Ea(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ni(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nd=/[#\/\?@]/g,xC=/[#\?:]/g,UC=/[#\?]/g,FC=/[#\?@]/g,$C=/#/g;function or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&MC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=or.prototype;j.add=function(t,e){Gn(this),this.i=null,t=fi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ng(t,e){Gn(t),e=fi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sg(t,e){return Gn(t),e=fi(t,e),t.g.has(e)}j.forEach=function(t,e){Gn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};j.oa=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};j.W=function(t){Gn(this);let e=[];if(typeof t=="string")sg(this,t)&&(e=e.concat(this.g.get(fi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Gn(this),this.i=null,t=fi(this,t),sg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ig(t,e,n){ng(t,e),0<n.length&&(t.i=null,t.g.set(fi(t,e),Zc(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function fi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VC(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(ng(this,s),ig(this,i,n))},t)),t.j=e}var BC=class{constructor(e,n){this.h=e,this.g=n}};function rg(t){this.l=t||jC,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jC=10;function og(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ag(t){return t.h?1:t.g?t.g.size:0}function tc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function du(t,e){t.g?t.g.add(e):t.h=e}function lg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rg.prototype.cancel=function(){if(this.i=cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zc(t.i)}function fu(){}fu.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function HC(){this.g=new fu}function qC(t,e,n){const s=n||"";try{eg(t,function(i,r){let o=i;br(i)&&(o=ou(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function GC(t,e){const n=new va;if(Q.Image){const s=new Image;s.onload=zr(Wr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zr(Wr,n,s,"TestLoadImage: error",!1,e),s.onabort=zr(Wr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zr(Wr,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Wr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ar(t){this.l=t.ac||null,this.j=t.jb||!1}Qe(Ar,cu);Ar.prototype.g=function(){return new Ta(this.l,this.j)};Ar.prototype.i=function(t){return function(){return t}}({});function Ta(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Ta,Ge);var pu=0;j=Ta.prototype;j.open=function(t,e){if(this.readyState!=pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ar(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=pu};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ug(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ug(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kr(this):ar(this),this.readyState==3&&ug(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,kr(this))};j.Ua=function(t){this.g&&(this.response=t,kr(this))};j.ga=function(){this.g&&kr(this)};function kr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ar(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zC=Q.JSON.parse;function De(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hg,this.K=this.L=!1}Qe(De,Ge);var hg="",KC=/^https?$/i,WC=["POST","PUT"];j=De.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yl.g(),this.C=this.u?Ad(this.u):Ad(Yl),this.g.onreadystatechange=rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Rd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=Am(WC,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pg(this),0<this.B&&((this.K=JC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.qa,this)):this.A=lu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Rd(this,r)}};function JC(t){return Ys&&dC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof Xc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dg(t),Ca(t)}function dg(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Ca(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ca(this,!0)),De.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?fg(this):this.fb())};j.fb=function(){fg(this)};function fg(t){if(t.h&&typeof Xc<"u"&&(!t.C[1]||cn(t)!=4||t.aa()!=2)){if(t.v&&cn(t)==4)lu(t.Ha,0,t);else if(Je(t,"readystatechange"),cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(tg)[1]||null;if(!i&&Q.self&&Q.self.location){var r=Q.self.location.protocol;i=r.substr(0,r.length-1)}s=!KC.test(i?i.toLowerCase():"")}n=s}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dg(t)}}finally{Ca(t)}}}}function Ca(t,e){if(t.g){pg(t);const n=t.g,s=t.C[0]?Do:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=s}catch{}}}function pg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zC(e)}};function Dd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mg(t){let e="";return tu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function mu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gg(t){this.Ca=0,this.i=[],this.j=new va,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Si("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Si("baseRetryDelayMs",5e3,t),this.bb=Si("retryDelaySeedMs",1e4,t),this.$a=Si("forwardChannelMaxRetries",2,t),this.ta=Si("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new rg(t&&t.concurrentRequestLimit),this.Fa=new HC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=gg.prototype;j.ma=8;j.G=1;function gu(t){if(yg(t),t.G==3){var e=t.U++,n=mn(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),Nr(t,n),e=new Cr(t,t.j,e,void 0),e.K=2,e.v=Ea(mn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Sr(e)}Eg(t)}function Sa(t){t.g&&(vu(t),t.g.cancel(),t.g=null)}function yg(t){Sa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Uo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Aa(t){og(t.h)||t.m||(t.m=!0,$m(t.Ja,t),t.C=0)}function QC(t,e){return ag(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Er(rt(t.Ja,t,e),Ig(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Cr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Dm(r),Om(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vg(this,i,e),n=mn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),Nr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(mg(r)))+"&"+e:this.o&&mu(n,this.o,r)),du(this.h,i),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),i.Z=!0,Zl(i,n,null)):Zl(i,n,e),this.G=2}}else this.G==3&&(t?Od(this,t):this.i.length==0||og(this.h)||Od(this))};function Od(t,e){var n;e?n=e.m:n=t.U++;const s=mn(t.F);ke(s,"SID",t.I),ke(s,"RID",n),ke(s,"AID",t.T),Nr(t,s),t.o&&t.s&&mu(s,t.o,t.s),n=new Cr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),du(t.h,n),Zl(n,s,e)}function Nr(t,e){t.ia&&tu(t.ia,function(n,s){ke(e,s,n)}),t.l&&eg({},function(n,s){ke(e,s,n)})}function vg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{qC(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _g(t){t.g||t.u||(t.Z=1,$m(t.Ia,t),t.A=0)}function yu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Er(rt(t.Ia,t),Ig(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,wg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Er(rt(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),Sa(this),wg(this))};function vu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function wg(t){t.g=new Cr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=mn(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),Nr(t,e),t.o&&t.s&&mu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ea(mn(e)),n.s=null,n.P=!0,Qm(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Sa(this),yu(this),pt(19))};function Uo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function bg(t,e){var n=null;if(t.g==e){Uo(t),vu(t),t.g=null;var s=2}else if(tc(t.h,e))n=e.D,lg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=_a(),Je(s,new zm(s,n)),Aa(t)}else _g(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&QC(t,e)||s==2&&yu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function Ig(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.kb,t);n||(n=new ls("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Lo(n,"https"),Ea(n)),GC(n.toString(),s)}else pt(2);t.G=0,t.l&&t.l.va(e),Eg(t),yg(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Eg(t){if(t.G=0,t.la=[],t.l){const e=cg(t.h);(e.length!=0||t.i.length!=0)&&(bd(t.la,e),bd(t.la,t.i),t.h.i.length=0,Zc(t.i),t.i.length=0),t.l.ua()}}function Tg(t,e,n){var s=n instanceof ls?mn(n):new ls(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),xo(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ls(null,void 0);s&&Lo(r,s),e&&(r.g=e),i&&xo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ke(s,n,e),ke(s,"VER",t.ma),Nr(t,s),s}function Cg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new Ar({jb:!0})):new De(t.ra),e.Ka(t.H),e}function Sg(){}j=Sg.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Fo(){if(Ys&&!(10<=Number(fC)))throw Error("Environmental error: no available transport.")}Fo.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){Ge.call(this),this.g=new gg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pi(this)}Qe(Ct,Ge);Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Tg(t,null,t.V),Aa(t)};Ct.prototype.close=function(){gu(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ou(t),t=n);e.i.push(new BC(e.ab++,t)),e.G==3&&Aa(e)};Ct.prototype.M=function(){this.g.l=null,delete this.j,gu(this.g),delete this.g,Ct.X.M.call(this)};function Ag(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(Ag,uu);function kg(){hu.call(this),this.status=1}Qe(kg,hu);function pi(t){this.g=t}Qe(pi,Sg);pi.prototype.xa=function(){Je(this.g,"a")};pi.prototype.wa=function(t){Je(this.g,new Ag(t))};pi.prototype.va=function(t){Je(this.g,new kg)};pi.prototype.ua=function(){Je(this.g,"b")};Fo.prototype.createWebChannel=Fo.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;wa.NO_ERROR=0;wa.TIMEOUT=8;wa.HTTP_ERROR=6;Km.COMPLETE="complete";Wm.EventType=Tr;Tr.OPEN="a";Tr.CLOSE="b";Tr.ERROR="c";Tr.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var YC=function(){return new Fo},XC=function(){return _a()},dl=wa,ZC=Km,e1=ys,Pd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},t1=Ar,Jr=Wm,n1=De;const Md="@firebase/firestore";/**
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
 */let mi="9.19.0";/**
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
 */const fs=new $c("@firebase/firestore");function Ld(){return fs.logLevel}function H(t,...e){if(fs.logLevel<=pe.DEBUG){const n=e.map(_u);fs.debug(`Firestore (${mi}): ${t}`,...n)}}function gn(t,...e){if(fs.logLevel<=pe.ERROR){const n=e.map(_u);fs.error(`Firestore (${mi}): ${t}`,...n)}}function $o(t,...e){if(fs.logLevel<=pe.WARN){const n=e.map(_u);fs.warn(`Firestore (${mi}): ${t}`,...n)}}function _u(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Ae(t,e){t||J()}function ne(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ng{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class i1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r1{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Ng(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new et(e)}}class o1{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class a1{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new o1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new l1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function u1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Rg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=u1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ve(0,0))}static max(){return new ee(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class lr{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends lr{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const h1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends lr{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return h1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function d1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new $n(i,G.empty(),e)}function f1(t){return new $n(t.readTime,t.key,-1)}class $n{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $n(ee.min(),G.empty(),-1)}static max(){return new $n(ee.max(),G.empty(),-1)}}function p1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const m1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==m1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Dr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}wu.ct=-1;function ka(t){return t==null}function Vo(t){return t===0&&1/t==-1/0}function y1(t){return typeof t=="number"&&Number.isInteger(t)&&!Vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qr(this.root,e,this.comparator,!0)}}class Qr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=i??Ke.EMPTY,this.right=r??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ud(this.data.getIterator())}getIteratorFrom(e){return new Ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Be(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class v1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new v1("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const _1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=_1.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zs(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Og(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return Og(e)?Pg(e):e}function cr(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class w1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Og(t)?4:b1(t)?9007199254740991:10:J()}function nn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cr(t).isEqual(cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Vn(s.timestampValue),o=Vn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zs(s.bytesValue).isEqual(Zs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=xe(s.doubleValue),o=xe(i.doubleValue);return r===o?Vo(r)===Vo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(xd(r)!==xd(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!nn(r[a],o[a])))return!1;return!0}(t,e);default:return J()}}function hr(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=xe(i.integerValue||i.doubleValue),a=xe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(cr(t),cr(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Zs(i),a=Zs(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=me(o[l],a[l]);if(c!==0)return c}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=me(xe(i.latitude),xe(r.latitude));return o!==0?o:me(xe(i.longitude),xe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ei(o[l],a[l]);if(c)return c}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Yr.mapValue&&r===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(r===Yr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=me(a[u],c[u]);if(d!==0)return d;const f=ei(o[a[u]],l[c[u]]);if(f!==0)return f}return me(a.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Vn(t),s=Vn(e),i=me(n.seconds,s.seconds);return i!==0?i:me(n.nanos,s.nanos)}function ti(t){return nc(t)}function nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Vn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=nc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${nc(s.fields[a])}`;return r+"}"}(t.mapValue):J();var e,n}function $d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sc(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Vd(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function co(t){return!!t&&"mapValue"in t}function Bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Bi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function b1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=st.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Bi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];co(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){gi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Nt(Bi(this.value))}}function Mg(t){const e=[];return gi(t.fields,(n,s)=>{const i=new st([n]);if(co(s)){const r=Mg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class tt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ee.min(),ee.min(),ee.min(),Nt.empty(),0)}static newFoundDocument(e,n,s,i){return new tt(e,1,n,ee.min(),s,i,0)}static newNoDocument(e,n){return new tt(e,2,n,ee.min(),ee.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ee.min(),ee.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bo{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=ei(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function I1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lg{}class Ue extends Lg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new T1(e,n,s):n==="array-contains"?new A1(e,s):n==="in"?new k1(e,s):n==="not-in"?new N1(e,s):n==="array-contains-any"?new R1(e,s):new Ue(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new C1(e,s):new S1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ei(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zt extends Lg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new zt(e,n)}matches(e){return xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function xg(t){return t.op==="and"}function Ug(t){return E1(t)&&xg(t)}function E1(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function ic(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ti(t.value);if(Ug(t))return t.filters.map(e=>ic(e)).join(",");{const e=t.filters.map(n=>ic(n)).join(",");return`${t.op}(${e})`}}function Fg(t,e){return t instanceof Ue?function(n,s){return s instanceof Ue&&n.op===s.op&&n.field.isEqual(s.field)&&nn(n.value,s.value)}(t,e):t instanceof zt?function(n,s){return s instanceof zt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Fg(r,s.filters[o]),!0):!1}(t,e):void J()}function $g(t){return t instanceof Ue?function(e){return`${e.field.canonicalString()} ${e.op} ${ti(e.value)}`}(t):t instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map($g).join(" ,")+"}"}(t):"Filter"}class T1 extends Ue{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class C1 extends Ue{constructor(e,n){super(e,"in",n),this.keys=Vg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S1 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Vg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class A1 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&hr(n.arrayValue,this.value)}}class k1 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hr(this.value.arrayValue,n)}}class N1 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hr(this.value.arrayValue,n)}}class R1 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>hr(this.value.arrayValue,s))}}/**
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
 */class D1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function qd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new D1(t,e,n,s,i,r,o)}function Iu(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ic(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ti(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ti(s)).join(",")),e.ft=n}return e.ft}function Eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hd(t.startAt,e.startAt)&&Hd(t.endAt,e.endAt)}function rc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yi{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function O1(t,e,n,s,i,r,o,a){return new yi(t,e,n,s,i,r,o,a)}function Tu(t){return new yi(t)}function Gd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Na(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Bg(t){return t.collectionGroup!==null}function Hs(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=Na(e),s=Cu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new js(n)),e.dt.push(new js(st.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new js(st.keyField(),r))}}}return e.dt}function yn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=qd(e.path,e.collectionGroup,Hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Hs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new js(r.field,o))}const s=e.endAt?new Bo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Bo(e.startAt.position,e.startAt.inclusive):null;e.wt=qd(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function oc(t,e){e.getFirstInequalityField(),Na(t);const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ac(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return Eu(yn(t),yn(e))&&t.limitType===e.limitType}function jg(t){return`${Iu(yn(t))}|lt:${t.limitType}`}function lc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>$g(s)).join(", ")}]`),ka(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ti(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ti(s)).join(",")),`Target(${n})`}(yn(t))}; limitType=${t.limitType})`}function Da(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Hs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=jd(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Hs(n),s)||n.endAt&&!function(i,r,o){const a=jd(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Hs(n),s))}(t,e)}function P1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hg(t){return(e,n)=>{let s=!1;for(const i of Hs(t)){const r=M1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function M1(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ei(a,l):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Dg(this.inner)}size(){return this.innerSize}}/**
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
 */const L1=new He(G.comparator);function vn(){return L1}const qg=new He(G.comparator);function Di(...t){let e=qg;for(const n of t)e=e.insert(n.key,n);return e}function Gg(t){let e=qg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function is(){return ji()}function zg(){return ji()}function ji(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const x1=new He(G.comparator),U1=new Be(G.comparator);function le(...t){let e=U1;for(const n of t)e=e.add(n);return e}const F1=new Be(me);function Kg(){return F1}/**
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
 */function Wg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function Jg(t){return{integerValue:""+t}}function $1(t,e){return y1(e)?Jg(e):Wg(t,e)}/**
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
 */class Oa{constructor(){this._=void 0}}function V1(t,e,n){return t instanceof jo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof dr?Yg(t,e):t instanceof fr?Xg(t,e):function(s,i){const r=Qg(s,i),o=zd(r)+zd(s._t);return sc(r)&&sc(s._t)?Jg(o):Wg(s.serializer,o)}(t,e)}function B1(t,e,n){return t instanceof dr?Yg(t,e):t instanceof fr?Xg(t,e):n}function Qg(t,e){return t instanceof Ho?sc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class jo extends Oa{}class dr extends Oa{constructor(e){super(),this.elements=e}}function Yg(t,e){const n=Zg(e);for(const s of t.elements)n.some(i=>nn(i,s))||n.push(s);return{arrayValue:{values:n}}}class fr extends Oa{constructor(e){super(),this.elements=e}}function Xg(t,e){let n=Zg(e);for(const s of t.elements)n=n.filter(i=>!nn(i,s));return{arrayValue:{values:n}}}class Ho extends Oa{constructor(e,n){super(),this.serializer=e,this._t=n}}function zd(t){return xe(t.integerValue||t.doubleValue)}function Zg(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function j1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof dr&&s instanceof dr||n instanceof fr&&s instanceof fr?Xs(n.elements,s.elements,nn):n instanceof Ho&&s instanceof Ho?nn(n._t,s._t):n instanceof jo&&s instanceof jo}(t.transform,e.transform)}class H1{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pa{}function ey(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Su(t.key,Zt.none()):new Or(t.key,t.data,Zt.none());{const n=t.data,s=Nt.empty();let i=new Be(st.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new vs(t.key,s,new Ht(i.toArray()),Zt.none())}}function q1(t,e,n){t instanceof Or?function(s,i,r){const o=s.value.clone(),a=Wd(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,i,r){if(!uo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Wd(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ty(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Hi(t,e,n,s){return t instanceof Or?function(i,r,o,a){if(!uo(i.precondition,r))return o;const l=i.value.clone(),c=Jd(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(i,r,o,a){if(!uo(i.precondition,r))return o;const l=Jd(i.fieldTransforms,a,r),c=r.data;return c.setAll(ty(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return uo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function G1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Qg(s.transform,i||null);r!=null&&(n===null&&(n=Nt.empty()),n.set(s.field,r))}return n||null}function Kd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Xs(n,s,(i,r)=>j1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Or extends Pa{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends Pa{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ty(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wd(t,e,n){const s=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,B1(o,a,n[i]))}return s}function Jd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,V1(r,o,e))}return s}class Su extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z1 extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class K1{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&q1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=ey(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,s)=>Kd(n,s))&&Xs(this.baseMutations,e.baseMutations,(n,s)=>Kd(n,s))}}class Au{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ae(e.mutations.length===s.length);let i=x1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Au(e,n,s,i)}}/**
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
 */class W1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J1{constructor(e){this.count=e}}/**
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
 */var Le,ce;function Q1(t){switch(t){default:return J();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ny(t){if(t===void 0)return gn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Le.OK:return I.OK;case Le.CANCELLED:return I.CANCELLED;case Le.UNKNOWN:return I.UNKNOWN;case Le.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Le.INTERNAL:return I.INTERNAL;case Le.UNAVAILABLE:return I.UNAVAILABLE;case Le.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Le.NOT_FOUND:return I.NOT_FOUND;case Le.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Le.ABORTED:return I.ABORTED;case Le.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Le.DATA_LOSS:return I.DATA_LOSS;default:return J()}}(ce=Le||(Le={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ku{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xr}static getOrCreateInstance(){return Xr===null&&(Xr=new ku),Xr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Xr=null;/**
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
 */class Ma{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Pr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ma(ee.min(),i,Kg(),vn(),le())}}class Pr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Pr(s,n,le(),le(),le())}}/**
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
 */class ho{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class sy{constructor(e,n){this.targetId=e,this.Et=n}}class iy{constructor(e,n,s=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qd{constructor(){this.At=0,this.Rt=Xd(),this.vt=ct.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),s=le();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:J()}}),new Pr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Xd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Y1{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=vn(),this.qt=Yd(),this.Ut=new Be(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(rc(o))if(i===0){const a=new G(o.path);this.Qt(s,a,tt.newNoDocument(a,ee.min()))}else Ae(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=ku.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&rc(a.target)){const l=new G(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,tt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Ma(e,n,this.Ut,this.Lt,s);return this.Lt=vn(),this.qt=Yd(),this.Ut=new Be(me),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Qd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Be(me),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Qd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new He(G.comparator)}function Xd(){return new He(G.comparator)}/**
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
 */const X1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Z1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eS=(()=>({and:"AND",or:"OR"}))();class tS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ry(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nS(t,e){return qo(t,e.toTimestamp())}function en(t){return Ae(!!t),ee.fromTimestamp(function(e){const n=Vn(e);return new Ve(n.seconds,n.nanos)}(t))}function Nu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oy(t){const e=Se.fromString(t);return Ae(uy(e)),e}function cc(t,e){return Nu(t.databaseId,e.path)}function fl(t,e){const n=oy(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(ay(n))}function uc(t,e){return Nu(t.databaseId,e)}function sS(t){const e=oy(t);return e.length===4?Se.emptyPath():ay(e)}function hc(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ay(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:cc(t,e),fields:n.value.mapValue.fields}}function iS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Ae(c===void 0||typeof c=="string"),ct.fromBase64String(c||"")):(Ae(c===void 0||c instanceof Uint8Array),ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?I.UNKNOWN:ny(l.code);return new U(c,l.message||"")}(o);n=new iy(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=fl(t,s.document.name),r=en(s.document.updateTime),o=s.document.createTime?en(s.document.createTime):ee.min(),a=new Nt({mapValue:{fields:s.document.fields}}),l=tt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ho(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=fl(t,s.document),r=s.readTime?en(s.readTime):ee.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=fl(t,s.document),r=s.removedTargetIds||[];n=new ho([],r,i,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new J1(i),o=s.targetId;n=new sy(o,r)}}return n}function rS(t,e){let n;if(e instanceof Or)n={update:Zd(t,e.key,e.value)};else if(e instanceof Su)n={delete:cc(t,e.key)};else if(e instanceof vs)n={update:Zd(t,e.key,e.data),updateMask:pS(e.fieldMask)};else{if(!(e instanceof z1))return J();n={verify:cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof jo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof dr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ho)return{fieldPath:r.field.canonicalString(),increment:o._t};throw J()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function oS(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?en(s.updateTime):en(i);return r.isEqual(ee.min())&&(r=en(i)),new H1(r,s.transformResults||[])}(n,e))):[]}function aS(t,e){return{documents:[uc(t,e.path)]}}function lS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=uc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=uc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return cy(zt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Rs(u.field),direction:hS(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||ka(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function cS(t){let e=sS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=ly(u);return d instanceof zt&&Ug(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new js(Ds(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,ka(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Bo(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Bo(f,d)}(n.endAt)),O1(e,i,o,r,a,"F",l,c)}function uS(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ly(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ds(e.unaryFilter.field);return Ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(e.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(e.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ds(e.unaryFilter.field);return Ue.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Ue.create(Ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(n=>ly(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function hS(t){return X1[t]}function dS(t){return Z1[t]}function fS(t){return eS[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function Ds(t){return st.fromServerFormat(t.fieldPath)}function cy(t){return t instanceof Ue?function(e){if(e.op==="=="){if(Bd(e.value))return{unaryFilter:{field:Rs(e.field),op:"IS_NAN"}};if(Vd(e.value))return{unaryFilter:{field:Rs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bd(e.value))return{unaryFilter:{field:Rs(e.field),op:"IS_NOT_NAN"}};if(Vd(e.value))return{unaryFilter:{field:Rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(e.field),op:dS(e.op),value:e.value}}}(t):t instanceof zt?function(e){const n=e.getFilters().map(s=>cy(s));return n.length===1?n[0]:{compositeFilter:{op:fS(e.op),filters:n}}}(t):J()}function pS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cs{constructor(e,n,s,i,r=ee.min(),o=ee.min(),a=ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class mS{constructor(e){this.se=e}}function gS(t){const e=cS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ac(e,e.limit,"L"):e}/**
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
 */class yS{constructor(){this.He=new vS}addToCollectionParentIndex(e,n){return this.He.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve($n.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve($n.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class vS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Be(Se.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Be(Se.comparator)).toArray()}}/**
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
 */class ni{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ni(0)}static bn(){return new ni(-1)}}/**
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
 */class _S{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Hi(s.mutation,i,Ht.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=is();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Di();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=vn();const o=ji(),a=ji();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof vs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Hi(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new wS(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ji();let i=new He((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ht.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=zg();u.forEach(f=>{if(!r.has(f)){const g=ey(n.get(f),s.get(f));g!==null&&d.set(f,g),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(is());let a=-1,l=r;return o.next(c=>A.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:Gg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=Di();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Di();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,u){return new yi(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,tt.newInvalidDocument(c)))});let o=Di();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Hi(c.mutation,l,Ht.empty(),Ve.now()),Da(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class IS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:en(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:gS(s.bundledQuery),readTime:en(s.readTime)}}(n)),A.resolve()}}/**
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
 */class ES{constructor(){this.overlays=new He(G.comparator),this.ts=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=is();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=is(),r=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new He((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=is(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=is(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return A.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new W1(n,s));let r=this.ts.get(n);r===void 0&&(r=le(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class Ru{constructor(){this.es=new Be(qe.ns),this.ss=new Be(qe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new qe(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new qe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new G(new Se([])),s=new qe(n,e),i=new qe(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Se([])),s=new qe(n,e),i=new qe(n,e+1);let r=le();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new qe(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||me(e.ds,n.ds)}static rs(e,n){return me(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
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
 */class TS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Be(qe.ns)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K1(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new qe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Be(me);return n.forEach(i=>{const r=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),A.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new qe(new G(r),0);let a=new Be(me);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),A.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return A.forEach(n.mutations,i=>{const r=new qe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new qe(n,0),i=this._s.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class CS{constructor(e){this.Ts=e,this.docs=new He(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=vn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||p1(f1(u),s)<=0||(i.has(u.key)||Da(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){J()}Es(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new SS(this)}getSize(e){return A.resolve(this.size)}}class SS extends _S{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class AS{constructor(e){this.persistence=e,this.As=new vi(n=>Iu(n),Eu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ru,this.targetCount=0,this.bs=ni.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),A.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ni(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Sn(n),A.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.vs.containsKey(n))}}/**
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
 */class kS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new wu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new AS(this),this.indexManager=new yS,this.remoteDocumentCache=function(s){return new CS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new mS(n),this.xs=new IS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ES,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new TS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const i=new NS(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return A.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class NS extends g1{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.$s=new Ru,this.Ms=null}static Fs(e){return new Du(e)}get Bs(){if(this.Ms)return this.Ms;throw J()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),A.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Bs,s=>{const i=G.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,ee.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return A.or([()=>A.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Ou{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ou(e,n.fromCache,s,i)}}/**
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
 */class RS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Gd(n))return A.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ac(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,ac(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,s,i){return Gd(n)||i.isEqual(ee.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(Ld()<=pe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lc(n)),this.Fi(e,o,n,d1(i,-1)))})}$i(e,n){let s=new Be(Hg(e));return n.forEach((i,r)=>{Da(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Ld()<=pe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",lc(n)),this.xi.getDocumentsMatchingQuery(e,n,$n.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class DS{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new He(me),this.qi=new vi(r=>Iu(r),Eu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function OS(t,e,n,s){return new DS(t,e,n,s)}async function hy(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function PS(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let f=A.resolve();return d.forEach(g=>{f=f.next(()=>c.getEntry(a,g)).next(w=>{const _=l.docVersions.get(g);Ae(_!==null),w.version.compareTo(_)<0&&(u.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),c.addEntry(w)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function dy(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function MS(t,e){const n=ne(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,d)=>{const f=i.get(d);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,d)));let g=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(d,g),function(w,_,O){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,g,u)&&a.push(n.Ds.updateTargetData(r,g))});let l=vn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(LS(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(ee.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(d=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=i,r))}function LS(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=vn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function xS(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function US(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,A.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new cs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function dc(t,e,n){const s=ne(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dr(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function ef(t,e,n){const s=ne(t);let i=ee.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ne(a),d=u.qi.get(c);return d!==void 0?A.resolve(u.Li.get(d)):u.Ds.getTargetData(l,c)}(s,o,yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?r:le())).next(a=>(FS(s,P1(e),a),{documents:a,Wi:r})))}function FS(t,e,n){let s=t.Ui.get(e)||ee.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class tf{constructor(){this.activeTargetIds=Kg()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $S{constructor(){this.Br=new tf,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new tf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VS{qr(e){}shutdown(){}}/**
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
 */class nf{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zr=null;function pl(){return Zr===null?Zr=268435456+Math.round(2147483648*Math.random()):Zr++,"0x"+Zr.toString(16)}/**
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
 */const BS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jS{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ze="WebChannelConnection";class HS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=pl(),a=this.ao(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(H("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw $o("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+mi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=BS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=pl();return new Promise((o,a)=>{const l=new n1;l.setWithCredentials(!0),l.listenOnce(ZC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dl.NO_ERROR:const u=l.getResponseJson();H(Ze,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case dl.TIMEOUT:H(Ze,`RPC '${e}' ${r} timed out`),a(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const d=l.getStatus();if(H(Ze,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const w=function(_){const O=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(O)>=0?O:I.UNKNOWN}(g.status);a(new U(w,g.message))}else a(new U(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(I.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(Ze,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);H(Ze,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=pl(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YC(),a=XC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new t1({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let d=!1,f=!1;const g=new jS({Wr:_=>{f?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),u.open(),d=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),w=(_,O,R)=>{_.listen(O,$=>{try{R($)}catch(L){setTimeout(()=>{throw L},0)}})};return w(u,Jr.EventType.OPEN,()=>{f||H(Ze,`RPC '${e}' stream ${i} transport opened.`)}),w(u,Jr.EventType.CLOSE,()=>{f||(f=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),g.so())}),w(u,Jr.EventType.ERROR,_=>{f||(f=!0,$o(Ze,`RPC '${e}' stream ${i} transport errored:`,_),g.so(new U(I.UNAVAILABLE,"The operation could not be completed")))}),w(u,Jr.EventType.MESSAGE,_=>{var O;if(!f){const R=_.data[0];Ae(!!R);const $=R,L=$.error||((O=$[0])===null||O===void 0?void 0:O.error);if(L){H(Ze,`RPC '${e}' stream ${i} received error:`,L);const X=L.status;let ue=function(Fe){const Z=Le[Fe];if(Z!==void 0)return ny(Z)}(X),Ne=L.message;ue===void 0&&(ue=I.INTERNAL,Ne="Unknown error status: "+X+" with message "+L.message),f=!0,g.so(new U(ue,Ne)),u.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,R),g.io(R)}}),w(a,e1.STAT_EVENT,_=>{_.stat===Pd.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Pd.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function ml(){return typeof document<"u"?document:null}/**
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
 */function La(t){return new tS(t,!0)}/**
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
 */class fy{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class py{constructor(e,n,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fy(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new U(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qS extends py{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=iS(this.serializer,e),s=function(i){if(!("targetChange"in i))return ee.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ee.min():r.readTime?en(r.readTime):ee.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=hc(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=rc(a)?{documents:aS(i,a)}:{query:lS(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ry(i,r.resumeToken):r.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=qo(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=uS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=hc(this.serializer),n.removeTarget=e,this.Fo(n)}}class GS extends py{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=oS(e.writeResults,e.commitTime),s=en(e.commitTime);return this.listener.Zo(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=hc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>rS(this.serializer,s))};this.Fo(n)}}/**
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
 */class zS extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(I.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(I.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class KS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(gn(n),this.ru=!1):H("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class WS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{_s(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l.du.add(4),await Mr(l),l.mu.set("Unknown"),l.du.delete(4),await xa(l)}(this))})}),this.mu=new KS(s,i)}}async function xa(t){if(_s(t))for(const e of t.wu)await e(!0)}async function Mr(t){for(const e of t.wu)await e(!1)}function my(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Lu(n)?Mu(n):_i(n).No()&&Pu(n,e))}function gy(t,e){const n=ne(t),s=_i(n);n.fu.delete(e),s.No()&&yy(n,e),n.fu.size===0&&(s.No()?s.$o():_s(n)&&n.mu.set("Unknown"))}function Pu(t,e){t.gu.Ot(e.targetId),_i(t).jo(e)}function yy(t,e){t.gu.Ot(e),_i(t).Wo(e)}function Mu(t){t.gu=new Y1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),_i(t).start(),t.mu.ou()}function Lu(t){return _s(t)&&!_i(t).xo()&&t.fu.size>0}function _s(t){return ne(t).du.size===0}function vy(t){t.gu=void 0}async function JS(t){t.fu.forEach((e,n)=>{Pu(t,e)})}async function QS(t,e){vy(t),Lu(t)?(t.mu.au(e),Mu(t)):t.mu.set("Unknown")}async function YS(t,e,n){if(t.mu.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Go(t,s)}else if(e instanceof ho?t.gu.Kt(e):e instanceof sy?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ee.min()))try{const s=await dy(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),yy(i,a);const c=new cs(l.target,a,1,l.sequenceNumber);Pu(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await Go(t,s)}}async function Go(t,e,n){if(!Dr(e))throw e;t.du.add(1),await Mr(t),t.mu.set("Offline"),n||(n=()=>dy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await xa(t)})}function _y(t,e){return e().catch(n=>Go(t,n,e))}async function Ua(t){const e=ne(t),n=Bn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;XS(e);)try{const i=await xS(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,ZS(e,i)}catch(i){await Go(e,i)}wy(e)&&by(e)}function XS(t){return _s(t)&&t.lu.length<10}function ZS(t,e){t.lu.push(e);const n=Bn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function wy(t){return _s(t)&&!Bn(t).xo()&&t.lu.length>0}function by(t){Bn(t).start()}async function eA(t){Bn(t).tu()}async function tA(t){const e=Bn(t);for(const n of t.lu)e.Yo(n.mutations)}async function nA(t,e,n){const s=t.lu.shift(),i=Au.from(s,e,n);await _y(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ua(t)}async function sA(t,e){e&&Bn(t).Jo&&await async function(n,s){if(i=s.code,Q1(i)&&i!==I.ABORTED){const r=n.lu.shift();Bn(n).Oo(),await _y(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ua(n)}var i}(t,e),wy(t)&&by(t)}async function sf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=_s(n);n.du.add(3),await Mr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await xa(n)}async function iA(t,e){const n=ne(t);e?(n.du.delete(2),await xa(n)):e||(n.du.add(2),await Mr(n),n.mu.set("Unknown"))}function _i(t){return t.yu||(t.yu=function(e,n,s){const i=ne(e);return i.nu(),new qS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:JS.bind(null,t),Zr:QS.bind(null,t),zo:YS.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Lu(t)?Mu(t):t.mu.set("Unknown")):(await t.yu.stop(),vy(t))})),t.yu}function Bn(t){return t.pu||(t.pu=function(e,n,s){const i=ne(e);return i.nu(),new GS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:eA.bind(null,t),Zr:sA.bind(null,t),Xo:tA.bind(null,t),Zo:nA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ua(t)):(await t.pu.stop(),t.lu.length>0&&(H("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class xu{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new xu(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(t,e){if(gn("AsyncQueue",`${e}: ${t}`),Dr(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Di(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new qs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class rf{constructor(){this.Iu=new He(G.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):J():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class si{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new si(e,n,qs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class rA{constructor(){this.Eu=void 0,this.listeners=[]}}class oA{constructor(){this.queries=new vi(e=>jg(e),Ra),this.onlineState="Unknown",this.Au=new Set}}async function Iy(t,e){const n=ne(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new rA),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Uu(o,`Initialization of query '${lc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Fu(n)}async function Ey(t,e){const n=ne(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function aA(t,e){const n=ne(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Fu(n)}function lA(t,e,n){const s=ne(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fu(t){t.Au.forEach(e=>{e.next()})}class Ty{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new si(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Cy{constructor(e){this.key=e}}class Sy{constructor(e){this.key=e}}class cA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=Hg(e),this.Gu=new qs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new rf,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,d)=>{const f=i.get(u),g=Da(this.query,d)?d:null,w=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;f&&g?f.data.isEqual(g.data)?w!==_&&(s.track({type:3,doc:g}),O=!0):this.Wu(f,g)||(s.track({type:2,doc:g}),O=!0,(l&&this.Ku(g,l)>0||c&&this.Ku(g,c)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),O=!0):f&&!g&&(s.track({type:1,doc:f}),O=!0,(l||c)&&(a=!0)),O&&(g?(o=o.add(g),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(d,f){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return g(d)-g(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new si(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new rf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Sy(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Cy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return si.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class uA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hA{constructor(e){this.key=e,this.ec=!1}}class dA{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new vi(a=>jg(a),Ra),this.ic=new Map,this.rc=new Set,this.oc=new He(G.comparator),this.uc=new Map,this.cc=new Ru,this.ac={},this.hc=new Map,this.lc=ni.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function fA(t,e){const n=EA(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await US(n.localStore,yn(e));n.isPrimaryClient&&my(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await pA(n,e,s,a==="current",o.resumeToken)}return i}async function pA(t,e,n,s,i){t.dc=(d,f,g)=>async function(w,_,O,R){let $=_.view.zu(O);$.Mi&&($=await ef(w.localStore,_.query,!1).then(({documents:ue})=>_.view.zu(ue,$)));const L=R&&R.targetChanges.get(_.targetId),X=_.view.applyChanges($,w.isPrimaryClient,L);return af(w,_.targetId,X.Yu),X.snapshot}(t,d,f,g);const r=await ef(t.localStore,e,!0),o=new cA(e,r.Wi),a=o.zu(r.documents),l=Pr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);af(t,n,c.Yu);const u=new uA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function mA(t,e){const n=ne(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ra(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gy(n.remoteStore,s.targetId),fc(n,s.targetId)}).catch(Rr)):(fc(n,s.targetId),await dc(n.localStore,s.targetId,!0))}async function gA(t,e,n){const s=TA(t);try{const i=await function(r,o){const a=ne(r),l=Ve.now(),c=o.reduce((f,g)=>f.add(g.key),le());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=vn(),w=le();return a.Ki.getEntries(f,c).next(_=>{g=_,g.forEach((O,R)=>{R.isValidDocument()||(w=w.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(_=>{u=_;const O=[];for(const R of o){const $=G1(R,u.get(R.key).overlayedDocument);$!=null&&O.push(new vs(R.key,$,Mg($.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,O,o)}).next(_=>{d=_;const O=_.applyToLocalDocumentSet(u,w);return a.documentOverlayCache.saveOverlays(f,_.batchId,O)})}).then(()=>({batchId:d.batchId,changes:Gg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new He(me)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await Lr(s,i.changes),await Ua(s.remoteStore)}catch(i){const r=Uu(i,"Failed to persist write");n.reject(r)}}async function Ay(t,e){const n=ne(t);try{const s=await MS(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ae(o.ec):i.removedDocuments.size>0&&(Ae(o.ec),o.ec=!1))}),await Lr(n,s,e)}catch(s){await Rr(s)}}function of(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ne(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Ru(o)&&(l=!0)}),l&&Fu(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yA(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new He(G.comparator);o=o.insert(r,tt.newNoDocument(r,ee.min()));const a=le().add(r),l=new Ma(ee.min(),new Map,new Be(me),o,a);await Ay(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),$u(s)}else await dc(s.localStore,e,!1).then(()=>fc(s,e,n)).catch(Rr)}async function vA(t,e){const n=ne(t),s=e.batch.batchId;try{const i=await PS(n.localStore,e);Ny(n,s,null),ky(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Lr(n,i)}catch(i){await Rr(i)}}async function _A(t,e,n){const s=ne(t);try{const i=await function(r,o){const a=ne(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ae(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Ny(s,e,n),ky(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Lr(s,i)}catch(i){await Rr(i)}}function ky(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Ny(t,e,n){const s=ne(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Ry(t,s)})}function Ry(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(gy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),$u(t))}function af(t,e,n){for(const s of n)s instanceof Cy?(t.cc.addReference(s.key,e),wA(t,s)):s instanceof Sy?(H("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Ry(t,s.key)):J()}function wA(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(H("SyncEngine","New document in limbo: "+n),t.rc.add(s),$u(t))}function $u(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Se.fromString(e)),s=t.lc.next();t.uc.set(s,new hA(n)),t.oc=t.oc.insert(n,s),my(t.remoteStore,new cs(yn(Tu(n.path)),s,2,wu.ct))}}async function Lr(t,e,n){const s=ne(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ou.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=ne(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(l,d=>A.forEach(d.Vi,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>A.forEach(d.Si,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Dr(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.Li.get(d),g=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(g);c.Li=c.Li.insert(d,w)}}}(s.localStore,r))}async function bA(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await hy(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new U(I.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Lr(n,s.Qi)}}function IA(t,e){const n=ne(t),s=n.uc.get(e);if(s&&s.ec)return le().add(s.key);{let i=le();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function EA(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yA.bind(null,e),e.nc.zo=aA.bind(null,e.eventManager),e.nc.wc=lA.bind(null,e.eventManager),e}function TA(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_A.bind(null,e),e}class lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return OS(this.persistence,new RS,e.initialUser,this.serializer)}createPersistence(e){return new kS(Du.Fs,this.serializer)}createSharedClientState(e){return new $S}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>of(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bA.bind(null,this.syncEngine),await iA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oA}createDatastore(e){const n=La(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new HS(i));var i;return function(r,o,a,l){return new zS(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>of(this.syncEngine,a,0),o=nf.D()?new nf:new VS,new WS(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new dA(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);H("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Mr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Dy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SA{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Rg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{H("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(H("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Uu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gl(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await hy(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kA(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>sf(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>sf(e.remoteStore,r)),t._onlineComponents=e}function AA(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!AA(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await gl(t,new lf)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await gl(t,new lf);return t._offlineComponents}async function Oy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await cf(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await cf(t,new CA))),t._onlineComponents}function NA(t){return Oy(t).then(e=>e.syncEngine)}async function Py(t){const e=await Oy(t),n=e.eventManager;return n.onListen=fA.bind(null,e.syncEngine),n.onUnlisten=mA.bind(null,e.syncEngine),n}function RA(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Dy({next:d=>{r.enqueueAndForget(()=>Ey(i,u));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new U(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new U(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Ty(Tu(o.path),c,{includeMetadataChanges:!0,xu:!0});return Iy(i,u)}(await Py(t),t.asyncQueue,e,n,s)),s.promise}function DA(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Dy({next:d=>{r.enqueueAndForget(()=>Ey(i,u)),d.fromCache&&a.source==="server"?l.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Ty(o,c,{includeMetadataChanges:!0,xu:!0});return Iy(i,u)}(await Py(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const uf=new Map;/**
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
 */function My(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OA(t,e,n,s){if(e===!0&&s===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hf(t){if(!G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fa(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $a{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s1;switch(n.type){case"firstParty":return new a1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=uf.get(e);n&&(H("ComponentProvider","Removing Datastore"),uf.delete(e),n.terminate())}(this),Promise.resolve()}}function PA(t,e,n,s={}){var i;const r=(t=jn(t,$a))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&$o("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=vb(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(l)}t._authCredentials=new i1(new Ng(o,a))}}/**
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
 */class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class ws{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class xn extends ws{constructor(e,n,s){super(e,n,Tu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new G(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function MA(t,e,...n){if(t=mt(t),My("collection","path",e),t instanceof $a){const s=Se.fromString(e,...n);return df(s),new xn(t,null,s)}{if(!(t instanceof wt||t instanceof xn))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return df(s),new xn(t.firestore,null,s)}}function Vu(t,e,...n){if(t=mt(t),arguments.length===1&&(e=Rg.A()),My("doc","path",e),t instanceof $a){const s=Se.fromString(e,...n);return hf(s),new wt(t,null,new G(s))}{if(!(t instanceof wt||t instanceof xn))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return hf(s),new wt(t.firestore,t instanceof xn?t.converter:null,new G(s))}}/**
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
 */class LA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fy(this,"async_queue_retry"),this.qc=()=>{const n=ml();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ml();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new hn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Dr(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw gn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=xu.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&J()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class xr extends $a{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new LA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ly(this),this._firestoreClient.terminate()}}function xA(t,e){const n=typeof t=="object"?t:Kp(),s=typeof t=="string"?t:e||"(default)",i=Bc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=mb("firestore");r&&PA(i,...r)}return i}function Bu(t){return t._firestoreClient||Ly(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ly(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new w1(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SA(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(ct.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xy{constructor(e){this._methodName=e}}/**
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
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const UA=/^__.*__$/;class FA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Or(e,this.data,n,this.fieldTransforms)}}function Uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class qu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return zo(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Uy(this.Yc)&&UA.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class $A{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||La(e)}ua(e,n,s,i=!1){return new qu({Yc:e,methodName:n,oa:s,path:st.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fy(t){const e=t._freezeSettings(),n=La(t._databaseId);return new $A(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VA(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);By("Data must be an object, but it was:",o,s);const a=$y(s,o);let l,c;if(r.merge)l=new Ht(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const f=jA(e,d,n);if(!o.contains(f))throw new U(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);qA(u,f)||u.push(f)}l=new Ht(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new FA(new Nt(a),l,c)}function BA(t,e,n,s=!1){return Gu(n,t.ua(s?4:3,e))}function Gu(t,e){if(Vy(t=mt(t)))return By("Unsupported field value:",e,t),$y(t,e);if(t instanceof xy)return function(n,s){if(!Uy(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Gu(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:qo(s.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(n instanceof Hu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ii)return{bytesValue:ry(s.serializer,n._byteString)};if(n instanceof wt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Fa(n)}`)}(t,e)}function $y(t,e){const n={};return Dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(s,i)=>{const r=Gu(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Vy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Hu||t instanceof ii||t instanceof wt||t instanceof xy)}function By(t,e,n){if(!Vy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fa(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function jA(t,e,n){if((e=mt(e))instanceof ju)return e._internalPath;if(typeof e=="string")return jy(t,e);throw zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const HA=new RegExp("[~\\*/\\[\\]]");function jy(t,e,n){if(e.search(HA)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new U(I.INVALID_ARGUMENT,a+t+l)}function qA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Hy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GA extends Hy{data(){return super.data()}}function zu(t,e){return typeof e=="string"?jy(t,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
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
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ku{}class qy extends Ku{}function KA(t,e,...n){let s=[];e instanceof Ku&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ju).length,o=i.filter(a=>a instanceof Wu).length;if(r>1||r>0&&o>0)throw new U(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Wu extends qy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Wu(e,n,s)}_apply(e){const n=this._parse(e);return Gy(e._query,n),new ws(e.firestore,e.converter,oc(e._query,n))}_parse(e){const n=Fy(e.firestore);return function(i,r,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){mf(u,c);const f=[];for(const g of u)f.push(pf(a,i,g));d={arrayValue:{values:f}}}else d=pf(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||mf(u,c),d=BA(o,r,u,c==="in"||c==="not-in");return Ue.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ju extends Ku{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ju(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Gy(r,a),r=oc(r,a)}(e._query,n),new ws(e.firestore,e.converter,oc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qu extends qy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qu(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new js(i,r);return function(a,l){if(Cu(a)===null){const c=Na(a);c!==null&&zy(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new ws(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new yi(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function WA(t,e="asc"){const n=e,s=zu("orderBy",t);return Qu._create(s,n)}function pf(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new U(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Se.fromString(n));if(!G.isDocumentKey(s))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $d(t,new G(s))}if(n instanceof wt)return $d(t,n._key);throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fa(n)}.`)}function mf(t,e){if(!Array.isArray(t)||t.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gy(t,e){if(e.isInequality()){const s=Na(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new U(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Cu(t);r!==null&&zy(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function zy(t,e,n){if(!n.isEqual(e))throw new U(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class JA{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const s={};return gi(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Hu(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(cr(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);Ae(uy(s));const i=new ur(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(n)||gn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function QA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ky extends Hy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(zu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fo extends Ky{data(e={}){return super.data(e)}}class YA{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fo(this._firestore,this._userDataWriter,s.key,s,new Oi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:XA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function ZA(t){t=jn(t,wt);const e=jn(t.firestore,xr);return RA(Bu(e),t._key).then(n=>sk(e,t,n))}class Wy extends JA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function ek(t){t=jn(t,ws);const e=jn(t.firestore,xr),n=Bu(e),s=new Wy(e);return zA(t._query),DA(n,t._query).then(i=>new YA(e,s,t,i))}function tk(t,e,n){t=jn(t,wt);const s=jn(t.firestore,xr),i=QA(t.converter,e,n);return Jy(s,[VA(Fy(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function nk(t){return Jy(jn(t.firestore,xr),[new Su(t._key,Zt.none())])}function Jy(t,e){return function(n,s){const i=new hn;return n.asyncQueue.enqueueAndForget(async()=>gA(await NA(n),s,i)),i.promise}(Bu(t),e)}function sk(t,e,n){const s=n.docs.get(e._key),i=new Wy(t);return new Ky(t,i,e._key,s,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){mi=n})(yr),Js(new us("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new xr(new r1(n.getProvider("auth-internal")),new c1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ur(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ln(Md,"3.10.0",t),Ln(Md,"3.10.0","esm2017")})();const ik={apiKey:"AIzaSyA1edFnLIXTMe98ey2m1XnS3de0xTzX17E",authDomain:"pja-golf-tournament.firebaseapp.com",projectId:"pja-golf-tournament",storageBucket:"pja-golf-tournament.appspot.com",messagingSenderId:"191775654052",appId:"1:191775654052:web:4d08bdb790677759ad2631"},Yu=zp(ik),Ur=xA(Yu),rk=nr();async function Qy(t,e){const n=Vu(t,"admins",e);return(await ZA(n)).exists()?"admin":"user"}async function gf(t){const e=MA(Ur,t),n=KA(e,WA("teamName","asc")),s=await ek(n);let i=[];return s.forEach(r=>{const o={};o[r.id]=r.data(),i.push(o)}),i}async function pc(t,e=null){e.hasOwnProperty("id")||(e.id=self.crypto.randomUUID());const n=Vu(Ur,t,e.id);tk(n,e,{merge:!0}).then(()=>(console.log("Document has been added successfully"),!0)).catch(s=>(console.log(s),!1))}async function yf(t,e){return new Promise(n=>{const s=Vu(Ur,t,e),i=nk(s).then(()=>(console.log("Document deleted successfully"),!0)).catch(r=>(console.log(r),!1));n(i)})}const ok=nr(Yu),ft=nb({state:{user:{userData:{},userLoggedIn:!1},loading:!1,team:null},mutations:{setUser(t,e){if(e)for(const[n,s]of Object.entries(e))t.user.userData[n]=s;else t.user.userData={},t.user.userLoggedIn=!1;console.log("store user commit"),console.log(t.user)},setUserLoggedIn(t,e){t.user.userLoggedIn=e},setPermissionLevel(t,e){t.user.userData.permissionLevel=e},setLoadingState(t,e){t.loading=e},setTeam(t,e){t.team=e,console.log(t.team)}},actions:{async logOut(t){await TE(ok),t.commit("setUser",null)},async fetchUser(t,e){t.commit("setUserLoggedIn",e!==null),e?t.commit("setUser",e):t.commit("setUser",null)}},getters:{checkAdmin(t){return t.user.userData.permissionLevel==="admin"},getUser(t){return t.user.userData},getLoginState(t){return t.user.userLoggedIn},getLoadingState(t){return t.loading},getTeam(t){return t.team}}}),ut=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ak={name:"vuex3",data(){return{alert:{showAlert:!1,alertOptions:{type:"",title:"",body:"",removable:null,action:{}}}}},computed:sb(["user"])},lk=Object.assign(ak,{setup(t){return(e,n)=>{const s=ci("router-view");return b(),Qi(s)}}}),ck=new Promise(t=>{rk.onAuthStateChanged(async e=>{if(ft.dispatch("fetchUser",e),e){const n=await Qy(Ur,ft.state.user.userData.phoneNumber);ft.commit("setPermissionLevel",n),console.log("user set in store"),console.log(ft.state.user),t(e)}else console.log("user null / logged out"),console.log(ft.state.user),t(ft.getters.getLoginState)})}),uk="/assets/logo-c8d0607d.svg",Yy="/assets/player-icons-a9dfec05.png",hk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAVCAYAAAB17tGhAAAABHNCSVQICAgIfAhkiAAACllJREFUaEOtmgvwp1MZx/evKAm5RVFtlOR+D5vGErEsuURLJWkUkhnXyGXccqtMbZRb04VNSSokKaEoRMu4M1rrXlKoEPr3+bxzzuv8zj7nt7/Z8cw88/7e9/2e59ye89ze39j4+PjSEyZMWDDxG7jKS8DLwdeOjY3dxrUn8K/jZnF4Sfit8Prw++E14S3A31riq7aLcr8qvA38AXh5eCH4GfhO+MfwFch4sJZBv4vw7AtpfOXrF7j5SpKxItet4A/BK8FvhJ+C/wifidzfBnJts09jzF/k+ctpzFOSXPGvhWfBP4RnIHe27RnjmxJ2KtdN4XfAr4f/Cl8Lfxu+Dvx4o7/uMXLenOQ4j43gd8Gu03/hh+A/wD+Hb0LW37OsMRrexI0b5ybJC8CvgcfgowEfW3YM/kTud4PdGBdrvuL9leC3qAdKG2XtACtrhdRPNJ//8fAJeG/k/Kzq142/B3YhS3qem93hvWAVyzHZX03/5sGRyD2tkrsH9y5yRI55f3jthlw35VF4W9gD8GVYJXINaxL7L/gQxvCtRn9u5Kd5dxjsnszfmIuyXoTvh/dA3o3KczOv4DrHBqTOLgS4c9kx+M9w3xrMY7xblTaeho7Ae9I9UYfAKsso9DdAmyDH05rlbM+PnwSNnZhcKlWrD0/Z8vkkpfGdnMYWtfEkRBtTY1VAT1OkRDX2bh5MZgyPly9YJ62cFmaXEeXk5p767ZF3vZt5AjeHN2Z/F6CVq04nc39VA++RX582D6SFciEusLPW6g55fgdyNMkdMc5TuBw8D3LqJtsi95IkUwv0A/gjr4LcUUV4Ot3MP1Xreh33mtR5IU/oJDdzR35cCEdapWYuTMde86Kux4/uWAdUb6YmSs2PTqRm7/ewGrlaIMtJr07ff/Ed49TnbDwvM63aTEOmCqZM/dDlr5LcUYfmWrqZ16cxqPBnwHuOKiDAKXOam+nmGBg4sYg0S92Cps5dUBc2Is3NGuCfQO47+a1JicyUz7cuTrBBVr2hz/FsIzAzkaUJfRbWZNekiTUI0rT/E14KNjhrmbwdkHlxmot+zkU1qIlIf6yCGqAtAy/WwOUxiP0H/BZY2RH9h4duZncgmJuB4KXwwg387Tx3s9eA9adak4jOcjONlK6Gl22A7Nj3HYH/BJfvNrB38Xx1YfDZsMFFTQY5G2fNTDKdmEpVkidzNXCz6NOgSVMSkQv9KdgxuqGbwW6WgVBE/XyQ65z1y0bK0Tg35+HNsH342/giIhXNCF2lfBo2cDIyj+hJHjoGN8n1PJ/LNDhSPqP6DcE+Bs5N1D0YrUd0o5upFnsye/9UIT+JsH7zwH+N959vCDwF7KFpkTy9RqA1XQpmKhij0rfDB8J7B5PRh7jpQMdNCy5r9KnVcMJaBRdnEpdfwq3NXAmsUbHY93ExzI8WcjY4U4uOkgVruZfavxtQtjbeeMLNnI1MrYipRuSGDNa0Xr0c8K676x/RQ66UO25A43GPaCA9AW8e6emr6SUerJAG6elwEJFJuJLnTshw382MokC1dx1lpYU8gKuRXkR/5qGbrg920T/MxfyvlR4YA2TssMW5BJwpR0fI1aed0xjDL8BuXWCHRfy3gHMzn0Gm+e3pDZn38XytPNY0Bs2sFi+ixzuNROg3uXy2AToXgQoRZ7T1OzhKAy4Dp6kRdyqXgxry5vbYkH0vZHUR5wjj+xWYLT3BCfs5rl+Ho9N2L7j3FHJn8FsTF9HxYI8ssPotLUhEZ4Ddt8AOS3e0GlOSxbmI35rkiPSj+nfzybwOh/LjpAb+/ryZw7TOSkPu8A5+94tRCDWa2oWOf+ozNtOgYsNGp8MeG2V+DDmamDwBTZCT7jW/EvBV8JrqjB+26FaBeqVlnJroiY0B7Qi2z2vB3gDOokREFgJUYOeuNToP/mgDm12RbsZTGkXyNjWX3ycraZKtZWhFvdfkzVwrCY7613dZmjIAcHKR+dKZa+qMJp3QI1xMOVrkKVIBdPBOyD6ugW8vB59kGZz8Bl63IWx32nwvv6NvsY43ojItsYJlwBRZmTritHxpSfDdDbkq8o/SeFW+X8OWOCPaDewMxqlPN9eMDoftTgQ3kP/TxgDTClNE0/NmqiVGj5EjNo1YB/bUWHOsSV+5TeWojeiiCNG2mmwX/JHShDQGmOuURpSWtyLSr8zML5iwAUWEVYGWA2v5Tbn6bOVGZCXLCtS9CesmXg23FHQDsJ7cnLuq3BMbslcBeyf9uz6WUltp0VHgjivmZd8ekojMEHbt/QrCFRxpv+Wio+DpsLXCklygi+nUwkNPyHLBzLUiOgD8QH20BtF+ATBdoYLfw/JV88tFwXoV6wmyFBidtifBGT12BNYypYFSRJ6AyeBzhKzL0Ne1FHSZAusYnH90MMydHe+L9G/O7Ml8b2MMJ4GzRpvHO8wVukeblZt5Jg8sVtek/5Ij82pU6JeSrppRdGyQ1DIzdmxJ0FJhDlqcuAut/9Cn+SWiW2gmbUQ5UHQvuroNnMl0nrBRtCYuopvB9sqKXBfqSw2s6cqm4C0aOIbtuOi3o+jcIsESxVyGlTtngtOlKdO113S3/LBz3gn8S2D98mJ20Mo4nPOUcjOHhdONOU84mhdGfR7znuj8GG48zS1yQ02w1WCrKqYo5rtuqErjQnafq5A1rHb8fXAWMToCazHfSDKii8DulHDO2wAjUl4hF4Dto1zkWhO2NhzR5WDNg/MYjuBHbx6rBueB/XiBHZaze4rNMnQFpjAbwJEy6ebWRe6t5WZapjPfrD8xNebQnQBP5Rzf5pi83zYtGrRKVC2Z+XmZ2NuPJy6ig+i/zz/p1yCkVTTvo15wugsj734TKuGHIbdPAcB/h/d+ZovIz2rHFxtkrXfLBraWa9VLqzbqmtditZiaYxXolVyMAft1xKjSD6yj0EDgUTbQ53FvSa21WHOTb2JvQOZp8xrVjVUilakzq6lPfVAr1N8P7DcS1o/xmrio+CFkK7D6yI6Q7ekwYIrIQMlIPGMt7UXVJ62Xn6pM9XpCtutkoWNeyMBvEjKNvgc202jJCb5tLlINTEzqW/XZPCkDF+1+a3Fb3TyI7Im+ZKKOpasCBWTEPBmsFSCxBlwqo/1GNBWsibhYLcYs2GClJpVkWbBGtGI9NaZckULpU42Qu6/9YI2ijaYjsr5rcUN/3BNtXB9LlXNb97KZptXsYn/k9d+OSzOrtqrZA98vg1ENJN6NgXePGagKYiHZGqhOvPUlQ7iaq1brB/dL7YcFE26ypyJ/InNRTHn6iLUam0X7XNw2HTDlisZTR72rgOvaBWTfys3lwU24n+OvKandQLpTymKdrItr9ifCra8iNtGsGq37b4/T6bcvrvhyYDIINSAwGBlG0xHSheyjEDJVEqNI/YgRrl9ADPHdPCPBWbD1Xn2Hi3Y38ruAirZGqi0f6KTOKRbScevXWv8M0LfkRVdhd22M/1FwVpE6Su6nhTXvOxu8J0WsZrs1Xud6VnYfdd+09b9YH4Sttlk29ROaVsHT72nX6niCb0DGw9HY/w/B8gh2E2+szgAAAABJRU5ErkJggg==",dk="/assets/home-a27523c9.svg",fk="/assets/signUp-8a741f4b.svg",pk="/assets/info-61919730.svg",mk="/assets/trophy-8d875605.svg",gk="/assets/admin-d05c0f9a.svg";const yk={data(){return{userInfo:{userSignedIn:ft.getters.getLoginState,isAdmin:ft.getters.checkAdmin}}},methods:{openMenuHandler:function(){document.querySelector(".menu--list").classList.add("menu--open"),document.querySelector(".ui--backdrop").classList.add("backdrop--open")},menuItemSelectHandler:function(t){document.querySelector(".menu--item.selected").classList.remove("selected"),console.log(t)},closeMenuHandler:function(){document.querySelector(".menu--open").classList.remove("menu--open"),document.querySelector(".ui--backdrop").classList.remove("backdrop--open")},signOutHandler:async function(){await ft.dispatch("logOut"),this.closeMenuHandler(),this.$router.push("/"),location.reload()}}},wi=t=>(Ot("data-v-7090b252"),t=t(),Pt(),t),vk={id:"menu",class:"menu--list"},_k={class:"menu--row"},wk={class:"menu--item"},bk=wi(()=>h("img",{src:dk,alt:"Home"},null,-1)),Ik={class:"menu--item"},Ek=wi(()=>h("img",{src:fk,alt:"Sign up"},null,-1)),Tk={class:"menu--row"},Ck={class:"menu--item"},Sk=wi(()=>h("img",{src:pk,alt:"About"},null,-1)),Ak={class:"menu--item"},kk=wi(()=>h("img",{src:mk,alt:"Winner's Circle"},null,-1)),Nk={class:"menu--row"},Rk={key:0,class:"menu--item"},Dk=wi(()=>h("img",{src:gk,alt:"admin page"},null,-1)),Ok={key:1,class:"menu--item"},Pk=wi(()=>h("div",{id:"menu--bg",class:"ui--backdrop"},null,-1));function Mk(t,e,n,s,i,r){const o=ci("router-link");return b(),T(ie,null,[h("div",{id:"open-menu",class:"menu--toggle",onClick:e[0]||(e[0]=(...a)=>r.openMenuHandler&&r.openMenuHandler(...a))}),h("div",vk,[h("div",_k,[h("div",wk,[te(o,{to:"/"},{default:At(()=>[bk,Ti(t.$slots,"navItemText",{},()=>[Ie("Home")],!0)]),_:3})]),h("div",Ik,[te(o,{to:"/sign-up"},{default:At(()=>[Ek,Ti(t.$slots,"navItemText",{},()=>[Ie("Sign Up")],!0)]),_:3})])]),h("div",Tk,[h("div",Ck,[te(o,{to:"/about"},{default:At(()=>[Sk,Ti(t.$slots,"navItemText",{},()=>[Ie("About")],!0)]),_:3})]),h("div",Ak,[te(o,{to:"/winners-circle"},{default:At(()=>[kk,Ti(t.$slots,"navItemText",{},()=>[Ie("Winner's Circle")],!0)]),_:3})])]),h("div",Nk,[this.$store.getters.checkAdmin?(b(),T("div",Rk,[te(o,{to:"/admin"},{default:At(()=>[Dk,Ti(t.$slots,"navItemText",{},()=>[Ie("Admin")],!0)]),_:3})])):F("",!0),this.$store.getters.getLoginState?(b(),T("div",Ok,[h("button",{id:"menu-sign-out",class:"sign-out",onClick:e[1]||(e[1]=(...a)=>r.signOutHandler&&r.signOutHandler(...a))}," Sign Out ")])):F("",!0)]),h("span",{class:"delete",onClick:e[2]||(e[2]=(...a)=>r.closeMenuHandler&&r.closeMenuHandler(...a))})]),Pk],64)}const Xy=ut(yk,[["render",Mk],["__scopeId","data-v-7090b252"]]);const Lk={class:"nav-container"},xk={__name:"mainNav",setup(t){return(e,n)=>(b(),T("div",Lk,[te(Xy)]))}},Uk=ut(xk,[["__scopeId","data-v-abf67b92"]]);const ht=t=>(Ot("data-v-52deb00e"),t=t(),Pt(),t),Fk={class:"top-content"},$k=ht(()=>h("div",{class:"logo py-3"},[h("img",{src:uk,alt:"PJA logo"})],-1)),Vk={class:"top-info row py-3"},Bk={class:"col-md-6 col-12 info--item"},jk=ht(()=>h("div",{class:"col-md-6 col-12 info--item"},[h("p",null,"100+ Players")],-1)),Hk=ht(()=>h("div",{class:"col-md-6 col-12 info--item"},[h("p",null,"Trophies Awarded")],-1)),qk=ht(()=>h("div",{class:"col-md-6 col-12 info--item"},[h("p",null,"Charitable Donations")],-1)),Gk=ht(()=>h("p",{class:"pt-3 mb-0"}," The PJA Tournament is organized by the Vitello family, and growing annually thanks to participation of amazing family and friends. ",-1)),zk={class:"home"},Kk={class:"container info-container"},Wk={class:"card"},Jk=ht(()=>h("div",{class:"ball-icons"},[h("img",{src:Yy})],-1)),Qk=ht(()=>h("h1",{class:"text-center"},"Come alone, or bring help!",-1)),Yk={class:"button-container mb-4"},Xk=ht(()=>h("small",{class:"text-center d-block w-100"},"(max 4 players)",-1)),Zk={class:"card sub--card entry--info"},eN={class:"row"},tN=ht(()=>h("div",{class:"col-md-6 col-12"},[h("h1",null,"Entry Deadline:"),h("h2",null," September 31st, 2023 ")],-1)),nN={class:"col-md-6 col-12"},sN=ht(()=>h("h2",null,"When & where?",-1)),iN=ht(()=>h("p",null,"SHOTGUN START @ 8AM",-1)),rN={class:"card pricing"},oN={class:"card sub--card"},aN={class:"row"},lN={class:"col-md-6 col-12"},cN=ht(()=>h("h1",null,"Pricing",-1)),uN={class:"col-md-6 col-12"},hN=ht(()=>h("h2",null,"What's included:",-1)),dN=mr('<div class="row pricing--payment" data-v-52deb00e><div class="col-md-6 col-12" data-v-52deb00e><h2 data-v-52deb00e>Payment Methods</h2><h5 data-v-52deb00e>Check payable to:</h5><ul data-v-52deb00e><li data-v-52deb00e>John Vitello</li><li data-v-52deb00e>P.O Box 7009</li><li data-v-52deb00e>Meriden, CT, 06450</li><li data-v-52deb00e><a href="mailto:jayvee1@att.net" data-v-52deb00e>jayvee1@att.net</a></li></ul></div><div class="col-md-6 col-12" data-v-52deb00e><img src="'+hk+'" alt="Venmo Logo" data-v-52deb00e><p data-v-52deb00e>@PJA-tournament</p><div id="venmo" data-v-52deb00e></div></div></div>',1),fN=mr('<div class="card rules" data-v-52deb00e><div class="card sub--card" data-v-52deb00e><div class="row" data-v-52deb00e><div class="col-md-6 col-12" data-v-52deb00e><h2 data-v-52deb00e>Rules</h2><ul data-v-52deb00e><li data-v-52deb00e>Teams of four.</li><li data-v-52deb00e>Scramble (best ball) format.</li><li data-v-52deb00e>Men&#39;s and Co-ed Divisions available.</li><li data-v-52deb00e>Incomplete teams will be joined to make a foursome.</li><li data-v-52deb00e>Have fun!</li></ul></div><div class="col-md-6 col-12" data-v-52deb00e><h2 data-v-52deb00e>Questions?</h2><p data-v-52deb00e>Reach out to any of the tournament admins!</p><ul data-v-52deb00e><li data-v-52deb00e>John Vitello</li><li data-v-52deb00e>Al Vitello</li><li data-v-52deb00e>Paul Vitello</li><li data-v-52deb00e>Janice Vitello</li><li data-v-52deb00e>Matt Vitello</li><li data-v-52deb00e>Nicole Vitello</li><li data-v-52deb00e>Anthony Lowell</li></ul></div></div></div></div>',1),pN={class:"wrap-up"},mN={class:"wrap-up--text text-center"},gN=ht(()=>h("h2",null,"Ready to have some fun?",-1)),yN=ht(()=>h("h5",{class:"my-4"},"Sign up and get started",-1)),vN={class:"button-container my-4"},_N=ht(()=>h("p",{class:"text-center d-block w-100"},"(max 4 players)",-1)),wN={data(){return{date:"October 7th, 2023",time:"10:00am",golfCourse:"East Mountain Golf Course",golfCourseAddress:"171 E Mountain Rd, Waterbury, CT 06706",pricing:{ticketPrice:"$95.00",addOns:["$10 Pro Shop credit","Coffee & at check-in","Golf Cart (per 1-2 players)","Snacks and drinks at the tee boxes","Trophies (1st, 2nd, 3rd place per division, plus longest drive and closest to pin for both front and back 9)","All proceeds after operational expenses will be donated to the Valley Community Fund"],trophies:["First Place","Second Place","Third Place","longest drive (front 9)","longest drive (back 9)","closest to pin (front 9)","closest to pin  (back 9)"]}}},computed:{outputDate(){return this.date},outputTime(){return this.time},outputGolfCourse(){return this.golfCourse},outputGolfCourseAddress(){return this.golfCourseAddress},outputPrice(){return this.pricing.ticketPrice}}},bN=Object.assign(wN,{__name:"Home",setup(t){return(e,n)=>{const s=ci("router-link");return b(),T(ie,null,[te(Uk),h("header",Fk,[$k,h("div",Vk,[h("div",Bk,[h("p",null,oe(e.outputDate),1)]),jk,Hk,qk,Gk,te(s,{to:"/about"},{default:At(()=>[Ie("Learn More")]),_:1})])]),h("div",zk,[h("div",Kk,[h("div",Wk,[Jk,Qk,h("div",Yk,[h("button",null,[te(s,{to:"/sign-up"},{default:At(()=>[Ie("SIGN UP")]),_:1})]),Xk]),h("div",Zk,[h("div",eN,[tN,h("div",nN,[sN,h("p",null,oe(e.outputDate),1),iN,h("p",null,oe(e.outputGolfCourse)+",",1),h("p",null,oe(e.outputGolfCourseAddress),1)])])])]),h("div",rN,[h("div",oN,[h("div",aN,[h("div",lN,[cN,h("h2",null,"Entry fee: "+oe(e.outputPrice),1)]),h("div",uN,[hN,h("ul",null,[(b(!0),T(ie,null,_t(e.pricing.addOns,i=>(b(),T("li",null,oe(i),1))),256))])])]),dN])]),fN,h("div",pN,[h("div",mN,[gN,yN,h("div",vN,[h("button",null,[te(s,{to:"/sign-up"},{default:At(()=>[Ie("SIGN UP")]),_:1})]),_N])])])])])],64)}}}),IN=ut(bN,[["__scopeId","data-v-52deb00e"]]),EN="/assets/logo-secondary-979fcede.svg";const TN=t=>(Ot("data-v-b46cc0c7"),t=t(),Pt(),t),CN={class:"nav-container"},SN=TN(()=>h("img",{src:EN,alt:"PJA Tournament logo"},null,-1)),AN={__name:"secondaryNav",setup(t){return(e,n)=>(b(),T("nav",CN,[SN,te(Xy)]))}},bs=ut(AN,[["__scopeId","data-v-b46cc0c7"]]);const Is=t=>(Ot("data-v-f3fc3ca4"),t=t(),Pt(),t),kN={class:"about"},NN=Is(()=>h("div",{class:"top-content"},[h("h1",null,[Ie("A VITELLO FAMILY "),h("span",null,"TRADITION")])],-1)),RN={class:"container"},DN=Is(()=>h("h2",null,"34 Years and counting",-1)),ON={class:"mt-4"},PN=Is(()=>h("h5",null,"We are fun",-1)),MN=Is(()=>h("p",null," The PJA Tournament is fun, family golf contest with a cause. Any dollars not spent on the faciliation of the tournament go straight to the Valley League Fund, an organization that provides sports gear for underprivaleged young athletes. ",-1)),LN=Is(()=>h("h5",null,"We are inclusive",-1)),xN=Is(()=>h("p",null," We encourage men and women of all ages to join the tournament. We offer both a Men's League and a Co-Ed league to partcipate in. We accept all skill levels to come and play. We value family fun over everything else! ",-1)),UN=Is(()=>h("h5",null,"We are family",-1)),FN=mr('<div class="gallery" data-v-f3fc3ca4><h2 class="my-4 text-center" data-v-f3fc3ca4>A Look Through the Years</h2><div class="grid" data-v-f3fc3ca4><div class="grid-sizer" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width1 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width3 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width2 grid-item--height3" data-v-f3fc3ca4></div><div class="grid-item lazy-background grid-item--width1 grid-item--height3" data-v-f3fc3ca4></div></div></div>',1),$N={mounted(){const t=[].slice.call(document.querySelectorAll(".lazy-background"));if("IntersectionObserver"in window){let e=new IntersectionObserver(function(n,s){n.forEach(function(i){i.isIntersecting&&(setTimeout(()=>{i.target.classList.add("visible")},500),e.unobserve(i.target))})});t.forEach(function(n){e.observe(n)})}}},VN=Object.assign($N,{__name:"About",setup(t){return(e,n)=>{const s=ci("router-link");return b(),T(ie,null,[te(bs),h("div",kN,[NN,h("div",RN,[DN,h("div",ON,[PN,MN,LN,xN,UN,h("p",null,[Ie(" For 30+ years this tournament has grown to be a can't-miss for our family and friends. In 2022, we had a record number of golfers attend, with over 100 players joining and playing for both fun and philanthropy. We plan to continue to keep the tradition alive and well for years to come. If you are a long time participant, or are just seeing what we're about, we encourage you to "),te(s,{to:"/sign-up"},{default:At(()=>[Ie("sign up")]),_:1}),Ie(" and join us on the day of the tournament. ")])])]),FN])],64)}}}),BN=ut(VN,[["__scopeId","data-v-f3fc3ca4"]]);const Mt=t=>(Ot("data-v-be325323"),t=t(),Pt(),t),jN=Mt(()=>h("h1",null,"Sign Up",-1)),HN={key:0},qN={key:1},GN={class:"form-inner"},zN={key:0,class:"error-list error"},KN=Mt(()=>h("span",null,"Please correct the following error(s):",-1)),WN={key:1,id:"players",class:"form-inset"},JN={key:0,class:"form-control card"},QN=Mt(()=>h("h2",null,"Player 1",-1)),YN={key:0,class:"button-container"},XN={key:1,class:"form-control card"},ZN=Mt(()=>h("h2",null,"Player 2",-1)),eR={key:0,class:"button-container"},tR={key:2,class:"form-control card"},nR=Mt(()=>h("h2",null,"Player 3",-1)),sR={key:0,class:"button-container"},iR={key:3,class:"form-control card"},rR=Mt(()=>h("h2",null,"Player 4",-1)),oR={key:0,class:"button-container"},aR={key:2,class:"form-control card card--summary"},lR={class:"row"},cR={key:3,class:"form-control card"},uR=Mt(()=>h("h2",null,"Choose Your Division",-1)),hR=Mt(()=>h("option",{value:"mens"},"Men's Division",-1)),dR=Mt(()=>h("option",{value:"coed"},"Co-ed Division",-1)),fR=[hR,dR],pR=Mt(()=>h("h2",null,"Team Name",-1)),mR=Mt(()=>h("p",null," If you leave this blank, your team name will be Player 1’s full name. Ex: Team John Smith ",-1)),gR=Mt(()=>h("button",{type:"submit"},"Sign Up",-1)),yR={data(){return{errors:[],numOfPlayers:1,players:{player1__firstName:null,player1__lastName:null,player2__firstName:null,player2__lastName:null,player3__firstName:null,player3__lastName:null,player4__firstName:null,player4__lastName:null},playersAdded:!1,teamName:null,division:"mens",needsGrouping:!1}},watch:{player1__firstName(t){this.player1__firstName=t,this.checkPlayerName(t)},player1__lastName(t){this.player1__lastName=t,this.checkPlayerName(t)},player2__firstName(t){this.player2__firstName=t,this.checkPlayerName(t)},player2__lastName(t){this.player2__lastName=t,this.checkPlayerName(t)},player3__firstName(t){this.player3__firstName=t,this.checkPlayerName(t)},player3__lastName(t){this.player3__lastName=t,this.checkPlayerName(t)},player4__firstName(t){this.player4__firstName=t,this.checkPlayerName(t)},player4__lastName(t){this.player4__lastName=t,this.checkPlayerName(t)}},methods:{loadingScreenHandler(t){this.$emit("loading-screen")},checkPlayerName:function(t){return!(t===null||t.length==0||t.match(/\d+/g))},checkPlayerForm:function(t){t.preventDefault();for(let e=0;e<=this.numOfPlayers-1;e++){const n=this.checkPlayerName(this.players[`player${e+1}__firstName`]),s=this.checkPlayerName(this.players[`player${e+1}__lastName`]);!n||!s?this.addError("Please enter a first and last name for each player."):this.errors=[]}if(!this.errors.length)return this.playersAdded=!0,!0},checkForm:function(t){this.numOfPlayers&&this.players.player1__firstName&&this.players.player1__lastName&&this.division&&(t.preventDefault(),this.removeErrors(),this.preProcessData()),this.division||this.errors.push("Please choose a division to be entered in."),t.preventDefault()},addError:function(t){if(this.errors.length>0)for(const e of this.errors){if(e&&e===t)return;this.errors.push(t)}else this.errors.push(t)},removeErrors:function(t){this.errors=[]},preProcessData:function(){let t=Number(this.numOfPlayers);this.teamObj={};const e=[];switch(t){case 1:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName});break;case 2:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName});break;case 3:this.needsGrouping=!0,e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName}),e.push({first_name:this.players.player3__firstName,last_name:this.players.player3__lastName});break;case 4:e.push({first_name:this.players.player1__firstName,last_name:this.players.player1__lastName}),e.push({first_name:this.players.player2__firstName,last_name:this.players.player2__lastName}),e.push({first_name:this.players.player3__firstName,last_name:this.players.player3__lastName}),e.push({first_name:this.players.player4__firstName,last_name:this.players.player4__lastName});break}this.numOfPlayers=Number(this.numOfPlayers),e.forEach((n,s,i)=>{let r=n.first_name[0].toUpperCase()+n.first_name.substring(1),o=n.last_name[0].toUpperCase()+n.last_name.substring(1);n.first_name=r,n.last_name=o}),this.teamName||(this.teamName=`${e[0].first_name} ${e[0].last_name}'s Team`),this.teamObj.players=e,this.teamObj.numOfPlayers=this.numOfPlayers,this.teamObj.needsGrouping=this.needsGrouping,this.teamObj.teamName=this.teamName,this.teamObj.division=this.division,this.teamObj.paid=!1,this.formSubmitHandler()},formSubmitHandler:async function(){const t=this.teamObj;pc(`${t.division}-league`,t),ft.commit("setTeam",this.teamObj),sessionStorage.setItem("team",JSON.stringify(this.teamObj)),this.$router.push({path:"/sign-up-success"})}}},vR=Object.assign(yR,{__name:"teamSignUpForm",setup(t){return Il("#003566"),Il("#FFC300"),(e,n)=>(b(),T("form",{onSubmit:n[20]||(n[20]=(...s)=>e.checkForm&&e.checkForm(...s))},[jN,e.playersAdded?F("",!0):(b(),T("p",HN,"Choose your squad")),e.playersAdded?(b(),T("p",qN,"Choose your division and team name")):F("",!0),h("div",GN,[e.errors.length?(b(),T("span",zN,[KN,h("ul",null,[(b(!0),T(ie,null,_t(e.errors,s=>(b(),T("li",null,oe(s),1))),256))])])):F("",!0),e.playersAdded?F("",!0):(b(),T("div",WN,[e.numOfPlayers>=1?(b(),T("div",JN,[QN,vt(h("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.players.player1__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Vt,e.players.player1__firstName]]),vt(h("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.players.player1__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Vt,e.players.player1__lastName]]),e.numOfPlayers===1?(b(),T("div",YN,[h("button",{type:"button",onClick:n[2]||(n[2]=s=>e.numOfPlayers++)},"Add player"),h("button",{type:"submit",onClick:n[3]||(n[3]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):F("",!0)])):F("",!0),e.numOfPlayers>=2?(b(),T("div",XN,[ZN,vt(h("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>e.players.player2__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Vt,e.players.player2__firstName]]),vt(h("input",{"onUpdate:modelValue":n[5]||(n[5]=s=>e.players.player2__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Vt,e.players.player2__lastName]]),e.numOfPlayers===2?(b(),T("div",eR,[h("button",{type:"button",onClick:n[6]||(n[6]=s=>e.numOfPlayers++)},"Add player"),h("button",{type:"submit",onClick:n[7]||(n[7]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):F("",!0),h("span",{class:"delete",onClick:n[8]||(n[8]=s=>e.numOfPlayers--)})])):F("",!0),e.numOfPlayers>=3?(b(),T("div",tR,[nR,vt(h("input",{"onUpdate:modelValue":n[9]||(n[9]=s=>e.players.player3__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Vt,e.players.player3__firstName]]),vt(h("input",{"onUpdate:modelValue":n[10]||(n[10]=s=>e.players.player3__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Vt,e.players.player3__lastName]]),e.numOfPlayers===3?(b(),T("div",sR,[h("button",{type:"button",onClick:n[11]||(n[11]=s=>e.numOfPlayers++)},"Add player"),h("button",{type:"submit",onClick:n[12]||(n[12]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):F("",!0),h("span",{class:"delete",onClick:n[13]||(n[13]=s=>e.numOfPlayers--)})])):F("",!0),e.numOfPlayers>=4?(b(),T("div",iR,[rR,vt(h("input",{"onUpdate:modelValue":n[14]||(n[14]=s=>e.players.player4__firstName=s),class:"input",type:"text",placeholder:"First Name"},null,512),[[Vt,e.players.player4__firstName]]),vt(h("input",{"onUpdate:modelValue":n[15]||(n[15]=s=>e.players.player4__lastName=s),class:"input",type:"text",placeholder:"Last Name"},null,512),[[Vt,e.players.player4__lastName]]),e.numOfPlayers===4?(b(),T("div",oR,[h("button",{type:"submit",onClick:n[16]||(n[16]=(...s)=>e.checkPlayerForm&&e.checkPlayerForm(...s))},"Continue")])):F("",!0),h("span",{class:"delete",onClick:n[17]||(n[17]=s=>e.numOfPlayers--)})])):F("",!0)])),e.playersAdded?(b(),T("div",aR,[h("div",lR,[(b(!0),T(ie,null,_t(Object.values(e.players),s=>(b(),T("div",null,[h("p",null,oe(s),1)]))),256))])])):F("",!0),e.playersAdded?(b(),T("div",cR,[uR,vt(h("select",{"onUpdate:modelValue":n[18]||(n[18]=s=>e.division=s),class:"input full-width"},fR,512),[[Ol,e.division]]),pR,mR,vt(h("input",{"onUpdate:modelValue":n[19]||(n[19]=s=>e.teamName=s),class:"input full-width",type:"text",placeholder:"Team Name (optional)"},null,512),[[Vt,e.teamName]]),gR])):F("",!0)])],32))}}),_R=ut(vR,[["__scopeId","data-v-be325323"]]);const wR={class:"sign-up"},bR={class:"container"},IR={data(){return{showLoader:!1,loadingHeader:"hello",loadingSubheader:"test test test"}},methods:{loadingScreen(){alert("ayyyy")}}},ER=Object.assign(IR,{__name:"SignUp",setup(t){return(e,n)=>(b(),T(ie,null,[te(bs),h("div",wR,[h("div",bR,[te(_R)])])],64))}}),TR=ut(ER,[["__scopeId","data-v-4be4b25b"]]);const CR={data(){return{team:ft.getters.getTeam}}},Zy=t=>(Ot("data-v-b3e637d3"),t=t(),Pt(),t),SR={class:"card col-md-10 mx-auto pt-4"},AR=Zy(()=>h("div",{class:"ball-icons"},[h("img",{src:Yy})],-1)),kR={class:"team-info-container"},NR={class:"text-center w-100"},RR={class:"players col-md-7 p-0"},DR={class:"table row m-auto"},OR={class:"col-6 player-name"},PR=Zy(()=>h("div",{class:"col-md-10 mx-auto"},[h("p",null,[Ie(" If you see an issue with your submission, please reach out to our tournament admins at "),h("a",{href:"mailto:pjatournament@gmail.com"},"pjatournament@gmail.com"),Ie(". ")]),h("p",null," Please provide your team name, team id and division in your inquiry. ")],-1));function MR(t,e,n,s,i,r){return b(),T("div",SR,[AR,h("div",kR,[h("div",NR,[h("h2",null,oe(this.team.teamName),1),h("p",null,[Ie(" Division: "),h("span",null,oe(this.team.division),1)]),h("p",null,"Team ID: "+oe(i.team.id),1)]),h("div",RR,[h("div",DR,[(b(!0),T(ie,null,_t(i.team.players,o=>(b(),T("div",OR,[h("p",null,oe(o.first_name)+" "+oe(o.last_name),1)]))),256))])]),PR])])}const LR=ut(CR,[["render",MR],["__scopeId","data-v-b3e637d3"]]);const xR=t=>(Ot("data-v-47213501"),t=t(),Pt(),t),UR={class:"sign-up__success"},FR={class:"container info-container mt-4"},$R=xR(()=>h("div",{class:"text-center"},[h("h1",null,"All Set!"),h("h4",null,"Review your details below")],-1)),VR={data(){return{user:null}}},BR=Object.assign(VR,{__name:"SignUpSuccess",setup(t){return(e,n)=>(b(),T(ie,null,[te(bs),h("div",UR,[h("div",FR,[$R,te(LR)])])],64))}}),jR=ut(BR,[["__scopeId","data-v-47213501"]]);const HR={props:["teamsSignedUp","adminChoices"],methods:{closeAdminTools(t){t.target.parentNode.classList.remove("show")},showAdminTools(t){t.target.parentNode.querySelector(".dropdown-content").classList.add("show")},async deleteTeamHandler(t){this.$emit("delete-team",this.teamGetter(t.target))},groupTeamHandler(t){this.$emit("group-team",this.teamGetter(t.target))},teamGetter(t){const e=t.getAttribute("data-tool-target"),n=t.getAttribute("data-league");for(const[s,i]of Object.entries(this.teamsSignedUp[n]))if(s===e)return i},editTeamHandler(t){this.$emit("edit-team",this.teamGetter(t.target))}}},ze=t=>(Ot("data-v-6f0ae39d"),t=t(),Pt(),t),qR={key:0,class:"admin--card"},GR=mr('<h2 class="mb-4" data-v-6f0ae39d>Mens League</h2><div class="row admin--row" data-v-6f0ae39d><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Team</h5></div><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Division</h5></div><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Needs Grouping</h5></div></div>',2),zR={class:"row admin--row"},KR=["data-paid","data-needsGrouping"],WR={class:"admin--column"},JR={class:"admin--item"},QR={class:"d-flex justify-content-between"},YR={key:0,class:"ui-info paid"},XR={key:1,class:"ui-info unpaid"},ZR={class:"team"},eD={action:""},tD=ze(()=>h("input",{type:"hidden",name:"player-names"},null,-1)),nD={class:"admin--column"},sD={class:"admin--item"},iD={class:"admin--column"},rD={class:"admin--item"},oD={key:0},aD={key:1},lD={class:"admin--tools"},cD=ze(()=>h("li",null,null,-1)),uD=ze(()=>h("li",null,null,-1)),hD=ze(()=>h("li",null,null,-1)),dD=[cD,uD,hD],fD={class:"dropdown-content"},pD=["data-tool-target","data-league"],mD=["data-tool-target","data-league"],gD={key:0},yD=["data-tool-target","data-league"],vD={class:"row admin--row"},_D={class:"list--container"},wD=["data-paid","data-needsGrouping"],bD={class:"admin--column"},ID={class:"admin--item"},ED={class:"d-flex justify-content-between"},TD={key:0,class:"ui-info paid"},CD={key:1,class:"ui-info unpaid"},SD={class:"team"},AD={action:""},kD=ze(()=>h("input",{type:"hidden",name:"player-names"},null,-1)),ND={class:"admin--column"},RD={class:"admin--item"},DD={class:"admin--column"},OD={class:"admin--item"},PD={key:0},MD={key:1},LD={class:"admin--tools"},xD=ze(()=>h("li",null,null,-1)),UD=ze(()=>h("li",null,null,-1)),FD=ze(()=>h("li",null,null,-1)),$D=[xD,UD,FD],VD={class:"dropdown-content"},BD=["data-tool-target","data-league"],jD=["data-tool-target","data-league"],HD={key:0},qD=["data-tool-target","data-league"],GD={key:2,class:"no--data"},zD=ze(()=>h("p",null,"No results matching your request",-1)),KD=[zD],WD={key:1,class:"admin--card"},JD=mr('<h2 class="mb-4" data-v-6f0ae39d>Coed League</h2><div class="row admin--row" data-v-6f0ae39d><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Team</h5></div><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Division</h5></div><div class="admin--column" data-v-6f0ae39d><h5 data-v-6f0ae39d>Needs Grouping</h5></div></div>',2),QD={class:"row admin--row"},YD={class:"list--container"},XD=["data-paid","data-needsGrouping"],ZD={class:"admin--column"},eO={class:"admin--item"},tO={class:"d-flex justify-content-between"},nO={key:0,class:"ui-info paid"},sO={key:1,class:"ui-info unpaid"},iO={class:"team"},rO={action:""},oO=ze(()=>h("input",{type:"hidden",name:"player-names"},null,-1)),aO={class:"admin--column"},lO={class:"admin--item"},cO={class:"admin--column"},uO={class:"admin--item"},hO={key:0},dO={key:1},fO={class:"admin--tools"},pO=ze(()=>h("li",null,null,-1)),mO=ze(()=>h("li",null,null,-1)),gO=ze(()=>h("li",null,null,-1)),yO=[pO,mO,gO],vO={class:"dropdown-content"},_O=["data-tool-target","data-league"],wO=["data-tool-target","data-league"],bO={key:0},IO=["data-tool-target","data-league"],EO={class:"row admin--row"},TO={class:"list--container"},CO=["data-paid","data-needsGrouping"],SO={class:"admin--column"},AO={class:"admin--item"},kO={class:"d-flex justify-content-between"},NO={key:0,class:"ui-info paid"},RO={key:1,class:"ui-info unpaid"},DO={class:"team"},OO={action:""},PO=ze(()=>h("input",{type:"hidden",name:"player-names"},null,-1)),MO={class:"admin--column"},LO={class:"admin--item"},xO={class:"admin--column"},UO={class:"admin--item"},FO={key:0},$O={key:1},VO={class:"admin--tools"},BO=ze(()=>h("li",null,null,-1)),jO=ze(()=>h("li",null,null,-1)),HO=ze(()=>h("li",null,null,-1)),qO=[BO,jO,HO],GO={class:"dropdown-content"},zO=["data-tool-target","data-league"],KO=["data-tool-target","data-league"],WO={key:0},JO=["data-tool-target","data-league"],QO={key:2,class:"no--data"},YO=ze(()=>h("p",null,"No results matching your request",-1)),XO=[YO];function ZO(t,e,n,s,i,r){return b(),T(ie,null,[this.adminChoices.renderMensList?(b(),T("div",qR,[GR,this.adminChoices.isFiltering?F("",!0):(b(!0),T(ie,{key:0},_t(n.teamsSignedUp.mens,o=>(b(),T("div",zR,[h("div",{class:"row admin--row data","data-paid":o.paid,"data-needsGrouping":o.needsGrouping},[h("div",WR,[h("div",JR,[h("div",QR,[h("h6",null,oe(o.teamName),1),o.paid?(b(),T("span",YR,"PAID")):F("",!0),o.paid?F("",!0):(b(),T("span",XR,"UNPAID"))]),h("div",ZR,[h("form",eD,[tD,(b(!0),T(ie,null,_t(o.players,a=>(b(),T("span",null,oe(a.first_name)+" "+oe(a.last_name),1))),256))])])])]),h("div",nD,[h("div",sD,[h("span",null,oe(o.division),1)])]),h("div",iD,[h("div",rD,[o.needsGrouping?(b(),T("span",oD,"yes")):F("",!0),o.needsGrouping?F("",!0):(b(),T("span",aD,"no"))])]),h("div",lD,[h("ul",{class:"dropbtn icons btn-right showLeft",onClick:e[0]||(e[0]=(...a)=>r.showAdminTools&&r.showAdminTools(...a))},dD),h("div",fD,[h("button",{class:"close-tools",onClick:e[1]||(e[1]=(...a)=>r.closeAdminTools&&r.closeAdminTools(...a))}," × "),h("ul",null,[h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[2]||(e[2]=(...a)=>this.editTeamHandler&&this.editTeamHandler(...a))}," Edit Team ",8,pD)]),h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[3]||(e[3]=(...a)=>r.deleteTeamHandler&&r.deleteTeamHandler(...a))}," Delete Team ",8,mD)]),o.needsGrouping?(b(),T("li",gD,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[4]||(e[4]=(...a)=>r.groupTeamHandler&&r.groupTeamHandler(...a))}," Group Team ",8,yD)])):F("",!0)])])])],8,KR)]))),256)),this.adminChoices.isFiltering?(b(!0),T(ie,{key:1},_t(this.adminChoices.filteredTeams.mens,o=>(b(),T("div",vD,[h("div",_D,[h("div",{class:"row admin--row data","data-paid":o.paid,"data-needsGrouping":o.needsGrouping},[h("div",bD,[h("div",ID,[h("div",ED,[h("h6",null,oe(o.teamName),1),o.paid?(b(),T("span",TD,"PAID")):F("",!0),o.paid?F("",!0):(b(),T("span",CD,"UNPAID"))]),h("div",SD,[h("form",AD,[kD,(b(!0),T(ie,null,_t(o.players,a=>(b(),T("span",null,oe(a.first_name)+" "+oe(a.last_name),1))),256))])])])]),h("div",ND,[h("div",RD,[h("span",null,oe(o.division),1)])]),h("div",DD,[h("div",OD,[o.needsGrouping?(b(),T("span",PD,"yes")):F("",!0),o.needsGrouping?F("",!0):(b(),T("span",MD,"no"))])]),h("div",LD,[h("ul",{class:"dropbtn icons btn-right showLeft",onClick:e[5]||(e[5]=(...a)=>r.showAdminTools&&r.showAdminTools(...a))},$D),h("div",VD,[h("button",{class:"close-tools",onClick:e[6]||(e[6]=(...a)=>r.closeAdminTools&&r.closeAdminTools(...a))}," × "),h("ul",null,[h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[7]||(e[7]=(...a)=>this.editTeamHandler&&this.editTeamHandler(...a))}," Edit Team ",8,BD)]),h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[8]||(e[8]=(...a)=>r.deleteTeamHandler&&r.deleteTeamHandler(...a))}," Delete Team ",8,jD)]),o.needsGrouping?(b(),T("li",HD,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[9]||(e[9]=(...a)=>r.groupTeamHandler&&r.groupTeamHandler(...a))}," Group Team ",8,qD)])):F("",!0)])])])],8,wD)])]))),256)):F("",!0),this.adminChoices.isFiltering&&Object.keys(this.adminChoices.filteredTeams.mens).length===0?(b(),T("div",GD,KD)):F("",!0)])):F("",!0),this.adminChoices.renderCoedList?(b(),T("div",WD,[JD,this.adminChoices.isFiltering?F("",!0):(b(!0),T(ie,{key:0},_t(n.teamsSignedUp.coed,o=>(b(),T("div",QD,[h("div",YD,[h("div",{class:"row admin--row data","data-paid":o.paid,"data-needsGrouping":o.needsGrouping},[h("div",ZD,[h("div",eO,[h("div",tO,[h("h6",null,oe(o.teamName),1),o.paid?(b(),T("span",nO,"PAID")):F("",!0),o.paid?F("",!0):(b(),T("span",sO,"UNPAID"))]),h("div",iO,[h("form",rO,[oO,(b(!0),T(ie,null,_t(o.players,a=>(b(),T("span",null,oe(a.first_name)+" "+oe(a.last_name),1))),256))])])])]),h("div",aO,[h("div",lO,[h("span",null,oe(o.division),1)])]),h("div",cO,[h("div",uO,[o.needsGrouping?(b(),T("span",hO,"yes")):F("",!0),o.needsGrouping?F("",!0):(b(),T("span",dO,"no"))])]),h("div",fO,[h("ul",{class:"dropbtn icons btn-right showLeft",onClick:e[10]||(e[10]=(...a)=>r.showAdminTools&&r.showAdminTools(...a))},yO),h("div",vO,[h("button",{class:"close-tools",onClick:e[11]||(e[11]=(...a)=>r.closeAdminTools&&r.closeAdminTools(...a))}," × "),h("ul",null,[h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[12]||(e[12]=(...a)=>this.editTeamHandler&&this.editTeamHandler(...a))}," Edit Team ",8,_O)]),h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[13]||(e[13]=(...a)=>r.deleteTeamHandler&&r.deleteTeamHandler(...a))}," Delete Team ",8,wO)]),o.needsGrouping?(b(),T("li",bO,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[14]||(e[14]=(...a)=>r.groupTeamHandler&&r.groupTeamHandler(...a))}," Group Team ",8,IO)])):F("",!0)])])])],8,XD)])]))),256)),this.adminChoices.isFiltering?(b(!0),T(ie,{key:1},_t(this.adminChoices.filteredTeams.coed,o=>(b(),T("div",EO,[h("div",TO,[h("div",{class:"row admin--row data","data-paid":o.paid,"data-needsGrouping":o.needsGrouping},[h("div",SO,[h("div",AO,[h("div",kO,[h("h6",null,oe(o.teamName),1),o.paid?(b(),T("span",NO,"PAID")):F("",!0),o.paid?F("",!0):(b(),T("span",RO,"UNPAID"))]),h("div",DO,[h("form",OO,[PO,(b(!0),T(ie,null,_t(o.players,a=>(b(),T("span",null,oe(a.first_name)+" "+oe(a.last_name),1))),256))])])])]),h("div",MO,[h("div",LO,[h("span",null,oe(o.division),1)])]),h("div",xO,[h("div",UO,[o.needsGrouping?(b(),T("span",FO,"yes")):F("",!0),o.needsGrouping?F("",!0):(b(),T("span",$O,"no"))])]),h("div",VO,[h("ul",{class:"dropbtn icons btn-right showLeft",onClick:e[15]||(e[15]=(...a)=>r.showAdminTools&&r.showAdminTools(...a))},qO),h("div",GO,[h("button",{class:"close-tools",onClick:e[16]||(e[16]=(...a)=>r.closeAdminTools&&r.closeAdminTools(...a))}," × "),h("ul",null,[h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[17]||(e[17]=(...a)=>this.editTeamHandler&&this.editTeamHandler(...a))}," Edit Team ",8,zO)]),h("li",null,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[18]||(e[18]=(...a)=>r.deleteTeamHandler&&r.deleteTeamHandler(...a))}," Delete Team ",8,KO)]),o.needsGrouping?(b(),T("li",WO,[h("button",{"data-tool-target":o.id,"data-league":o.division,onClick:e[19]||(e[19]=(...a)=>r.groupTeamHandler&&r.groupTeamHandler(...a))}," Group Team ",8,JO)])):F("",!0)])])])],8,CO)])]))),256)):F("",!0),this.adminChoices.isFiltering&&Object.keys(this.adminChoices.filteredTeams.coed).length===0?(b(),T("div",QO,XO)):F("",!0)])):F("",!0)],64)}const eP=ut(HR,[["render",ZO],["__scopeId","data-v-6f0ae39d"]]);const tP={props:["teamInfo"],methods:{submitTeamChangesHandler(t){t.preventDefault(),this.$emit("submit-changes"),this.closeEditModal()},closeEditModal(t){this.$emit("close-modal")}}},bi=t=>(Ot("data-v-3be6df2b"),t=t(),Pt(),t),nP={open:"",class:"admin--card edit-team-dialog"},sP={id:"editTeam-form"},iP=bi(()=>h("legend",null,"Team Name",-1)),rP=["value"],oP=bi(()=>h("legend",null,"Division",-1)),aP=["value"],lP=bi(()=>h("option",{value:"mens"},"Men's Division",-1)),cP=bi(()=>h("option",{value:"coed"},"Co-ed Division",-1)),uP=[lP,cP],hP={class:"row"},dP=bi(()=>h("legend",null,"Players",-1)),fP=["value"],pP=["value"],mP=["value"],gP=["value"],yP=["value"],vP=["value"],_P=["value"],wP=["value"],bP={class:"row w-100 m-auto"},IP={class:"col-6"},EP={key:0,class:"ui-info paid"},TP={key:1,class:"ui-info unpaid"},CP={class:"col-6"},SP=bi(()=>h("div",{id:"dialog--bg",class:"ui--backdrop backdrop--open"},null,-1));function AP(t,e,n,s,i,r){return b(),T(ie,null,[h("dialog",nP,[h("button",{class:"close-tools",onClick:e[0]||(e[0]=(...o)=>r.closeEditModal&&r.closeEditModal(...o))},"×"),h("form",sP,[h("small",null,"ID: "+oe(this.teamInfo.id),1),h("fieldset",null,[iP,h("input",{class:"input full-width",type:"text",id:"team-name",value:this.teamInfo.teamName,onInput:e[1]||(e[1]=o=>this.teamInfo.teamName=o.target.value)},null,40,rP)]),h("fieldset",null,[oP,h("select",{value:this.teamInfo.division,onInput:e[2]||(e[2]=o=>this.teamInfo.division=o.target.value),class:"input full-width"},uP,40,aP)]),h("fieldset",hP,[dP,this.teamInfo.players[0]?(b(),T("input",{key:0,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[0].first_name,onInput:e[3]||(e[3]=o=>this.teamInfo.players[0].first_name=o.target.value)},null,40,fP)):F("",!0),this.teamInfo.players[0]?(b(),T("input",{key:1,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[0].last_name,onInput:e[4]||(e[4]=o=>this.teamInfo.players[0].last_name=o.target.value)},null,40,pP)):F("",!0),this.teamInfo.players[1]?(b(),T("input",{key:2,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[1].first_name,onInput:e[5]||(e[5]=o=>this.teamInfo.players[1].first_name=o.target.value)},null,40,mP)):F("",!0),this.teamInfo.players[1]?(b(),T("input",{key:3,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[1].last_name,onInput:e[6]||(e[6]=o=>this.teamInfo.players[1].last_name=o.target.value)},null,40,gP)):F("",!0),this.teamInfo.players[2]?(b(),T("input",{key:4,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[2].first_name,onInput:e[7]||(e[7]=o=>this.teamInfo.players[2].first_name=o.target.value)},null,40,yP)):F("",!0),this.teamInfo.players[2]?(b(),T("input",{key:5,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[2].last_name,onInput:e[8]||(e[8]=o=>this.teamInfo.players[2].last_name=o.target.value)},null,40,vP)):F("",!0),this.teamInfo.players[3]?(b(),T("input",{key:6,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[3].first_name,onInput:e[9]||(e[9]=o=>this.teamInfo.players[3].first_name=o.target.value)},null,40,_P)):F("",!0),this.teamInfo.players[3]?(b(),T("input",{key:7,class:"input col-6",type:"text",id:"player1-first-name",value:this.teamInfo.players[3].last_name,onInput:e[10]||(e[10]=o=>this.teamInfo.players[3].last_name=o.target.value)},null,40,wP)):F("",!0)]),h("div",bP,[h("div",IP,[h("p",null,[Ie(" Current payment status: "),this.teamInfo.paid?(b(),T("span",EP,"PAID")):F("",!0),this.teamInfo.paid?F("",!0):(b(),T("span",TP,"UNPAID"))])]),h("div",CP,[this.teamInfo.paid?F("",!0):(b(),T("button",{key:0,class:"payment-button",onClick:e[11]||(e[11]=o=>this.teamInfo.paid=!0)}," Mark Team Paid ")),this.teamInfo.paid?(b(),T("button",{key:1,class:"payment-button",onClick:e[12]||(e[12]=o=>this.teamInfo.paid=!1)}," Mark Team Unpaid ")):F("",!0)])]),h("button",{role:"button",id:"editTeam-submit",onClick:e[13]||(e[13]=(...o)=>r.submitTeamChangesHandler&&r.submitTeamChangesHandler(...o))}," SUBMIT CHANGES ")])]),SP],64)}const ev=ut(tP,[["render",AP],["__scopeId","data-v-3be6df2b"]]);const kP={props:["teamsSignedUp","teamInfo"],data(){return{errors:[],availableTeams:null,groupingInfo:{}}},beforeMount(){this.availableTeams=this.teamsSignedUp.filter(t=>{if(t.numOfPlayers+this.teamInfo.numOfPlayers===4&&t.id!==this.teamInfo.id)return t})},methods:{checkForm(t){t.preventDefault(),this.groupingInfo.hasOwnProperty("teamToMerge")?this.submitGroupTeamChangesHandler():this.errors.push("Please choose a team to group with.")},submitGroupTeamChangesHandler(){this.$emit("submit-group-changes",this.groupingInfo.teamToMerge),this.closeGroupModal()},closeGroupModal(t){this.$emit("close-group-modal")}}},Va=t=>(Ot("data-v-f5a3c9eb"),t=t(),Pt(),t),NP={open:"",class:"admin--card edit-team-dialog"},RP=Va(()=>h("h4",{class:"text-center my-4"},"Available Teams for Grouping with:",-1)),DP={class:"text-center"},OP=Va(()=>h("br",null,null,-1)),PP={class:"team-container admin--row row mx-auto mt-4"},MP=["id","onInput"],LP=["for"],xP={class:"col-12"},UP={class:"select--team-name"},FP={class:"col-12"},$P={class:"ui-info player-num"},VP={class:"col-12"},BP={class:"select--id"},jP={key:0,class:"no--data"},HP=Va(()=>h("p",null,"No results matching your request",-1)),qP=[HP],GP=Va(()=>h("div",{id:"dialog--bg",class:"ui--backdrop backdrop--open"},null,-1));function zP(t,e,n,s,i,r){return b(),T(ie,null,[h("dialog",NP,[h("button",{class:"close-tools",onClick:e[0]||(e[0]=(...o)=>r.closeGroupModal&&r.closeGroupModal(...o))},"×"),h("form",{id:"groupTeam-form",onSubmit:e[2]||(e[2]=(...o)=>r.checkForm&&r.checkForm(...o))},[h("small",null,"ID: "+oe(this.teamInfo.id),1),h("fieldset",null,[RP,h("h5",DP,[Ie(oe(this.teamInfo.teamName),1),OP,Ie(" players: "+oe(this.teamInfo.numOfPlayers),1)]),(b(!0),T(ie,null,_t(i.availableTeams,o=>(b(),T("div",PP,[h("input",{class:"col-2",type:"radio",id:o.id,name:"group-teams",onInput:a=>this.groupingInfo.teamToMerge=o},null,40,MP),h("label",{for:o.id,class:"row m-auto col-10"},[h("div",xP,[h("h6",UP,oe(o.teamName),1)]),h("div",FP,[h("span",$P,"players: "+oe(o.numOfPlayers),1)]),h("div",VP,[h("small",BP,"id:"+oe(o.id),1)])],8,LP)]))),256)),Object.keys(this.availableTeams).length===0?(b(),T("div",jP,qP)):F("",!0)]),h("button",{role:"button",id:"groupTeam-submit",onClick:e[1]||(e[1]=(...o)=>r.submitGroupTeamChangesHandler&&r.submitGroupTeamChangesHandler(...o))}," GROUP TEAMS ")],32)]),GP],64)}const tv=ut(kP,[["render",zP],["__scopeId","data-v-f5a3c9eb"]]);const KP={props:["adminChoices"],data(){return{leagueFilter:null,attributeFilter:null}},methods:{filterByLeague(t){this.$emit("filter-league",t.target.value)},filterByAttributeHandler(t){this.$emit("filter-attribute",t.target.value)},clearFiltersHandler(t){t.preventDefault(),this.leagueFilter=null,this.attributeFilter=null,this.$emit("clear-filters")}}},bn=t=>(Ot("data-v-0d86a504"),t=t(),Pt(),t),WP={class:"admin--card"},JP={id:"admin-filters"},QP=bn(()=>h("legend",null,"Filters",-1)),YP=bn(()=>h("label",null,"Filter by league",-1)),XP=bn(()=>h("option",{value:"mens"},"Men's",-1)),ZP=bn(()=>h("option",{value:"coed"},"Co-Ed",-1)),eM=bn(()=>h("option",{value:"both"},"Both",-1)),tM=[XP,ZP,eM],nM=bn(()=>h("label",null,"Filter by attribute",-1)),sM=bn(()=>h("option",{value:"paid"},"Paid",-1)),iM=bn(()=>h("option",{value:"unpaid"},"Unpaid",-1)),rM=bn(()=>h("option",{value:"needsGrouping"},"Needs Grouping",-1)),oM=[sM,iM,rM];function aM(t,e,n,s,i,r){return b(),T("div",WP,[h("form",JP,[h("fieldset",null,[QP,YP,vt(h("select",{id:"league-filter",class:"w-100",onChange:e[0]||(e[0]=o=>{r.filterByLeague(o)}),"onUpdate:modelValue":e[1]||(e[1]=o=>this.leagueFilter=o)},tM,544),[[Ol,this.leagueFilter]]),nM,vt(h("select",{id:"attribute-filter",class:"w-100",onChange:e[2]||(e[2]=o=>{r.filterByAttributeHandler(o)}),"onUpdate:modelValue":e[3]||(e[3]=o=>this.attributeFilter=o)},oM,544),[[Ol,this.attributeFilter]]),h("button",{role:"button",onClick:e[4]||(e[4]=(...o)=>r.clearFiltersHandler&&r.clearFiltersHandler(...o))}," Clear Filters ")])])])}const lM=ut(KP,[["render",aM],["__scopeId","data-v-0d86a504"]]);const cM={key:0,class:"container row m-auto"},uM={class:"col-md-7 col-12"},hM={class:"col-md-5 col-12 admin--panel"},dM={components:{editTeamModal:ev,groupTeamModal:tv},data(){return{isEditing:!1,isGrouping:!1,adminChoices:{league:null,renderCoedList:!0,renderMensList:!0,renderPaid:!0,renderUnpaid:!0,renderNeedsGrouping:!0,filteredTeams:{mens:[],coed:[]},isFiltering:!1},teamsSignedUp:{},teamInfo:{teamName:null,id:null,players:[],division:null,needsGrouping:null,numOfPlayers:null}}},methods:{getTeamsListHandler:async function(){let t=await gf("mens-league"),e=await gf("coed-league");this.teamsSignedUp.mens={},this.teamsSignedUp.coed={},t=t.forEach(function(n){this.createTeamsData(n,"mens")},this),e=e.forEach(function(n){this.createTeamsData(n,"coed")},this),this.adminChoices.division||(this.adminChoices.renderMensList=!0,this.adminChoices.renderCoedList=!0),console.log(this.teamsSignedUp)},createTeamsData(t,e){Object.values(t).forEach(function(n){this.teamsSignedUp[e][n.id]=n},this)},createFilteredTeamsData(t,e){this.adminChoices.filteredTeams[e][t.id]={};for(const[n,s]of Object.entries(t))this.adminChoices.filteredTeams[e][t.id][n]=s},clearFilters(){this.adminChoices.isFiltering=!1,this.adminChoices.filteredTeams.mens={},this.adminChoices.filteredTeams.coed={}},closeEditModal(){this.isEditing=!1},closeGroupModal(){this.isGrouping=!1},async deleteTeam(t){if(prompt(`Are you sure you want to delete ${t.teamName}?
        Type YES (all caps) below to delete.`)==="YES")await yf(`${t.division}-league`,t.id)?(this.teamsSignedUp=[],await this.getTeamsListHandler()):this.errors.push("There was a problem deleting this team, please try again");else return},editTeam(t){this.teamInfo.players=t.players,this.teamInfo.teamName=t.teamName,this.teamInfo.id=t.id,this.teamInfo.division=t.division,this.teamInfo.paid=t.paid,this.isEditing=!0},groupTeam(t){this.teamInfo.players=t.players,this.teamInfo.teamName=t.teamName,this.teamInfo.id=t.id,this.teamInfo.division=t.division,this.teamInfo.needsGrouping=t.needsGrouping,this.teamInfo.numOfPlayers=t.numOfPlayers,this.isGrouping=!0},async submitTeamChanges(){await pc(`${this.teamInfo.division}-league`,this.teamInfo),this.teamsSignedUp=[],await this.getTeamsListHandler(),location.reload()},async submitGroupChanges(t){t.players.forEach(e=>this.teamInfo.players.push(e)),this.teamInfo.players.length===4&&(this.teamInfo.needsGrouping=!1),await pc(`${this.teamInfo.division}-league`,this.teamInfo),await yf(`${t.division}-league`,t.id),this.teamsSignedUp=[],await this.getTeamsListHandler()},filterLeague(t){t==="mens"?(this.adminChoices.renderMensList=!0,this.adminChoices.renderCoedList=!1):t==="coed"?(this.adminChoices.renderMensList=!1,this.adminChoices.renderCoedList=!0):(this.adminChoices.renderMensList=!0,this.adminChoices.renderCoedList=!0),location.reload()},filterAttribute(t){this.adminChoices.isFiltering=!0;let e=[];switch(this.adminChoices.renderCoedList&&this.adminChoices.renderMensList?e=["mens","coed"]:this.adminChoices.renderCoedList?e=["coed"]:e=["mens"],this.adminChoices.filteredTeams.mens={},this.adminChoices.filteredTeams.coed={},t){case"paid":e.forEach(n=>Object.values(this.teamsSignedUp[n]).forEach(s=>{s.paid&&this.createFilteredTeamsData(s,n)}));break;case"unpaid":e.forEach(n=>Object.values(this.teamsSignedUp[n]).forEach(s=>{s.paid||this.createFilteredTeamsData(s,n)}));break;case"needsGrouping":e.forEach(n=>Object.values(this.teamsSignedUp[n]).forEach(s=>{s.needsGrouping&&this.createFilteredTeamsData(s,n)}));break;default:return}console.log(this.adminChoices.filteredTeams)},concatPlayerNames(t){t.forEach((e,n,s)=>{let i="",r=n+1;i+=e.first_name,i+=" ",i+=e.last_name,this.teamInfo[`player${r}_name`]=i})}},async created(){await this.getTeamsListHandler()}},fM=Object.assign(dM,{__name:"Admin",setup(t){return(e,n)=>(b(),T(ie,null,[te(bs),Object.keys(e.teamsSignedUp).length>0?(b(),T("div",cM,[h("div",uM,[te(eP,{teamsSignedUp:e.teamsSignedUp,adminChoices:e.adminChoices,onEditTeam:e.editTeam,onDeleteTeam:e.deleteTeam,onGroupTeam:e.groupTeam},null,8,["teamsSignedUp","adminChoices","onEditTeam","onDeleteTeam","onGroupTeam"])]),h("div",hM,[te(lM,{adminChoices:e.adminChoices,onFilterLeague:e.filterLeague,onFilterAttribute:e.filterAttribute,onClearFilters:e.clearFilters},null,8,["adminChoices","onFilterLeague","onFilterAttribute","onClearFilters"])])])):F("",!0),e.isEditing?(b(),Qi(ev,{key:1,teamInfo:e.teamInfo,onCloseModal:e.closeEditModal,onSubmitChanges:e.submitTeamChanges},null,8,["teamInfo","onCloseModal","onSubmitChanges"])):F("",!0),e.isGrouping?(b(),Qi(tv,{key:2,teamsSignedUp:e.teamsSignedUp,teamInfo:e.teamInfo,onCloseGroupModal:e.closeGroupModal,onSubmitGroupChanges:e.submitGroupChanges},null,8,["teamsSignedUp","teamInfo","onCloseGroupModal","onSubmitGroupChanges"])):F("",!0)],64))}});const pM=nr(Yu);pM.languageCode="en";const mM=Ur,gM={data(){return{errors:[],userPhoneNumber:null,userSMSCode:null,smsCodeSent:!1}},mounted(){const t=nr();window.recaptchaVerifier=new nT("recaptcha-container",{size:"normal",callback:e=>{this.showSMSForm()}},t),window.recaptchaVerifier.render().then(function(e){window.recaptchaWidgetId=e})},watch:{userSMSCode(t){this.userSMSCode.length===6&&this.validateSMSCode()}},methods:{openFormHandler:function(){},closeFormHandler:function(){},checkPhone:function(t){this.errors=[],this.userPhoneNumber?(this.removeErrors(),this.startSignIn()):this.errors.push("Please enter a phone number"),t.preventDefault()},removeErrors:function(){this.errors=[]},startSignIn:function(){const t=nr(),e=window.recaptchaVerifier,n=`+1${this.userPhoneNumber}`;bE(t,Wc).then(()=>{rT(t,n,e).then(s=>{window.confirmationResult=s,this.smsCodeSent=!0}).catch(s=>{console.error(s),window.recaptchaVerifier.render().then(function(i){grecaptcha.reset(i)})})})},validateSMSCode:async function(){const t=await confirmationResult.confirm(String(this.userSMSCode));t.user?(new URLSearchParams(window.location.search),ft.commit("setPermissionLevel",await this.userPermissionsHandler(t.user.phoneNumber)),this.$router.push("/"),location.reload()):(this.errors.push("Sign in failed, please try again."),console.log(error),window.recaptchaVerifier.render().then(function(e){grecaptcha.reset(e)}))},userPermissionsHandler:async function(t){return await Qy(mM,t)}}},Es=t=>(Ot("data-v-c0b7c3b7"),t=t(),Pt(),t),yM={id:"phone-form"},vM={key:0,class:"form-inner"},_M=Es(()=>h("h1",{class:"text-center"},"Enter your phone number to sign in",-1)),wM=Es(()=>h("p",null," We'll send a code to your phone, you enter the code on the next screen, and you're ready to sign up! ",-1)),bM={class:"form-inset"},IM={key:0,class:"error-list error"},EM=Es(()=>h("span",null,"Please correct the following error(s):",-1)),TM={class:"form-control"},CM=Es(()=>h("div",{id:"recaptcha-container"},null,-1)),SM={key:1,class:"form-inner"},AM=Es(()=>h("h1",null,"Enter the 6-digit code",-1)),kM=Es(()=>h("br",null,null,-1)),NM={class:"form-inset"},RM={class:"form-control"},DM=Es(()=>h("div",{id:"form--bg",class:"ui--backdrop"},null,-1));function OM(t,e,n,s,i,r){const o=ci("router-link");return b(),T(ie,null,[h("form",yM,[i.smsCodeSent?F("",!0):(b(),T("div",vM,[_M,wM,h("div",bM,[i.errors.length?(b(),T("span",IM,[EM,h("ul",null,[(b(!0),T(ie,null,_t(i.errors,a=>(b(),T("li",null,oe(a),1))),256))])])):F("",!0),h("div",TM,[vt(h("input",{type:"phone",id:"phoneNumber","onUpdate:modelValue":e[0]||(e[0]=a=>i.userPhoneNumber=a)},null,512),[[Vt,i.userPhoneNumber]])]),CM]),h("button",{id:"sign-in-button",type:"button",onClick:e[1]||(e[1]=(...a)=>r.checkPhone&&r.checkPhone(...a))}," Continue ")])),i.smsCodeSent?(b(),T("div",SM,[AM,h("p",null,[Ie(" Your code should arrive within a few minutes. Didn't get a code?"),kM,te(o,{to:"/sign-up"},{default:At(()=>[Ie("try again")]),_:1})]),h("div",NM,[h("div",RM,[vt(h("input",{type:"text",id:"smsCode","onUpdate:modelValue":e[2]||(e[2]=a=>i.userSMSCode=a)},null,512),[[Vt,i.userSMSCode]])])])])):F("",!0)]),DM],64)}const nv=ut(gM,[["render",OM],["__scopeId","data-v-c0b7c3b7"]]);const PM={class:"admin admin--sign-in"},MM={class:"container"},LM={__name:"adminSignIn",setup(t){return(e,n)=>(b(),T(ie,null,[te(bs),h("div",PM,[h("div",MM,[te(nv)])])],64))}},xM=ut(LM,[["__scopeId","data-v-d58ea8b2"]]);const UM={class:"winnders-circle"},FM=h("div",{class:"top--content"},[h("h1",null,[Ie("The "),h("span",null,"winners"),Ie(),h("span",{class:"large"},"circle")])],-1),$M={class:"container"},VM={class:"top-copy"},BM=h("div",{id:"dataOutput",class:"mt-4"},[h("div",{class:"line"})],-1),jM={data(){return{winners:[{year:2022,division:"Men's",team:["John Doe","John Doe","Ricky Jones","Jim Kramer"]},{year:2022,division:"Co-Ed",team:["John Doe","John Doe","Ricky Jones","Jim Kramer"]},{year:2021,division:"Men's",team:["Joe Lowell","Ryan Carey","Ethan Cheffer","Jim Carey"]},{year:2021,division:"Co-Ed",team:["Nicole Vitello","Hannah Dill","Kiarra Bonilla","Brian Dill"]},{year:2020,division:"Men's",team:["Kyle Phelan","Dennis Phelan","Steven Julius","Mark Julius"]},{year:2020,division:"Co-Ed",team:["Caitlyn Longwell","Lisa Longwell","Glenn Longwell","Matt Paolini"]},{year:2019,division:"Men's",team:["Richard Moore","Andy Vojt","Brian Glatzel","Donn Malner"]},{year:2019,division:"Co-Ed",team:["Marianne Elliott","Lisa Longwell","Donna Monks","Mary Okolo"]},{year:2018,division:"Men's",team:["Mike Cappetta","Ryan Cappetta","Kevin Mathews","Zach Bjornberg"]},{year:2018,division:"Co-Ed",team:["Lisa Longwell","Rhea Adler","Nicole Vitello","Cindy Moser"]},{year:2017,division:"Men's",team:["Del Koupf","Mike Seaver","Troy Sundwall","Mike Sundwall"]},{year:2017,division:"Co-Ed - *First year of inception",team:["Rhea Adler","Marianne Elliott","Janice Vitello","Nicole Vitello"]},{year:2016,division:"Men's",team:["Bill Cirscuolo","Mark Sytra","Troy Sundwall","Mike Sundwall"]},{year:2015,division:"Men's",team:["John Casertano","Mike Casertano","Kyle Dahn","Keith Crumb"]},{year:2014,division:"Men's",team:["John Casertano","Mike Casertano","Rick Dondero"]},{year:2013,division:"Men's",team:["John Casertano","Mike Casertano","Rick Dondero"]},{year:2012,division:"Men's",team:["Johnny Vitello","Tom Maher","Billy Mageski","Mike Sundwall"]},{year:2011,division:"Men's",team:["Rick Moore","Mike Hinckley","Pete Giannini"]},{year:2010,division:"Men's",team:["Johnny Vitello","Tom Maher","Billy Mageski","Tom Howard"]},{year:2009,division:"Men's",team:["Phil Curry","Dave LaClair","Kevin Langan","Joe Jarvie"]},{year:2008,division:"Men's",team:["Phil Curry","Joe Jarvie","Dave LaClair"]},{year:2007,division:"Men's",team:["Jonny Molchan","Jay Valentine","Jim Schmidt","Richard Schmidt"]},{year:2006,division:"Men's",team:["Jonny Molchan","Jay Valentine","Jim Schmidt","Richard Schmidt"]},{year:2005,division:"Men's",team:["John Casertano","Mike Casertano","Jeff Dahn","Bob Neibling"]},{year:2004,division:"Men's",team:["Del Koupf","Mike Seaver","Don Waldron","Mike Sundwall"]},{year:2003,division:"Men's",team:["Dennis Perrino","Steve Worley","Ed Yocher"]},{year:2002,division:"Men's",team:["Rick Schaefer","Ron Mitchell","Pete Andersen","Pete Czuchra"]},{year:2001,division:"Men's",team:["Del Koupf","Bill Criscuolo","Frank Wallaby","Mike Sundwall"]},{year:2e3,division:"Men's",team:["Del Koupf","Chris Dellavalle","Mike Silengo","Mike Sundwall"]},{year:1999,division:"Men's",team:["Del Koupf","Mike Seaver","Don Waldron","Mike Sundwall"]},{year:1998,division:"Men's",team:["Rick Diotalevi","Randy Diotalevi","Rod Diotalevi","Tino Diotalevi"]},{year:1997,division:"Men's",team:["Ed Yocher","Vin Malerba","Charley Mahoney"]},{year:1993,division:"Men's",team:["Paul Vitello","Tom Howard","Joe Mastrangelo","Adam Mastrangelo"]}]}},mounted(){const t=this.winners;for(const n of t){const s=document.createElement("div");document.createElement("div"),["winner--output","row"].forEach(c=>{s.classList.add(c)});const r=document.createElement("div");r.classList.add("year-container");const o=document.createElement("h1"),a=document.createElement("p"),l=document.createElement("div");l.classList.add("team-container"),o.textContent=n.year,a.textContent=n.division;for(const c of n.team){const u=document.createElement("span");u.textContent=c,l.appendChild(u)}r.appendChild(o),r.appendChild(a),s.appendChild(r),s.appendChild(l),document.querySelector("#dataOutput").appendChild(s)}const e=document.querySelector("#dataOutput").getBoundingClientRect().height;document.querySelector(".line").style.height=`${e}px`}},HM=Object.assign(jM,{__name:"winnersCircle",setup(t){return(e,n)=>{const s=ci("router-link");return b(),T(ie,null,[te(bs),h("div",UM,[FM,h("div",$M,[h("div",VM,[h("p",null,[Ie(" Check out the past winners of our tournament! "),te(s,{to:"/sign-up"},{default:At(()=>[Ie("Sign up")]),_:1}),Ie(" to get your name featured…if you can! ")])]),BM])])],64)}}});const qM={class:"sign-in"},GM={class:"container"},zM={class:"card"},KM={__name:"signIn",setup(t){return(e,n)=>(b(),T(ie,null,[te(bs),h("div",qM,[h("div",GM,[h("div",zM,[te(nv)])])])],64))}},WM=ut(KM,[["__scopeId","data-v-d6bf4486"]]),JM=()=>ck.then(t=>!!t);async function yl(t,e,n){const s=await JM();t.fullPath==="/sign-in"?s?n("/"):n():s?n():n("/sign-in")}const QM=(t,e,n)=>{const s=ft.getters.getTeam,i=JSON.parse(sessionStorage.getItem("team"));s?n():i?(ft.commit("setTeam",i),n()):n("/sign-up")},YM=F0({history:e0(),routes:[{path:"/",name:"Home",component:IN},{path:"/about",name:"About",component:BN},{path:"/sign-up",name:"SignUp",component:TR,beforeEnter:yl},{path:"/sign-in",name:"SignIn",component:WM,beforeEnter:yl},{path:"/sign-up-success",name:"SignUp__success",component:jR,beforeEnter:QM},{path:"/admin/sign-in",name:"adminSignIn",component:xM},{path:"/admin",name:"admin",component:fM,beforeEnter:yl},{path:"/winners-circle",name:"winnersCircle",component:HM}]});Aw(lk).use(YM).use(ft).mount("#app");
