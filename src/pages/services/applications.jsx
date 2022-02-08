import React from "react"
import Breadcrumb from "../../components/Breadcrumb"
import Layout from "../../components/Layout"
import Pagename from "../../components/pagename/Pagename"
import ServiceCard from "../../components/servicecard/ServiceCard"
import SuccessCard from "../../components/servicecard/SuccessCard"
import a from "../../assets/images/dat1.png"
import c from "../../assets/images/dat3.png"
import b from "../../assets/images/dat2.png"
import d from "../../assets/images/dat4.png"
import e from "../../assets/images/dat5.png"
import f from "../../assets/images/dat6.png"
import node from "../../assets/images/node.jpg"
import react from "../../assets/images/react.jpg"
import android from "../../assets/images/android.jpg"
import angular from "../../assets/images/angular.jpg"
import aurora from "../../assets/images/aurora.jpg"
import awsDynamo from "../../assets/images/awsDynamo.jpg"
import ios from "../../assets/images/ios.jpg"
import java from "../../assets/images/java.jpg"
import mongoDb from "../../assets/images/mongoDb.jpg"
import mysql from "../../assets/images/mysql.jpg"
import sqlserver from "../../assets/images/sqlserver.jpg"
import php from "../../assets/images/php.jpg"
import redshift from "../../assets/images/redshift.jpg"
import CloudOne from "../../assets/images/cloudOne.png"
import CloudThree from "../../assets/images/CloudThree.png"
import CloudTwo from "../../assets/images/cloudTwo.png"
import Fade from "react-reveal/Fade"

const Applications = () => {
  const data = [
    {
      head: "Application Development and Modernization",
      para: " Planning to convert monolithic application to microservices. Let's check our offering.",
      route: "/services/applications",
    },
    {
      head: "Application Testing and Consulting",
      para: "We help you to architect your application and select right set of tools and services...",
      route: "/services/apptesting",
    },
    {
      head: "DevOps as a service",
      para: "Our expertise in major DevOps tools can help customers to implement DevOps as a practice in their organization.",
      route: "/services/devops",
    },
    {
      head: "Cloud Manage Services",
      para: "We Develop, Implement and Manage Workloads on all major cloud platforms.",
      route: "/services/cloud",
    },
  ]

  const imgdata = [
    { appimg: a },
    { appimg: b },
    { appimg: c },
    { appimg: d },
    { appimg: e },
    { appimg: f },
  ]
  const techdata = [
    { techimg: node },
    { techimg: react },
    { techimg: angular },
    { techimg: php },
    { techimg: java },
    { techimg: android },
    { techimg: ios },
    { techimg: mongoDb },
    { techimg: awsDynamo },
    { techimg: aurora },
    { techimg: redshift },
    { techimg: mysql },
    { techimg: sqlserver },
  ]

  return (
    <Layout>
      <Pagename
        name={"Services"}
        servicename={"Application Development and Modernization"}
      />
      <div className="bg-bgBlue">
        <div className="max-w-6xl px-8 md:px-8 mx-auto pb-20">
          <Breadcrumb
            route1={"Services"}
            route2={"Application Development and Modernization"}
          />
          <h2 className="text-3xl font-semibold mt-10">
            Application Development and Moderization
          </h2>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              Market are fulfilled with plethora of options. Our Consultant will
              help you to create, find and manage your application end-to-end.
              We offer Services of Application Development. Application
              Monitoring and Management Support for the Application. No
              ecalations and hassle as Cloudstok's Team will help you throught
              the process to achieve your business goals.
            </p>
          </Fade>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Our expertise in development makes sure that you get the product are
            you looking for <br /> by following right type of developement
            methodology
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 place-content-center my-4">
            <Fade big>
              {imgdata.map(el => (
                <img src={el.appimg} alt="" className="w-full" />
              ))}
            </Fade>
          </div>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            We support and develop applications using latest technologies along
            with popular <br />
            databases in the market.
          </h3>
          <div className="grid md:grid-cols-7 grid-cols-3 gap-4 mt-4 md:mb-8 place-items-center">
            {techdata.map((e, i) =>
              i< 7 ? (
                <Fade left>
                  <img src={e.techimg} alt="" className="sm:w-full max-w-sm " />
                </Fade>
              ) : (
                <Fade right>
                  <img src={e.techimg} alt="" className="sm:w-full max-w-sm " />
                </Fade>
              )
            )}
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-8 md:px-8 mx-auto">
        <div className="flex md:mt-20 mt-12 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
          <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
            Let's Check Our Services
          </h2>
          <div className="w-16 h-1 ml-2 bg-blue-500"></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 md:mt-12">
          {data.map((el, index) =>
            index === 0 || index === 2 ? (
              <Fade left>
                <ServiceCard
                  heading={el.head}
                  paragraph={el.para}
                  route={el.route}
                ></ServiceCard>
              </Fade>
            ) : index === 1 || index === 3 ? (
              <Fade right>
                <ServiceCard
                  heading={el.head}
                  paragraph={el.para}
                  route={el.route}
                ></ServiceCard>
              </Fade>
            ) : null
          )}
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
  )
}

export default Applications
