import React from "react"
import Layout from "../../components/Layout"
import Breadcrumb from "../../components/Breadcrumb"
import Pagename from "../../components/pagename/Pagename"
import ServiceCard from "../../components/servicecard/ServiceCard"
import SuccessCard from "../../components/servicecard/SuccessCard"
import CloudOne from "../../assets/images/cloudOne.png"
import CloudThree from "../../assets/images/CloudThree.png"
import CloudTwo from "../../assets/images/cloudTwo.png"
import roadMap from "../../assets/images/devOpsMap.jpg"
import Fade from "react-reveal/Fade"
import ansible from "../../assets/images/ansible.jpg"
import aws from "../../assets/images/aws.jpg"
import azurearm from "../../assets/images/azurearm.jpg"
import chef from "../../assets/images/chef.jpg"
import circleci from "../../assets/images/circleci.jpg"
import dataDog from "../../assets/images/datadog.jpg"
import gafana from "../../assets/images/gafana.jpg"
import git from "../../assets/images/git.jpg"
import gitlab from "../../assets/images/gitlab.jpg"
import graph from "../../assets/images/graph.jpg"
import kubernetes from "../../assets/images/kubernets.jpg"
import jenkins from "../../assets/images/jenkins.jpg"
import promenthes from "../../assets/images/promenthes.jpg"
import puppet from "../../assets/images/puppet.jpg"
import splunk from "../../assets/images/splunk.jpg"
import terraform from "../../assets/images/terraform.jpg"
import zabbix from "../../assets/images/zabbix.jpg"

const Cloud = () => {

  const imgData = [
    ansible,
    aws,
    azurearm,
    chef,
    circleci,
    dataDog,
    gafana,
    git,
    gitlab,
    graph,
    kubernetes,
    jenkins,
    promenthes,
    puppet,
    splunk,
    terraform,
    zabbix,
  ]
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
      <Pagename name={"Services"} servicename={"DevOps as a Service"} />
      <div className="bg-[#f5fafe]">
        <div className="max-w-6xl px-8 md:px-8 mx-auto pb-20">
          <Breadcrumb route1={"Services"} route2={"DevOps as a Service"} />

          <h2 className="text-3xl font-semibold mt-10">DevOps as a Service</h2>
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
            Cloudstok DevOps Roadmap
          </h3>
          <img src={roadMap} alt="" className="w-full mt-4" />
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Supported DevOps Tools
          </h3>
          <div className="grid md:grid-cols-6 grid-cols-3 gap-4 mt-4 md:mb-8 place-items-center">
            {imgData.map((e, i) =>
              i < 6 ? (
                <Fade left>
                  <img src={e} alt="" className="sm:w-full max-w-sm " />
                </Fade>
              ) : (
                <Fade right>
                  <img src={e} alt="" className="sm:w-full max-w-sm " />
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

export default Cloud
