import React from "react"
import { BsArrowRight } from "react-icons/bs"
import serviceOne from "../assets/images/serviceOne.png"
import serviceTwo from "../assets/images/serviceTwo.png"
import serviceThree from "../assets/images/serviceThree.png"
import serviceFour from "../assets/images/serviceFour.png"
import Fade from "react-reveal/Fade"

const OurServices = () => {
  return (
    <div className="py-8 bg-bgBlue">
      <div
        className="max-w-6xl px-8 md:px-8 mx-auto pb-12"
        //   style={{ height: "100vh" }}
      >
        <div className="flex items-baseline">
          <h2 className="text-black-900 font-semibold md:text-5xl  text-3xl md:mt-20">
            Our Services
          </h2>
          <div className="w-16 h-1 ml-2 bg-blue-500"></div>
        </div>
        {/* Item one  */}
        <Fade left>
          <div className="flex mt-8 p-8 justify-around items-center  md:flex-row flex-col">
            <div>
              <h2 className="font-semibold text-2xl leading-8">
                App Development and <br /> Modernization
              </h2>
              <p className="mt-2">
                Planning to convert monolithic application to
                <br />
                microservices. Let's check our offering
              </p>
              <BsArrowRight className="mt-8 text-5xl font-normal" />
            </div>
            <img
              src={serviceOne}
              alt="wall"
              className="md:w-5/12 max-w-full md:order-1"
            />
          </div>
        </Fade>
        {/* Item second  */}
        <Fade right>
          <div className="flex mt-8 p-8 justify-around items-center  md:flex-row flex-col">
            <div className="md:order-2">
              <h2 className="font-semibold text-2xl leading-8">
                Application Consulting <br /> & Testing
              </h2>
              <p className="mt-2">
                We help you to architect your application and
                <br />
                select right set of tools and services.
              </p>
              <button className="my-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-10 py-4  rounded-md uppercase text-sm">
                Know More
              </button>
            </div>
            <img
              src={serviceTwo}
              alt="wall"
              className="md:w-5/12 max-w-full md:order-1"
            />
          </div>
        </Fade>
        {/* Item third  */}
        <Fade left>
          <div className="flex mt-8 p-8 justify-around items-center  md:flex-row flex-col">
            <div>
              <h2 className="font-semibold text-2xl leading-8">
                DevOps as a Services
              </h2>
              <p className="mt-2 ">
                Our expertise in major DevOps tools can help
                <br />
                customers to implement DevOps as a practice in <br />
                their organization.
              </p>
              <BsArrowRight className="mt-8 text-5xl font-normal" />
            </div>
            <img
              src={serviceThree}
              alt="wall"
              className="md:w-5/12 max-w-full"
            />
          </div>
        </Fade>
        {/* Item four */}
        <Fade right>
          <div className="flex my-8 p-8 justify-around items-center  md:flex-row flex-col">
            {" "}
            <div className="md:order-2">
              <h2 className="font-semibold text-2xl leading-8">
                Cloud Manage Services
              </h2>
              <p className="mt-2 ">
                We develop. Implement and Manage
                <br />
                workloads on all major cloud platforms
              </p>
              <BsArrowRight className="mt-8 text-5xl font-normal" />
            </div>
            <img
              src={serviceFour}
              alt="wall"
              className="md:w-5/12 max-w-full md:order-1"
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default OurServices
