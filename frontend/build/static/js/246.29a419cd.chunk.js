(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[246],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},8986:function(e,t,n){"use strict";n.d(t,{Dv:function(){return f},Mo:function(){return p},QV:function(){return a},RV:function(){return l},SO:function(){return u},V$:function(){return c},b_:function(){return o},br:function(){return r},cl:function(){return s},jX:function(){return i},pQ:function(){return d},xj:function(){return m}});var r=function(e){return{type:"NOTIFY",payload:e}},o=function(e){return{type:"LOGBOX",payload:e}},a=function(e){return{type:"AUTH",payload:e}},i=function(e){return{type:"ADDITEM",payload:e}},s=function(e){return{type:"REMOVEITEM",payload:e}},c=function(e){return{type:"INCREMENT",payload:e}},d=function(e){return{type:"DECREMENT",payload:e}},l=function(e){return{type:"PRESETCART",payload:e}},u=function(e){return{type:"THANKS",payload:e}},p=function(e){return{type:"ADDTOLIST",payload:e}},m=function(e){return{type:"REMOVEFROMLIST",payload:e}},f=function(e){return{type:"PRESETLIST",payload:e}}},246:function(e,t,n){"use strict";n.r(t);var r=n(4942),o=n(1413),a=n(3433),i=n(9439),s=n(2791),c=(n(9737),n(1889)),d=n(890),l=n(4554),u=n(3400),p=n(3767),m=n(6151),f=n(792),v=n(2739),h=n(627),Z=n(7391),b=n(7133),g=n(1747),y=n(3786),x=n(2419),C=n(7422),j=n(9434),M=n(8986),S=n(4270),w=n(184);function I(e){var t=e.controller,n=e.addressArray,c=e.setAddressArray,u=e.setController,p=(0,s.useState)({}),x=(0,i.Z)(p,2),S=x[0],I=x[1],R=(0,j.I0)(),k=(0,j.v9)((function(e){return e}));(0,s.useEffect)((function(){void 0!==t.index&&I((0,o.Z)({},n[t.index]))}),[]);var A=function(e){I((0,o.Z)((0,o.Z)({},S),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,w.jsx)(f.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t.openModal,onClose:function(){u((0,o.Z)((0,o.Z)({},t),{},{openModal:!t.openModal}))},closeAfterTransition:!0,BackdropComponent:v.Z,BackdropProps:{timeout:500},children:(0,w.jsx)(h.Z,{in:t.openModal,children:(0,w.jsxs)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:2},children:[(0,w.jsx)(d.Z,{sx:{pb:1},variant:"h6",children:"Address"}),(0,w.jsxs)("form",{className:"form",id:"myForm",onSubmit:function(e){e.preventDefault();var r=[].concat((0,a.Z)(n),[S]);void 0!==t.index&&r.splice(t.index,1);var i=new FormData;i.append("address",JSON.stringify(r)),i.append("CID",k.auth.CID),(0,C.uG)(i).then((function(e){200===e.status?(c((0,a.Z)(r)),u((0,o.Z)((0,o.Z)({},t),{},{openModal:!1,index:void 0})),R((0,M.br)({open:!0,variant:"success",message:"Address Appended !!!"}))):R((0,M.br)({open:!0,variant:"error",message:e.data.message||"Something Went Wrong !!!"}))})).catch((function(e){R((0,M.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"}))}))},enctype:"multipart/form-data",method:"post",children:[(0,w.jsx)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",name:"customer_name",label:"Name",value:S.customer_name||"",onChange:A,type:"text"}),(0,w.jsx)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",name:"mobile",label:"Mobile",type:"number",value:S.mobile||"",onChange:A}),(0,w.jsx)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",name:"pincode",label:"Pin Code",type:"number",value:S.pincode||"",onChange:A}),(0,w.jsx)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",name:"city",label:"City",value:S.city||"",onChange:A,type:"text"}),(0,w.jsx)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",name:"state",label:"State",type:"text",value:S.state||"",onChange:A}),(0,w.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Address"}),(0,w.jsx)("br",{}),(0,w.jsx)(g.Z,{fullWidth:!0,maxRows:5,minRows:5,id:"outlined-select",name:"address",style:{width:"100%"},type:"text",value:S.address||"",onChange:A,placeholder:"Please enter your address"}),(0,w.jsx)("br",{}),(0,w.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Address Type"}),(0,w.jsxs)(Z.Z,{sx:{mb:1},size:"small",fullWidth:!0,id:"outlined-select",select:!0,name:"type",displayEmpty:!0,value:S.type||"",multiple:!0,onChange:A,helperText:"Please select your address type",children:[(0,w.jsx)(y.Z,{value:"home",children:"Home"},"home"),(0,w.jsx)(y.Z,{value:"office",children:"Office"},"office"),(0,w.jsx)(y.Z,{value:"none",children:"None"},"none")]}),(0,w.jsx)(m.Z,{color:"primary",fullWidth:!0,type:"submit",variant:"contained",children:"Add Address"})]})]})})})}t.default=function(){var e=(0,j.v9)((function(e){return e})),t=(0,j.I0)(),n=(0,s.useState)([]),r=(0,i.Z)(n,2),f=r[0],v=r[1],h=(0,s.useState)({openModal:!1}),Z=(0,i.Z)(h,2),b=Z[0],g=Z[1];(0,s.useEffect)((function(){e.auth.isAuth&&(0,C.vR)(e.auth.CID).then((function(e){v(e.data.address)})).catch((function(e){}))}),[e.auth.isAuth]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(S.q,{children:[(0,w.jsx)("title",{children:"Address"}),(0,w.jsx)("meta",{name:"description",content:"Customer details and order sections"})]}),(0,w.jsx)(c.ZP,{container:!0,className:"Banner",children:(0,w.jsx)(c.ZP,{item:!0,xs:12,children:(0,w.jsx)(d.Z,{variant:"h1",children:"Address"})})}),(0,w.jsx)(I,{controller:b,addressArray:f,setAddressArray:v,setController:g}),(0,w.jsxs)(l.Z,{className:"addressContainer",children:[(0,w.jsxs)(l.Z,{onClick:function(){g((0,o.Z)((0,o.Z)({},b),{},{openModal:!0}))},component:"iconButton",className:"addAddress",xs:2.7,children:[(0,w.jsx)(u.Z,{color:"primary",size:"large",children:(0,w.jsx)(x.Z,{})}),(0,w.jsx)(d.Z,{variant:"h5",children:"Add Address"})]}),f&&f.map((function(n,r){return(0,w.jsxs)(l.Z,{className:"addressTile",item:!0,xs:2.7,children:[(0,w.jsxs)(p.Z,{sx:{overflow:"hidden",minHeight:"85%"},children:[(0,w.jsx)(d.Z,{variant:"h5",children:n.customer_name}),(0,w.jsx)(d.Z,{variant:"body1",children:n.address}),(0,w.jsxs)(d.Z,{variant:"button",children:[n.city,"\xa0",n.pincode]}),(0,w.jsx)(d.Z,{variant:"body2",children:n.mobile}),(0,w.jsx)(d.Z,{variant:"button",children:n.type})]}),(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(m.Z,{onClick:function(){g({openModal:!0,index:r})},size:"small",variant:"outlined",children:"Edit"}),(0,w.jsx)(l.Z,{component:"span",sx:{ml:1,mr:1,border:"1px solid brown"}}),(0,w.jsx)(m.Z,{onClick:function(){!function(n){var r=f;r.splice(n,1);var i=new FormData;i.append("address",JSON.stringify((0,a.Z)(r))),i.append("CID",e.auth.CID),(0,C.uG)(i).then((function(e){200===e.status?(v((0,a.Z)(r)),g((0,o.Z)((0,o.Z)({},b),{},{openModal:!1})),t((0,M.br)({open:!0,variant:"warning",message:"Address Removed"}))):t((0,M.br)({open:!0,variant:"error",message:e.data.message||"Something Went Wrong !!!"}))})).catch((function(e){t((0,M.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"}))}))}(r)},size:"small",variant:"outlined",children:"Delete"})]})]})}))]})]})}},2419:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(8610)},133:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var r=n(1217);function o(e){return(0,r.Z)("MuiDivider",e)}var a=(0,n(5878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},3400:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),s=n(8182),c=n(4419),d=n(2065),l=n(7630),u=n(1046),p=n(3701),m=n(4036),f=n(1217);function v(e){return(0,f.Z)("MuiIconButton",e)}var h=(0,n(5878).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Z=n(184),b=["edge","children","className","color","disabled","disableFocusRipple","size"],g=(0,l.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,m.Z)(n.color))],n.edge&&t["edge".concat((0,m.Z)(n.edge))],t["size".concat((0,m.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.active," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,a.Z)({color:(t.vars||t).palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(h.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),y=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiIconButton"}),r=n.edge,i=void 0!==r&&r,d=n.children,l=n.className,p=n.color,f=void 0===p?"default":p,h=n.disabled,y=void 0!==h&&h,x=n.disableFocusRipple,C=void 0!==x&&x,j=n.size,M=void 0===j?"medium":j,S=(0,o.Z)(n,b),w=(0,a.Z)({},n,{edge:i,color:f,disabled:y,disableFocusRipple:C,size:M}),I=function(e){var t=e.classes,n=e.disabled,r=e.color,o=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==r&&"color".concat((0,m.Z)(r)),o&&"edge".concat((0,m.Z)(o)),"size".concat((0,m.Z)(a))]};return(0,c.Z)(i,v,t)}(w);return(0,Z.jsx)(g,(0,a.Z)({className:(0,s.Z)(I.root,l),centerRipple:!0,focusRipple:!C,disabled:y,ref:t,ownerState:w},S,{children:d}))}))},6014:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var r=n(1217);function o(e){return(0,r.Z)("MuiListItemIcon",e)}var a=(0,n(5878).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=a},9849:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(1217);function o(e){return(0,r.Z)("MuiListItemText",e)}var a=(0,n(5878).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},3786:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),s=n(8182),c=n(4419),d=n(2065),l=n(7630),u=n(1046),p=n(6199),m=n(3701),f=n(162),v=n(2071),h=n(133),Z=n(6014),b=n(9849),g=n(1217);function y(e){return(0,g.Z)("MuiMenuItem",e)}var x=(0,n(5878).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=n(184),j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],M=(0,l.ZP)(m.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(x.selected),(0,r.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(x.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(x.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(h.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,r.Z)(t,"& + .".concat(h.Z.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(b.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(b.Z.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(Z.Z.root),{minWidth:36}),t),!o.dense&&(0,r.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,r.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),S=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,d=void 0!==r&&r,l=n.component,m=void 0===l?"li":l,h=n.dense,Z=void 0!==h&&h,b=n.divider,g=void 0!==b&&b,x=n.disableGutters,S=void 0!==x&&x,w=n.focusVisibleClassName,I=n.role,R=void 0===I?"menuitem":I,k=n.tabIndex,A=(0,o.Z)(n,j),O=i.useContext(p.Z),T={dense:Z||O.dense||!1,disableGutters:S},z=i.useRef(null);(0,f.Z)((function(){d&&z.current&&z.current.focus()}),[d]);var E,N=(0,a.Z)({},n,{dense:T.dense,divider:g,disableGutters:S}),F=function(e){var t=e.disabled,n=e.dense,r=e.divider,o=e.disableGutters,i=e.selected,s=e.classes,d={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},l=(0,c.Z)(d,y,s);return(0,a.Z)({},s,l)}(n),P=(0,v.Z)(z,t);return n.disabled||(E=void 0!==k?k:-1),(0,C.jsx)(p.Z.Provider,{value:T,children:(0,C.jsx)(M,(0,a.Z)({ref:P,role:R,tabIndex:E,component:m,focusVisibleClassName:(0,s.Z)(F.focusVisible,w)},A,{ownerState:N,classes:F}))})}))},3767:function(e,t,n){"use strict";var r=n(4942),o=n(3366),a=n(7462),i=n(2791),s=n(1184),c=n(5682),d=n(8519),l=n(2466),u=n(7630),p=n(1046),m=n(184),f=["component","direction","spacing","divider","children"];function v(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var h=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,o=(0,a.Z)({display:"flex"},(0,s.k9)({theme:n},(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,c.hB)(n),d=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),u=(0,s.P$)({values:t.direction,base:d}),p=(0,s.P$)({values:t.spacing,base:d});o=(0,l.Z)(o,(0,s.k9)({theme:n},p,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=n?u[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,c.NA)(i,e))};var o})))}return o})),Z=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiStack"}),r=(0,d.Z)(n),i=r.component,s=void 0===i?"div":i,c=r.direction,l=void 0===c?"column":c,u=r.spacing,Z=void 0===u?0:u,b=r.divider,g=r.children,y=(0,o.Z)(r,f),x={direction:l,spacing:Z};return(0,m.jsx)(h,(0,a.Z)({as:s,ownerState:x,ref:t},y,{children:b?v(g,b):g}))}));t.Z=Z},8610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return y.Z}});var r=n(5902),o=n(4036),a=n(1260),i=n(9201),s=n(3199);var c=function(e,t){return function(){return null}},d=n(9103),l=n(8301),u=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,f=n(162),v=n(7384);var h=function(e,t,n,r,o){return null},Z=n(8278),b=n(9683),g=n(2071),y=n(8221),x={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},9737:function(){}}]);
//# sourceMappingURL=246.29a419cd.chunk.js.map