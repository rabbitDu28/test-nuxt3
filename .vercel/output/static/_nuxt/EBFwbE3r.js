import{_ as R,x as U,y as S,s as O,A as D,B as T,r as V,S as F,l as $,v as L,T as E,j as N,C as P,D as J,o as f,c as m,a as _,J as G,U as W,H as X,V as Y,W as Z,X as K,Y as Q,m as ee,P as te,Z as ae,L as u,t as M,b as j,$ as se,w as oe,d as re,a0 as ne,O as le}from"./CN4uZpBG.js";import{u as ie}from"./B6r6ETpI.js";import{u as ue}from"./CeWdz4S9.js";import{u as de}from"./CK1QPDRh.js";const pe={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ce={...pe,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}},i=U(S.ui.strategy,S.ui.textarea,ce),ge=O({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(i.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return[...S.ui.colors,...Object.keys(i.color)].includes(e)}},variant:{type:String,default:()=>i.default.variant,validator(e){return[...Object.keys(i.variant),...Object.values(i.color).flatMap(a=>Object.keys(a))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:a}){const{ui:s,attrs:x}=D("textarea",T(e,"ui"),i,T(e,"class")),{emitFormBlur:c,emitFormInput:y,inputId:r,color:v,size:d,name:h}=ie(e,i),n=V(F({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),l=V(null),w=()=>{var t;e.autofocus&&((t=l.value)==null||t.focus())},g=()=>{if(e.autoresize){if(!l.value)return;l.value.rows=e.rows;const t=window.getComputedStyle(l.value),o=parseInt(t.paddingTop),p=parseInt(t.paddingBottom),q=o+p,A=parseInt(t.lineHeight),{scrollHeight:H}=l.value,C=(H-q)/A;C>e.rows&&(l.value.rows=e.maxrows?Math.min(C,e.maxrows):C)}},b=t=>{n.value.trim&&(t=t.trim()),n.value.number&&(t=Y(t)),a("update:modelValue",t),y()},I=t=>{g(),n.value.lazy||b(t.target.value)},k=t=>{const o=t.target.value;a("change",o),n.value.lazy&&b(o),n.value.trim&&(t.target.value=o.trim())},z=t=>{a("blur",t),c()};$(()=>{setTimeout(()=>{w()},e.autofocusDelay)}),L(()=>e.modelValue,()=>{E(g)}),$(()=>{setTimeout(()=>{w(),g()},100)});const B=N(()=>{var o,p;const t=((p=(o=s.value.color)==null?void 0:o[v.value])==null?void 0:p[e.variant])||s.value.variant[e.variant];return P(J(s.value.base,s.value.form,s.value.rounded,s.value.placeholder,s.value.size[d.value],e.padded?s.value.padding[d.value]:"p-0",t==null?void 0:t.replaceAll("{color}",v.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:s,attrs:x,name:h,inputId:r,textarea:l,textareaClass:B,onInput:I,onChange:k,onBlur:z}}}),fe=["id","value","name","rows","required","disabled","placeholder"];function me(e,a,s,x,c,y){return f(),m("div",{class:X(e.ui.wrapper)},[_("textarea",G({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:a[0]||(a[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:a[1]||(a[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:a[2]||(a[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,fe),W(e.$slots,"default")],2)}const xe=R(ge,[["render",me]]),ye={class:"p-5"},ve={key:0},he={key:1},we={key:2},be={class:"text-2xl"},ke=["innerHTML"],_e={class:"py-2"},Ie=O({__name:"[id]",async setup(e){let a,s;const x=Z(),c=K(),y=()=>$fetch(`/api/detail/${c.params.id}`),{data:r,pending:v,error:d}=([a,s]=Q(()=>ue(y,"$qTwq0iy38b")),a=await a,s(),a),h=N(()=>d.value.data.statusMessage);ee(()=>{u(d)&&ne(h.value)});const n=te("comment",()=>""),l=de(),{isLogin:w}=l,g=ae(),b=()=>{w?(g.add({title:"已提交评论!"}),n.value=""):x.push("/login?callback="+c.path)};return(I,k)=>{var t,o;const z=xe,B=le;return f(),m("div",ye,[u(v)?(f(),m("div",ve,"加载中...")):u(d)?(f(),m("div",he,M(u(h)),1)):(f(),m("div",we,[_("h1",be,M((t=u(r))==null?void 0:t.title),1),_("div",{innerHTML:(o=u(r))==null?void 0:o.content},null,8,ke),_("div",_e,[j(z,{modelValue:u(n),"onUpdate:modelValue":k[0]||(k[0]=p=>se(n)?n.value=p:null),placeholder:"输入评论"},null,8,["modelValue"]),j(B,{onClick:b},{default:oe(()=>[re("发送")]),_:1})])]))])}}});export{Ie as default};