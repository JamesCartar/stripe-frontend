import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
// loading bar at the top
import LinearProgress from '@mui/material/LinearProgress';

// navbar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

// icons
import GirlIcon from '@mui/icons-material/Girl';
import ManIcon from '@mui/icons-material/Man';
import DevicesIcon from '@mui/icons-material/Devices';
import DiscountIcon from '@mui/icons-material/Discount';


import { mainContext } from '../context/MainContext';
import Category from '../components/category/Category';
import MyCard from '../components/Card/MyCard';
import { 
  fetchingElectronicSuccessful, 
  fetchingJewelerySuccessful, 
  fetchingMenClothingSuccessful, 
  fetchingWomenClothingSuccessful, 
  startFetching 
} from '../context/MainContextActions';

// styling
import useStyles from './styles';

const actions = [
  { icon: <DiscountIcon />, name: 'Jewelery' },
  { icon: <DevicesIcon />, name: 'Electronics' },
  { icon: <GirlIcon />, name: "Women's Clothes" },
  { icon: <ManIcon />, name: "Men's Clothes" },
];

const pages = ['Jewelery', 'Electronics', "Women's Clothes", "Men's Clothes"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const { dispatch, state } = React.useContext(mainContext);

  const [ open, setOpen ] = React.useState(false);
  const [ currentCategory, setCurrentCategory ] = React.useState('Jewelery');
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  async function fetchProductData(query) {
    return await axios.get(`https://fakestoreapi.com/products/category/${query}`);
  }


  function DispatchThenAndCatch(actions) {
    fetchProductData(currentCategory.toLowerCase())
    .then((res) => {
      dispatch(actions(res.data));
    })
    .catch((e) => console.log(e));
  }

  React.useEffect(() => {
    dispatch(startFetching());
    if(currentCategory === 'Jewelery') {
      DispatchThenAndCatch(fetchingJewelerySuccessful);

    } else if(currentCategory === 'Electronics') {
      DispatchThenAndCatch(fetchingElectronicSuccessful);

    } else if(currentCategory === "Women's Clothing") {
      DispatchThenAndCatch(fetchingWomenClothingSuccessful);

    } else if(currentCategory === "Men's Clothing") {
      DispatchThenAndCatch(fetchingMenClothingSuccessful);
      
    }
  }, [dispatch, currentCategory]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (clickedTab) => {
    if(clickedTab === "Women's Clothes") {
      setCurrentCategory("Women's Clothing");
    } else if(clickedTab === "Men's Clothes") {
      setCurrentCategory("Men's Clothing")
    } else {
      setCurrentCategory(clickedTab)
    }
    handleCloseNavMenu();
  };


  return (
    !state.isFetching ? (
      <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    className={classes.MobilelinkItem}
                    to={`./${page.toLowerCase().replace(' ', '_')}`}
                    key={page}
                    onClick={() => handleClick(page)}
                  >
                    {page}
                  </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link
                  className={classes.linkItem}
                  to={`./${page.toLowerCase().replace(' ', '_')}`}
                  key={page}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to='./my_card'className={classes.linkItem}>My Card</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path='/' element={<Category products={state.products} />} />
        <Route path='/jewelery' element={<Category products={state.products} />} />
        <Route path='/electronics' element={<Category products={state.products} />} />
        <Route path="/women's_clothes" element={<Category products={state.products} />} />
        <Route path="/men's_clothes" element={<Category products={state.products} />} />
        <Route path="/my_card" element={<MyCard products={state.cardProducts} />} />
      </Routes>
      </>
    ) :
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

