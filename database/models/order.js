const { default: mongoose } = require("mongoose");

const order = mongoose.Schema({
  O: { type: String },
  order_time: { type: Date, default: Date.now },
  status: { type: String },
  CID: { type: String },
  customer_name: { type: String },
  customer_email: { type: String },
  customer_mobile: { type: String },
  country :  { type: String, default : 'India' },
  pincode: { type: String },
  city: { type: String },
  state: { type: String },
  shipping: { type: String },
  sales_person: { type: String , default : ''},
  billing: { type: String },
  quantity: { type: Object,default : {}},
  discount_per_product: { type: Object,default : {}},
  product_price: { type: Object,default : {}},
  items : {type : Object,default : {}},
  discount_type : {type : String, default : 'percentage'}, 
  subTotal: { type: Number,default : 0 },
  discount: { type: Number,default : 0 },
  paid: { type: Number, default : 0 },
  total: { type: Number, default : 0 },
  discount: { type: Number },
  GST: { type: String },
  has_GST: { type: String, default  : 'no' },
  note: { type: String },
  customizations : {type : Array,default : []},
  custom_order: { type: Boolean, default: false },
  sale_channel: { type: String, default: "Online" },
  PO: { type: String, default: "" },
  classification : {type : String, default : 'personal'},
  customer_type : {type : String, default : ''},
  pic_before_dispatch : {type : Boolean, default : false},
  fulfilled : {type : Boolean, default : false},
  advance_received : {type : Number, default : 0},
  pay_method_remaining : {type : String, default : ''},
  pay_method_advance : {type : String, default : ''},
  inventory_location : {type : String, default : ''},
  courier_company : {type : String, default : ''},
  AWB : {type : String, default : ''},
  apartment : {type : String, default : ''},
  landmark : {type : String, default : ''},
},{
  timestamps : true
});

module.exports = mongoose.model("order", order);