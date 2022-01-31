import React from "react"
import Layout from "../../components/Layout"
import Breadcrumb from "../../components/Breadcrumb"
import Pagename from "../../components/pagename/Pagename"
import ServiceCard from "../../components/servicecard/ServiceCard"
import SuccessCard from "../../components/servicecard/SuccessCard"
import CloudOne from "../../assets/images/cloudOne.png"
import CloudThree from "../../assets/images/CloudThree.png"
import CloudTwo from "../../assets/images/cloudTwo.png"
import Loading from "../../components/loading/Loading"

const AppTesting = () => {
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
    <Layout>
      <Pagename
        name={"Services"}
        servicename={"Application Testing and Consulting"}
      />
      <div className="bg-bgBlue">
        <div className="max-w-6xl px-8 md:px-8 mx-auto pb-20">
          <Breadcrumb
            route1={"Services"}
            route2={"Application Testing and Consulting"}
          />
        </div>
        <Loading/>
      </div>
      <div className="max-w-6xl px-8 md:px-8 mx-auto">
        <div className="flex md:mt-20 mt-12 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
          <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
            Let's Check Our Services
          </h2>
          <div className="w-16 h-1 ml-2 bg-blue-500"></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 md:mt-12">
          {data.map(el => (
            <ServiceCard
              heading={el.head}
              paragraph={el.para}
              route={el.route}
            ></ServiceCard>
          ))}
        </div>
      </div>
      <div className="pt-8 pb-12 w-full">
        <div className="max-w-6xl px-8 md:px-8 mx-auto">
          <div className="flex  md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
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
              // onClick={() => setShowModal(true)}
              className="mt-12 bg-gradient-to-r to-cyan-500 from-blue-500 text-white font-bold px-6 py-4 rounded-md uppercase text-md w-48"
            >
              More Blogs
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AppTesting
