(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[350],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},8986:function(e,t,n){"use strict";n.d(t,{Dv:function(){return f},Mo:function(){return p},QV:function(){return i},RV:function(){return l},SO:function(){return d},V$:function(){return c},b_:function(){return r},br:function(){return a},cl:function(){return s},jX:function(){return o},pQ:function(){return u},xj:function(){return m}});var a=function(e){return{type:"NOTIFY",payload:e}},r=function(e){return{type:"LOGBOX",payload:e}},i=function(e){return{type:"AUTH",payload:e}},o=function(e){return{type:"ADDITEM",payload:e}},s=function(e){return{type:"REMOVEITEM",payload:e}},c=function(e){return{type:"INCREMENT",payload:e}},u=function(e){return{type:"DECREMENT",payload:e}},l=function(e){return{type:"PRESETCART",payload:e}},d=function(e){return{type:"THANKS",payload:e}},p=function(e){return{type:"ADDTOLIST",payload:e}},m=function(e){return{type:"REMOVEFROMLIST",payload:e}},f=function(e){return{type:"PRESETLIST",payload:e}}},2350:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(4165),r=n(5861),i=n(4942),o=n(1413),s=n(9439),c=n(2791),u=n(1889),l=n(890),d=n(7391),p=n(3786),m=n(1747),f=n(6151),v=n(3239),h=n(3767),Z=n(4554),g=n(7541),b=n(4281),x=n(748),y=n(4270),j=n(7422),w=n(1686),C=n(9434),M=n(8986),I=n(184);function O(){var e=(0,C.I0)(),t=(0,c.useState)({isLoading:!1,button:"verify",images:[]}),n=(0,s.Z)(t,2),O=n[0],S=n[1];function k(e){e.target.files?S((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,Object.values(e.target.files)))})):S((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,e.target.value))}))}function P(){return(P=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),console.log(O),r=new FormData,console.log(O.images),O.images.length>0&&O.images.map((function(e){return r.append("images",e)})),r.append("reason",O.reason),r.append("email",O.email),r.append("customer_name",O.customer_name),r.append("mobile_no",O.mobile_no),r.append("message",O.message),"Order"===O.reason&&r.append("order_no",O.order_no),O.check===parseInt(O.otp)){t.next=16;break}e((0,M.br)({open:!0,variant:"error",message:"Received Otp is incorrect?"})),t.next=21;break;case 16:return S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!0})})),t.next=19,(0,j.uK)(r);case 19:(i=t.sent)&&(S((function(e){return{images:[],isLoading:!1,button:"verify"}})),e((0,M.br)({open:!0,variant:"success",message:i.data.message})));case 21:t.next=25;break;case 23:t.prev=23,t.t0=t.catch(0);case 25:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function T(){return(T=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!0})})),(r=new FormData).append("reviewer_name",O.customer_name),r.append("reviewer_email",O.email),t.next=7,(0,j.Ui)(r);case 7:(i=t.sent)?(S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!1,button:"emailSent",check:i.data.otp})})),e((0,M.br)({open:!0,variant:"success",message:i.data.message}))):(e((0,M.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"})),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!1})})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(y.q,{children:[(0,I.jsx)("title",{children:"Contact Us"}),(0,I.jsx)("meta",{name:"description",content:"This Page contains all catact details for Woodsala."}),(0,I.jsx)("meta",{name:"keywords",content:"contact us,contact Woodsala,react out woodsala,how to connect with woodsala,search catact woodsala"})]}),(0,I.jsx)(u.ZP,{container:!0,className:"Banner",children:(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,I.jsx)(l.Z,{variant:"h1",children:"Contact Us"})})}),(0,I.jsxs)(u.ZP,{container:!0,className:"formContainer",sx:{boxShadow:2},children:[(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,I.jsx)(l.Z,{variant:"h5",children:"Leave A Message"})}),(0,I.jsx)(u.ZP,{xs:12,md:7.5,item:!0,children:(0,I.jsxs)("form",{method:"post",encType:"multipart/form-data",onSubmit:"verify"!==O.button?function(e){return P.apply(this,arguments)}:function(e){return T.apply(this,arguments)},className:"contactForm",children:[(0,I.jsx)(d.Z,{id:"outlined-select-currency",select:!0,fullWidth:!0,size:"small",name:"reason",required:!0,label:"Select Purpose",helperText:"Please select your purpose",onChange:k,value:O.reason||"",children:["Order","General","Pre-Sales","Post Sales","Customization","Others"].map((function(e){return(0,I.jsx)(p.Z,{value:e,children:e},e)}))}),"Order"===O.reason&&(0,I.jsx)(d.Z,{fullWidth:!0,size:"small",required:!0,label:"Order Number",type:"text",name:"order_no",onChange:k,value:O.order_no||""}),(0,I.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Name",type:"text",name:"customer_name",onChange:k,value:O.customer_name||""}),(0,I.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Email",type:"email",required:!0,name:"email",onChange:k,value:O.email||""}),(0,I.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Mobile",type:"text",name:"mobile_no",onChange:k,value:O.mobile_no||""}),(0,I.jsx)(m.Z,{minRows:5,maxRows:5,fullWidth:!0,onChange:k,value:O.message||"",type:"text",className:"messageBox",name:"message"}),(0,I.jsx)("label",{for:"upload",children:"Upload Image If you have any "}),(0,I.jsxs)(f.Z,{sx:{float:"left",width:"150px"},component:"label",id:"upload",variant:"outlined",children:["Upload",(0,I.jsx)("input",{hidden:!0,onChange:k,name:"images",accept:"image/*",multiple:!0,type:"file"})]}),"verify"!==O.button&&(0,I.jsx)(d.Z,{fullWidth:!0,size:"small",required:!0,label:"OTP",type:"number",name:"otp",onChange:k,value:O.otp||""}),(0,I.jsx)(f.Z,{type:"submit",variant:"contained",sx:{width:"fit-Content",margin:"auto"},disabled:O.isLoading,startIcon:O.isLoading&&(0,I.jsx)(v.Z,{size:20}),endIcon:!O.isLoading&&(0,I.jsx)(w.Z,{}),children:"verify"!==O.button?"Send":"Verify"})]})}),(0,I.jsx)(u.ZP,{xs:12,md:4,item:!0,className:"sideBox",children:(0,I.jsxs)(h.Z,{children:[(0,I.jsx)(l.Z,{variant:"h6",children:"Let's start a conversation."}),(0,I.jsx)(l.Z,{variant:"body1",children:"Team Woodsala is always a Message away! Please let us know for any Query! For us Customer Satisfaction is Top Most Priority & That Commitment is shown by Our Customer Service!!!"}),(0,I.jsxs)(Z.Z,{className:"subheadings",children:[(0,I.jsx)(g.Z,{}),(0,I.jsx)(l.Z,{variant:"h6",children:"Address"})]}),(0,I.jsx)(l.Z,{variant:"body1",children:"82, Hasti Colony, Jhalamand, Jodhpur, Rajasthan, India, 342001"}),(0,I.jsxs)(Z.Z,{className:"subheadings",children:[(0,I.jsx)(b.Z,{}),(0,I.jsx)(l.Z,{variant:"h6",children:"Email"})]}),(0,I.jsx)(l.Z,{variant:"body1",children:"sales@woodsala.com"}),(0,I.jsxs)(Z.Z,{className:"subheadings",children:[(0,I.jsx)(x.Z,{}),(0,I.jsx)(l.Z,{variant:"h6",children:"Have Any Questions?"})]}),(0,I.jsx)(l.Z,{variant:"body1",children:"+91-8587918978 (10:00 AM to 6:00 PM) (Mon to Sat)"})]})})]}),(0,I.jsx)(u.ZP,{container:!0,children:(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,I.jsx)("iframe",{frameBorder:"0",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9125711873676!2d73.03114981472437!3d26.23203018342546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b7695555555%3A0xb91d331a8528cdb8!2sWoodsala!5e0!3m2!1sen!2sin!4v1671699612456!5m2!1sen!2sin",width:"100%",height:500,allowFullScreen:!0,loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})})]})}},748:function(e,t,n){"use strict";var a=n(5318);t.Z=void 0;var r=a(n(5649)),i=n(184),o=(0,r.default)((0,i.jsx)("path",{d:"m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"}),"CallRounded");t.Z=o},4281:function(e,t,n){"use strict";var a=n(5318);t.Z=void 0;var r=a(n(5649)),i=n(184),o=(0,r.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=o},7541:function(e,t,n){"use strict";var a=n(5318);t.Z=void 0;var r=a(n(5649)),i=n(184),o=(0,r.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=o},1686:function(e,t,n){"use strict";var a=n(5318);t.Z=void 0;var r=a(n(5649)),i=n(184),o=(0,r.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=o},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(8610)},133:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var a=n(1217);function r(e){return(0,a.Z)("MuiDivider",e)}var i=(0,n(5878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},6014:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var a=n(1217);function r(e){return(0,a.Z)("MuiListItemIcon",e)}var i=(0,n(5878).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=i},9849:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var a=n(1217);function r(e){return(0,a.Z)("MuiListItemText",e)}var i=(0,n(5878).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},3786:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var a=n(4942),r=n(3366),i=n(7462),o=n(2791),s=n(8182),c=n(4419),u=n(2065),l=n(7630),d=n(1046),p=n(6199),m=n(3701),f=n(162),v=n(2071),h=n(133),Z=n(6014),g=n(9849),b=n(1217);function x(e){return(0,b.Z)("MuiMenuItem",e)}var y=(0,n(5878).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=n(184),w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,l.ZP)(m.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(y.selected),(0,a.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(y.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(y.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,a.Z)(t,"&.".concat(y.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,a.Z)(t,"& + .".concat(h.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,a.Z)(t,"& + .".concat(h.Z.inset),{marginLeft:52}),(0,a.Z)(t,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,a.Z)(t,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,a.Z)(t,"& .".concat(Z.Z.root),{minWidth:36}),t),!r.dense&&(0,a.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,a.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),M=o.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiMenuItem"}),a=n.autoFocus,u=void 0!==a&&a,l=n.component,m=void 0===l?"li":l,h=n.dense,Z=void 0!==h&&h,g=n.divider,b=void 0!==g&&g,y=n.disableGutters,M=void 0!==y&&y,I=n.focusVisibleClassName,O=n.role,S=void 0===O?"menuitem":O,k=n.tabIndex,P=(0,r.Z)(n,w),T=o.useContext(p.Z),_={dense:Z||T.dense||!1,disableGutters:M},L=o.useRef(null);(0,f.Z)((function(){u&&L.current&&L.current.focus()}),[u]);var R,E=(0,i.Z)({},n,{dense:_.dense,divider:b,disableGutters:M}),N=function(e){var t=e.disabled,n=e.dense,a=e.divider,r=e.disableGutters,o=e.selected,s=e.classes,u={root:["root",n&&"dense",t&&"disabled",!r&&"gutters",a&&"divider",o&&"selected"]},l=(0,c.Z)(u,x,s);return(0,i.Z)({},s,l)}(n),F=(0,v.Z)(L,t);return n.disabled||(R=void 0!==k?k:-1),(0,j.jsx)(p.Z.Provider,{value:_,children:(0,j.jsx)(C,(0,i.Z)({ref:F,role:S,tabIndex:R,component:m,focusVisibleClassName:(0,s.Z)(N.focusVisible,I)},P,{ownerState:E,classes:N}))})}))},3767:function(e,t,n){"use strict";var a=n(4942),r=n(3366),i=n(7462),o=n(2791),s=n(1184),c=n(5682),u=n(8519),l=n(2466),d=n(7630),p=n(1046),m=n(184),f=["component","direction","spacing","divider","children"];function v(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,r){return e.push(a),r<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=(0,i.Z)({display:"flex"},(0,s.k9)({theme:n},(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,c.hB)(n),u=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),d=(0,s.P$)({values:t.direction,base:u}),p=(0,s.P$)({values:t.spacing,base:u});r=(0,l.Z)(r,(0,s.k9)({theme:n},p,(function(e,n){return{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((r=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,c.NA)(o,e))};var r})))}return r})),Z=o.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiStack"}),a=(0,u.Z)(n),o=a.component,s=void 0===o?"div":o,c=a.direction,l=void 0===c?"column":c,d=a.spacing,Z=void 0===d?0:d,g=a.divider,b=a.children,x=(0,r.Z)(a,f),y={direction:l,spacing:Z};return(0,m.jsx)(h,(0,i.Z)({as:s,ownerState:y,ref:t},x,{children:g?v(b,g):b}))}));t.Z=Z},8610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var a=n(5902),r=n(4036),i=n(1260),o=n(9201),s=n(3199);var c=function(e,t){return function(){return null}},u=n(9103),l=n(8301),d=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,f=n(162),v=n(7384);var h=function(e,t,n,a,r){return null},Z=n(8278),g=n(9683),b=n(2071),x=n(8221),y={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}}}]);
//# sourceMappingURL=350.1c9bc863.chunk.js.map