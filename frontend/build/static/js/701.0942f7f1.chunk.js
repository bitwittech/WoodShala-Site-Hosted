(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[701],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},4980:function(e,t,n){"use strict";n(2791);t.Z=n.p+"static/media/avatar.81c59ed1ecf16f50c3785bba4dd51477.svg"},8986:function(e,t,n){"use strict";n.d(t,{Dv:function(){return f},Mo:function(){return p},QV:function(){return i},RV:function(){return l},SO:function(){return d},V$:function(){return u},b_:function(){return a},br:function(){return r},cl:function(){return s},jX:function(){return o},pQ:function(){return c},xj:function(){return m}});var r=function(e){return{type:"NOTIFY",payload:e}},a=function(e){return{type:"LOGBOX",payload:e}},i=function(e){return{type:"AUTH",payload:e}},o=function(e){return{type:"ADDITEM",payload:e}},s=function(e){return{type:"REMOVEITEM",payload:e}},u=function(e){return{type:"INCREMENT",payload:e}},c=function(e){return{type:"DECREMENT",payload:e}},l=function(e){return{type:"PRESETCART",payload:e}},d=function(e){return{type:"THANKS",payload:e}},p=function(e){return{type:"ADDTOLIST",payload:e}},m=function(e){return{type:"REMOVEFROMLIST",payload:e}},f=function(e){return{type:"PRESETLIST",payload:e}}},6701:function(e,t,n){"use strict";n.r(t);var r=n(4165),a=n(4942),i=n(5861),o=n(1413),s=n(9439),u=n(2791),c=(n(9737),n(1889)),l=n(890),d=n(3400),p=n(7391),m=n(6151),f=n(3239),h=n(3329),v=n(4980),Z=n(1286),g=n(7422),x=n(9434),b=n(8986),y=n(4270),j=n(184);t.default=function(){var e=(0,x.v9)((function(e){return e})),t=(0,x.I0)(),n=(0,u.useState)({email:"",CID:"",username:"",city:"",state:"",shipping:""}),z=(0,s.Z)(n,2),C=z[0],S=z[1],R=(0,u.useState)({visible:!1,loading:!1,preview:void 0}),P=(0,s.Z)(R,2),I=P[0],w=P[1];(0,u.useEffect)((function(){e.auth.isAuth&&(0,g.jy)(e.auth.CID).then((function(e){S((0,o.Z)((0,o.Z)({},C),e.data))})).catch((function(e){}))}),[e.auth.isAuth]);var E=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"profile_image"!==t.target.name?S((0,o.Z)((0,o.Z)({},C),{},(0,a.Z)({},t.target.name,t.target.value))):(w((0,o.Z)((0,o.Z)({},I),{},{preview:URL.createObjectURL(t.target.files[0])})),S((0,o.Z)((0,o.Z)({},C),{},{profile_image:t.target.files[0]})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(a){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.preventDefault(),w((0,o.Z)((0,o.Z)({},I),{},{loading:!0})),(i=new FormData).append("CID",C.CID),i.append("username",C.username),i.append("mobile",C.mobile),i.append("email",C.email),i.append("city",C.city),i.append("state",C.state),i.append("shipping",C.shipping),i.append("profile_image",C.profile_image),n.next=14,(0,g.uG)(i);case 14:n.sent&&(t((0,b.br)({open:!0,message:"Changes Saved !!!",variant:"success"})),t((0,b.QV)({isAuth:!0,username:C.username,email:C.email,CID:C.CID,token:e.auth.token})),w((0,o.Z)((0,o.Z)({},I),{},{loading:!1,preview:void 0}))),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(0),t((0,b.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"})),w((0,o.Z)((0,o.Z)({},I),{},{loading:!1}));case 22:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(y.q,{children:[(0,j.jsx)("title",{children:"Profile"}),(0,j.jsx)("meta",{name:"description",content:"Customer details and order sections"})]}),(0,j.jsx)(c.ZP,{container:!0,className:"Banner",children:(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{variant:"h1",children:"Account"})})}),(0,j.jsx)("form",{method:"post",onSubmit:M,class:"form",enctype:"multipart/form-data",children:(0,j.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsxs)(c.ZP,{className:"profileName",spacing:4,container:!0,children:[(0,j.jsx)(c.ZP,{sx:{backgroundPosition:"center",background:"url(".concat(I.preview||C.profile_image||v.Z,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},item:!0,md:3,className:"profilePicBox",children:(0,j.jsxs)(d.Z,{size:"large",className:"editButton",color:"primary","aria-label":"upload picture",component:"label",children:[(0,j.jsx)("input",{hidden:!0,name:"profile_image",onChange:E,accept:"image/*",type:"file"}),(0,j.jsx)(Z.Z,{fontSize:"inherit"})]})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(l.Z,{variant:"h3",children:C.username})})]})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsxs)(c.ZP,{container:!0,className:"profileForm",spacing:4,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(p.Z,{size:"small",fullWidth:!0,variant:"outlined",name:"username",value:C.username||"",onChange:E,type:"text",label:"UserName"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(p.Z,{size:"small",fullWidth:!0,disabled:!0,variant:"outlined",name:"email",onChange:E,value:C.email||"",type:"email",label:"Email"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(p.Z,{size:"small",fullWidth:!0,disabled:!0,variant:"outlined",name:"mobile",onChange:E,value:C.mobile||"",type:"number",label:"Mobile Number"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(p.Z,{size:"small",onChange:E,fullWidth:!0,variant:"outlined",name:"city",value:C.city||"",type:"text",label:"City"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,j.jsx)(p.Z,{size:"small",fullWidth:!0,onChange:E,variant:"outlined",name:"state",value:C.state||"",type:"text",label:"State"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)(p.Z,{fullWidth:!0,variant:"outlined",size:"small",onChange:E,name:"shipping",value:C.shipping||"",type:"text",label:"Shipping Address"})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,children:(0,j.jsx)("center",{children:(0,j.jsxs)(m.Z,{size:"large",startIcon:(0,j.jsx)(h.Z,{}),type:"submit",disabled:I.loading,variant:"contained",children:[I.loading?(0,j.jsx)(f.Z,{size:"2rem"}):"Save Changes"," "]})})})]})})]})})]})}},1286:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a=r(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},3329:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var a=r(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=o},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(8610)},3400:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),a=n(3366),i=n(7462),o=n(2791),s=n(8182),u=n(4419),c=n(2065),l=n(7630),d=n(1046),p=n(3701),m=n(4036),f=n(1217);function h(e){return(0,f.Z)("MuiIconButton",e)}var v=(0,n(5878).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Z=n(184),g=["edge","children","className","color","disabled","disableFocusRipple","size"],x=(0,l.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,m.Z)(n.color))],n.edge&&t["edge".concat((0,m.Z)(n.edge))],t["size".concat((0,m.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.active," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,i.Z)({color:(t.vars||t).palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(v.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),b=o.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiIconButton"}),r=n.edge,o=void 0!==r&&r,c=n.children,l=n.className,p=n.color,f=void 0===p?"default":p,v=n.disabled,b=void 0!==v&&v,y=n.disableFocusRipple,j=void 0!==y&&y,z=n.size,C=void 0===z?"medium":z,S=(0,a.Z)(n,g),R=(0,i.Z)({},n,{edge:o,color:f,disabled:b,disableFocusRipple:j,size:C}),P=function(e){var t=e.classes,n=e.disabled,r=e.color,a=e.edge,i=e.size,o={root:["root",n&&"disabled","default"!==r&&"color".concat((0,m.Z)(r)),a&&"edge".concat((0,m.Z)(a)),"size".concat((0,m.Z)(i))]};return(0,u.Z)(o,h,t)}(R);return(0,Z.jsx)(x,(0,i.Z)({className:(0,s.Z)(P.root,l),centerRipple:!0,focusRipple:!j,disabled:b,ref:t,ownerState:R},S,{children:c}))}))},8610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return c.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return v},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var r=n(5902),a=n(4036),i=n(1260),o=n(9201),s=n(3199);var u=function(e,t){return function(){return null}},c=n(9103),l=n(8301),d=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,f=n(162),h=n(7384);var v=function(e,t,n,r,a){return null},Z=n(8278),g=n(9683),x=n(2071),b=n(8221),y={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},9737:function(){}}]);
//# sourceMappingURL=701.0942f7f1.chunk.js.map