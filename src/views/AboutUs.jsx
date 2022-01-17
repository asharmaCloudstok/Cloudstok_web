import React from "react"
import "./about.css"
import {FaTools} from 'react-icons/fa'
import {RiCustomerService2Line} from 'react-icons/ri'
const AboutUs = () => {

  const userData = [
    { rank: 102, name: "VMs Launched" },
    { rank: 352, name: "Cloud Skill Sets" },
    { rank: 12, name: "Customers Served" },
    { rank: 6, name: "Application Delivered" },
    { name: "Develops as a service" },
    { name: "24*7 Next Gen Managed Support" },
  ]

  return (
    <div
      className="max-w-7xl px-8 md:px-8 mx-auto py-12"
      //   style={{ height: "100vh" }}
    >
      <h2 className="text-black-900 font-semibold text-5xl md:mt-28 pb-12 about_title">
        About Us
      </h2>
      <div className="flex md:flex-row flex-col md:justify-between">
        <img
          className="h-1/2 max-w-full"
          width={"500px"}
          src="https://www.mckinsey.com/~/media/mckinsey/about%20us/social%20responsibility/client%20selection/about-us_client-selection_thumb_2293401013_1536x1536.jpg"
          alt="client"
        />

        <div className="md:pl-12">
          <h4 className="text-blue-400 text-2xl md:my-0 mt-8">
            Accelerate your journey to digitalization
          </h4>
          <p className="text-md leading-8 mt-8 text-justify">
            Leader from the Cloud industry have come together to dissipate
            problems that were faced in the market. We specialize in building
            microservice architecture which includes performing different
            opeartions individually focusing on developing a single software
            system with defined operations and bringing them into effective
            action. Our team will ensure that each microservice is carefully
            migrated, deployed and managed for seamless IT infrastructure.
          </p>
          <p className="text-md leading-8 mt-8 text-justify">
            Witnessing the problematic areas in Cloud Computing. Cloudstok was
            formed as the brainchild of leading indudstry experts. Along with
            the proven exprtise in all major technologies, our spot-on
            consulting will help you in an easy transition to digital
            infrastructure
          </p>
          <button className="mt-8 bg-blue-500 text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-56">
            more about us
          </button>
        </div>
      </div>
      <div className="flex flex-wrap my-16 justify-between">
          <div className="text-center p-4  md:px-4">
            <h1 className="text-blue-500 font-bold text-5xl">102+</h1>
            <p className="text-center mt-4 leading-8 text-xl ">VM's <br />
                Launched
            </p>
          </div>
          <div className="text-center p-4 md:px-4">
            <h1 className="text-cyan-400 font-bold text-5xl">352+</h1>
            <p className="text-center mt-4 leading-8 text-xl ">Cloud <br />
                Skill Sets
            </p>
          </div>
          <div className="text-center p-4 md:px-4">
            <h1 className="text-blue-500 font-bold text-5xl">12+</h1>
            <p className="text-center mt-4 leading-8 text-xl ">Customers<br />
                Served
            </p>
          </div>
          <div className="text-center p-4 md:px-4">
            <h1 className="text-cyan-400 font-bold text-5xl">6+</h1>
            <p className="text-center mt-4 leading-8 text-xl ">Applications <br />
                Delivered
            </p>
          </div>
          <div className="text-center p-4 md:px-4 flex flex-col items-center">
            <FaTools className="text-5xl text-blue-500"/>
            <p className="text-center mt-4 leading-8 text-xl ">VM's <br />
                Launched
            </p>
          </div>
          <div className="text-center p-4 md:px-4 flex flex-col items-center">
            <RiCustomerService2Line className="text-cyan-400 font-bold text-5xl"/>
            <p className="text-center mt-4 leading-8 text-xl ">VM's <br />
                Launched
            </p>
          </div>
      </div>
    </div>
  )
}

export default AboutUs