import React from "react";
import Navmain from '../components/Navbar';
import Hero from '../components/Hero';
import FitnessSection from '../components/Introduction';
import FeaturedClasses from '../components/Featured-Classes';
import ProgressSection from '../components/Progress';
import BlogSection from '../components/BlogSection';
import BrandSection from '../components/BrandSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Hero/>
            <FitnessSection/>
            <FeaturedClasses/>
            <ProgressSection/>
            <BlogSection/>
            <BrandSection/> 
        </>
    )

}

export default Home;