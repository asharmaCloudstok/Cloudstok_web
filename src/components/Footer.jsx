import { Link } from "gatsby"
import React from "react"
import { FaTimes } from "react-icons/fa"
import youtube from "../assets/images/youtube.png"
import { FaList, FaRegEnvelope, FaUser } from "react-icons/fa"
import {AiOutlineUser} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

const Footer = () => {
  const [showModal, setShowModal] = React.useState(false)

  let links = [{title:"Who We Are", route:'/whoweare'}, {title:"Services", route:'/services'}, {title:"Contact", route:'/contact'}, {title:"Blogs and Case studies", route:'/blogs'}, {title:"Careers", route:'/career'}]
  let whatWeDo = [
    {title:"Application Development and Modernization", route:'/services/applications'},
    {title:"DevOps as a Service", route:'/services/devops'},
    {title:"Cloud Manage Service", route:'/services/cloud'},
    {title:"Application Consulting and Testing", route:'/services/apptesting'},
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
    <div className="bg-bgDark text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        {showModal && (
          <div className="justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60">
            <div className="relative my-6 mx-12 max-w-screen">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none ">
                <FaTimes
                  className="font-thin text-2xl absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
                {/*header*/}
                <div className="flex items-center justify-center mt-16 ">
                  <h3 className="text-3xl text-center align-center font-medium text-white">
                    Newsletter Signup
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-6 flex items-center text-black">
                  <div className="pb-12 pt-8 flex items-center flex-col">
                    <div className="flex h-12 w-10/12 items-center px-2 border mt-4 rounded border-gray-200 bg-gray-100">
                    <AiOutlineUser className="py-2 h-9 w-9 text-gray-400" />
                      <input
                        className="w-full p-2 bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Full Name"
                        name="usrnm"
                      />
                    </div>

                    <div className="flex h-12 w-10/12  items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
                    <BsTelephone className="h-9 w-9 text-gray-400 py-2" />
                      <input
                        className="w-full bg-transparent p-2 focus:outline-none"
                        type="text"
                        placeholder="Phone"
                        name="usrnm"
                      />
                    </div>
                    <div className="flex h-12 w-10/12  items-center px-2 border mb-4 rounded border-gray-200 bg-gray-100">
                    <FaRegEnvelope className="h-9 w-9 text-gray-400 py-2" />
                      <input
                        class="bg-transparent w-full p-2 focus:outline-none"
                        type="text"
                        placeholder="Username"
                        name="usrnm"
                      />
                    </div>
                    <div className="flex px-2 w-10/12 border rounded border-gray-200 bg-gray-100">
                    <FaList className="h-9 w-9 text-gray-400 py-2" />
                      <textarea
                        rows={5}
                        className="bg-transparent pt-2 pl-2 focus:outline-none"
                        type="text"
                        placeholder="Message"
                        name="usrnm"
                      />
                    </div>

                    <button className="mt-4 bg-ctaBlue hover:bg-gradient-to-tr from-gradientBlueOne to-gradientBlueTwo text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between flex-col md:flex-row">
          <p>
            Leaders from the Cloudstok Industry <br />
            have come together to dissipate <br />
            problems that were faced in the
            <br /> market.
          </p>
          <div>
            <h2 className="font-bold text-lg mb-2 mt-6 md:mt-0">Our Company</h2>
            <ul>
              {links.map(e => (
                <li className="mt-2 cursor-pointer"><Link to={e.route}>{e.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 mt-6 md:mt-0">What we do</h2>
            <ul>
              {whatWeDo.map(e => (
                <li className="mt-2"><Link to={e.route}>{e.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between md:my-8 mt-8">
          <img
            className="h-32 w-48"
            src="https://cloudstok.com/img/white-logo.png"
            alt="Workflow"
          />
          <div className="flex flex-col items-end">
            <div className="align-left md:text-xl text-right">
              Subsrcribe to get the
              <br />
              latest insights on the cloud
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="my-4 bg-gradient-to-r p-0.5 from-gradientBlueOne to-gradientBlueTwo text-white font-medium rounded-md uppercase text-sm"
            >
              <div className=" bg-white text-black px-6 py-4 hover:bg-gradient-to-r p-1 from-gradientBlueOne to-gradientBlueTwo hover:text-white rounded-md">
                Subscribe Now
              </div>
            </button>
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
              <a className="h-12 w-12 mr-3  cursor-pointer">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/145/145807.png"}
                  alt="LinkedIn"
                />
              </a>
              <a className="h-12 w-12 mr-3  cursor-pointer">
                <img
                  src={"https://static.cdnlogo.com/logos/t/96/twitter-icon.svg"}
                  alt="Twitter"
                />
              </a>

              <a className="h-12 w-12 mr-3  cursor-pointer">
                <img src={youtube} alt="Youtube" />
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
        <h2>Copyright&copy; 2022 Cloudstok</h2>
      </div>
    </div>
  )
}

export default Footer
