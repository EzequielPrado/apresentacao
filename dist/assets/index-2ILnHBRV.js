(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();var Ba={exports:{}},tl={},Wa={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),lu=Symbol.for("react.portal"),su=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),du=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),pu=Symbol.for("react.memo"),mu=Symbol.for("react.lazy"),_o=Symbol.iterator;function fu(e){return e===null||typeof e!="object"?null:(e=_o&&e[_o]||e["@@iterator"],typeof e=="function"?e:null)}var Ha={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,qa={};function sr(e,t,r){this.props=e,this.context=t,this.refs=qa,this.updater=r||Ha}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=sr.prototype;function Ds(e,t,r){this.props=e,this.context=t,this.refs=qa,this.updater=r||Ha}var Fs=Ds.prototype=new Ya;Fs.constructor=Ds;Qa(Fs,sr.prototype);Fs.isPureReactComponent=!0;var Lo=Array.isArray,Ka=Object.prototype.hasOwnProperty,$s={current:null},Ga={key:!0,ref:!0,__self:!0,__source:!0};function Xa(e,t,r){var n,l={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Ka.call(t,n)&&!Ga.hasOwnProperty(n)&&(l[n]=t[n]);var a=arguments.length-2;if(a===1)l.children=r;else if(1<a){for(var i=Array(a),u=0;u<a;u++)i[u]=arguments[u+2];l.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)l[n]===void 0&&(l[n]=a[n]);return{$$typeof:Yr,type:e,key:s,ref:o,props:l,_owner:$s.current}}function vu(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function gu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Mo=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gu(""+e.key):t.toString(36)}function bn(e,t,r,n,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case lu:o=!0}}if(o)return o=e,l=l(o),e=n===""?"."+yl(o,0):n,Lo(l)?(r="",e!=null&&(r=e.replace(Mo,"$&/")+"/"),bn(l,t,r,"",function(u){return u})):l!=null&&(Us(l)&&(l=vu(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Mo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,n=n===""?".":n+":",Lo(e))for(var a=0;a<e.length;a++){s=e[a];var i=n+yl(s,a);o+=bn(s,t,r,i,l)}else if(i=fu(e),typeof i=="function")for(e=i.call(e),a=0;!(s=e.next()).done;)s=s.value,i=n+yl(s,a++),o+=bn(s,t,r,i,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tn(e,t,r){if(e==null)return e;var n=[],l=0;return bn(e,n,"","",function(s){return t.call(r,s,l++)}),n}function hu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},yn={transition:null},xu={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:yn,ReactCurrentOwner:$s};function Za(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:tn,forEach:function(e,t,r){tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return tn(e,function(){t++}),t},toArray:function(e){return tn(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=sr;R.Fragment=su;R.Profiler=au;R.PureComponent=Ds;R.StrictMode=ou;R.Suspense=cu;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu;R.act=Za;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qa({},e.props),l=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$s.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in t)Ka.call(t,i)&&!Ga.hasOwnProperty(i)&&(n[i]=t[i]===void 0&&a!==void 0?a[i]:t[i])}var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){a=Array(i);for(var u=0;u<i;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Yr,type:e.type,key:l,ref:s,props:n,_owner:o}};R.createContext=function(e){return e={$$typeof:du,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iu,_context:e},e.Consumer=e};R.createElement=Xa;R.createFactory=function(e){var t=Xa.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:uu,render:e}};R.isValidElement=Us;R.lazy=function(e){return{$$typeof:mu,_payload:{_status:-1,_result:e},_init:hu}};R.memo=function(e,t){return{$$typeof:pu,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=yn.transition;yn.transition={};try{e()}finally{yn.transition=t}};R.unstable_act=Za;R.useCallback=function(e,t){return ae.current.useCallback(e,t)};R.useContext=function(e){return ae.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};R.useEffect=function(e,t){return ae.current.useEffect(e,t)};R.useId=function(){return ae.current.useId()};R.useImperativeHandle=function(e,t,r){return ae.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ae.current.useMemo(e,t)};R.useReducer=function(e,t,r){return ae.current.useReducer(e,t,r)};R.useRef=function(e){return ae.current.useRef(e)};R.useState=function(e){return ae.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return ae.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return ae.current.useTransition()};R.version="18.3.1";Wa.exports=R;var Be=Wa.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=Be,yu=Symbol.for("react.element"),wu=Symbol.for("react.fragment"),ku=Object.prototype.hasOwnProperty,Su=bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cu={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,r){var n,l={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)ku.call(t,n)&&!Cu.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:yu,type:e,key:s,ref:o,props:l,_owner:Su.current}}tl.Fragment=wu;tl.jsx=Ja;tl.jsxs=Ja;Ba.exports=tl;var I=Ba.exports,ei={exports:{}},xe={},ti={exports:{}},ri={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,N){var T=S.length;S.push(N);e:for(;0<T;){var W=T-1>>>1,K=S[W];if(0<l(K,N))S[W]=N,S[T]=K,T=W;else break e}}function r(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var N=S[0],T=S.pop();if(T!==N){S[0]=T;e:for(var W=0,K=S.length,Jr=K>>>1;W<Jr;){var gt=2*(W+1)-1,bl=S[gt],ht=gt+1,en=S[ht];if(0>l(bl,T))ht<K&&0>l(en,bl)?(S[W]=en,S[ht]=T,W=ht):(S[W]=bl,S[gt]=T,W=gt);else if(ht<K&&0>l(en,T))S[W]=en,S[ht]=T,W=ht;else break e}}return N}function l(S,N){var T=S.sortIndex-N.sortIndex;return T!==0?T:S.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var i=[],u=[],v=1,f=null,m=3,x=!1,b=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var N=r(u);N!==null;){if(N.callback===null)n(u);else if(N.startTime<=S)n(u),N.sortIndex=N.expirationTime,t(i,N);else break;N=r(u)}}function g(S){if(y=!1,p(S),!b)if(r(i)!==null)b=!0,hl(k);else{var N=r(u);N!==null&&xl(g,N.startTime-S)}}function k(S,N){b=!1,y&&(y=!1,c(A),A=-1),x=!0;var T=m;try{for(p(N),f=r(i);f!==null&&(!(f.expirationTime>N)||S&&!Ae());){var W=f.callback;if(typeof W=="function"){f.callback=null,m=f.priorityLevel;var K=W(f.expirationTime<=N);N=e.unstable_now(),typeof K=="function"?f.callback=K:f===r(i)&&n(i),p(N)}else n(i);f=r(i)}if(f!==null)var Jr=!0;else{var gt=r(u);gt!==null&&xl(g,gt.startTime-N),Jr=!1}return Jr}finally{f=null,m=T,x=!1}}var C=!1,E=null,A=-1,B=5,P=-1;function Ae(){return!(e.unstable_now()-P<B)}function ir(){if(E!==null){var S=e.unstable_now();P=S;var N=!0;try{N=E(!0,S)}finally{N?dr():(C=!1,E=null)}}else C=!1}var dr;if(typeof d=="function")dr=function(){d(ir)};else if(typeof MessageChannel<"u"){var zo=new MessageChannel,nu=zo.port2;zo.port1.onmessage=ir,dr=function(){nu.postMessage(null)}}else dr=function(){j(ir,0)};function hl(S){E=S,C||(C=!0,dr())}function xl(S,N){A=j(function(){S(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,hl(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(i)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var T=m;m=N;try{return S()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,N){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=m;m=S;try{return N()}finally{m=T}},e.unstable_scheduleCallback=function(S,N,T){var W=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?W+T:W):T=W,S){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=T+K,S={id:v++,callback:N,priorityLevel:S,startTime:T,expirationTime:K,sortIndex:-1},T>W?(S.sortIndex=T,t(u,S),r(i)===null&&S===r(u)&&(y?(c(A),A=-1):y=!0,xl(g,T-W))):(S.sortIndex=K,t(i,S),b||x||(b=!0,hl(k))),S},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(S){var N=m;return function(){var T=m;m=N;try{return S.apply(this,arguments)}finally{m=T}}}})(ri);ti.exports=ri;var Eu=ti.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=Be,he=Eu;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ni=new Set,Pr={};function Rt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Pr[e]=t,e=0;e<t.length;e++)ni.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Nu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jo={},Do={};function Iu(e){return Ql.call(Do,e)?!0:Ql.call(jo,e)?!1:Nu.test(e)?Do[e]=!0:(jo[e]=!0,!1)}function Tu(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ru(e,t,r,n){if(t===null||typeof t>"u"||Tu(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,r,n,l,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Bs);ee[t]=new ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Bs);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Bs);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,r,n){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ru(t,r,l,n)&&(r=null),n||l===null?Iu(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ke=Au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rn=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),li=Symbol.for("react.provider"),si=Symbol.for("react.context"),Qs=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),oi=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,wl;function xr(e){if(wl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var kl=!1;function Sl(e,t){if(!e||kl)return"";kl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),s=n.stack.split(`
`),o=l.length-1,a=s.length-1;1<=o&&0<=a&&l[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==s[a]){var i=`
`+l[o].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=o&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?xr(e):""}function Pu(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case _t:return"Portal";case ql:return"Profiler";case Hs:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case si:return(e.displayName||"Context")+".Consumer";case li:return(e._context.displayName||"Context")+".Provider";case Qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function Ou(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ai(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zu(e){var t=ai(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nn(e){e._valueTracker||(e._valueTracker=zu(e))}function ii(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ai(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var r=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $o(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ct(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function di(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Zl(e,t){di(e,t);var r=ct(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Jl(e,t,r){(t!=="number"||Pn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var br=Array.isArray;function Qt(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ct(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(h(92));if(br(r)){if(1<r.length)throw Error(h(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ct(r)}}function ui(e,t){var r=ct(t.value),n=ct(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ci(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ci(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ln,pi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ln=ln||document.createElement("div"),ln.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ln.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_u=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){_u.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function mi(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function fi(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=mi(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var Lu=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Lu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,qt=null,Yt=null;function Wo(e){if(e=Xr(e)){if(typeof ss!="function")throw Error(h(280));var t=e.stateNode;t&&(t=ol(t),ss(e.stateNode,e.type,t))}}function vi(e){qt?Yt?Yt.push(e):Yt=[e]:qt=e}function gi(){if(qt){var e=qt,t=Yt;if(Yt=qt=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function hi(e,t){return e(t)}function xi(){}var Cl=!1;function bi(e,t,r){if(Cl)return e(t,r);Cl=!0;try{return hi(e,t,r)}finally{Cl=!1,(qt!==null||Yt!==null)&&(xi(),gi())}}function zr(e,t){var r=e.stateNode;if(r===null)return null;var n=ol(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(h(231,t,typeof r));return r}var os=!1;if(He)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){os=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{os=!1}function Mu(e,t,r,n,l,s,o,a,i){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(v){this.onError(v)}}var Sr=!1,On=null,zn=!1,as=null,ju={onError:function(e){Sr=!0,On=e}};function Du(e,t,r,n,l,s,o,a,i){Sr=!1,On=null,Mu.apply(ju,arguments)}function Fu(e,t,r,n,l,s,o,a,i){if(Du.apply(this,arguments),Sr){if(Sr){var u=On;Sr=!1,On=null}else throw Error(h(198));zn||(zn=!0,as=u)}}function Pt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ho(e){if(Pt(e)!==e)throw Error(h(188))}function $u(e){var t=e.alternate;if(!t){if(t=Pt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return Ho(l),e;if(s===n)return Ho(l),t;s=s.sibling}throw Error(h(188))}if(r.return!==n.return)r=l,n=s;else{for(var o=!1,a=l.child;a;){if(a===r){o=!0,r=l,n=s;break}if(a===n){o=!0,n=l,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,n=l;break}if(a===n){o=!0,n=s,r=l;break}a=a.sibling}if(!o)throw Error(h(189))}}if(r.alternate!==n)throw Error(h(190))}if(r.tag!==3)throw Error(h(188));return r.stateNode.current===r?e:t}function wi(e){return e=$u(e),e!==null?ki(e):null}function ki(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ki(e);if(t!==null)return t;e=e.sibling}return null}var Si=he.unstable_scheduleCallback,Qo=he.unstable_cancelCallback,Uu=he.unstable_shouldYield,Vu=he.unstable_requestPaint,H=he.unstable_now,Bu=he.unstable_getCurrentPriorityLevel,Ks=he.unstable_ImmediatePriority,Ci=he.unstable_UserBlockingPriority,_n=he.unstable_NormalPriority,Wu=he.unstable_LowPriority,Ei=he.unstable_IdlePriority,rl=null,je=null;function Hu(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Yu,Qu=Math.log,qu=Math.LN2;function Yu(e){return e>>>=0,e===0?32:31-(Qu(e)/qu|0)|0}var sn=64,on=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ln(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var a=o&~l;a!==0?n=yr(a):(s&=o,s!==0&&(n=yr(s)))}else o=r&~l,o!==0?n=yr(o):s!==0&&(n=yr(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Pe(t),l=1<<r,n|=e[r],t&=~l;return n}function Ku(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gu(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Pe(s),a=1<<o,i=l[o];i===-1?(!(a&r)||a&n)&&(l[o]=Ku(a,t)):i<=t&&(e.expiredLanes|=a),s&=~a}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ai(){var e=sn;return sn<<=1,!(sn&4194240)&&(sn=64),e}function El(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=r}function Xu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Pe(r),s=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~s}}function Gs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Pe(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var z=0;function Ni(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ii,Xs,Ti,Ri,Pi,ds=!1,an=[],nt=null,lt=null,st=null,_r=new Map,Lr=new Map,Je=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function pr(e,t,r,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Xr(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ju(e,t,r,n,l){switch(t){case"focusin":return nt=pr(nt,e,t,r,n,l),!0;case"dragenter":return lt=pr(lt,e,t,r,n,l),!0;case"mouseover":return st=pr(st,e,t,r,n,l),!0;case"pointerover":var s=l.pointerId;return _r.set(s,pr(_r.get(s)||null,e,t,r,n,l)),!0;case"gotpointercapture":return s=l.pointerId,Lr.set(s,pr(Lr.get(s)||null,e,t,r,n,l)),!0}return!1}function Oi(e){var t=yt(e.target);if(t!==null){var r=Pt(t);if(r!==null){if(t=r.tag,t===13){if(t=yi(r),t!==null){e.blockedOn=t,Pi(e.priority,function(){Ti(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ls=n,r.target.dispatchEvent(n),ls=null}else return t=Xr(r),t!==null&&Xs(t),e.blockedOn=r,!1;t.shift()}return!0}function Yo(e,t,r){wn(e)&&r.delete(t)}function ec(){ds=!1,nt!==null&&wn(nt)&&(nt=null),lt!==null&&wn(lt)&&(lt=null),st!==null&&wn(st)&&(st=null),_r.forEach(Yo),Lr.forEach(Yo)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,ec)))}function Mr(e){function t(l){return mr(l,e)}if(0<an.length){mr(an[0],e);for(var r=1;r<an.length;r++){var n=an[r];n.blockedOn===e&&(n.blockedOn=null)}}for(nt!==null&&mr(nt,e),lt!==null&&mr(lt,e),st!==null&&mr(st,e),_r.forEach(t),Lr.forEach(t),r=0;r<Je.length;r++)n=Je[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Je.length&&(r=Je[0],r.blockedOn===null);)Oi(r),r.blockedOn===null&&Je.shift()}var Kt=Ke.ReactCurrentBatchConfig,Mn=!0;function tc(e,t,r,n){var l=z,s=Kt.transition;Kt.transition=null;try{z=1,Zs(e,t,r,n)}finally{z=l,Kt.transition=s}}function rc(e,t,r,n){var l=z,s=Kt.transition;Kt.transition=null;try{z=4,Zs(e,t,r,n)}finally{z=l,Kt.transition=s}}function Zs(e,t,r,n){if(Mn){var l=us(e,t,r,n);if(l===null)Ll(e,t,n,jn,r),qo(e,n);else if(Ju(l,e,t,r,n))n.stopPropagation();else if(qo(e,n),t&4&&-1<Zu.indexOf(e)){for(;l!==null;){var s=Xr(l);if(s!==null&&Ii(s),s=us(e,t,r,n),s===null&&Ll(e,t,n,jn,r),s===l)break;l=s}l!==null&&n.stopPropagation()}else Ll(e,t,n,null,r)}}var jn=null;function us(e,t,r,n){if(jn=null,e=Ys(n),e=yt(e),e!==null)if(t=Pt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=yi(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jn=e,null}function zi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case Ks:return 1;case Ci:return 4;case _n:case Wu:return 16;case Ei:return 536870912;default:return 16}default:return 16}}var tt=null,Js=null,kn=null;function _i(){if(kn)return kn;var e,t=Js,r=t.length,n,l="value"in tt?tt.value:tt.textContent,s=l.length;for(e=0;e<r&&t[e]===l[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===l[s-n];n++);return kn=l.slice(e,1<n?1-n:void 0)}function Sn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function Ko(){return!1}function be(e){function t(r,n,l,s,o){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dn:Ko,this.isPropagationStopped=Ko,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=be(or),Gr=U({},or,{view:0,detail:0}),nc=be(Gr),Al,Nl,fr,nl=U({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Al=e.screenX-fr.screenX,Nl=e.screenY-fr.screenY):Nl=Al=0,fr=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),Go=be(nl),lc=U({},nl,{dataTransfer:0}),sc=be(lc),oc=U({},Gr,{relatedTarget:0}),Il=be(oc),ac=U({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),ic=be(ac),dc=U({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=be(dc),cc=U({},or,{data:0}),Xo=be(cc),pc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fc[e])?!!t[e]:!1}function to(){return vc}var gc=U({},Gr,{key:function(e){if(e.key){var t=pc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hc=be(gc),xc=U({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=be(xc),bc=U({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),yc=be(bc),wc=U({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=be(wc),Sc=U({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cc=be(Sc),Ec=[9,13,27,32],ro=He&&"CompositionEvent"in window,Cr=null;He&&"documentMode"in document&&(Cr=document.documentMode);var Ac=He&&"TextEvent"in window&&!Cr,Li=He&&(!ro||Cr&&8<Cr&&11>=Cr),Jo=" ",ea=!1;function Mi(e,t){switch(e){case"keyup":return Ec.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ji(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Nc(e,t){switch(e){case"compositionend":return ji(t);case"keypress":return t.which!==32?null:(ea=!0,Jo);case"textInput":return e=t.data,e===Jo&&ea?null:e;default:return null}}function Ic(e,t){if(Mt)return e==="compositionend"||!ro&&Mi(e,t)?(e=_i(),kn=Js=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Li&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function Di(e,t,r,n){vi(n),t=Dn(t,"onChange"),0<t.length&&(r=new eo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Er=null,jr=null;function Rc(e){Ki(e,0)}function ll(e){var t=Ft(e);if(ii(t))return e}function Pc(e,t){if(e==="change")return t}var Fi=!1;if(He){var Tl;if(He){var Rl="oninput"in document;if(!Rl){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Rl=typeof ra.oninput=="function"}Tl=Rl}else Tl=!1;Fi=Tl&&(!document.documentMode||9<document.documentMode)}function na(){Er&&(Er.detachEvent("onpropertychange",$i),jr=Er=null)}function $i(e){if(e.propertyName==="value"&&ll(jr)){var t=[];Di(t,jr,e,Ys(e)),bi(Rc,t)}}function Oc(e,t,r){e==="focusin"?(na(),Er=t,jr=r,Er.attachEvent("onpropertychange",$i)):e==="focusout"&&na()}function zc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(jr)}function _c(e,t){if(e==="click")return ll(t)}function Lc(e,t){if(e==="input"||e==="change")return ll(t)}function Mc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Mc;function Dr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!Ql.call(t,l)||!ze(e[l],t[l]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sa(e,t){var r=la(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=la(r)}}function Ui(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ui(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vi(){for(var e=window,t=Pn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pn(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jc(e){var t=Vi(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ui(r.ownerDocument.documentElement,r)){if(n!==null&&no(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,s=Math.min(n.start,l);n=n.end===void 0?s:Math.min(n.end,l),!e.extend&&s>n&&(l=n,n=s,s=l),l=sa(r,s);var o=sa(r,n);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dc=He&&"documentMode"in document&&11>=document.documentMode,jt=null,cs=null,Ar=null,ps=!1;function oa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ps||jt==null||jt!==Pn(n)||(n=jt,"selectionStart"in n&&no(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ar&&Dr(Ar,n)||(Ar=n,n=Dn(cs,"onSelect"),0<n.length&&(t=new eo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jt)))}function un(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Dt={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionend:un("Transition","TransitionEnd")},Pl={},Bi={};He&&(Bi=document.createElement("div").style,"AnimationEvent"in window||(delete Dt.animationend.animation,delete Dt.animationiteration.animation,delete Dt.animationstart.animation),"TransitionEvent"in window||delete Dt.transitionend.transition);function sl(e){if(Pl[e])return Pl[e];if(!Dt[e])return e;var t=Dt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bi)return Pl[e]=t[r];return e}var Wi=sl("animationend"),Hi=sl("animationiteration"),Qi=sl("animationstart"),qi=sl("transitionend"),Yi=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Yi.set(e,t),Rt(t,[e])}for(var Ol=0;Ol<aa.length;Ol++){var zl=aa[Ol],Fc=zl.toLowerCase(),$c=zl[0].toUpperCase()+zl.slice(1);mt(Fc,"on"+$c)}mt(Wi,"onAnimationEnd");mt(Hi,"onAnimationIteration");mt(Qi,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(qi,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uc=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function ia(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Fu(n,t,void 0,e),e.currentTarget=null}function Ki(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var a=n[o],i=a.instance,u=a.currentTarget;if(a=a.listener,i!==s&&l.isPropagationStopped())break e;ia(l,a,u),s=i}else for(o=0;o<n.length;o++){if(a=n[o],i=a.instance,u=a.currentTarget,a=a.listener,i!==s&&l.isPropagationStopped())break e;ia(l,a,u),s=i}}}if(zn)throw e=as,zn=!1,as=null,e}function L(e,t){var r=t[hs];r===void 0&&(r=t[hs]=new Set);var n=e+"__bubble";r.has(n)||(Gi(t,e,2,!1),r.add(n))}function _l(e,t,r){var n=0;t&&(n|=4),Gi(r,e,n,t)}var cn="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[cn]){e[cn]=!0,ni.forEach(function(r){r!=="selectionchange"&&(Uc.has(r)||_l(r,!1,e),_l(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cn]||(t[cn]=!0,_l("selectionchange",!1,t))}}function Gi(e,t,r,n){switch(zi(t)){case 1:var l=tc;break;case 4:l=rc;break;default:l=Zs}r=l.bind(null,t,r,e),l=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Ll(e,t,r,n,l){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=n.return;o!==null;){var i=o.tag;if((i===3||i===4)&&(i=o.stateNode.containerInfo,i===l||i.nodeType===8&&i.parentNode===l))return;o=o.return}for(;a!==null;){if(o=yt(a),o===null)return;if(i=o.tag,i===5||i===6){n=s=o;continue e}a=a.parentNode}}n=n.return}bi(function(){var u=s,v=Ys(r),f=[];e:{var m=Yi.get(e);if(m!==void 0){var x=eo,b=e;switch(e){case"keypress":if(Sn(r)===0)break e;case"keydown":case"keyup":x=hc;break;case"focusin":b="focus",x=Il;break;case"focusout":b="blur",x=Il;break;case"beforeblur":case"afterblur":x=Il;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yc;break;case Wi:case Hi:case Qi:x=ic;break;case qi:x=kc;break;case"scroll":x=nc;break;case"wheel":x=Cc;break;case"copy":case"cut":case"paste":x=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Zo}var y=(t&4)!==0,j=!y&&e==="scroll",c=y?m!==null?m+"Capture":null:m;y=[];for(var d=u,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,c!==null&&(g=zr(d,c),g!=null&&y.push($r(d,g,p)))),j)break;d=d.return}0<y.length&&(m=new x(m,b,null,r,v),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&r!==ls&&(b=r.relatedTarget||r.fromElement)&&(yt(b)||b[Qe]))break e;if((x||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,x?(b=r.relatedTarget||r.toElement,x=u,b=b?yt(b):null,b!==null&&(j=Pt(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=u),x!==b)){if(y=Go,g="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Zo,g="onPointerLeave",c="onPointerEnter",d="pointer"),j=x==null?m:Ft(x),p=b==null?m:Ft(b),m=new y(g,d+"leave",x,r,v),m.target=j,m.relatedTarget=p,g=null,yt(v)===u&&(y=new y(c,d+"enter",b,r,v),y.target=p,y.relatedTarget=j,g=y),j=g,x&&b)t:{for(y=x,c=b,d=0,p=y;p;p=Ot(p))d++;for(p=0,g=c;g;g=Ot(g))p++;for(;0<d-p;)y=Ot(y),d--;for(;0<p-d;)c=Ot(c),p--;for(;d--;){if(y===c||c!==null&&y===c.alternate)break t;y=Ot(y),c=Ot(c)}y=null}else y=null;x!==null&&da(f,m,x,y,!1),b!==null&&j!==null&&da(f,j,b,y,!0)}}e:{if(m=u?Ft(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var k=Pc;else if(ta(m))if(Fi)k=Lc;else{k=zc;var C=Oc}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=_c);if(k&&(k=k(e,u))){Di(f,k,r,v);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Jl(m,"number",m.value)}switch(C=u?Ft(u):window,e){case"focusin":(ta(C)||C.contentEditable==="true")&&(jt=C,cs=u,Ar=null);break;case"focusout":Ar=cs=jt=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,oa(f,r,v);break;case"selectionchange":if(Dc)break;case"keydown":case"keyup":oa(f,r,v)}var E;if(ro)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Mt?Mi(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(Li&&r.locale!=="ko"&&(Mt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Mt&&(E=_i()):(tt=v,Js="value"in tt?tt.value:tt.textContent,Mt=!0)),C=Dn(u,A),0<C.length&&(A=new Xo(A,e,null,r,v),f.push({event:A,listeners:C}),E?A.data=E:(E=ji(r),E!==null&&(A.data=E)))),(E=Ac?Nc(e,r):Ic(e,r))&&(u=Dn(u,"onBeforeInput"),0<u.length&&(v=new Xo("onBeforeInput","beforeinput",null,r,v),f.push({event:v,listeners:u}),v.data=E))}Ki(f,t)})}function $r(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Dn(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=zr(e,r),s!=null&&n.unshift($r(e,s,l)),s=zr(e,t),s!=null&&n.push($r(e,s,l))),e=e.return}return n}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,t,r,n,l){for(var s=t._reactName,o=[];r!==null&&r!==n;){var a=r,i=a.alternate,u=a.stateNode;if(i!==null&&i===n)break;a.tag===5&&u!==null&&(a=u,l?(i=zr(r,s),i!=null&&o.unshift($r(r,i,a))):l||(i=zr(r,s),i!=null&&o.push($r(r,i,a)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Vc=/\r\n?/g,Bc=/\u0000|\uFFFD/g;function ua(e){return(typeof e=="string"?e:""+e).replace(Vc,`
`).replace(Bc,"")}function pn(e,t,r){if(t=ua(t),ua(e)!==t&&r)throw Error(h(425))}function Fn(){}var ms=null,fs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=typeof setTimeout=="function"?setTimeout:void 0,Wc=typeof clearTimeout=="function"?clearTimeout:void 0,ca=typeof Promise=="function"?Promise:void 0,Hc=typeof queueMicrotask=="function"?queueMicrotask:typeof ca<"u"?function(e){return ca.resolve(null).then(e).catch(Qc)}:gs;function Qc(e){setTimeout(function(){throw e})}function Ml(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),Mr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);Mr(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),Me="__reactFiber$"+ar,Ur="__reactProps$"+ar,Qe="__reactContainer$"+ar,hs="__reactEvents$"+ar,qc="__reactListeners$"+ar,Yc="__reactHandles$"+ar;function yt(e){var t=e[Me];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qe]||r[Me]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pa(e);e!==null;){if(r=e[Me])return r;e=pa(e)}return t}e=r,r=e.parentNode}return null}function Xr(e){return e=e[Me]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ol(e){return e[Ur]||null}var xs=[],$t=-1;function ft(e){return{current:e}}function M(e){0>$t||(e.current=xs[$t],xs[$t]=null,$t--)}function _(e,t){$t++,xs[$t]=e.current,e.current=t}var pt={},le=ft(pt),ce=ft(!1),Et=pt;function Jt(e,t){var r=e.type.contextTypes;if(!r)return pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function $n(){M(ce),M(le)}function ma(e,t,r){if(le.current!==pt)throw Error(h(168));_(le,t),_(ce,r)}function Xi(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(h(108,Ou(e)||"Unknown",l));return U({},r,n)}function Un(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Et=le.current,_(le,e),_(ce,ce.current),!0}function fa(e,t,r){var n=e.stateNode;if(!n)throw Error(h(169));r?(e=Xi(e,t,Et),n.__reactInternalMemoizedMergedChildContext=e,M(ce),M(le),_(le,e)):M(ce),_(ce,r)}var $e=null,al=!1,jl=!1;function Zi(e){$e===null?$e=[e]:$e.push(e)}function Kc(e){al=!0,Zi(e)}function vt(){if(!jl&&$e!==null){jl=!0;var e=0,t=z;try{var r=$e;for(z=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}$e=null,al=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Si(Ks,vt),l}finally{z=t,jl=!1}}return null}var Ut=[],Vt=0,Vn=null,Bn=0,ye=[],we=0,At=null,Ue=1,Ve="";function xt(e,t){Ut[Vt++]=Bn,Ut[Vt++]=Vn,Vn=e,Bn=t}function Ji(e,t,r){ye[we++]=Ue,ye[we++]=Ve,ye[we++]=At,At=e;var n=Ue;e=Ve;var l=32-Pe(n)-1;n&=~(1<<l),r+=1;var s=32-Pe(t)+l;if(30<s){var o=l-l%5;s=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Ue=1<<32-Pe(t)+l|r<<l|n,Ve=s+e}else Ue=1<<s|r<<l|n,Ve=e}function lo(e){e.return!==null&&(xt(e,1),Ji(e,1,0))}function so(e){for(;e===Vn;)Vn=Ut[--Vt],Ut[Vt]=null,Bn=Ut[--Vt],Ut[Vt]=null;for(;e===At;)At=ye[--we],ye[we]=null,Ve=ye[--we],ye[we]=null,Ue=ye[--we],ye[we]=null}var ge=null,ve=null,D=!1,Re=null;function ed(e,t){var r=ke(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function va(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ve=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=At!==null?{id:Ue,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ke(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ge=e,ve=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(D){var t=ve;if(t){var r=t;if(!va(e,t)){if(bs(e))throw Error(h(418));t=ot(r.nextSibling);var n=ge;t&&va(e,t)?ed(n,r):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(bs(e))throw Error(h(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mn(e){if(e!==ge)return!1;if(!D)return ga(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ve)){if(bs(e))throw td(),Error(h(418));for(;t;)ed(e,t),t=ot(t.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ve=ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ge?ot(e.stateNode.nextSibling):null;return!0}function td(){for(var e=ve;e;)e=ot(e.nextSibling)}function er(){ve=ge=null,D=!1}function oo(e){Re===null?Re=[e]:Re.push(e)}var Gc=Ke.ReactCurrentBatchConfig;function vr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(h(309));var n=r.stateNode}if(!n)throw Error(h(147,e));var l=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=l.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(h(284));if(!r._owner)throw Error(h(290,e))}return e}function fn(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ha(e){var t=e._init;return t(e._payload)}function rd(e){function t(c,d){if(e){var p=c.deletions;p===null?(c.deletions=[d],c.flags|=16):p.push(d)}}function r(c,d){if(!e)return null;for(;d!==null;)t(c,d),d=d.sibling;return null}function n(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(c,d){return c=ut(c,d),c.index=0,c.sibling=null,c}function s(c,d,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<d?(c.flags|=2,d):p):(c.flags|=2,d)):(c.flags|=1048576,d)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,d,p,g){return d===null||d.tag!==6?(d=Wl(p,c.mode,g),d.return=c,d):(d=l(d,p),d.return=c,d)}function i(c,d,p,g){var k=p.type;return k===Lt?v(c,d,p.props.children,g,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xe&&ha(k)===d.type)?(g=l(d,p.props),g.ref=vr(c,d,p),g.return=c,g):(g=Rn(p.type,p.key,p.props,null,c.mode,g),g.ref=vr(c,d,p),g.return=c,g)}function u(c,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Hl(p,c.mode,g),d.return=c,d):(d=l(d,p.children||[]),d.return=c,d)}function v(c,d,p,g,k){return d===null||d.tag!==7?(d=Ct(p,c.mode,g,k),d.return=c,d):(d=l(d,p),d.return=c,d)}function f(c,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wl(""+d,c.mode,p),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rn:return p=Rn(d.type,d.key,d.props,null,c.mode,p),p.ref=vr(c,null,d),p.return=c,p;case _t:return d=Hl(d,c.mode,p),d.return=c,d;case Xe:var g=d._init;return f(c,g(d._payload),p)}if(br(d)||ur(d))return d=Ct(d,c.mode,p,null),d.return=c,d;fn(c,d)}return null}function m(c,d,p,g){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(c,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rn:return p.key===k?i(c,d,p,g):null;case _t:return p.key===k?u(c,d,p,g):null;case Xe:return k=p._init,m(c,d,k(p._payload),g)}if(br(p)||ur(p))return k!==null?null:v(c,d,p,g,null);fn(c,p)}return null}function x(c,d,p,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(p)||null,a(d,c,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rn:return c=c.get(g.key===null?p:g.key)||null,i(d,c,g,k);case _t:return c=c.get(g.key===null?p:g.key)||null,u(d,c,g,k);case Xe:var C=g._init;return x(c,d,p,C(g._payload),k)}if(br(g)||ur(g))return c=c.get(p)||null,v(d,c,g,k,null);fn(d,g)}return null}function b(c,d,p,g){for(var k=null,C=null,E=d,A=d=0,B=null;E!==null&&A<p.length;A++){E.index>A?(B=E,E=null):B=E.sibling;var P=m(c,E,p[A],g);if(P===null){E===null&&(E=B);break}e&&E&&P.alternate===null&&t(c,E),d=s(P,d,A),C===null?k=P:C.sibling=P,C=P,E=B}if(A===p.length)return r(c,E),D&&xt(c,A),k;if(E===null){for(;A<p.length;A++)E=f(c,p[A],g),E!==null&&(d=s(E,d,A),C===null?k=E:C.sibling=E,C=E);return D&&xt(c,A),k}for(E=n(c,E);A<p.length;A++)B=x(E,c,A,p[A],g),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?A:B.key),d=s(B,d,A),C===null?k=B:C.sibling=B,C=B);return e&&E.forEach(function(Ae){return t(c,Ae)}),D&&xt(c,A),k}function y(c,d,p,g){var k=ur(p);if(typeof k!="function")throw Error(h(150));if(p=k.call(p),p==null)throw Error(h(151));for(var C=k=null,E=d,A=d=0,B=null,P=p.next();E!==null&&!P.done;A++,P=p.next()){E.index>A?(B=E,E=null):B=E.sibling;var Ae=m(c,E,P.value,g);if(Ae===null){E===null&&(E=B);break}e&&E&&Ae.alternate===null&&t(c,E),d=s(Ae,d,A),C===null?k=Ae:C.sibling=Ae,C=Ae,E=B}if(P.done)return r(c,E),D&&xt(c,A),k;if(E===null){for(;!P.done;A++,P=p.next())P=f(c,P.value,g),P!==null&&(d=s(P,d,A),C===null?k=P:C.sibling=P,C=P);return D&&xt(c,A),k}for(E=n(c,E);!P.done;A++,P=p.next())P=x(E,c,A,P.value,g),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?A:P.key),d=s(P,d,A),C===null?k=P:C.sibling=P,C=P);return e&&E.forEach(function(ir){return t(c,ir)}),D&&xt(c,A),k}function j(c,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Lt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rn:e:{for(var k=p.key,C=d;C!==null;){if(C.key===k){if(k=p.type,k===Lt){if(C.tag===7){r(c,C.sibling),d=l(C,p.props.children),d.return=c,c=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xe&&ha(k)===C.type){r(c,C.sibling),d=l(C,p.props),d.ref=vr(c,C,p),d.return=c,c=d;break e}r(c,C);break}else t(c,C);C=C.sibling}p.type===Lt?(d=Ct(p.props.children,c.mode,g,p.key),d.return=c,c=d):(g=Rn(p.type,p.key,p.props,null,c.mode,g),g.ref=vr(c,d,p),g.return=c,c=g)}return o(c);case _t:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(c,d.sibling),d=l(d,p.children||[]),d.return=c,c=d;break e}else{r(c,d);break}else t(c,d);d=d.sibling}d=Hl(p,c.mode,g),d.return=c,c=d}return o(c);case Xe:return C=p._init,j(c,d,C(p._payload),g)}if(br(p))return b(c,d,p,g);if(ur(p))return y(c,d,p,g);fn(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(c,d.sibling),d=l(d,p),d.return=c,c=d):(r(c,d),d=Wl(p,c.mode,g),d.return=c,c=d),o(c)):r(c,d)}return j}var tr=rd(!0),nd=rd(!1),Wn=ft(null),Hn=null,Bt=null,ao=null;function io(){ao=Bt=Hn=null}function uo(e){var t=Wn.current;M(Wn),e._currentValue=t}function ws(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Gt(e,t){Hn=e,ao=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Hn===null)throw Error(h(308));Bt=e,Hn.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var wt=null;function co(e){wt===null?wt=[e]:wt.push(e)}function ld(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,co(t)):(r.next=l.next,l.next=r),t.interleaved=r,qe(e,n)}function qe(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ze=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,qe(e,r)}return l=n.interleaved,l===null?(t.next=t,co(n)):(t.next=l.next,l.next=t),n.interleaved=t,qe(e,r)}function Cn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gs(e,r)}}function xa(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?l=s=t:s=s.next=t}else l=s=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qn(e,t,r,n){var l=e.updateQueue;Ze=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var i=a,u=i.next;i.next=null,o===null?s=u:o.next=u,o=i;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==o&&(a===null?v.firstBaseUpdate=u:a.next=u,v.lastBaseUpdate=i))}if(s!==null){var f=l.baseState;o=0,v=u=i=null,a=s;do{var m=a.lane,x=a.eventTime;if((n&m)===m){v!==null&&(v=v.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,y=a;switch(m=t,x=r,y.tag){case 1:if(b=y.payload,typeof b=="function"){f=b.call(x,f,m);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,m=typeof b=="function"?b.call(x,f,m):b,m==null)break e;f=U({},f,m);break e;case 2:Ze=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(u=v=x,i=f):v=v.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(i=f),l.baseState=i,l.firstBaseUpdate=u,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=f}}function ba(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(h(191,l));l.call(n)}}}var Zr={},De=ft(Zr),Vr=ft(Zr),Br=ft(Zr);function kt(e){if(e===Zr)throw Error(h(174));return e}function mo(e,t){switch(_(Br,t),_(Vr,e),_(De,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}M(De),_(De,t)}function rr(){M(De),M(Vr),M(Br)}function od(e){kt(Br.current);var t=kt(De.current),r=ts(t,e.type);t!==r&&(_(Vr,e),_(De,r))}function fo(e){Vr.current===e&&(M(De),M(Vr))}var F=ft(0);function qn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function vo(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var En=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,Nt=0,$=null,q=null,G=null,Yn=!1,Nr=!1,Wr=0,Xc=0;function te(){throw Error(h(321))}function go(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ze(e[r],t[r]))return!1;return!0}function ho(e,t,r,n,l,s){if(Nt=s,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,En.current=e===null||e.memoizedState===null?tp:rp,e=r(n,l),Nr){s=0;do{if(Nr=!1,Wr=0,25<=s)throw Error(h(301));s+=1,G=q=null,t.updateQueue=null,En.current=np,e=r(n,l)}while(Nr)}if(En.current=Kn,t=q!==null&&q.next!==null,Nt=0,G=q=$=null,Yn=!1,t)throw Error(h(300));return e}function xo(){var e=Wr!==0;return Wr=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?$.memoizedState=G=e:G=G.next=e,G}function Ee(){if(q===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=G===null?$.memoizedState:G.next;if(t!==null)G=t,q=e;else{if(e===null)throw Error(h(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},G===null?$.memoizedState=G=e:G=G.next=e}return G}function Hr(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ee(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=q,l=n.baseQueue,s=r.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}n.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,n=n.baseState;var a=o=null,i=null,u=s;do{var v=u.lane;if((Nt&v)===v)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:v,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(a=i=f,o=n):i=i.next=f,$.lanes|=v,It|=v}u=u.next}while(u!==null&&u!==s);i===null?o=n:i.next=a,ze(n,t.memoizedState)||(ue=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=i,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do s=l.lane,$.lanes|=s,It|=s,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ul(e){var t=Ee(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,s=t.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);ze(s,t.memoizedState)||(ue=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function ad(){}function id(e,t){var r=$,n=Ee(),l=t(),s=!ze(n.memoizedState,l);if(s&&(n.memoizedState=l,ue=!0),n=n.queue,bo(cd.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||G!==null&&G.memoizedState.tag&1){if(r.flags|=2048,Qr(9,ud.bind(null,r,n,l,t),void 0,null),X===null)throw Error(h(349));Nt&30||dd(r,t,l)}return l}function dd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ud(e,t,r,n){t.value=r,t.getSnapshot=n,pd(t)&&md(e)}function cd(e,t,r){return r(function(){pd(t)&&md(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function md(e){var t=qe(e,1);t!==null&&Oe(t,e,1,-1)}function ya(e){var t=Le();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=ep.bind(null,$,e),[t.memoizedState,e]}function Qr(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function fd(){return Ee().memoizedState}function An(e,t,r,n){var l=Le();$.flags|=e,l.memoizedState=Qr(1|t,r,void 0,n===void 0?null:n)}function il(e,t,r,n){var l=Ee();n=n===void 0?null:n;var s=void 0;if(q!==null){var o=q.memoizedState;if(s=o.destroy,n!==null&&go(n,o.deps)){l.memoizedState=Qr(t,r,s,n);return}}$.flags|=e,l.memoizedState=Qr(1|t,r,s,n)}function wa(e,t){return An(8390656,8,e,t)}function bo(e,t){return il(2048,8,e,t)}function vd(e,t){return il(4,2,e,t)}function gd(e,t){return il(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,r){return r=r!=null?r.concat([e]):null,il(4,4,hd.bind(null,t,e),r)}function yo(){}function bd(e,t){var r=Ee();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&go(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function yd(e,t){var r=Ee();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&go(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function wd(e,t,r){return Nt&21?(ze(r,t)||(r=Ai(),$.lanes|=r,It|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=r)}function Zc(e,t){var r=z;z=r!==0&&4>r?r:4,e(!0);var n=Fl.transition;Fl.transition={};try{e(!1),t()}finally{z=r,Fl.transition=n}}function kd(){return Ee().memoizedState}function Jc(e,t,r){var n=dt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sd(e))Cd(t,r);else if(r=ld(e,t,r,n),r!==null){var l=oe();Oe(r,e,n,l),Ed(r,t,n)}}function ep(e,t,r){var n=dt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))Cd(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,r);if(l.hasEagerState=!0,l.eagerState=a,ze(a,o)){var i=t.interleaved;i===null?(l.next=l,co(t)):(l.next=i.next,i.next=l),t.interleaved=l;return}}catch{}finally{}r=ld(e,t,l,n),r!==null&&(l=oe(),Oe(r,e,n,l),Ed(r,t,n))}}function Sd(e){var t=e.alternate;return e===$||t!==null&&t===$}function Cd(e,t){Nr=Yn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ed(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Gs(e,r)}}var Kn={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},tp={readContext:Ce,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:wa,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,An(4194308,4,hd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return An(4194308,4,e,t)},useInsertionEffect:function(e,t){return An(4,2,e,t)},useMemo:function(e,t){var r=Le();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Le();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Jc.bind(null,$,e),[n.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:ya,useDebugValue:yo,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=ya(!1),t=e[0];return e=Zc.bind(null,e[1]),Le().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=$,l=Le();if(D){if(r===void 0)throw Error(h(407));r=r()}else{if(r=t(),X===null)throw Error(h(349));Nt&30||dd(n,t,r)}l.memoizedState=r;var s={value:r,getSnapshot:t};return l.queue=s,wa(cd.bind(null,n,s,e),[e]),n.flags|=2048,Qr(9,ud.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Le(),t=X.identifierPrefix;if(D){var r=Ve,n=Ue;r=(n&~(1<<32-Pe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Wr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xc++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:Ce,useCallback:bd,useContext:Ce,useEffect:bo,useImperativeHandle:xd,useInsertionEffect:vd,useLayoutEffect:gd,useMemo:yd,useReducer:$l,useRef:fd,useState:function(){return $l(Hr)},useDebugValue:yo,useDeferredValue:function(e){var t=Ee();return wd(t,q.memoizedState,e)},useTransition:function(){var e=$l(Hr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:id,useId:kd,unstable_isNewReconciler:!1},np={readContext:Ce,useCallback:bd,useContext:Ce,useEffect:bo,useImperativeHandle:xd,useInsertionEffect:vd,useLayoutEffect:gd,useMemo:yd,useReducer:Ul,useRef:fd,useState:function(){return Ul(Hr)},useDebugValue:yo,useDeferredValue:function(e){var t=Ee();return q===null?t.memoizedState=e:wd(t,q.memoizedState,e)},useTransition:function(){var e=Ul(Hr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:id,useId:kd,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ks(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:U({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var dl={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=oe(),l=dt(e),s=We(n,l);s.payload=t,r!=null&&(s.callback=r),t=at(e,s,l),t!==null&&(Oe(t,e,l,n),Cn(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=oe(),l=dt(e),s=We(n,l);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=at(e,s,l),t!==null&&(Oe(t,e,l,n),Cn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=oe(),n=dt(e),l=We(r,n);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,n),t!==null&&(Oe(t,e,n,r),Cn(t,e,n))}};function ka(e,t,r,n,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(r,n)||!Dr(l,s):!0}function Ad(e,t,r){var n=!1,l=pt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ce(s):(l=pe(t)?Et:le.current,n=t.contextTypes,s=(n=n!=null)?Jt(e,l):pt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sa(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Ss(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},po(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Ce(s):(s=pe(t)?Et:le.current,l.context=Jt(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ks(e,t,s,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Qn(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var r="",n=t;do r+=Pu(n),n=n.return;while(n);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,t,r){r=We(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xn||(Xn=!0,_s=n),Cs(e,t)},r}function Id(e,t,r){r=We(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){Cs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Cs(e,t),typeof n!="function"&&(it===null?it=new Set([this]):it.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Ca(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new lp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=xp.bind(null,e,t,r),t.then(e,e))}function Ea(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Aa(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=We(-1,1),t.tag=2,at(r,t,1))),r.lanes|=1),e)}var sp=Ke.ReactCurrentOwner,ue=!1;function se(e,t,r,n){t.child=e===null?nd(t,null,r,n):tr(t,e.child,r,n)}function Na(e,t,r,n,l){r=r.render;var s=t.ref;return Gt(t,l),n=ho(e,t,r,n,s,l),r=xo(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(D&&r&&lo(t),t.flags|=1,se(e,t,n,l),t.child)}function Ia(e,t,r,n,l){if(e===null){var s=r.type;return typeof s=="function"&&!Io(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Td(e,t,s,n,l)):(e=Rn(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Dr,r(o,n)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=ut(s,n),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,r,n,l){if(e!==null){var s=e.memoizedProps;if(Dr(s,n)&&e.ref===t.ref)if(ue=!1,t.pendingProps=n=s,(e.lanes&l)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Es(e,t,r,n,l)}function Rd(e,t,r){var n=t.pendingProps,l=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Ht,fe),fe|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Ht,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,_(Ht,fe),fe|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,_(Ht,fe),fe|=n;return se(e,t,l,r),t.child}function Pd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,r,n,l){var s=pe(r)?Et:le.current;return s=Jt(t,s),Gt(t,l),r=ho(e,t,r,n,s,l),n=xo(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(D&&n&&lo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ta(e,t,r,n,l){if(pe(r)){var s=!0;Un(t)}else s=!1;if(Gt(t,l),t.stateNode===null)Nn(e,t),Ad(t,r,n),Ss(t,r,n,l),n=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var i=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ce(u):(u=pe(r)?Et:le.current,u=Jt(t,u));var v=r.getDerivedStateFromProps,f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||i!==u)&&Sa(t,o,n,u),Ze=!1;var m=t.memoizedState;o.state=m,Qn(t,n,o,l),i=t.memoizedState,a!==n||m!==i||ce.current||Ze?(typeof v=="function"&&(ks(t,r,v,n),i=t.memoizedState),(a=Ze||ka(t,r,a,n,m,i,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=i),o.props=n,o.state=i,o.context=u,n=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,sd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ie(t.type,a),o.props=u,f=t.pendingProps,m=o.context,i=r.contextType,typeof i=="object"&&i!==null?i=Ce(i):(i=pe(r)?Et:le.current,i=Jt(t,i));var x=r.getDerivedStateFromProps;(v=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==i)&&Sa(t,o,n,i),Ze=!1,m=t.memoizedState,o.state=m,Qn(t,n,o,l);var b=t.memoizedState;a!==f||m!==b||ce.current||Ze?(typeof x=="function"&&(ks(t,r,x,n),b=t.memoizedState),(u=Ze||ka(t,r,u,n,m,b,i)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,b,i),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,b,i)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),o.props=n,o.state=b,o.context=i,n=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return As(e,t,r,n,s,l)}function As(e,t,r,n,l,s){Pd(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return l&&fa(t,r,!1),Ye(e,t,s);n=t.stateNode,sp.current=t;var a=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=tr(t,e.child,null,s),t.child=tr(t,null,a,s)):se(e,t,a,s),t.memoizedState=n.state,l&&fa(t,r,!0),t.child}function Od(e){var t=e.stateNode;t.pendingContext?ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ma(e,t.context,!1),mo(e,t.containerInfo)}function Ra(e,t,r,n,l){return er(),oo(l),t.flags|=256,se(e,t,r,n),t.child}var Ns={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,t,r){var n=t.pendingProps,l=F.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),_(F,l&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pl(o,n,0,null),e=Ct(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Is(r),t.memoizedState=Ns,e):wo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return op(e,t,o,n,a,l,r);if(s){s=n.fallback,o=t.mode,l=e.child,a=l.sibling;var i={mode:"hidden",children:n.children};return!(o&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=i,t.deletions=null):(n=ut(l,i),n.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=ut(a,s):(s=Ct(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?Is(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Ns,n}return s=e.child,e=s.sibling,n=ut(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function wo(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vn(e,t,r,n){return n!==null&&oo(n),tr(t,e.child,null,r),e=wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,r,n,l,s,o){if(r)return t.flags&256?(t.flags&=-257,n=Vl(Error(h(422))),vn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,l=t.mode,n=pl({mode:"visible",children:n.children},l,0,null),s=Ct(s,l,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&tr(t,e.child,null,o),t.child.memoizedState=Is(o),t.memoizedState=Ns,s);if(!(t.mode&1))return vn(e,t,o,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var a=n.dgst;return n=a,s=Error(h(419)),n=Vl(s,n,void 0),vn(e,t,o,n)}if(a=(o&e.childLanes)!==0,ue||a){if(n=X,n!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,qe(e,l),Oe(n,e,l,-1))}return No(),n=Vl(Error(h(421))),vn(e,t,o,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=bp.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,ve=ot(l.nextSibling),ge=t,D=!0,Re=null,e!==null&&(ye[we++]=Ue,ye[we++]=Ve,ye[we++]=At,Ue=e.id,Ve=e.overflow,At=t),t=wo(t,n.children),t.flags|=4096,t)}function Pa(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ws(e.return,t,r)}function Bl(e,t,r,n,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=l)}function _d(e,t,r){var n=t.pendingProps,l=n.revealOrder,s=n.tail;if(se(e,t,n.children,r),n=F.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pa(e,r,t);else if(e.tag===19)Pa(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(_(F,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&qn(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Bl(t,!1,l,r,s);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&qn(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Bl(t,!0,r,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,r=ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ap(e,t,r){switch(t.tag){case 3:Od(t),er();break;case 5:od(t);break;case 1:pe(t.type)&&Un(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;_(Wn,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(_(F,F.current&1),t.flags|=128,null):r&t.child.childLanes?zd(e,t,r):(_(F,F.current&1),e=Ye(e,t,r),e!==null?e.sibling:null);_(F,F.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return _d(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(F,F.current),n)break;return null;case 22:case 23:return t.lanes=0,Rd(e,t,r)}return Ye(e,t,r)}var Ld,Ts,Md,jd;Ld=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ts=function(){};Md=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,kt(De.current);var s=null;switch(r){case"input":l=Xl(e,l),n=Xl(e,n),s=[];break;case"select":l=U({},l,{value:void 0}),n=U({},n,{value:void 0}),s=[];break;case"textarea":l=es(e,l),n=es(e,n),s=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Fn)}rs(r,n);var o;r=null;for(u in l)if(!n.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var i=n[u];if(a=l!=null?l[u]:void 0,n.hasOwnProperty(u)&&i!==a&&(i!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||i&&i.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in i)i.hasOwnProperty(o)&&a[o]!==i[o]&&(r||(r={}),r[o]=i[o])}else r||(s||(s=[]),s.push(u,r)),r=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,a=a?a.__html:void 0,i!=null&&a!==i&&(s=s||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(s=s||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&L("scroll",e),s||a===i||(s=[])):(s=s||[]).push(u,i))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};jd=function(e,t,r,n){r!==n&&(t.flags|=4)};function gr(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ip(e,t,r){var n=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&$n(),re(t),null;case 3:return n=t.stateNode,rr(),M(ce),M(le),vo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(js(Re),Re=null))),Ts(e,t),re(t),null;case 5:fo(t);var l=kt(Br.current);if(r=t.type,e!==null&&t.stateNode!=null)Md(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(h(166));return re(t),null}if(e=kt(De.current),mn(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Me]=t,n[Ur]=s,e=(t.mode&1)!==0,r){case"dialog":L("cancel",n),L("close",n);break;case"iframe":case"object":case"embed":L("load",n);break;case"video":case"audio":for(l=0;l<wr.length;l++)L(wr[l],n);break;case"source":L("error",n);break;case"img":case"image":case"link":L("error",n),L("load",n);break;case"details":L("toggle",n);break;case"input":$o(n,s),L("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},L("invalid",n);break;case"textarea":Vo(n,s),L("invalid",n)}rs(r,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?n.textContent!==a&&(s.suppressHydrationWarning!==!0&&pn(n.textContent,a,e),l=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pn(n.textContent,a,e),l=["children",""+a]):Pr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&L("scroll",n)}switch(r){case"input":nn(n),Uo(n,s,!0);break;case"textarea":nn(n),Bo(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Fn)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ci(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Me]=t,e[Ur]=n,Ld(e,t,!1,!1),t.stateNode=e;e:{switch(o=ns(r,n),r){case"dialog":L("cancel",e),L("close",e),l=n;break;case"iframe":case"object":case"embed":L("load",e),l=n;break;case"video":case"audio":for(l=0;l<wr.length;l++)L(wr[l],e);l=n;break;case"source":L("error",e),l=n;break;case"img":case"image":case"link":L("error",e),L("load",e),l=n;break;case"details":L("toggle",e),l=n;break;case"input":$o(e,n),l=Xl(e,n),L("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=U({},n,{value:void 0}),L("invalid",e);break;case"textarea":Vo(e,n),l=es(e,n),L("invalid",e);break;default:l=n}rs(r,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var i=a[s];s==="style"?fi(e,i):s==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&pi(e,i)):s==="children"?typeof i=="string"?(r!=="textarea"||i!=="")&&Or(e,i):typeof i=="number"&&Or(e,""+i):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pr.hasOwnProperty(s)?i!=null&&s==="onScroll"&&L("scroll",e):i!=null&&Ws(e,s,i,o))}switch(r){case"input":nn(e),Uo(e,n,!1);break;case"textarea":nn(e),Bo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ct(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Qt(e,!!n.multiple,s,!1):n.defaultValue!=null&&Qt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(r=kt(Br.current),kt(De.current),mn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Me]=t,(s=n.nodeValue!==r)&&(e=ge,e!==null))switch(e.tag){case 3:pn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pn(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Me]=t,t.stateNode=n}return re(t),null;case 13:if(M(F),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&t.mode&1&&!(t.flags&128))td(),er(),t.flags|=98560,s=!1;else if(s=mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(h(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(h(317));s[Me]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),s=!1}else Re!==null&&(js(Re),Re=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):No())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return rr(),Ts(e,t),e===null&&Fr(t.stateNode.containerInfo),re(t),null;case 10:return uo(t.type._context),re(t),null;case 17:return pe(t.type)&&$n(),re(t),null;case 19:if(M(F),s=t.memoizedState,s===null)return re(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)gr(s,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qn(e),o!==null){for(t.flags|=128,gr(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _(F,F.current&1|2),t.child}e=e.sibling}s.tail!==null&&H()>lr&&(t.flags|=128,n=!0,gr(s,!1),t.lanes=4194304)}else{if(!n)if(e=qn(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!D)return re(t),null}else 2*H()-s.renderingStartTime>lr&&r!==1073741824&&(t.flags|=128,n=!0,gr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=H(),t.sibling=null,r=F.current,_(F,n?r&1|2:r&1),t):(re(t),null);case 22:case 23:return Ao(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?fe&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function dp(e,t){switch(so(t),t.tag){case 1:return pe(t.type)&&$n(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),M(ce),M(le),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(M(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(F),null;case 4:return rr(),null;case 10:return uo(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var gn=!1,ne=!1,up=typeof WeakSet=="function"?WeakSet:Set,w=null;function Wt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){V(e,t,n)}else r.current=null}function Rs(e,t,r){try{r()}catch(n){V(e,t,n)}}var Oa=!1;function cp(e,t){if(ms=Mn,e=Vi(),no(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,i=-1,u=0,v=0,f=e,m=null;t:for(;;){for(var x;f!==r||l!==0&&f.nodeType!==3||(a=o+l),f!==s||n!==0&&f.nodeType!==3||(i=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===r&&++u===l&&(a=o),m===s&&++v===n&&(i=o),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}r=a===-1||i===-1?null:{start:a,end:i}}else r=null}r=r||{start:0,end:0}}else r=null;for(fs={focusedElem:e,selectionRange:r},Mn=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,j=b.memoizedState,c=t.stateNode,d=c.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ie(t.type,y),j);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return b=Oa,Oa=!1,b}function Ir(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&Rs(t,r,s)}l=l.next}while(l!==n)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ps(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Dd(e){var t=e.alternate;t!==null&&(e.alternate=null,Dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Ur],delete t[hs],delete t[qc],delete t[Yc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Fn));else if(n!==4&&(e=e.child,e!==null))for(Os(e,t,r),e=e.sibling;e!==null;)Os(e,t,r),e=e.sibling}function zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(zs(e,t,r),e=e.sibling;e!==null;)zs(e,t,r),e=e.sibling}var Z=null,Te=!1;function Ge(e,t,r){for(r=r.child;r!==null;)$d(e,t,r),r=r.sibling}function $d(e,t,r){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(rl,r)}catch{}switch(r.tag){case 5:ne||Wt(r,t);case 6:var n=Z,l=Te;Z=null,Ge(e,t,r),Z=n,Te=l,Z!==null&&(Te?(e=Z,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Z.removeChild(r.stateNode));break;case 18:Z!==null&&(Te?(e=Z,r=r.stateNode,e.nodeType===8?Ml(e.parentNode,r):e.nodeType===1&&Ml(e,r),Mr(e)):Ml(Z,r.stateNode));break;case 4:n=Z,l=Te,Z=r.stateNode.containerInfo,Te=!0,Ge(e,t,r),Z=n,Te=l;break;case 0:case 11:case 14:case 15:if(!ne&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rs(r,t,o),l=l.next}while(l!==n)}Ge(e,t,r);break;case 1:if(!ne&&(Wt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){V(r,t,a)}Ge(e,t,r);break;case 21:Ge(e,t,r);break;case 22:r.mode&1?(ne=(n=ne)||r.memoizedState!==null,Ge(e,t,r),ne=n):Ge(e,t,r);break;default:Ge(e,t,r)}}function _a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new up),t.forEach(function(n){var l=yp.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Ne(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Z=a.stateNode,Te=!1;break e;case 3:Z=a.stateNode.containerInfo,Te=!0;break e;case 4:Z=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(Z===null)throw Error(h(160));$d(s,o,l),Z=null,Te=!1;var i=l.alternate;i!==null&&(i.return=null),l.return=null}catch(u){V(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),_e(e),n&4){try{Ir(3,e,e.return),ul(3,e)}catch(y){V(e,e.return,y)}try{Ir(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Ne(t,e),_e(e),n&512&&r!==null&&Wt(r,r.return);break;case 5:if(Ne(t,e),_e(e),n&512&&r!==null&&Wt(r,r.return),e.flags&32){var l=e.stateNode;try{Or(l,"")}catch(y){V(e,e.return,y)}}if(n&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,a=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&di(l,s),ns(a,o);var u=ns(a,s);for(o=0;o<i.length;o+=2){var v=i[o],f=i[o+1];v==="style"?fi(l,f):v==="dangerouslySetInnerHTML"?pi(l,f):v==="children"?Or(l,f):Ws(l,v,f,u)}switch(a){case"input":Zl(l,s);break;case"textarea":ui(l,s);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Qt(l,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?Qt(l,!!s.multiple,s.defaultValue,!0):Qt(l,!!s.multiple,s.multiple?[]:"",!1))}l[Ur]=s}catch(y){V(e,e.return,y)}}break;case 6:if(Ne(t,e),_e(e),n&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(y){V(e,e.return,y)}}break;case 3:if(Ne(t,e),_e(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Ne(t,e),_e(e);break;case 13:Ne(t,e),_e(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Co=H())),n&4&&_a(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(ne=(u=ne)||v,Ne(t,e),ne=u):Ne(t,e),_e(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!v&&e.mode&1)for(w=e,v=e.child;v!==null;){for(f=w=v;w!==null;){switch(m=w,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ir(4,m,m.return);break;case 1:Wt(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){V(n,r,y)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Ma(f);continue}}x!==null?(x.return=m,w=x):Ma(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{l=f.stateNode,u?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,i=f.memoizedProps.style,o=i!=null&&i.hasOwnProperty("display")?i.display:null,a.style.display=mi("display",o))}catch(y){V(e,e.return,y)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){V(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ne(t,e),_e(e),n&4&&_a(e);break;case 21:break;default:Ne(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fd(r)){var n=r;break e}r=r.return}throw Error(h(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(Or(l,""),n.flags&=-33);var s=za(e);zs(e,s,l);break;case 3:case 4:var o=n.stateNode.containerInfo,a=za(e);Os(e,a,o);break;default:throw Error(h(161))}}catch(i){V(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,r){w=e,Vd(e)}function Vd(e,t,r){for(var n=(e.mode&1)!==0;w!==null;){var l=w,s=l.child;if(l.tag===22&&n){var o=l.memoizedState!==null||gn;if(!o){var a=l.alternate,i=a!==null&&a.memoizedState!==null||ne;a=gn;var u=ne;if(gn=o,(ne=i)&&!u)for(w=l;w!==null;)o=w,i=o.child,o.tag===22&&o.memoizedState!==null?ja(l):i!==null?(i.return=o,w=i):ja(l);for(;s!==null;)w=s,Vd(s),s=s.sibling;w=l,gn=a,ne=u}La(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,w=s):La(e)}}function La(e){for(;w!==null;){var t=w;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||ul(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ne)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ie(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ba(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ba(t,o,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break;case"img":i.src&&(r.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var v=u.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&Mr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ne||t.flags&512&&Ps(t)}catch(m){V(t,t.return,m)}}if(t===e){w=null;break}if(r=t.sibling,r!==null){r.return=t.return,w=r;break}w=t.return}}function Ma(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var r=t.sibling;if(r!==null){r.return=t.return,w=r;break}w=t.return}}function ja(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ul(4,t)}catch(i){V(t,r,i)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(i){V(t,l,i)}}var s=t.return;try{Ps(t)}catch(i){V(t,s,i)}break;case 5:var o=t.return;try{Ps(t)}catch(i){V(t,o,i)}}}catch(i){V(t,t.return,i)}if(t===e){w=null;break}var a=t.sibling;if(a!==null){a.return=t.return,w=a;break}w=t.return}}var mp=Math.ceil,Gn=Ke.ReactCurrentDispatcher,ko=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,O=0,X=null,Q=null,J=0,fe=0,Ht=ft(0),Y=0,qr=null,It=0,cl=0,So=0,Tr=null,de=null,Co=0,lr=1/0,Fe=null,Xn=!1,_s=null,it=null,hn=!1,rt=null,Zn=0,Rr=0,Ls=null,In=-1,Tn=0;function oe(){return O&6?H():In!==-1?In:In=H()}function dt(e){return e.mode&1?O&2&&J!==0?J&-J:Gc.transition!==null?(Tn===0&&(Tn=Ai()),Tn):(e=z,e!==0||(e=window.event,e=e===void 0?16:zi(e.type)),e):1}function Oe(e,t,r,n){if(50<Rr)throw Rr=0,Ls=null,Error(h(185));Kr(e,r,n),(!(O&2)||e!==X)&&(e===X&&(!(O&2)&&(cl|=r),Y===4&&et(e,J)),me(e,n),r===1&&O===0&&!(t.mode&1)&&(lr=H()+500,al&&vt()))}function me(e,t){var r=e.callbackNode;Gu(e,t);var n=Ln(e,e===X?J:0);if(n===0)r!==null&&Qo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Qo(r),t===1)e.tag===0?Kc(Da.bind(null,e)):Zi(Da.bind(null,e)),Hc(function(){!(O&6)&&vt()}),r=null;else{switch(Ni(n)){case 1:r=Ks;break;case 4:r=Ci;break;case 16:r=_n;break;case 536870912:r=Ei;break;default:r=_n}r=Gd(r,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bd(e,t){if(In=-1,Tn=0,O&6)throw Error(h(327));var r=e.callbackNode;if(Xt()&&e.callbackNode!==r)return null;var n=Ln(e,e===X?J:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Jn(e,n);else{t=n;var l=O;O|=2;var s=Hd();(X!==e||J!==t)&&(Fe=null,lr=H()+500,St(e,t));do try{gp();break}catch(a){Wd(e,a)}while(!0);io(),Gn.current=s,O=l,Q!==null?t=0:(X=null,J=0,t=Y)}if(t!==0){if(t===2&&(l=is(e),l!==0&&(n=l,t=Ms(e,l))),t===1)throw r=qr,St(e,0),et(e,n),me(e,H()),r;if(t===6)et(e,n);else{if(l=e.current.alternate,!(n&30)&&!fp(l)&&(t=Jn(e,n),t===2&&(s=is(e),s!==0&&(n=s,t=Ms(e,s))),t===1))throw r=qr,St(e,0),et(e,n),me(e,H()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(h(345));case 2:bt(e,de,Fe);break;case 3:if(et(e,n),(n&130023424)===n&&(t=Co+500-H(),10<t)){if(Ln(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gs(bt.bind(null,e,de,Fe),t);break}bt(e,de,Fe);break;case 4:if(et(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var o=31-Pe(n);s=1<<o,o=t[o],o>l&&(l=o),n&=~s}if(n=l,n=H()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*mp(n/1960))-n,10<n){e.timeoutHandle=gs(bt.bind(null,e,de,Fe),n);break}bt(e,de,Fe);break;case 5:bt(e,de,Fe);break;default:throw Error(h(329))}}}return me(e,H()),e.callbackNode===r?Bd.bind(null,e):null}function Ms(e,t){var r=Tr;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=Jn(e,t),e!==2&&(t=de,de=r,t!==null&&js(t)),e}function js(e){de===null?de=e:de.push.apply(de,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],s=l.getSnapshot;l=l.value;try{if(!ze(s(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~So,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Pe(t),n=1<<r;e[r]=-1,t&=~n}}function Da(e){if(O&6)throw Error(h(327));Xt();var t=Ln(e,0);if(!(t&1))return me(e,H()),null;var r=Jn(e,t);if(e.tag!==0&&r===2){var n=is(e);n!==0&&(t=n,r=Ms(e,n))}if(r===1)throw r=qr,St(e,0),et(e,t),me(e,H()),r;if(r===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,de,Fe),me(e,H()),null}function Eo(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(lr=H()+500,al&&vt())}}function Tt(e){rt!==null&&rt.tag===0&&!(O&6)&&Xt();var t=O;O|=1;var r=Se.transition,n=z;try{if(Se.transition=null,z=1,e)return e()}finally{z=n,Se.transition=r,O=t,!(O&6)&&vt()}}function Ao(){fe=Ht.current,M(Ht)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Wc(r)),Q!==null)for(r=Q.return;r!==null;){var n=r;switch(so(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&$n();break;case 3:rr(),M(ce),M(le),vo();break;case 5:fo(n);break;case 4:rr();break;case 13:M(F);break;case 19:M(F);break;case 10:uo(n.type._context);break;case 22:case 23:Ao()}r=r.return}if(X=e,Q=e=ut(e.current,null),J=fe=t,Y=0,qr=null,So=cl=It=0,de=Tr=null,wt!==null){for(t=0;t<wt.length;t++)if(r=wt[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=l,n.next=o}r.pending=n}wt=null}return e}function Wd(e,t){do{var r=Q;try{if(io(),En.current=Kn,Yn){for(var n=$.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Yn=!1}if(Nt=0,G=q=$=null,Nr=!1,Wr=0,ko.current=null,r===null||r.return===null){Y=1,qr=t,Q=null;break}e:{var s=e,o=r.return,a=r,i=t;if(t=J,a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,v=a,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Ea(o);if(x!==null){x.flags&=-257,Aa(x,o,a,s,t),x.mode&1&&Ca(s,u,t),t=x,i=u;var b=t.updateQueue;if(b===null){var y=new Set;y.add(i),t.updateQueue=y}else b.add(i);break e}else{if(!(t&1)){Ca(s,u,t),No();break e}i=Error(h(426))}}else if(D&&a.mode&1){var j=Ea(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Aa(j,o,a,s,t),oo(nr(i,a));break e}}s=i=nr(i,a),Y!==4&&(Y=2),Tr===null?Tr=[s]:Tr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var c=Nd(s,i,t);xa(s,c);break e;case 1:a=i;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(it===null||!it.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=Id(s,a,t);xa(s,g);break e}}s=s.return}while(s!==null)}qd(r)}catch(k){t=k,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Hd(){var e=Gn.current;return Gn.current=Kn,e===null?Kn:e}function No(){(Y===0||Y===3||Y===2)&&(Y=4),X===null||!(It&268435455)&&!(cl&268435455)||et(X,J)}function Jn(e,t){var r=O;O|=2;var n=Hd();(X!==e||J!==t)&&(Fe=null,St(e,t));do try{vp();break}catch(l){Wd(e,l)}while(!0);if(io(),O=r,Gn.current=n,Q!==null)throw Error(h(261));return X=null,J=0,Y}function vp(){for(;Q!==null;)Qd(Q)}function gp(){for(;Q!==null&&!Uu();)Qd(Q)}function Qd(e){var t=Kd(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?qd(e):Q=t,ko.current=null}function qd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=dp(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(r=ip(r,t,fe),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function bt(e,t,r){var n=z,l=Se.transition;try{Se.transition=null,z=1,hp(e,t,r,n)}finally{Se.transition=l,z=n}return null}function hp(e,t,r,n){do Xt();while(rt!==null);if(O&6)throw Error(h(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Xu(e,s),e===X&&(Q=X=null,J=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hn||(hn=!0,Gd(_n,function(){return Xt(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Se.transition,Se.transition=null;var o=z;z=1;var a=O;O|=4,ko.current=null,cp(e,r),Ud(r,e),jc(fs),Mn=!!ms,fs=ms=null,e.current=r,pp(r),Vu(),O=a,z=o,Se.transition=s}else e.current=r;if(hn&&(hn=!1,rt=e,Zn=l),s=e.pendingLanes,s===0&&(it=null),Hu(r.stateNode),me(e,H()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Xn)throw Xn=!1,e=_s,_s=null,e;return Zn&1&&e.tag!==0&&Xt(),s=e.pendingLanes,s&1?e===Ls?Rr++:(Rr=0,Ls=e):Rr=0,vt(),null}function Xt(){if(rt!==null){var e=Ni(Zn),t=Se.transition,r=z;try{if(Se.transition=null,z=16>e?16:e,rt===null)var n=!1;else{if(e=rt,rt=null,Zn=0,O&6)throw Error(h(331));var l=O;for(O|=4,w=e.current;w!==null;){var s=w,o=s.child;if(w.flags&16){var a=s.deletions;if(a!==null){for(var i=0;i<a.length;i++){var u=a[i];for(w=u;w!==null;){var v=w;switch(v.tag){case 0:case 11:case 15:Ir(8,v,s)}var f=v.child;if(f!==null)f.return=v,w=f;else for(;w!==null;){v=w;var m=v.sibling,x=v.return;if(Dd(v),v===u){w=null;break}if(m!==null){m.return=x,w=m;break}w=x}}}var b=s.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}w=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,w=o;else e:for(;w!==null;){if(s=w,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ir(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,w=c;break e}w=s.return}}var d=e.current;for(w=d;w!==null;){o=w;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,w=p;else e:for(o=d;w!==null;){if(a=w,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(k){V(a,a.return,k)}if(a===o){w=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,w=g;break e}w=a.return}}if(O=l,vt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(rl,e)}catch{}n=!0}return n}finally{z=r,Se.transition=t}}return!1}function Fa(e,t,r){t=nr(r,t),t=Nd(e,t,1),e=at(e,t,1),t=oe(),e!==null&&(Kr(e,1,t),me(e,t))}function V(e,t,r){if(e.tag===3)Fa(e,e,r);else for(;t!==null;){if(t.tag===3){Fa(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(it===null||!it.has(n))){e=nr(r,e),e=Id(t,e,1),t=at(t,e,1),e=oe(),t!==null&&(Kr(t,1,e),me(t,e));break}}t=t.return}}function xp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&r,X===e&&(J&r)===r&&(Y===4||Y===3&&(J&130023424)===J&&500>H()-Co?St(e,0):So|=r),me(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=on,on<<=1,!(on&130023424)&&(on=4194304)):t=1);var r=oe();e=qe(e,t),e!==null&&(Kr(e,t,r),me(e,r))}function bp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yd(e,r)}function yp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(h(314))}n!==null&&n.delete(t),Yd(e,r)}var Kd;Kd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ue=!1,ap(e,t,r);ue=!!(e.flags&131072)}else ue=!1,D&&t.flags&1048576&&Ji(t,Bn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Nn(e,t),e=t.pendingProps;var l=Jt(t,le.current);Gt(t,r),l=ho(null,t,n,e,l,r);var s=xo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(n)?(s=!0,Un(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,po(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Ss(t,n,e,r),t=As(null,t,n,!0,s,r)):(t.tag=0,D&&s&&lo(t),se(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Nn(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=kp(n),e=Ie(n,e),l){case 0:t=Es(null,t,n,e,r);break e;case 1:t=Ta(null,t,n,e,r);break e;case 11:t=Na(null,t,n,e,r);break e;case 14:t=Ia(null,t,n,Ie(n.type,e),r);break e}throw Error(h(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ie(n,l),Es(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ie(n,l),Ta(e,t,n,l,r);case 3:e:{if(Od(t),e===null)throw Error(h(387));n=t.pendingProps,s=t.memoizedState,l=s.element,sd(e,t),Qn(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=nr(Error(h(423)),t),t=Ra(e,t,n,r,l);break e}else if(n!==l){l=nr(Error(h(424)),t),t=Ra(e,t,n,r,l);break e}else for(ve=ot(t.stateNode.containerInfo.firstChild),ge=t,D=!0,Re=null,r=nd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),n===l){t=Ye(e,t,r);break e}se(e,t,n,r)}t=t.child}return t;case 5:return od(t),e===null&&ys(t),n=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,o=l.children,vs(n,l)?o=null:s!==null&&vs(n,s)&&(t.flags|=32),Pd(e,t),se(e,t,o,r),t.child;case 6:return e===null&&ys(t),null;case 13:return zd(e,t,r);case 4:return mo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tr(t,null,n,r):se(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ie(n,l),Na(e,t,n,l,r);case 7:return se(e,t,t.pendingProps,r),t.child;case 8:return se(e,t,t.pendingProps.children,r),t.child;case 12:return se(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,s=t.memoizedProps,o=l.value,_(Wn,n._currentValue),n._currentValue=o,s!==null)if(ze(s.value,o)){if(s.children===l.children&&!ce.current){t=Ye(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var i=a.firstContext;i!==null;){if(i.context===n){if(s.tag===1){i=We(-1,r&-r),i.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var v=u.pending;v===null?i.next=i:(i.next=v.next,v.next=i),u.pending=i}}s.lanes|=r,i=s.alternate,i!==null&&(i.lanes|=r),ws(s.return,r,t),a.lanes|=r;break}i=i.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(h(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),ws(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}se(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,Gt(t,r),l=Ce(l),n=n(l),t.flags|=1,se(e,t,n,r),t.child;case 14:return n=t.type,l=Ie(n,t.pendingProps),l=Ie(n.type,l),Ia(e,t,n,l,r);case 15:return Td(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ie(n,l),Nn(e,t),t.tag=1,pe(n)?(e=!0,Un(t)):e=!1,Gt(t,r),Ad(t,n,l),Ss(t,n,l,r),As(null,t,n,!0,e,r);case 19:return _d(e,t,r);case 22:return Rd(e,t,r)}throw Error(h(156,t.tag))};function Gd(e,t){return Si(e,t)}function wp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,r,n){return new wp(e,t,r,n)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qs)return 11;if(e===qs)return 14}return 2}function ut(e,t){var r=e.alternate;return r===null?(r=ke(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Rn(e,t,r,n,l,s){var o=2;if(n=e,typeof e=="function")Io(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Lt:return Ct(r.children,l,s,t);case Hs:o=8,l|=8;break;case ql:return e=ke(12,r,t,l|2),e.elementType=ql,e.lanes=s,e;case Yl:return e=ke(13,r,t,l),e.elementType=Yl,e.lanes=s,e;case Kl:return e=ke(19,r,t,l),e.elementType=Kl,e.lanes=s,e;case oi:return pl(r,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case li:o=10;break e;case si:o=9;break e;case Qs:o=11;break e;case qs:o=14;break e;case Xe:o=16,n=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=ke(o,r,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Ct(e,t,r,n){return e=ke(7,e,n,t),e.lanes=r,e}function pl(e,t,r,n){return e=ke(22,e,n,t),e.elementType=oi,e.lanes=r,e.stateNode={isHidden:!1},e}function Wl(e,t,r){return e=ke(6,e,null,t),e.lanes=r,e}function Hl(e,t,r){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sp(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,r,n,l,s,o,a,i){return e=new Sp(e,t,r,a,i),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ke(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},po(s),e}function Cp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return pt;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var r=e.type;if(pe(r))return Xi(e,r,t)}return t}function Zd(e,t,r,n,l,s,o,a,i){return e=To(r,n,!0,e,l,s,o,a,i),e.context=Xd(null),r=e.current,n=oe(),l=dt(r),s=We(n,l),s.callback=t??null,at(r,s,l),e.current.lanes=l,Kr(e,l,n),me(e,n),e}function ml(e,t,r,n){var l=t.current,s=oe(),o=dt(l);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=We(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=at(l,t,o),e!==null&&(Oe(e,l,o,s),Cn(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ro(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function Ep(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Po(e){this._internalRoot=e}fl.prototype.render=Po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));ml(e,t,null,null)};fl.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){ml(null,e,null,null)}),t[Qe]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ri();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Je.length&&t!==0&&t<Je[r].priority;r++);Je.splice(r,0,e),r===0&&Oi(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ua(){}function Ap(e,t,r,n,l){if(l){if(typeof n=="function"){var s=n;n=function(){var u=el(o);s.call(u)}}var o=Zd(t,n,e,0,null,!1,!1,"",Ua);return e._reactRootContainer=o,e[Qe]=o.current,Fr(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var a=n;n=function(){var u=el(i);a.call(u)}}var i=To(e,0,!1,null,null,!1,!1,"",Ua);return e._reactRootContainer=i,e[Qe]=i.current,Fr(e.nodeType===8?e.parentNode:e),Tt(function(){ml(t,i,r,n)}),i}function gl(e,t,r,n,l){var s=r._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var a=l;l=function(){var i=el(o);a.call(i)}}ml(t,o,e,l)}else o=Ap(r,t,e,l,n);return el(o)}Ii=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yr(t.pendingLanes);r!==0&&(Gs(t,r|1),me(t,H()),!(O&6)&&(lr=H()+500,vt()))}break;case 13:Tt(function(){var n=qe(e,1);if(n!==null){var l=oe();Oe(n,e,1,l)}}),Ro(e,1)}};Xs=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var r=oe();Oe(t,e,134217728,r)}Ro(e,134217728)}};Ti=function(e){if(e.tag===13){var t=dt(e),r=qe(e,t);if(r!==null){var n=oe();Oe(r,e,t,n)}Ro(e,t)}};Ri=function(){return z};Pi=function(e,t){var r=z;try{return z=e,t()}finally{z=r}};ss=function(e,t,r){switch(t){case"input":if(Zl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=ol(n);if(!l)throw Error(h(90));ii(n),Zl(n,l)}}}break;case"textarea":ui(e,r);break;case"select":t=r.value,t!=null&&Qt(e,!!r.multiple,t,!1)}};hi=Eo;xi=Tt;var Np={usingClientEntryPoint:!1,Events:[Xr,Ft,ol,vi,gi,Eo]},hr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wi(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xn.isDisabled&&xn.supportsFiber)try{rl=xn.inject(Ip),je=xn}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(h(200));return Cp(e,t,null,r)};xe.createRoot=function(e,t){if(!Oo(e))throw Error(h(299));var r=!1,n="",l=Jd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,r,!1,n,l),e[Qe]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Po(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=wi(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Tt(e)};xe.hydrate=function(e,t,r){if(!vl(t))throw Error(h(200));return gl(null,e,t,!0,r)};xe.hydrateRoot=function(e,t,r){if(!Oo(e))throw Error(h(405));var n=r!=null&&r.hydratedSources||null,l=!1,s="",o=Jd;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Zd(t,null,e,1,r??null,l,!1,s,o),e[Qe]=t.current,Fr(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new fl(t)};xe.render=function(e,t,r){if(!vl(t))throw Error(h(200));return gl(null,e,t,!1,r)};xe.unmountComponentAtNode=function(e){if(!vl(e))throw Error(h(40));return e._reactRootContainer?(Tt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};xe.unstable_batchedUpdates=Eo;xe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vl(r))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return gl(e,t,r,!1,n)};xe.version="18.3.1-next-f1338f8080-20240426";function eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eu)}catch(e){console.error(e)}}eu(),ei.exports=xe;var Tp=ei.exports,tu,Va=Tp;tu=Va.createRoot,Va.hydrateRoot;const Rp=({currentDocumentTitle:e})=>I.jsx("header",{className:"fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3 transition-all duration-300",children:I.jsxs("div",{className:"flex items-center justify-center",children:[I.jsx("div",{className:"flex items-center space-x-2 md:space-x-3",children:I.jsx("img",{src:"https://i.imgur.com/48PfOVX.png",alt:"NOCTA.I Logo",className:"h-6 md:h-8 w-auto object-contain"})}),I.jsx("div",{className:"flex-1 text-center ml-2 md:ml-0",children:I.jsx("h1",{className:"text-white text-sm md:text-lg font-semibold tracking-wide truncate",children:e})}),I.jsx("div",{className:"w-6 md:w-8"})]})}),zt=[{id:"documento-executivo",title:"Documento Executivo - Estrutura Interna",content:`
      <h1>Documento Executivo - Estrutura Interna e Capacidades Operacionais da NOCTA.I</h1>
      
      <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Natureza Estratégica do Negócio</h2>
        <p class="!mb-0">A NOCTA.I estrutura-se como uma empresa de tecnologia orientada à entrega de operações automatizadas por meio de inteligência artificial aplicada, moldada com precisão às rotinas de negócios dos clientes. Internamente, sustenta-se por um modelo operacional altamente enxuto, replicável, escalável e baseado em margens operacionais elevadas.</p>
      </div>

      <h2>1. Modelo Operacional</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Alta Margem Operacional</h3>
          <p class="!mb-0 text-sm">O modelo da NOCTA.I é concebido para garantir lucratividade recorrente sem aumento proporcional de custo com o crescimento da base de clientes. A empresa não requer equipe de suporte intensivo nem gastos recorrentes em mão de obra direta por projeto.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Baixo Custo Inicial por Cliente</h3>
          <p class="!mb-0 text-sm">Não há custos operacionais relevantes antes da ativação da automação. O esforço de setup e implementação é digital, automatizado e pós-pago — os únicos custos recorrentes surgem após o 30º dia, majoritariamente relacionados à infraestrutura cloud-vps.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Eficiência e Sustentabilidade Técnica</h3>
          <p class="!mb-0 text-sm">Toda a infraestrutura é baseada em nuvem, dispensando servidores locais, instalações físicas ou ativos fixos. A entrega é modular, digital e com disponibilidade contínua (24/7), operando de forma sustentável e com consumo controlado de recursos computacionais.</p>
        </div>
      </div>

      <h2>2. Arquitetura Técnica</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Integração Universal e Flexível
          </h3>
          <p class="!mb-0">A NOCTA.I opera com integração nativa via API e Webhook, o que viabiliza a conexão com sistemas diversos (CRM, ERP, gateways, planilhas, bancos de dados, entre outros) sem necessidade de refatoração ou customização de código-fonte do cliente.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Capacidade Multimodal da IA
          </h3>
          <p class="!mb-0">A IA implementada compreende texto, áudio e imagem. Possui habilidade de comunicação por mensagem escrita, voz personalizada (com timbre de pessoas reais) e resposta lógica contextualizada. Isso permite atender uma variedade ampla de demandas operacionais sem alterar o core da tecnologia.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Customização por Instância
          </h3>
          <p class="!mb-0">Cada IA é treinada com dados operacionais do cliente, vocabulário, tom de voz e lógica de negócio própria. A NOCTA.I não distribui "bots genéricos", mas sim instâncias específicas moldadas ao fluxo e cultura de cada empresa atendida.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Aprendizado Contínuo Automatizado
          </h3>
          <p class="!mb-0">As instâncias de IA aprendem e evoluem com base nas interações com os clientes finais. Essa inteligência é retroalimentada no sistema, aumentando sua capacidade sem dependência de operadores humanos ou ajustes frequentes.</p>
        </div>
      </div>

      <h2>3. Estrutura Organizacional e Processual</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Time Enxuto, Estratégico e Replicável</h3>
          <p class="!mb-0">A equipe da NOCTA.I é mínima, composta por profissionais de alta performance com foco em produto, engenharia de automações, integração e atendimento consultivo. Não há necessidade de escalar equipe proporcionalmente ao número de clientes.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Protocolos Internos e Padronização</h3>
          <p class="!mb-0">Todos os processos internos da empresa estão em fase avançada de padronização e documentação, permitindo execução rápida, delegação inteligente e criação de playbooks replicáveis.</p>
        </div>
      </div>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-3">Pós-Venda Consultivo</h3>
        <p class="!mb-0">O relacionamento com o cliente é estratégico. O time de pós-venda atua como consultoria de eficiência operacional, guiando o cliente em novos fluxos e oportunidades de ganho. O suporte técnico é pontual, pois o sistema é estável e autônomo.</p>
      </div>

      <h2>4. Modelo de Crescimento e Expansão</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Viral por Design</h3>
          <p class="!mb-0">O modelo da NOCTA.I inclui um sistema interno de crescimento baseado em ramificações: um cliente satisfeito naturalmente indica novos clientes. Isso é fomentado por um modelo de marketing de rede estruturado com linguagem corporativa, impulsionando crescimento sem custo direto de aquisição (CAC).</p>
        </div>
        
        <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Produto Fragmentável por Nicho</h3>
          <p class="!mb-0">A estrutura da empresa permite a criação de marcas, páginas e ofertas segmentadas, mantendo o mesmo core tecnológico. Isso torna possível atender diferentes segmentos com identidade visual e linguagem adaptada, sem refazer o produto.</p>
        </div>
        
        <div class="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Versatilidade Estrutural e Operacional</h3>
          <p class="!mb-0">A tecnologia é flexível o suficiente para atender múltiplos segmentos sem perda de performance. Ao mesmo tempo, é robusta o bastante para suportar operações críticas, como suporte técnico, vendas, cobrança e comunicação 24/7.</p>
        </div>
      </div>

      <h2>5. Modelo Financeiro e de Receita</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Recorrência Inteligente</h3>
          <p class="!mb-0">A recorrência dos contratos é natural e não depende de travas jurídicas. O cliente continua por perceber valor, e não por estar preso. A IA, uma vez implantada, se torna insubstituível por humanos — com custo 4x menor e funcionamento contínuo.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Comissão Comercial Simples e Escalável</h3>
          <p class="!mb-0">O comissionamento para closers é fixo (1 a 3% do valor da implementação, no primeiro mês), sem participação sobre a recorrência, tornando o modelo de incentivo limpo, escalável e fácil de administrar.</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-3">Redução Progressiva de CAC & LTV Crescente</h3>
        <p class="!mb-0">Com o avanço da base de clientes e a automação do funil comercial (captação, qualificação e agendamento 100% por IA), o CAC médio tende a reduzir progressivamente. À medida que a IA aprende e se torna essencial para o cliente, o tempo de permanência (LTV) aumenta, sem necessidade de aumento proporcional do Custo dos Produtos Vendidos.</p>
      </div>

      <h2>6. Estratégia de Expansão Internacional</h2>
      
      <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Modelo Global</h3>
        <p class="mb-4">A NOCTA.I está apta a escalar internacionalmente com poucos ajustes. Seu modelo é 100% digital, cloud-based e adaptável por idioma e cultura.</p>
        
        <h4 class="!mt-6 !mb-3">Mercados Estratégicos:</h4>
        <ul class="space-y-2 mb-4">
          <li><strong>Brasileiros nos EUA:</strong> familiaridade com automação, alto custo CLT local, idioma compartilhado.</li>
          <li><strong>LATAM:</strong> cenário similar ao Brasil, com alta dependência de WhatsApp e processos manuais.</li>
          <li><strong>Europa (Portugal, Espanha, Alemanha, França):</strong> exigem performance, estabilidade e adequação regulatória. A NOCTA.I se adapta com facilidade a todos esses vetores.</li>
        </ul>
        
        <h4 class="!mt-6 !mb-3">Diferenciais Competitivos Globais:</h4>
        <ul class="space-y-1">
          <li>IA realmente contextual, versus bots genéricos do mercado.</li>
          <li>Integração completa com processos e dados reais.</li>
          <li>Capacidade de escalar sem reescrever tecnologia para cada país.</li>
        </ul>
      </div>

      <h2>7. Posicionamento Estratégico</h2>
      
      <div class="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A NOCTA.I está posicionada na interseção de três macrotendências globais:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">🤖</div>
            <strong>Automação inteligente</strong><br>
            <span class="text-sm text-gray-300">(AI Ops)</span>
          </div>
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">🚀</div>
            <strong>Human augmentation</strong><br>
            <span class="text-sm text-gray-300">(IA como extensão do time)</span>
          </div>
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">📈</div>
            <strong>Eficiência operacional</strong><br>
            <span class="text-sm text-gray-300">(Menos funcionários, mais tecnologia)</span>
          </div>
        </div>
        <p class="!mt-4 !mb-0">Este posicionamento favorece parcerias com fundos, aquisição estratégica por players de SaaS ou expansão como plataforma de infra operacional global e médias empresas.</p>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 text-center">
        <h2 class="!mt-0 !mb-4">Considerações Finais</h2>
        <p class="!mb-4">A NOCTA.I apresenta uma estrutura empresarial sólida, enxuta e voltada para escalar com controle. Seu core tecnológico, combinado ao modelo operacional e financeiro, gera um negócio com margens altas, baixa fricção, e alta retenção — pronto para expansão nacional e internacional com mínimo ajuste estrutural.</p>
        <p class="!mb-0"><em>Trata-se de um ativo empresarial que opera com inteligência desde a base e cresce com estabilidade, previsibilidade e lógica exponencial.</em></p>
      </div>
    `},{id:"documento-entregavel",title:"Documento Entregável ao Cliente",content:`
      <h1>Documento Executivo - Visão de Entrega e Valor Percebido pelo Cliente NOCTA.I</h1>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Objetivo deste Documento</h2>
        <p class="!mb-0">Apresentar de forma aprofundada a proposta de entrega, os diferenciais de qualidade, os elementos que geram dependência e fidelização do cliente, e a lógica de escala que a NOCTA.I proporciona no front-end da experiência do usuário e do contratante.</p>
      </div>

      <h2>1. O QUE A NOCTA.I ENTREGA</h2>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A NOCTA.I entrega operações funcionais com IA aplicada, integradas à realidade do cliente, com o objetivo de automatizar o que antes dependia de pessoas:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">IA consultiva para atendimento e vendas</h3>
            <p class="!mb-0 text-sm">Atua como SDR, assistente, suporte e pós-venda.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Automação total do ciclo comercial</h3>
            <p class="!mb-0 text-sm">Da primeira mensagem até a reativação de leads.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Operação 24/7 com empatia</h3>
            <p class="!mb-0 text-sm">Comunicação fluida, com linguagem ajustada ao tom e cultura da empresa.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Customização profunda</h3>
            <p class="!mb-0 text-sm">Nenhuma IA da NOCTA.I é genérica. Cada uma fala, escreve, responde e opera com as informações e estilo do cliente.</p>
          </div>
        </div>
      </div>

      <h2>2. QUALIDADE PERCEBIDA E CONCRETA</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Precisão funcional</h3>
          <p class="!mb-0 text-sm">Todos os fluxos são validados, testados e auditados antes da ativação.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Personalização de alta fidelidade</h3>
          <p class="!mb-0 text-sm">A IA incorpora vocabulário, hábitos, tom e cultura da empresa.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Performance operacional</h3>
          <p class="!mb-0 text-sm">IA responde sem falhas, com cadência, sem esquecimento e sem fadiga.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Velocidade de entrega</h3>
          <p class="!mb-0 text-sm">MVP funcional em até 6 a 30 dias (a depender da complexidade).</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Treinamento com dados reais</h3>
          <p class="!mb-0 text-sm">O que permite decisões mais coerentes, scripts mais efetivos e resultados mais rápidos.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Atualizações e aprendizado constante</h3>
          <p class="!mb-0 text-sm">A IA melhora a cada interação, sem a necessidade de intervenção humana.</p>
        </div>
      </div>

      <h2>3. POR QUE O CLIENTE PRECISA DA NOCTA.I</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque <strong>nenhuma equipe humana consegue fazer o que a IA faz 24 horas por dia</strong>, com padrão, empatia e sem esquecer nada.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque hoje, <strong>as empresas perdem dinheiro em silêncios, esquecimentos, falta de follow-up, e sobrecarga manual</strong>.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque <strong>contratar mais gente custa caro, treinar custa tempo, e manter um padrão é quase impossível</strong>.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque a NOCTA.I entrega <strong>previsibilidade e escalabilidade</strong> — o que times humanos não garantem sozinhos.</p>
        </div>
      </div>

      <h2>4. POR QUE O CLIENTE DEPENDE DA NOCTA.I</h2>
      
      <div class="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6 mb-8">
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">A IA da NOCTA.I se torna o <strong>"cérebro operacional invisível"</strong> do cliente.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">Todos os leads, agendamentos, acompanhamentos e reativações passam a depender dessa estrutura.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">O time humano passa a focar só em pontos de decisão — o resto é automatizado.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">A lógica de comunicação, o CRM, os fluxos e os dados são integrados à IA.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0"><strong>Tirar a IA seria o mesmo que desligar o time comercial por completo.</strong></p>
          </div>
        </div>
      </div>

      <h2>5. POR QUE O CLIENTE NÃO VAI TROCAR A NOCTA.I</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Fidelidade por Moldagem</h3>
          <p class="!mb-0">Porque a IA se molda com tanta fidelidade que seria impossível "recomeçar do zero" com outro provedor.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Custo-Benefício Imbatível</h3>
          <p class="!mb-0">4x mais barato que um humano CLT, com performance contínua.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Qualidade Visível</h3>
          <p class="!mb-0">A qualidade do atendimento e vendas se tornam um ativo visível da empresa.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Estrutura Concentrada</h3>
          <p class="!mb-0">Os dados, fluxos e resultados ficam concentrados em uma estrutura estável e viva.</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-green-600/20 to-green-800/20 border border-green-400/40 rounded-xl p-6 mb-8 text-center">
        <h3 class="!mt-0 !mb-3 text-green-300">A Verdade Simples</h3>
        <p class="!mb-0 text-lg"><strong>A IA da NOCTA.I funciona — e empresas não trocam o que funciona perfeitamente.</strong></p>
      </div>

      <h2>6. ESCALA PARA O CLIENTE</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Sem Contratação</h3>
          <p class="!mb-0">O cliente pode crescer em número de atendimentos, vendas ou suporte sem contratar mais ninguém.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Escala Horizontal</h3>
          <p class="!mb-0">A estrutura da IA escala horizontalmente: mais canais, mais fluxos, mais leads — tudo sem perder qualidade.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Estabilidade Operacional</h3>
          <p class="!mb-0">A IA não trava, não cansa, não falta, não muda de humor. Isso cria estabilidade e consistência.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Eficiência de Equipe</h3>
          <p class="!mb-0">Operações que dependiam de 4-10 pessoas, agora são geridas por 1 pessoa com IA.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Inteligente</h3>
          <p class="!mb-0">A empresa cresce em atendimento e conversão, mas não cresce em folha de pagamento.</p>
        </div>
      </div>

      <h2>7. DIFERENCIAIS DO FRONT NOCTA.I</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Integração Completa</h3>
          <p class="!mb-0">Integração nativa com WhatsApp, e-mail, CRM, ERPs e plataformas de vendas.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Voz Real</h3>
          <p class="!mb-0">Respostas com voz real (voz do dono, gestor ou colaborador, gerando conexão emocional).</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Capacidade Multimodal</h3>
          <p class="!mb-0">Texto, áudio, imagem e documentos.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Dashboards em Tempo Real</h3>
          <p class="!mb-0">Dashboards e indicadores gerenciais em tempo real.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Aprendizado Contínuo</h3>
          <p class="!mb-0">Acompanhamento de performance da IA com aprendizado contínuo.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Automação Completa</h3>
          <p class="!mb-0">Funil de atendimento e vendas automatizado ponta a ponta + Reativação automatizada de leads inativos.</p>
        </div>
      </div>

      <h2>8. VALOR ESTRUTURAL PERCEBIDO PELO CLIENTE</h2>
      
      <div class="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="!mt-0 !mb-3">Transformação Operacional</h3>
            <p class="!mb-4">O cliente percebe que a empresa ficou mais rápida, mais organizada e mais eficiente.</p>
            
            <h3 class="!mt-6 !mb-3">Alívio Gerencial</h3>
            <p class="!mb-0">Os gestores sentem alívio operacional — ganham tempo, ganham dados e perdem menos vendas.</p>
          </div>
          <div>
            <h3 class="!mt-0 !mb-3">Foco Estratégico</h3>
            <p class="!mb-4">O time humano foca onde é insubstituível: em decisões, fechamento e relacionamento.</p>
            
            <h3 class="!mt-6 !mb-3">Crescimento Lógico</h3>
            <p class="!mb-0">O cliente entende que o crescimento agora depende mais de lógica do que de gente.</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 text-center">
        <h2 class="!mt-0 !mb-4">Conclusão</h2>
        <p class="!mb-4 text-lg">A NOCTA.I entrega mais do que automação: entrega <strong>estrutura, presença, inteligência e eficiência contínua</strong>. O cliente sente o valor, vive a diferença e se torna dependente não por obrigação contratual, mas por inteligência operacional.</p>
        <p class="!mb-0 text-xl"><em>A IA da NOCTA.I vira um membro estratégico da equipe do cliente — e um motor de escala que não pode ser desligado.</em></p>
      </div>
    `},{id:"modelo-faturamento",title:"Modelo de Faturamento",content:`
      <h1>Documento Executivo - Modelo de Faturamento, Margem e Escalabilidade Financeira da NOCTA.I</h1>
      
      <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Objetivo deste Documento</h2>
        <p class="!mb-0">Apresentar com clareza a estrutura de faturamento projetada da NOCTA.I, os níveis de margem, o potencial de escala com base no volume de clientes, e a lógica financeira de reinvestimento, sustentabilidade e previsibilidade com base nos produtos SALES AI e OPS AI.</p>
      </div>

      <h2>1. MODELO DE NEGÓCIO</h2>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">A NOCTA.I opera com dois produtos centrais:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-black/40 border border-purple-500/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-3 text-purple-300">SALES AI™ — IA para Vendas e Atendimento</h3>
            <p class="!mb-4 text-sm">Automatiza a etapa comercial de empresas (atendimento inicial, qualificação, agendamento, follow-up e recuperação de leads), operando 24/7 com linguagem humanizada e lógica de negócio.</p>
            
            <div class="space-y-2">
              <div class="bg-green-900/30 rounded-lg p-3">
                <div class="text-sm text-green-300">Ticket de entrada</div>
                <div class="text-lg font-bold text-white">R$ 3.000</div>
                <div class="text-xs text-gray-400">ex: consultório, profissional liberal</div>
              </div>
              <div class="bg-green-900/30 rounded-lg p-3">
                <div class="text-sm text-green-300">Ticket avançado</div>
                <div class="text-lg font-bold text-white">R$ 10.000</div>
                <div class="text-xs text-gray-400">ex: grandes clínicas, operações multicanais</div>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-3">
                <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                <div class="text-xl font-bold text-white">R$ 5.200</div>
                <div class="text-xs text-gray-400">~40% da metade do ticket máximo, considerando alta recorrência de negócios médios</div>
              </div>
            </div>
          </div>
          
          <div class="bg-black/40 border border-blue-500/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-3 text-blue-300">OPS AI™ — IA para Operação Administrativa e Backoffice</h3>
            <p class="!mb-4 text-sm">Automatiza processos internos, integrações, fluxos financeiros, suporte técnico, interpretação de dados e comunicação operacional em empresas com maior complexidade administrativa.</p>
            
            <div class="space-y-2">
              <div class="bg-blue-900/30 rounded-lg p-3">
                <div class="text-sm text-blue-300">Ticket de entrada</div>
                <div class="text-lg font-bold text-white">R$ 7.000</div>
                <div class="text-xs text-gray-400">ex: SaaS simples, agências</div>
              </div>
              <div class="bg-blue-900/30 rounded-lg p-3">
                <div class="text-sm text-blue-300">Ticket avançado</div>
                <div class="text-lg font-bold text-white">R$ 25.000</div>
                <div class="text-xs text-gray-400">ex: fintechs, plataformas, operações intensas</div>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-3">
                <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                <div class="text-xl font-bold text-white">R$ 10.000</div>
                <div class="text-xs text-gray-400">~40% da metade do ticket máximo, aplicado a maioria dos clientes com operação estruturada, mas não crítica</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>2. MENSALIDADES E PREVISIBILIDADE</h2>
      
      <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">As mensalidades são cobradas após a entrega da automação validada (em até 30 dias), com base no volume de fluxos, complexidade e canais ativos.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-4">
            <div class="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <div class="text-sm text-green-300">Mensalidade mínima</div>
              <div class="text-2xl font-bold text-white">R$ 1.000</div>
            </div>
            <div class="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <div class="text-sm text-blue-300">Mensalidade por cliente AVANÇADO (OPS AI)</div>
              <div class="text-2xl font-bold text-white">R$ 2.500</div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <div class="text-sm text-red-300">Custo de servidor estimado por cliente Médico básico</div>
              <div class="text-lg font-bold text-white">R$ 80-200</div>
            </div>
            <div class="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <div class="text-sm text-red-300">Custo de servidor estimado por cliente Clínica grande</div>
              <div class="text-lg font-bold text-white">R$ 450-600</div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mb-4">
          <div class="text-sm text-purple-300">ROI operacional (gasto x margem)</div>
          <div class="text-xl font-bold text-white">mínimo de 3x até 5x sobre o custo mensal com servidor</div>
        </div>
        
        <p class="!mb-0 text-sm text-gray-300">Todos os clientes operam com contratos de 3, 6 ou 12 meses, garantindo previsibilidade e composição de MRR (Monthly Recurring Revenue).</p>
      </div>

      <h2>3. PROJEÇÃO DE FATURAMENTO ESCALADO</h2>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-purple-900/30">
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">N° de Clientes Ativos</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Setup (Ticket Médio SALES AI)</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Mensal (MRR Médio)</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Total (Mês 1)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">50 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 260.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 50.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 310.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">100 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 520.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 100.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 620.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">200 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.040.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 200.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 1.240.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">300 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.560.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 300.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 1.860.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">500 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 2.600.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 500.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 3.100.000</td>
            </tr>
            <tr class="hover:bg-white/5 bg-purple-900/20">
              <td class="border border-purple-500/20 p-4 text-white font-bold">1.000 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold text-lg">R$ 5.200.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold text-lg">R$ 1.000.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold text-lg">R$ 6.200.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0"><strong>Observação:</strong> Após o primeiro mês, o crescimento da MRR compõe o fluxo contínuo da operação com alta retenção.</p>
      </div>

      <h2>4. MARGEM OPERACIONAL E ESCALA HUMANA</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Estrutura de Equipe</h3>
          <p class="!mb-4">A equipe técnica da NOCTA.I é enxuta e não precisa escalar extremamente proporcionalmente à base.</p>
          <div class="bg-black/30 rounded-lg p-4">
            <p class="!mb-2"><strong>Cada squad</strong> (produto + integração + CS) consegue sustentar entre:</p>
            <div class="text-2xl font-bold text-blue-300">30 a 50 clientes ativos</div>
            <p class="!mb-0 text-sm text-gray-400">simultâneos com folga</p>
          </div>
          <p class="!mb-0 mt-4 text-sm">Com automações de onboarding, suporte mínimo e padronização do framework, a escalabilidade é controlada.</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Margem por Cliente (projeção por cliente médio)</h3>
          <div class="space-y-3">
            <div class="bg-green-900/40 rounded-lg p-3">
              <div class="text-sm text-green-300">Receita mensal média</div>
              <div class="text-xl font-bold text-white">R$ 1.000</div>
            </div>
            <div class="bg-red-900/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Custo médio mensal (infraestrutura)</div>
              <div class="text-xl font-bold text-white">R$ 200</div>
            </div>
            <div class="bg-purple-900/40 rounded-lg p-3">
              <div class="text-sm text-purple-300">Margem líquida bruta estimada</div>
              <div class="text-2xl font-bold text-white">R$ 800 (80%)</div>
              <div class="text-xs text-gray-400">(fora impostos)</div>
            </div>
          </div>
          <div class="mt-4 bg-yellow-900/30 rounded-lg p-3">
            <p class="!mb-0 text-sm">Com esse modelo, a margem por <strong>100 clientes</strong> ultrapassa <strong class="text-yellow-300">R$ 80.000 mensais</strong>.</p>
          </div>
        </div>
      </div>

      <h2>5. REINVESTIMENTO E CRESCIMENTO</h2>
      
      <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">A estratégia financeira da NOCTA.I prevê reinvestimento parcial da margem líquida para ampliação e estabilidade da operação.</p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Primeiros 3 meses</h3>
            <div class="text-2xl font-bold text-white mb-2">35%</div>
            <p class="!mb-0 text-sm text-gray-300">de reinvestimento sobre o lucro líquido</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Até 6 meses</h3>
            <div class="text-2xl font-bold text-white mb-2">30%</div>
            <p class="!mb-0 text-sm text-gray-300">reinvestido, com foco em marketing, squads e estrutura</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Após 6 meses</h3>
            <div class="text-lg font-bold text-white mb-2">Diluído</div>
            <p class="!mb-0 text-sm text-gray-300">o reinvestimento é diluído conforme a empresa consolida MRR e adquire previsibilidade</p>
          </div>
        </div>
        
        <div class="mt-6 bg-purple-900/30 rounded-lg p-4">
          <p class="!mb-0">É totalmente possível em caso de mentorias, consultorias para melhorar a performance da NOCTA.I</p>
        </div>
      </div>

      <h2>6. RETENÇÃO E ESTABILIDADE</h2>
      
      <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">O churn da NOCTA.I tende a ser mínimo por:</h3>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>Sensação de insubstituibilidade da IA</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>ROI visível na operação</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>Redução de equipe e dependência operacional direta da IA</span>
            </div>
          </div>
        </div>
        
        <div class="bg-black/40 rounded-lg p-4">
          <p class="!mb-0">A composição de contratos escalonados <strong>(3, 6 e 12 meses)</strong> dá estabilidade ao caixa e permite projeções confiáveis.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 mb-8">
        <h2 class="!mt-0 !mb-4 text-center">Conclusão</h2>
        <p class="!mb-4 text-center">A NOCTA.I combina um modelo de alta margem com baixa fricção operacional, escalabilidade comprovada e receita recorrente sustentável. Com estrutura técnica mínima, clientes fidelizados e entrega contínua de valor, o crescimento da empresa é exponencial por construção e financeiramente viável com custo marginal previsível.</p>
        <p class="!mb-0 text-center text-lg"><em>Trata-se de um negócio com lógica de software, entrega de serviço e recorrência de plataforma — operando com controle, previsibilidade e alto retorno.</em></p>
      </div>

      <div class="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
        <h2 class="!mt-0 !mb-4">Escala Real Implica Novos Desafios — e a NOCTA.I Já Tem a Resposta</h2>
        
        <p class="!mb-4">A NOCTA.I foi construída para operar com alta margem, baixo custo fixo e processos inteligentes. No entanto, à medida que a base de clientes cresce, a natureza da operação naturalmente evolui — e com ela, surgem novas demandas que exigem preparação estrutural.</p>
        
        <p class="!mb-4">Com 200, 300, 500 clientes ativos, a entrega manual e consultiva começa a enfrentar gargalos previsíveis:</p>
        
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">👥</div>
            <p class="!mb-0 text-sm">A necessidade de mais analistas para implantação</p>
          </div>
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">⚡</div>
            <p class="!mb-0 text-sm">A sobrecarga no pós-venda com múltiplas contas simultâneas</p>
          </div>
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">📊</div>
            <p class="!mb-0 text-sm">O aumento na complexidade de controle e padronização entre projetos</p>
          </div>
        </div>
        
        <p class="!mb-4">Esses sinais não são falhas — são marcos naturais de quem está escalando de forma saudável. E ao contrário de muitas empresas que são pegas de surpresa nesse momento, a NOCTA.I já estruturou a resposta: <strong>seu próprio ambiente SaaS</strong>.</p>
        
        <p class="!mb-4">Estamos iniciando a fase de construção de um produto interno, pensado para:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Organizar a implantação por etapas automáticas</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Reduzir drasticamente o esforço manual no setup</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Padronizar o onboarding de IA com lógicas parametrizadas</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Integrar o cliente diretamente na evolução da sua instância</span>
            </div>
          </div>
        </div>
        
        <p class="!mb-4">Com esse salto, deixamos de ser uma empresa de "implantações manuais com IA" para nos tornarmos uma <strong>plataforma SaaS de IA aplicada</strong>, com alto grau de automação, múltiplos fluxos prontos e capacidade real de escalar para mil clientes — sem aumentar proporcionalmente a equipe.</p>
        
        <div class="bg-purple-900/40 rounded-lg p-4 text-center">
          <p class="!mb-0 text-lg"><strong>Este é o momento exato de virar a chave. A NOCTA.I está entrando na fase 2 do seu crescimento: a da estrutura que suporta escala de verdade.</strong></p>
        </div>
      </div>
    `},{id:"saas-segunda-fase",title:"SaaS da NOCTA.I – 2ª Fase",content:`
      <h1>Documento Executivo - SaaS da NOCTA.I (Visão de Escala)</h1>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Contexto Estratégico</h2>
        <p class="!mb-0">A NOCTA.I, consolidada como empresa de automação inteligente com IA aplicada, avança para a construção de sua estrutura de escala definitiva: o SaaS da NOCTA.I. Este novo braço da operação nasce para resolver o maior desafio de empresas digitais em crescimento: manter a excelência de entrega sem inflar o time operacional. É a materialização de um backoffice invisível, inteligente, modular e escalável.</p>
      </div>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A entrega que hoje depende de processos assistidos por humanos passa a ser gerenciada por uma interface de gestão integrada, simples, intuitiva e com performance real comprovada.</p>
        <p class="!mb-0">Este documento detalha a visão estratégica, técnica e comercial do SaaS da NOCTA.I, preparado para escalar de dezenas para milhares de clientes sem fricção.</p>
      </div>

      <h2>🔍 Visão Geral do SaaS da NOCTA.I</h2>
      
      <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4 mb-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-300">3 meses</div>
          <div class="text-sm text-gray-300">de produção</div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">O SaaS da NOCTA.I é uma plataforma all-in-one de automação operacional e comercial com inteligência artificial aplicada. Ele reúne em um único sistema todos os elementos necessários para que uma empresa organize, automatize e escale seus fluxos — sem necessidade de equipe técnica.</p>
        
        <h3 class="!mt-0 !mb-4">Estrutura All-In-One</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>CRM visual estilo kanban</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Editor visual de bots com IA treinável</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Calendário organizacional colaborativo</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Notas estilo Notion</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Dashboard 360 de operação, leads, vendas e desempenho</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>WhatsApp e canais integrados (Chat interno de sites, e-mail, etc.)</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4 md:col-span-2">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Chat interno para site e fluxos automatizados com voz e imagem</span>
            </div>
          </div>
        </div>
        
        <h3 class="!mt-6 !mb-4">Funções Avançadas</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Treinamento de IA com dados reais do cliente</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Histórico de interações completo</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Biblioteca de fluxos prontos por segmento</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Configuração de funil de vendas e atendimento por nicho</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Monitoramento em tempo real das interações da IA</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Relatórios e métricas com dados acionáveis</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Abertura de chamados técnicos via painel</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Teste em tempo real de fluxos configurados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Operação Assistida ou Autônoma</h3>
        <p class="!mb-4">O cliente poderá:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-black/40 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-teal-300">Configuração Autônoma</h4>
            <p class="!mb-0 text-sm">Realizar toda a configuração sozinho, com assistente guiado e tutoriais visuais</p>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-teal-300">Implementação Consultiva</h4>
            <p class="!mb-0 text-sm">Solicitar implementação consultiva pela própria equipe da NOCTA.I</p>
          </div>
        </div>
        <div class="bg-green-900/30 rounded-lg p-4">
          <p class="!mb-0 text-center"><strong>O sistema será intuitivo o suficiente para permitir IA 100% ativa em menos de 1 hora</strong>, mesmo para usuários sem conhecimento técnico.</p>
        </div>
      </div>

      <h2>🎯 Objetivo Central</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Automatizar o setup e entrega</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Reduzir a dependência de equipe interna</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Escalar a operação da NOCTA.I com margem alta</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Transformar o serviço em plataforma replicável e comercializável</span>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">🧠 Posicionamento Estratégico</h3>
          <p class="!mb-4 text-sm">O SaaS da NOCTA.I opera no cruzamento entre:</p>
          <div class="space-y-2">
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">AI Ops</strong> — automação de processos com IA aplicada
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">Human Augmentation</strong> — IA como força de apoio à operação humana
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">Tech-enabled Services</strong> — modelo híbrido de SaaS + inteligência estratégica
            </div>
          </div>
          <p class="!mb-0 text-sm mt-4">Esse posicionamento permite manter o valor percebido alto, justificar tickets premium e evitar comparações com soluções genéricas de mercado.</p>
        </div>
      </div>

      <h2>💎 Diferenciais e Qualidades</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-green-300">Lock-in Natural</h3>
          <p class="!mb-0 text-sm">O cliente permanece pelo resultado, não pelo contrato</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-blue-300">Preço Unificado</h3>
          <p class="!mb-0 text-sm">Setup e mensalidade no mesmo valor: de R$ 997 a R$ 3.497</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Entrega Imediata</h3>
          <p class="!mb-0 text-sm">Entrega invisível e imediata - 1-2 horas</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-teal-300">IA Evolutiva</h3>
          <p class="!mb-0 text-sm">IA que aprende com dados reais da empresa, e evolui com ela</p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-orange-300">Redução Real</h3>
          <p class="!mb-0 text-sm">Redução real de headcount operacional</p>
        </div>
        
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-red-300">Zero Fricção</h3>
          <p class="!mb-0 text-sm">Não exige conhecimento técnico</p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-yellow-300">Time Mínimo</h3>
          <p class="!mb-0 text-sm">Time mínimo com capacidade de atendimento exponencial</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-indigo-300">Customização Total</h3>
          <p class="!mb-0 text-sm">Customização estética, tonal e lógica por nicho ou cliente</p>
        </div>
        
        <div class="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-pink-300">Sistema Modular</h3>
          <p class="!mb-0 text-sm">CRM, bot, calendário, IA — integrados ou avulsos</p>
        </div>
        
        <div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-cyan-300">White-label</h3>
          <p class="!mb-0 text-sm">White-label possível para agências ou times parceiros</p>
        </div>
        
        <div class="bg-gradient-to-br from-lime-900/30 to-lime-800/20 border border-lime-500/30 rounded-xl p-6 md:col-span-2">
          <h3 class="!mt-0 !mb-3 text-lime-300">Internacionalização Pronta</h3>
          <p class="!mb-0 text-sm">Sistema em português, inglês e espanhol</p>
        </div>
      </div>

      <h2>💰 Modelo Comercial e Receita</h2>
      
      <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="!mt-0 !mb-4">Estrutura de Preços</h3>
            <div class="bg-black/40 rounded-lg p-4 mb-4">
              <div class="text-center">
                <div class="text-sm text-green-300">Setup inicial = Mensalidade</div>
                <div class="text-2xl font-bold text-white">R$ 997 - R$ 3.497</div>
              </div>
            </div>
            <p class="!mb-0 text-sm">Valores variam conforme complexidade e volume</p>
          </div>
          
          <div>
            <h3 class="!mt-0 !mb-4">Fatores de Precificação</h3>
            <div class="space-y-2">
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Número de atendentes</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Volume de atendimentos por dia</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Números integrados do WhatsApp</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Quantidade de fluxos simultâneos e bots ativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 grid md:grid-cols-2 gap-4">
          <div class="bg-blue-900/30 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-blue-300">Receita Recorrente</h4>
            <p class="!mb-0 text-sm">MRR crescente, com alta previsibilidade e churn reduzido</p>
          </div>
          <div class="bg-purple-900/30 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-purple-300">Modelo Comercial</h4>
            <p class="!mb-0 text-sm">Fechamento por closers ou self-service via plataforma</p>
          </div>
        </div>
      </div>

      <h2>📈 Projeção de Escala e Receita</h2>
      
      <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-6">
        <div class="text-center">
          <div class="text-sm text-purple-300">Ticket Médio Base</div>
          <div class="text-3xl font-bold text-white">R$ 1.997</div>
          <div class="text-xs text-gray-400">(Setup + Mensalidade)</div>
        </div>
      </div>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-purple-900/30">
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Clientes Ativos</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Bruta Mensal</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Anual Estimada</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">500</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 998.500</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 11.982.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">1.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.997.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 23.964.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">2.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 3.994.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 47.928.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">3.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 5.991.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 71.892.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">5.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 9.985.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 119.820.000</td>
            </tr>
            <tr class="hover:bg-white/5 bg-purple-900/20">
              <td class="border border-purple-500/20 p-4 text-white font-bold">10.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold text-lg">R$ 19.970.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold text-lg">R$ 239.640.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Margem Operacional Estimada</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Custo por cliente</div>
              <div class="text-lg font-bold text-white">R$ 300–500 (máx.)</div>
              <div class="text-xs text-gray-400">servidor + API média</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-green-300">ROI estimado por cliente ativo</div>
              <div class="text-xl font-bold text-white">4x a 6x</div>
              <div class="text-xs text-gray-400">sobre o custo</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Reinvestimento Escalonado</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Primeiros 3 meses</div>
              <div class="text-2xl font-bold text-white">35%</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Até o sexto mês</div>
              <div class="text-2xl font-bold text-white">30%</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Após consolidação</div>
              <div class="text-lg font-bold text-white">Redução gradual</div>
              <div class="text-xs text-gray-400">conforme ROI e CAC diminuem</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🔐 Segurança, Privacidade e Exclusividade</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Isolamento Total</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Dados dos clientes são armazenados e processados de forma isolada</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Nenhum dado alimenta outro cliente: 100% confidencialidade</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Conversas, fluxos e IAs são exclusivos por operação</span>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Experiência Transparente</h3>
          <div class="bg-black/40 rounded-lg p-4">
            <p class="!mb-0 text-center">O cliente sente o efeito direto, <strong>sem perceber a complexidade técnica</strong></p>
          </div>
        </div>
      </div>

      <h2>📌 Fase Atual e Projeções</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Situação Atual</h3>
          <p class="!mb-0">Atualmente, o SaaS da NOCTA.I encontra-se em fase de estruturação visual e lógica.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Próxima Call (Segunda-feira)</h3>
          <p class="!mb-0">Na próxima call de segunda-feira será apresentado o primeiro protótipo funcional do front.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Primeira Versão Completa</h3>
          <p class="!mb-0">A primeira versão com funcionalidades completas estará disponível em <strong>2 meses</strong>.</p>
        </div>
        
        <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Funcionalidade Estratégica Adicional</h3>
          <p class="!mb-0">Em 3 a 4 meses, será incorporada uma funcionalidade estratégica adicional: o <strong>NOCTAPAY</strong>, um sistema proprietário de processamento de pagamentos.</p>
        </div>
      </div>

      <h2>💳 NOCTAPAY — Monetização por Transação</h2>
      
      <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">O NOCTAPAY será o braço financeiro da NOCTA.I, integrado ao SaaS e pronto para:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Processar cobranças de mensalidades (ex: clientes de uma agência)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Receber pagamentos de produtos ou serviços (ex: consulta médica)</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Oferecer taxas reduzidas para fidelização</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Lucrar sobre transações (entrada, saída e cobrança)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-green-900/30 rounded-lg p-4 mb-4">
          <p class="!mb-2">Essa funcionalidade criará uma <strong>nova linha de receita contínua</strong>, com monetização escalável por transação.</p>
          <p class="!mb-0">Será possível gerar uma nova forma de lock-in operacional: o cliente não apenas usa a IA, como também cobra e recebe por ela na mesma plataforma.</p>
        </div>
        
        <div class="bg-purple-900/30 rounded-lg p-4 text-center">
          <p class="!mb-0">Na próxima fase, explicaremos em detalhe onde mora o verdadeiro dinheiro — e como o NOCTAPAY transforma o SaaS em uma <strong>plataforma financeira lucrativa</strong>.</p>
        </div>
      </div>
    `},{id:"noctapay-terceira-fase",title:"NOCTAPAY – 3ª Fase",content:`
      <h1>Documento Estratégico de Escopo — NOCTAPAY by NOCTA.I</h1>
      
      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0 text-center"><em>(nome fictício)</em></p>
      </div>
      
      <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0 text-center"><strong>Vamos explicar em detalhes na call de segunda-feira, o que é esse projeto, o que é swipy</strong></p>
      </div>
      
      <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Visão Geral</h2>
        <p class="!mb-4">O NOCTAPAY é a unidade de serviços financeiros digitais da NOCTA.I, concebida como extensão natural do ecossistema de automação com IA. Projetada para ser a infraestrutura de pagamento dos nossos clientes (médicos, clínicas, agências e outros prestadores de serviço), a solução opera como uma plataforma completa, segura, instantânea e escalável.</p>
        
        <h2 class="!mt-6 !mb-4">Objetivo</h2>
        <p class="!mb-0">Oferecer uma conta digital completa, com funcionalidades de gateway, processamento de pagamentos, gestão financeira e cobrança automatizada via WhatsApp, integrada nativamente à plataforma NOCTA.I e com potencial de expansão para o mercado externo.</p>
      </div>

      <h2>1. Estrutura Operacional</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Infraestrutura</h3>
          <div class="bg-black/40 rounded-lg p-4">
            <p class="!mb-0 text-center"><strong>white-label via Swipy</strong></p>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Custo Operacional Base</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Por conta ativa/mês</div>
              <div class="text-xl font-bold text-white">R$ 2,50</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Por transação executada</div>
              <div class="text-xl font-bold text-white">R$ 1,00</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Modelo de Receita</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-black/40 rounded-lg p-4">
            <div class="text-sm text-green-300">Receita por transação</div>
            <div class="text-2xl font-bold text-white">R$ 1,49 fixo + 1,99%</div>
            <div class="text-xs text-gray-400">sobre o valor</div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="text-sm text-green-300">Estratégia</div>
            <div class="text-lg font-bold text-white">Foco em volume e escala</div>
            <div class="text-xs text-gray-400">com margens operacionais saudáveis</div>
          </div>
        </div>
      </div>

      <h2>2. Funcionalidades-Chave (Fase 1)</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="space-y-4">
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Conta Digital</h3>
            <p class="!mb-0 text-sm">Criação de conta digital com CPF/CNPJ</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">PIX Completo</h3>
            <p class="!mb-0 text-sm">Geração e recebimento de PIX com chave própria</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Boletos Personalizados</h3>
            <p class="!mb-0 text-sm">Gerador de boletos personalizados</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Recebimento Instantâneo</h3>
            <p class="!mb-0 text-sm">Recebimento instantâneo (sem retenção de 30 dias como concorrentes)</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Interface Dupla</h3>
            <p class="!mb-0 text-sm">Interface no WhatsApp + dashboard completo via plataforma</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Recorrência Automatizada</h3>
            <p class="!mb-0 text-sm">Recorrência automatizada para assinaturas e cobranças fixas</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Relatórios em Tempo Real</h3>
            <p class="!mb-0 text-sm">Relatórios financeiros em tempo real e extrato completo</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Controle de Repasses</h3>
            <p class="!mb-0 text-sm">Controle de repasses e saques + Criação de links de pagamento simples</p>
          </div>
        </div>
      </div>

      <h2>3. Funcionalidades Futuras (Fase 2+)</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-teal-300">Cartão Físico e Virtual</h3>
          <p class="!mb-0 text-sm">Cartão físico e virtual para uso do saldo</p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-orange-300">Integração com IA NOCTA</h3>
          <p class="!mb-0 text-sm">Integração com IA NOCTA para cobranças automáticas e lembretes por WhatsApp</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-indigo-300">Split de Pagamentos</h3>
          <p class="!mb-0 text-sm">Automação de split de pagamentos (ex: clínica e médico)</p>
        </div>
        
        <div class="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-pink-300">Crédito para Recorrências</h3>
          <p class="!mb-0 text-sm">Crédito para recorrências</p>
        </div>
        
        <div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-cyan-300">White-label para Agências</h3>
          <p class="!mb-0 text-sm">Plano de white-label para agências e redes</p>
        </div>
        
        <div class="bg-gradient-to-br from-lime-900/30 to-lime-800/20 border border-lime-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-lime-300">Reemissão Automática</h3>
          <p class="!mb-0 text-sm">Reemissão de cobranças automáticas e vencimentos escalonados</p>
        </div>
      </div>

      <h2>4. Diferenciais Estratégicos</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Liberação de valor no mesmo dia</h3>
          <p class="!mb-0">Diferencial competitivo crucial em relação aos concorrentes que retêm por 30 dias</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Dashboard completo + gestão via WhatsApp</h3>
          <p class="!mb-0">Interface dupla que atende tanto usuários técnicos quanto operacionais</p>
        </div>
        
        <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Totalmente integrado com NOCTA.I</h3>
          <p class="!mb-0">Fluxos de venda, operação e cobrança em um ecossistema único</p>
        </div>
        
        <div class="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Modelo escalável para qualquer segmento</h3>
          <p class="!mb-0">Inicialmente clientes NOCTA.I, mas preparado para expansão</p>
        </div>
        
        <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Transações protegidas com KYC/Compliance completo</h3>
          <p class="!mb-0">Via Swipy, garantindo segurança e conformidade regulatória</p>
        </div>
        
        <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Zero necessidade de intermediários</h3>
          <p class="!mb-0">Plataformas externas eliminadas do processo</p>
        </div>
        
        <div class="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Economia de tempo e custo para o cliente final</h3>
          <p class="!mb-0">Redução significativa de fricção operacional e financeira</p>
        </div>
      </div>

      <h2>5. Escalabilidade e Projeção</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Estratégia de Crescimento</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Início com base atual de clientes NOCTA.I (médicos, clínicas e agências)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Expansão para mercado aberto (3º mês de operação)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Capacidade de operar milhares de contas com controle de margem</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Potencial de faturamento exponencial com modelo por transação + conta ativa</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Potencial Financeiro</h3>
          <div class="bg-black/40 rounded-lg p-4 mb-4">
            <div class="text-center">
              <div class="text-sm text-green-300">Modelo de Receita</div>
              <div class="text-lg font-bold text-white">Transação + Conta Ativa</div>
            </div>
          </div>
          
          <div class="bg-purple-900/30 rounded-lg p-4">
            <div class="text-center">
              <div class="text-sm text-purple-300">Escalabilidade</div>
              <div class="text-xl font-bold text-white">Milhares de Contas</div>
              <div class="text-xs text-gray-400">com controle de margem</div>
            </div>
          </div>
        </div>
      </div>

      <h2>6. Cronograma Previsto</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="space-y-4">
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Mês 1-2</h3>
            <p class="!mb-0 text-sm">Prototipação, integração com Swipy, primeiros testes internos</p>
          </div>
          
          <div class="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-green-300">Mês 3</h3>
            <p class="!mb-0 text-sm">Primeira versão funcional operando com contas reais dos nossos clientes</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Mês 4</h3>
            <p class="!mb-0 text-sm">Lançamento completo da NOCTAPAY para toda a base interna</p>
          </div>
          
          <div class="bg-orange-900/30 border border-orange-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-orange-300">Mês 5+</h3>
            <p class="!mb-0 text-sm">Expansão para mercado externo (agências, profissionais liberais etc.)</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8">
        <h2 class="!mt-0 !mb-4 text-center">Considerações Finais</h2>
        <p class="!mb-4 text-center">A NOCTAPAY não é apenas um gateway de pagamento. É a próxima etapa na jornada da NOCTA.I rumo ao equity real em tecnologia financeira. Atuando como infra de pagamentos, banco digital leve e plataforma transacional, ela posiciona a NOCTA.I como protagonista também no universo financeiro.</p>
        <p class="!mb-0 text-center text-xl"><em><strong>A NOCTAPAY é o futuro financeiro invisível, simples e 100% dentro da experiência NOCTA.I.</strong></em></p>
      </div>
    `},{id:"roadmap-estrategico",title:"Roadmap Estratégico NOCTA.I",content:`
      <h1>🚀 ROADMAP DE PRODUTOS — NOCTA.I</h1>

      <div class="space-y-8">
        <!-- FASE 1 -->
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">🔥</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-red-300">FASE 1 — Operações Autônomas com Agentes de IA</h2>
              <p class="!mb-0 text-gray-300 italic">(Modelo atual)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-red-200">Objetivo</h3>
            <p class="!mb-0">Validação do modelo operacional com IA customizada, recorrência, margem alta e prova de valor em campo real.</p>
          </div>

          <h3 class="!mt-6 !mb-4 text-red-200">🔧 Produtos e Entregas</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">SALES AI™</h4>
              <p class="!mb-0 text-sm">IA para vendas, atendimento, follow-up e reativação</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">OPS AI™</h4>
              <p class="!mb-0 text-sm">IA para operação administrativa, suporte técnico e cobrança</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">IA Multicanal</h4>
              <p class="!mb-0 text-sm">Texto, voz (personalizada), imagem e documentos</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Customização Profunda</h4>
              <p class="!mb-0 text-sm">IA treinada com dados, vocabulário e lógica do cliente</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Entrega Assistida Manual</h4>
              <p class="!mb-0 text-sm">Setup feito pela equipe, com acompanhamento</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Modelo Comercial Ativo</h4>
              <p class="!mb-0 text-sm">Fechamentos 1:1 via closers e consultoria</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4 md:col-span-2">
              <h4 class="!mt-0 !mb-2 text-red-300">Contratos Recorrentes</h4>
              <p class="!mb-0 text-sm">3, 6 e 12 meses - MRR previsível com alta margem</p>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-red-200">📊 Indicadores-Chave</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-xl p-6">
              <h4 class="!mt-0 !mb-3 text-purple-300">SALES AI™ — IA para Vendas e Atendimento</h4>
              <div class="space-y-2">
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-green-300">Ticket de entrada</div>
                  <div class="text-lg font-bold">R$ 3.000</div>
                  <div class="text-xs text-gray-400">ex: consultório, profissional liberal</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-blue-300">Ticket avançado</div>
                  <div class="text-lg font-bold">R$ 10.000</div>
                  <div class="text-xs text-gray-400">ex: grandes clínicas, operações multicanais</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                  <div class="text-xl font-bold">R$ 5.200</div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl p-6">
              <h4 class="!mt-0 !mb-3 text-blue-300">OPS AI™ — IA para Operação Administrativa e Backoffice</h4>
              <div class="space-y-2">
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-green-300">Ticket de entrada</div>
                  <div class="text-lg font-bold">R$ 7.000</div>
                  <div class="text-xs text-gray-400">ex: SaaS simples, agências</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-blue-300">Ticket avançado</div>
                  <div class="text-lg font-bold">R$ 25.000</div>
                  <div class="text-xs text-gray-400">ex: fintechs, plataformas, operações intensas</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                  <div class="text-xl font-bold">R$ 10.000</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-green-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-green-300">Implementação</div>
              <div class="text-xl font-bold">100% lucro</div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-blue-300">Mensalidade</div>
              <div class="text-xl font-bold">70-80%</div>
              <div class="text-xs text-gray-400">de margem</div>
            </div>
            <div class="bg-red-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-red-300">Custo por operação</div>
              <div class="text-xl font-bold">R$200</div>
              <div class="text-xs text-gray-400">(MENSAL)</div>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-purple-300">Ticket médio SALES AI</div>
              <div class="text-xl font-bold">R$5.200</div>
            </div>
          </div>

          <div class="bg-green-900/30 rounded-lg p-4 text-center">
            <p class="!mb-0 font-bold">Base pronta para escalar → entrada na Fase 2</p>
          </div>
        </div>

        <!-- FASE 2 -->
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">⚙️</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-blue-300">FASE 2 — SaaS NOCTA.I</h2>
              <p class="!mb-0 text-gray-300 italic">(Automação da Escala)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-blue-200">Objetivo</h3>
            <p class="!mb-0">Transformar a entrega em plataforma, removendo fricções operacionais e permitindo escalar para milhares de clientes com time enxuto.</p>
          </div>

          <h3 class="!mt-6 !mb-4 text-blue-200">🧩 Componentes do Produto</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="!mt-0 !mb-3 text-blue-300">Plataforma SaaS All-in-One</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">CRM visual (kanban)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Editor de bots com IA treinável</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Calendário + Notas estilo Notion</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Dashboard 360 (leads, vendas, IA, suporte)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Integração com WhatsApp, chat e e-mail</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="!mt-0 !mb-3 text-blue-300">Operação Autônoma e Guiada</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Setup com assistente interativo</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Fluxos prontos por segmento</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">White-label para agências</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Múltiplos idiomas (PT, ES, EN)</span>
                  </div>
                </div>
              </div>
              
              <h4 class="!mt-6 !mb-3 text-blue-300">Modelo Comercial SaaS</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Setup = Mensalidade (R$997 a R$3.497)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Venda assistida (closer) ou self-service</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">MRR previsível e altamente escalável</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-blue-200">📆 Prazos e Marcos</h3>
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-yellow-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-yellow-300">Mês 0-2</h4>
              <p class="!mb-0 text-sm">Protótipo visual + testes internos</p>
            </div>
            <div class="bg-green-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-green-300">Mês 3</h4>
              <p class="!mb-0 text-sm">Primeira versão funcional pública</p>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-purple-300">Mês 4+</h4>
              <p class="!mb-0 text-sm">Onboarding de novos clientes via SaaS</p>
            </div>
          </div>

          <div class="bg-green-900/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-4 text-green-200">🔒 Resultados Esperados</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Margem 80%</div>
                <div class="text-sm text-gray-400">mesmo com base de 1.000+ clientes</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Redução de CAC</div>
                <div class="text-sm text-gray-400">e suporte</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Equipe mínima</div>
                <div class="text-sm text-gray-400">sustenta base massiva</div>
              </div>
            </div>
          </div>
        </div>

        <!-- FASE 3 -->
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">💳</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-green-300">FASE 3 — NOCTAPAY</h2>
              <p class="!mb-0 text-gray-300 italic">(Infraestrutura Financeira Integrada)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-green-200">Objetivo</h3>
            <p class="!mb-0">Monetizar transações dos clientes NOCTA.I e oferecer solução de pagamentos white-label e escalável.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="!mt-0 !mb-4 text-green-200">🏦 Funcionalidades Core</h3>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Conta digital (CPF/CNPJ)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Geração e recebimento de PIX</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Boletos personalizados e links de pagamento</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Dashboard + Gestão via WhatsApp</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Integração total com NOCTA.I SaaS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="!mt-0 !mb-4 text-green-200">🔮 Funcionalidades Futuras (Fase 2+ do NOCTAPAY)</h3>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Cartão físico e virtual</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Split de pagamento (ex: clínica + médico)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Cobrança recorrente automatizada com IA</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Reemissão automática + vencimentos escalonados</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">White-label para agências</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-green-200">📈 Modelo Financeiro</h3>
          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-blue-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-blue-300">Receita por conta ativa</div>
              <div class="text-xl font-bold">R$2,50</div>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-purple-300">Receita por transação</div>
              <div class="text-xl font-bold">R$1,49 + 1,99%</div>
            </div>
            <div class="bg-orange-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-orange-300">Margem</div>
              <div class="text-xl font-bold">4x a 6x</div>
              <div class="text-xs text-gray-400">sobre o custo por transação</div>
            </div>
            <div class="bg-teal-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-teal-300">Base escalável</div>
              <div class="text-xl font-bold">Lock-in financeiro</div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-green-200">🗓 Cronograma</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-yellow-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-yellow-300">Mês 0-2</h4>
                <p class="!mb-0 text-sm">Integração Swipy + testes reais</p>
              </div>
              <div class="bg-green-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-green-300">Mês 3</h4>
                <p class="!mb-0 text-sm">Primeiros clientes ativos</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="bg-blue-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-blue-300">Mês 4</h4>
                <p class="!mb-0 text-sm">Lançamento completo na base NOCTA.I</p>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-purple-300">Mês 5+</h4>
                <p class="!mb-0 text-sm">Expansão para mercado externo (agências, profissionais liberais etc.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TABELA RESUMO -->
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8">
          <h2 class="!mt-0 !mb-6 text-center text-purple-200">📌 CONCLUSÃO VISUAL DO ROADMAP</h2>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr class="bg-purple-900/30">
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Fase</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Produto-Chave</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Entregas Principais</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Meta Estratégica</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">🔥</span>
                      <span class="font-bold text-red-300">1</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">SALES AI + OPS AI</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Agentes de IA 100% customizados e operacionais</td>
                  <td class="border border-purple-500/20 p-4 text-green-300">Validar entrega com alta margem</td>
                </tr>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">⚙️</span>
                      <span class="font-bold text-blue-300">2</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">SaaS NOCTA.I</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Plataforma autônoma e escalável com IA integrada</td>
                  <td class="border border-purple-500/20 p-4 text-blue-300">Escalar para 1.000+ clientes com time leve</td>
                </tr>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">💳</span>
                      <span class="font-bold text-green-300">3</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">NOCTAPAY</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Plataforma de pagamentos integrada e white-label</td>
                  <td class="border border-purple-500/20 p-4 text-green-300">Monetizar transações + lock-in financeiro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `},{id:"proposta-investimento",title:"Proposta de Investimento",content:`
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Proposta de Investimento — NOCTA.I
        </h1>
        <div class="max-w-3xl mx-auto">
          <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 class="!mt-0 !mb-4 text-purple-200">Resumo Executivo</h2>
            <p class="!mb-0 text-lg leading-relaxed">A NOCTA.I é uma empresa de tecnologia com foco em automação inteligente por meio de IA aplicada, com modelo híbrido SaaS + Service, alta margem operacional e capacidade de escalar com estrutura enxuta. Estamos entrando na fase de consolidação e expansão, com necessidade de investimento estratégico para os próximos 3 meses.</p>
          </div>
        </div>
      </div>

      <div class="space-y-12">
        <!-- Proposta Societária -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Proposta Societária Atual</h2>
          <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-2xl p-8">
            <p class="!mb-8 text-center text-lg">Distribuição societária proposta:</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">J</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-purple-300 font-bold">Jon</h3>
                <div class="text-3xl font-bold text-white">45%</div>
              </div>
              
              <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">T</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-blue-300 font-bold">Thiago</h3>
                <div class="text-3xl font-bold text-white">30%</div>
              </div>
              
              <div class="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">D</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-green-300 font-bold">Diego</h3>
                <div class="text-3xl font-bold text-white">20%</div>
              </div>
              
              <div class="bg-gradient-to-br from-orange-900/40 to-orange-800/30 border border-orange-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">E</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-orange-300 font-bold">Ezequiel</h3>
                <div class="text-sm text-gray-400 mb-1">(desenvolvedor principal)</div>
                <div class="text-3xl font-bold text-white">5%</div>
              </div>
            </div>
            
            <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <p class="!mb-0 text-center"><strong>Nota:</strong> A divisão considera esforço técnico, capital intelectual, participação estratégica e estruturação prévia do negócio.</p>
            </div>
          </div>
        </section>

        <!-- Estimativa de Custos -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Estimativa de Custos — Fase Inicial (3 meses)</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Desenvolvimento -->
            <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-blue-300 text-xl font-bold">💻 Desenvolvimento</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-blue-200">DEV Ezequiel</span>
                    <span class="text-white font-bold">R$1.900/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-blue-300">R$ 5.700</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-blue-200">DEV Junior</span>
                    <span class="text-white font-bold">R$1.000/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-blue-300">R$ 3.000</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operações e Growth -->
            <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-green-300 text-xl font-bold">📈 Operações e Growth</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-green-200">Closer (comercial)</span>
                    <span class="text-white font-bold">R$2.500/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-green-300">R$ 7.500</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-green-200">Tráfego pago</span>
                    <span class="text-white font-bold">R$2.000 a R$3.000/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-green-300">R$ 7.500</span>
                    <span class="text-sm text-gray-400 ml-2">(estimativa média)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Infraestrutura -->
            <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-purple-300 text-xl font-bold">🏗️ Infraestrutura e Formalização</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Servidor</span>
                    <span class="text-white font-bold">R$175/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 525</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Contador</span>
                    <span class="text-white font-bold">R$350/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 1.050</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Abertura de CNPJ e legalização</span>
                    <span class="text-white font-bold">Único</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 1.000</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reserva de Caixa -->
            <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-orange-300 text-xl font-bold">💰 Reserva de Caixa Estratégica</h3>
              <div class="bg-black/40 rounded-lg p-6 text-center">
                <div class="text-4xl font-bold text-orange-300 mb-4">R$ 10.000</div>
                <p class="!mb-0 text-orange-200">Caixa de segurança para ajustes, upgrades e oscilações</p>
              </div>
            </div>
          </div>

          <!-- Total -->
          <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-2xl p-8">
            <h3 class="!mt-0 !mb-6 text-center text-2xl font-bold text-purple-200">Total estimado para 3 meses</h3>
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-300 mb-2">Custos fixos</div>
                <div class="text-2xl font-bold text-white">R$ 26.275</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-300 mb-2">Reserva operacional</div>
                <div class="text-2xl font-bold text-white">R$ 10.000</div>
              </div>
              <div class="bg-purple-900/40 rounded-lg p-4 text-center">
                <div class="text-sm text-purple-300 mb-2">Total</div>
                <div class="text-3xl font-bold text-white">R$ 36.275</div>
              </div>
            </div>
            <div class="bg-green-900/30 border border-green-500/30 rounded-xl p-6 text-center">
              <p class="!mb-0 text-lg"><strong>Podemos considerar um investimento de <span class="text-green-300 text-xl font-bold">R$ 35.000</span> como base inicial de negociação.</strong></p>
            </div>
          </div>
        </section>

        <!-- Observações Importantes -->
        <section>
          <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-2xl p-8">
            <h2 class="!mt-0 !mb-6 text-yellow-300 text-2xl font-bold text-center">⚠️ Observações Importantes</h2>
            <div class="bg-black/40 rounded-xl p-6">
              <p class="!mb-0 text-center text-lg">Este valor <strong>não é fixo nem fechado</strong>: estamos abertos a propostas estruturais e sugestões estratégicas de composição societária, aporte ou modelo de participação.</p>
            </div>
          </div>
        </section>

        <!-- Reinvestimento e Projeção -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Reinvestimento e Projeção de Lucro</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-indigo-300 text-xl font-bold">📊 Estratégia de Reinvestimento</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-indigo-200">Primeiros 3 meses</span>
                    <span class="text-2xl font-bold text-indigo-300">35%</span>
                  </div>
                  <p class="!mb-0 text-sm text-gray-400">da receita será reinvestida diretamente em estrutura, tecnologia, atendimento e tração comercial</p>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-indigo-200">No primeiro ano</span>
                    <span class="text-2xl font-bold text-indigo-300">30%</span>
                  </div>
                  <p class="!mb-0 text-sm text-gray-400">reinvestimento estratégico, proporcional ao crescimento</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-teal-300 text-xl font-bold">🚀 Modelo Escalável</h3>
              <div class="bg-black/40 rounded-xl p-6">
                <p class="!mb-4">O modelo da NOCTA.I permite crescimento gradual com baixo custo incremental por cliente, garantindo:</p>
                <div class="space-y-2">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span class="text-sm">Alta margem</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span class="text-sm">Escalabilidade sem capital intensivo contínuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <p class="!mb-0 text-center">É totalmente possível em caso de mentorias, consultorias para melhorar a performance da NOCTA.I</p>
          </div>
        </section>

        <!-- Conclusão -->
        <section>
          <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-2xl p-8 text-center">
            <h2 class="!mt-0 !mb-6 text-3xl font-bold text-purple-200">Conclusão</h2>
            <p class="!mb-6 text-lg leading-relaxed">A proposta de investimento visa acelerar a estruturação da entrega como SaaS + IA operacional, consolidar o crescimento de receita recorrente e gerar base sólida para a próxima rodada de expansão (incluindo NOCTA PAY, white-labels e internacionalização).</p>
            <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <p class="!mb-0 text-xl font-bold text-green-300">Estamos à disposição para apresentar o plano completo, revisar pontos específicos e construir a melhor sociedade possível para dominar o mercado de IA aplicada ao atendimento e operação automatizada.</p>
            </div>
          </div>
        </section>
      </div>
    `}],Pp=({currentDocumentIndex:e})=>{const t=zt[e];return t?I.jsx("div",{className:"min-h-screen pt-16 md:pt-20 pb-20 md:pb-24 px-4 md:px-6",children:I.jsx("div",{className:"max-w-4xl mx-auto",children:I.jsx("div",{className:"bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl",children:I.jsx("div",{className:`prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-2xl md:prose-h1:text-4xl prose-h1:mb-6 md:prose-h1:mb-8 prose-h1:text-center prose-h1:bg-gradient-to-r prose-h1:from-purple-400 prose-h1:to-purple-600 prose-h1:bg-clip-text prose-h1:text-transparent
              prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mt-8 md:prose-h2:mt-12 prose-h2:mb-4 md:prose-h2:mb-6 prose-h2:text-purple-300 prose-h2:border-b prose-h2:border-purple-500/30 prose-h2:pb-2
              prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-6 md:prose-h3:mt-8 prose-h3:mb-3 md:prose-h3:mb-4 prose-h3:text-purple-200
              prose-h4:text-base md:prose-h4:text-lg prose-h4:mt-4 md:prose-h4:mt-6 prose-h4:mb-2 md:prose-h4:mb-3 prose-h4:text-purple-100
              prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-purple-200 prose-em:italic
              prose-ul:space-y-2 prose-li:text-gray-200
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-900/20 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6
              prose-code:text-purple-300 prose-code:bg-purple-900/30 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:bg-purple-900/30 prose-th:border prose-th:border-purple-500/30 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-purple-200
              prose-td:border prose-td:border-purple-500/20 prose-td:p-3 prose-td:text-gray-200`,dangerouslySetInnerHTML:{__html:t.content}})})})}):null};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Op={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ru=(e,t)=>{const r=Be.forwardRef(({color:n="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:i,...u},v)=>Be.createElement("svg",{ref:v,...Op,width:l,height:l,stroke:n,strokeWidth:o?Number(s)*24/Number(l):s,className:["lucide",`lucide-${zp(e)}`,a].join(" "),...u},[...t.map(([f,m])=>Be.createElement(f,m)),...Array.isArray(i)?i:[i]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=ru("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=ru("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Mp=({onPrevious:e,onNext:t,canGoPrevious:r,canGoNext:n})=>I.jsxs(I.Fragment,{children:[I.jsx("button",{onClick:e,disabled:!r,className:`fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center justify-center ${r?"bg-purple-600/80 border-purple-500/50 text-white hover:bg-purple-600 hover:scale-110 cursor-pointer shadow-lg shadow-purple-500/25":"bg-black/10 border-white/5 text-gray-600 cursor-not-allowed"}`,children:I.jsx(_p,{size:18,className:"md:w-5 md:h-5"})}),I.jsx("button",{onClick:t,disabled:!n,className:`fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center justify-center ${n?"bg-purple-600/80 border-purple-500/50 text-white hover:bg-purple-600 hover:scale-110 cursor-pointer shadow-lg shadow-purple-500/25":"bg-black/10 border-white/5 text-gray-600 cursor-not-allowed"}`,children:I.jsx(Lp,{size:18,className:"md:w-5 md:h-5"})})]}),jp=()=>I.jsx("footer",{className:"fixed bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 z-40 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3",children:I.jsxs("div",{className:"flex items-center justify-center",children:[I.jsx("div",{className:"flex items-center space-x-2 opacity-60",children:I.jsx("img",{src:"https://i.imgur.com/HA95fgE.png",alt:"NOCTA.I Icon",className:"h-4 md:h-6 w-4 md:w-6 object-contain"})}),I.jsx("div",{className:"flex-1 text-center ml-2",children:I.jsx("p",{className:"text-white text-xs md:text-sm font-medium",children:"Inteligência que opera. Tecnologia que escala."})}),I.jsx("div",{className:"w-4 md:w-6"})]})});function Dp(){var o;const[e,t]=Be.useState(0),r=()=>{e>0&&(t(e-1),window.scrollTo({top:0,behavior:"smooth"}))},n=()=>{e<zt.length-1&&(t(e+1),window.scrollTo({top:0,behavior:"smooth"}))},l=e>0,s=e<zt.length-1;return Be.useEffect(()=>{const a=i=>{i.key==="ArrowLeft"&&l?r():i.key==="ArrowRight"&&s&&n()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[e,l,s]),Be.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),I.jsxs("div",{className:"min-h-screen bg-[#121212] text-white font-['Inter',sans-serif] relative overflow-x-hidden",children:[I.jsxs("div",{className:"fixed inset-0 opacity-5 pointer-events-none",children:[I.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-purple-600/10"}),I.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(104,49,243,0.1),transparent_50%)]"})]}),I.jsx(Rp,{currentDocumentTitle:((o=zt[e])==null?void 0:o.title)||""}),I.jsx(Mp,{onPrevious:r,onNext:n,canGoPrevious:l,canGoNext:s}),I.jsx("main",{className:"relative z-10",children:I.jsx(Pp,{currentDocumentIndex:e})}),I.jsx(jp,{}),I.jsx("div",{className:"fixed bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-40",children:I.jsx("div",{className:"bg-black/20 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10",children:I.jsxs("div",{className:"flex items-center space-x-2",children:[I.jsxs("span",{className:"text-sm text-gray-400",children:[e+1," de ",zt.length]}),I.jsx("div",{className:"w-24 h-1 bg-gray-700 rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300 ease-out",style:{width:`${(e+1)/zt.length*100}%`}})})]})})})]})}tu(document.getElementById("root")).render(I.jsx(Be.StrictMode,{children:I.jsx(Dp,{})}));
