(self.webpackChunkmetronic_angular_demo1=self.webpackChunkmetronic_angular_demo1||[]).push([[604],{49604:function(e){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var i=e[n];"object"==typeof i&&!Object.isFrozen(i)&&t(i)}),e}var n=t;n.default=t;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...t){const n=Object.create(null);for(const i in e)n[i]=e[i];return t.forEach(function(e){for(const t in e)n[t]=e[t]}),n}const s=e=>!!e.kind;class o{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!s(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){!s(e)||(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&(!e.children||(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new o(this,this.options).value()}finalize(){return!0}}function u(e){return e?"string"==typeof e?e:e.source:null}const g=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,h="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",f="\\b\\d+(\\.\\d+)?",p="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",m="\\b(0b[01]+)",b={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[b]},x={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[b]},w={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},v=function(e,t,n={}){const i=a({className:"comment",begin:e,end:t,contains:[]},n);return i.contains.push(w),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},y=v("//","$"),N=v("/\\*","\\*/"),R=v("#","$");var _=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:h,UNDERSCORE_IDENT_RE:d,NUMBER_RE:f,C_NUMBER_RE:p,BINARY_NUMBER_RE:m,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>u(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),a({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:b,APOS_STRING_MODE:E,QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:w,COMMENT:v,C_LINE_COMMENT_MODE:y,C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:R,NUMBER_MODE:{className:"number",begin:f,relevance:0},C_NUMBER_MODE:{className:"number",begin:p,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:m,relevance:0},CSS_NUMBER_MODE:{className:"number",begin:f+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[b,{begin:/\[/,end:/\]/,relevance:0,contains:[b]}]}]},TITLE_MODE:{className:"title",begin:h,relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+d,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function k(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function M(e,t){!t||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=k,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function O(e,t){!Array.isArray(e.illegal)||(e.illegal=function(...e){return"("+e.map(e=>u(e)).join("|")+")"}(...e.illegal))}function A(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function L(e,t){void 0===e.relevance&&(e.relevance=1)}const I=["of","and","for","in","not","or","if","then","parent","list","value"];function j(e,t,n="keyword"){const i={};return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(n){Object.assign(i,j(e[n],t,n))}),i;function r(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){const n=t.split("|");i[n[0]]=[e,B(n[0],n[1])]})}}function B(e,t){return t?Number(t):function(e){return I.includes(e.toLowerCase())}(e)?0:1}function T(e,{}){function t(t,n){return new RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,t="|"){let n=0;return e.map(e=>{n+=1;const t=n;let i=u(e),r="";for(;i.length>0;){const e=g.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r}).map(e=>`(${e})`).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&(!n||n.index!==this.lastIndex)){const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function n(r,s){const o=r;if(r.isCompiled)return o;[A].forEach(e=>e(r,s)),e.compilerExtensions.forEach(e=>e(r,s)),r.__beforeBegin=null,[M,O,L].forEach(e=>e(r,s)),r.isCompiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=j(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,o.keywordPatternRe=t(l,!0),s&&(r.begin||(r.begin=/\B|\b/),o.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(o.endRe=t(r.end)),o.terminatorEnd=u(r.end)||"",r.endsWithParent&&s.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),r.illegal&&(o.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:S(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?r:e)})),r.contains.forEach(function(e){n(e,o)}),r.starts&&n(r.starts,s),o.matcher=function(e){const t=new i;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function S(e){return!!e&&(e.endsWithParent||S(e.starts))}function P(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||function(e){return Boolean(e||""===e)}(this.autodetect)},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const C={"after:highlightElement":({el:e,result:t,text:n})=>{const i=H(e);if(!i.length)return;const a=document.createElement("div");a.innerHTML=t.value,t.value=function(e,t,n){let i=0,a="";const s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){a+="<"+D(e)+[].map.call(e.attributes,function(e){return" "+e.nodeName+'="'+r(e.value)+'"'}).join("")+">"}function c(e){a+="</"+D(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(a+=r(n.substring(i,t[0].offset)),i=t[0].offset,t===e){s.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===i);s.reverse().forEach(l)}else"start"===t[0].event?s.push(t[0].node):s.pop(),u(t.splice(0,1)[0])}return a+r(n.substr(i))}(i,H(a),n)}};function D(e){return e.nodeName.toLowerCase()}function H(e){const t=[];return function e(n,i){for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:i,node:r}),i=e(r,i),D(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:r}));return i}(e,0),t}const $={},U=e=>{console.error(e)},z=(e,...t)=>{console.log(`WARN: ${e}`,...t)},K=(e,t)=>{$[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),$[`${e}/${t}`]=!0)},G=r,V=a,W=Symbol("nomatch");var q=function(e){const t=Object.create(null),r=Object.create(null),a=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:c};function h(e){return g.noHighlightRe.test(e)}function d(e,t,n,i){let r="",a="";"object"==typeof t?(r=e,n=t.ignoreIllegals,a=t.language,i=void 0):(K("10.7.0","highlight(lang, code, ...args) has been deprecated."),K("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,r=t);const s={code:r,language:a};M("before:highlight",s);const o=s.result?s.result:f(s.language,s.code,n,i);return o.code=s.code,M("after:highlight",o),o}function f(e,n,r,o){function c(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=R.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof R.subLanguage){if(!t[R.subLanguage])return void k.addText(M);e=f(R.subLanguage,M,!0,_[R.subLanguage]),_[R.subLanguage]=e.top}else e=p(M,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(O+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!R.keywords)return void k.addText(M);let e=0;R.keywordPatternRe.lastIndex=0;let t=R.keywordPatternRe.exec(M),n="";for(;t;){n+=M.substring(e,t.index);const i=c(R,t);if(i){const[e,r]=i;k.addText(n),n="",O+=r,e.startsWith("_")?n+=t[0]:k.addKeyword(t[0],w.classNameAliases[e]||e)}else n+=t[0];e=R.keywordPatternRe.lastIndex,t=R.keywordPatternRe.exec(M)}n+=M.substr(e),k.addText(n)}(),M=""}function h(e){return e.className&&k.openNode(w.classNameAliases[e.className]||e.className),R=Object.create(e,{parent:{value:R}}),R}function d(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return d(e.parent,t,n)}function m(e){return 0===R.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function b(e){const t=e[0],i=n.substr(e.index),r=d(R,e,i);if(!r)return W;const a=R;a.skip?M+=t:(a.returnEnd||a.excludeEnd||(M+=t),u(),a.excludeEnd&&(M=t));do{R.className&&k.closeNode(),!R.skip&&!R.subLanguage&&(O+=R.relevance),R=R.parent}while(R!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),h(r.starts)),a.returnEnd?0:t.length}let E={};function x(t,a){const o=a&&a[0];if(M+=t,null==o)return u(),0;if("begin"===E.type&&"end"===a.type&&E.index===a.index&&""===o){if(M+=n.slice(a.index,a.index+1),!s){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=E.rule,t}return 1}if(E=a,"begin"===a.type)return function(e){const t=e[0],n=e.rule,r=new i(n),a=[n.__beforeBegin,n["on:begin"]];for(const i of a)if(i&&(i(e,r),r.isMatchIgnored))return m(t);return n&&n.endSameAsBegin&&(n.endRe=function(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(t)),n.skip?M+=t:(n.excludeBegin&&(M+=t),u(),!n.returnBegin&&!n.excludeBegin&&(M=t)),h(n),n.returnBegin?0:t.length}(a);if("illegal"===a.type&&!r){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(R.className||"<unnamed>")+'"');throw e.mode=R,e}if("end"===a.type){const e=b(a);if(e!==W)return e}if("illegal"===a.type&&""===o)return 1;if(L>1e5&&L>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=o,o.length}const w=N(e);if(!w)throw U(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=T(w,{plugins:a});let y="",R=o||v;const _={},k=new g.__emitter(g);!function(){const e=[];for(let t=R;t!==w;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>k.openNode(e))}();let M="",O=0,A=0,L=0,I=!1;try{for(R.matcher.considerAll();;){L++,I?I=!1:R.matcher.considerAll(),R.matcher.lastIndex=A;const e=R.matcher.exec(n);if(!e)break;const t=x(n.substring(A,e.index),e);A=e.index+t}return x(n.substr(A)),k.closeAllNodes(),k.finalize(),y=k.toHTML(),{relevance:Math.floor(O),value:y,language:e,illegal:!1,emitter:k,top:R}}catch(j){if(j.message&&j.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:j.message,context:n.slice(A-100,A+100),mode:j.mode},sofar:y,relevance:0,value:G(n),emitter:k};if(s)return{illegal:!1,relevance:0,value:G(n),emitter:k,language:e,top:R,errorRaised:j};throw j}}function p(e,n){n=n||g.languages||Object.keys(t);const i=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:G(e),illegal:!1,top:u};return t.emitter.addText(e),t}(e),r=n.filter(N).filter(k).map(t=>f(t,e,!1));r.unshift(i);const a=r.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),[s,o]=a,l=s;return l.second_best=o,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,E={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(b,e=>e.replace(/\t/g,g.tabReplace)))}};function x(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=N(n[1]);return t||(z(l.replace("{}",n[1])),z("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>h(e)||N(e))}(e);if(h(n))return;M("before:highlightElement",{el:e,language:n}),t=e;const i=t.textContent,a=n?d(i,{language:n,ignoreIllegals:!0}):p(i);M("after:highlightElement",{el:e,result:a,text:i}),e.innerHTML=a.value,function(e,t,n){const i=t?r[t]:n;e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{w.called||(w.called=!0,K("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(x))};let v=!1;function y(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(x):v=!0}function N(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function R(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{r[e.toLowerCase()]=t})}function k(e){const t=N(e);return t&&!t.disableAutodetect}function M(e,t){const n=e;a.forEach(function(e){e[n]&&e[n](t)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){v&&y()},!1),Object.assign(e,{highlight:d,highlightAuto:p,highlightAll:y,fixMarkup:function(e){return K("10.2.0","fixMarkup will be removed entirely in v11.0"),K("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),function(e){return g.tabReplace||g.useBR?e.replace(o,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):e}(e)},highlightElement:x,highlightBlock:function(e){return K("10.7.0","highlightBlock will be removed entirely in v12.0"),K("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&(K("10.3.0","'useBR' will be removed entirely in v11.0"),K("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=V(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){K("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),v=!0},registerLanguage:function(n,i){let r=null;try{r=i(e)}catch(a){if(U("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw a;U(a),r=u}r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&R(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:R,requireLanguage:function(e){K("10.4.0","requireLanguage will be removed entirely in v11."),K("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:k,inherit:V,addPlugin:function(e){(function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),a.push(e)},vuePlugin:P(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.3";for(const i in _)"object"==typeof _[i]&&n(_[i]);return Object.assign(e,_),e.addPlugin(m),e.addPlugin(C),e.addPlugin(E),e}({});e.exports=q}}]);