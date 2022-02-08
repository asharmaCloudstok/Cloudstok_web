import React from "react"
import Layout from "../../components/Layout"
import Breadcrumb from "../../components/Breadcrumb"
import Pagename from "../../components/pagename/Pagename"
import ServiceCard from "../../components/servicecard/ServiceCard"
import SuccessCard from "../../components/servicecard/SuccessCard"
import CloudOne from "../../assets/images/cloudOne.png"
import CloudThree from "../../assets/images/CloudThree.png"
import CloudTwo from "../../assets/images/cloudTwo.png"
import apptesting from "../../assets/images/apptesting.png"
import Fade from "react-reveal/Fade"

const AppTesting = () => {
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
          <h2 className="text-3xl font-semibold mt-10">
            Application Development and Moderization
          </h2>
          <div className="flex justify-between md:flex-row flex-col">
            <Fade left>
              <p className="my-4 text-gray-600 leading-8 text-md">
                Our consultants will help you create, find and manage your
                application end-to-end. We at CloudStok believe in enabling our
                customers and we believe we can help our customers by providing
                good consultation services. We have a b development team at
                CloudStok which brings the latest technologies into effective
                actions as a part of our solutions. Our b approach towards
                application and infrastructure makes us an optimal choice for
                clients looking for an end to end support. We help customers
                build applications that they are looking and provide insights by
                performing load and performance testing on various parameters.
                We keep in mind three attributes of Performance Testing while
                performing: <br />
                <b className="font-semibold">1. Speed </b>– It determines
                whether the application responds quickly. <br />
                <b className="font-semibold">2. Scalability </b> – It determines
                maximum user load the software application can handle. <br />
                <b className="font-semibold">3. Stability </b>– It determines if
                the application is stable under varying loads.
              </p>
            </Fade>
            <Fade right>
              <img src={apptesting} alt="" className="md:w-2/6 mx-auto" />
            </Fade>
          </div>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Why do we nee Peformance Testing?
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              Performance testing informs the stakeholders about the speed,
              scalability, and stability of their application.
              <br />
              It reveals the necessary improvements needed before the product is
              released in the market. <br />
              Performance Testing also ensures that the software is not running
              slow while several users are using it simultaneously
            </p>
          </Fade>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Types of Performance Testing
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              The different types of performance testing are: <br />
              <b className="font-semibold">Load testing</b> – It checks the
              application’s ability to perform under anticipated user loads. The
              objective is to identify performance bottlenecks before the
              software application goes live. <br />
              <b className="font-semibold">Stress testing</b> – This involves
              testing an application under extreme workloads to see how it
              handles high traffic or data processing. The objective is to
              identify the breaking point of an application. <br />
              <b className="font-semibold">Endurance testing</b> – It is done to
              make sure the software can handle the expected load over a long
              period of time.
              <br />
              <b className="font-semibold">Spike testing </b>– This tests the
              software’s reaction to sudden large spikes in the load generated
              by users. <br />
              <b className="font-semibold">Volume testing</b> – Under Volume
              Testing large no. of. Data is populated in a database and the
              overall software system’s behavior is monitored. The objective is
              to check the software application’s performance under varying
              database volumes. <br />
              <b className="font-semibold">Scalability testing</b> – The
              objective of scalability testing is to determine the software
              application’s effectiveness in scaling up to support an increase
              in user load. It helps plan capacity addition to your software
              system. <br />
              It also checks the inconsistency across different operating
              systems. <br />
              We support major Performance Testing Tools: <br />
              <b className="font-semibold">1. Apache JMeter </b> <br />
              <b className="font-semibold"> 2. LoadRunner </b>
              <br />
              <b className="font-semibold">3. Artillery</b>
            </p>
          </Fade>
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
              className="my-4 bg-gradient-to-r p-0.5 from-gradientBlueOne to-gradientBlueTwo text-white font-medium rounded-md uppercase text-sm"
            >
              <div className=" bg-white text-black px-8 py-4 hover:bg-gradient-to-r p-1 from-gradientBlueOne to-gradientBlueTwo hover:text-white rounded-md">
                More Blogs
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AppTesting
