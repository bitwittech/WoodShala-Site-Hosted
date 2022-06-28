const { default: mongoose } = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const product = mongoose.Schema({
    SKU : {required : true, type : String, unique: true},
    product_title : {required : true, type : String},
    category_name : {required : true, type : String},
    category_id : {required : true, type : String},
    sub_category_name : {required : true, type : String},
    sub_category_id : {required : true, type : String},
    product_description : {type : String},
    seo_title : {required : true, type : String},
    seo_description : {required : true, type : String},
    seo_keyword : {required : true, type : String},
    product_image : {required : true, type : Array},
    featured_image : {required : true, type : String},
    specification_image : {required : true, type : String},
    primary_material : {required : true, type : String},
    primary_material_name : {required : true, type : String},
    secondary_material : { type : String},
    secondary_material_name : { type : String},
    secondary_material_weight : {type :  Number},
    length_main : { type : Number},
    breadth : { type : Number},
    height : { type : Number},
    weight : { type : String},
    polish : { type : String},
    polish_name  : { type : String},
    hinge : { type : String},
    hinge_name  : { type : String},
    knob : { type : String},
    knob_name  : { type : String},
    handle : { type : String},
    handle_name  : { type : String},
    door : { type : String},
    door_name  : { type : String},
    fitting : { type : String},
    fitting_name : { type : String},
    selling_points : { type : String},
    top_size : {type : Number},
    dial_size : { type : Number},
    seating_size_width : { type : Number},
    seating_size_depth : { type : Number},
    seating_size_height : { type : Number},
    weight_capacity : { type : String},
    fabric : { type : String},
    fabric_name : { type : String},
    wall_hanging : { type : Boolean},
    assembly_required : { type : String},
    assembly_part : { type : Number},
    legs : { type : String},
    mirror : { type : String},
    mirror_length : { type : String},
    mirror_width : { type : String},
    silver : { type : String},
    silver_weight : { type : Number},
    joints : { type : String},
    upholstery : { type : String},
    wheel : { type : String},
    trolley : { type : String},
    trolley_material : { type : String},
    rotating_seats : { type : Boolean},
    eatable_oil_polish : { type : Boolean},
    no_chemical : { type : Boolean},
    straight_back : { type : Boolean},
    lean_back : { type : Boolean},
    weaving : { type : Boolean},
    knife : { type : Boolean},
    not_suitable_for_Micro_Dish : { type : Boolean},
    tilt_top : { type : Boolean},
    inside_compartments : { type : Boolean},
    stackable : { type : Boolean},
    MRP : {required : true, type : Number},
    tax_rate : {required : true, type : Number},
    selling_price : {required : true, type : Number},
    showroom_price : {required : true, type : Number},
    discount_limit : {required : true, type : Number},
    dispatch_time : {required : true, type : String},
    status : {required : true, type : Boolean}
})

module.exports = mongoose.model('products',product);