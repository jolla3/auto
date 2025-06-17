
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// // import Login from './components/Login';
// // import Register from './components/Register';
// // import Getproducts from './components/Getproducts'; // Uncomment when ready
// // import Cart from './components/Cart'; // Uncomment when ready from './components/Cart';
// // import Admindashboard from './components/Admindashboard'; // Uncomment when ready
// // import Makepayment from './components/Makepayment'; // Uncomment when ready
// // import Uploadproducts from './components/Uploadproducts'; 
// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         {/* Header Section */}
// //         <header className="bg-dark text-white p-3">
// //           <h1 className="text-center">MJ EXOTICS</h1>
// //         </header>

// //         {/* Navbar Section */}
// //         {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //           <div className="container-fluid">
// //             <Link className="navbar-brand" to="/">MJ Exotics</Link>
// //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //               <span className="navbar-toggler-icon"></span>
// //             </button>
// //             <div className="collapse navbar-collapse" id="navbarNav">
// //               <ul className="navbar-nav">
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Register">Register</Link>
// //                 </li>
                
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Getproducts"></Link>
// //                 </li>
                
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Login">Login</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Uploadproducts">Upload Products</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Makepayment">Make Payment</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/Admindashboard">Dashboard</Link>
// //                 </li>
// //                 {/* Other navigation links (like Upload Products, Make Payment) can be added here */}
// //               {/* </ul> */}
// //             {/* </div>  */}
// //           {/* </div> */}
// //         {/* </nav> */}

// //         {/* Main Content Routes */}
// //         <Routes>
// //           <Route path="/Register" element={<Register />} />
// //           {/* <Route path="/Getproducts" element={<Getproducts />} /> */}
// //           <Route path="/Cart" element={<Cart />} />
// //           {/* Uncomment the following line when the component is ready */}
// //           {/* <Route path="/Getproducts" element={<Getproducts />} /> */}
// //           {/* <Route path="/Cart" element={<Cart />} /> */}
          
// //           {/* Uncomment the following line when the component is ready */}
// //           {/* <Route path="/Admindashboard" element={<Admindashboard />} /> */}

// //           <Route path="/Login" element={<Login />} />
// //           <Route path="/Makepayment" element={<Makepayment />} />
// //           <Route path="/" element={<Getproducts />} />
// //           {/* <Route path="/Getproducts" element={<Getproducts />} /> */}
// //           <Route path="/Cart" element={<Cart />} />

          

// //           <Route path="/Admindashboard" element={<Admindashboard />} />
// //           <Route path="/Uploadproducts" element={<Uploadproducts />} />  
// //           {/* Add other routes like /Uploadproducts and /Makepayment when ready */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Login from './components/Login';
// import Register from './components/Register';
// import Getproducts from './components/Getproducts';
// import Home from './components/Home';
// import Cart from './components/Cart';
// import Admindashboard from './components/Admindashboard';
// import Makepayment from './components/Makepayment';
// import Uploadproducts from './components/Uploadproducts';
// import Navbar from './components/Navbar';
// import { CartProvider } from './CartContext'; // ✅ NEW IMPORT

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//     <div className="App">

//     <header className="app-header">
//     <h1 className="app-title">AutoLuxe</h1>
//     <Navbar />
//     </header>

    

// {/*         

//           <header className="bg-dark text-white p-3">
//             <h1 className="text-center">MJ EXOTICS</h1>
//           </header> */}

//           {/* Routes */}
//           <Routes>
//             <Route path="/Register" element={<Register />} />
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/Getproducts" element={<Getproducts />} />
//             <Route path="/" element={<Home />} />
//             <Route path="/Makepayment" element={<Makepayment />} />
//             <Route path="/" element={<Getproducts />} />
//             <Route path="/Admindashboard" element={<Admindashboard />} />
//             <Route path="/Uploadproducts" element={<Uploadproducts />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Login from './components/Login';
// import Register from './components/Register';
// import Getproducts from './components/Getproducts';
// import Home from './components/Home';
// import Cart from './components/Cart';
// import Admindashboard from './components/Admindashboard';
// import Makepayment from './components/Makepayment';
// import Uploadproducts from './components/Uploadproducts';
// import Navbar from './components/Navbar';
// import ReviewsSection from './components/ReviewsSection';
// import FeaturedCars from './components/FeaturedCars';
// import CarBot from './components/CarBot';
// import { CartProvider } from './CartContext';
// import Wishlist from "./components/Wishlist";

// // import Footer from './components/Footer';
// import FloatingCarBot from './components/FloatingCarBot';

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <div className="App">
//           {/* App Header */}
//           <header className="bg-dark text-white p-3 text-center">
//             <h1 className="app-title">MJ-AUTO</h1>
//             <Navbar />
//           </header>

//           {/* Main App Routes */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Home" element={<Home />} /> 
//             <Route path="/FeaturedCars" element={<Getproducts />} />
//             <Route path="/FloatingCarBot" element={<FloatingCarBot />} />
//             <Route path="/CarBot" element={<CarBot />} />
//             <Route path="/wishlist" element={<Wishlist />} />

//             <Route path="/Register" element={<Register />} />
//             {/* <Route path="/Getproducts" element={<Getproducts />} /> */}
//             <Route path="/FeaturedCars" element={<FeaturedCars />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/Getproducts" element={<Getproducts />} />
//             <Route path="/ReviewsSection" element={<ReviewsSection />} />
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/Makepayment" element={<Makepayment />} />
//             <Route path="/Admindashboard" element={<Admindashboard />} />
//             <Route path="/Uploadproducts" element={<Uploadproducts />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toastify CSS

import Login from './components/Login';
import Register from './components/Register';
import Getproducts from './components/Getproducts';
import Home from './components/Home';
import Cart from './components/Cart';
import Admindashboard from './components/Admindashboard';
import Makepayment from './components/Makepayment';
import Uploadproducts from './components/Uploadproducts';
import Navbar from './components/Navbar';
import ReviewSection from './components/Reviewsection';
import FeaturedCars from './components/FeaturedCars';
import CarBot from './components/CarBot';
import Wishlist from './components/Wishlist';
import FloatingCarBot from './components/FloatingCarBot';
import CarDetails  from './components/CarDetails'; // ✅ Featured Cars import
import RelatedCars from "./components/RelatedCars";
import BrandPage from './components/Brandpage'; // ✅ Brand Page import
import FuelFilter from './components/FuelFilter'; 
import BrandsPage from "./components/BrandsPage";
import { CartProvider } from './CartContext';
import { ToastContainer } from 'react-toastify'; // ✅ Toast container import

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          {/* App Header */}
          <header className="bg-dark text-white p-3 text-center">
            <h1 className="app-title">MJ-AUTO</h1>
            <Navbar />
          </header>

          {/* Toast Notification Container */}
          <ToastContainer position="top-right" autoClose={3000} />

          {/* Main App Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/FeaturedCars" element={<Getproducts />} /> */}
            <Route path="/FloatingCarBot" element={<FloatingCarBot />} />
            <Route path="/CarBot" element={<CarBot />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/Relatedcars" element={<RelatedCars />} /> ✅ Car Details Route
            <Route path="/brand/:brandName" element={<BrandPage />} /> {/* Brand Page Route */}
            <Route path="/FuelFilter" element={<FuelFilter />} /> {/* Fuel Filter Route */}
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="FeaturedCars" element={<FeaturedCars />} />

            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Getproducts" element={<Getproducts />} />
            <Route path="/ReviewSection" element={<ReviewSection />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/car-details/:id" element={<CarDetails />} /> {/* Cart with ID for specific car */}
            <Route path="/Makepayment" element={<Makepayment />} />
            <Route path="/Admindashboard" element={<Admindashboard />} />
            <Route path="/Uploadproducts" element={<Uploadproducts />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
