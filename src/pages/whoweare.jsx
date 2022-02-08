import React from "react"
import Layout from "../components/Layout"
import Pagename from "../components/pagename/Pagename"
import Loading from "../components/loading/Loading"
import Breadcrumb from "../components/Breadcrumb"
import Fade from "react-reveal/Fade"
const WhoWeAre = () => {
  return (
    <Layout>
      <Pagename
        name={"Who We Are"}
        servicename={
          "CloudStok is innovative young start up with rich experience in latest technologies."
        }
      />
      <div className="bg-bgBlue">
        <div className="max-w-6xl px-8 md:px-8 mx-auto pb-20">
          <Breadcrumb route1={"Who we are"} />
          <h2 className="text-3xl font-semibold mt-10">About Us</h2>
          <Fade big>
            <p className="my-4 text-gray-600 leading-8 text-md">
              CloudStok is innovative young start up with rich experience in
              latest technologies. Witnessing the problematic areas in Cloud
              Computing, CloudStok is the brainchild of leading industry
              experts. CloudStok is innovative young start up with rich
              experience in latest technologies. Witnessing the problematic
              areas in Cloud Computing, CloudStok is the brainchild of leading
              industry experts. After observing the numerous ongoing challenges
              in the market faced by the customers, the founders of CloudStok
              are planning to take over the market by incorporating the
              practices for Client Computing. We are dedicated to providing best
              in class services in the field of Infrastructure and application
              development to accelerate our customers' digital journey. We act
              as a strong technical engine for our clients seeking support for
              their applications or infrastructure. Our strong approach towards
              application and infrastructure makes us an optimal choice for
              clients looking for an end to end support. We have a wide spectrum
              of services starting from Application Development to Application
              Deployment. We act as consultants to our clients and our deep
              expertise in technology empowers them to build a strong foundation
              whilst planning for any new deployment or product. 
              <br />
              <br />
              <br />
              Our services
              include Application Consultation to help identify the applicant
              what is required in terms of development and monitoring,
              Infrastructure Services that is information technologies that are
              offered as a service, Application Testing which deals with tests
              for the entire application to check the performance and quality,
              IT Consultation to provide the guidance during planning and
              analyzing business problems and Pay-as-you-go pricing to easily
              adapt to changing business needs
            </p>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}

export default WhoWeAre
