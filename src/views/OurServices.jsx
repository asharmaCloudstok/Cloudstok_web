import React from "react"
import { BsArrowRight } from "react-icons/bs"
import appimg from "../assets/images/phone.jpg"

const OurServices = () => {
  return (
    <div className="py-8 bg-blue-100">
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
          <img src={appimg} alt="wall" className="md:w-5/12 max-w-full md:order-1" />
        </div>
        {/* Item second  */}
        <div className="flex my-8 p-8 justify-around items-center  md:flex-row flex-col">
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
          <img src={appimg} alt="wall" className="md:w-5/12 max-w-full md:order-1" />
        </div>
        {/* Item third  */}
        <div className="flex my-8 p-8 justify-around items-center  md:flex-row flex-col">
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
          <img src={appimg} alt="wall" className="md:w-5/12 max-w-full" />
        </div>
        {/* Item four */}
        <div className="flex mt-8 p-8 justify-around items-center  md:flex-row flex-col">
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
          <img src={appimg} alt="wall" className="md:w-5/12 max-w-full md:order-1" />
        </div>
      </div>
    </div>
  )
}

export default OurServices
