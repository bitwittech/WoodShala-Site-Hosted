(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[350],{95318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},22350:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(74165),r=n(15861),i=n(4942),o=n(1413),s=n(29439),c=n(72791),u=n(61889),l=n(20890),d=n(27391),m=n(23786),p=n(71747),f=n(36151),v=n(13239),h=n(53767),Z=n(64554),g=n(37541),b=n(44281),x=n(50748),y=n(54270),j=n(47422),w=n(21686),C=n(59434),k=n(18986),M=n(80184);function P(){var e=(0,C.I0)(),t=(0,c.useState)({isLoading:!1,button:"verify",images:[]}),n=(0,s.Z)(t,2),P=n[0],I=n[1];function S(e){e.target.files?I((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,Object.values(e.target.files)))})):I((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,e.target.value))}))}function _(){return(_=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),console.log(P),r=new FormData,console.log(P.images),P.images.length>0&&P.images.map((function(e){return r.append("images",e)})),r.append("reason",P.reason),r.append("email",P.email),r.append("customer_name",P.customer_name),r.append("mobile_no",P.mobile_no),r.append("message",P.message),"Order"===P.reason&&r.append("order_no",P.order_no),P.check===parseInt(P.otp)){t.next=16;break}e((0,k.br)({open:!0,variant:"error",message:"Received Otp is incorrect?"})),t.next=21;break;case 16:return I((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!0})})),t.next=19,(0,j.uK)(r);case 19:(i=t.sent)&&(I((function(e){return{images:[],isLoading:!1,button:"verify"}})),e((0,k.br)({open:!0,variant:"success",message:i.data.message})));case 21:t.next=25;break;case 23:t.prev=23,t.t0=t.catch(0);case 25:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function O(){return(O=(0,r.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!0})})),(r=new FormData).append("reviewer_name",P.customer_name),r.append("reviewer_email",P.email),t.next=7,(0,j.Ui)(r);case 7:(i=t.sent)?(I((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!1,button:"emailSent",check:i.data.otp})})),e((0,k.br)({open:!0,variant:"success",message:i.data.message}))):(e((0,k.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"})),I((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isLoading:!1})})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(y.q,{children:[(0,M.jsx)("title",{children:"Contact Us"}),(0,M.jsx)("meta",{name:"description",content:"This Page contains all catact details for Woodsala."}),(0,M.jsx)("meta",{name:"keywords",content:"contact us,contact Woodsala,react out woodsala,how to connect with woodsala,search catact woodsala"})]}),(0,M.jsx)(u.ZP,{container:!0,className:"Banner",children:(0,M.jsx)(u.ZP,{item:!0,xs:12,children:(0,M.jsx)(l.Z,{variant:"h1",children:"Contact Us"})})}),(0,M.jsxs)(u.ZP,{container:!0,className:"formContainer",sx:{boxShadow:2},children:[(0,M.jsx)(u.ZP,{item:!0,xs:12,children:(0,M.jsx)(l.Z,{variant:"h5",children:"Leave A Message"})}),(0,M.jsx)(u.ZP,{xs:12,md:7.5,item:!0,children:(0,M.jsxs)("form",{method:"post",encType:"multipart/form-data",onSubmit:"verify"!==P.button?function(e){return _.apply(this,arguments)}:function(e){return O.apply(this,arguments)},className:"contactForm",children:[(0,M.jsx)(d.Z,{id:"outlined-select-currency",select:!0,fullWidth:!0,size:"small",name:"reason",required:!0,label:"Select Purpose",helperText:"Please select your purpose",onChange:S,value:P.reason||"",children:["Order","General","Pre-Sales","Post Sales","Customization","Others"].map((function(e){return(0,M.jsx)(m.Z,{value:e,children:e},e)}))}),"Order"===P.reason&&(0,M.jsx)(d.Z,{fullWidth:!0,size:"small",required:!0,label:"Order Number",type:"text",name:"order_no",onChange:S,value:P.order_no||""}),(0,M.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Name",type:"text",name:"customer_name",onChange:S,value:P.customer_name||""}),(0,M.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Email",type:"email",required:!0,name:"email",onChange:S,value:P.email||""}),(0,M.jsx)(d.Z,{fullWidth:!0,size:"small",label:"Mobile",type:"text",name:"mobile_no",onChange:S,value:P.mobile_no||""}),(0,M.jsx)(p.Z,{minRows:5,maxRows:5,fullWidth:!0,onChange:S,value:P.message||"",type:"text",className:"messageBox",name:"message"}),(0,M.jsx)("label",{htmlFor:"upload",children:"Upload Image If you have any "}),(0,M.jsxs)(f.Z,{sx:{float:"left",width:"150px"},component:"label",id:"upload",variant:"outlined",children:["Upload",(0,M.jsx)("input",{hidden:!0,onChange:S,name:"images",accept:"image/*",multiple:!0,type:"file"})]}),"verify"!==P.button&&(0,M.jsx)(d.Z,{fullWidth:!0,size:"small",required:!0,label:"OTP",type:"number",name:"otp",onChange:S,value:P.otp||""}),(0,M.jsx)(f.Z,{type:"submit",variant:"contained",sx:{width:"fit-Content",margin:"auto"},disabled:P.isLoading,startIcon:P.isLoading&&(0,M.jsx)(v.Z,{size:20}),endIcon:!P.isLoading&&(0,M.jsx)(w.Z,{}),children:"verify"!==P.button?"Send":"Verify"})]})}),(0,M.jsx)(u.ZP,{xs:12,md:4,item:!0,className:"sideBox",children:(0,M.jsxs)(h.Z,{children:[(0,M.jsx)(l.Z,{variant:"h6",children:"Let's start a conversation."}),(0,M.jsx)(l.Z,{variant:"body1",children:"Team Woodsala is always a Message away! Please let us know for any Query! For us Customer Satisfaction is Top Most Priority & That Commitment is shown by Our Customer Service!!!"}),(0,M.jsxs)(Z.Z,{className:"subheadings",children:[(0,M.jsx)(g.Z,{}),(0,M.jsx)(l.Z,{variant:"h6",children:"Address"})]}),(0,M.jsx)(l.Z,{variant:"body1",children:"82, Hasti Colony, Jhalamand, Jodhpur, Rajasthan, India, 342001"}),(0,M.jsxs)(Z.Z,{className:"subheadings",children:[(0,M.jsx)(b.Z,{}),(0,M.jsx)(l.Z,{variant:"h6",children:"Email"})]}),(0,M.jsx)(l.Z,{variant:"body1",children:"sales@woodsala.com"}),(0,M.jsxs)(Z.Z,{className:"subheadings",children:[(0,M.jsx)(x.Z,{}),(0,M.jsx)(l.Z,{variant:"h6",children:"Have Any Questions?"})]}),(0,M.jsx)(l.Z,{variant:"body1",children:"+91-8587918978 (10:00 AM to 6:00 PM) (Mon to Sat)"})]})})]}),(0,M.jsx)(u.ZP,{container:!0,children:(0,M.jsx)(u.ZP,{item:!0,xs:12,children:(0,M.jsx)("iframe",{frameBorder:"0",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9125711873676!2d73.03114981472437!3d26.23203018342546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b7695555555%3A0xb91d331a8528cdb8!2sWoodsala!5e0!3m2!1sen!2sin!4v1671699612456!5m2!1sen!2sin",width:"100%",height:500,allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})})]})}},50748:function(e,t,n){"use strict";var a=n(95318);t.Z=void 0;var r=a(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"}),"CallRounded");t.Z=o},44281:function(e,t,n){"use strict";var a=n(95318);t.Z=void 0;var r=a(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=o},37541:function(e,t,n){"use strict";var a=n(95318);t.Z=void 0;var r=a(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=o},21686:function(e,t,n){"use strict";var a=n(95318);t.Z=void 0;var r=a(n(45649)),i=n(80184),o=(0,r.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=o},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(28610)},90133:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var a=n(21217);function r(e){return(0,a.Z)("MuiDivider",e)}var i=(0,n(75878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},96014:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var a=n(21217);function r(e){return(0,a.Z)("MuiListItemIcon",e)}var i=(0,n(75878).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=i},29849:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var a=n(21217);function r(e){return(0,a.Z)("MuiListItemText",e)}var i=(0,n(75878).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},23786:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(4942),r=n(63366),i=n(87462),o=n(72791),s=n(28182),c=n(94419),u=n(12065),l=n(47630),d=n(61046),m=n(66199),p=n(23701),f=n(40162),v=n(42071),h=n(90133),Z=n(96014),g=n(29849),b=n(21217);function x(e){return(0,b.Z)("MuiMenuItem",e)}var y=(0,n(75878).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=n(80184),w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,l.ZP)(p.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(y.selected),(0,a.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(y.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(y.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,a.Z)(t,"&.".concat(y.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,a.Z)(t,"& + .".concat(h.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,a.Z)(t,"& + .".concat(h.Z.inset),{marginLeft:52}),(0,a.Z)(t,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,a.Z)(t,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,a.Z)(t,"& .".concat(Z.Z.root),{minWidth:36}),t),!r.dense&&(0,a.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,a.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),k=o.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiMenuItem"}),a=n.autoFocus,u=void 0!==a&&a,l=n.component,p=void 0===l?"li":l,h=n.dense,Z=void 0!==h&&h,g=n.divider,b=void 0!==g&&g,y=n.disableGutters,k=void 0!==y&&y,M=n.focusVisibleClassName,P=n.role,I=void 0===P?"menuitem":P,S=n.tabIndex,_=(0,r.Z)(n,w),O=o.useContext(m.Z),L={dense:Z||O.dense||!1,disableGutters:k},F=o.useRef(null);(0,f.Z)((function(){u&&F.current&&F.current.focus()}),[u]);var N,z=(0,i.Z)({},n,{dense:L.dense,divider:b,disableGutters:k}),R=function(e){var t=e.disabled,n=e.dense,a=e.divider,r=e.disableGutters,o=e.selected,s=e.classes,u={root:["root",n&&"dense",t&&"disabled",!r&&"gutters",a&&"divider",o&&"selected"]},l=(0,c.Z)(u,x,s);return(0,i.Z)({},s,l)}(n),T=(0,v.Z)(F,t);return n.disabled||(N=void 0!==S?S:-1),(0,j.jsx)(m.Z.Provider,{value:L,children:(0,j.jsx)(C,(0,i.Z)({ref:T,role:I,tabIndex:N,component:p,focusVisibleClassName:(0,s.Z)(R.focusVisible,M)},_,{ownerState:z,classes:R}))})}))},53767:function(e,t,n){"use strict";var a=n(4942),r=n(63366),i=n(87462),o=n(72791),s=n(51184),c=n(45682),u=n(78519),l=n(82466),d=n(47630),m=n(61046),p=n(80184),f=["component","direction","spacing","divider","children"];function v(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,r){return e.push(a),r<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=(0,i.Z)({display:"flex"},(0,s.k9)({theme:n},(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,c.hB)(n),u=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),d=(0,s.P$)({values:t.direction,base:u}),m=(0,s.P$)({values:t.spacing,base:u});r=(0,l.Z)(r,(0,s.k9)({theme:n},m,(function(e,n){return{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((r=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,c.NA)(o,e))};var r})))}return r})),Z=o.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiStack"}),a=(0,u.Z)(n),o=a.component,s=void 0===o?"div":o,c=a.direction,l=void 0===c?"column":c,d=a.spacing,Z=void 0===d?0:d,g=a.divider,b=a.children,x=(0,r.Z)(a,f),y={direction:l,spacing:Z};return(0,p.jsx)(h,(0,i.Z)({as:s,ownerState:y,ref:t},x,{children:g?v(b,g):b}))}));t.Z=Z},31260:function(e,t,n){"use strict";var a=n(78949);t.Z=a.Z},28610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return p},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var a=n(55902),r=n(14036),i=n(31260),o=n(76189),s=n(83199);var c=function(e,t){return function(){return null}},u=n(19103),l=n(98301),d=n(17602);n(87462);var m=function(e,t){return function(){return null}},p=n(62971).Z,f=n(40162),v=n(67384);var h=function(e,t,n,a,r){return null},Z=n(98278),g=n(89683),b=n(42071),x=n(68221),y={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}}}]);
//# sourceMappingURL=350.5e3c7e3f.chunk.js.map