import React from "react"
import herobg from "../../assets/images/hero_bg.jpg"
import "../hero/hero.css"

const Hero = () => {
  const divStyle = { height: "calc(100vh - 80px)" }
  return (
    <section className="hero bg-bgBlue" style={divStyle}>
      <div className="max-w-6xl mx-auto md:mt-0 py-4 px-4 sm:px-6 md:px-8 justify-center items-center flex md:justify-between md:items-center h-full flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="font-semibold md:text-5xl text-3xl my-4 ">
            IT Consultation
          </h1>
          <p className="font-normal text-md leading-8">
            Market are fulfilled with plethora of options. Our Consultant will
            help you to create, find and manage your application end-to-end. We
            offer Services of Application Development. Application Monitoring
            and Management Support for the Application.
          </p>
          <button className="my-16 bg-gradient-to-r from-gradientBlueOne to-gradientBlueTwo text-white font-medium px-10 py-4 rounded-md uppercase text-sm">
            Get Started
          </button>
        </div>
          <img src={herobg} alt="" className="md:w-1/2 md:h-auto h-56" />
        
      </div>
    </section>
  )
}

export default Hero
