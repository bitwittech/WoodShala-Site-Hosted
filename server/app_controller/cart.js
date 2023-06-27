const cart = require("../../database/models/cart");
const wishlist = require("../../database/models/wishlist");
const coupon = require("../../database/models/coupon");
const product = require("../../database/models/product");
const user = require("../../database/models/user");
const order = require("../../database/models/order");

// Cart ======================

exports.addCartItem = async (req, res) => {
  try {
    let { CID, product_id, quantity, DID } = req.body;

    // console.log(CID, product_id, quantity,DID)
    // console.log((!CID || !DID))

    if ((!CID && !DID) || !product_id || !quantity)
      return res.status(203).send({
        status: 203,
        message: "Please provide the proper payload missing.",
      });

    let data = await cart.findOneAndUpdate(
      {
        $and: [
          { $or: [{ CID }, { DID }] },
          { product_id: req.body.product_id },
        ],
      },
      { CID, product_id, quantity, DID },
      { upsert: true, new: true }
    );

    let cartCount = await cart
      .find({ $and: [{ $or: [{ CID }, { DID }] }] })
      .count();

    if (data)
      return res.status(200).send({
        status: 200,
        message: "Produce dumped to the cart.",
        data: { data, cartCount },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "Facing error while dumping the product to the cart.",
        data: { data: [], cartCount: 0 },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "Facing error while dumping the product to the cart.",
      data: [],
    });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    const { CID, DID, product_id } = req.query;

    // console.log(CID, DID);
    if ((!CID && !DID) || !product_id)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    let response = await cart.deleteMany({
      $and: [{ $or: [{ CID }, { DID }] }, { product_id: product_id }],
    });
    let cartCount = await cart
      .find({ $and: [{ $or: [{ CID }, { DID }] }] })
      .count();

    if (response.deletedCount > 0)
      return res.status(200).send({
        status: 200,
        message: "Item removed from the cart !!!",
        data: { cartCount },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No product found",
        data: { cartCount },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

exports.getCartItem = async (req, res) => {
  try {
    const { CID, DID } = req.query;

    if (!CID && !DID)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    // ,

    let data = await cart.aggregate([
      { $match: { $or: [{ CID }, { DID }] } },
      { $project: { __v: 0 } },
      {
        $lookup: {
          from: "new_products",
          localField: "product_id",
          // pipeline: [
          //   {
          //     $project: {
          //       product_title: 1,
          //       product_image: 1,
          //       category_name: 1,
          //       discount_limit: 1,
          //       selling_price: 1,
          //     },
          //   },
          //   {
          //     $lookup: {
          //       from: "categories",
          //       localField: "category_name",
          //       pipeline: [
          //         {
          //           $project: {
          //             category_name: 1,
          //             discount_limit: 1,
          //           },
          //         },
          //       ],
          //       foreignField: "category_name",
          //       as: "category",
          //     },
          //   },
          // ],
          foreignField: "SKU",
          as: "product",
        },
      },
    ]);

    // let total = data.reduce((sum,row )=>{
    //     if(row.product.length > 0)
    //     {
    //       if(row.product[0].category.length > 0)
    //       {
    //         subTotal+= row.product[0].selling_price
    //         if(row.product[0].discount_limit > row.product[0].category[0].discount_limit)
    //         {
    //           return sum = sum + row.product[0].selling_price - row.product[0].selling_price/100*row.product[0].discount_limit
    //         }
    //         else{
    //           return sum = sum + row.product[0].selling_price - row.product[0].selling_price/100*row.product[0].category[0].discount_limit
    //         }
    //       }
    //     }
    // },0)
    let subTotal = data.reduce((sum, row) => {
      if (row.product.length > 0) {
        return (sum += row.product[0].selling_price * row.quantity);
      }
    }, 0);

    data = data.map((row) => {
      row = {
        ...row,
        product_image: row.product[0].product_image,
        product_title: row.product[0].product_title,
        selling_price: row.product[0].selling_price * row.quantity,
      };
      delete row.product;
      return row;
    });

    if (data)
      return res.status(200).send({
        status: 200,
        message: "Cart items fetched successfully.",
        data: { data, cartCount: data.length, subTotal },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No product found",
        data: { data, cartCount: data.length },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

// Wishlist =============================

exports.addWishlistItem = async (req, res) => {
  try {
    let { CID, product_id, quantity, DID } = req.body;

    // console.log(CID, product_id, quantity,DID)
    // console.log((!CID || !DID))

    if ((!CID && !DID) || !product_id || !quantity)
      return res.status(203).send({
        status: 203,
        message: "Please provide the proper payload missing.",
      });

    let data = await wishlist.findOneAndUpdate(
      {
        $and: [
          { $or: [{ CID }, { DID }] },
          { product_id: req.body.product_id },
        ],
      },
      { CID, product_id, quantity, DID },
      { upsert: true, new: true }
    );

    let wishListCount = await wishlist
      .find({ $and: [{ $or: [{ CID }, { DID }] }] })
      .count();

    if (data)
      return res.status(200).send({
        status: 200,
        message: "Produce dumped to the wishlist.",
        data: { data, wishListCount },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "Facing error while dumping the product to the cart.",
        data: { data: [], wishListCount },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "Facing error while dumping the product to the cart.",
      data: [],
    });
  }
};

exports.removeWishlistItem = async (req, res) => {
  try {
    const { CID, DID, product_id } = req.query;

    // console.log(CID, DID);
    if ((!CID && !DID) || !product_id)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    let response = await wishlist.deleteMany({
      $and: [{ $or: [{ CID }, { DID }] }, { product_id: req.query.product_id }],
    });
    let wishlistCount = await wishlist
      .find({ $or: [{ CID }, { DID }] })
      .count();

    if (response.deletedCount > 0)
      return res.status(200).send({
        status: 200,
        message: "Item removed from the wishlist !!!",
        data: { wishlistCount },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No product found",
        data: { wishlistCount },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

exports.getWishlistItem = async (req, res) => {
  try {
    const { CID, DID } = req.query;

    if (!CID && !DID)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    let data = await wishlist.aggregate([
      { $match: { $or: [{ CID }, { DID }] } },
      { $project: { __v: 0 } },
      {
        $lookup: {
          from: "new_products",
          localField: "product_id",
          // pipeline: [
          //   {
          //     $project: {
          //       product_title: 1,
          //       product_image: 1,
          //       category_name: 1,
          //       discount_limit: 1,
          //       selling_price: 1,
          //     },
          //   },
          //   {
          //     $lookup: {
          //       from: "categories",
          //       localField: "category_name",
          //       pipeline: [
          //         {
          //           $project: {
          //             category_name: 1,
          //             discount_limit: 1,
          //           },
          //         },
          //       ],
          //       foreignField: "category_name",
          //       as: "category",
          //     },
          //   },
          // ],
          foreignField: "SKU",
          as: "product",
        },
      },
    ]);

    data = data.map((row) => {
      row = {
        ...row,
        product_image: row.product[0].product_image,
        product_title: row.product[0].product_title,
        selling_price: row.product[0].selling_price * row.quantity,
      };
      delete row.product;
      return row;
    });

    if (data)
      return res.status(200).send({
        status: 200,
        message: "Wishlist items fetched successfully.",
        data: { data, wishlistCount: data.length },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No product found",
        data: { data, wishlistCount: data.length },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

exports.getCount = async (req, res) => {
  try {
    const { CID, DID } = req.query;

    if (!CID && !DID)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    let CartCount = await cart.find({ $or: [{ CID }, { DID }] }).count();
    let WishCount = await wishlist.find({ $or: [{ CID }, { DID }] }).count();

    if (CartCount && WishCount)
      return res.status(200).send({
        status: 200,
        message: "Wishlist items fetched successfully.",
        data: { WishCount, CartCount },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No product found",
        data: { WishCount, CartCount },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

exports.getPromoCode = async (req, res) => {
  try {
    const { code } = req.query;

    let fields = {
      _id: 1,
      coupon_code: 1,
      coupon_type: 1,
      flat_amount: 1,
      off: 1,
      valid_from: 1,
      expiry: 1,
      coupon_description: 1,
    };
    let list;
    if (code) list = await coupon.find({ coupon_code: code }, fields);
    else list = await coupon.find({}, fields);

    if (list)
      return res.status(200).send({
        status: 200,
        message: "Promo code list fetched successfully.",
        data: list,
      });
    else
      return res.status(203).send({
        status: 203,
        message: "No promo code found",
        data: [],
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

// Calculate Start =================================
exports.calculate = async (req, res) => {
  try {
    const { CID, DID, order_id, address_id, promo_id } = req.query;

    if ((!CID && !DID) || !address_id)
      return res.status(203).send({
        status: 203,
        message: "Missing Payload",
      });

    // fetching the Cart Items
    let items = await cart.aggregate([
      { $match: { $or: [{ CID }, { DID }] } },
      { $project: { __v: 0, _id: 0 } },
      {
        $lookup: {
          from: "new_products",
          localField: "product_id",
          pipeline: [
            {
              $project: {
                _id: 0,
                selling_price: 1,
                discount_limit: 1,
                category_name: 1,
              },
            },
            {
              $lookup: {
                from: "categories",
                localField: "category_name",
                pipeline: [
                  {
                    $project: {
                      _id: 0,
                      discount_limit: 1,
                    },
                  },
                ],
                foreignField: "category_name",
                as: "category",
              },
            },
          ],
          foreignField: "SKU",
          as: "product",
        },
      },
    ]);

    let product = {
      quantity: {},
      discount_per_product: {},
      product_price: {},
      items: {},
    };
    let discount = 0;

    // cart value calculation starts from here
    if (items.length > 0)
      items = items.reduce(
        (sum, row) => {
          let SKU = row.product_id;

          // building the product data {}
          Object.assign(product.quantity, { [SKU]: row.quantity });
          Object.assign(product.items, { [SKU]: [] });
          Object.assign(product.product_price, {
            [SKU]: row.product[0].selling_price,
          });

          // discount comparison
          if (row.product[0]) {
            if (row.product[0].category[0]) {
              if (
                row.product[0].category[0].discount_limit <
                row.product[0].discount_limit
              ) {
                discount =
                  (row.product[0].selling_price / 100) *
                  (row.product[0].category[0].discount_limit || 0);
                Object.assign(product.discount_per_product, {
                  [SKU]: discount,
                });
                row.price = row.product[0].selling_price - discount;
              } else {
                discount =
                  (row.product[0].selling_price / 100) *
                  row.product[0].discount_limit;
                Object.assign(product.discount_per_product, {
                  [SKU]: discount,
                });
                row.price = row.product[0].selling_price - discount;
              }
            }
          }

          sum[0] = row.product[0].selling_price *= row.quantity;
          sum[1] = row.price *= row.quantity;

          return sum;
        },
        [0, 0]
      );

    items = {
      subTotal: items[0],
      discount: items[0] - items[1],
      total: items[1],
      product,
    };

    let order_data = undefined;

    // for order create and update order
    if (!order_id)
      order_data = await CreateOrder(CID, DID, items, promo_id, address_id);
    else
      order_data = await UpdateOrder(
        CID,
        DID,
        items,
        promo_id,
        address_id,
        order_id
      );

    if (order_data.status === 200) {
      items = order_data.items;
      order_data = await order.findOneAndUpdate(
        { O: order_id },
        { ...order_data.data },
        { upsert: true, new: true }
      );
    } else {
      return res.status(203).send({
        status: 203,
        message: "Error in creating order.",
        data: {},
      });
    }

    delete items.product;

    if (order_data)
      return res.status(200).send({
        status: 200,
        message: "Cart value calculated.",
        data: { amount: items, order_id: order_data.O },
      });
    else
      return res.status(203).send({
        status: 203,
        message: "Facing error while calculating Cart value.",
        data: { amount: 0, order_data: {} },
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

async function GetOrderID() {
  try {
    // order.collection.drop()
    let O = await order
      .findOne({}, { _id: 0, O: 1 })
      .sort({ _id: -1 })
      .limit(1);
    if (O !== null) {
      O = parseInt(O.O.split("-")[1]);
      O = `O-0${O + 1}`;
      return {
        status: 200,
        message: "success",
        O,
      };
    } else
      return {
        status: 200,
        message: "success",
        O: "O-01001",
      };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error",
      O: "",
    };
  }
}

async function CreateOrder(CID, DID, items, promo_id, address_id) {
  try {
    let O = await GetOrderID();

    let customer_address = await user.findOne(
      { $or: [{ CID }, { DID }] },
      { address: 1 }
    );
    let promoData;

    // check for promo code applied or not?
    if (promo_id)
      promoData = await coupon.findOne(
        { _id: promo_id },
        {
          coupon_type: 1,
          flat_amount: 1,
          off: 1,
        }
      );

    // promo code identification
    if (promoData) {
      if (promoData.coupon_type === "FLAT")
        items = {
          ...items,
          coupon_discount: promoData.flat_amount,
          total: items.total - promoData.flat_amount,
        };
      else if (promoData.coupon_type === "OFF(%)")
        items = {
          ...items,
          coupon_discount: (items.total / 100) * promoData.off,
          total: items.total - (items.total / 100) * promoData.off,
        };
      else
        items = {
          ...items,
          coupon_discount: 0,
        };
    } else
      items = {
        ...items,
        coupon_discount: 0,
      };

    // check for customer ID in proper or not
    if (customer_address === {})
      return {
        status: 203,
        message: "Customer ID is not valid.",
      };

    // check the customer having an valid address for not
    if (customer_address)
      customer_address = customer_address.address.find(
        (row) => row.id === address_id
      );
    else
      return {
        status: 203,
        message: "Not a valid address ID.",
      };

    let data = {
      O: O.O,
      CID,
      DID,
      customer_name: customer_address.customer_name,
      customer_email: customer_address.email,
      customer_mobile: customer_address.mobile,
      country: "India",
      pincode: customer_address.pincode,
      city: customer_address.city,
      state: customer_address.state,
      shipping: customer_address.address,
      sales_person: "",
      billing: customer_address.address,
      quantity: items.product.quantity,
      discount_per_product: items.product.discount_per_product,
      product_price: items.product.product_price,
      items: items.product.items,
      subTotal: items.subTotal,
      discount: items.discount,
      paid: 0,
      total: items.total,
      sale_channel: "Mobile App",
      apartment: customer_address.apartment,
      landmark: customer_address.landmark,
      coupon_code: promo_id,
    };

    return {
      status: 200,
      message: "Order created successfully.",
      data,
      items,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error",
      O: "",
    };
  }
}

async function UpdateOrder(CID, DID, items, promo_id, address_id, order_id) {
  try {
    let customer_address = await user.findOne(
      { $or: [{ CID }, { DID }] },
      { address: 1 }
    );
    let promoData;

    // check for promo code applied or not?
    if (promo_id)
      promoData = await coupon.findOne(
        { _id: promo_id },
        {
          coupon_type: 1,
          flat_amount: 1,
          off: 1,
        }
      );

    // promo code identification
    if (promoData) {
      if (promoData.coupon_type === "FLAT")
        items = {
          ...items,
          coupon_discount: promoData.flat_amount,
          total: items.total - promoData.flat_amount,
        };
      else if (promoData.coupon_type === "OFF(%)")
        items = {
          ...items,
          coupon_discount: (items.total / 100) * promoData.off,
          total: items.total - (items.total / 100) * promoData.off,
        };
      else
        items = {
          ...items,
          coupon_discount: 0,
        };
    } else
      items = {
        ...items,
        coupon_discount: 0,
      };

    // check for customer ID in proper or not
    if (customer_address === {})
      return {
        status: 203,
        message: "Customer ID is not valid.",
      };

    // check the customer having an valid address for not
    if (customer_address)
      customer_address = customer_address.address.find(
        (row) => row.id === address_id
      );
    else
      return {
        status: 203,
        message: "Not a valid address ID.",
      };

    let data = {
      O: order_id,
      customer_name: customer_address.customer_name,
      customer_email: customer_address.email,
      customer_mobile: customer_address.mobile,
      country: "India",
      pincode: customer_address.pincode,
      city: customer_address.city,
      state: customer_address.state,
      shipping: customer_address.address,
      sales_person: "",
      billing: customer_address.address,
      quantity: items.product.quantity,
      discount_per_product: items.product.discount_per_product,
      product_price: items.product.product_price,
      items: items.product.items,
      subTotal: items.subTotal,
      discount: items.discount,
      total: items.total,
      apartment: customer_address.apartment,
      landmark: customer_address.landmark,
      coupon_code: promo_id,
    };

    return {
      status: 200,
      message: "Order created successfully.",
      data,
      items,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error",
      items,
    };
  }
}

// Calculate Ends =================================

// Checkout

exports.CODCheckOut = async (req, res) => {
  try {
    let { CID, DID, order_id } = req.body;

    // console.log(CID, DID, order_id )
    if ((!CID && !DID) || !order_id)
      return res.status(203).send({
        status: 203,
        message: "Missing payload.",
        data: {},
      });

    // fetching the order details
    let order_data = await order.findOne(
      { $and: [{ O: order_id }, {$or: [{CID}, {DID}]}, {payment_status : false}] },
      { O: 1, total: 1, subTotal: 1, coupon_code: 1, discount: 1 }
    );

    
    if (!order_data)
    return res.status(203).send({
      status: 203,
      message: "Order not found !!!",
      data: {},
    });
    let { O, total, subTotal, coupon_code, discount } = order_data;
    
    order_data = await order.findOneAndUpdate(
      { $and: [{ O: order_id}, {$or: [{CID}, {DID}] }] },
      {
        pay_method_remaining: "COD",
        pay_method_advance: "COD",
        payment_status: true,
      }
    );

    // console.log(order_data)

    if (order_data)
      return res.status(200).send({
        status: 200,
        message: `Order placed ${order_id}.`,
        data: {
          pay_method: "COD",
          order_id: O,
          total,
          subTotal,
          coupon_code,
          discount,
        },
      });
    else
      return res.status(203).send({
        status: 203,
        message: `Facing an issue while order placing ${order_id}.`,
        data: {
          order_id,
        },
      });
  } catch (error) {
    console.log(error)

    return res.status(500).send({
      status: 500,
      message: `Facing an issue while order placing.`,
      data: {},
    });
  }
}
