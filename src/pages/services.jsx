import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Layout from "../components/Layout"
import Pagename from "../components/pagename/Pagename"
import ServiceCard from "../components/servicecard/ServiceCard"
import SuccessCard from "../components/servicecard/SuccessCard"

const Services = () => {
  const data = [
    {
      head: "Application Development and Modernization",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
    },
    {
      head: "Application Testing and Consulting",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
    },
    {
      head: "DevOpas as a service",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
    },
    {
      head: "Cloud Manage Services",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totamLorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam.",
    },
  ]
  return (
    <>
      <Layout>
        <Pagename name={"Services"} />
        <div
          className="pt-0.5 pb-12 w-full bg-blue-100" //   style={{ height: "100vh" }}
        >
          <div className="max-w-6xl px-8 md:px-8 mx-auto">
            <Breadcrumb route1={"Services"} />
           <div className="grid sm:grid-cols-2 gap-8 md:mt-12">
               {data.map(el => <ServiceCard heading={el.head} paragraph={el.para}></ServiceCard>)}
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
              <SuccessCard />
              <SuccessCard />
              <SuccessCard />
            </div>
            <div className="flex justify-center">
              <button
                // onClick={() => setShowModal(true)}
                className="mt-12 bg-gradient-to-r to-cyan-500 from-blue-500 text-white font-bold px-6 py-4 rounded-md uppercase text-md w-48"
              >
                More Stories
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Services
