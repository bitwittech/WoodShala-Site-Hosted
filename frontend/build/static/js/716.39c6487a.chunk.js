"use strict";(self.webpackChunkwoodsala_site=self.webpackChunkwoodsala_site||[]).push([[716],{4980:function(e,t,n){n(2791);t.Z=n.p+"static/media/avatar.81c59ed1ecf16f50c3785bba4dd51477.svg"},9921:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var r=n(1413),i=n(4165),a=n(5861),s=n(9439),o=n(2791),c=n(501),l=n(6871),d=n(6766),u=n(6679),m=n(4942),x=n(3433),h=n(5776),p=n(1889),g=n(890),v=n(4554),Z=n(8316),f=n(6151),j=n(792),_=n(2739),y=n(627),b=n(3400),w=n(7391),S=n(1747),k=n(3239),C=n(151),I=n(3875),P=n(6711),N=n(4980),W=n(7422),U=n(9434),L=n(8986),z=n(7831),D=n(184),R={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},T={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},K={display:"flex",minWidth:0,overflow:"hidden"},A={display:"block",width:"auto",height:"100%"};var q=function(e){var t=e.state,n=e.setData,i=(0,z.uI)({accept:{"image/*":[],"video/*":[]},onDrop:function(e){n((function(t){return(0,r.Z)((0,r.Z)({},t),{},{data:(0,r.Z)((0,r.Z)({},t.data),{},{review_images:[].concat((0,x.Z)(t.data.review_images),(0,x.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))))})})}))}}),a=i.getRootProps,s=i.getInputProps,c=t.data.review_images.map((function(e){return(0,D.jsx)("div",{style:T,children:(0,D.jsx)("div",{style:K,children:(0,D.jsx)("img",{src:e.preview,style:A,onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return(0,o.useEffect)((function(){return function(){return t.data.review_images.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[]),(0,D.jsxs)("section",{className:"dropDownContainer",children:[(0,D.jsxs)("div",(0,r.Z)((0,r.Z)({},a({className:"dropzone"})),{},{children:[(0,D.jsx)("input",(0,r.Z)({},s())),(0,D.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]})),(0,D.jsx)("aside",{style:R,children:c})]})},F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"content-fit",bgcolor:"background.paper",boxShadow:24,p:2,outline:"none"};function O(e){var t=e.reviewState,n=e.setReviewState,c=e.product_id,l=(0,U.I0)(),d=(0,U.v9)((function(e){return e})).auth,u={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},x=o.useState(-1),h=(0,s.Z)(x,2),N=h[0],z=h[1],R=(0,o.useState)({isLoading:!1,data:{CID:d.CID||"Not Logged In",rating:4,review:null,product_id:c,review_title:"",yourTube_url:"",reviewer_name:"",reviewer_email:"",review_images:[]},button:"verify"}),T=(0,s.Z)(R,2),K=T[0],A=T[1];function O(e){A((function(t){return(0,r.Z)((0,r.Z)({},t),{},{data:(0,r.Z)((0,r.Z)({},t.data),{},(0,m.Z)({},e.target.name,e.target.value))})}))}function B(){return(B=(0,a.Z)((0,i.Z)().mark((function e(t){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isLoading:!0})})),console.log(K),(a=new FormData).append("CID",K.data.CID),a.append("rating",K.data.rating),a.append("review",K.data.review),a.append("product_id",K.data.product_id),a.append("review_title",K.data.review_title),a.append("yourTube_url",K.data.yourTube_url),a.append("reviewer_name",K.data.reviewer_name),a.append("reviewer_email",K.data.reviewer_email),a.append("admin_review",""),K.data.review_images.length>0?K.data.review_images.map((function(e){return a.append("review_images",e)})):K.data.review_images.map((function(e){return a.append("review_images",[])})),e.next=16,(0,W.N_)(a);case 16:(s=e.sent)?(n((function(e){return{open:!1,refresh:e.refresh+1}})),l((0,L.br)({open:!0,variant:"success",message:s.data.message})),M()):(l((0,L.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"})),A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isLoading:!1})})));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,a.Z)((0,i.Z)().mark((function e(t){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isLoading:!0})})),(n=new FormData).append("reviewer_name",K.data.reviewer_name),n.append("reviewer_email",K.data.reviewer_email),e.next=7,(0,W.Ui)(n);case 7:(a=e.sent)?(A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isLoading:!1,button:"emailSent",check:a.data.otp})})),l((0,L.br)({open:!0,variant:"success",message:a.data.message}))):(l((0,L.br)({open:!0,variant:"error",message:"Something Went Wrong !!!"})),A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isLoading:!1})})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){A({isLoading:!1,data:{CID:d.CID||"Not Logged In",rating:4,review:null,product_id:c,review_title:"",yourTube_url:"",reviewer_name:"",reviewer_email:"",review_images:[]},button:"verify"}),n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!1})}))}return(0,D.jsx)(j.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t.open,onClose:M,closeAfterTransition:!0,BackdropComponent:_.Z,BackdropProps:{timeout:500},children:(0,D.jsx)(y.Z,{in:t.open,children:(0,D.jsx)(v.Z,{sx:F,children:(0,D.jsxs)(p.ZP,{container:!0,component:"form",sx:{gap:"5px",justifyContent:"center"},method:"post",onSubmit:"verify"===K.button?function(e){return E.apply(this,arguments)}:function(e){return B.apply(this,arguments)},children:[(0,D.jsxs)(p.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between",alignItem:"center"},children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},component:"span",variant:"h5",children:"Add a review for"}),(0,D.jsx)(b.Z,{size:"large",color:"primary",onClick:M,children:(0,D.jsx)(P.Z,{})})]}),(0,D.jsxs)(p.ZP,{item:!0,xs:12,sx:{padding:"1%"},md:5.8,children:[(0,D.jsx)(g.Z,{variant:"h5",children:"Image Section"}),(0,D.jsx)("br",{}),(0,D.jsx)(q,{state:K,setData:A})]}),(0,D.jsxs)(p.ZP,{item:!0,xs:12,md:5.8,sx:{padding:"1%"},children:[(0,D.jsxs)(p.ZP,{item:!0,xs:12,sx:{padding:"1%"},children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"1) How would rate this product?"}),(0,D.jsxs)(v.Z,{className:"rating",children:[(0,D.jsx)(Z.Z,{name:"hover-feedback",value:K.data.rating||4,precision:.5,getLabelText:function(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(u[e])},onChange:function(e,t){A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{data:(0,r.Z)((0,r.Z)({},e.data),{},{rating:t})})}))},onChangeActive:function(e,t){z(t)},emptyIcon:(0,D.jsx)(C.Z,{style:{opacity:.55},fontSize:"inherit"})}),null!==K.data.rating&&(0,D.jsx)(v.Z,{sx:{ml:2},children:u[-1!==N?N:K.data.rating]})]})]}),(0,D.jsxs)(p.ZP,{xs:12,item:!0,children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"2) Please enter the review title."}),(0,D.jsx)(w.Z,{sx:{p:1},fullWidth:!0,type:"text",size:"small",variant:"outlined",value:K.data.review_title,name:"review_title",onChange:O})]}),(0,D.jsxs)(p.ZP,{xs:12,item:!0,children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"3) Any you tube review URLs?"}),(0,D.jsx)(w.Z,{sx:{p:1},fullWidth:!0,type:"text",size:"small",variant:"outlined",value:K.data.yourTube_url,name:"yourTube_url",onChange:O})]}),(0,D.jsxs)(p.ZP,{xs:12,item:!0,children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"4) Write your review below."}),(0,D.jsx)(v.Z,{p:1,children:(0,D.jsx)(S.Z,{minRows:5,maxRows:5,required:!0,name:"review",onChange:O,className:"customTextArea",placeholder:"Write something beautiful..."})})]}),(0,D.jsxs)(p.ZP,{xs:12,item:!0,children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"5) Name you like to show on review (ex : Rahul)?"}),(0,D.jsx)(w.Z,{sx:{p:1},fullWidth:!0,type:"text",size:"small",variant:"outlined",value:K.data.reviewer_name,name:"reviewer_name",onChange:O})]}),(0,D.jsx)(p.ZP,{xs:12,item:!0,children:"emailSent"===K.button?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"6) Please enter the OTP for verification."}),(0,D.jsx)(w.Z,{sx:{p:1},fullWidth:!0,required:!0,type:"number",size:"small",variant:"outlined",value:K.data.otp,name:"otp",onChange:O}),(0,D.jsx)(g.Z,{component:f.Z,variant:"caption",onClick:function(){A((function(e){return(0,r.Z)((0,r.Z)({},e),{},{button:"verify",check:0})}))},children:"Want to edit email Address?"})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{sx:{fontWeight:"400"},variant:"body1",children:"6) Enter your email address please."}),(0,D.jsx)(w.Z,{sx:{p:1},fullWidth:!0,required:!0,type:"email",size:"small",variant:"outlined",value:K.data.reviewer_email,name:"reviewer_email",onChange:O})]})})]}),(0,D.jsx)(p.ZP,{item:!0,xs:12,p:1,children:(0,D.jsx)(f.Z,{disabled:K.isLoading,type:"submit",startIcon:K.isLoading?(0,D.jsx)(k.Z,{size:15}):(0,D.jsx)(I.Z,{}),sx:{float:"right"},variant:"outlined",children:"verify"===K.button?"Verify":"Submit"})})]})})})})}var B=function(e){var t=(0,o.useState)([]),n=(0,s.Z)(t,2),r=n[0],i=n[1],a=(0,o.useState)({open:!1,refresh:0}),c=(0,s.Z)(a,2),l=c[0],d=c[1];return(0,o.useMemo)((function(){(0,W.Re)(e.product_id).then((function(e){i((0,x.Z)(e.data))}))}),[l.refresh,e.product_id]),(0,D.jsxs)(p.ZP,{container:!0,className:"moreInfo",children:[(0,D.jsx)(O,{reviewState:l,setReviewState:d,product_id:e.product_id}),(0,D.jsx)(p.ZP,{item:!0,xs:12,children:(0,D.jsx)(g.Z,{sx:{fontWeight:500},variant:"h5",children:"Customer Reviews"})}),(0,D.jsx)(p.ZP,{item:!0,xs:12,className:"reviewContainer",children:(0,D.jsx)(p.ZP,{container:!0,sx:{gap:"20px"},children:r.length>0?r.map((function(e){return(0,D.jsx)(p.ZP,{item:!0,xs:12,children:(0,D.jsxs)(p.ZP,{container:!0,className:"review",children:[(0,D.jsxs)(p.ZP,{xs:12,className:"cusDetails",children:[(0,D.jsx)("img",{src:e.customer.length>0?e.customer[0].profile_image:N.Z,alt:"profile"}),(0,D.jsx)(g.Z,{className:"review_name",variant:"h5",children:e.customer.length>0?e.reviewer_name:"Anonymous User"}),(0,D.jsx)(v.Z,{children:(0,D.jsxs)(g.Z,{variant:"button",children:["Posted On ",e.date.split("T")[0]]})})]}),(0,D.jsx)(p.ZP,{xs:12,pt:1,children:(0,D.jsx)(Z.Z,{value:e.rating,precision:.5,readOnly:!0,size:"large",emptyIcon:(0,D.jsx)(C.Z,{style:{opacity:.55},fontSize:"inherit"})})}),(0,D.jsx)(p.ZP,{xs:12,children:(0,D.jsx)(g.Z,{variant:"h5",children:e.review_title||"Review Question"})}),(0,D.jsxs)(p.ZP,{xs:12,children:[(0,D.jsx)(g.Z,{variant:""}),(0,D.jsx)(v.Z,{className:"reply",children:(0,D.jsx)(g.Z,{variant:"body1",children:e.review})}),e.admin_reply.length>0&&e.admin_reply.map((function(e){return e.message&&(0,D.jsxs)(v.Z,{className:"reply",children:[(0,D.jsx)(g.Z,{variant:"body1",children:e.message}),(0,D.jsxs)(g.Z,{className:!0,variant:"caption",children:["Posted On : ",e.time]})]})}))]}),e.review_images.length>0&&(0,D.jsxs)(p.ZP,{mt:1,item:!0,xs:12,children:[(0,D.jsx)(g.Z,{variant:"h5",children:"Review Images"}),(0,D.jsx)(p.ZP,{container:!0,className:"reviewedImagesContainer",children:e.review_images.map((function(e,t){return(0,D.jsx)(p.ZP,{className:"reviewedImages",item:!0,xs:2.5,children:(0,D.jsx)("img",{src:e,alt:"review Images ".concat(t)})})}))})]}),e.review_videos.length>0&&(0,D.jsxs)(p.ZP,{mt:1,item:!0,xs:12,children:[(0,D.jsx)(g.Z,{variant:"h5",children:"Review Videos"}),(0,D.jsx)(p.ZP,{container:!0,className:"reviewedImagesContainer",children:e.review_videos.map((function(e,t){return(0,D.jsx)(p.ZP,{className:"reviewedImages",item:!0,xs:2.5,children:(0,D.jsx)("video",{src:e,width:"100",height:"100",controls:"controls",autoplay:"true"})})}))})]})]})})})):(0,D.jsx)(g.Z,{variant:"h6",children:"Be first to write a review for it..."})})}),(0,D.jsx)(p.ZP,{item:!0,sx:{padding:"1%"},xs:12,children:(0,D.jsx)(f.Z,{startIcon:(0,D.jsx)(h.Z,{}),size:"large",onClick:function(){return d((function(e){return{open:!0}}))},variant:"contained",children:"Write Review"})})]})},E=n.p+"static/media/amazon.4eec72065c42e9d08b65.png",M=n.p+"static/media/flipkart.d3a0ee1531b6e8a7476f.png",Q=n.p+"static/media/JioMart.c8b05a2cfded6caf28a5.png",H=n(1163),V=n(7237),Y=n(3517),G=n(4721),X=n(3767),J=n(3466),$=n(533),ee=n(7621),te=n(6647),ne=n(2169),re=n(9504),ie=n(4270);function ae(e){var t=(0,U.v9)((function(e){return e})),n=(0,U.I0)(),m=(0,o.useState)(0),x=(0,s.Z)(m,2),h=x[0],j=x[1],_=(0,o.useState)(2),y=(0,s.Z)(_,2),S=y[0],C=y[1],I=(0,o.useState)([]),P=(0,s.Z)(I,2),N=P[0],z=P[1],R=(0,l.UO)(),T=R.SKU,K=R.title,A=R.category,q=(0,o.useState)(null),F=(0,s.Z)(q,2),O=F[0],ae=F[1],le=(0,o.useState)(null),de=(0,s.Z)(le,2),ue=de[0],me=de[1],xe=(0,o.useState)([]),he=(0,s.Z)(xe,2),pe=he[0],ge=he[1];function ve(){return ve=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.KL)(T);case 3:return r=e.sent,console.log(r),ae(r.data.product),me(r.data.reviews),z(r.data.product.ACIN),e.next=10,(0,W.fk)({product_title:K,category_name:A||r.data.data.category_name});case 10:a=e.sent,ge(a.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),n((0,L.br)({variant:"error",message:"Something went wrong !!!",open:!0}));case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))),ve.apply(this,arguments)}(0,o.useEffect)((function(){ae(null),ge([]),function(e){ve.apply(this,arguments)}()}),[T,K,A]);function Ze(){return(Ze=(0,a.Z)((0,i.Z)().mark((function e(r){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.auth.isAuth){e.next=12;break}return e.next=3,(0,W.W7)({CID:t.auth.CID,product_id:r.SKU,quantity:1});case 3:if(!(a=e.sent)){e.next=9;break}return n((0,L.Mo)({CID:t.auth.CID||"Not Logged In",product_id:r.SKU,quantity:1})),e.abrupt("return",n((0,L.br)({variant:"success",message:a.data.message,open:!0})));case 9:return e.abrupt("return",n((0,L.br)({variant:"error",message:"Something Went Wrong !!!",open:!0})));case 10:e.next=14;break;case 12:return n((0,L.Mo)({CID:t.auth.CID||"Not Logged In",product_id:r.SKU,quantity:1})),e.abrupt("return",n((0,L.br)({variant:"success",message:"Item added to the wishlist !!!",open:!0})));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=(0,a.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.auth.isAuth){e.next=5;break}return e.next=3,(0,W.kA)({CID:t.auth.CID,product_id:r.SKU}).then((function(e){return n((0,L.xj)(r.SKU)),n((0,L.br)({variant:"warning",message:e.data.message,open:!0}))})).catch((function(e){return n((0,L.br)({variant:"error",message:"Something Went Wrong !!!",open:!0}))}));case 3:e.next=7;break;case 5:return n((0,L.xj)(r.SKU)),e.abrupt("return",n((0,L.br)({variant:"warning",message:"Item removed from wishlist !!!",open:!0})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.auth.isAuth){e.next=5;break}return e.next=3,(0,W._7)({CID:t.auth.CID,product_id:O.SKU,quantity:O.qty||1}).then((function(e){return n((0,L.cl)(O.SKU)),n((0,L.jX)({product_id:O.SKU,quantity:O.qty||1,CID:t.auth.CID})),n((0,L.br)({variant:"success",message:e.data.message,open:!0}))})).catch((function(e){return n((0,L.br)({variant:"error",message:"Something Went Wrong !!!",open:!0}))}));case 3:e.next=8;break;case 5:return n((0,L.cl)(O.SKU)),n((0,L.jX)({product_id:O.SKU,quantity:O.qty||1,CID:"Not Logged In"})),e.abrupt("return",n((0,L.br)({variant:"success",message:"Item added to the cart !!!",open:!0})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=(0,o.useState)(!1),ye=(0,s.Z)(_e,2),be=ye[0],we=ye[1];function Se(){var e=document.body.scrollTop||document.documentElement.scrollTop;we(e>=350)}return(0,o.useMemo)((function(){return window.addEventListener("scroll",Se),function(){return window.removeEventListener("scroll",Se)}}),[window.scrollY]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(ie.q,{children:[(0,D.jsx)("title",{children:"Product || ".concat(K)}),(0,D.jsx)("meta",{name:"description",content:"This page contains product details. And all the information about the particular product"})]}),O?(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(p.ZP,{container:!0,className:"mainSec",children:[(0,D.jsx)(p.ZP,{item:!0,className:"imageSec",xs:12,md:6,children:(0,D.jsxs)(p.ZP,{container:!0,children:[(0,D.jsx)(p.ZP,{item:!0,xs:8,sx:{margin:"auto"},children:(0,D.jsx)("img",{className:"showImage",src:O.product_image[h]||u.Z,alt:"image2"})}),(0,D.jsx)(p.ZP,{item:!0,xs:12,children:(0,D.jsx)(p.ZP,{container:!0,className:"preview",spacing:2,children:O.product_image.length>0&&O.product_image.map((function(e,t){return(0,D.jsx)(p.ZP,{item:!0,xs:2,onClick:function(){j(t)},children:(0,D.jsx)("img",{src:e,className:"showImage",alt:"images"})},t)}))})})]})}),(0,D.jsx)(p.ZP,{item:!0,xs:12,className:"contentSec",md:6,children:(0,D.jsxs)(p.ZP,{container:!0,children:[(0,D.jsxs)(p.ZP,{item:!0,xs:12,children:[(0,D.jsxs)(Y.Z,{className:"bradCrumbs","aria-label":"breadcrumb",children:[(0,D.jsx)(c.rU,{color:"primary",to:"/",children:"Home"}),(0,D.jsx)(c.rU,{color:"primary",to:"/collection",children:"Collection"}),(0,D.jsx)(c.rU,{color:"primary",to:"/product",children:"Product"}),O.category_name&&(0,D.jsx)(g.Z,{color:"text.primary",children:O.category_name}),"None"!==O.sub_category_name&&O.sub_category_name&&(0,D.jsx)(g.Z,{color:"text.primary",children:O.sub_category_name})]}),(0,D.jsx)(g.Z,{sx:{fontWeight:350},variant:"h4",children:O.product_title}),(0,D.jsx)(g.Z,{variant:"h5",children:O.SKU}),(0,D.jsx)(v.Z,{className:"ratting",children:(0,D.jsx)(Z.Z,{readOnly:!0,name:"simple-controlled",value:S,onChange:function(e,t){C(t)}})}),(0,D.jsxs)(v.Z,{className:"priceSec",children:[0!==O.discount_limit&&0!==O.categories.discount_limit&&(0,D.jsx)(g.Z,{variant:"h6",children:(0,D.jsx)("strike",{children:O.selling_price?O.selling_price.toLocaleString("us-Rs",{style:"currency",currency:"INR"}):(0).toLocaleString("us-Rs",{style:"currency",currency:"INR"})})}),(0,D.jsx)(g.Z,{variant:"h5",sx:{fontWeight:"bolder"},children:(0,D.jsx)(se,{item:O})})]})]}),(0,D.jsxs)(p.ZP,{className:"pd",item:!0,xs:12,children:[(0,D.jsx)(g.Z,{sx:{fontWeight:400},variant:"h6",children:"Specifications"}),(0,D.jsx)(G.Z,{}),(0,D.jsxs)(X.Z,{sx:{paddingTop:"2%"},children:[(0,D.jsxs)(g.Z,{variant:"body1",children:["Size (Inch)",(0,D.jsxs)(g.Z,{sx:{float:"right"},variant:"body1",children:[O.length_main," L x ",O.height," H x ",O.breadth," ","B"]})]}),(0,D.jsxs)(g.Z,{variant:"body1",children:["Material",(0,D.jsx)(g.Z,{sx:{float:"right"},variant:"body1",children:O.primary_material.join()})]}),(0,D.jsxs)(g.Z,{variant:"body1",children:["Polish",(0,D.jsx)(g.Z,{sx:{float:"right"},variant:"body1",children:O.polish.join()})]}),(0,D.jsxs)(g.Z,{variant:"body1",children:["Quantity",(0,D.jsxs)(g.Z,{sx:{float:"right"},variant:"body1",children:[O.quantity," ",O.unit]})]}),(0,D.jsxs)(g.Z,{variant:"body1",children:["Shipped By",(0,D.jsxs)(g.Z,{sx:{float:"right"},variant:"body1",children:[O.manufacturing_time+O.polish_time," Days"]})]})]}),O.selling_points.length>0&&O.selling_points&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{mt:1,sx:{fontWeight:400},variant:"h6",children:"About This Item"}),(0,D.jsx)(G.Z,{}),(0,D.jsx)(X.Z,{sx:{paddingTop:"2%",paddingLeft:"1%"},children:O.selling_points.map((function(e,t){return(0,D.jsx)(g.Z,{component:"li",sx:{fontWeight:400},variant:"body2",children:e},t)}))})]}),(0,D.jsx)(oe,{ACIN:N,SKU:T}),(0,D.jsxs)(v.Z,{className:"cartButtons",children:[(0,D.jsx)(w.Z,{size:"small",fullWidth:!0,sx:{width:"20%"},id:"standard-multiline-static",label:"Quantity",type:"number",variant:"outlined",value:O.qty||1,onChange:function(e){return ae((0,r.Z)((0,r.Z)({},O),{},{qty:e.target.value}))},InputProps:{startAdornment:(0,D.jsx)(J.Z,{position:"start",children:"QTY"})}}),(0,D.jsx)(f.Z,{fullWidth:!0,size:"large",variant:"outlined",onClick:function(){return je(O)},children:"Add To Cart"}),(0,D.jsx)(f.Z,{fullWidth:!0,size:"large",variant:"contained",onClick:function(){je(O),window.location.href="/cart"},children:"Buy Now"})]}),(O.amazon_url||""!==O.amazon_url||O.flipkart_url||""!==O.flipkart_url||O.jiomart_url||""!==O.jiomart_url)&&(0,D.jsxs)(D.Fragment,{children:[" ",(0,D.jsx)(g.Z,{sx:{mt:2,fontWeight:400},variant:"h6",children:"Also Shop From"}),(0,D.jsx)(G.Z,{}),(0,D.jsxs)(X.Z,{className:"shopFrom",children:[(O.amazon_url||""!==O.amazon_url)&&(0,D.jsx)($.Z,{href:O.amazon_url,target:"_blank",rel:"add",children:(0,D.jsx)("img",{className:"vendorIcon",src:E,alt:"amazon_icon"})}),(O.flipkart_url||""!==O.flipkart_url)&&(0,D.jsxs)($.Z,{href:O.flipkart_url,target:"_blank",rel:"add",children:[" ",(0,D.jsx)("img",{className:"vendorIcon",src:M,alt:"flipkart_icon"})]}),"Please",(O.jiomart_url||""!==O.jiomart_url)&&(0,D.jsxs)($.Z,{href:O.jiomart_url,target:"_blank",rel:"add",children:[" ",(0,D.jsx)("img",{className:"vendorIcon",src:Q,alt:"jio_icon"})]})]})]})]})]})})]})}):(0,D.jsx)(v.Z,{sx:{display:"block",margin:"auto",width:"max-content"},children:(0,D.jsx)(k.Z,{})}),(0,D.jsxs)(p.ZP,{container:!0,className:"moreInfo",children:[(0,D.jsx)(p.ZP,{item:!0,xs:12,children:(0,D.jsx)(g.Z,{sx:{fontWeight:500},variant:"h5",children:"Related Products"})}),(0,D.jsx)(p.ZP,{item:!0,xs:12,mt:1,children:(0,D.jsx)(d.default,{dotListClass:"custom-dot-list-style",keyBoardControl:!0,autoPlaySpeed:1e3,ssr:!0,className:"detailsCarousel",responsive:{midDesktop:{breakpoint:{max:3e3,min:1900},items:7},minDesktop:{breakpoint:{max:1900,min:1e3},items:5},tablet:{breakpoint:{max:800,min:500},items:3},mobile:{breakpoint:{max:400,min:0},items:1}},children:pe.map((function(e,t){return e.SKU!==O.SKU&&(0,D.jsx)(ee.Z,{component:c.rU,to:"/details/".concat(e.SKU,"/").concat(e.product_title,"/").concat(e.category_name),className:"card",sx:{boxShadow:2},children:(0,D.jsxs)(te.Z,{children:[(0,D.jsx)(ne.Z,{className:"cardMedia",component:"img",height:"200",image:e.product_image[0]||u.Z,alt:"Product_image"}),(0,D.jsxs)(re.Z,{children:[(0,D.jsx)(g.Z,{className:"productTitle",variant:"h6",component:"div",children:e.product_title}),(0,D.jsx)(g.Z,{sx:{mt:1},className:"productTitle",variant:"body2",component:"div",children:e.product_description}),(0,D.jsx)(g.Z,{variant:"h6",sx:{fontWeight:"bold"},color:"text.secondary",children:e.selling_price&&(e.selling_price-e.selling_price/100*e.discount_limit).toLocaleString("us-Rs",{style:"currency",currency:"INR"})})]})]})},t)}))})})]}),(0,D.jsx)(B,{product_id:T}),O&&(0,D.jsxs)(v.Z,{className:"stickCart",sx:{bottom:be?"0% !important":"-20% !important"},children:[(0,D.jsx)(v.Z,{sx:{width:"50px"},children:(0,D.jsx)("img",{style:{width:"100%"},alt:"product_image",src:O.product_image[0]||u.Z})}),(0,D.jsx)(w.Z,{size:"small",sx:{flexBasis:"1"},id:"standard-multiline-static",label:"Quantity",type:"number",variant:"outlined",value:O.qty||1,onChange:function(e){return ae((0,r.Z)((0,r.Z)({},O),{},{qty:e.target.value||1}))},InputProps:{startAdornment:(0,D.jsx)(J.Z,{position:"start",children:"QTY"})}}),(0,D.jsx)(f.Z,{size:"small",variant:"contained",onClick:function(){return je(O)},children:"Add To Cart"}),t.wishlist.items.filter((function(e){return e.product_id===O.SKU})).length>0?(0,D.jsx)(b.Z,{color:"primary",onClick:function(){return function(e){return fe.apply(this,arguments)}(O)},children:(0,D.jsx)(V.Z,{sx:{fontSize:25}})}):(0,D.jsx)(b.Z,{color:"primary",onClick:function(){return function(e){return Ze.apply(this,arguments)}(O)},children:(0,D.jsx)(H.Z,{sx:{fontSize:25}})})]}),ue&&(0,D.jsx)(ce,{review:ue})]})}function se(e){var t=e.item,n=(0,o.useState)(0),r=(0,s.Z)(n,2),i=r[0],a=r[1];return(0,o.useEffect)((function(){!function(){if(t.categories.length>0)t.categories[0].discount_limit&&t.categories[0].discount_limit>0&&t.categories[0].discount_limit<t.discount_limit?a(t.selling_price-t.selling_price/100*t.categories[0].discount_limit):a(t.selling_price-t.selling_price/100*t.discount_limit)}()}),[t]),(0,D.jsx)(D.Fragment,{children:i.toLocaleString("us-Rs",{style:"currency",currency:"INR"})})}function oe(e){var t=e.ACIN,n=e.SKU,l=(0,o.useState)({size:[],range:[],material:[],fabric:[],fitting:[],mattress:[]}),d=(0,s.Z)(l,2),m=d[0],x=d[1];function h(){return(h=(0,a.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.I_)(t);case 3:200===(n=e.sent).status&&x((0,r.Z)({},n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return(0,o.useMemo)((function(){!function(){h.apply(this,arguments)}()}),[t]),(0,D.jsx)(D.Fragment,{children:m.show&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{sx:{mt:2,fontWeight:400},variant:"h6",children:"Variants"}),(0,D.jsx)(G.Z,{}),(0,D.jsx)(v.Z,{className:"variants",mt:2,children:m.variants.length>0&&m.variants.map((function(e){return(0,D.jsxs)(v.Z,{component:c.rU,to:"/details/".concat(e.SKU,"/").concat(e.title,"/").concat(e.category),className:n===e.SKU?"size borderSize":"size",children:[(0,D.jsx)("img",{src:e.product_image[0]||u.Z,alt:"variant_image"}),(0,D.jsx)(g.Z,{size:"small",className:n===e.SKU?"variant_label bold":"variant_label",variant:"caption",children:e.product_title})]})}))})]})})}function ce(e){var t=e.review;return(0,D.jsx)(v.Z,{className:"mainSec",children:(0,D.jsxs)(v.Z,{className:"CTcontainer",children:[(0,D.jsx)(g.Z,{sx:{fontWeight:500},variant:"h5",children:"Let our customer speaks for us"}),(0,D.jsx)("br",{}),(0,D.jsx)(d.default,{keyBoardControl:!0,ssr:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:800,min:600},items:3},mobile:{breakpoint:{max:600,min:0},items:2}},children:t.map((function(e,t){return(0,D.jsxs)(v.Z,{className:"reviewCard",component:c.rU,to:"/details/".concat(e.product_id,"/").concat(e.product[0].product_title,"/").concat(e.product[0].category_name),p:1,children:[(0,D.jsx)(Z.Z,{name:"read-only",value:e.rating,readOnly:!0}),(0,D.jsx)(g.Z,{variant:"h6",children:e.review_title}),(0,D.jsxs)(g.Z,{variant:"body1",children:['"',e.review,'"']}),(0,D.jsx)(g.Z,{variant:"body2",children:e.reviewer_name}),(0,D.jsx)(v.Z,{className:"reviewProductImage",children:(0,D.jsx)("img",{src:e.product[0].product_image[0]||u.Z,alt:t})}),(0,D.jsx)(g.Z,{variant:"body1",children:e.product[0].product_title})]})}))})]})})}}}]);
//# sourceMappingURL=716.39c6487a.chunk.js.map