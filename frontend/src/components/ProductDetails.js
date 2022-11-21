// Old Page ==============

import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
// import {  } from "react-router-dom";
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
// demo images
import living from ".././asset/images/home/sofa_SBR.png";
import wfh from ".././asset/images/home/table_SBR.png";
import bedroom from ".././asset/images/home/bedroom_SBR.png";
// import dining from ".././asset/images/home/dining_SBR.png";
import bed from ".././asset/images/home/bed_SBF.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import defaultIMG from ".././asset/images/defaultProduct.svg";

// css
import "../asset/css/productDetails.css";

// mui
import {
  Grid,
  Button,
  Typography,
  Rating,
  Box,
  Divider,
  CircularProgress,
  TextField,
  InputAdornment,
  Stack,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,


} from "@mui/material";

// APis function 
import { getProductDetails, addCartItem, getRelatedProduct } from '../service/service'


// redux 
import {useDispatch,useSelector} from 'react-redux';
// action
import {addItem,removeItem,setAlert} from '../Redux/action/action'

export default function ProductDetails(props) {

  // store 
  // const { state, dispatch } = Store();

  // state
  const state = useSelector(state=>state);

  //redux
  const dispatch = useDispatch();

  // state
  const [imageIndex, setIndex] = useState(0); // use for updating the images
  const [ratting, setRatting] = useState(2);
  const [expanded, setExpanded] = useState("panel1");
  const [value, setValue] = useState(0);

  // useParams search parameters
  const { SKU, title, category } = useParams();

  // state for data 
  const [data, setData] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])


  // history
  const history = props.history;


  // for getting the product 
  useEffect(() => {
    setData(null)
    setRelatedProducts([])
    getData()
  }, [SKU, title, category]);


  const getData = async (filters) => {
    await getProductDetails(SKU)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    await getRelatedProduct({ product_title: title, category_name: category })
      .then((response) => {
        setRelatedProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const sizeCart = [
    {
      name: "King Size",
      price: 44000,
    },
    {
      name: "Queen Size",
      price: 35000,
    },
    {
      name: "Kid Size",
      price: 20000,
    },
  ];


  let relatedProduct = [
    {
      image: living,
      review: "Great Product with minimal design.",
      name: "Yashwant Sahu",
    },
    {
      image: living,
      review: "Great Product with minimal design.",
      name: "Yashwant Sahu",
    },
    {
      image: wfh,
      review: "Great Product with minimal design.",
      name: "Nilesh Prajapati",
    },
    {
      image: wfh,
      review: "Great Product with minimal design.",
      name: "Nilesh Prajapati",
    },
    {
      image: bedroom,
      review: "Great Product with minimal design.",
      name: "Rahul Raj",
    },
    {
      image: bed,
      review: "Great Product with minimal design.",
      name: "Yashwant Sahu",
    },
    {
      image: bed,
      review: "Great Product with minimal design.",
      name: "Yashwant Sahu",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // function for adding the product to cart 
  const addToCart = async () => {

    // server side 
    if (state.auth.isAuth) {
      await addCartItem({
        CID: state.auth.CID,
        product_id: data.SKU,
        quantity: data.quantity || 1,
      })
        .then((response) => {
          // for client side 
          dispatch(removeItem(data.SKU));

          dispatch(addItem({
            product_id : data.SKU,
            quantity : data.quantity,
            CID : state.auth.CID
          }));

          return dispatch(setAlert({
              variant: 'success',
              message: response.data.message,
              open: true
            }))
        })
        .catch((err) => {
          return dispatch(setAlert({
              variant: 'error',
              message: 'Something Went Wrong !!!',
              open: true
          }))
        })
    }
    else {
      // for client side 
      dispatch(removeItem(data.SKU));

      dispatch(addItem({
        product_id : data.SKU,
        quantity : data.quantity,
        CID : 'Not Logged In'
      }));


      return dispatch(setAlert({
          variant: 'success',
          message: 'Item added to the cart !!!',
          open: true
      }))

    }
  }

  const specification = [
    'product_title',
    'category_name',
    'sub_category_name',
    'primary_material',
    'length_main',
    'breadth',
    'height',
    'weight',
    'polish_name',
    'assembly_required',
    'assembly_part',
    'selling_price',
    'showroom_price',
    'discount_limit',
    'show_on_mobile',
    'range',
  ]

  const image = [
    'featured_image',
    'mannequin_image',
    'specification_image',
  ]

  const feature = [
    "rotating_seats",
    "eatable_oil_polish",
    "no_chemical",
    "weaving",
    "knife",
    "not_suitable_for_Micro_Dish",
    "tilt_top",
    "inside_compartments",
    "stackable",
    "ceramic_drawers",
    "ceramic_tiles",
  ]

  const miscellanous = [
    "weight_capacity",
    "joints",
    "drawer",
    "drawer_count",
    "back_style",
  ]

  const inventory = [
    'warehouse',
    'bangalore_stock',
    'jodhpur_stock',
    'selling_points',
    'polish_time',
    'manufacturing_time',
    'returnDays',
    'COD',
    'returnable',
    'package_length',
    'package_height',
    'package_breadth',
    'quantity',
    'unit',
  ]

  const seo = [
    'product_description',
    'seo_title',
    'seo_description',
    'seo_keyword',
  ]

  const extra = [
    'hinge_name',
    'knob_name',
    'textile_name',
    'textile_type',
    'door_name',
    'fitting_name',
    'top_size',
    'dial_size',
    'seating_size_width',
    'seating_size_depth',
    'seating_size_height',
    'fabric',
    'fabric_name',
    'mirror',
    'mirror_length',
    'mirror_width',
    'silver',
    'silver_weight',
    'wheel',
    'trolley',
    'trolley_material',
    'tax_rate',
    'legs'
  ]

  return (
    <>
      <title>Product</title>
      {data ? 
      <>
            {/* main section  */}
            <Grid container className="mainSec">
              {/* Image sec */}
              <Grid item className="imageSec" xs={12} md={6}>
                <Grid container>
                  <Grid item xs={12} sx={{
                    maxWidth: '400px',
                    maxHeight: '450px'
                  }}>
                    <img
                      className="showImage"
                      src={data.product_image[imageIndex]}
                      alt="image2"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className="preview" spacing={2}>
                      {data.product_image.map((item, index) => {
                        return (
                          <Grid
                            item
                            xs={3}
                            key={index}
                            onClick={() => {
                              setIndex(index);
                            }}
                          >
                            <img src={item} className="showImage" alt="images" />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Image sec ends */}
              {/* details sec  */}
              <Grid item xs={12} className="contentSec" md={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 350 }} variant="h3">
                      {/* product title */}
                      {data.product_title}
                    </Typography>
                    <Typography sx={{ color: "#FD0606" }} variant="h6">
                      By Casa Craft
                    </Typography>
                    <Box className="ratting">
                      <Rating
                        name="simple-controlled"
                        value={ratting}
                        onChange={(event, newValue) => {
                          setRatting(newValue);
                        }}
                      />
                      <Box className="wishlist">
                        <FavoriteBorderIcon />
                        <Typography variant="h6">Add To Wishlist</Typography>
                      </Box>
                    </Box>
                    <Box className="priceSec">
                      <Typography variant="h4" sx = {{fontWeight : 'bolder'}}>
                        {/* Price */}
                        &#x20B9; {data.selling_price-(data.selling_price/100)*data.discount_limit}
                      </Typography>
                      {/* <Typography variant="body1"> */}
                        {/* MRP */}
                        {/* MRP : <del>{data.MRP}</del> */}
                      {/* </Typography> */}
                      <Typography sx={{ color: "#FD0606" }} variant="h6">
                        {/* discount */}
                        {data.discount_limit}% Off
                      </Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12}>
                <Box className="coupon">
                  <Typography sx={{ color: "#ad0000" }} variant="h6">
                    To get this price,
                    <span>
                      {" "}
                      USE CODE : <b>MOM</b>
                    </span>
                  </Typography>
                  <Typography variant="body1">Offer Extended</Typography>
                  <br></br>
                  <Divider />
                  <Typography variant="body1">
                    Shopping For First Time?
                  </Typography>
                  <Divider />
                </Box>
              </Grid> */}
                  {/* <Grid className="offers" item xs={12}>
                <Box>
                  <Typography
                    sx={{ color: "#FD0606", fontWeight: 400 }}
                    variant="h6"
                  >
                    Special Offers
                  </Typography>
                </Box>

                <Box className="accordion">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      className="summary"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                    >
                      <Typography sx={{ fontWeight: 400 }} variant="body1">
                        Holi Offer
                        <Typography variant="body1">
                          {" "}
                          Apply Code HOLI30
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                        blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      className="summary"
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                    >
                      <Typography sx={{ fontWeight: 400 }} variant="body1">
                        Diwali Offer
                        <Typography variant="body1">
                          {" "}
                          Apply Code DIW30
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                        blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid> */}
                  {/* <Grid item xs={12}>
                <Box>
                  <Typography sx={{ fontWeight: 400 }} variant="h6">
                    Size
                  </Typography>
                </Box>
                <Box className="sizeOption">
                  {sizeCart.map((item, index) => {
                    return (
                      <Box className="sizeBox">
                        <Typography sx={{ fontWeight: 400 }}>
                          {item.name}
                        </Typography>
                        <Divider />
                        <Typography> Rs.{item.price}</Typography>
                      </Box>
                    );
                  })}
                </Box>
                <Box className="cartButtons">
                  <TextField
                    size="small"
                    sx={{ marginTop: "2%", width: "50%" }}
                    id="standard-multiline-static"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    value = {data.quantity || 1}
                    onChange = {(e)=>setData({...data, quantity : e.target.value})}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">QTY</InputAdornment>
                      ),
                    }}
                  />
                  <Button variant="outlined" onClick = {()=>addToCart(data)} small="true">
                    Add To Cart
                  </Button>
                  <Button variant="contained" small="true">
                    Buy Now
                  </Button>
                </Box>
              </Grid> */}
                  <Grid className="pd" item xs={12}>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Product Details
                    </Typography>
                    <Divider />
                    <Stack sx={{ paddingTop: "2%" }}>
                      <Typography variant="body1">
                        SKU
                        <Typography sx={{ float: "right" }} variant="body1">{data.SKU}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Category
                        <Typography sx={{ float: "right" }} variant="body1">{data.category_name}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Sub Category
                        <Typography sx={{ float: "right" }} variant="body1">{data.sub_category_name}</Typography>
                      </Typography>
                      {/* <Typography variant="body1">
                    SEO Title
                    <Typography sx={{ float: "right" }} variant="body1">{data.seo_title}</Typography>
                  </Typography>
                  <Typography variant="body1">
                    SEO Keyword
                    <Typography sx={{ float: "right" }} variant="body1">{data.seo_keyword}</Typography>
                  </Typography> */}
                      <Typography variant="body1">
                        Matrial
                        <Typography sx={{ float: "right" }} variant="body1">{data.primary_material}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Weight Capacity<Typography sx={{ float: "right" }} variant="body1">{data.weight_capacity}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Manufacturing Time<Typography sx={{ float: "right" }} variant="body1">{data.manufacturing_time}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Polish Time<Typography sx={{ float: "right" }} variant="body1">{data.polish_time}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Range<Typography sx={{ float: "right" }} variant="body1">{data.range}</Typography>
                      </Typography>
                    </Stack>
                    <Typography sx={{ fontWeight: 400, mt: 1 }} variant="h6">
                      Price Details
                    </Typography>
                    <Divider />
                    <Stack sx={{ paddingTop: "2%" }}>
                      <Typography variant="body1">
                        Selling Price
                        <Typography sx={{ float: "right" }} variant="body1">{data.selling_price}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Showroom Price<Typography sx={{ float: "right" }} variant="body1">{data.showroom_price}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Discount <Typography sx={{ float: "right" }} variant="body1">{data.discount_limit}%</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Tax <Typography sx={{ float: "right" }} variant="body1">{data.tax_rate}%</Typography>
                      </Typography>
                      <Typography variant="body1">
                        MRP <Typography sx={{ float: "right" }} variant="body1">{(data.selling_price) - (data.selling_price / 100 * data.discount_limit)}</Typography>
                      </Typography>
                    </Stack>
                    <Typography sx={{ fontWeight: 400, mt: 1 }} variant="h6">
                      Dimesion Details
                    </Typography>
                    <Divider />
                    <Stack sx={{ paddingTop: "2%" }}>
                      <Typography variant="body1">
                        Dimensions (Inch)
                        <Typography sx={{ float: "right" }} variant="body1">{data.length_main} L x {data.height} H x {data.breadth} B</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Package Length (Inch)<Typography sx={{ float: "right" }} variant="body1">{data.package_length}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Package Height (Inch)<Typography sx={{ float: "right" }} variant="body1">{data.package_height}</Typography>
                      </Typography>
                      <Typography variant="body1">
                        Package Breadth (Inch)<Typography sx={{ float: "right" }} variant="body1">{data.package_breadth}</Typography>
                      </Typography>
                    </Stack>
                    <Box className="cartButtons">
                      <TextField
                        size="small"
                        sx={{ marginTop: "2%", width: "50%" }}
                        id="standard-multiline-static"
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        value={data.quantity || 1}
                        onChange={(e) => setData({ ...data, quantity: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">QTY</InputAdornment>
                          ),
                        }}
                      />
                      <Button variant="outlined" onClick={() => addToCart(data)} small="true">
                        Add To Cart
                      </Button>
                      <Button variant="contained" small="true">
                        Buy Now
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              {/* details sec ends */}
            </Grid>
            {/* main section Ends */}


            {/* More Information */}

            <Grid container className="moreInfo" >
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 500 }} variant="h5">
                  MORE INFORMATION
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 100, padding: "1% 0%" }} component='span' variant="body1">
                  Explore full product details here !!!
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
                      <Tab label="Specification" {...a11yProps(0)} />
                      <Tab label="Image" {...a11yProps(1)} />
                      <Tab label="Features" {...a11yProps(2)} />
                      <Tab label="Miscellaneous" {...a11yProps(3)} />
                      <Tab label="Inventory & Shipping" {...a11yProps(4)} />
                      <Tab label="SEO" {...a11yProps(5)} />
                      <Tab label="Extra Details" {...a11yProps(6)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {specification.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right" }} variant="body1">{data[item]}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {image.map((item) => {
                        return <>
                          <Typography variant="h6">
                            {item.toUpperCase()}<img src={data[item]} sx={{ float: "right" }} />
                          </Typography>
                          <Divider sx={{ mb: 2 }} />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {feature.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right", color: data[item] ? 'green' : 'red' }}
                              variant="body1">{data[item] ? 'true' : 'false'}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {miscellanous.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right" }}
                              variant="body1">{data[item]}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {inventory.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right" }}
                              variant="body1">{data[item]}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {seo.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right" }}
                              variant="body1">{data[item]}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                    <Stack sx={{ padding: "5%", paddingTop: '1%' }}>
                      {extra.map((item) => {
                        return <>
                          <Typography variant="body1">
                            {item}<Typography sx={{ float: "right" }}
                              variant="body1">{data[item]}</Typography>
                          </Typography>
                          <Divider />
                        </>
                      })}
                    </Stack>
                  </TabPanel>
                </Box>
              </Grid>

            </Grid>
          </>
            : <Box sx ={{display : 'block', margin : 'auto', width : 'max-content'}}><CircularProgress /></Box>}
            {/* More Information ends */}

            {/* Related Products */}

            <Grid container className="moreInfo">
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 500 }} variant="h4">
                  Related Products
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Carousel
                  dotListClass="custom-dot-list-style"
                  keyBoardControl={true}
                  autoPlaySpeed={1000}
                  ssr={true}
                  className="detailsCarsole"
                  responsive={responsive}
                >
                  {relatedProducts.map((article, index) => {
                    return (
                      <Card
                        component={Link}
                        to={`/details/${article.SKU}/${article.product_title}/${article.category_name}`}
                        className="card" key={index} sx={{ maxWidth: 280, minHeight: 400, maxHeight: 400, boxShadow: 2 }}>
                        <CardActionArea>
                          <CardMedia
                            className="cardMedia"
                            component="img"
                            height="200"
                            image={article.product_image[0] || defaultIMG}
                            alt="Product_image"
                          />
                          <CardContent>
                            <Typography className='productTitle' sx = {{fontWeight : 'bolder'}} variant="h6" component="div">
                              {article.product_title}
                            </Typography>
                            <Typography sx = {{mt:1}} className='productTitle' variant="body1"  component="div">
                              {article.product_description}
                            </Typography>
                            <Typography sx = {{mt:1}} variant="body1" >
                               ({article.discount_limit}% OFF)
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              <del>&#8377; {article.selling_price}</del>
                            </Typography>
                            <Typography variant="h6" sx = {{fontWeight : 'bolder'}} color="text.secondary">
                            &#8377; {article.selling_price-(article.selling_price/100)*article.discount_limit}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  })}
                </Carousel>

              </Grid>
            </Grid>

            {/* Related Products Ends */}
          </>
          );
}



     