import config from "../config.json";
// import { useSelector } from "react-redux";
const apiKey = config.PINCODE;

const API = config.OfficialAPI;

// ================= // This file holds all the backend services -======================
const axios = require("axios");

// token Dashboard
const WDToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXIgQWRtaW4iLCJlbWFpbCI6InN1cGVyQHdvb2RzaGFsYS5jb20iLCJwYXNzd29yZCI6Indvb2RzYWxhMjAyMiIsImlhdCI6MTY2MTg3Mjc4M30.LT7rczBuoQpjIedvaOUgYPKy4oW7snvtq5BrIcqpaYk";

// token for Site Token

// ========================= CURD For user =================================

// for register
export const register = async (data) => {
  return await axios.post(`${API}/register`, data);
};

// for register
export const sendVerificationLink = async (data) => {
  return await axios.post(`${API}/sendVerificationLink`, data);
};

// for register
export const verify = async (token) => {
  return await axios.get(`${API}/verify?token=${token}`);
};

// for login
export const login = async (data) => {
  return await axios.post(`${API}/login`, data);
};

// for getting user details
export const getCustomer = async (CID) => {
  return await axios.get(`${API}/getCustomer?CID=${CID}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
// for getCustomerAddress details
export const getCustomerAddress = async (CID) => {
  return await axios.get(`${API}/getCustomerAddress?CID=${CID}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// for update Customer  details
export const updateCustomer = async (data) => {
  // (data)
  return await axios.patch(
    "https://admin.woodshala.in/api/updateCustomer",
    data,
    {
      headers: {
        Authorization: `Bearer ${WDToken}`,
      },
    }
  );
};

// ========================= End CURD For user =================================

// ======================== CURD for product =================================

export const getProducts = async (data) => {
  // (data)
  return await axios.get(
    `${API}/getProducts?pageNumber=${data.page}&product_title=${data.filter.product_title}&category_name=${data.filter.category_name}&filter=${data.extraFilter}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getRelatedProduct = async (data) => {
  return await axios.get(
    `${API}/getRelatedProduct?filter=${JSON.stringify(data)}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export const getSearchList = async (data) => {
  return await axios.get(`${API}/getSearchList?filter=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// addReview
export const addReview = async (data) => {
  return await axios.post(`${API}/addReview`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const verifyReview = async (data) => {
  return await axios.post(`${API}/verifyReview`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const addReply = async (data) => {
  return await axios.post(`${API}/addReply`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const fetchVariants = async (data) => {
  return await axios.get(`${API}/fetchVariants?ACIN=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// get listReview for display
export const listReview = async (data) => {
  return await axios.get(`${API}/listReview?product_id=${data}`);
};

// get product details for display
export const getProductDetails = async (data) => {
  return await axios.get(`${API}/getProductDetails?SKU=${data}`);
};
// get product details for display
export const verifyCoupon = async (data) => {
  return await axios.get(
    `${API}/verifyCoupon?code=${data.code}&email=${data.email}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getMartialList = async () => {
  return await axios.get("https://admin.woodshala.in/api/getPrimaryMaterial", {
    headers: {
      Authorization: `Bearer ${WDToken}`,
    },
  });
};

// ======================== END CURD  product =================================

// ========================  CURD from Cart =================================

// add item to cart
export const addCartItem = async (data) => {
  return await axios.post(`${API}/addCartItem`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// remove item from cart
export const removeCartItem = async (data) => {
  return await axios.get(
    `${API}/removeCartItem?CID=${data.CID}&product_id=${data.product_id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getCartItem = async (data) => {
  return await axios.get(`${API}/getCartItem?CID=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getDetails = async (data) => {
  return await axios.get(`${API}/getDetails?products=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updateQuantity = async (data) => {
  return await axios.patch(`${API}/updateQuantity`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// ========================  END CURD from Cart =================================

// ========================== Order CURD =================

// order ID at last
export const getLastOrder = async () => {
  return await axios.get("https://admin.woodshala.in/api/getLastOrder", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};

// for  adding order to the list

export const placeOrder = async (data) => {
  return await axios.post(`${API}/placeOrder`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};

// for  abandoned Order to the list

export const abandonedOrder = async (data) => {
  return await axios.post(`${API}/abandonedOrder`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};

// for get address vai pin code
export const getAddress = async (data) => {
  return await axios.get(
    `https://app.zipcodebase.com/api/v1/search?apikey=${apiKey}&codes=${data}`
  );
};
// for  verify check out

export const verifyPayment = async (data) => {
  return await axios.post(`${API}/verifyPayment`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};
// for  simple Order

export const simpleOrder = async (data) => {
  return await axios.post(`${API}/simpleOrder`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};

// ========================  END ORDER =================================

// ========================== Wishlist CURD =================

// for  add item to wishlist check out

export const addWshList = async (data) => {
  return await axios.post(`${API}/addWshList`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WDToken")}`,
    },
  });
};

// for  remove WshList item

export const removeWshList = async (data) => {
  return await axios.delete(
    `${API}/removeWshList?CID=${data.CID}&product_id=${data.product_id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
// for get wished product

export const getWishedProduct = async (data) => {
  return await axios.get(
    `${API}/getWishedProduct?list=${JSON.stringify(data)}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
// for get wished product

export const getWishList = async (data) => {
  return await axios.get(`${API}/getWishList?CID=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// ========================== Ends Wishlist CURD =================

// ==========================  Blog CURD =================

// getBlogHome

export const getBlogHome = async (data) => {
  return await axios.get(`${API}/getBlogHome?pageNumber=${data.pageNumber}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// getBlog description

export const getBlog = async (data) => {
  return await axios.get(`${API}/getBlog?uuid=${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// ========================== Ends Blog  CURD =================

// ========================== Contact  CURD =================

// getBlog description

export const addContact = async (data) => {
  return await axios.post(`${API}/addContact`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// ========================== Ends COntact  CURD =================

// ============= banner

export const getBanner = async () => {
  return await axios.get(`${API}/getBanner`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
// ============= COD limit

export const getCODLimits = async () => {
  return await axios.get(`${API}/cod_limit`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const verifyRecaptcha = async (data) => {
  return await axios.get(
    `${API}/captcha?response=${JSON.stringify({
      key: config.client_side_recaptcha,
      response: data,
    })}`
  );
};

// extra check for master login temporary
export const master = async (data) => {
  return await axios.post(`${API}/master`, data);
};
