

// // // import React from 'react';
// // // import { Link as RouterLink } from 'react-router-dom';
// // // import {
// // //   AppBar,
// // //   Toolbar,
// // //   Typography,
// // //   Button,
// // //   Box,
// // //   IconButton,
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   useTheme,
// // //   useMediaQuery,
// // //   Divider
// // // } from '@mui/material';
// // // import MenuIcon from '@mui/icons-material/Menu';

// // // const Navbar = () => {
// // //   const [drawerOpen, setDrawerOpen] = React.useState(false);
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// // //   const toggleDrawer = (open) => () => {
// // //     setDrawerOpen(open);
// // //   };

// // //   const navItems = [
// // //     { label: 'Upload Products', path: '/Uploadproducts' },
// // //     { label: 'Create Account', path: '/register' },
// // //     { label: 'Login', path: '/login' },
// // //     { label: 'Cart', path: '/Cart' },
// // //     { label: 'Dashboard', path: '/Admindashboard' }
// // //   ];

// // //   const drawerList = (
// // //     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
// // //       <Typography variant="h6" sx={{ p: 2, fontWeight: 600 }}>
// // //         🚗 MJ Exotics
// // //       </Typography>
// // //       <Divider />
// // //       <List>
// // //         {navItems.map((item) => (
// // //           <ListItem
// // //             button
// // //             key={item.label}
// // //             component={RouterLink}
// // //             to={item.path}
// // //           >
// // //             <ListItemText primary={item.label} />
// // //           </ListItem>
// // //         ))}
// // //       </List>
// // //     </Box>
// // //   );

// // //   return (
// // //     <>
// // //       <AppBar
// // //         position="static"
// // //         sx={{
// // //           background: 'linear-gradient(90deg,rgb(245, 12, 12),rgb(7, 7, 7))', // Bright Aqua background color
// // //           boxShadow: 3
// // //         }}
// // //       >
// // //         <Toolbar sx={{ justifyContent: 'space-between' }}>
// // //           <Typography
// // //             variant="h5"
// // //             component={RouterLink}
// // //             to="/"
// // //             sx={{
// // //               textDecoration: 'none',
// // //               color: '#fff',
// // //               fontWeight: 700,
// // //               letterSpacing: '1px'
// // //             }}
// // //           >
// // //             🚗 MJ Exotics
// // //           </Typography>

// // //           {isMobile ? (
// // //             <>
// // //               <IconButton
// // //                 edge="end"
// // //                 color="inherit"
// // //                 aria-label="menu"
// // //                 onClick={toggleDrawer(true)}
// // //                 sx={{ ml: 'auto' }}
// // //               >
// // //                 <MenuIcon />
// // //               </IconButton>
// // //               <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
// // //                 {drawerList}
// // //               </Drawer>
// // //             </>
// // //           ) : (
// // //             <Box>
// // //               {navItems.map((item, idx) => (
// // //                 <Button
// // //                   key={item.label}
// // //                   component={RouterLink}
// // //                   to={item.path}
// // //                   sx={{
// // //                     mx: 1,
// // //                     color: '#fff',
// // //                     fontWeight: 500,
// // //                     borderBottom: idx === 0 ? '2px solid #fff' : 'none',
// // //                     '&:hover': {
// // //                       backgroundColor: 'rgba(8, 122, 252, 0.75)',
// // //                       borderRadius: '8px'
// // //                     }
// // //                   }}
// // //                 >
// // //                   {item.label}
// // //                 </Button>
// // //               ))}
// // //             </Box>
// // //           )}
// // //         </Toolbar>
// // //       </AppBar>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;


// // // // components/Navbar.jsx
// // // import React from 'react';
// // // import '../App.css';

// // // const Navbar = () => (
// // //   <nav className="navbar">
// // //     <div className="navbar-logo">MJ Exotics</div>
// // //     <ul className="navbar-links">
// // //       <li><a href="/">Buy</a></li>
// // //       <li><a href="/sell">Sell</a></li>
// // //       <li><a href="/compare">Compare</a></li>
// // //       <li><a href="/reviews">Reviews</a></li>
// // //     </ul>
// // //     <div className="navbar-auth">
// // //       <a href="/login">Login</a> | <a href="/register">Register</a>
// // //     </div>
// // //   </nav>
// // // );

// // // export default Navbar;



// // import React from 'react';
// // import { FaUserPlus, FaSignInAlt, FaCar, FaExchangeAlt, FaListUl, FaStar, FaShoppingBag } from 'react-icons/fa';
// // import '../App.css';
// // import { FaCartShopping, FaHandshakeSlash,  } from 'react-icons/fa6';

// // const Navbar = () => (
// //   <nav className="navbar">
// //     <div className="navbar-logo">
// //       <FaCar className="icon-logo" /> MJ Exotics
// //     </div>
// //     <ul className="navbar-links">
// //       <li><a href="/Getproducts"><FaCartShopping /> Buy</a></li>
      
// //       <li><a href="/Admindashboard"><FaHandshakeSlash/> Dashboard</a></li>
// //         <li><a href="/Cart"><FaShoppingBag /> Cart</a></li>
// //       <li><a href="/Uploadproducts"><FaExchangeAlt /> Sell</a></li>
// //       <li><a href="/compare"><FaListUl /> Compare</a></li>
// //       <li><a href="/reviews"><FaStar /> Reviews</a></li>
// //     </ul>
// //     <div className="navbar-auth">
// //       <a href="/login"><FaSignInAlt /> Login</a>
// //       <a href="/register"><FaUserPlus /> Register</a>
// //     </div>
// //   </nav>
// // );

// // export default Navbar;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUserPlus, FaSignInAlt, FaCar, FaExchangeAlt, FaListUl, FaStar, FaShoppingBag,  } from 'react-icons/fa';
// import { FaHandshakeSlash } from 'react-icons/fa6';
// import { CartContext } from '../CartContext';
// import '../App.css';

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <Link className="navbar-brand d-flex align-items-center" to="/">
//         <FaCar className="me-2" /> MJ Exotics
//       </Link>
      
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
//         <li className="nav-item">
//           <Link className="nav-link" to="/Getproducts"><FaShoppingBag className="me-1" />Buy</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Admindashboard"><FaHandshakeSlash className="me-1" />Dashboard</Link>
//         </li>
//         <li className="nav-item position-relative">
//           <Link className="nav-link" to="/Cart">
//             <FaShoppingBag className="me-1" />
//             Cart
//             {cartCount > 0 && (
//               <span className="badge bg-danger ms-1">{cartCount}</span>
//             )}
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Uploadproducts"><FaExchangeAlt className="me-1" />Sell</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/compare"><FaListUl className="me-1" />Compare</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/reviews"><FaStar className="me-1" />Reviews</Link>
//         </li>
//       </ul>

//       <div className="d-flex">
//         <Link className="btn btn-outline-light me-2" to="/login"><FaSignInAlt className="me-1" />Login</Link>
//         <Link className="btn btn-light text-dark" to="/register"><FaUserPlus className="me-1" />Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt, FaCar, FaExchangeAlt, FaListUl, FaStar, FaShoppingBag } from 'react-icons/fa';
import { FaHandshakeSlash } from 'react-icons/fa6';
import { useCart } from '../CartContext';

import '../App.css';

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaCar className="me-2" /> MJ Exotics
        </Link>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/Getproducts"><FaShoppingBag className="me-1" />Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admindashboard"><FaHandshakeSlash className="me-1" />Dashboard</Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/Cart">
                <FaShoppingBag className="me-1" />
                Cart
                {cartCount > 0 && (
                  <span className="badge bg-danger ms-1">{cartCount}</span>
                )}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaExchangeAlt className="me-1" />Details</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Uploadproducts"><FaExchangeAlt className="me-1" />Sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaListUl className="me-1" />Compare</Link>
            </li>
            
            <li className="nav-item">

              <Link className="nav-link" to="/Reviewsection"><FaStar className="me-1" />Reviews</Link>
            </li>
            <li className="nav-item">
  <Link to="/wishlist" className="nav-link">
    Wishlist
  </Link>
  
</li>

          </ul>

          {/* Auth buttons */}
          <div className="d-flex mt-2 mt-lg-0">
            <Link className="btn btn-outline-light me-2" to="/login"><FaSignInAlt className="me-1" />Login</Link>
            <Link className="btn btn-light text-dark" to="/register"><FaUserPlus className="me-1" />Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
