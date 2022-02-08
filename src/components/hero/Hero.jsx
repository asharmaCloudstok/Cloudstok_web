import React from "react"
import herobg from "../../assets/images/a.png"
import Fade from 'react-reveal/Fade';
const Hero = () => {
  const divStyle = { height: "calc(100vh - 80px)" }
  return (
    <section className="hero bg-bgBlue" style={divStyle}>
      <div className="max-w-6xl mx-auto md:mt-0 py-4 px-4 sm:px-6 md:px-8 justify-center items-center flex md:justify-between md:items-center h-full flex-col md:flex-row">
        <Fade left>
          <div className="md:w-1/2 left-0">
            <h1 className="font-semibold md:text-5xl text-3xl my-4 pt-8 sm:pt-0">
              IT Consultation
            </h1>

            <p className="font-normal text-md leading-8">
              Market are fulfilled with plethora of options. Our Consultant will
              help you to create, find and manage your application end-to-end.
              We offer Services of Application Development. Application
              Monitoring and Management Support for the Application.
            </p>
            <button className="my-16 bg-gradient-to-r p-0.5 from-gradientBlueOne to-gradientBlueTwo text-white font-medium rounded-md uppercase text-sm">
              <div className=" bg-white text-black px-4 py-2 hover:bg-gradient-to-r p-1 from-gradientBlueOne to-gradientBlueTwo hover:text-white rounded-md">
              Get Started
              </div>
            </button>
          </div>
        </Fade>
        <Fade right>
        <img src={herobg} alt="" className="md:w-1/2 sm:h-auto h-56" />
        </Fade>
      </div>
    </section>
  )
}

export default Hero
