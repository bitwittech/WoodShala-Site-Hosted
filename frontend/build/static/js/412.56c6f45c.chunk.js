"use strict";(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[412,631],{16679:function(t,n,e){e(72791);n.Z=e.p+"static/media/defaultProduct.b2c4afc8d023a2ef7598d06e8a5ba757.svg"},18986:function(t,n,e){e.d(n,{Dv:function(){return h},Mo:function(){return p},QV:function(){return i},RV:function(){return d},SO:function(){return l},V$:function(){return s},b_:function(){return c},br:function(){return r},cl:function(){return o},jX:function(){return a},pQ:function(){return u},xj:function(){return f}});var r=function(t){return{type:"NOTIFY",payload:t}},c=function(t){return{type:"LOGBOX",payload:t}},i=function(t){return{type:"AUTH",payload:t}},a=function(t){return{type:"ADDITEM",payload:t}},o=function(t){return{type:"REMOVEITEM",payload:t}},s=function(t){return{type:"INCREMENT",payload:t}},u=function(t){return{type:"DECREMENT",payload:t}},d=function(t){return{type:"PRESETCART",payload:t}},l=function(t){return{type:"THANKS",payload:t}},p=function(t){return{type:"ADDTOLIST",payload:t}},f=function(t){return{type:"REMOVEFROMLIST",payload:t}},h=function(t){return{type:"PRESETLIST",payload:t}}},64310:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r=e(74165),c=e(15861),i=e(29439),a=e(72791),o=e(64554),s=e(20890),u=e(61889),d=e(36151),l=e(54270),p=e(59434),f=e(18986),h=e(20980),x=e(87087),m=e(16679),y=e(38120),j=(e(23845),e.p+"static/media/wishlist.3b9afbfa893849fa8f23.gif"),Z=e(80184);function g(t){var n=(0,a.useState)([]),e=(0,i.Z)(n,2),g=e[0],v=e[1],b=(0,p.v9)((function(t){return t})),I=b.wishlist,_=b.auth,S=t.history,C=(0,p.I0)();function N(){return(N=(0,c.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(I.items.length>0)){t.next=8;break}return t.next=3,(0,h.Wn)(I.items);case 3:if(n=t.sent,console.log(n),!n){t.next=7;break}return t.abrupt("return",v(n.data));case 7:return t.abrupt("return",v([]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=(0,c.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_.isAuth){t.next=10;break}return C((0,f.jX)({CID:_.CID,product_id:n.SKU,quantity:1})),C((0,f.xj)(n.SKU)),t.next=5,(0,h._7)({CID:_.CID,product_id:n.SKU,quantity:1});case 5:return t.next=7,(0,h.kA)({CID:_.CID,product_id:n.SKU});case 7:return t.abrupt("return",C((0,f.br)({variant:"success",message:"Hurry, Item moved to cart.",open:!0})));case 10:return C((0,f.jX)({CID:_.CID||"Not Logged In",product_id:n.SKU,quantity:1})),C((0,f.xj)(n.SKU)),t.abrupt("return",C((0,f.br)({variant:"success",message:"Hurry, Item moved to cart.",open:!0})));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(o.Z,{p:3,children:(0,Z.jsxs)("center",{children:[(0,Z.jsx)("img",{width:"30%",src:j,alt:"No More Products !!!"}),(0,Z.jsx)(s.Z,{variant:"h4",children:"Oops !!!"}),(0,Z.jsx)(s.Z,{variant:"h6",children:"No product in wishlist. "})]})})})}return(0,a.useMemo)((function(){!function(){N.apply(this,arguments)}()}),[I.items]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(l.q,{children:[(0,Z.jsx)("title",{children:"Wishlist"}),(0,Z.jsx)("meta",{name:"description",content:"Woodsala cart and checkout page."})]}),(0,Z.jsx)(u.ZP,{container:!0,className:"Banner",children:(0,Z.jsx)(u.ZP,{item:!0,xs:12,children:(0,Z.jsx)(s.Z,{variant:"h1",children:"Wishlist"})})}),(0,Z.jsx)(u.ZP,{container:!0,className:"wishListContainer",p:3,children:g.length>0&&g.map((function(t,n){return(0,Z.jsx)(u.ZP,{item:!0,className:"productCard",xs:window.innerWidth<="600"?12:5.5,sx:{boxShadow:2,maxHeight:"100%",mb:3,padding:"0.5% !important"},md:2.32,children:(0,Z.jsxs)(u.ZP,{container:!0,className:"innerProductWrap",children:[t.discount_limit>0&&(0,Z.jsx)(u.ZP,{className:"discount",item:!0,xs:12,children:(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(s.Z,{variant:"body",sx:{fontWeight:"400"},children:[t.discount_limit,"% Off"]})})}),(0,Z.jsx)(u.ZP,{className:"imageLoader",item:!0,xs:12,onClick:function(){return S("/details/".concat(t.SKU,"/").concat(t.product_title,"/").concat(t.category_name))},children:(0,Z.jsx)(x.LazyLoadImage,{src:t.featured_image||t.product_image[0]||m.Z,PlaceholderSrc:m.Z,effect:"blur",alt:t.product_title})}),(0,Z.jsx)(u.ZP,{item:!0,xs:8.8,onClick:function(){return S("/details/".concat(t.SKU,"/").concat(t.product_title,"/").concat(t.category_name))},children:(0,Z.jsx)(o.Z,{className:"productInfo",children:(0,Z.jsx)(s.Z,{variant:"h5",sx:{fontWeight:"bolder"},className:"title",children:t.product_title})})}),(0,Z.jsx)(u.ZP,{onClick:function(){return S("/details/".concat(t.SKU,"/").concat(t.product_title,"/").concat(t.category_name))},item:!0,xs:12,children:(0,Z.jsxs)(o.Z,{className:"productInfo",children:[(0,Z.jsx)(s.Z,{sx:{mt:.5,mb:1},className:"title",variant:"body1",children:t.product_description}),(0,Z.jsxs)(s.Z,{color:"text.secondary",sx:{fontWeight:"bolder"},variant:"h5",children:[" ",(t.selling_price-t.selling_price/100*t.discount_limit).toLocaleString("us-Rs",{style:"currency",currency:"INR"})]})]})}),(0,Z.jsx)(u.ZP,{item:!0,xs:12,p:1,children:(0,Z.jsx)(d.Z,{color:"primary",onClick:function(){return function(t){return w.apply(this,arguments)}(t)},startIcon:(0,Z.jsx)(y.Z,{}),fullWidth:!0,variant:"outlined",children:"Move To Cart"})})]})},n)}))}),0===g.length&&(0,Z.jsx)("center",{children:(0,Z.jsx)(P,{})})]})}},38120:function(t,n,e){var r=e(95318);n.Z=void 0;var c=r(e(45649)),i=e(80184),a=(0,c.default)((0,i.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");n.Z=a},23845:function(){}}]);
//# sourceMappingURL=412.56c6f45c.chunk.js.map