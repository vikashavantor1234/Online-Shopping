import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Product from "../product/Product";
import './product-category.css';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Electronics" {...a11yProps(0)} />
          <Tab label="Mobiles" {...a11yProps(1)} />
          <Tab label="Baby Clothes" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      <div className="product__category">
        <div className="productcategory__row">
          <Product
            id="12321341"
            title="OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)"
            price={31990.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81I5oICiIzL._SX679_.jpg"
          />
          <Product
            id="49538094"
            title="IFB 20 L Solo Microwave Oven  (20PM-MEC2B, BLACK)"
            price={6390}
            rating={4}
            image="https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/a/3/i/-original-imagjnnz2zhkjzan.jpeg?q=70"
          />
          <Product
            id="1234"
            title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3,120+ Sports Modes"
            price={1399.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61y2VVWcGBL._SX679_.jpg"
          />
           <Product
            id="90829331"
            title="Portronics Toad 23 Wireless Optical Mouse with 2.4GHz, USB Nano Dongle"
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/41KuRShR97L._SX679_.jpg"
          />
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="productcategory__row">
          <Product
            id="4903850"
            title="realme 10 Pro 5G (Dark Matter, 128 GB)  (8 GB RAM)"
            price={17999}
            rating={4}
            image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/u/s/-original-imagkp8yreabrzh2.jpeg?q=70"
          />
          <Product
            id="23445930"
            title="MOTOROLA G32 (Mineral Gray, 128 GB)  (8 GB RAM)"
            price={9999}
            rating={3}
            image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/x/e/-original-imagnvvwjsjg7muu.jpeg?q=70"
          />
          <Product
            id="3254354345"
            title="APPLE iPhone 13 (Starlight, 128 GB)"
            price={52499}
            rating={4}
            image="https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
          />
          <Product 
          id="123"
          title="OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)"
          price={33999}
          rating={5}
          image="https://m.media-amazon.com/images/I/6116+vSW+1L._SX679_.jpg"

          />
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="productcategory__row">
          <Product
            id="90829332"
            title="Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants Newborn Baby Boys & Girls Pack of 3"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61k-7wDEdtL._UX679_.jpg"
          />
          <Product
            id="908293"
            title="Baby Flannel Jumpsuit Panda Style Cosplay Clothes Bunting Outfits"
            price={664}
            rating={3}
            image="https://m.media-amazon.com/images/I/61kqhTCKtgL._SX679_.jpg"
          />
          <Product
            id="99"
            title="Bold N Elegant - Be Bold Inside & Elegant Outside Unisex-Child Cotton T-Shirt"
            price={559}
            rating={3}
            image="https://m.media-amazon.com/images/I/512Fau61yGL._UX679_.jpg"
          />
          <Product
            id="90"
            title="Be Bold Inside & Elegant Outside Baby Boy's Cotton Tshirt"
            price={664}
            rating={3}
            image="https://m.media-amazon.com/images/I/51+pCYqU4iL._UX679_.jpg"
          />
        </div>
      </TabPanel>
    </Box>
  );
}
