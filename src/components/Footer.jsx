import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  let links = ["Who We Are", "Services", "Careers", "Blogs and Case Studies"]
  let whatWeDo = [
    "Application Development and Modernization",
    "DevOps as a Service",
    "Cloud Manage Service",
    "Application Consulting and Testing",
  ]
  const terms = [
    "Security & Data Protection Practices",
    "Marketing Privacy Notice",
    "Candidate Privacy Notice",
    "Modern Slavery Statement",
    "Driversity Inclusion and Oppurnity",
    "Candidate Privacy Notice (Summary)",
    "Vulnerability Disclosure Notice",
    "Sitemap",
  ]
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="flex justify-between md:my-4">
          <img
            className="h-32 w-48"
            src="https://cloudstok.com/img/white-logo.png"
            alt="Workflow"
          />
          <div className="flex flex-col items-end">
            <div className="align-left text-xl text-right">
              Subsrcribe to get the
              <br />
              latest insights on the cloud
            </div>
            <button className="my-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-4 rounded-md uppercase text-sm">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <p>
            Leaders from the Cloudstpk Industry <br />
            have come together to dissipate <br />
            problems that were faced in the
            <br /> market.
          </p>
          <div>
            <h2 className="font-bold text-lg mb-2 mt-6 md:mt-0">Our Company</h2>
            <ul>
              {links.map(e => (
                <li className="mt-2 cursor-pointer">{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 mt-6 md:mt-0">What we do</h2>
            <ul>
              {whatWeDo.map(e => (
                <li className="mt-2">{e}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-8 h-0.5 bg-black" />
        <div className="flex justify-between flex-col md:flex-row">
          <div className="pr-16">
            <h2>Follow Us:</h2>
            <ul className="flex mt-4">
              <a className="h-12 w-12 mr-3 cursor-pointer">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
                  }
                  alt="facebook"
                />
              </a>
              <a className="h-12 w-12 mx-3  cursor-pointer">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
                  }
                  alt="facebook"
                />
              </a>
              <a className="h-12 w-12 mx-3  cursor-pointer">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
                  }
                  alt="facebook"
                />
              </a>{" "}
              <a className="h-12 w-12 ml-3  cursor-pointer">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
                  }
                  alt="facebook"
                />
              </a>
            </ul>
          </div>
          <div className="text-sm md:mt-0 mt-8">
            <Link className="cursor-pointer leading-6">Cookies</Link>
            {terms.map(e => (
              <Link className="cursor-pointer py-4 leading-6">{` | ${e}`}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-black p-4">
        <h2>Copyright&copy; 2021 Cloudstok</h2>
      </div>
    </div>
  )
}

export default Footer
