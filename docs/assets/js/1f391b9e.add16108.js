(self.webpackChunkobsidian_components_website=self.webpackChunkobsidian_components_website||[]).push([[61],{3285:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>Ke});var s=t(6540),o=t(4164),c=t(1003),a=t(7559),i=t(615),r=t(8453),l=t(5260),d=t(2303),u=t(5293),m=t(6342);function h(){const{prism:e}=(0,m.p)(),{colorMode:n}=(0,u.G)(),t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var f=t(8426),p=t.n(f);const x=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(b);function N(e,n){const t=e.map((e=>{const{start:t,end:s}=j[e];return`(?:${t}\\s*(${n.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)}function C(e,n){let t=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=n;if(c&&g.test(c)){const e=c.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const n=o[0].className,s=p()(e).filter((e=>e>0)).map((e=>[e-1,[n]]));return{lineClassNames:Object.fromEntries(s),code:t}}if(void 0===s)return{lineClassNames:{},code:t};const a=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],n);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],n);case"html":return N(["js","jsBlock","html"],n);case"python":case"py":case"bash":return N(["bash"],n);case"markdown":case"md":return N(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return N(["tex"],n);case"lua":case"haskell":case"sql":return N(["lua"],n);case"wasm":return N(["wasm"],n);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],n);case"vbnet":return N(["vbnet","rem"],n);case"batch":return N(["rem"],n);case"basic":return N(["rem","f90"],n);case"fsharp":return N(["js","ml"],n);case"ocaml":case"sml":return N(["ml"],n);case"fortran":return N(["f90"],n);case"cobol":return N(["cobol"],n);default:return N(v,n)}}(s,o),i=t.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:n,line:t}=e;return[t,n]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:n,block:t}=e;return[t.start,n]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:n,block:t}=e;return[t.end,n]})));for(let h=0;h<i.length;){const e=i[h].match(a);if(!e){h+=1;continue}const n=e.slice(1).find((e=>void 0!==e));l[n]?r[l[n]].range+=`${h},`:d[n]?r[d[n]].start=h:u[n]&&(r[u[n]].range+=`${r[u[n]].start}-${h-1},`),i.splice(h,1)}t=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[n,{range:t}]=e;p()(t).forEach((e=>{m[e]??=[],m[e].push(n)}))})),{lineClassNames:m,code:t}}const k={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=t(4848);function A(e){let{as:n,...t}=e;const s=function(e){const n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=n[s];c&&"string"==typeof o&&(t[c]=o)})),t}(h());return(0,y.jsx)(n,{...t,style:s,className:(0,o.A)(t.className,k.codeBlockContainer,a.G.common.codeBlock)})}const L={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:n,className:t}=e;return(0,y.jsx)(A,{as:"pre",tabIndex:0,className:(0,o.A)(L.codeBlockStandalone,"thin-scrollbar",t),children:(0,y.jsx)("code",{className:L.codeBlockLines,children:n})})}var w=t(9532);const _={attributes:!0,characterData:!0,childList:!0,subtree:!0};function E(e,n){const[t,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,n,t){void 0===t&&(t=_);const o=(0,w._q)(n),c=(0,w.Be)(t);(0,s.useEffect)((()=>{const n=new MutationObserver(o);return e&&n.observe(e,c),()=>n.disconnect()}),[e,o,c])}(t,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var H=t(1765);const T={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function S(e){let{line:n,classNames:t,showLineNumbers:s,getLineProps:c,getTokenProps:a}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const i=c({line:n,className:(0,o.A)(t,s&&T.codeLine)}),r=n.map(((e,n)=>(0,y.jsx)("span",{...a({token:e,key:n})},n)));return(0,y.jsxs)("span",{...i,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:T.codeLineNumber}),(0,y.jsx)("span",{className:T.codeLineContent,children:r})]}):r,(0,y.jsx)("br",{})]})}var M=t(1312);function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function O(e){let{code:n,className:t}=e;const[c,a]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,n){let{target:t=document.body}=void 0===n?{}:n;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);t.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),a&&(c.removeAllRanges(),c.addRange(a)),o&&o.focus()}(n),a(!0),i.current=window.setTimeout((()=>{a(!1)}),1e3)}),[n]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":c?(0,M.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",t,R.copyButton,c&&R.copyButtonCopied),onClick:r,children:(0,y.jsxs)("span",{className:R.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(I,{className:R.copyButtonIcon}),(0,y.jsx)(z,{className:R.copyButtonSuccessIcon})]})})}function W(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){let{className:n,onClick:t,isEnabled:s}=e;const c=(0,M.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:t,className:(0,o.A)("clean-btn",n,s&&$.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,y.jsx)(W,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function V(e){let{children:n,className:t="",metastring:c,title:a,showLineNumbers:i,language:r}=e;const{prism:{defaultLanguage:l,magicComments:d}}=(0,m.p)(),u=function(e){return e?.toLowerCase()}(r??function(e){const n=e.split(" ").find((e=>e.startsWith("language-")));return n?.replace(/language-/,"")}(t)??l),f=h(),p=function(){const[e,n]=(0,s.useState)(!1),[t,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const t=c.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n((e=>!e))}),[c,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:n}=c.current,t=e>n||c.current.querySelector("code").hasAttribute("style");o(t)}),[c]);return E(c,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:t,toggle:a}}(),g=function(e){return e?.match(x)?.groups.title??""}(c)||a,{lineClassNames:b,code:j}=C(n,{metastring:c,language:u,magicComments:d}),v=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(c);return(0,y.jsxs)(A,{as:"div",className:(0,o.A)(t,u&&!t.includes(`language-${u}`)&&`language-${u}`),children:[g&&(0,y.jsx)("div",{className:L.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:L.codeBlockContent,children:[(0,y.jsx)(H.f4,{theme:f,code:j,language:u??"text",children:e=>{let{className:n,style:t,tokens:s,getLineProps:c,getTokenProps:a}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,o.A)(n,L.codeBlock,"thin-scrollbar"),style:t,children:(0,y.jsx)("code",{className:(0,o.A)(L.codeBlockLines,v&&L.codeBlockLinesWithNumbering),children:s.map(((e,n)=>(0,y.jsx)(S,{line:e,getLineProps:c,getTokenProps:a,classNames:b[n],showLineNumbers:v},n)))})})}}),(0,y.jsxs)("div",{className:L.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,y.jsx)(P,{className:L.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,y.jsx)(O,{className:L.codeButton,code:j})]})]})]})}function q(e){let{children:n,...t}=e;const o=(0,d.A)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),a="string"==typeof c?V:B;return(0,y.jsx)(a,{...t,children:c},String(o))}function G(e){return(0,y.jsx)("code",{...e})}var D=t(8774);var F=t(3427),U=t(4577);const J={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function Z(e,n){return!!e&&(e===n||Z(e.parentElement,n))}function K(e){let{summary:n,children:t,...c}=e;(0,F.A)().collectAnchor(c.id);const a=(0,d.A)(),i=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,U.u)({initialState:!c.open}),[u,m]=(0,s.useState)(c.open),h=s.isValidElement(n)?n:(0,y.jsx)("summary",{children:n??"Details"});return(0,y.jsxs)("details",{...c,ref:i,open:u,"data-collapsed":r,className:(0,o.A)(J.details,a&&J.isBrowser,c.className),onMouseDown:e=>{Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;Y(n)&&Z(n,i.current)&&(e.preventDefault(),r?(l(!1),m(!0)):l(!0))},children:[h,(0,y.jsx)(U.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),m(!e)},children:(0,y.jsx)("div",{className:J.collapsibleContent,children:t})})]})}const Q={details:"details_b_Ee"},X="alert alert--info";function ee(e){let{...n}=e;return(0,y.jsx)(K,{...n,className:(0,o.A)(X,Q.details,n.className)})}function ne(e){const n=s.Children.toArray(e.children),t=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,y.jsx)(y.Fragment,{children:n.filter((e=>e!==t))});return(0,y.jsx)(ee,{...e,summary:t,children:o})}var te=t(1107);function se(e){return(0,y.jsx)(te.A,{...e})}const oe={containsTaskList:"containsTaskList_mC6p"};function ce(e){if(void 0!==e)return(0,o.A)(e,e?.includes("contains-task-list")&&oe.containsTaskList)}const ae={img:"img_ev3q"};function ie(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==t)),c=t?.props.children;return{mdxAdmonitionTitle:c,rest:o.length>0?(0,y.jsx)(y.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:t}}const re={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function le(e){let{type:n,className:t,children:s}=e;return(0,y.jsx)("div",{className:(0,o.A)(a.G.common.admonition,a.G.common.admonitionType(n),re.admonition,t),children:s})}function de(e){let{icon:n,title:t}=e;return(0,y.jsxs)("div",{className:re.admonitionHeading,children:[(0,y.jsx)("span",{className:re.admonitionIcon,children:n}),t]})}function ue(e){let{children:n}=e;return n?(0,y.jsx)("div",{className:re.admonitionContent,children:n}):null}function me(e){const{type:n,icon:t,title:s,children:o,className:c}=e;return(0,y.jsxs)(le,{type:n,className:c,children:[(0,y.jsx)(de,{title:s,icon:t}),(0,y.jsx)(ue,{children:o})]})}function he(e){return(0,y.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,y.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const fe={icon:(0,y.jsx)(he,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function pe(e){return(0,y.jsx)(me,{...fe,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function xe(e){return(0,y.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,y.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const ge={icon:(0,y.jsx)(xe,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function be(e){return(0,y.jsx)(me,{...ge,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function je(e){return(0,y.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,y.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const ve={icon:(0,y.jsx)(je,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Ne(e){return(0,y.jsx)(me,{...ve,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function Ce(e){return(0,y.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,y.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const ke={icon:(0,y.jsx)(Ce,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function ye(e){return(0,y.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,y.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Ae={icon:(0,y.jsx)(ye,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Le={icon:(0,y.jsx)(Ce,{}),title:(0,y.jsx)(M.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Be={...{note:pe,tip:be,info:Ne,warning:function(e){return(0,y.jsx)(me,{...ke,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,y.jsx)(me,{...Ae,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,y.jsx)(pe,{title:"secondary",...e}),important:e=>(0,y.jsx)(Ne,{title:"important",...e}),success:e=>(0,y.jsx)(be,{title:"success",...e}),caution:function(e){return(0,y.jsx)(me,{...Le,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function we(e){const n=ie(e),t=(s=n.type,Be[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Be.info));var s;return(0,y.jsx)(t,{...n})}var _e=t(418);const Ee={Head:l.A,details:ne,Details:ne,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(G,{...e}):(0,y.jsx)(q,{...e})},a:function(e){return(0,y.jsx)(D.A,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:ce(e.className)})},li:function(e){return(0,F.A)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,o.A)(n,ae.img))});var n},h1:e=>(0,y.jsx)(se,{as:"h1",...e}),h2:e=>(0,y.jsx)(se,{as:"h2",...e}),h3:e=>(0,y.jsx)(se,{as:"h3",...e}),h4:e=>(0,y.jsx)(se,{as:"h4",...e}),h5:e=>(0,y.jsx)(se,{as:"h5",...e}),h6:e=>(0,y.jsx)(se,{as:"h6",...e}),admonition:we,mermaid:_e.A};function He(e){let{children:n}=e;return(0,y.jsx)(r.x,{components:Ee,children:n})}function Te(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):s.push(o)})),s}function Se(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=Se({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function Me(e){const n=e.getBoundingClientRect();return n.top===n.bottom?Me(e.parentNode):n}function Ie(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>Me(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Me(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function ze(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,m.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function Re(e){const n=(0,s.useRef)(void 0),t=ze();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let o=n;o<=t;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:c,maxHeadingLevel:a}),r=Ie(i,{anchorTopOffset:t.current}),l=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function Oe(e){let{toc:n,className:t,linkClassName:s,isChild:o}=e;return n.length?(0,y.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,y.jsxs)("li",{children:[(0,y.jsx)(D.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,y.jsx)(Oe,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const We=s.memo(Oe);function $e(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:i,...r}=e;const l=(0,m.p)(),d=a??l.tableOfContents.minHeadingLevel,u=i??l.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>Se({toc:Te(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:d,maxHeadingLevel:u});return Re((0,s.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u}}),[o,c,d,u])),(0,y.jsx)(We,{toc:h,className:t,linkClassName:o,...r})}const Pe={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Ve="table-of-contents__link toc-highlight",qe="table-of-contents__link--active";function Ge(e){let{className:n,...t}=e;return(0,y.jsx)("div",{className:(0,o.A)(Pe.tableOfContents,"thin-scrollbar",n),children:(0,y.jsx)($e,{...t,linkClassName:Ve,linkActiveClassName:qe})})}function De(){return(0,y.jsx)(M.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Fe(){return(0,y.jsx)(M.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Ue(){return(0,y.jsx)(l.A,{children:(0,y.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Je(e){let{className:n}=e;return(0,y.jsx)(we,{type:"caution",title:(0,y.jsx)(De,{}),className:(0,o.A)(n,a.G.common.unlistedBanner),children:(0,y.jsx)(Fe,{})})}function Ye(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ue,{}),(0,y.jsx)(Je,{...e})]})}const Ze={mdxPageWrapper:"mdxPageWrapper_j9I6"};function Ke(e){const{content:n}=e,{metadata:{title:t,description:s,frontMatter:r,unlisted:l},assets:d}=n,{keywords:u,wrapperClassName:m,hide_table_of_contents:h}=r,f=d.image??r.image;return(0,y.jsx)(c.e3,{className:(0,o.A)(m??a.G.wrapper.mdxPages,a.G.page.mdxPage),children:(0,y.jsxs)(i.A,{children:[(0,y.jsx)(c.be,{title:t,description:s,keywords:u,image:f}),(0,y.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,y.jsxs)("div",{className:(0,o.A)("row",Ze.mdxPageWrapper),children:[(0,y.jsxs)("div",{className:(0,o.A)("col",!h&&"col--8"),children:[l&&(0,y.jsx)(Ye,{}),(0,y.jsx)("article",{children:(0,y.jsx)(He,{children:(0,y.jsx)(n,{})})})]}),!h&&n.toc.length>0&&(0,y.jsx)("div",{className:"col col--2",children:(0,y.jsx)(Ge,{toc:n.toc,minHeadingLevel:r.toc_min_heading_level,maxHeadingLevel:r.toc_max_heading_level})})]})})]})})}},8426:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=n;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let n=s;n!==c;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},8453:(e,n,t)=>{"use strict";t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const o={},c=s.createContext(o);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);