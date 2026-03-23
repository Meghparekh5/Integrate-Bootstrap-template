import React from "react";
import { GoArrowRight } from "react-icons/go";

function Hero() {
    return (
        <div className="hero-section d-flex align-items-center py-250" style={{ backgroundImage: "url(src/assets/Images/gg.jpg)",  backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" text-white ms-5 ps-5">
                <h2 className="lead text-center text-white" style={{color:"#cbcbcb" ,fontSize:"16px", border:"1px solid none", backgroundColor:"#ff0336",borderRadius:"5px",padding:"10px" ,width:"228px"}}>Find Your Body</h2>
                <h2 className="display-4 fw-bold" style={{fontSize:"48px"}}>STRONGER WITH </h2>
                <h2 className="display-4 -bold"style={{fontSize:"48px"}}>FIT & PERFECT</h2>
                <p className="lead" style={{color:"#cbcbcb" ,fontSize:"16px"}}>Gymhen an unknown printer took a galley of type and scrambled.It has survived nknown <br /> printercenturies.</p>
                <a href="/" className="btn btn-danger btn-lg mt-2 fw-bolder" style={{borderRadius:"0px" , backgroundColor:"#ff0336" ,fontFamily:"Roboto" ,fontSize:"14px" ,padding:"13px 30px"}}>Our Classes <GoArrowRight style={{fontSize:"21px"} } /></a>
            </div>
        </div>
    );
}

export default Hero;