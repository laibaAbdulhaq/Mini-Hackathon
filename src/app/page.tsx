import Navbar from "../components/Navbar"
import HeroSection from "@/components/herosection/HeroSection"
import HeroBanner from "@/components/herosection/HeroBanner"
import FeaturedCars from "@/components/featuringcars/FeaturingCars"
import Footer from "./footer/page"
import React from "react"
export const metadata={
  title:"HomePage"
}
const HomePage=()=>{
    return(
     <div>
        <Navbar/>
        <HeroBanner/>
        <HeroSection/>
        <FeaturedCars/>
        <Footer/>
        
     </div>
    )
}
export default HomePage
        