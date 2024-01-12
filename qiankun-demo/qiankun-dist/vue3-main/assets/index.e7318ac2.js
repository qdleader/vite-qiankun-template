import{$ as A,_ as s,a4 as k,S as v,a5 as z,t as E,d as B,u as L,r as K,p as Q,U as j,A as T,c as q,a as H,w as U}from"./index.24f350f6.js";import{u as V}from"./index.168cd1e3.js";var I=["xxxl","xxl","xl","lg","md","sm","xs"],O={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},b=new Map,F=-1,R={},W={matchHandlers:{},dispatch:function(t){return R=t,b.forEach(function(d){return d(R)}),b.size>=1},subscribe:function(t){return b.size||this.register(),F+=1,b.set(F,t),t(R),F},unsubscribe:function(t){b.delete(t),b.size||this.unregister()},unregister:function(){var t=this;Object.keys(O).forEach(function(d){var f=O[d],u=t.matchHandlers[f];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),b.clear()},register:function(){var t=this;Object.keys(O).forEach(function(d){var f=O[d],u=function(h){var x=h.matches;t.dispatch(A(A({},R),s({},d,x)))},c=window.matchMedia(f);c.addListener(u),t.matchHandlers[f]={mql:c,listener:u},u(c)})}};const M=W;var $=Symbol("rowContextKey"),D=function(t){z($,t)},J=function(){return k($,{gutter:v(function(){}),wrap:v(function(){}),supportFlexGap:v(function(){})})};E("top","middle","bottom","stretch");E("start","end","center","space-around","space-between");var X=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},Y=B({name:"ARow",props:X(),setup:function(t,d){var f=d.slots,u=L("row",t),c=u.prefixCls,_=u.direction,h,x=K({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),S=V();Q(function(){h=M.subscribe(function(e){var r=t.gutter||0;(!Array.isArray(r)&&j(r)==="object"||Array.isArray(r)&&(j(r[0])==="object"||j(r[1])==="object"))&&(x.value=e)})}),T(function(){M.unsubscribe(h)});var N=v(function(){var e=[0,0],r=t.gutter,n=r===void 0?0:r,l=Array.isArray(n)?n:[n,0];return l.forEach(function(p,w){if(j(p)==="object")for(var o=0;o<I.length;o++){var g=I[o];if(x.value[g]&&p[g]!==void 0){e[w]=p[g];break}}else e[w]=p||0}),e});D({gutter:N,supportFlexGap:S,wrap:v(function(){return t.wrap})});var G=v(function(){var e;return q(c.value,(e={},s(e,"".concat(c.value,"-no-wrap"),t.wrap===!1),s(e,"".concat(c.value,"-").concat(t.justify),t.justify),s(e,"".concat(c.value,"-").concat(t.align),t.align),s(e,"".concat(c.value,"-rtl"),_.value==="rtl"),e))}),P=v(function(){var e=N.value,r={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,l=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(r.marginLeft=n,r.marginRight=n),S.value?r.rowGap="".concat(e[1],"px"):l&&(r.marginTop=l,r.marginBottom=l),r});return function(){var e;return H("div",{class:G.value,style:P.value},[(e=f.default)===null||e===void 0?void 0:e.call(f)])}}});const Z=Y;function ee(a){return typeof a=="number"?"".concat(a," ").concat(a," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(a)?"0 0 ".concat(a):a}var te=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const re=B({name:"ACol",props:te(),setup:function(t,d){var f=d.slots,u=J(),c=u.gutter,_=u.supportFlexGap,h=u.wrap,x=L("col",t),S=x.prefixCls,N=x.direction,G=v(function(){var e,r=t.span,n=t.order,l=t.offset,p=t.push,w=t.pull,o=S.value,g={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(y){var m,i={},C=t[y];typeof C=="number"?i.span=C:j(C)==="object"&&(i=C||{}),g=A(A({},g),(m={},s(m,"".concat(o,"-").concat(y,"-").concat(i.span),i.span!==void 0),s(m,"".concat(o,"-").concat(y,"-order-").concat(i.order),i.order||i.order===0),s(m,"".concat(o,"-").concat(y,"-offset-").concat(i.offset),i.offset||i.offset===0),s(m,"".concat(o,"-").concat(y,"-push-").concat(i.push),i.push||i.push===0),s(m,"".concat(o,"-").concat(y,"-pull-").concat(i.pull),i.pull||i.pull===0),s(m,"".concat(o,"-rtl"),N.value==="rtl"),m))}),q(o,(e={},s(e,"".concat(o,"-").concat(r),r!==void 0),s(e,"".concat(o,"-order-").concat(n),n),s(e,"".concat(o,"-offset-").concat(l),l),s(e,"".concat(o,"-push-").concat(p),p),s(e,"".concat(o,"-pull-").concat(w),w),e),g)}),P=v(function(){var e=t.flex,r=c.value,n={};if(r&&r[0]>0){var l="".concat(r[0]/2,"px");n.paddingLeft=l,n.paddingRight=l}if(r&&r[1]>0&&!_.value){var p="".concat(r[1]/2,"px");n.paddingTop=p,n.paddingBottom=p}return e&&(n.flex=ee(e),h.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return H("div",{class:G.value,style:P.value},[(e=f.default)===null||e===void 0?void 0:e.call(f)])}}}),ue=U(Z),oe=U(re);export{re as C,Z as R,oe as _,ue as a,M as b,I as r};