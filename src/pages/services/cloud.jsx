import React from "react"
import Layout from "../../components/Layout"
import Breadcrumb from "../../components/Breadcrumb"
import Pagename from "../../components/pagename/Pagename"
import ServiceCard from "../../components/servicecard/ServiceCard"
import SuccessCard from "../../components/servicecard/SuccessCard"
import CloudOne from "../../assets/images/cloudOne.png"
import CloudThree from "../../assets/images/CloudThree.png"
import CloudTwo from "../../assets/images/cloudTwo.png"
import analysis from "../../assets/images/analysis.png"
import Fade from "react-reveal/Fade"

const Cloud = () => {
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
      <Pagename name={"Services"} servicename={"Cloud Managed Services"} />
      <div className="bg-bgBlue">
        <div className="max-w-6xl px-8 md:px-8 mx-auto pb-20">
          <Breadcrumb route1={"Services"} route2={"Cloud Managed Services"} />
          <h2 className="text-3xl font-semibold mt-10">DevOps as a Service</h2>
          <div className="flex justify-between md:flex-row flex-col">
            <Fade left>
              <p className="my-4 text-gray-600 leading-8 text-md md:pr-12">
                Being Cloud agnostic, we have Expertise in Deploying and
                managing Infrastructure on all major Public Cloud Platforms.
                Organizations often require reliable IT Infrastructure with
                continuous administration, monitoring and prompt
                troubleshooting. CloudStok will help you to plan, implement and
                manage changes for your IT Infrastructure. With a demonstrated
                expertise in deploying & managing infrastructure on all major
                public cloud platforms. Leverage CloudStok’s Assessment,
                Consulting and Migration services to help you migrate your
                workload to cloud.
              </p>
            </Fade>
            <Fade right>
              <img src={analysis} alt="" className="md:w-3/6 mx-auto" />
            </Fade>
          </div>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Supported DevOps Tools
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              First step while planning a migration is Assessment. CloudStok
              uses various tools like AWS Discovery and Migration Evaluator
              (Formerly TSO Logic) to create a business case and to identify
              most cost-effective deployment and purchasing options. Our
              Assessment begins with on-premises inventory discovery and
              understanding applications dependencies. We provide an optimized
              business plan to save your cost, optimize performance and give you
              a seamless experience while migrating your workload to cloud.
            </p>
          </Fade>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            Migration Services:
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              Cloud Migration goes way beyond provisioning infrastructure on
              cloud platforms and we believe one must have application expertise
              to understand complex migration. At CloudStok we have in-house
              capability of developing enterprise grade applications which
              enables us to understand and execute complex migrations.
            </p>
          </Fade>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            DevOps and Automation
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              At CloudStok we like to automate everything be it Infrastructure
              Provisioning or Application Deployment. We support and manage
              almost all major DevOps tools like DevOps tools like Jenkins,
              Docker, Ansible, GitHub, Bitbucket, AWS Code Pipeline, Azure
              DevOps, Google Kubernetes Engine, Google Cloud Build, and Google
              Cloud Source Repositories.
            </p>
          </Fade>
          <h3 className="mt-8 text-2xl font-semibold leading-10">
            24*7 Managed Services
          </h3>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              Our Managed Support team is always there to help you round the
              clock. At CloudStok we believe in proactive rather than reactive
              approach. We use various services like AWS CloudWatch, Azure
              Monitor, Data Dog APM and New Relic APM etc. to monitor
              Infrastructure and Application and make sure we have right kind of
              logs and insights in case of any event.
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

export default Cloud
