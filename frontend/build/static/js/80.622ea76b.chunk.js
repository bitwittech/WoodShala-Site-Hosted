(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[80],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},3080:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(4165),a=t(1413),i=t(5861),s=t(9439),o=t(2791),u=t(1889),c=t(890),f=t(3400),l=t(3239),d=t(501),m=t(7422),p=t(8384),h=t(6711),Z=t(9434),v=t(8986),x=t(184);function y(e){var n=(0,d.lr)(),t=(0,s.Z)(n,1)[0],y=(0,Z.I0)(),g=(0,o.useState)({name:"",email:"",verify:"loading"}),b=(0,s.Z)(g,2),j=b[0],w=b[1],k=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,m.x4)(n).then((function(e){if(200===e.status)return window.location.href="/",y((0,v.br)({open:!0,message:e.data.message,variant:"success"})),y((0,v.QV)({isAuth:!0,username:e.data.name,email:e.data.email,CID:e.data.CID,token:e.data.token})),window.location.href="/";y((0,v.br)({open:!0,message:e.data.message,variant:"error"}))})).catch((function(e){w((0,a.Z)((0,a.Z)({},j),{},{verify:"Not Done"})),y((0,v.br)({open:!0,message:e.response.data.message||"Sorry some technical issue happened !!!",variant:"error"}))}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function C(){return C=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,m.T)(n).then(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.z2)(n.data);case 2:if(!(t=e.sent).data.data){e.next=8;break}return w({name:t.data.data.username,email:t.data.data.email,verify:"done"}),e.abrupt("return",k(t.data.data));case 8:w((0,a.Z)((0,a.Z)({},j),{},{verify:"Not Done"}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){w((0,a.Z)((0,a.Z)({},j),{},{verify:"Not Done"})),y((0,v.br)({open:!0,message:e.response.data.message||"Sorry some technical issue happened !!!",variant:"error"}))}));case 1:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}(0,o.useEffect)((function(){t.get("token")&&function(e){C.apply(this,arguments)}(t.get("token"))}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("title",{children:"Verification"}),(0,x.jsxs)(u.ZP,{container:!0,sx:{width:"50%",display:"flex",textAlign:"center",justifyContent:"center",transform:"translate(50%,50%)"},children:[(0,x.jsx)(u.ZP,{item:!0,xs:12,children:"Not Done"!==j.verify?(0,x.jsx)(c.Z,{variant:"h2",children:"Verifying Your Email"}):(0,x.jsx)(c.Z,{variant:"h2",children:"Opps !!!"})}),(0,x.jsx)(u.ZP,{item:!0,sx:{mt:2},xs:8,children:"Not Done"!==j.verify?(0,x.jsxs)(c.Z,{variant:"body",children:["Hello ",j.name,", thanks for choosing Woodshala.Please wait, our team is verifying your email. After it you will be redirected to home page."]}):(0,x.jsx)(c.Z,{variant:"body",children:"Sorry, verification failed due false token or may be you have already registered."})}),(0,x.jsx)(u.ZP,{item:!0,sx:{mt:3},xs:8,children:"loading"===j.verify?(0,x.jsxs)(f.Z,{children:[" ",(0,x.jsx)(l.Z,{})]}):"done"===j.verify?(0,x.jsx)(f.Z,{children:(0,x.jsx)(p.Z,{color:"primary",sx:{transform:"scale(2)"}})}):(0,x.jsx)(f.Z,{color:"primary",children:(0,x.jsx)(h.Z,{sx:{transform:"scale(2)"},size:"large"})})})]})]})}},6711:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");n.Z=s},8384:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");n.Z=s},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(8610)},1260:function(e,n,t){"use strict";var r=t(8949);n.Z=r.Z},8610:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return s.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return c.Z},ownerDocument:function(){return f.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return d},setRef:function(){return m},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return Z},useControlled:function(){return v.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return g.Z}});var r=t(5902),a=t(4036),i=t(1260),s=t(9201),o=t(3199);var u=function(e,n){return function(){return null}},c=t(9103),f=t(8301),l=t(7602);t(7462);var d=function(e,n){return function(){return null}},m=t(2971).Z,p=t(162),h=t(7384);var Z=function(e,n,t,r,a){return null},v=t(8278),x=t(9683),y=t(2071),g=t(8221),b={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=80.622ea76b.chunk.js.map