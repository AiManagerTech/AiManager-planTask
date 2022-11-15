const W1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};W1();var b={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),K1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),G1=Symbol.for("react.strict_mode"),Q1=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),J1=Symbol.for("react.forward_ref"),Z1=Symbol.for("react.suspense"),eE=Symbol.for("react.memo"),tE=Symbol.for("react.lazy"),Rf=Symbol.iterator;function nE(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,xg={};function gi(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||Tg}gi.prototype.isReactComponent={};gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=gi.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||Tg}var Ch=Th.prototype=new Ng;Ch.constructor=Th;Cg(Ch,gi.prototype);Ch.isPureReactComponent=!0;var Df=Array.isArray,Ag=Object.prototype.hasOwnProperty,xh={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ag.call(e,r)&&!Rg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zs,type:t,key:s,ref:o,props:i,_owner:xh.current}}function rE(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function iE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bf=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iE(""+t.key):e.toString(36)}function Wo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zs:case K1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+iu(o,0):r,Df(i)?(n="",t!=null&&(n=t.replace(bf,"$&/")+"/"),Wo(i,e,n,"",function(u){return u})):i!=null&&(Nh(i)&&(i=rE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Df(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+iu(s,a);o+=Wo(s,e,n,l,i)}else if(l=nE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+iu(s,a++),o+=Wo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(t,e,n){if(t==null)return t;var r=[],i=0;return Wo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},Ko={transition:null},oE={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:xh};H.Children={map:wo,forEach:function(t,e,n){wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wo(t,function(){e++}),e},toArray:function(t){return wo(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=gi;H.Fragment=q1;H.Profiler=Q1;H.PureComponent=Th;H.StrictMode=G1;H.Suspense=Z1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ag.call(e,l)&&!Rg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zs,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:X1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y1,_context:t},t.Consumer=t};H.createElement=Dg;H.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:J1,render:t}};H.isValidElement=Nh;H.lazy=function(t){return{$$typeof:tE,_payload:{_status:-1,_result:t},_init:sE}};H.memo=function(t,e){return{$$typeof:eE,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Ke.current.useCallback(t,e)};H.useContext=function(t){return Ke.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};H.useEffect=function(t,e){return Ke.current.useEffect(t,e)};H.useId=function(){return Ke.current.useId()};H.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Ke.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};H.useRef=function(t){return Ke.current.useRef(t)};H.useState=function(t){return Ke.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Ke.current.useTransition()};H.version="18.2.0";b.exports=H;var aE=b.exports,bg={exports:{}},ct={},Pg={exports:{}},Og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var B=D.length;D.push(U);e:for(;0<B;){var ce=B-1>>>1,Ee=D[ce];if(0<i(Ee,U))D[ce]=U,D[B]=Ee,B=ce;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],B=D.pop();if(B!==U){D[0]=B;e:for(var ce=0,Ee=D.length,yo=Ee>>>1;ce<yo;){var Bn=2*(ce+1)-1,ru=D[Bn],jn=Bn+1,vo=D[jn];if(0>i(ru,B))jn<Ee&&0>i(vo,ru)?(D[ce]=vo,D[jn]=B,ce=jn):(D[ce]=ru,D[Bn]=B,ce=Bn);else if(jn<Ee&&0>i(vo,B))D[ce]=vo,D[jn]=B,ce=jn;else break e}}return U}function i(D,U){var B=D.sortIndex-U.sortIndex;return B!==0?B:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function v(D){if(w=!1,m(D),!y)if(n(l)!==null)y=!0,tu(T);else{var U=n(u);U!==null&&nu(v,U.startTime-D)}}function T(D,U){y=!1,w&&(w=!1,p(I),I=-1),g=!0;var B=d;try{for(m(U),h=n(l);h!==null&&(!(h.expirationTime>U)||D&&!ie());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var Ee=ce(h.expirationTime<=U);U=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(U)}else r(l);h=n(l)}if(h!==null)var yo=!0;else{var Bn=n(u);Bn!==null&&nu(v,Bn.startTime-U),yo=!1}return yo}finally{h=null,d=B,g=!1}}var x=!1,E=null,I=-1,V=5,M=-1;function ie(){return!(t.unstable_now()-M<V)}function dt(){if(E!==null){var D=t.unstable_now();M=D;var U=!0;try{U=E(!0,D)}finally{U?jt():(x=!1,E=null)}}else x=!1}var jt;if(typeof f=="function")jt=function(){f(dt)};else if(typeof MessageChannel!="undefined"){var Vn=new MessageChannel,Af=Vn.port2;Vn.port1.onmessage=dt,jt=function(){Af.postMessage(null)}}else jt=function(){R(dt,0)};function tu(D){E=D,x||(x=!0,jt())}function nu(D,U){I=R(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,tu(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var B=d;d=U;try{return D()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=d;d=D;try{return U()}finally{d=B}},t.unstable_scheduleCallback=function(D,U,B){var ce=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ce+B:ce):B=ce,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=B+Ee,D={id:c++,callback:U,priorityLevel:D,startTime:B,expirationTime:Ee,sortIndex:-1},B>ce?(D.sortIndex=B,e(u,D),n(l)===null&&D===n(u)&&(w?(p(I),I=-1):w=!0,nu(v,B-ce))):(D.sortIndex=Ee,e(l,D),y||g||(y=!0,tu(T))),D},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(D){var U=d;return function(){var B=d;d=U;try{return D.apply(this,arguments)}finally{d=B}}}})(Og);Pg.exports=Og;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg=b.exports,lt=Pg.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,ds={};function Tr(t,e){ni(t,e),ni(t+"Capture",e)}function ni(t,e){for(ds[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var Zt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ec=Object.prototype.hasOwnProperty,lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pf={},Of={};function uE(t){return ec.call(Of,t)?!0:ec.call(Pf,t)?!1:lE.test(t)?Of[t]=!0:(Pf[t]=!0,!1)}function cE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hE(t,e,n,r){if(e===null||typeof e=="undefined"||cE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);be[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,Rh);be[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,Rh);be[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dh(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hE(e,n,i,r)&&(n=null),r||i===null?uE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),tc=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Ug=Symbol.for("react.offscreen"),Lf=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=Lf&&t[Lf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,su;function Bi(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function dE(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Dr:return"Portal";case tc:return"Profiler";case bh:return"StrictMode";case nc:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function fE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pE(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _o(t){t._valueTracker||(t._valueTracker=pE(t))}function Bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(t,e){e=e.checked,e!=null&&Dh(t,"checked",e,!1)}function oc(t,e){jg(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $f(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ji(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function zg(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,Wg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qi[e]=Qi[t]})});function Kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qi.hasOwnProperty(t)&&Qi[t]?(""+e).trim():e+"px"}function qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,Kr=null,qr=null;function Vf(t){if(t=Ks(t)){if(typeof fc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=al(e),fc(t.stateNode,t.type,e))}}function Gg(t){Kr?qr?qr.push(t):qr=[t]:Kr=t}function Qg(){if(Kr){var t=Kr,e=qr;if(qr=Kr=null,Vf(t),e)for(t=0;t<e.length;t++)Vf(e[t])}}function Yg(t,e){return t(e)}function Xg(){}var lu=!1;function Jg(t,e,n){if(lu)return t(e,n);lu=!0;try{return Yg(t,e,n)}finally{lu=!1,(Kr!==null||qr!==null)&&(Xg(),Qg())}}function ps(t,e){var n=t.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var pc=!1;if(Zt)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{pc=!1}function yE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Yi=!1,ha=null,da=!1,mc=null,vE={onError:function(t){Yi=!0,ha=t}};function wE(t,e,n,r,i,s,o,a,l){Yi=!1,ha=null,yE.apply(vE,arguments)}function EE(t,e,n,r,i,s,o,a,l){if(wE.apply(this,arguments),Yi){if(Yi){var u=ha;Yi=!1,ha=null}else throw Error(S(198));da||(da=!0,mc=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bf(t){if(Cr(t)!==t)throw Error(S(188))}function _E(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bf(i),t;if(s===r)return Bf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function ey(t){return t=_E(t),t!==null?ty(t):null}function ty(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ty(t);if(e!==null)return e;t=t.sibling}return null}var ny=lt.unstable_scheduleCallback,jf=lt.unstable_cancelCallback,SE=lt.unstable_shouldYield,kE=lt.unstable_requestPaint,he=lt.unstable_now,IE=lt.unstable_getCurrentPriorityLevel,Mh=lt.unstable_ImmediatePriority,ry=lt.unstable_UserBlockingPriority,fa=lt.unstable_NormalPriority,TE=lt.unstable_LowPriority,iy=lt.unstable_IdlePriority,rl=null,Mt=null;function CE(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:AE,xE=Math.log,NE=Math.LN2;function AE(t){return t>>>=0,t===0?32:31-(xE(t)/NE|0)|0}var ko=64,Io=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zi(a):(s&=o,s!==0&&(r=zi(s)))}else o=n&~i,o!==0?r=zi(o):s!==0&&(r=zi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),i=1<<n,r|=t[n],e&=~i;return r}function RE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=RE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sy(){var t=ko;return ko<<=1,(ko&4194240)===0&&(ko=64),t}function uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function bE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function oy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ay,Fh,ly,uy,cy,yc=!1,To=[],yn=null,vn=null,wn=null,ms=new Map,gs=new Map,hn=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ms.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(e.pointerId)}}function Oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ks(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OE(t,e,n,r,i){switch(e){case"focusin":return yn=Oi(yn,t,e,n,r,i),!0;case"dragenter":return vn=Oi(vn,t,e,n,r,i),!0;case"mouseover":return wn=Oi(wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ms.set(s,Oi(ms.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gs.set(s,Oi(gs.get(s)||null,t,e,n,r,i)),!0}return!1}function hy(t){var e=Gn(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,cy(t.priority,function(){ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return e=Ks(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Hf(t,e,n){qo(t)&&n.delete(e)}function LE(){yc=!1,yn!==null&&qo(yn)&&(yn=null),vn!==null&&qo(vn)&&(vn=null),wn!==null&&qo(wn)&&(wn=null),ms.forEach(Hf),gs.forEach(Hf)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,yc||(yc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,LE)))}function ys(t){function e(i){return Li(i,t)}if(0<To.length){Li(To[0],t);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&Li(yn,t),vn!==null&&Li(vn,t),wn!==null&&Li(wn,t),ms.forEach(e),gs.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&hn.shift()}var Gr=on.ReactCurrentBatchConfig,ma=!0;function ME(t,e,n,r){var i=X,s=Gr.transition;Gr.transition=null;try{X=1,Uh(t,e,n,r)}finally{X=i,Gr.transition=s}}function $E(t,e,n,r){var i=X,s=Gr.transition;Gr.transition=null;try{X=4,Uh(t,e,n,r)}finally{X=i,Gr.transition=s}}function Uh(t,e,n,r){if(ma){var i=vc(t,e,n,r);if(i===null)wu(t,e,r,ga,n),zf(t,r);else if(OE(i,t,e,n,r))r.stopPropagation();else if(zf(t,r),e&4&&-1<PE.indexOf(t)){for(;i!==null;){var s=Ks(i);if(s!==null&&ay(s),s=vc(t,e,n,r),s===null&&wu(t,e,r,ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wu(t,e,r,null,n)}}var ga=null;function vc(t,e,n,r){if(ga=null,t=Lh(r),t=Gn(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ga=t,null}function dy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IE()){case Mh:return 1;case ry:return 4;case fa:case TE:return 16;case iy:return 536870912;default:return 16}default:return 16}}var mn=null,Vh=null,Go=null;function fy(){if(Go)return Go;var t,e=Vh,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Go=i.slice(t,1<r?1-r:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Co(){return!0}function Wf(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:Wf,this.isPropagationStopped=Wf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=ht(yi),Ws=ae({},yi,{view:0,detail:0}),FE=ht(Ws),cu,hu,Mi,il=ae({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(cu=t.screenX-Mi.screenX,hu=t.screenY-Mi.screenY):hu=cu=0,Mi=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Kf=ht(il),UE=ae({},il,{dataTransfer:0}),VE=ht(UE),BE=ae({},Ws,{relatedTarget:0}),du=ht(BE),jE=ae({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=ht(jE),HE=ae({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WE=ht(HE),KE=ae({},yi,{data:0}),qf=ht(KE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QE[t])?!!e[t]:!1}function jh(){return YE}var XE=ae({},Ws,{key:function(t){if(t.key){var e=qE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JE=ht(XE),ZE=ae({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ht(ZE),e_=ae({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),t_=ht(e_),n_=ae({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),r_=ht(n_),i_=ae({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=ht(i_),o_=[9,13,27,32],zh=Zt&&"CompositionEvent"in window,Xi=null;Zt&&"documentMode"in document&&(Xi=document.documentMode);var a_=Zt&&"TextEvent"in window&&!Xi,py=Zt&&(!zh||Xi&&8<Xi&&11>=Xi),Qf=String.fromCharCode(32),Yf=!1;function my(t,e){switch(t){case"keyup":return o_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function l_(t,e){switch(t){case"compositionend":return gy(e);case"keypress":return e.which!==32?null:(Yf=!0,Qf);case"textInput":return t=e.data,t===Qf&&Yf?null:t;default:return null}}function u_(t,e){if(Pr)return t==="compositionend"||!zh&&my(t,e)?(t=fy(),Go=Vh=mn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return py&&e.locale!=="ko"?null:e.data;default:return null}}var c_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c_[t.type]:e==="textarea"}function yy(t,e,n,r){Gg(r),e=ya(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ji=null,vs=null;function h_(t){Ny(t,0)}function sl(t){var e=Mr(t);if(Bg(e))return t}function d_(t,e){if(t==="change")return e}var vy=!1;if(Zt){var fu;if(Zt){var pu="oninput"in document;if(!pu){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),pu=typeof Jf.oninput=="function"}fu=pu}else fu=!1;vy=fu&&(!document.documentMode||9<document.documentMode)}function Zf(){Ji&&(Ji.detachEvent("onpropertychange",wy),vs=Ji=null)}function wy(t){if(t.propertyName==="value"&&sl(vs)){var e=[];yy(e,vs,t,Lh(t)),Jg(h_,e)}}function f_(t,e,n){t==="focusin"?(Zf(),Ji=e,vs=n,Ji.attachEvent("onpropertychange",wy)):t==="focusout"&&Zf()}function p_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(vs)}function m_(t,e){if(t==="click")return sl(e)}function g_(t,e){if(t==="input"||t==="change")return sl(e)}function y_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:y_;function ws(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ec.call(e,i)||!At(t[i],e[i]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function Ey(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ey(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _y(){for(var t=window,e=ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ca(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v_(t){var e=_y(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ey(n.ownerDocument.documentElement,n)){if(r!==null&&Hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tp(n,s);var o=tp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w_=Zt&&"documentMode"in document&&11>=document.documentMode,Or=null,wc=null,Zi=null,Ec=!1;function np(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||Or==null||Or!==ca(r)||(r=Or,"selectionStart"in r&&Hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&ws(Zi,r)||(Zi=r,r=ya(wc,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Or)))}function xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},mu={},Sy={};Zt&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ol(t){if(mu[t])return mu[t];if(!Lr[t])return t;var e=Lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sy)return mu[t]=e[n];return t}var ky=ol("animationend"),Iy=ol("animationiteration"),Ty=ol("animationstart"),Cy=ol("transitionend"),xy=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){xy.set(t,e),Tr(e,[t])}for(var gu=0;gu<rp.length;gu++){var yu=rp[gu],E_=yu.toLowerCase(),__=yu[0].toUpperCase()+yu.slice(1);Pn(E_,"on"+__)}Pn(ky,"onAnimationEnd");Pn(Iy,"onAnimationIteration");Pn(Ty,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Cy,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function ip(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EE(r,e,void 0,t),t.currentTarget=null}function Ny(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ip(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ip(i,a,u),s=l}}}if(da)throw t=mc,da=!1,mc=null,t}function ee(t,e){var n=e[Tc];n===void 0&&(n=e[Tc]=new Set);var r=t+"__bubble";n.has(r)||(Ay(e,t,2,!1),n.add(r))}function vu(t,e,n){var r=0;e&&(r|=4),Ay(n,t,r,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[No]){t[No]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(S_.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[No]||(e[No]=!0,vu("selectionchange",!1,e))}}function Ay(t,e,n,r){switch(dy(e)){case 1:var i=ME;break;case 4:i=$E;break;default:i=Uh}n=i.bind(null,e,n,t),i=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jg(function(){var u=s,c=Lh(n),h=[];e:{var d=xy.get(t);if(d!==void 0){var g=Bh,y=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":g=JE;break;case"focusin":y="focus",g=du;break;case"focusout":y="blur",g=du;break;case"beforeblur":case"afterblur":g=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=VE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=t_;break;case ky:case Iy:case Ty:g=zE;break;case Cy:g=r_;break;case"scroll":g=FE;break;case"wheel":g=s_;break;case"copy":case"cut":case"paste":g=WE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gf}var w=(e&4)!==0,R=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=ps(f,p),v!=null&&w.push(_s(f,v,m)))),R)break;f=f.return}0<w.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==dc&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[en]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Gn(y):null,y!==null&&(R=Cr(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=Kf,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Gf,v="onPointerLeave",p="onPointerEnter",f="pointer"),R=g==null?d:Mr(g),m=y==null?d:Mr(y),d=new w(v,f+"leave",g,n,c),d.target=R,d.relatedTarget=m,v=null,Gn(c)===u&&(w=new w(p,f+"enter",y,n,c),w.target=m,w.relatedTarget=R,v=w),R=v,g&&y)t:{for(w=g,p=y,f=0,m=w;m;m=Ar(m))f++;for(m=0,v=p;v;v=Ar(v))m++;for(;0<f-m;)w=Ar(w),f--;for(;0<m-f;)p=Ar(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Ar(w),p=Ar(p)}w=null}else w=null;g!==null&&sp(h,d,g,w,!1),y!==null&&R!==null&&sp(h,R,y,w,!0)}}e:{if(d=u?Mr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=d_;else if(Xf(d))if(vy)T=g_;else{T=p_;var x=f_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=m_);if(T&&(T=T(t,u))){yy(h,T,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&ac(d,"number",d.value)}switch(x=u?Mr(u):window,t){case"focusin":(Xf(x)||x.contentEditable==="true")&&(Or=x,wc=u,Zi=null);break;case"focusout":Zi=wc=Or=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,np(h,n,c);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":np(h,n,c)}var E;if(zh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pr?my(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(py&&n.locale!=="ko"&&(Pr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pr&&(E=fy()):(mn=c,Vh="value"in mn?mn.value:mn.textContent,Pr=!0)),x=ya(u,I),0<x.length&&(I=new qf(I,t,null,n,c),h.push({event:I,listeners:x}),E?I.data=E:(E=gy(n),E!==null&&(I.data=E)))),(E=a_?l_(t,n):u_(t,n))&&(u=ya(u,"onBeforeInput"),0<u.length&&(c=new qf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=E))}Ny(h,e)})}function _s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ps(t,n),s!=null&&r.unshift(_s(t,s,i)),s=ps(t,e),s!=null&&r.push(_s(t,s,i))),t=t.return}return r}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ps(n,s),l!=null&&o.unshift(_s(n,l,a))):i||(l=ps(n,s),l!=null&&o.push(_s(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var k_=/\r\n?/g,I_=/\u0000|\uFFFD/g;function op(t){return(typeof t=="string"?t:""+t).replace(k_,`
`).replace(I_,"")}function Ao(t,e,n){if(e=op(e),op(t)!==e&&n)throw Error(S(425))}function va(){}var _c=null,Sc=null;function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,C_=typeof queueMicrotask=="function"?queueMicrotask:typeof ap!="undefined"?function(t){return ap.resolve(null).then(t).catch(x_)}:Ic;function x_(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ys(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+vi,Ss="__reactProps$"+vi,en="__reactContainer$"+vi,Tc="__reactEvents$"+vi,N_="__reactListeners$"+vi,A_="__reactHandles$"+vi;function Gn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[en]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[Ot])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function Ks(t){return t=t[Ot]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function al(t){return t[Ss]||null}var Cc=[],$r=-1;function On(t){return{current:t}}function te(t){0>$r||(t.current=Cc[$r],Cc[$r]=null,$r--)}function Z(t,e){$r++,Cc[$r]=t.current,t.current=e}var Nn={},Ue=On(Nn),Ze=On(!1),cr=Nn;function ri(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function wa(){te(Ze),te(Ue)}function up(t,e,n){if(Ue.current!==Nn)throw Error(S(168));Z(Ue,e),Z(Ze,n)}function Ry(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,fE(t)||"Unknown",i));return ae({},n,r)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,cr=Ue.current,Z(Ue,t),Z(Ze,Ze.current),!0}function cp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ry(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,te(Ze),te(Ue),Z(Ue,t)):te(Ze),Z(Ze,n)}var Ht=null,ll=!1,_u=!1;function Dy(t){Ht===null?Ht=[t]:Ht.push(t)}function R_(t){ll=!0,Dy(t)}function Ln(){if(!_u&&Ht!==null){_u=!0;var t=0,e=X;try{var n=Ht;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ht=null,ll=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(t+1)),ny(Mh,Ln),i}finally{X=e,_u=!1}}return null}var Fr=[],Ur=0,_a=null,Sa=0,ft=[],pt=0,hr=null,qt=1,Gt="";function Hn(t,e){Fr[Ur++]=Sa,Fr[Ur++]=_a,_a=t,Sa=e}function by(t,e,n){ft[pt++]=qt,ft[pt++]=Gt,ft[pt++]=hr,hr=t;var r=qt;t=Gt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-xt(e)+i|n<<i|r,Gt=s+t}else qt=1<<s|n<<i|r,Gt=t}function Wh(t){t.return!==null&&(Hn(t,1),by(t,1,0))}function Kh(t){for(;t===_a;)_a=Fr[--Ur],Fr[Ur]=null,Sa=Fr[--Ur],Fr[Ur]=null;for(;t===hr;)hr=ft[--pt],ft[pt]=null,Gt=ft[--pt],ft[pt]=null,qt=ft[--pt],ft[pt]=null}var ot=null,st=null,ne=!1,Tt=null;function Py(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:qt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(ne){var e=st;if(e){var n=e;if(!hp(t,e)){if(xc(t))throw Error(S(418));e=En(n.nextSibling);var r=ot;e&&hp(t,e)?Py(r,n):(t.flags=t.flags&-4097|2,ne=!1,ot=t)}}else{if(xc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,ot=t}}}function dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function Ro(t){if(t!==ot)return!1;if(!ne)return dp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kc(t.type,t.memoizedProps)),e&&(e=st)){if(xc(t))throw Oy(),Error(S(418));for(;e;)Py(t,e),e=En(e.nextSibling)}if(dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?En(t.stateNode.nextSibling):null;return!0}function Oy(){for(var t=st;t;)t=En(t.nextSibling)}function ii(){st=ot=null,ne=!1}function qh(t){Tt===null?Tt=[t]:Tt.push(t)}var D_=on.ReactCurrentBatchConfig;function kt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ka=On(null),Ia=null,Vr=null,Gh=null;function Qh(){Gh=Vr=Ia=null}function Yh(t){var e=ka.current;te(ka),t._currentValue=e}function Ac(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){Ia=t,Gh=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Xe=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(Ia===null)throw Error(S(308));Vr=t,Ia.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var Qn=null;function Xh(t){Qn===null?Qn=[t]:Qn.push(t)}function Ly(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,tn(t,r)}function tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,tn(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}function fp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ta(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=ae({},h,d);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fr|=o,t.lanes=o,t.memoizedState=h}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var $y=new Lg.Component().refs;function Rc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=kn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(Nt(e,t,i,r),Yo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=kn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(Nt(e,t,i,r),Yo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=kn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=_n(t,i,r),e!==null&&(Nt(e,t,r,n),Yo(e,t,r))}};function mp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ws(n,r)||!ws(i,s):!0}function Fy(t,e,n){var r=!1,i=Nn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=et(e)?cr:Ue.current,r=e.contextTypes,s=(r=r!=null)?ri(t,i):Nn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$y,Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=et(e)?cr:Ue.current,i.context=ri(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ul.enqueueReplaceState(i,i.state,null),Ta(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $i(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$y&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Do(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function Uy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=In(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,v){return f===null||f.tag!==6?(f=Nu(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,v){var T=m.type;return T===br?c(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&yp(T)===f.type)?(v=i(f,m.props),v.ref=$i(p,f,m),v.return=p,v):(v=na(m.type,m.key,m.props,null,p.mode,v),v.ref=$i(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Au(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,v,T){return f===null||f.tag!==7?(f=ir(m,p.mode,v,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Nu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:return m=na(f.type,f.key,f.props,null,p.mode,m),m.ref=$i(p,null,f),m.return=p,m;case Dr:return f=Au(f,p.mode,m),f.return=p,f;case un:var v=f._init;return h(p,v(f._payload),m)}if(ji(f)||bi(f))return f=ir(f,p.mode,m,null),f.return=p,f;Do(p,f)}return null}function d(p,f,m,v){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Eo:return m.key===T?l(p,f,m,v):null;case Dr:return m.key===T?u(p,f,m,v):null;case un:return T=m._init,d(p,f,T(m._payload),v)}if(ji(m)||bi(m))return T!==null?null:c(p,f,m,v,null);Do(p,m)}return null}function g(p,f,m,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(f,p,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return p=p.get(v.key===null?m:v.key)||null,l(f,p,v,T);case Dr:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,T);case un:var x=v._init;return g(p,f,m,x(v._payload),T)}if(ji(v)||bi(v))return p=p.get(m)||null,c(f,p,v,T,null);Do(f,v)}return null}function y(p,f,m,v){for(var T=null,x=null,E=f,I=f=0,V=null;E!==null&&I<m.length;I++){E.index>I?(V=E,E=null):V=E.sibling;var M=d(p,E,m[I],v);if(M===null){E===null&&(E=V);break}t&&E&&M.alternate===null&&e(p,E),f=s(M,f,I),x===null?T=M:x.sibling=M,x=M,E=V}if(I===m.length)return n(p,E),ne&&Hn(p,I),T;if(E===null){for(;I<m.length;I++)E=h(p,m[I],v),E!==null&&(f=s(E,f,I),x===null?T=E:x.sibling=E,x=E);return ne&&Hn(p,I),T}for(E=r(p,E);I<m.length;I++)V=g(E,p,I,m[I],v),V!==null&&(t&&V.alternate!==null&&E.delete(V.key===null?I:V.key),f=s(V,f,I),x===null?T=V:x.sibling=V,x=V);return t&&E.forEach(function(ie){return e(p,ie)}),ne&&Hn(p,I),T}function w(p,f,m,v){var T=bi(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var x=T=null,E=f,I=f=0,V=null,M=m.next();E!==null&&!M.done;I++,M=m.next()){E.index>I?(V=E,E=null):V=E.sibling;var ie=d(p,E,M.value,v);if(ie===null){E===null&&(E=V);break}t&&E&&ie.alternate===null&&e(p,E),f=s(ie,f,I),x===null?T=ie:x.sibling=ie,x=ie,E=V}if(M.done)return n(p,E),ne&&Hn(p,I),T;if(E===null){for(;!M.done;I++,M=m.next())M=h(p,M.value,v),M!==null&&(f=s(M,f,I),x===null?T=M:x.sibling=M,x=M);return ne&&Hn(p,I),T}for(E=r(p,E);!M.done;I++,M=m.next())M=g(E,p,I,M.value,v),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?I:M.key),f=s(M,f,I),x===null?T=M:x.sibling=M,x=M);return t&&E.forEach(function(dt){return e(p,dt)}),ne&&Hn(p,I),T}function R(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===br&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Eo:e:{for(var T=m.key,x=f;x!==null;){if(x.key===T){if(T=m.type,T===br){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&yp(T)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=$i(p,x,m),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}m.type===br?(f=ir(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=na(m.type,m.key,m.props,null,p.mode,v),v.ref=$i(p,f,m),v.return=p,p=v)}return o(p);case Dr:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Au(m,p.mode,v),f.return=p,p=f}return o(p);case un:return x=m._init,R(p,f,x(m._payload),v)}if(ji(m))return y(p,f,m,v);if(bi(m))return w(p,f,m,v);Do(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Nu(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return R}var si=Uy(!0),Vy=Uy(!1),qs={},$t=On(qs),ks=On(qs),Is=On(qs);function Yn(t){if(t===qs)throw Error(S(174));return t}function Zh(t,e){switch(Z(Is,e),Z(ks,t),Z($t,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uc(e,t)}te($t),Z($t,e)}function oi(){te($t),te(ks),te(Is)}function By(t){Yn(Is.current);var e=Yn($t.current),n=uc(e,t.type);e!==n&&(Z(ks,t),Z($t,n))}function ed(t){ks.current===t&&(te($t),te(ks))}var se=On(0);function Ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function td(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Xo=on.ReactCurrentDispatcher,ku=on.ReactCurrentBatchConfig,dr=0,oe=null,ye=null,Se=null,xa=!1,es=!1,Ts=0,b_=0;function Le(){throw Error(S(321))}function nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function rd(t,e,n,r,i,s){if(dr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xo.current=t===null||t.memoizedState===null?M_:$_,t=n(r,i),es){s=0;do{if(es=!1,Ts=0,25<=s)throw Error(S(301));s+=1,Se=ye=null,e.updateQueue=null,Xo.current=F_,t=n(r,i)}while(es)}if(Xo.current=Na,e=ye!==null&&ye.next!==null,dr=0,Se=ye=oe=null,xa=!1,e)throw Error(S(300));return t}function id(){var t=Ts!==0;return Ts=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?oe.memoizedState=Se=t:Se=Se.next=t,Se}function wt(){if(ye===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Se===null?oe.memoizedState:Se.next;if(e!==null)Se=e,ye=t;else{if(t===null)throw Error(S(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?oe.memoizedState=Se=t:Se=Se.next=t}return Se}function Cs(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(Xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tu(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jy(){}function zy(t,e){var n=oe,r=wt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Xe=!0),r=r.queue,sd(Ky.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,xs(9,Wy.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(S(349));(dr&30)!==0||Hy(n,e,i)}return i}function Hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wy(t,e,n,r){e.value=n,e.getSnapshot=r,qy(e)&&Gy(t)}function Ky(t,e,n){return n(function(){qy(e)&&Gy(t)})}function qy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function Gy(t){var e=tn(t,1);e!==null&&Nt(e,t,1,-1)}function vp(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},e.queue=t,t=t.dispatch=L_.bind(null,oe,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qy(){return wt().memoizedState}function Jo(t,e,n,r){var i=Pt();oe.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&nd(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function wp(t,e){return Jo(8390656,8,t,e)}function sd(t,e){return cl(2048,8,t,e)}function Yy(t,e){return cl(4,2,t,e)}function Xy(t,e){return cl(4,4,t,e)}function Jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zy(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,Jy.bind(null,e,t),n)}function od(){}function ev(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return(dr&21)===0?(t.baseState&&(t.baseState=!1,Xe=!0),t.memoizedState=n):(At(n,e)||(n=sy(),oe.lanes|=n,fr|=n,t.baseState=!0),e)}function P_(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=ku.transition;ku.transition={};try{t(!1),e()}finally{X=n,ku.transition=r}}function rv(){return wt().memoizedState}function O_(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))sv(e,n);else if(n=Ly(t,e,n,r),n!==null){var i=We();Nt(n,t,r,i),ov(n,e,r)}}function L_(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))sv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,Xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ly(t,e,i,r),n!==null&&(i=We(),Nt(n,t,r,i),ov(n,e,r))}}function iv(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function sv(t,e){es=xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ov(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$h(t,n)}}var Na={readContext:vt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},M_={readContext:vt,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,Jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=O_.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:vp,useDebugValue:od,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=vp(!1),e=t[0];return t=P_.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Pt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));(dr&30)!==0||Hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wp(Ky.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Wy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=ke.identifierPrefix;if(ne){var n=Gt,r=qt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$_={readContext:vt,useCallback:ev,useContext:vt,useEffect:sd,useImperativeHandle:Zy,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:tv,useReducer:Iu,useRef:Qy,useState:function(){return Iu(Cs)},useDebugValue:od,useDeferredValue:function(t){var e=wt();return nv(e,ye.memoizedState,t)},useTransition:function(){var t=Iu(Cs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:jy,useSyncExternalStore:zy,useId:rv,unstable_isNewReconciler:!1},F_={readContext:vt,useCallback:ev,useContext:vt,useEffect:sd,useImperativeHandle:Zy,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:tv,useReducer:Tu,useRef:Qy,useState:function(){return Tu(Cs)},useDebugValue:od,useDeferredValue:function(t){var e=wt();return ye===null?e.memoizedState=t:nv(e,ye.memoizedState,t)},useTransition:function(){var t=Tu(Cs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:jy,useSyncExternalStore:zy,useId:rv,unstable_isNewReconciler:!1};function ai(t,e){try{var n="",r=e;do n+=dE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U_=typeof WeakMap=="function"?WeakMap:Map;function av(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ra||(Ra=!0,jc=r),bc(t,e)},n}function lv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z_.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,_n(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var V_=on.ReactCurrentOwner,Xe=!1;function Be(t,e,n,r){e.child=t===null?Vy(e,null,n,r):si(e,t.child,n,r)}function kp(t,e,n,r,i){n=n.render;var s=e.ref;return Qr(e,i),r=rd(t,e,n,r,s,i),n=id(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ne&&n&&Wh(e),e.flags|=1,Be(t,e,r,i),e.child)}function Ip(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uv(t,e,s,r,i)):(t=na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ws,n(o,r)&&t.ref===e.ref)return nn(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function uv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ws(s,r)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Xe=!0);else return e.lanes=t.lanes,nn(t,e,i)}return Pc(t,e,n,r,i)}function cv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(jr,it),it|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(jr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(jr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(jr,it),it|=r;return Be(t,e,i,n),e.child}function hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,r,i){var s=et(n)?cr:Ue.current;return s=ri(e,s),Qr(e,i),n=rd(t,e,n,r,s,i),r=id(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ne&&r&&Wh(e),e.flags|=1,Be(t,e,n,i),e.child)}function Tp(t,e,n,r,i){if(et(n)){var s=!0;Ea(e)}else s=!1;if(Qr(e,i),e.stateNode===null)Zo(t,e),Fy(e,n,r),Dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=et(n)?cr:Ue.current,u=ri(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gp(e,o,r,u),cn=!1;var d=e.memoizedState;o.state=d,Ta(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ze.current||cn?(typeof c=="function"&&(Rc(e,n,c,r),l=e.memoizedState),(a=cn||mp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,My(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=et(n)?cr:Ue.current,l=ri(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&gp(e,o,r,l),cn=!1,d=e.memoizedState,o.state=d,Ta(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ze.current||cn?(typeof g=="function"&&(Rc(e,n,g,r),y=e.memoizedState),(u=cn||mp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Oc(t,e,n,r,s,i)}function Oc(t,e,n,r,i,s){hv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cp(e,n,!1),nn(t,e,s);r=e.stateNode,V_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=si(e,t.child,null,s),e.child=si(e,null,a,s)):Be(t,e,a,s),e.memoizedState=r.state,i&&cp(e,n,!0),e.child}function dv(t){var e=t.stateNode;e.pendingContext?up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&up(t,e.context,!1),Zh(t,e.containerInfo)}function Cp(t,e,n,r,i){return ii(),qh(i),e.flags|=256,Be(t,e,n,r),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,r,0,null),t=ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mc(n),e.memoizedState=Lc,t):ad(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lc,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ad(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,r){return r!==null&&qh(r),si(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cu(Error(S(422))),bo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fl({mode:"visible",children:r.children},i,0,null),s=ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&si(e,t.child,null,o),e.child.memoizedState=Mc(o),e.memoizedState=Lc,s);if((e.mode&1)===0)return bo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Cu(s,r,void 0),bo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xe||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(t,i),Nt(r,t,i,-1))}return fd(),r=Cu(Error(S(421))),bo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=En(i.nextSibling),ot=e,ne=!0,Tt=null,t!==null&&(ft[pt++]=qt,ft[pt++]=Gt,ft[pt++]=hr,qt=t.id,Gt=t.overflow,hr=e),e=ad(e,r.children),e.flags|=4096,e)}function xp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ac(t.return,e,n)}function xu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Be(t,e,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n,e);else if(t.tag===19)xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ca(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ca(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j_(t,e,n){switch(e.tag){case 3:dv(e),ii();break;case 5:By(e);break;case 1:et(e.type)&&Ea(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(ka,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?fv(t,e,n):(Z(se,se.current&1),t=nn(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return pv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return nn(t,e,n)}var mv,$c,gv,yv;mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};gv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn($t.current);var s=null;switch(n){case"input":i=sc(t,i),r=sc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=lc(t,i),r=lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=va)}cc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z_(t,e,n){var r=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return et(e.type)&&wa(),Me(e),null;case 3:return r=e.stateNode,oi(),te(Ze),te(Ue),td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tt!==null&&(Wc(Tt),Tt=null))),$c(t,e),Me(e),null;case 5:ed(e);var i=Yn(Is.current);if(n=e.type,t!==null&&e.stateNode!=null)gv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Me(e),null}if(t=Yn($t.current),Ro(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Ss]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)ee(Hi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Mf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Ff(r,s),ee("invalid",r)}cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ao(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ao(r.textContent,a,t),i=["children",""+a]):ds.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":_o(r),$f(r,s,!0);break;case"textarea":_o(r),Uf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=va)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Ss]=r,mv(t,e,!1,!1),e.stateNode=t;e:{switch(o=hc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)ee(Hi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Mf(t,r),i=sc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Ff(t,r),i=lc(t,r),ee("invalid",t);break;default:i=r}cc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fs(t,l):typeof l=="number"&&fs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Dh(t,s,l,o))}switch(n){case"input":_o(t),$f(t,r,!1);break;case"textarea":_o(t),Uf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Yn(Is.current),Yn($t.current),Ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:Ao(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Me(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&st!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Oy(),ii(),e.flags|=98560,s=!1;else if(s=Ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ot]=e}else ii(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Tt!==null&&(Wc(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(se.current&1)!==0?ve===0&&(ve=3):fd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return oi(),$c(t,e),t===null&&Es(e.stateNode.containerInfo),Me(e),null;case 10:return Yh(e.type._context),Me(e),null;case 17:return et(e.type)&&wa(),Me(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(ve!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ca(t),o!==null){for(e.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>li&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Me(e),null}else 2*he()-s.renderingStartTime>li&&n!==1073741824&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return dd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(it&1073741824)!==0&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function H_(t,e){switch(Kh(e),e.tag){case 1:return et(e.type)&&wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oi(),te(Ze),te(Ue),td(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return ed(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return oi(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var Po=!1,$e=!1,W_=typeof WeakSet=="function"?WeakSet:Set,N=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Fc(t,e,n){try{n()}catch(r){le(t,e,r)}}var Np=!1;function K_(t,e){if(_c=ma,t=_y(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},ma=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,R=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:kt(e.type,w),R);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){le(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Np,Np=!1,y}function ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fc(e,n,s)}i=i.next}while(i!==r)}}function hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Ss],delete e[Tc],delete e[N_],delete e[A_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=va));else if(r!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var Ce=null,It=!1;function an(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:$e||Br(n,e);case 6:var r=Ce,i=It;Ce=null,an(t,e,n),Ce=r,It=i,Ce!==null&&(It?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(It?(t=Ce,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),ys(t)):Eu(Ce,n.stateNode));break;case 4:r=Ce,i=It,Ce=n.stateNode.containerInfo,It=!0,an(t,e,n),Ce=r,It=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Fc(n,e,o),i=i.next}while(i!==r)}an(t,e,n);break;case 1:if(!$e&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}an(t,e,n);break;case 21:an(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,an(t,e,n),$e=r):an(t,e,n);break;default:an(t,e,n)}}function Rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W_),e.forEach(function(r){var i=tS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,It=!1;break e;case 3:Ce=a.stateNode.containerInfo,It=!0;break e;case 4:Ce=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ce===null)throw Error(S(160));Ev(s,o,i),Ce=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_v(e,t),e=e.sibling}function _v(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),bt(t),r&4){try{ts(3,t,t.return),hl(3,t)}catch(w){le(t,t.return,w)}try{ts(5,t,t.return)}catch(w){le(t,t.return,w)}}break;case 1:St(e,t),bt(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(St(e,t),bt(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var i=t.stateNode;try{fs(i,"")}catch(w){le(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jg(i,s),hc(a,o);var u=hc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?qg(i,h):c==="dangerouslySetInnerHTML"?Wg(i,h):c==="children"?fs(i,h):Dh(i,c,h,u)}switch(a){case"input":oc(i,s);break;case"textarea":zg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Wr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Wr(i,!!s.multiple,s.defaultValue,!0):Wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ss]=s}catch(w){le(t,t.return,w)}}break;case 6:if(St(e,t),bt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){le(t,t.return,w)}}break;case 3:if(St(e,t),bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(e.containerInfo)}catch(w){le(t,t.return,w)}break;case 4:St(e,t),bt(t);break;case 13:St(e,t),bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cd=he())),r&4&&Rp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,St(e,t),$e=u):St(e,t),bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,g=d.child,d.tag){case 0:case 11:case 14:case 15:ts(4,d,d.return);break;case 1:Br(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:Br(d,d.return);break;case 22:if(d.memoizedState!==null){bp(h);continue}}g!==null?(g.return=d,N=g):bp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kg("display",o))}catch(w){le(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){le(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:St(e,t),bt(t),r&4&&Rp(t);break;case 21:break;default:St(e,t),bt(t)}}function bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fs(i,""),r.flags&=-33);var s=Ap(t);Bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ap(t);Vc(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q_(t,e,n){N=t,Sv(t)}function Sv(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Po;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=Po;var u=$e;if(Po=o,($e=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Pp(i):l!==null?(l.return=o,N=l):Pp(i);for(;s!==null;)N=s,Sv(s),s=s.sibling;N=i,Po=a,$e=u}Dp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,N=s):Dp(t)}}function Dp(t){for(;N!==null;){var e=N;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:$e||hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}$e||e.flags&512&&Uc(e)}catch(d){le(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function bp(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Pp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Uc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Uc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var G_=Math.ceil,Aa=on.ReactCurrentDispatcher,ld=on.ReactCurrentOwner,gt=on.ReactCurrentBatchConfig,K=0,ke=null,pe=null,Ae=0,it=0,jr=On(0),ve=0,Ns=null,fr=0,dl=0,ud=0,ns=null,Qe=null,cd=0,li=1/0,zt=null,Ra=!1,jc=null,Sn=null,Oo=!1,gn=null,Da=0,rs=0,zc=null,ea=-1,ta=0;function We(){return(K&6)!==0?he():ea!==-1?ea:ea=he()}function kn(t){return(t.mode&1)===0?1:(K&2)!==0&&Ae!==0?Ae&-Ae:D_.transition!==null?(ta===0&&(ta=sy()),ta):(t=X,t!==0||(t=window.event,t=t===void 0?16:dy(t.type)),t)}function Nt(t,e,n,r){if(50<rs)throw rs=0,zc=null,Error(S(185));Hs(t,n,r),((K&2)===0||t!==ke)&&(t===ke&&((K&2)===0&&(dl|=n),ve===4&&dn(t,Ae)),tt(t,r),n===1&&K===0&&(e.mode&1)===0&&(li=he()+500,ll&&Ln()))}function tt(t,e){var n=t.callbackNode;DE(t,e);var r=pa(t,t===ke?Ae:0);if(r===0)n!==null&&jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jf(n),e===1)t.tag===0?R_(Op.bind(null,t)):Dy(Op.bind(null,t)),C_(function(){(K&6)===0&&Ln()}),n=null;else{switch(oy(r)){case 1:n=Mh;break;case 4:n=ry;break;case 16:n=fa;break;case 536870912:n=iy;break;default:n=fa}n=Rv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(ea=-1,ta=0,(K&6)!==0)throw Error(S(327));var n=t.callbackNode;if(Yr()&&t.callbackNode!==n)return null;var r=pa(t,t===ke?Ae:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ba(t,r);else{e=r;var i=K;K|=2;var s=Tv();(ke!==t||Ae!==e)&&(zt=null,li=he()+500,rr(t,e));do try{X_();break}catch(a){Iv(t,a)}while(1);Qh(),Aa.current=s,K=i,pe!==null?e=0:(ke=null,Ae=0,e=ve)}if(e!==0){if(e===2&&(i=gc(t),i!==0&&(r=i,e=Hc(t,i))),e===1)throw n=Ns,rr(t,0),dn(t,r),tt(t,he()),n;if(e===6)dn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Q_(i)&&(e=ba(t,r),e===2&&(s=gc(t),s!==0&&(r=s,e=Hc(t,s))),e===1))throw n=Ns,rr(t,0),dn(t,r),tt(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Wn(t,Qe,zt);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=cd+500-he(),10<e)){if(pa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ic(Wn.bind(null,t,Qe,zt),e);break}Wn(t,Qe,zt);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G_(r/1960))-r,10<r){t.timeoutHandle=Ic(Wn.bind(null,t,Qe,zt),r);break}Wn(t,Qe,zt);break;case 5:Wn(t,Qe,zt);break;default:throw Error(S(329))}}}return tt(t,he()),t.callbackNode===n?kv.bind(null,t):null}function Hc(t,e){var n=ns;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=ba(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&Wc(e)),t}function Wc(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function Q_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~ud,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function Op(t){if((K&6)!==0)throw Error(S(327));Yr();var e=pa(t,0);if((e&1)===0)return tt(t,he()),null;var n=ba(t,e);if(t.tag!==0&&n===2){var r=gc(t);r!==0&&(e=r,n=Hc(t,r))}if(n===1)throw n=Ns,rr(t,0),dn(t,e),tt(t,he()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,Qe,zt),tt(t,he()),null}function hd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(li=he()+500,ll&&Ln())}}function pr(t){gn!==null&&gn.tag===0&&(K&6)===0&&Yr();var e=K;K|=1;var n=gt.transition,r=X;try{if(gt.transition=null,X=1,t)return t()}finally{X=r,gt.transition=n,K=e,(K&6)===0&&Ln()}}function dd(){it=jr.current,te(jr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T_(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:oi(),te(Ze),te(Ue),td();break;case 5:ed(r);break;case 4:oi();break;case 13:te(se);break;case 19:te(se);break;case 10:Yh(r.type._context);break;case 22:case 23:dd()}n=n.return}if(ke=t,pe=t=In(t.current,null),Ae=it=e,ve=0,Ns=null,ud=dl=fr=0,Qe=ns=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function Iv(t,e){do{var n=pe;try{if(Qh(),Xo.current=Na,xa){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xa=!1}if(dr=0,Se=ye=oe=null,es=!1,Ts=0,ld.current=null,n===null||n.return===null){ve=1,Ns=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=_p(o);if(g!==null){g.flags&=-257,Sp(g,o,a,s,e),g.mode&1&&Ep(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if((e&1)===0){Ep(s,u,e),fd();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var R=_p(o);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),Sp(R,o,a,s,e),qh(ai(l,a));break e}}s=l=ai(l,a),ve!==4&&(ve=2),ns===null?ns=[s]:ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=av(s,l,e);fp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=lv(s,a,e);fp(s,v);break e}}s=s.return}while(s!==null)}xv(n)}catch(T){e=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Tv(){var t=Aa.current;return Aa.current=Na,t===null?Na:t}function fd(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||(fr&268435455)===0&&(dl&268435455)===0||dn(ke,Ae)}function ba(t,e){var n=K;K|=2;var r=Tv();(ke!==t||Ae!==e)&&(zt=null,rr(t,e));do try{Y_();break}catch(i){Iv(t,i)}while(1);if(Qh(),K=n,Aa.current=r,pe!==null)throw Error(S(261));return ke=null,Ae=0,ve}function Y_(){for(;pe!==null;)Cv(pe)}function X_(){for(;pe!==null&&!SE();)Cv(pe)}function Cv(t){var e=Av(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?xv(t):pe=e,ld.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=z_(n,e,it),n!==null){pe=n;return}}else{if(n=H_(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,pe=null;return}}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ve===0&&(ve=5)}function Wn(t,e,n){var r=X,i=gt.transition;try{gt.transition=null,X=1,J_(t,e,n,r)}finally{gt.transition=i,X=r}return null}function J_(t,e,n,r){do Yr();while(gn!==null);if((K&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bE(t,s),t===ke&&(pe=ke=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,Rv(fa,function(){return Yr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var o=X;X=1;var a=K;K|=4,ld.current=null,K_(t,n),_v(n,t),v_(Sc),ma=!!_c,Sc=_c=null,t.current=n,q_(n),kE(),K=a,X=o,gt.transition=s}else t.current=n;if(Oo&&(Oo=!1,gn=t,Da=i),s=t.pendingLanes,s===0&&(Sn=null),CE(n.stateNode),tt(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ra)throw Ra=!1,t=jc,jc=null,t;return(Da&1)!==0&&t.tag!==0&&Yr(),s=t.pendingLanes,(s&1)!==0?t===zc?rs++:(rs=0,zc=t):rs=0,Ln(),null}function Yr(){if(gn!==null){var t=oy(Da),e=gt.transition,n=X;try{if(gt.transition=null,X=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,Da=0,(K&6)!==0)throw Error(S(331));var i=K;for(K|=4,N=t.current;N!==null;){var s=N,o=s.child;if((N.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:ts(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,g=c.return;if(vv(c),c===u){N=null;break}if(d!==null){d.return=g,N=d;break}N=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}N=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ts(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(T){le(a,a.return,T)}if(a===o){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(K=i,Ln(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(rl,t)}catch{}r=!0}return r}finally{X=n,gt.transition=e}}return!1}function Lp(t,e,n){e=ai(n,e),e=av(t,e,1),t=_n(t,e,1),e=We(),t!==null&&(Hs(t,1,e),tt(t,e))}function le(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=ai(n,t),t=lv(e,t,1),e=_n(e,t,1),t=We(),e!==null&&(Hs(e,1,t),tt(e,t));break}}e=e.return}}function Z_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Ae&n)===n&&(ve===4||ve===3&&(Ae&130023424)===Ae&&500>he()-cd?rr(t,0):ud|=n),tt(t,e)}function Nv(t,e){e===0&&((t.mode&1)===0?e=1:(e=Io,Io<<=1,(Io&130023424)===0&&(Io=4194304)));var n=We();t=tn(t,e),t!==null&&(Hs(t,e,n),tt(t,n))}function eS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nv(t,n)}function tS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Nv(t,n)}var Av;Av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Xe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Xe=!1,j_(t,e,n);Xe=(t.flags&131072)!==0}else Xe=!1,ne&&(e.flags&1048576)!==0&&by(e,Sa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zo(t,e),t=e.pendingProps;var i=ri(e,Ue.current);Qr(e,n),i=rd(null,e,r,t,i,n);var s=id();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,Ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=ul,e.stateNode=i,i._reactInternals=e,Dc(e,r,t,n),e=Oc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Wh(e),Be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rS(r),t=kt(r,t),i){case 0:e=Pc(null,e,r,t,n);break e;case 1:e=Tp(null,e,r,t,n);break e;case 11:e=kp(null,e,r,t,n);break e;case 14:e=Ip(null,e,r,kt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Tp(t,e,r,i,n);case 3:e:{if(dv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,My(t,e),Ta(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ai(Error(S(423)),e),e=Cp(t,e,r,n,i);break e}else if(r!==i){i=ai(Error(S(424)),e),e=Cp(t,e,r,n,i);break e}else for(st=En(e.stateNode.containerInfo.firstChild),ot=e,ne=!0,Tt=null,n=Vy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){e=nn(t,e,n);break e}Be(t,e,r,n)}e=e.child}return e;case 5:return By(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kc(r,i)?o=null:s!==null&&kc(r,s)&&(e.flags|=32),hv(t,e),Be(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return fv(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=si(e,null,r,n):Be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),kp(t,e,r,i,n);case 7:return Be(t,e,e.pendingProps,n),e.child;case 8:return Be(t,e,e.pendingProps.children,n),e.child;case 12:return Be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(ka,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Ze.current){e=nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ac(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ac(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qr(e,n),i=vt(i),r=r(i),e.flags|=1,Be(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Ip(t,e,r,i,n);case 15:return uv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Zo(t,e),e.tag=1,et(r)?(t=!0,Ea(e)):t=!1,Qr(e,n),Fy(e,r,i),Dc(e,r,i,n),Oc(null,e,r,!0,t,n);case 19:return pv(t,e,n);case 22:return cv(t,e,n)}throw Error(S(156,e.tag))};function Rv(t,e){return ny(t,e)}function nS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new nS(t,e,n,r)}function pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Oh)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return ir(n.children,i,s,e);case bh:o=8,i|=8;break;case tc:return t=mt(12,n,e,i|2),t.elementType=tc,t.lanes=s,t;case nc:return t=mt(13,n,e,i),t.elementType=nc,t.lanes=s,t;case rc:return t=mt(19,n,e,i),t.elementType=rc,t.lanes=s,t;case Ug:return fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:o=10;break e;case Fg:o=9;break e;case Ph:o=11;break e;case Oh:o=14;break e;case un:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ir(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function fl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=Ug,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function md(t,e,n,r,i,s,o,a,l){return t=new iS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function sS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dv(t){if(!t)return Nn;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(et(n))return Ry(t,n,e)}return e}function bv(t,e,n,r,i,s,o,a,l){return t=md(n,r,!0,t,i,s,o,a,l),t.context=Dv(null),n=t.current,r=We(),i=kn(n),s=Jt(r,i),s.callback=e!=null?e:null,_n(n,s,i),t.current.lanes=i,Hs(t,i,r),tt(t,r),t}function pl(t,e,n,r){var i=e.current,s=We(),o=kn(i);return n=Dv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_n(i,e,o),t!==null&&(Nt(t,i,o,s),Yo(t,i,o)),o}function Pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gd(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function oS(){return null}var Pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yd(t){this._internalRoot=t}ml.prototype.render=yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));pl(t,e,null,null)};ml.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){pl(null,t,null,null)}),e[en]=null}};function ml(t){this._internalRoot=t}ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&hy(t)}};function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function aS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pa(o);s.call(u)}}var o=bv(e,r,t,0,null,!1,!1,"",$p);return t._reactRootContainer=o,t[en]=o.current,Es(t.nodeType===8?t.parentNode:t),pr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pa(l);a.call(u)}}var l=md(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=l,t[en]=l.current,Es(t.nodeType===8?t.parentNode:t),pr(function(){pl(e,l,n,r)}),l}function yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pa(o);a.call(l)}}pl(e,o,t,i)}else o=aS(n,e,t,i,r);return Pa(o)}ay=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&($h(e,n|1),tt(e,he()),(K&6)===0&&(li=he()+500,Ln()))}break;case 13:pr(function(){var r=tn(t,1);if(r!==null){var i=We();Nt(r,t,1,i)}}),gd(t,1)}};Fh=function(t){if(t.tag===13){var e=tn(t,134217728);if(e!==null){var n=We();Nt(e,t,134217728,n)}gd(t,134217728)}};ly=function(t){if(t.tag===13){var e=kn(t),n=tn(t,e);if(n!==null){var r=We();Nt(n,t,e,r)}gd(t,e)}};uy=function(){return X};cy=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};fc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=al(r);if(!i)throw Error(S(90));Bg(r),oc(r,i)}}}break;case"textarea":zg(t,n);break;case"select":e=n.value,e!=null&&Wr(t,!!n.multiple,e,!1)}};Yg=hd;Xg=pr;var lS={usingClientEntryPoint:!1,Events:[Ks,Mr,al,Gg,Qg,hd]},Ui={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uS={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ey(t),t===null?null:t.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{rl=Lo.inject(uS),Mt=Lo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(S(200));return sS(t,e,null,n)};ct.createRoot=function(t,e){if(!vd(t))throw Error(S(299));var n=!1,r="",i=Pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=md(t,1,!1,null,null,n,!1,r,i),t[en]=e.current,Es(t.nodeType===8?t.parentNode:t),new yd(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=ey(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return pr(t)};ct.hydrate=function(t,e,n){if(!gl(e))throw Error(S(200));return yl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!vd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[en]=e.current,Es(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ml(e)};ct.render=function(t,e,n){if(!gl(e))throw Error(S(200));return yl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!gl(t))throw Error(S(40));return t._reactRootContainer?(pr(function(){yl(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1};ct.unstable_batchedUpdates=hd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return yl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),bg.exports=ct;var Lv,Fp=bg.exports;Lv=Fp.createRoot,Fp.hydrateRoot;function Oa(){return Oa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));var Up=function(t){return t},Vp="beforeunload",cS="popstate";function hS(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var E=r.location,I=E.pathname,V=E.search,M=E.hash,ie=i.state||{};return[ie.idx,Up({pathname:I,search:V,hash:M,state:ie.usr||null,key:ie.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var E=Xn.Pop,I=s(),V=I[0],M=I[1];if(g.length){if(V!=null){var ie=c-V;ie&&(o={action:E,location:M,retry:function(){T(ie*-1)}},T(ie))}}else f(E)}}r.addEventListener(cS,a);var l=Xn.Pop,u=s(),c=u[0],h=u[1],d=jp(),g=jp();c==null&&(c=0,i.replaceState(Oa({},i.state,{idx:c}),""));function y(E){return typeof E=="string"?E:Kc(E)}function w(E,I){return I===void 0&&(I=null),Up(Oa({pathname:h.pathname,hash:"",search:""},typeof E=="string"?xr(E):E,{state:I,key:dS()}))}function R(E,I){return[{usr:E.state,key:E.key,idx:I},y(E)]}function p(E,I,V){return!g.length||(g.call({action:E,location:I,retry:V}),!1)}function f(E){l=E;var I=s();c=I[0],h=I[1],d.call({action:l,location:h})}function m(E,I){var V=Xn.Push,M=w(E,I);function ie(){m(E,I)}if(p(V,M,ie)){var dt=R(M,c+1),jt=dt[0],Vn=dt[1];try{i.pushState(jt,"",Vn)}catch{r.location.assign(Vn)}f(V)}}function v(E,I){var V=Xn.Replace,M=w(E,I);function ie(){v(E,I)}if(p(V,M,ie)){var dt=R(M,c),jt=dt[0],Vn=dt[1];i.replaceState(jt,"",Vn),f(V)}}function T(E){i.go(E)}var x={get action(){return l},get location(){return h},createHref:y,push:m,replace:v,go:T,back:function(){T(-1)},forward:function(){T(1)},listen:function(I){return d.push(I)},block:function(I){var V=g.push(I);return g.length===1&&r.addEventListener(Vp,Bp),function(){V(),g.length||r.removeEventListener(Vp,Bp)}}};return x}function Bp(t){t.preventDefault(),t.returnValue=""}function jp(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function dS(){return Math.random().toString(36).substr(2,8)}function Kc(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function xr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wd=b.exports.createContext(null),Ed=b.exports.createContext(null),Gs=b.exports.createContext({outlet:null,matches:[]});function Rt(t,e){if(!t)throw new Error(e)}function fS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xr(e):e,i=Fv(r.pathname||"/",n);if(i==null)return null;let s=Mv(t);pS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=kS(s[a],i);return o}function Mv(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Rt(!1),o.relativePath=o.relativePath.slice(r.length));let a=Tn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Rt(!1),Mv(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:_S(a,i.index),routesMeta:l})}),e}function pS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mS=/^:\w+$/,gS=3,yS=2,vS=1,wS=10,ES=-2,zp=t=>t==="*";function _S(t,e){let n=t.split("/"),r=n.length;return n.some(zp)&&(r+=ES),e&&(r+=yS),n.filter(i=>!zp(i)).reduce((i,s)=>i+(mS.test(s)?gS:s===""?vS:wS),r)}function SS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=IS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Tn([i,c.pathname]),pathnameBase:Uv(Tn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Tn([i,c.pathnameBase]))}return s}function IS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=CS(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function TS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function CS(t,e){try{return decodeURIComponent(t)}catch{return t}}function xS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xr(t):t;return{pathname:n?n.startsWith("/")?n:NS(n,e):e,search:RS(r),hash:DS(i)}}function NS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $v(t,e,n){let r=typeof t=="string"?xr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=xS(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function AS(t){return t===""||t.pathname===""?"/":typeof t=="string"?xr(t).pathname:t.pathname}function Fv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Tn=t=>t.join("/").replace(/\/\/+/g,"/"),Uv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bS(t){wi()||Rt(!1);let{basename:e,navigator:n}=b.exports.useContext(wd),{hash:r,pathname:i,search:s}=Vv(t),o=i;if(e!=="/"){let a=AS(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Tn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function wi(){return b.exports.useContext(Ed)!=null}function Qs(){return wi()||Rt(!1),b.exports.useContext(Ed).location}function _d(){wi()||Rt(!1);let{basename:t,navigator:e}=b.exports.useContext(wd),{matches:n}=b.exports.useContext(Gs),{pathname:r}=Qs(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=b.exports.useRef(!1);return b.exports.useEffect(()=>{s.current=!0}),b.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=$v(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Tn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const PS=b.exports.createContext(null);function OS(t){let e=b.exports.useContext(Gs).outlet;return e&&b.exports.createElement(PS.Provider,{value:t},e)}function Vv(t){let{matches:e}=b.exports.useContext(Gs),{pathname:n}=Qs(),r=JSON.stringify(e.map(i=>i.pathnameBase));return b.exports.useMemo(()=>$v(t,JSON.parse(r),n),[t,r,n])}function LS(t,e){wi()||Rt(!1);let{matches:n}=b.exports.useContext(Gs),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Qs(),a;if(e){var l;let d=typeof e=="string"?xr(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Rt(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=fS(t,{pathname:c});return MS(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Tn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Tn([s,d.pathnameBase])})),n)}function MS(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>b.exports.createElement(Gs.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function $S(t){let{to:e,replace:n,state:r}=t;wi()||Rt(!1);let i=_d();return b.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function FS(t){return OS(t.context)}function Kn(t){Rt(!1)}function US(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1}=t;wi()&&Rt(!1);let a=Uv(e),l=b.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=xr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=b.exports.useMemo(()=>{let w=Fv(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:b.exports.createElement(wd.Provider,{value:l},b.exports.createElement(Ed.Provider,{children:n,value:{location:y,navigationType:i}}))}function VS(t){let{children:e,location:n}=t;return LS(qc(e),n)}function qc(t){let e=[];return b.exports.Children.forEach(t,n=>{if(!b.exports.isValidElement(n))return;if(n.type===b.exports.Fragment){e.push.apply(e,qc(n.props.children));return}n.type!==Kn&&Rt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=qc(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(this,arguments)}function BS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const jS=["onClick","reloadDocument","replace","state","target","to"];function zS(t){let{basename:e,children:n,window:r}=t,i=b.exports.useRef();i.current==null&&(i.current=hS({window:r}));let s=i.current,[o,a]=b.exports.useState({action:s.action,location:s.location});return b.exports.useLayoutEffect(()=>s.listen(a),[s]),b.exports.createElement(US,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function HS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ru=b.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=BS(e,jS),c=bS(l),h=WS(l,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&h(g)}return b.exports.createElement("a",Gc({},u,{href:c,onClick:d,ref:n,target:a}))});function WS(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=_d(),o=Qs(),a=Vv(t);return b.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!HS(l)){l.preventDefault();let u=!!r||Kc(o)===Kc(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
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
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},GS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},QS=function(t){try{return GS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YS(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function XS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZS(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const ek="FirebaseError";class Ei extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ek,Object.setPrototypeOf(this,Ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vl.prototype.create)}}class vl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ei(i,a,r)}}function tk(t,e){return t.replace(nk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nk=/\{\$([^}]+)}/g;function rk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bv(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hp(s)&&Hp(o)){if(!Bv(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ik(t,e){const n=new sk(t,e);return n.subscribe.bind(n)}class sk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ok(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Du),i.error===void 0&&(i.error=Du),i.complete===void 0&&(i.complete=Du);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ok(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Du(){}/**
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
 */function Mn(t){return t&&t._delegate?t._delegate:t}/**
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
 */class ak{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}class Et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class lk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ak;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ck(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uk(t){return t===qn?void 0:t}function ck(t){return t.instantiationMode==="EAGER"}/**
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
 */class hk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const dk={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},fk=Q.INFO,pk={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},mk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=fk,this._logHandler=mk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
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
 */const jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vk=function(t){const e=jv(t);return yk.encodeByteArray(e,!0)},zv=function(t){return vk(t).replace(/\./g,"")};function wk(){return typeof indexedDB=="object"}function Ek(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _k="FirebaseError";class Sd extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_k,Object.setPrototypeOf(this,Sd.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hv.prototype.create)}}class Hv{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sd(i,a,r)}}function Sk(t,e){return t.replace(kk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kk=/\{\$([^}]+)}/g;function Qc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wp(s)&&Wp(o)){if(!Qc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wp(t){return t!==null&&typeof t=="object"}const Ik=(t,e)=>e.some(n=>t instanceof n);let Kp,qp;function Tk(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ck(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Yc=new WeakMap,Kv=new WeakMap,bu=new WeakMap,kd=new WeakMap;function xk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function Nk(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ak(t){Xc=t(Xc)}function Rk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pu(this),e,...n);return Kv.set(r,e.sort?e.sort():[e]),Cn(r)}:Ck().includes(t)?function(...e){return t.apply(Pu(this),e),Cn(Wv.get(this))}:function(...e){return Cn(t.apply(Pu(this),e))}}function Dk(t){return typeof t=="function"?Rk(t):(t instanceof IDBTransaction&&Nk(t),Ik(t,Tk())?new Proxy(t,Xc):t)}function Cn(t){if(t instanceof IDBRequest)return xk(t);if(bu.has(t))return bu.get(t);const e=Dk(t);return e!==t&&(bu.set(t,e),kd.set(e,t)),e}const Pu=t=>kd.get(t);function qv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bk=["get","getKey","getAll","getAllKeys","count"],Pk=["put","add","delete","clear"],Ou=new Map;function Gp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ou.get(e))return Ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ou.set(e,s),s}Ak(t=>({...t,get:(e,n,r)=>Gp(e,n)||t.get(e,n,r),has:(e,n)=>!!Gp(e,n)||t.has(e,n)}));/**
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
 */class Ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jc="@firebase/app",Qp="0.7.27";/**
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
 */const Id=new wl("@firebase/app"),Mk="@firebase/app-compat",$k="@firebase/analytics-compat",Fk="@firebase/analytics",Uk="@firebase/app-check-compat",Vk="@firebase/app-check",Bk="@firebase/auth",jk="@firebase/auth-compat",zk="@firebase/database",Hk="@firebase/database-compat",Wk="@firebase/functions",Kk="@firebase/functions-compat",qk="@firebase/installations",Gk="@firebase/installations-compat",Qk="@firebase/messaging",Yk="@firebase/messaging-compat",Xk="@firebase/performance",Jk="@firebase/performance-compat",Zk="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",iI="@firebase/firestore-compat",sI="firebase",oI="9.8.4";/**
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
 */const Gv="[DEFAULT]",aI={[Jc]:"fire-core",[Mk]:"fire-core-compat",[Fk]:"fire-analytics",[$k]:"fire-analytics-compat",[Vk]:"fire-app-check",[Uk]:"fire-app-check-compat",[Bk]:"fire-auth",[jk]:"fire-auth-compat",[zk]:"fire-rtdb",[Hk]:"fire-rtdb-compat",[Wk]:"fire-fn",[Kk]:"fire-fn-compat",[qk]:"fire-iid",[Gk]:"fire-iid-compat",[Qk]:"fire-fcm",[Yk]:"fire-fcm-compat",[Xk]:"fire-perf",[Jk]:"fire-perf-compat",[Zk]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat","fire-js":"fire-js",[sI]:"fire-js-all"};/**
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
 */const La=new Map,Zc=new Map;function lI(t,e){try{t.container.addComponent(e)}catch(n){Id.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(Zc.has(e))return Id.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of La.values())lI(n,t);return!0}function $n(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const uI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},mr=new Hv("app","Firebase",uI);/**
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
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=oI;function hI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gv,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw mr.create("bad-app-name",{appName:String(r)});const i=La.get(r);if(i){if(Qc(t,i.options)&&Qc(n,i.config))return i;throw mr.create("duplicate-app",{appName:r})}const s=new hk(r);for(const a of Zc.values())s.addComponent(a);const o=new cI(t,n,s);return La.set(r,o),o}function El(t=Gv){const e=La.get(t);if(!e)throw mr.create("no-app",{appName:t});return e}function nt(t,e,n){var r;let i=(r=aI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Id.warn(a.join(" "));return}Dt(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dI="firebase-heartbeat-database",fI=1,As="firebase-heartbeat-store";let Lu=null;function Qv(){return Lu||(Lu=qv(dI,fI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}}).catch(t=>{throw mr.create("storage-open",{originalErrorMessage:t.message})})),Lu}async function pI(t){var e;try{return(await Qv()).transaction(As).objectStore(As).get(Yv(t))}catch(n){throw mr.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Yp(t,e){var n;try{const i=(await Qv()).transaction(As,"readwrite");return await i.objectStore(As).put(e,Yv(t)),i.done}catch(r){throw mr.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Yv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mI=1024,gI=30*24*60*60*1e3;class yI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xp(),{heartbeatsToSend:n,unsentEntries:r}=vI(this._heartbeatsCache.heartbeats),i=zv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xp(){return new Date().toISOString().substring(0,10)}function vI(t,e=mI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wk()?Ek().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jp(t){return zv(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EI(t){Dt(new Et("platform-logger",e=>new Ok(e),"PRIVATE")),Dt(new Et("heartbeat",e=>new yI(e),"PRIVATE")),nt(Jc,Qp,t),nt(Jc,Qp,"esm2017"),nt("fire-js","")}EI("");function Td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _I=Xv,Jv=new vl("auth","Firebase",Xv());/**
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
 */const Zp=new wl("@firebase/auth");function ra(t,...e){Zp.logLevel<=Q.ERROR&&Zp.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw Cd(t,...e)}function Ft(t,...e){return Cd(t,...e)}function Zv(t,e,n){const r=Object.assign(Object.assign({},_I()),{[e]:n});return new vl("auth","Firebase",r).create(e,{appName:t.name})}function SI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(t,"argument-error"),Zv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jv.create(t,...e)}function O(t,e,...n){if(!t)throw Cd(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function rn(t,e){t||Qt(e)}/**
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
 */const em=new Map;function Yt(t){rn(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
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
 */function kI(t,e){const n=$n(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bv(s,e!=null?e:{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function II(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function eh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TI(){return tm()==="http:"||tm()==="https:"}function tm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TI()||XS()||"connection"in navigator)?navigator.onLine:!0}function xI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=YS()||JS()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xd(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class e0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const AI=new Xs(3e4,6e4);function Si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ki(t,e,n,r,i={}){return t0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ys(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),e0.fetch()(n0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function t0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NI),e);try{const i=new RI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zv(t,c,u);_t(t,c)}}catch(i){if(i instanceof Ei)throw i;_t(t,"network-request-failed")}}async function Js(t,e,n,r,i={}){const s=await ki(t,e,n,r,i);return"mfaPendingCredential"in s&&_t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function n0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xd(t.config,i):`${t.config.apiScheme}://${i}`}class RI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),AI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DI(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function bI(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PI(t,e=!1){const n=Mn(t),r=await n.getIdToken(e),i=Nd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:is(Mu(i.auth_time)),issuedAtTime:is(Mu(i.iat)),expirationTime:is(Mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mu(t){return Number(t)*1e3}function Nd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=QS(r);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function OI(t){const e=Nd(t);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ei&&LI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class r0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ma(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rs(t,bI(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UI(s.providerUserInfo):[],a=FI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new r0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function $I(t){const e=Mn(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UI(t){return t.map(e=>{var{providerId:n}=e,r=Td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VI(t,e){const n=await t0(t,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=n0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",e0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):OI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ds;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function ln(t,e){O(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new r0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PI(this,e)}reload(){return $I(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,DI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:T,providerData:x,stsTokenManager:E}=n;O(m&&E,e,"internal-error");const I=Ds.fromJSON(this.name,E);O(typeof m=="string",e,"internal-error"),ln(h,e.name),ln(d,e.name),O(typeof v=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),ln(g,e.name),ln(y,e.name),ln(w,e.name),ln(R,e.name),ln(p,e.name),ln(f,e.name);const V=new sr({uid:m,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:I,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(V.providerData=x.map(M=>Object.assign({},M))),R&&(V._redirectEventId=R),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ds;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ma(s),s}}/**
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
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i0.type="NONE";const nm=i0;/**
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
 */function ia(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Yt(nm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(nm);const o=ia(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xr(s,e,r))}}/**
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
 */function rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(c0(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||o0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s0(t=Ve()){return/firefox\//i.test(t)}function Ad(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o0(t=Ve()){return/crios\//i.test(t)}function a0(t=Ve()){return/iemobile/i.test(t)}function l0(t=Ve()){return/android/i.test(t)}function u0(t=Ve()){return/blackberry/i.test(t)}function c0(t=Ve()){return/webos/i.test(t)}function _l(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function BI(t=Ve()){var e;return _l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return ZS()&&document.documentMode===10}function h0(t=Ve()){return _l(t)||l0(t)||c0(t)||u0(t)||/windows phone/i.test(t)||a0(t)}function zI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function d0(t,e=[]){let n;switch(t){case"Browser":n=rm(Ve());break;case"Worker":n=`${rm(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class HI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class WI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ma(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mn(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zs(t){return Mn(t)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=ik(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function KI(t,e){return ki(t,"POST","/v1/accounts:update",e)}/**
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
 */async function qI(t,e){return Js(t,"POST","/v1/accounts:signInWithPassword",Si(t,e))}async function GI(t,e){return ki(t,"POST","/v1/accounts:sendOobCode",Si(t,e))}async function QI(t,e){return GI(t,e)}/**
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
 */async function YI(t,e){return Js(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}async function XI(t,e){return Js(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}/**
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
 */class bs extends Rd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new bs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YI(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return KI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XI(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jr(t,e){return Js(t,"POST","/v1/accounts:signInWithIdp",Si(t,e))}/**
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
 */const JI="http://localhost";class gr extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Td(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ys(n)}return e}}/**
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
 */function ZI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eT(t){const e=Wi(Ki(t)).link,n=e?Wi(Ki(e)).deep_link_id:null,r=Wi(Ki(t)).deep_link_id;return(r?Wi(Ki(r)).link:null)||r||n||e||t}class Dd{constructor(e){var n,r,i,s,o,a;const l=Wi(Ki(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ZI((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eT(e);try{return new Dd(n)}catch{return null}}}/**
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
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dd.parseLink(n);return O(r,"argument-error"),bs._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends eo{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class fn extends eo{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class pn extends eo{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function tT(t,e){return Js(t,"POST","/v1/accounts:signUp",Si(t,e))}/**
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
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=sm(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sm(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $a extends Ei{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $a(e,n,r,i)}}function f0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,s,e,r):s})}async function nT(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
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
 */async function rT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Rs(t,f0(i,s,e,t),n);O(o.idToken,i,"internal-error");const a=Nd(o.idToken);O(a,i,"internal-error");const{sub:l}=a;return O(t.uid===l,i,"user-mismatch"),yr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&_t(i,"user-mismatch"),o}}/**
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
 */async function p0(t,e,n=!1){const r="signIn",i=await f0(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function iT(t,e){return p0(Zs(t),e)}/**
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
 */function sT(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function oT(t,e,n){const r=Mn(t),i={requestType:"PASSWORD_RESET",email:e};n&&sT(r,i,n),await QI(r,i)}async function aT(t,e,n){const r=Zs(t),i=await tT(r,{returnSecureToken:!0,email:e,password:n}),s=await yr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function lT(t,e,n){return iT(Mn(t),Ii.credential(e,n))}function uT(t,e,n,r){return Mn(t).onAuthStateChanged(e,n,r)}function cT(t){return Mn(t).signOut()}const Fa="__sak";/**
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
 */class m0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function hT(){const t=Ve();return Ad(t)||_l(t)}const dT=1e3,fT=10;class g0 extends m0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hT()&&zI(),this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}g0.type="LOCAL";const pT=g0;/**
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
 */class y0 extends m0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}y0.type="SESSION";const v0=y0;/**
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
 */function mT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await mT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
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
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function yT(t){Ut().location.href=t}/**
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
 */function w0(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function vT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return w0()?self:null}/**
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
 */const E0="firebaseLocalStorageDb",_T=1,Ua="firebaseLocalStorage",_0="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function ST(){const t=indexedDB.deleteDatabase(E0);return new to(t).toPromise()}function th(){const t=indexedDB.open(E0,_T);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ua,{keyPath:_0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ua)?e(r):(r.close(),await ST(),e(await th()))})})}async function om(t,e,n){const r=kl(t,!0).put({[_0]:e,value:n});return new to(r).toPromise()}async function kT(t,e){const n=kl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function am(t,e){const n=kl(t,!0).delete(e);return new to(n).toPromise()}const IT=800,TT=3;class S0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await om(e,Fa,"1"),await am(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>om(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>am(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S0.type="LOCAL";const CT=S0;/**
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
 */function xT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xT().appendChild(r)})}function AT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Xs(3e4,6e4);/**
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
 */function k0(t,e){return e?Yt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Od extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RT(t){return p0(t.auth,new Od(t),t.bypassAuthState)}function DT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),rT(n,new Od(t),t.bypassAuthState)}async function bT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),nT(n,new Od(t),t.bypassAuthState)}/**
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
 */class I0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RT;case"linkViaPopup":case"linkViaRedirect":return bT;case"reauthViaPopup":case"reauthViaRedirect":return DT;default:_t(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PT=new Xs(2e3,1e4);async function lm(t,e,n){const r=Zs(t);SI(t,e,bd);const i=k0(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends I0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const OT="pendingRedirect",sa=new Map;class LT extends I0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await MT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MT(t,e){const n=UT(e),r=FT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $T(t,e){sa.set(t._key(),e)}function FT(t){return Yt(t._redirectPersistence)}function UT(t){return ia(OT,t.config.apiKey,t.name)}async function VT(t,e,n=!1){const r=Zs(t),i=k0(r,e),o=await new LT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BT=10*60*1e3;class jT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!T0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BT&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T0(t);default:return!1}}/**
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
 */async function HT(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
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
 */const WT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KT=/^https?/;async function qT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HT(t);for(const n of e)try{if(GT(n))return}catch{}_t(t,"unauthorized-domain")}function GT(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KT.test(n))return!1;if(WT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QT=new Xs(3e4,6e4);function cm(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YT(t){return new Promise((e,n)=>{var r,i,s;function o(){cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(Ft(t,"network-request-failed"))},timeout:QT.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=AT("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},NT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oa=null,e})}let oa=null;function XT(t){return oa=oa||YT(t),oa}/**
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
 */const JT=new Xs(5e3,15e3),ZT="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xd(e,eC):`https://${t.config.authDomain}/${ZT}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=nC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ys(r).slice(1)}`}async function iC(t){const e=await XT(t),n=Ut().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:rC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},JT.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,lC="_blank",uC="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cC(t,e,n,r=oC,i=aC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=o0(u)?lC:n),s0(u)&&(e=e||uC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(BI(u)&&a!=="_self")return hC(e||"",a),new hm(null);const h=window.open(e||"",a,c);O(h,t,"popup-blocked");try{h.focus()}catch{}return new hm(h)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",fC="emulator/auth/handler";function dm(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof eo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${pC(t)}?${Ys(a).slice(1)}`}function pC({config:t}){return t.emulator?xd(t,fC):`https://${t.authDomain}/${dC}`}/**
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
 */const $u="webStorageSupport";class mC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=VT,this._overrideRedirectResult=$T}async _openPopup(e,n,r,i){var s;rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dm(e,n,r,eh(),i);return cC(e,o,Pd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),yT(dm(e,n,r,eh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iC(e),r=new jT(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$u];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||Ad()||_l()}}const gC=mC;var fm="@firebase/auth",pm="0.20.4";/**
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
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wC(t){Dt(new Et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{O(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(t)},c=new WI(a,l,u);return II(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new Et("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(r=>new yC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(fm,pm,vC(t)),nt(fm,pm,"esm2017")}/**
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
 */function EC(t=El()){const e=$n(t,"auth");return e.isInitialized()?e.getImmediate():kI(t,{popupRedirectResolver:gC,persistence:[CT,pT,v0]})}wC("Browser");var _C="firebase",SC="9.8.4";/**
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
 */nt(_C,SC,"app");/**
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
 */function Il(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Il())}function IC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CC(){return Il().indexOf("Electron/")>=0}function xC(){const t=Il();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NC(){return Il().indexOf("MSAppHost/")>=0}/**
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
 */const AC="FirebaseError";class Tl extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AC,Object.setPrototypeOf(this,Tl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,RC.prototype.create)}}class RC{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tl(i,a,r)}}function DC(t,e){return t.replace(bC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bC=/\{\$([^}]+)}/g;/**
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
 */function PC(t){return t&&t._delegate?t._delegate:t}var OC=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A,Ld=Ld||{},F=OC||self;function Va(){}function nh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function no(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LC(t){return Object.prototype.hasOwnProperty.call(t,Fu)&&t[Fu]||(t[Fu]=++MC)}var Fu="closure_uid_"+(1e9*Math.random()>>>0),MC=0;function $C(t,e,n){return t.call.apply(t.bind,arguments)}function FC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Re(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=$C:Re=FC,Re.apply(null,arguments)}function $o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fn(){this.s=this.s,this.o=this.o}var UC=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),UC!=0)&&LC(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},x0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function VC(t){e:{var e=Dx;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function mm(t){return Array.prototype.concat.apply([],arguments)}function Md(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ba(t){return/^[\s\xa0]*$/.test(t)}var gm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function je(t,e){return t.indexOf(e)!=-1}function Uu(t,e){return t<e?-1:t>e?1:0}var ze;e:{var ym=F.navigator;if(ym){var vm=ym.userAgent;if(vm){ze=vm;break e}}ze=""}function $d(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function N0(t){const e={};for(const n in t)e[n]=t[n];return e}var wm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wm.length;s++)n=wm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fd(t){return Fd[" "](t),t}Fd[" "]=Va;function BC(t){var e=HC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var jC=je(ze,"Opera"),ui=je(ze,"Trident")||je(ze,"MSIE"),R0=je(ze,"Edge"),rh=R0||ui,D0=je(ze,"Gecko")&&!(je(ze.toLowerCase(),"webkit")&&!je(ze,"Edge"))&&!(je(ze,"Trident")||je(ze,"MSIE"))&&!je(ze,"Edge"),zC=je(ze.toLowerCase(),"webkit")&&!je(ze,"Edge");function b0(){var t=F.document;return t?t.documentMode:void 0}var ja;e:{var Vu="",Bu=function(){var t=ze;if(D0)return/rv:([^\);]+)(\)|;)/.exec(t);if(R0)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zC)return/WebKit\/(\S+)/.exec(t);if(jC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bu&&(Vu=Bu?Bu[1]:""),ui){var ju=b0();if(ju!=null&&ju>parseFloat(Vu)){ja=String(ju);break e}}ja=Vu}var HC={};function WC(){return BC(function(){let t=0;const e=gm(String(ja)).split("."),n=gm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Uu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Uu(i[2].length==0,s[2].length==0)||Uu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ih;if(F.document&&ui){var Em=b0();ih=Em||parseInt(ja,10)||void 0}else ih=void 0;var KC=ih,qC=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Va,e),F.removeEventListener("test",Va,e)}catch{}return t}();function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};function Ps(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(D0){e:{try{Fd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.Z.h.call(this)}}Oe(Ps,Fe);var GC={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),QC=0;function YC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++QC,this.ca=this.fa=!1}function Cl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function xl(t){this.src=t,this.g={},this.h=0}xl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=oh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new YC(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=C0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Cl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),zu={};function P0(t,e,n,r,i){if(r&&r.once)return L0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)P0(t,e[s],n,r,i);return null}return n=jd(n),t&&t[ro]?t.N(e,n,no(r)?!!r.capture:!!r,i):O0(t,e,n,!1,r,i)}function O0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=no(i)?!!i.capture:!!i,a=Bd(t);if(a||(t[Ud]=a=new xl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=XC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)qC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function XC(){function t(n){return e.call(t.src,t.listener,n)}var e=JC;return t}function L0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)L0(t,e[s],n,r,i);return null}return n=jd(n),t&&t[ro]?t.O(e,n,no(r)?!!r.capture:!!r,i):O0(t,e,n,!0,r,i)}function M0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)M0(t,e[s],n,r,i);else r=no(r)?!!r.capture:!!r,n=jd(n),t&&t[ro]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=oh(s,n,r,i),-1<n&&(Cl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,r,i)),(n=-1<t?e[t]:null)&&Vd(n))}function Vd(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ro])sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bd(e))?(sh(n,t),n.h==0&&(n.src=null,e[Ud]=null)):Cl(t)}}}function $0(t){return t in zu?zu[t]:zu[t]="on"+t}function JC(t,e){if(t.ca)t=!0;else{e=new Ps(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Vd(t),t=n.call(r,e)}return t}function Bd(t){return t=t[Ud],t instanceof xl?t:null}var Hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function jd(t){return typeof t=="function"?t:(t[Hu]||(t[Hu]=function(e){return t.handleEvent(e)}),t[Hu])}function Ie(){Fn.call(this),this.i=new xl(this),this.P=this,this.I=null}Oe(Ie,Fn);Ie.prototype[ro]=!0;Ie.prototype.removeEventListener=function(t,e,n,r){M0(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),A0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fo(o,r,!0,e)&&i}if(o=e.g=t,i=Fo(o,r,!0,e)&&i,i=Fo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fo(o,r,!1,e)&&i}Ie.prototype.M=function(){if(Ie.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Cl(n[r]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zd=F.JSON.stringify;function ZC(){var t=U0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ex{constructor(){this.h=this.g=null}add(e,n){const r=F0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var F0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tx,t=>t.reset());class tx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nx(t){F.setTimeout(()=>{throw t},0)}function Hd(t,e){ah||rx(),lh||(ah(),lh=!0),U0.add(t,e)}var ah;function rx(){var t=F.Promise.resolve(void 0);ah=function(){t.then(ix)}}var lh=!1,U0=new ex;function ix(){for(var t;t=ZC();){try{t.h.call(t.g)}catch(n){nx(n)}var e=F0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lh=!1}function Nl(t,e){Ie.call(this),this.h=t||1,this.g=e||F,this.j=Re(this.kb,this),this.l=Date.now()}Oe(Nl,Ie);A=Nl.prototype;A.da=!1;A.S=null;A.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(Wd(this),this.start()))}};A.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}A.M=function(){Nl.Z.M.call(this),Wd(this),delete this.g};function Kd(t,e,n){if(typeof t=="function")n&&(t=Re(t,n));else if(t&&typeof t.handleEvent=="function")t=Re(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function V0(t){t.g=Kd(()=>{t.g=null,t.i&&(t.i=!1,V0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sx extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:V0(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(t){Fn.call(this),this.h=t,this.g={}}Oe(Os,Fn);var _m=[];function B0(t,e,n,r){Array.isArray(n)||(n&&(_m[0]=n.toString()),n=_m);for(var i=0;i<n.length;i++){var s=P0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function j0(t){$d(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vd(e)},t),t.g={}}Os.prototype.M=function(){Os.Z.M.call(this),j0(this)};Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Al(){this.g=!0}Al.prototype.Aa=function(){this.g=!1};function ox(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ax(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ux(t,n)+(r?" "+r:"")})}function lx(t,e){t.info(function(){return"TIMEOUT: "+e})}Al.prototype.info=function(){};function ux(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zd(n)}catch{return e}}var Nr={},Sm=null;function Rl(){return Sm=Sm||new Ie}Nr.Ma="serverreachability";function z0(t){Fe.call(this,Nr.Ma,t)}Oe(z0,Fe);function Ls(t){const e=Rl();De(e,new z0(e))}Nr.STAT_EVENT="statevent";function H0(t,e){Fe.call(this,Nr.STAT_EVENT,t),this.stat=e}Oe(H0,Fe);function He(t){const e=Rl();De(e,new H0(e,t))}Nr.Na="timingevent";function W0(t,e){Fe.call(this,Nr.Na,t),this.size=e}Oe(W0,Fe);function io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Dl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},K0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function qd(){}qd.prototype.h=null;function km(t){return t.h||(t.h=t.i())}function q0(){}var so={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Gd(){Fe.call(this,"d")}Oe(Gd,Fe);function Qd(){Fe.call(this,"c")}Oe(Qd,Fe);var uh;function bl(){}Oe(bl,qd);bl.prototype.g=function(){return new XMLHttpRequest};bl.prototype.i=function(){return{}};uh=new bl;function oo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Os(this),this.P=cx,t=rh?125:void 0,this.W=new Nl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new G0}function G0(){this.i=null,this.g="",this.h=!1}var cx=45e3,ch={},za={};A=oo.prototype;A.setTimeout=function(t){this.P=t};function hh(t,e,n){t.K=1,t.v=Ol(sn(e)),t.s=n,t.U=!0,Q0(t,null)}function Q0(t,e){t.F=Date.now(),ao(t),t.A=sn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),nw(n.h,"t",r),t.C=0,n=t.l.H,t.h=new G0,t.g=Sw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new sx(Re(t.Ia,t,t.g),t.O)),B0(t.V,t.g,"readystatechange",t.gb),e=t.H?N0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ls(),ox(t.j,t.u,t.A,t.m,t.X,t.s)}A.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};A.Ia=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||rh||this.g&&(this.h.h||this.g.ga()||xm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ls(3):Ls(2)),Pl(this);var n=this.g.ba();this.N=n;t:if(Y0(this)){var r=xm(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Zn(this),ss(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ax(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ba(a)){var u=a;break t}}u=null}if(n=u)zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dh(this,n);else{this.i=!1,this.o=3,He(12),Zn(this),ss(this);break e}}this.U?(X0(this,c,o),rh&&this.i&&c==3&&(B0(this.V,this.W,"tick",this.fb),this.W.start())):(zr(this.j,this.m,o,null),dh(this,o)),c==4&&Zn(this),this.i&&!this.I&&(c==4?vw(this.l,this):(this.i=!1,ao(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Zn(this),ss(this)}}}catch{}finally{}};function Y0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function X0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=hx(t,n),i==za){e==4&&(t.o=4,He(14),r=!1),zr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ch){t.o=4,He(15),zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zr(t.j,t.m,i,null),dh(t,i);Y0(t)&&i!=za&&i!=ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),sf(e),e.L=!0,He(11))):(zr(t.j,t.m,n,"[Invalid Chunked Response]"),Zn(t),ss(t))}A.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&(Pl(this),X0(this,t,e),this.i&&t!=4&&ao(this))}};function hx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?za:(n=Number(e.substring(n,r)),isNaN(n)?ch:(r+=1,r+n>e.length?za:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,Zn(this)};function ao(t){t.Y=Date.now()+t.P,J0(t,t.P)}function J0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=io(Re(t.eb,t),e)}function Pl(t){t.B&&(F.clearTimeout(t.B),t.B=null)}A.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lx(this.j,this.A),this.K!=2&&(Ls(),He(17)),Zn(this),this.o=2,ss(this)):J0(this,this.Y-t)};function ss(t){t.l.G==0||t.I||vw(t.l,t)}function Zn(t){Pl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wd(t.W),j0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fh(n.i,t))){if(n.I=t.N,!t.J&&fh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qa(n),$l(n);else break e;rf(n),He(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=io(Re(n.ab,n),6e3));if(1>=sw(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else er(n,11)}else if((t.J||n.g==t)&&qa(n),!Ba(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(je(y,"spdy")||je(y,"quic")||je(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Jd(s,s.h),s.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,re(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_w(r,r.H?r.la:null,r.W),o.J){ow(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Pl(a),ao(a)),r.g=o}else gw(r);0<n.l.length&&Fl(n)}else u[0]!="stop"&&u[0]!="close"||er(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?er(n,7):nf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ls(4)}catch{}}function dx(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(nh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Yd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(nh(t)||typeof t=="string")x0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(nh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=dx(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ti(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ti)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}A=Ti.prototype;A.R=function(){Xd(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};A.T=function(){return Xd(this),this.g.concat()};function Xd(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];vr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],vr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}A.get=function(t,e){return vr(this.h,t)?this.h[t]:e};A.set=function(t,e){vr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};A.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function vr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Z0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function fx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof wr){this.g=e!==void 0?e:t.g,Ha(this,t.j),this.s=t.s,Wa(this,t.i),Ka(this,t.m),this.l=t.l,e=t.h;var n=new Ms;n.i=e.i,e.g&&(n.g=new Ti(e.g),n.h=e.h),Im(this,n),this.o=t.o}else t&&(n=String(t).match(Z0))?(this.g=!!e,Ha(this,n[1]||"",!0),this.s=os(n[2]||""),Wa(this,n[3]||"",!0),Ka(this,n[4]),this.l=os(n[5]||"",!0),Im(this,n[6]||"",!0),this.o=os(n[7]||"")):(this.g=!!e,this.h=new Ms(null,this.g))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qi(e,Tm,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qi(e,Tm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(qi(n,n.charAt(0)=="/"?vx:yx,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qi(n,Ex)),t.join("")};function sn(t){return new wr(t)}function Ha(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wa(t,e,n){t.i=n?os(e,!0):e}function Ka(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Im(t,e,n){e instanceof Ms?(t.h=e,_x(t.h,t.g)):(n||(e=qi(e,wx)),t.h=new Ms(e,t.g))}function re(t,e,n){t.h.set(e,n)}function Ol(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function px(t){return t instanceof wr?sn(t):new wr(t,void 0)}function mx(t,e,n,r){var i=new wr(null,void 0);return t&&Ha(i,t),e&&Wa(i,e),n&&Ka(i,n),r&&(i.l=r),i}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tm=/[#\/\?@]/g,yx=/[#\?:]/g,vx=/[#\?]/g,wx=/[#\?@]/g,Ex=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Ti,t.h=0,t.i&&fx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Ms.prototype;A.add=function(t,e){Un(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ew(t,e){Un(t),e=Ci(t,e),vr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,vr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Xd(t)))}function tw(t,e){return Un(t),e=Ci(t,e),vr(t.g.h,e)}A.forEach=function(t,e){Un(this),this.g.forEach(function(n,r){x0(n,function(i){t.call(e,i,r,this)},this)},this)};A.T=function(){Un(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};A.R=function(t){Un(this);var e=[];if(typeof t=="string")tw(this,t)&&(e=mm(e,this.g.get(Ci(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=mm(e,t[n])}return e};A.set=function(t,e){return Un(this),this.i=null,t=Ci(this,t),tw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function nw(t,e,n){ew(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),Md(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _x(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ew(this,r),nw(this,i,n))},t)),t.j=e}var Sx=class{constructor(t,e){this.h=t,this.g=e}};function rw(t){this.l=t||kx,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kx=10;function iw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sw(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jd(t,e){t.g?t.g.add(e):t.h=e}function ow(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rw.prototype.cancel=function(){if(this.i=aw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function aw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Md(t.i)}function Zd(){}Zd.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Zd.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function Ix(){this.g=new Zd}function Tx(t,e,n){const r=n||"";try{Yd(t,function(i,s){let o=i;no(i)&&(o=zd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cx(t,e){const n=new Al;if(F.Image){const r=new Image;r.onload=$o(Uo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$o(Uo,n,r,"TestLoadImage: error",!1,e),r.onabort=$o(Uo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$o(Uo,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Uo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lo(t){this.l=t.$b||null,this.j=t.ib||!1}Oe(lo,qd);lo.prototype.g=function(){return new Ll(this.l,this.j)};lo.prototype.i=function(t){return function(){return t}}({});function Ll(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ef,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Ll,Ie);var ef=0;A=Ll.prototype;A.open=function(t,e){if(this.readyState!=ef)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=ef};A.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function lw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}A.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?uo(this):$s(this),this.readyState==3&&lw(this)}};A.Ua=function(t){this.g&&(this.response=this.responseText=t,uo(this))};A.Ta=function(t){this.g&&(this.response=t,uo(this))};A.ha=function(){this.g&&uo(this)};function uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ll.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xx=F.JSON.parse;function ge(t){Ie.call(this),this.headers=new Ti,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=uw,this.K=this.L=!1}Oe(ge,Ie);var uw="",Nx=/^https?$/i,Ax=["POST","PUT"];A=ge.prototype;A.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uh.g(),this.C=this.u?km(this.u):km(uh),this.g.onreadystatechange=Re(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cm(this,s);return}t=n||"";const i=new Ti(this.headers);r&&Yd(r,function(s,o){i.set(o,s)}),r=VC(i.T()),n=F.FormData&&t instanceof F.FormData,!(0<=C0(Ax,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dw(this),0<this.B&&((this.K=Rx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.pa,this)):this.A=Kd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cm(this,s)}};function Rx(t){return ui&&WC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Dx(t){return t.toLowerCase()=="content-type"}A.pa=function(){typeof Ld!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Cm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,cw(t),Ml(t)}function cw(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Ml(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ml(this,!0)),ge.Z.M.call(this)};A.Fa=function(){this.s||(this.F||this.v||this.l?hw(this):this.cb())};A.cb=function(){hw(this)};function hw(t){if(t.h&&typeof Ld!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)Kd(t.Fa,0,t);else if(De(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Z0)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!Nx.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",cw(t)}}finally{Ml(t)}}}}function Ml(t,e){if(t.g){dw(t);const n=t.g,r=t.C[0]?Va:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function dw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}A.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};A.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xx(e)}};function xm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case uw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Da=function(){return this.m};A.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function bx(t){let e="";return $d(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fw(t){this.za=0,this.l=[],this.h=new Al,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vi("baseRetryDelayMs",5e3,t),this.$a=Vi("retryDelaySeedMs",1e4,t),this.Ya=Vi("forwardChannelMaxRetries",2,t),this.ra=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new rw(t&&t.concurrentRequestLimit),this.Ca=new Ix,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}A=fw.prototype;A.ma=8;A.G=1;function nf(t){if(pw(t),t.G==3){var e=t.V++,n=sn(t.F);re(n,"SID",t.J),re(n,"RID",e),re(n,"TYPE","terminate"),co(t,n),e=new oo(t,t.h,e,void 0),e.K=2,e.v=Ol(sn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ao(e)}Ew(t)}A.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $l(t){t.g&&(sf(t),t.g.cancel(),t.g=null)}function pw(t){$l(t),t.u&&(F.clearTimeout(t.u),t.u=null),qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Wu(t,e){t.l.push(new Sx(t.Za++,e)),t.G==3&&Fl(t)}function Fl(t){iw(t.i)||t.m||(t.m=!0,Hd(t.Ha,t),t.C=0)}function Px(t,e){return sw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=io(Re(t.Ha,t,e),ww(t,t.C)),t.C++,!0)}A.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new oo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=N0(s),A0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mw(this,i,e),n=sn(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),co(this,n),this.o&&s&&tf(n,this.o,s),Jd(this.i,i),this.Ra&&re(n,"TYPE","init"),this.ja?(re(n,"$req",e),re(n,"SID","null"),i.$=!0,hh(i,n,null)):hh(i,n,e),this.G=2}}else this.G==3&&(t?Nm(this,t):this.l.length==0||iw(this.i)||Nm(this))};function Nm(t,e){var n;e?n=e.m:n=t.V++;const r=sn(t.F);re(r,"SID",t.J),re(r,"RID",n),re(r,"AID",t.U),co(t,r),t.o&&t.s&&tf(r,t.o,t.s),n=new oo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=mw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Jd(t.i,n),hh(n,r,e)}function co(t,e){t.j&&Yd({},function(n,r){re(e,r,n)})}function mw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Re(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{Tx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function gw(t){t.g||t.u||(t.Y=1,Hd(t.Ga,t),t.A=0)}function rf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=io(Re(t.Ga,t),ww(t,t.A)),t.A++,!0)}A.Ga=function(){if(this.u=null,yw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=io(Re(this.bb,this),t)}};A.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,He(10),$l(this),yw(this))};function sf(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function yw(t){t.g=new oo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=sn(t.oa);re(e,"RID","rpc"),re(e,"SID",t.J),re(e,"CI",t.N?"0":"1"),re(e,"AID",t.U),co(t,e),re(e,"TYPE","xmlhttp"),t.o&&t.s&&tf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ol(sn(e)),n.s=null,n.U=!0,Q0(n,t)}A.ab=function(){this.v!=null&&(this.v=null,$l(this),rf(this),He(19))};function qa(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function vw(t,e){var n=null;if(t.g==e){qa(t),sf(t),t.g=null;var r=2}else if(fh(t.i,e))n=e.D,ow(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Rl(),De(r,new W0(r,n)),Fl(t)}else gw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&Px(t,e)||r==2&&rf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:er(t,5);break;case 4:er(t,10);break;case 3:er(t,6);break;default:er(t,2)}}}function ww(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function er(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Re(t.jb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ha(n,"https"),Ol(n)),Cx(n.toString(),r)}else He(2);t.G=0,t.j&&t.j.va(e),Ew(t),pw(t)}A.jb=function(t){t?(this.h.info("Successfully pinged google.com"),He(2)):(this.h.info("Failed to ping google.com"),He(1))};function Ew(t){t.G=0,t.I=-1,t.j&&((aw(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Md(t.l),t.l.length=0),t.j.ua())}function _w(t,e,n){let r=px(n);if(r.i!="")e&&Wa(r,e+"."+r.i),Ka(r,r.m);else{const i=F.location;r=mx(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&$d(t.aa,function(i,s){re(r,s,i)}),e=t.D,n=t.sa,e&&n&&re(r,e,n),re(r,"VER",t.ma),co(t,r),r}function Sw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ge(new lo({ib:!0})):new ge(t.qa),e.L=t.H,e}function kw(){}A=kw.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Oa=function(){};function Ga(){if(ui&&!(10<=Number(KC)))throw Error("Environmental error: no available transport.")}Ga.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ie.call(this),this.g=new fw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ba(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ba(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xi(this)}Oe(ut,Ie);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Hd(Re(t.hb,t,e))),He(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_w(t,null,t.W),Fl(t)};ut.prototype.close=function(){nf(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wu(this.g,e)}else this.v?(e={},e.__data__=zd(t),Wu(this.g,e)):Wu(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,nf(this.g),delete this.g,ut.Z.M.call(this)};function Iw(t){Gd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(Iw,Gd);function Tw(){Qd.call(this),this.status=1}Oe(Tw,Qd);function xi(t){this.g=t}Oe(xi,kw);xi.prototype.xa=function(){De(this.g,"a")};xi.prototype.wa=function(t){De(this.g,new Iw(t))};xi.prototype.va=function(t){De(this.g,new Tw)};xi.prototype.ua=function(){De(this.g,"b")};Ga.prototype.createWebChannel=Ga.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Dl.NO_ERROR=0;Dl.TIMEOUT=8;Dl.HTTP_ERROR=6;K0.COMPLETE="complete";q0.EventType=so;so.OPEN="a";so.CLOSE="b";so.ERROR="c";so.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.La;ge.prototype.getLastErrorCode=ge.prototype.Da;ge.prototype.getStatus=ge.prototype.ba;ge.prototype.getResponseJson=ge.prototype.Qa;ge.prototype.getResponseText=ge.prototype.ga;ge.prototype.send=ge.prototype.ea;var Ox=function(){return new Ga},Lx=function(){return Rl()},Ku=Dl,Mx=K0,$x=Nr,Am={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fx=lo,Vo=q0,Ux=ge;const Rm="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Ni="9.8.4";/**
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
 */const Er=new wl("@firebase/firestore");function Dm(){return Er.logLevel}function P(t,...e){if(Er.logLevel<=Q.DEBUG){const n=e.map(of);Er.debug(`Firestore (${Ni}): ${t}`,...n)}}function An(t,...e){if(Er.logLevel<=Q.ERROR){const n=e.map(of);Er.error(`Firestore (${Ni}): ${t}`,...n)}}function bm(t,...e){if(Er.logLevel<=Q.WARN){const n=e.map(of);Er.warn(`Firestore (${Ni}): ${t}`,...n)}}function of(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function me(t,e){t||j()}function G(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Tl{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class jx{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Vx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Ge(e)}}class zx{constructor(e,n,r){this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Hx{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new zx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kx{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.p=n.token,new Wx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qx(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Gx{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new rt(0,0))}static max(){return new z(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Fs{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Qx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Fs{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return Qx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ue.fromString(e))}static fromName(e){return new L(ue.fromString(e).popFirst(5))}static empty(){return new L(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ue(e.slice()))}}function Yx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Rn(i,L.empty(),e)}function Xx(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rn(z.min(),L.empty(),-1)}static max(){return new Rn(z.max(),L.empty(),-1)}}function Jx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function af(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==Zx)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Pm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ul(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */lf.ot=-1;class Te{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}}class Bo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:xe.RED,this.left=i!=null?i:xe.EMPTY,this.right=s!=null?s:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Om(this.data.getIterator())}getIteratorFrom(e){return new Om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ar{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new ar([])}unionWith(e){let n=new we(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ar(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const nN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(t){if(me(!!t),typeof t=="string"){let e=0;const n=nN.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
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
 */function Cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xw(t){const e=t.mapValue.fields.__previous_value__;return Cw(e)?xw(e):e}function Us(t){const e=Dn(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class rN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Vl(t){return t==null}function ph(t){return t===0&&1/t==-1/0}/**
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
 */const jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cw(t)?4:iN(t)?9007199254740991:10:j()}function Vt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Us(t).isEqual(Us(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Dn(r.timestampValue),o=Dn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return hi(r.bytesValue).isEqual(hi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?ph(s)===ph(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Pm(s)!==Pm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vt(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Vs(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lm(t.timestampValue,e.timestampValue);case 4:return Lm(Us(t),Us(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=hi(i),a=hi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(fe(i.latitude),fe(s.latitude));return o!==0?o:Y(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fi(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===jo.mapValue&&s===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(s===jo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Y(a[c],u[c]);if(h!==0)return h;const d=fi(o[a[c]],l[u[c]]);if(d!==0)return d}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Lm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Dn(t),r=Dn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function Zr(t){return mh(t)}function mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Dn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mh(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function gh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Mm(t){return!!t&&"nullValue"in t}function $m(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qu(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ul(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=as(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=as(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ul(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(as(this.value))}}/**
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
 */class Ne{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ne(e,0,z.min(),z.min(),Lt.empty(),0)}static newFoundDocument(e,n,r){return new Ne(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new Ne(e,2,n,z.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,z.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Fm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sN(t,e,n,r,i,s,o)}function cf(t){const e=G(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Zr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zr(r)).join(",")),e.ut=n}return e.ut}function oN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Zr(r.value)}`;var r}).join(", ")}]`),Vl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Zr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Zr(n)).join(",")),`Target(${e})`}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!pN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Vt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vm(t.startAt,e.startAt)&&Vm(t.endAt,e.endAt)}function yh(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Je extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new aN(e,n,r):n==="array-contains"?new cN(e,r):n==="in"?new hN(e,r):n==="not-in"?new dN(e,r):n==="array-contains-any"?new fN(e,r):new Je(e,n,r)}static ct(e,n,r){return n==="in"?new lN(e,r):new uN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(fi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.at(fi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class aN extends Je{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.at(n)}}class lN extends Je{constructor(e,n){super(e,"in",n),this.keys=Nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uN extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class cN extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&Vs(n.arrayValue,this.value)}}class hN extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class dN extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class fN extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}class Qa{constructor(e,n){this.position=e,this.inclusive=n}}class ls{constructor(e,n="asc"){this.field=e,this.dir=n}}function pN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Um(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function mN(t,e,n,r,i,s,o,a){return new Bl(t,e,n,r,i,s,o,a)}function Aw(t){return new Bl(t)}function gN(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vN(t){for(const e of t.filters)if(e.ht())return e.field;return null}function wN(t){return t.collectionGroup!==null}function Bs(t){const e=G(t);if(e.lt===null){e.lt=[];const n=vN(e),r=yN(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new ls(n)),e.lt.push(new ls(Ye.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ls(Ye.keyField(),s))}}}return e.lt}function Sr(t){const e=G(t);if(!e.ft)if(e.limitType==="F")e.ft=Fm(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Bs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ls(s.field,o))}const r=e.endAt?new Qa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qa(e.startAt.position,e.startAt.inclusive):null;e.ft=Fm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function EN(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return hf(Sr(t),Sr(e))&&t.limitType===e.limitType}function Rw(t){return`${cf(Sr(t))}|lt:${t.limitType}`}function vh(t){return`Query(target=${oN(Sr(t))}; limitType=${t.limitType})`}function df(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Um(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Bs(n),r)||n.endAt&&!function(i,s,o){const a=Um(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Bs(n),r))}(t,e)}function _N(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=SN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SN(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fi(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */function kN(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ph(e)?"-0":e}}function IN(t){return{integerValue:""+t}}/**
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
 */class zl{constructor(){this._=void 0}}function TN(t,e,n){return t instanceof wh?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ya?bw(t,e):t instanceof Xa?Pw(t,e):function(r,i){const s=xN(r,i),o=Bm(s)+Bm(r._t);return gh(s)&&gh(r._t)?IN(o):kN(r.wt,o)}(t,e)}function CN(t,e,n){return t instanceof Ya?bw(t,e):t instanceof Xa?Pw(t,e):n}function xN(t,e){return t instanceof Eh?gh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class wh extends zl{}class Ya extends zl{constructor(e){super(),this.elements=e}}function bw(t,e){const n=Ow(e);for(const r of t.elements)n.some(i=>Vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends zl{constructor(e){super(),this.elements=e}}function Pw(t,e){let n=Ow(e);for(const r of t.elements)n=n.filter(i=>!Vt(i,r));return{arrayValue:{values:n}}}class Eh extends zl{constructor(e,n){super(),this.wt=e,this._t=n}}function Bm(t){return fe(t.integerValue||t.doubleValue)}function Ow(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ya&&r instanceof Ya||n instanceof Xa&&r instanceof Xa?ci(n.elements,r.elements,Vt):n instanceof Eh&&r instanceof Eh?Vt(n._t,r._t):n instanceof wh&&r instanceof wh}(t.transform,e.transform)}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ff{}function Lw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new RN(t.key,lr.none()):new pf(t.key,t.data,lr.none());{const n=t.data,r=Lt.empty();let i=new we(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hl(t.key,r,new ar(i.toArray()),lr.none())}}function AN(t,e,n){t instanceof pf?function(r,i,s){const o=r.value.clone(),a=zm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hl?function(r,i,s){if(!aa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Mw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function us(t,e,n,r){return t instanceof pf?function(i,s,o,a){if(!aa(i.precondition,s))return o;const l=i.value.clone(),u=Hm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hl?function(i,s,o,a){if(!aa(i.precondition,s))return o;const l=Hm(i.fieldTransforms,a,s),u=s.data;return u.setAll(Mw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return aa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ci(n,r,(i,s)=>NN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pf extends ff{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hl extends ff{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CN(o,a,n[i]))}return r}function Hm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TN(s,o,e))}return r}class RN extends ff{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DN{constructor(e){this.count=e}}/**
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
 */var de,W;function $w(t){if(t===void 0)return An("GRPC error has no .code"),C.UNKNOWN;switch(t){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return j()}}(W=de||(de={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ul(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tN(this.inner)}size(){return this.innerSize}}/**
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
 */const bN=new Te(L.comparator);function bn(){return bN}const Fw=new Te(L.comparator);function Gi(...t){let e=Fw;for(const n of t)e=e.insert(n.key,n);return e}function PN(t){let e=Fw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tr(){return cs()}function Uw(){return cs()}function cs(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}new Te(L.comparator);const ON=new we(L.comparator);function q(...t){let e=ON;for(const n of t)e=e.add(n);return e}const LN=new we(Y);function Vw(){return LN}/**
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
 */class Wl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wl(z.min(),r,Vw(),bn(),q())}}class fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new fo(Pe.EMPTY_BYTE_STRING,n,q(),q(),q())}}/**
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
 */class la{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class Bw{constructor(e,n){this.targetId=e,this.It=n}}class jw{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wm{constructor(){this.Tt=0,this.Et=qm(),this.At=Pe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=q(),n=q(),r=q();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new fo(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=qm()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class MN{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=bn(),this.Bt=Km(),this.Lt=new we(Y)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(yh(s))if(r===0){const o=new L(s.path);this.Kt(n,o,Ne.newNoDocument(o,z.min()))}else me(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&yh(a.target)){const l=new L(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Ne.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=q();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Wl(e,n,this.Lt,this.$t,r);return this.$t=bn(),this.Bt=Km(),this.Lt=new we(Y),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Wm,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new we(Y),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Wm),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Km(){return new Te(L.comparator)}function qm(){return new Te(L.comparator)}/**
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
 */const $N=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class UN{constructor(e,n){this.databaseId=e,this.dt=n}}function VN(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BN(t,e){return t.dt?e.toBase64():e.toUint8Array()}function js(t){return me(!!t),z.fromTimestamp(function(e){const n=Dn(e);return new rt(n.seconds,n.nanos)}(t))}function jN(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zw(t){const e=ue.fromString(t);return me(Kw(e)),e}function Gu(t,e){const n=zw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Hw(n))}function _h(t,e){return jN(t.databaseId,e)}function zN(t){const e=zw(t);return e.length===4?ue.emptyPath():Hw(e)}function Gm(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hw(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function HN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(me(u===void 0||typeof u=="string"),Pe.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),Pe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:$w(l.code);return new $(u,l.message||"")}(o);n=new jw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gu(t,r.document.name),s=js(r.document.updateTime),o=new Lt({mapValue:{fields:r.document.fields}}),a=Ne.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new la(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gu(t,r.document),s=r.readTime?js(r.readTime):z.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new la([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gu(t,r.document),s=r.removedTargetIds||[];n=new la([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new DN(i),o=r.targetId;n=new Bw(o,s)}}return n}function WN(t,e){return{documents:[_h(t,e.path)]}}function KN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_h(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_h(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if($m(h.value))return{unaryFilter:{field:Rr(h.field),op:"IS_NAN"}};if(Mm(h.value))return{unaryFilter:{field:Rr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if($m(h.value))return{unaryFilter:{field:Rr(h.field),op:"IS_NOT_NAN"}};if(Mm(h.value))return{unaryFilter:{field:Rr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(h.field),op:YN(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Rr(c.field),direction:QN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Vl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qN(t){let e=zN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Ww(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ls(Hr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Vl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Qa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Qa(d,h)}(n.endAt)),mN(e,i,o,s,a,"F",l,u)}function GN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ww(t){return t?t.unaryFilter!==void 0?[JN(t)]:t.fieldFilter!==void 0?[XN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ww(e)).reduce((e,n)=>e.concat(n)):j():[]}function QN(t){return $N[t]}function YN(t){return FN[t]}function Rr(t){return{fieldPath:t.canonicalString()}}function Hr(t){return Ye.fromServerFormat(t.fieldPath)}function XN(t){return Je.create(Hr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function JN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hr(t.unaryFilter.field);return Je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hr(t.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hr(t.unaryFilter.field);return Je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hr(t.unaryFilter.field);return Je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function Kw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ZN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Uw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Lw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,r)=>jm(n,r))&&ci(this.baseMutations,e.baseMutations,(n,r)=>jm(n,r))}}/**
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
 */class eA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ur{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tA{constructor(e){this.ne=e}}function nA(t){const e=qN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?EN(e,e.limit,"L"):e}/**
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
 */class rA{constructor(){this.ze=new iA}addToCollectionParentIndex(e,n){return this.ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Rn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class iA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(ue.comparator)).toArray()}}/**
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
 */class pi{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new pi(0)}static Rn(){return new pi(-1)}}/**
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
 */class sA{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&us(r.mutation,i,ar.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bn();const o=cs(),a=cs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Hl)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),us(c.mutation,u,c.mutation.getFieldMask(),rt.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new oA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=cs();let i=new Te((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ar.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Uw();c.forEach(d=>{if(!s.has(d)){const g=Lw(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(tr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:PN(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Gi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Gi();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Bl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ne.newInvalidDocument(u)))});let o=Gi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&us(u.mutation,l,ar.empty(),rt.now()),df(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):k.resolve(Ne.newInvalidDocument(n))}}/**
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
 */class lA{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return k.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:js(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:nA(r.bundledQuery),readTime:js(r.readTime)}}(n)),k.resolve()}}/**
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
 */class uA{constructor(){this.overlays=new Te(L.comparator),this.Xn=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=tr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=tr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=tr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eA(n,r));let s=this.Xn.get(n);s===void 0&&(s=q(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class mf{constructor(){this.Zn=new we(_e.ts),this.es=new we(_e.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new _e(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new _e(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new L(new ue([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new L(new ue([])),r=new _e(n,e),i=new _e(n,e+1);let s=q();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return L.comparator(e.key,n.key)||Y(e.ls,n.ls)}static ns(e,n){return Y(e.ls,n.ls)||L.comparator(e.key,n.key)}}/**
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
 */class cA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new we(_e.ts)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Y);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),k.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new _e(new L(s),0);let a=new we(Y);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),k.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return k.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new _e(n,0),i=this.ds.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hA{constructor(e){this.ps=e,this.docs=new Te(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(e,n,r){let i=bn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Jx(Xx(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}Is(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dA(this)}getSize(e){return k.resolve(this.size)}}class dA extends sA{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class fA{constructor(e){this.persistence=e,this.Ts=new Ai(n=>cf(n),hf),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Es=0,this.As=new mf,this.targetCount=0,this.Rs=pi.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),k.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.vn(n),k.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.As.containsKey(n))}}/**
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
 */class pA{constructor(e,n){this.bs={},this.overlays={},this.Ps=new lf(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new fA(this),this.indexManager=new rA,this.remoteDocumentCache=function(r){return new hA(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new tA(n),this.Ds=new lA(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new cA(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new mA(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return k.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class mA extends eN{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.ks=new mf,this.Os=null}static Ms(e){return new gf(e)}get Fs(){if(this.Os)return this.Os;throw j()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),k.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Fs,r=>{const i=L.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return k.or([()=>k.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class yf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yf(e,n.fromCache,r,i)}}/**
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
 */class gA{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return k.resolve(null)}xi(e,n,r,i){return gN(n)||i.isEqual(z.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(Dm()<=Q.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vh(n)),this.Mi(e,o,n,Yx(i,-1)))})}ki(e,n){let r=new we(Dw(e));return n.forEach((i,s)=>{df(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Dm()<=Q.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",vh(n)),this.Di.getDocumentsMatchingQuery(e,n,Rn.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class yA{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Te(Y),this.Bi=new Ai(s=>cf(s),hf),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aA(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function vA(t,e,n,r){return new yA(t,e,n,r)}async function qw(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function Gw(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function wA(t,e){const n=G(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Pe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,w,R){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,c)&&a.push(n.Vs.updateTargetData(s,g))});let l=bn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(EA(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(z.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function EA(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function _A(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new ur(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=G(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Qm(t,e,n){const r=G(t);let i=z.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),h=c.Bi.get(u);return h!==void 0?k.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,Sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:q())).next(a=>(SA(r,_N(e),a),{documents:a,ji:s})))}function SA(t,e,n){let r=z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Ym{constructor(){this.activeTargetIds=Vw()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kA{constructor(){this.Fr=new Ym,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IA{Br(e){}shutdown(){}}/**
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
 */class Xm{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const TA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class CA{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class xA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw bm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=TA[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new Ux;a.listenOnce(Mx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ku.NO_ERROR:const u=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Ku.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new $(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const c=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(C.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ox(),o=Lx(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Fx({})),this.uo(a.initMessageHeaders,n,r),kC()||TC()||CC()||xC()||NC()||IC()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new CA({jr:y=>{h?P("Connection","Not sending because WebChannel is closed:",y):(c||(P("Connection","Opening WebChannel transport."),u.open(),c=!0),P("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,w,R)=>{y.listen(w,p=>{try{R(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Vo.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),g(u,Vo.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.eo())}),g(u,Vo.EventType.ERROR,y=>{h||(h=!0,bm("Connection","WebChannel transport errored:",y),d.eo(new $(C.UNAVAILABLE,"The operation could not be completed")))}),g(u,Vo.EventType.MESSAGE,y=>{var w;if(!h){const R=y.data[0];me(!!R);const p=R,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){P("Connection","WebChannel received error:",f);const m=f.status;let v=function(x){const E=de[x];if(E!==void 0)return $w(E)}(m),T=f.message;v===void 0&&(v=C.INTERNAL,T="Unknown error status: "+m+" with message "+f.message),h=!0,d.eo(new $(v,T)),u.close()}else P("Connection","WebChannel received:",R),d.no(R)}}),g(o,$x.STAT_EVENT,y=>{y.stat===Am.PROXY?P("Connection","Detected buffering proxy"):y.stat===Am.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Qu(){return typeof document!="undefined"?document:null}/**
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
 */function Qw(t){return new UN(t,!0)}class Yw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class NA{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Yw(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new $(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AA extends NA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=HN(this.wt,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?js(s.readTime):z.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Gm(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=yh(a)?{documents:WN(i,a)}:{query:KN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=BN(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=VN(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=GN(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=Gm(this.wt),n.removeTarget=e,this.Mo(n)}}/**
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
 */class RA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(C.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(C.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class DA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(An(n),this.su=!1):P("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class bA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{mo(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l.lu.add(4),await po(l),l._u.set("Unknown"),l.lu.delete(4),await Kl(l)}(this))})}),this._u=new DA(r,i)}}async function Kl(t){if(mo(t))for(const e of t.fu)await e(!0)}async function po(t){for(const e of t.fu)await e(!1)}function Xw(t,e){const n=G(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ef(n)?wf(n):Ri(n).Co()&&vf(n,e))}function Jw(t,e){const n=G(t),r=Ri(n);n.hu.delete(e),r.Co()&&Zw(n,e),n.hu.size===0&&(r.Co()?r.ko():mo(n)&&n._u.set("Unknown"))}function vf(t,e){t.wu.Nt(e.targetId),Ri(t).Qo(e)}function Zw(t,e){t.wu.Nt(e),Ri(t).jo(e)}function wf(t){t.wu=new MN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Ri(t).start(),t._u.iu()}function Ef(t){return mo(t)&&!Ri(t).Do()&&t.hu.size>0}function mo(t){return G(t).lu.size===0}function e1(t){t.wu=void 0}async function PA(t){t.hu.forEach((e,n)=>{vf(t,e)})}async function OA(t,e){e1(t),Ef(t)?(t._u.uu(e),wf(t)):t._u.set("Unknown")}async function LA(t,e,n){if(t._u.set("Online"),e instanceof jw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jm(t,r)}else if(e instanceof la?t.wu.Ut(e):e instanceof Bw?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(z.min()))try{const r=await Gw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Pe.EMPTY_BYTE_STRING,l.snapshotVersion)),Zw(i,a);const u=new ur(l.target,a,1,l.sequenceNumber);vf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Jm(t,r)}}async function Jm(t,e,n){if(!ho(e))throw e;t.lu.add(1),await po(t),t._u.set("Offline"),n||(n=()=>Gw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Kl(t)})}async function Zm(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=mo(n);n.lu.add(3),await po(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Kl(n)}async function MA(t,e){const n=G(t);e?(n.lu.delete(2),await Kl(n)):e||(n.lu.add(2),await po(n),n._u.set("Unknown"))}function Ri(t){return t.mu||(t.mu=function(e,n,r){const i=G(e);return i.tu(),new AA(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:PA.bind(null,t),Jr:OA.bind(null,t),Go:LA.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ef(t)?wf(t):t._u.set("Unknown")):(await t.mu.stop(),e1(t))})),t.mu}/**
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
 */class _f{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new _f(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function t1(t,e){if(An("AsyncQueue",`${e}: ${t}`),ho(t))return new $(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Gi(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class eg{constructor(){this.yu=new Te(L.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):j():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new mi(e,n,ei.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $A{constructor(){this.Iu=void 0,this.listeners=[]}}class FA{constructor(){this.queries=new Ai(e=>Rw(e),jl),this.onlineState="Unknown",this.Tu=new Set}}async function UA(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $A),i)try{s.Iu=await n.onListen(r)}catch(o){const a=t1(o,`Initialization of query '${vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Sf(n)}async function VA(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function BA(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Sf(n)}function jA(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Sf(t){t.Tu.forEach(e=>{e.next()})}class zA{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class n1{constructor(e){this.key=e}}class r1{constructor(e){this.key=e}}class HA{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=q(),this.mutatedKeys=q(),this.Lu=Dw(e),this.Uu=new ei(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new eg,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=df(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),R=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),R=!0,(l&&this.Lu(g,l)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),R=!0):d&&!g&&(r.track({type:1,doc:d}),R=!0,(l||u)&&(a=!0)),R&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(h)-g(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new mi(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new eg,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=q(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new r1(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new n1(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=q();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return mi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class WA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KA{constructor(e){this.key=e,this.Xu=!1}}class qA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Ai(a=>Rw(a),jl),this.ec=new Map,this.nc=new Set,this.sc=new Te(L.comparator),this.ic=new Map,this.rc=new mf,this.oc={},this.uc=new Map,this.cc=pi.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function GA(t,e){const n=tR(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await _A(n.localStore,Sr(e));n.isPrimaryClient&&Xw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await QA(n,e,r,a==="current")}return i}async function QA(t,e,n,r){t.hc=(c,h,d)=>async function(g,y,w,R){let p=y.view.Ku(w);p.Oi&&(p=await Qm(g.localStore,y.query,!1).then(({documents:v})=>y.view.Ku(v,p)));const f=R&&R.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,f);return ng(g,y.targetId,m.zu),m.snapshot}(t,c,h,d);const i=await Qm(t.localStore,e,!0),s=new HA(e,i.ji),o=s.Ku(i.documents),a=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ng(t,n,l.zu);const u=new WA(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function YA(t,e){const n=G(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!jl(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Jw(n.remoteStore,r.targetId),kh(n,r.targetId)}).catch(af)):(kh(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function i1(t,e){const n=G(t);try{const r=await wA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?me(o.Xu):i.removedDocuments.size>0&&(me(o.Xu),o.Xu=!1))}),await o1(n,r,e)}catch(r){await af(r)}}function tg(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&Sf(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XA(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Te(L.comparator);o=o.insert(s,Ne.newNoDocument(s,z.min()));const a=q().add(s),l=new Wl(z.min(),new Map,new we(Y),o,a);await i1(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),kf(r)}else await Sh(r.localStore,e,!1).then(()=>kh(r,e,n)).catch(af)}function kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||s1(t,r)})}function s1(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Jw(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),kf(t))}function ng(t,e,n){for(const r of n)r instanceof n1?(t.rc.addReference(r.key,e),JA(t,r)):r instanceof r1?(P("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||s1(t,r.key)):j()}function JA(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.nc.add(r),kf(t))}function kf(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new L(ue.fromString(e)),r=t.cc.next();t.ic.set(r,new KA(n)),t.sc=t.sc.insert(n,r),Xw(t.remoteStore,new ur(Sr(Aw(n.path)),r,2,lf.ot))}}async function o1(t,e,n){const r=G(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=yf.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ho(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(r.localStore,s))}async function ZA(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await qw(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new $(C.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await o1(n,r.Ki)}}function eR(t,e){const n=G(t),r=n.ic.get(e);if(r&&r.Xu)return q().add(r.key);{let i=q();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function tR(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XA.bind(null,e),e.Zu.Go=BA.bind(null,e.eventManager),e.Zu.lc=jA.bind(null,e.eventManager),e}class nR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Qw(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return vA(this.persistence,new gA,e.initialUser,this.wt)}_c(e){return new pA(gf.Ms,this.wt)}dc(e){return new kA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZA.bind(null,this.syncEngine),await MA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new FA}createDatastore(e){const n=Qw(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xA(i));var i;return function(s,o,a,l){return new RA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>tg(this.syncEngine,a,0),o=Xm.V()?new Xm:new IA,new bA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new qA(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);P("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await po(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class iR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=Gx.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=t1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oR(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function aR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lR(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Zm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Zm(e.remoteStore,s)),t.onlineComponents=e}async function lR(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await oR(t,new nR)),t.offlineComponents}async function uR(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await aR(t,new rR)),t.onlineComponents}async function cR(t){const e=await uR(t),n=e.eventManager;return n.onListen=GA.bind(null,e.syncEngine),n.onUnlisten=YA.bind(null,e.syncEngine),n}function hR(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new iR({next:h=>{s.enqueueAndForget(()=>VA(i,c)),h.fromCache&&a.source==="server"?l.reject(new $(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new zA(o,u,{includeMetadataChanges:!0,Du:!0});return UA(i,c)}(await cR(t),t.asyncQueue,e,n,r)),r.promise}const rg=new Map;/**
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
 */function dR(t,e,n){if(!n)throw new $(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fR(t,e,n,r){if(e===!0&&r===!0)throw new $(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ig(t){if(L.isDocumentKey(t))throw new $(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pR(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function sg(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pR(t);throw new $(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class og{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class a1{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1,e instanceof di?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new $(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(i.options.projectId)}(e))}get app(){if(!this._app)throw new $(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bx;switch(n.type){case"gapi":const r=n.client;return me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Hx(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rg.get(e);n&&(P("ComponentProvider","Removing Datastore"),rg.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Di{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Di(this.firestore,e,this._key)}}class ql{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ql(this.firestore,e,this._query)}}class ti extends ql{constructor(e,n,r){super(e,n,Aw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Di(this.firestore,null,new L(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function mR(t,e,...n){if(t=PC(t),dR("collection","path",e),t instanceof a1){const r=ue.fromString(e,...n);return ig(r),new ti(t,null,r)}{if(!(t instanceof Di||t instanceof ti))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return ig(r),new ti(t.firestore,null,r)}}/**
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
 */class gR{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Yw(this,"async_queue_retry"),this.Kc=()=>{const n=Qu();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Qu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Qu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new or;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!ho(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw An("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=_f.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&j()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class l1 extends a1{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new gR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||u1(this),this._firestoreClient.terminate()}}function yR(t=El()){return $n(t,"firestore").getImmediate()}function vR(t){return t._firestoreClient||u1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function u1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new rN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class c1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ja{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ja(Pe.fromBase64String(e))}catch(n){throw new $(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ja(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}const ER=new RegExp("[~\\*/\\[\\]]");function _R(t,e,n){if(e.search(ER)>=0)throw ag(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new c1(...e.split("."))._internalPath}catch{throw ag(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ag(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(C.INVALID_ARGUMENT,a+t+l)}/**
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
 */class h1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Di(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(d1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SR extends h1{data(){return super.data()}}function d1(t,e){return typeof e=="string"?_R(t,e):e instanceof c1?e._internalPath:e._delegate._internalPath}/**
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
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kR extends h1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(d1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends kR{data(e={}){return super.data(e)}}class IR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:TR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function CR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function xR(t,...e){for(const n of e)t=n._apply(t);return t}/**
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
 */class NR{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return Ul(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wR(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Us(e));default:return null}}convertTimestamp(e){const n=Dn(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);me(Kw(r));const i=new di(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||An(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class AR extends NR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ja(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Di(this.firestore,null,n)}}function RR(t){t=sg(t,ql);const e=sg(t.firestore,l1),n=vR(e),r=new AR(e);return CR(t._query),hR(n,t._query).then(i=>new IR(e,r,t,i))}(function(t,e=!0){(function(n){Ni=n})(_i),Dt(new Et("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new l1(i,new jx(n.getProvider("auth-internal")),new Kx(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),nt(Rm,"3.4.11",t),nt(Rm,"3.4.11","esm2017")})();/**
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
 */function DR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bR(){return typeof indexedDB=="object"}function PR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function OR(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const LR="FirebaseError";class Gl extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,Gl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f1.prototype.create)}}class f1{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gl(i,a,r)}}function MR(t,e){return t.replace($R,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $R=/\{\$([^}]+)}/g;function p1(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lg(s)&&lg(o)){if(!p1(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lg(t){return t!==null&&typeof t=="object"}/**
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
 */const FR=1e3,UR=2,VR=4*60*60*1e3,BR=.5;function ug(t,e=FR,n=UR){const r=e*Math.pow(n,t),i=Math.round(BR*r*(Math.random()-.5)*2);return Math.min(VR,r+i)}/**
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
 */function m1(t){return t&&t._delegate?t._delegate:t}/**
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
 */const jR="FirebaseError";class Ql extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jR,Object.setPrototypeOf(this,Ql.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,g1.prototype.create)}}class g1{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ql(i,a,r)}}function zR(t,e){return t.replace(HR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HR=/\{\$([^}]+)}/g,y1="@firebase/installations",If="0.5.11";/**
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
 */const v1=1e4,w1=`w:${If}`,E1="FIS_v2",WR="https://firebaseinstallations.googleapis.com/v1",KR=60*60*1e3,qR="installations",GR="Installations";/**
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
 */const QR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},kr=new g1(qR,GR,QR);function _1(t){return t instanceof Ql&&t.code.includes("request-failed")}/**
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
 */function S1({projectId:t}){return`${WR}/projects/${t}/installations`}function k1(t){return{token:t.token,requestStatus:2,expiresIn:XR(t.expiresIn),creationTime:Date.now()}}async function I1(t,e){const r=(await e.json()).error;return kr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function T1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function YR(t,{refreshToken:e}){const n=T1(t);return n.append("Authorization",JR(e)),n}async function C1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XR(t){return Number(t.replace("s","000"))}function JR(t){return`${E1} ${t}`}/**
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
 */async function ZR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S1(t),i=T1(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:E1,appId:t.appId,sdkVersion:w1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C1(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:k1(u.authToken)}}else throw await I1("Create Installation",l)}/**
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
 */function x1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function eD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tD=/^[cdef][\w-]{21}$/,Ih="";function nD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rD(t);return tD.test(n)?n:Ih}catch{return Ih}}function rD(t){return eD(t).substr(0,22)}/**
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
 */function Yl(t){return`${t.appName}!${t.appId}`}/**
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
 */const N1=new Map;function A1(t,e){const n=Yl(t);R1(n,e),iD(n,e)}function R1(t,e){const n=N1.get(t);if(!!n)for(const r of n)r(e)}function iD(t,e){const n=sD();n&&n.postMessage({key:t,fid:e}),oD()}let nr=null;function sD(){return!nr&&"BroadcastChannel"in self&&(nr=new BroadcastChannel("[Firebase] FID Change"),nr.onmessage=t=>{R1(t.data.key,t.data.fid)}),nr}function oD(){N1.size===0&&nr&&(nr.close(),nr=null)}/**
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
 */const aD="firebase-installations-database",lD=1,Ir="firebase-installations-store";let Yu=null;function Tf(){return Yu||(Yu=qv(aD,lD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ir)}}})),Yu}async function Za(t,e){const n=Yl(t),i=(await Tf()).transaction(Ir,"readwrite"),s=i.objectStore(Ir),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&A1(t,e.fid),e}async function D1(t){const e=Yl(t),r=(await Tf()).transaction(Ir,"readwrite");await r.objectStore(Ir).delete(e),await r.done}async function Xl(t,e){const n=Yl(t),i=(await Tf()).transaction(Ir,"readwrite"),s=i.objectStore(Ir),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&A1(t,a.fid),a}/**
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
 */async function Cf(t){let e;const n=await Xl(t.appConfig,r=>{const i=uD(r),s=cD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ih?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uD(t){const e=t||{fid:nD(),registrationStatus:0};return b1(e)}function cD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dD(t)}:{installationEntry:e}}async function hD(t,e){try{const n=await ZR(t,e);return Za(t.appConfig,n)}catch(n){throw _1(n)&&n.customData.serverCode===409?await D1(t.appConfig):await Za(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dD(t){let e=await cg(t.appConfig);for(;e.registrationStatus===1;)await x1(100),e=await cg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cf(t);return r||n}return e}function cg(t){return Xl(t,e=>{if(!e)throw kr.create("installation-not-found");return b1(e)})}function b1(t){return fD(t)?{fid:t.fid,registrationStatus:0}:t}function fD(t){return t.registrationStatus===1&&t.registrationTime+v1<Date.now()}/**
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
 */async function pD({appConfig:t,heartbeatServiceProvider:e},n){const r=mD(t,n),i=YR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:w1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C1(()=>fetch(r,a));if(l.ok){const u=await l.json();return k1(u)}else throw await I1("Generate Auth Token",l)}function mD(t,{fid:e}){return`${S1(t)}/${e}/authTokens:generate`}/**
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
 */async function xf(t,e=!1){let n;const r=await Xl(t.appConfig,s=>{if(!P1(s))throw kr.create("not-registered");const o=s.authToken;if(!e&&vD(o))return s;if(o.requestStatus===1)return n=gD(t,e),s;{if(!navigator.onLine)throw kr.create("app-offline");const a=ED(s);return n=yD(t,a),a}});return n?await n:r.authToken}async function gD(t,e){let n=await hg(t.appConfig);for(;n.authToken.requestStatus===1;)await x1(100),n=await hg(t.appConfig);const r=n.authToken;return r.requestStatus===0?xf(t,e):r}function hg(t){return Xl(t,e=>{if(!P1(e))throw kr.create("not-registered");const n=e.authToken;return _D(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yD(t,e){try{const n=await pD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Za(t.appConfig,r),n}catch(n){if(_1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await D1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(t.appConfig,r)}throw n}}function P1(t){return t!==void 0&&t.registrationStatus===2}function vD(t){return t.requestStatus===2&&!wD(t)}function wD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KR}function ED(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _D(t){return t.requestStatus===1&&t.requestTime+v1<Date.now()}/**
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
 */async function SD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cf(e);return r?r.catch(console.error):xf(e).catch(console.error),n.fid}/**
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
 */async function kD(t,e=!1){const n=t;return await ID(n),(await xf(n,e)).token}async function ID(t){const{registrationPromise:e}=await Cf(t);e&&await e}/**
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
 */function TD(t){if(!t||!t.options)throw Xu("App Configuration");if(!t.name)throw Xu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xu(t){return kr.create("missing-app-config-values",{valueName:t})}/**
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
 */const O1="installations",CD="installations-internal",xD=t=>{const e=t.getProvider("app").getImmediate(),n=TD(e),r=$n(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ND=t=>{const e=t.getProvider("app").getImmediate(),n=$n(e,O1).getImmediate();return{getId:()=>SD(n),getToken:i=>kD(n,i)}};function AD(){Dt(new Et(O1,xD,"PUBLIC")),Dt(new Et(CD,ND,"PRIVATE"))}AD();nt(y1,If);nt(y1,If,"esm2017");/**
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
 */const el="analytics",RD="firebase_id",DD="origin",bD=60*1e3,PD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",L1="https://www.googletagmanager.com/gtag/js";/**
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
 */const at=new wl("@firebase/analytics");/**
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
 */function M1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OD(t,e){const n=document.createElement("script");n.src=`${L1}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function LD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await M1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){at.error(a)}t("config",i,s)}async function $D(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await M1(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){at.error(s)}}function FD(t,e,n,r){async function i(s,o,a){try{s==="event"?await $D(t,e,n,o,a):s==="config"?await MD(t,e,n,r,o,a):t("set",o)}catch(l){at.error(l)}}return i}function UD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=FD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VD(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(L1))return e;return null}/**
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
 */const BD={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},yt=new f1("analytics","Analytics",BD);/**
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
 */const jD=30,zD=1e3;class HD{constructor(e={},n=zD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $1=new HD;function WD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function KD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:WD(r)},s=PD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw yt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qD(t,e=$1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw yt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw yt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YD;return setTimeout(async()=>{a.abort()},n!==void 0?n:bD),F1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function F1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$1){var s,o;const{appId:a,measurementId:l}=t;try{await GD(r,e)}catch(u){if(l)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await KD(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!QD(c)){if(i.deleteThrottleMetadata(a),l)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?ug(n,i.intervalMillis,jD):ug(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),at.debug(`Calling attemptFetch again in ${h} millis`),F1(t,d,r,i)}}function GD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QD(t){if(!(t instanceof Gl)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function XD(){var t;if(bR())try{await PR()}catch(e){return at.warn(yt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return at.warn(yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JD(t,e,n,r,i,s,o){var a;const l=qD(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>at.error(g)),e.push(l);const u=XD().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);VD()||OD(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[DD]="firebase",d.update=!0,h!=null&&(d[RD]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class ZD{constructor(e){this.app=e}_delete(){return delete hs[this.app.options.appId],Promise.resolve()}}let hs={},dg=[];const fg={};let Ju="dataLayer",eb="gtag",pg,U1,mg=!1;function tb(){const t=[];if(DR()&&t.push("This is a browser extension environment."),OR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=yt.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function nb(t,e,n){tb();const r=t.options.appId;if(!r)throw yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yt.create("no-api-key");if(hs[r]!=null)throw yt.create("already-exists",{id:r});if(!mg){LD(Ju);const{wrappedGtag:s,gtagCore:o}=UD(hs,dg,fg,Ju,eb);U1=s,pg=o,mg=!0}return hs[r]=JD(t,dg,fg,e,pg,Ju,n),new ZD(t)}/**
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
 */async function rb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}function ib(t=El()){t=m1(t);const e=$n(t,el);return e.isInitialized()?e.getImmediate():sb(t)}function sb(t,e={}){const n=$n(t,el);if(n.isInitialized()){const i=n.getImmediate();if(p1(e,n.getOptions()))return i;throw yt.create("already-initialized")}return n.initialize({options:e})}function ob(t,e,n,r){t=m1(t),rb(U1,hs[t.app.options.appId],e,n,r).catch(i=>at.error(i))}const gg="@firebase/analytics",yg="0.7.11";function ab(){Dt(new Et(el,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nb(r,i,n)},"PUBLIC")),Dt(new Et("analytics-internal",t,"PRIVATE")),nt(gg,yg),nt(gg,yg,"esm2017");function t(e){try{const n=e.getProvider(el).getImmediate();return{logEvent:(r,i,s)=>ob(n,r,i,s)}}catch(n){throw yt.create("interop-component-reg-failed",{reason:n})}}}ab();/**
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
 */const lb="FirebaseError";class Jl extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lb,Object.setPrototypeOf(this,Jl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ub.prototype.create)}}class ub{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jl(i,a,r)}}function cb(t,e){return t.replace(hb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hb=/\{\$([^}]+)}/g;/**
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
 */function db(t){return t&&t._delegate?t._delegate:t}/**
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
 */const V1="firebasestorage.googleapis.com",fb="storageBucket",pb=2*60*1e3,mb=10*60*1e3;/**
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
 */class Bt extends Jl{constructor(e,n){super(Zu(e),`Firebase Storage: ${n} (${Zu(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}_codeEquals(e){return Zu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Zu(t){return"storage/"+t}function gb(){const t="An unknown error occurred, please check the error payload for server response.";return new Bt("unknown",t)}function yb(){return new Bt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function vb(){return new Bt("canceled","User canceled the upload/download.")}function wb(t){return new Bt("invalid-url","Invalid URL '"+t+"'.")}function Eb(t){return new Bt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function vg(t){return new Bt("invalid-argument",t)}function B1(){return new Bt("app-deleted","The Firebase app was deleted.")}function _b(t){return new Bt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw Eb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===V1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${R}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<m.length;v++){const T=m[v],x=T.regex.exec(e);if(x){const E=x[T.indices.bucket];let I=x[T.indices.path];I||(I=""),r=new Ct(E,I),T.postModify(r);break}}if(r==null)throw wb(e);return r}}class Sb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kb(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...R){u||(u=!0,e.apply(null,R))}function h(R){i=setTimeout(()=>{i=null,t(g,l())},R)}function d(){s&&clearTimeout(s)}function g(R,...p){if(u){d();return}if(R){d(),c.call(null,R,...p);return}if(l()||o){d(),c.call(null,R,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let y=!1;function w(R){y||(y=!0,d(),!u&&(i!==null?(R||(a=2),clearTimeout(i),h(0)):R||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function Ib(t){t(!1)}/**
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
 */function Tb(t){return t!==void 0}function wg(t,e,n,r){if(r<e)throw vg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Cb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var tl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(tl||(tl={}));/**
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
 */class xb{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ho(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===tl.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===tl.ABORT;r(!1,new Ho(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ho(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Tb(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=gb();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?B1():vb();o(l)}else{const l=yb();o(l)}};this.canceled_?n(!1,new Ho(!1,null,!0)):this.backoffId_=kb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ib(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Ho{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Nb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ab(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Rb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Db(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bb(t,e,n,r,i,s){const o=Cb(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return Rb(l,e),Nb(l,n),Ab(l,s),Db(l,r),new xb(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function Pb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ob(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class nl{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new nl(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ob(this._location.path)}get storage(){return this._service}get parent(){const e=Pb(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new nl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _b(e)}}function Eg(t,e){const n=e==null?void 0:e[fb];return n==null?null:Ct.makeFromBucketSpec(n,t)}class Lb{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=V1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pb,this._maxUploadRetryTime=mb,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=Eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=Eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new nl(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new Sb(B1());{const s=bb(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _g="@firebase/storage",Sg="0.9.8";/**
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
 */const j1="storage";function Mb(t=El(),e){return t=db(t),$n(t,j1).getImmediate({identifier:e})}function $b(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Lb(n,r,i,e,_i)}function Fb(){Dt(new Et(j1,$b,"PUBLIC").setMultipleInstances(!0)),nt(_g,Sg,""),nt(_g,Sg,"esm2017")}Fb();const Ub={apiKey:"AIzaSyATpJ1viAfqv1smd94z5f56jINCVKTJxzA",authDomain:"aimanager-es.firebaseapp.com",projectId:"aimanager-es",storageBucket:"aimanager-es.appspot.com",messagingSenderId:"14862695709",appId:"1:14862695709:web:9efe96482146def1d735f4",measurementId:"G-32M55TF8TG"},Zl=hI(Ub),zn=EC(Zl);Mb(Zl);ib(Zl);const kg=yR(Zl);var Nf={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb=b.exports,Bb=Symbol.for("react.element"),jb=Symbol.for("react.fragment"),zb=Object.prototype.hasOwnProperty,Hb=Vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wb={key:!0,ref:!0,__self:!0,__source:!0};function z1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zb.call(e,r)&&!Wb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Bb,type:t,key:s,ref:o,props:i,_owner:Hb.current}}eu.Fragment=jb;eu.jsx=z1;eu.jsxs=z1;Nf.exports=eu;const _=Nf.exports.jsx,J=Nf.exports.jsxs,H1=b.exports.createContext(),go=()=>{const t=b.exports.useContext(H1);if(!t)throw new Error("There is no AuthProvider");return t};function Kb({children:t}){const[e,n]=b.exports.useState(null),[r,i]=b.exports.useState(!0),s=(h,d)=>aT(zn,h,d),o=(h,d)=>lT(zn,h,d),a=()=>cT(zn),l=()=>{const h=new Kt;return lm(zn,h)},u=()=>{const h=new Wt;return lm(zn,h)},c=h=>oT(zn,h);return b.exports.useEffect(()=>{const h=uT(zn,d=>{n(d),i(!1)});return()=>h()},[]),_(H1.Provider,{value:{signup:s,login:o,user:e,logout:a,loading:r,loginWhitGoogle:l,loginWhitFacebook:u,resetPassword:c},children:t})}function qb({children:t}){const{user:e,loading:n}=go();return n?_("p",{children:"loading"}):e?_(b.exports.Fragment,{children:t}):_($S,{to:"/signin"})}const Gb=({googleFormLink:t})=>_(b.exports.Fragment,{children:_("iframe",{className:"w-full h-full",src:`https://docs.google.com/forms/d/e/${t}/viewform?embedded=true`,children:"Cargando formulario\u2026"})}),Qb=()=>{const{user:t}=go(),[e,n]=b.exports.useState(!1),[r,i]=b.exports.useState({}),[s,o]=b.exports.useState({});return b.exports.useEffect(()=>{try{(async()=>{const l=xR(mR(kg,"monitoring"));(await RR(l)).forEach(c=>{i(c.data()),o(c.data().monitoring.googleFormLink),n(!0)})})()}catch(a){console.log(a)}},[]),console.log("Base de datos: ",kg),console.log("googleFormLink: ",s),e?_(b.exports.Fragment,{children:J("div",{className:"flex flex-col items-center justify-center h-full text-white",children:[J("p",{children:["Home Page: ",t.displayName||t.email]}),J("p",{children:["User UID: ",t.uid||"no tiene UID"]}),s&&J("p",{children:["Google form ID: ",s]}),_(Gb,{googleFormLink:s})]})}):_("p",{children:"loading..."})};function Yb({title:t,titleId:e,...n},r){return b.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?b.exports.createElement("title",{id:e},t):null,b.exports.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const Xb=b.exports.forwardRef(Yb);var Ig=Xb;const Jb=()=>{const t=Qs(),{user:e}=go();return console.log("location: ",t.pathname),console.log("user: ",e),_(b.exports.Fragment,{children:J("div",{className:"flex flex-row justify-between",children:[_("div",{className:"flex flex-row items-center justify-center w-1/4",children:{"/":_(Ru,{to:"/",children:_(Ig,{className:"text-white w-full mx-4"})}),"/user-preferences":_(Ru,{to:"/",children:_(Ig,{className:"text-white w-full mx-4"})})}[t.pathname]||console.log("No location patch")}),_("div",{className:"flex flex-row items-center justify-center w-full",children:_("p",{className:"title text-white",children:"Titile"})}),_("div",{className:"flex flex-row items-center justify-center m-4",children:e.photoURL&&_(Ru,{to:"/user-preferences",children:_("img",{src:e.photoURL||"https://picsum.photos/200",alt:"user",className:"rounded-full aspect-square border-2 border-white shadow inline-block"})})})]})})},Zb=()=>J("div",{className:"overflow-hidden h-screen bg-gradient-to-b from-black to-blue-900",children:[_(Jb,{}),_("main",{className:" h-full",children:_(FS,{})})]}),eP=()=>{const{login:t,loginWhitGoogle:e,loginWhitFacebook:n,resetPassword:r}=go(),i=_d(),[s,o]=b.exports.useState({email:"",password:""}),[a,l]=b.exports.useState(),u=({target:{name:y,value:w}})=>{o({...s,[y]:w})};return _("div",{className:"flex flex-col min-h-screen overflow-hidden font-Raleway",children:_("main",{className:"flex-grow",children:_("section",{className:"",children:_("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:J("div",{className:"flex flex-col justify-center",children:[J("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:[_("h1",{className:"title",children:"Bienvenido de nuevo!."}),_("p",{className:"subTitle",children:"Existimos para hacer m\xE1s f\xE1cil el emprendimiento."})]}),J("div",{className:"max-w-sm mx-auto",children:[J("form",{onSubmit:async y=>{y.preventDefault(),l("");try{await t(s.email,s.password),i("/")}catch(w){console.log("error.message",w.message),l(w.message)}},children:[_("div",{className:"flex flex-wrap -mx-3 mb-4",children:J("div",{className:"w-full px-3",children:[_("label",{className:"label",htmlFor:"email",children:"Email"}),_("input",{id:"email",name:"email",type:"email",className:"form-input w-full inputInline",placeholder:"Ingrese su email",onChange:u,required:!0})]})}),_("div",{className:"flex flex-wrap -mx-3 mb-4",children:J("div",{className:"w-full px-3",children:[J("div",{className:"flex justify-between",children:[_("label",{className:"label",htmlFor:"password",children:"Contrase\xF1a"}),_("a",{href:"#!",onClick:async()=>{if(!s.email)return l("Please enter your email");try{await r(s.email),l("An email has been sent with a link to reset your password. Don`t forget to check spam")}catch(y){l(y.message)}},className:"text-sm font-medium text-orange-600 hover:underline cursor-pointer",children:"\xBFTiene problemas para iniciar sesi\xF3n?"})]}),_("input",{id:"password",name:"password",type:"password",className:"form-input w-full inputInline",placeholder:"Ingresa tu contrase\xF1a",onChange:u,required:!0})]})}),a&&_("div",{className:"flex flex-wrap my-6",children:_("div",{className:"w-full px-4 py-2 bg-red-100 border border-red-500 rounded-full text-center",children:_("p",{className:"text-red-500 font-bold",children:a})})}),_("div",{className:"flex flex-wrap -mx-3 mb-4",children:_("div",{className:"w-full px-3",children:_("div",{className:"flex justify-between",children:J("label",{className:"flex items-center",children:[_("input",{type:"checkbox",className:"form-checkbox"}),_("span",{className:"text-gray-600 ml-2",children:"Mantenerme registrado"})]})})})}),_("div",{className:"flex flex-wrap -mx-3 mt-6",children:_("div",{className:"w-full px-3",children:_("button",{type:"submit",className:"btn-primary w-full",children:"Ingresar"})})})]}),J("div",{className:"flex items-center my-6",children:[_("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),_("div",{className:"text-gray-600 italic",children:"O"}),_("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),_("div",{className:"flex flex-wrap -mx-3",children:_("div",{className:"w-full px-3",children:J("button",{onClick:async()=>{try{await n(),i("/")}catch(y){l(y.message)}},className:"py-2 px-4 bg-blue-700 text-white font-semibold rounded-full shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1 flex justify-center my-4 w-full",children:[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 16 16",children:_("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})}),_("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continuar con Facebook"})]})})}),_("div",{className:"flex flex-wrap -mx-3",children:_("div",{className:"w-full px-3",children:J("button",{onClick:async()=>{try{await e(),i("/")}catch(y){l(y.message)}},className:"py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 m-1 flex justify-center my-4 w-full",children:[_("svg",{className:"fill-current text-white flex-shrink-0",width:"22",height:"22",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:_("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),_("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continuar con Google"})]})})})]})]})})})})})},tP=()=>_("div",{className:"",children:_("main",{className:"flex-grow",children:_("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:_("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:J("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[J("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:[_("h1",{className:"h1 mb-4",children:"Let\u2019s get you back up on your feet"}),_("p",{className:"text-xl text-gray-600",children:"Enter the email address you used when you signed up for your account, and we\u2019ll email you a link to reset your password."})]}),_("div",{className:"max-w-sm mx-auto",children:J("form",{children:[_("div",{className:"flex flex-wrap -mx-3 mb-4",children:J("div",{className:"w-full px-3",children:[J("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:["Email ",_("span",{className:"text-red-600",children:"*"})]}),_("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Ingrese su email",required:!0})]})}),_("div",{className:"flex flex-wrap -mx-3 mt-6",children:_("div",{className:"w-full px-3",children:_("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Send reset link"})})})]})})]})})})})}),nP=()=>{const{logout:t}=go(),e=async()=>{try{await t()}catch(n){console.log(n)}};return _(b.exports.Fragment,{children:_("button",{onClick:e,children:_("div",{className:"flex justify-end p-4 border-t border-b border-white text-white hover:bg-gray-800",children:_("p",{className:"",children:"Desloguearme"})})})})},rP=()=>_(b.exports.Fragment,{children:J("div",{className:"flex flex-col justify-end m-4",children:[_("div",{className:"flex justify-end p-4 border-t border-b border-white",children:_("p",{className:"text-white",children:"Otro"})}),_(nP,{})]})});var iP="/assets/404_Page_not_found.fbc0db06.png";const sP=()=>J(b.exports.Fragment,{children:[_("div",{className:"flex justify-center",children:_("img",{className:"pt-32 pb-12",src:iP,alt:"Error 404"})}),_("div",{className:"flex justify-center pb-12",children:_("p",{children:"No hay nada en esta url."})})]});const oP=document.getElementById("root"),aP=Lv(oP);aP.render(_(aE.StrictMode,{children:_(zS,{children:_(Kb,{children:J(VS,{children:[J(Kn,{path:"/",element:_(qb,{children:_(Zb,{})}),children:[_(Kn,{index:!0,element:_(Qb,{})}),_(Kn,{path:"/user-preferences",element:_(rP,{})})]}),_(Kn,{path:"signin",element:_(eP,{})}),_(Kn,{path:"reset-password",element:_(tP,{})}),_(Kn,{path:"/*",element:_(sP,{})})]})})})}));
