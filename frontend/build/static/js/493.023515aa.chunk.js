"use strict";(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[493,631],{6679:function(n,t,r){r(2791);t.Z=r.p+"static/media/defaultProduct.b2c4afc8d023a2ef7598d06e8a5ba757.svg"},8986:function(n,t,r){r.d(t,{Dv:function(){return h},Mo:function(){return f},QV:function(){return c},RV:function(){return l},SO:function(){return d},V$:function(){return u},b_:function(){return i},br:function(){return e},cl:function(){return o},jX:function(){return a},pQ:function(){return s},xj:function(){return p}});var e=function(n){return{type:"NOTIFY",payload:n}},i=function(n){return{type:"LOGBOX",payload:n}},c=function(n){return{type:"AUTH",payload:n}},a=function(n){return{type:"ADDITEM",payload:n}},o=function(n){return{type:"REMOVEITEM",payload:n}},u=function(n){return{type:"INCREMENT",payload:n}},s=function(n){return{type:"DECREMENT",payload:n}},l=function(n){return{type:"PRESETCART",payload:n}},d=function(n){return{type:"THANKS",payload:n}},f=function(n){return{type:"ADDTOLIST",payload:n}},p=function(n){return{type:"REMOVEFROMLIST",payload:n}},h=function(n){return{type:"PRESETLIST",payload:n}}},4310:function(n,t,r){r.r(t),r.d(t,{default:function(){return j}});var e=r(4165),i=r(5861),c=r(9439),a=r(2791),o=r(4554),u=r(890),s=r(1889),l=r(6151),d=r(4270),f=r(9434),p=r(8986),h=r(7422),m=r(7087),x=r(6679),y=r(8120),Z=(r(3845),r.p+"static/media/wishlist.3b9afbfa893849fa8f23.gif"),v=r(184);function j(n){var t=(0,a.useState)([]),r=(0,c.Z)(t,2),j=r[0],g=r[1],b=(0,f.v9)((function(n){return n})),I=b.wishlist,_=b.auth,w=n.history,S=(0,f.I0)();function C(){return(C=(0,i.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(I.items.length>0)){n.next=8;break}return n.next=3,(0,h.Wn)(I.items);case 3:if(t=n.sent,console.log(t),!t){n.next=7;break}return n.abrupt("return",g(t.data));case 7:return n.abrupt("return",g([]));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return(N=(0,i.Z)((0,e.Z)().mark((function n(t){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!_.isAuth){n.next=10;break}return S((0,p.jX)({CID:_.CID,product_id:t.SKU,quantity:1})),S((0,p.xj)(t.SKU)),n.next=5,(0,h._7)({CID:_.CID,product_id:t.SKU,quantity:1});case 5:return n.next=7,(0,h.kA)({CID:_.CID,product_id:t.SKU});case 7:return n.abrupt("return",S((0,p.br)({variant:"success",message:"Hurry, Item moved to cart.",open:!0})));case 10:return S((0,p.jX)({CID:_.CID||"Not Logged In",product_id:t.SKU,quantity:1})),S((0,p.xj)(t.SKU)),n.abrupt("return",S((0,p.br)({variant:"success",message:"Hurry, Item moved to cart.",open:!0})));case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(o.Z,{p:3,children:(0,v.jsxs)("center",{children:[(0,v.jsx)("img",{width:"30%",src:Z,alt:"No More Products !!!"}),(0,v.jsx)(u.Z,{variant:"h4",children:"Oops !!!"}),(0,v.jsx)(u.Z,{variant:"h6",children:"No product in wishlist. "})]})})})}return(0,a.useMemo)((function(){!function(){C.apply(this,arguments)}()}),[I.items]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(d.q,{children:[(0,v.jsx)("title",{children:"Wishlist"}),(0,v.jsx)("meta",{name:"description",content:"Woodsala cart and checkout page."})]}),(0,v.jsx)(s.ZP,{container:!0,className:"Banner",children:(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(u.Z,{variant:"h1",children:"Wishlist"})})}),(0,v.jsx)(s.ZP,{container:!0,className:"wishListContainer",p:3,children:j.length>0&&j.map((function(n,t){return(0,v.jsx)(s.ZP,{item:!0,className:"productCard",xs:window.innerWidth<="600"?12:5.5,sx:{boxShadow:2,maxHeight:"100%",mb:3,padding:"0.5% !important"},md:2.32,children:(0,v.jsxs)(s.ZP,{container:!0,className:"innerProductWrap",children:[n.discount_limit>0&&(0,v.jsx)(s.ZP,{className:"discount",item:!0,xs:12,children:(0,v.jsx)(o.Z,{children:(0,v.jsxs)(u.Z,{variant:"body",sx:{fontWeight:"400"},children:[n.discount_limit,"% Off"]})})}),(0,v.jsx)(s.ZP,{className:"imageLoader",item:!0,xs:12,onClick:function(){return w("/details/".concat(n.SKU,"/").concat(n.product_title,"/").concat(n.category_name))},children:(0,v.jsx)(m.LazyLoadImage,{src:n.featured_image||n.product_image[0]||x.Z,PlaceholderSrc:x.Z,effect:"blur",alt:n.product_title})}),(0,v.jsx)(s.ZP,{item:!0,xs:8.8,onClick:function(){return w("/details/".concat(n.SKU,"/").concat(n.product_title,"/").concat(n.category_name))},children:(0,v.jsx)(o.Z,{className:"productInfo",children:(0,v.jsx)(u.Z,{variant:"h5",sx:{fontWeight:"bolder"},className:"title",children:n.product_title})})}),(0,v.jsx)(s.ZP,{onClick:function(){return w("/details/".concat(n.SKU,"/").concat(n.product_title,"/").concat(n.category_name))},item:!0,xs:12,children:(0,v.jsxs)(o.Z,{className:"productInfo",children:[(0,v.jsx)(u.Z,{sx:{mt:.5,mb:1},className:"title",variant:"body1",children:n.product_description}),(0,v.jsxs)(u.Z,{color:"text.secondary",sx:{fontWeight:"bolder"},variant:"h5",children:[" ",(n.selling_price-n.selling_price/100*n.discount_limit).toLocaleString("us-Rs",{style:"currency",currency:"INR"})]})]})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,p:1,children:(0,v.jsx)(l.Z,{color:"primary",onClick:function(){return function(n){return N.apply(this,arguments)}(n)},startIcon:(0,v.jsx)(y.Z,{}),fullWidth:!0,variant:"outlined",children:"Move To Cart"})})]})},t)}))}),0===j.length&&(0,v.jsx)("center",{children:(0,v.jsx)(T,{})})]})}},8120:function(n,t,r){var e=r(5318);t.Z=void 0;var i=e(r(5649)),c=r(184),a=(0,i.default)((0,c.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");t.Z=a},1260:function(n,t,r){var e=r(8949);t.Z=e.Z},3199:function(n,t,r){var e=r(3981);t.Z=e.Z},9103:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(2791);var i=function(n,t){return e.isValidElement(n)&&-1!==t.indexOf(n.type.muiName)}},8301:function(n,t,r){var e=r(9723);t.Z=e.Z},7602:function(n,t,r){var e=r(7979);t.Z=e.Z},162:function(n,t,r){var e=r(5721);t.Z=e.Z},8949:function(n,t,r){function e(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.reduce((function(n,t){return null==t?n:function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];n.apply(this,e),t.apply(this,e)}}),(function(){}))}r.d(t,{Z:function(){return e}})},3981:function(n,t,r){function e(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function e(){for(var e=this,i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];var o=function(){n.apply(e,c)};clearTimeout(t),t=setTimeout(o,r)}return e.clear=function(){clearTimeout(t)},e}r.d(t,{Z:function(){return e}})},9723:function(n,t,r){function e(n){return n&&n.ownerDocument||document}r.d(t,{Z:function(){return e}})},7979:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(9723);function i(n){return(0,e.Z)(n).defaultView||window}},3845:function(){}}]);
//# sourceMappingURL=493.023515aa.chunk.js.map