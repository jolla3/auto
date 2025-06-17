
// pages/Home.jsx
import React from 'react';

// // import { useNavigate } from "react-router-dom";

// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import CarCategories from '../components/CarCategories';
import CarCategories from '../components/CarCategories';
import FeaturedCars from '../components/FeaturedCars';
// import Getproducts from '../components/Getproducts';
// import FeaturedCars from '../components/FeaturedCars';
// import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
// import FloatingCarBot from '../components/FloatingCarBot';
import CarBot from '../components/CarBot';

// import Cart from '../components/Cart';

const Home = () => (
  <>
    {/* <Navbar /> */}
    <HeroSection />
    
    {/* <Cart /> */}
    <CarCategories />
    {/* <Getproducts /> */}
    <FeaturedCars />
    <CarBot />

    {/* < /> */}
    {/* <ReviewsSection /> */}
    {/* <FloatingCarBot /> */}
    
    <Footer />
  </>
);

export default Home;
