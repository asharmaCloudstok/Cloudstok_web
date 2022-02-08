import { Link } from "gatsby"
import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Layout from "../components/Layout"
import Pagename from "../components/pagename/Pagename"
import ServiceCard from "../components/servicecard/ServiceCard"
import SuccessCard from "../components/servicecard/SuccessCard"
import CloudOne from "../assets/images/cloudOne.png"
import CloudThree from "../assets/images/CloudThree.png"
import CloudTwo from "../assets/images/cloudTwo.png"
import Fade from "react-reveal/Fade"

const Services = () => {
  const data = [
    {
      head: "Application Development and Modernization",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
      route: "/services/applications",
    },
    {
      head: "Application Testing and Consulting",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
      route: "/services/apptesting",
    },
    {
      head: "DevOps as a service",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
      route: "/services/devops",
    },
    {
      head: "Cloud Manage Services",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
      route: "/services/cloud",
    },
  ]
  return (
    <>
      <Layout>
        <Pagename name={"Services"} />
        <div
          className="pb-8 md:pb-20 w-full bg-bgBlue" //   style={{ height: "100vh" }}
        >
          <div className="max-w-6xl px-8 md:px-8 mx-auto">
            <Breadcrumb route1={"Services"} />
            <div className="grid sm:grid-cols-2 gap-8 md:mt-12">
              {data.map((el, index)=> (
                  <ServiceCard
                    index={index}
                    heading={el.head}
                    paragraph={el.para}
                    route={el.route}
                  ></ServiceCard>
        
              ))}
            </div>
          </div>
        </div>
        <div
          className="pt-8 pb-12 w-full bg-white" //   style={{ height: "100vh" }}
        >
          <div className="max-w-6xl px-8 md:px-8 mx-auto">
            <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
              <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
                Success Stories
              </h2>
              <div className="w-16 h-1 ml-2 bg-blue-500"></div>
            </div>
            <div className="flex justify-between md:flex-row flex-col">
              <SuccessCard image={CloudOne} />
              <SuccessCard image={CloudTwo} />
              <SuccessCard image={CloudThree} />
            </div>
            <div className="flex justify-center">
            <button
              className="mt-8 mb-4 bg-gradient-to-r p-0.5 from-gradientBlueOne to-gradientBlueTwo text-white font-medium rounded-md uppercase text-sm"
            >
              <div className=" bg-white text-black px-8 py-4 hover:bg-gradient-to-r p-1 from-gradientBlueOne to-gradientBlueTwo hover:text-white rounded-md">
                More Stories
              </div>
            </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Services
