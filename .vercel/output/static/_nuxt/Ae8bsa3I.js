import{j,a4 as i,a5 as O,a6 as q,a7 as A,s as E,Y as N,u as U,o as l,c as d,L as p,t as m,F as V,a8 as B,b as R,w as z,d as S,a as G,e as H}from"./CN4uZpBG.js";import{u as I}from"./CeWdz4S9.js";function K(o,a,c){const[t={},r]=typeof a=="string"?[{},a]:[a,c],e=j(()=>i(o)),s=t.key||O([r,typeof e.value=="string"?e.value:"",...Q(t)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);const f=s===r?"$f"+s:s;if(!t.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:_,lazy:u,default:v,transform:k,pick:w,watch:y,immediate:C,getCachedData:D,deep:L,dedupe:T,...$}=t,g=q({...A,...$,cache:typeof t.cache=="boolean"?void 0:t.cache}),F={server:_,lazy:u,default:v,transform:k,pick:w,immediate:C,getCachedData:D,deep:L,dedupe:T,watch:y===!1?[]:[g,e,...y||[]]};let n;return I(f,()=>{var b;(b=n==null?void 0:n.abort)==null||b.call(n),n=typeof AbortController<"u"?new AbortController:{};const x=i(t.timeout);let h;return x&&(h=setTimeout(()=>n.abort(),x),n.signal.onabort=()=>clearTimeout(h)),(t.$fetch||globalThis.$fetch)(e.value,{signal:n.signal,...g}).finally(()=>{clearTimeout(h)})},F)}function Q(o){var c;const a=[((c=i(o.method))==null?void 0:c.toUpperCase())||"GET",i(o.baseURL)];for(const t of[o.params||o.query]){const r=i(t);if(!r)continue;const e={};for(const[s,f]of Object.entries(r))e[i(s)]=i(f);a.push(e)}return a}const W={class:"flex items-center flex-col gap-2 py-4"},Y={key:0},J={key:1,class:"text-red-300"},M={key:2},P={class:"text-slate-500"},ae=E({__name:"index",async setup(o){let a,c;const{data:t,pending:r,error:e}=([a,c]=N(()=>K("/api/posts",{lazy:!0},"$pqtWcjQkdb")),a=await a,c(),a);return U({title:"index页面"}),(s,f)=>{const _=H;return l(),d("div",W,[p(r)?(l(),d("div",Y,"加载中...")):p(e)?(l(),d("div",J,m(p(e).message),1)):(l(),d("div",M,[(l(!0),d(V,null,B(p(t),u=>(l(),d("div",{key:u.id},[R(_,{class:"text-lg",to:`/detail/${u.id}`},{default:z(()=>[S(m(u.title),1)]),_:2},1032,["to"]),G("p",P,"发布于: "+m(u.date),1)]))),128))]))])}}});export{ae as default};
