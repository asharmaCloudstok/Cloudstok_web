import { Link } from "gatsby"
import React from "react"
import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationIcon } from "@heroicons/react/outline"
import { FaTimes } from "react-icons/fa"

const Footer = () => {
  const [showModal, setShowModal] = React.useState(false)

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 py-2 "
                        viewBox="0 0 20 20"
                        fill="gray"
                      >
                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <input
                        className="w-full p-2 bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Full Name"
                        name="usrnm"
                      />
                    </div>

                    <div className="flex h-12 w-10/12  items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 py-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        className="w-full bg-transparent p-2 focus:outline-none"
                        type="text"
                        placeholder="Phone"
                        name="usrnm"
                      />
                    </div>
                    <div className="flex h-12 w-10/12  items-center px-2 border mb-4 rounded border-gray-200 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 p-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        class="bg-transparent w-full p-2 focus:outline-none"
                        type="text"
                        placeholder="Username"
                        name="usrnm"
                      />
                    </div>
                    <div className="flex px-2 w-10/12 border rounded border-gray-200 bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 p-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                      <textarea
                        rows={5}
                        className="bg-transparent pt-2 focus:outline-none"
                        type="text"
                        placeholder="Message"
                        name="usrnm"
                      />
                    </div>

                    <button className="mt-4 bg-blue-500   text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-full">
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

        <div className="flex justify-between md:my-8">
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
            <button
              onClick={() => setShowModal(true)}
              className="my-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-4 rounded-md uppercase text-sm"
            >
              Subscribe Now
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
              <a className="h-12 w-12 mx-3  cursor-pointer">
                <img
                  src={
                    "https://cdn-icons.flaticon.com/png/512/3670/premium/3670147.png?token=exp=1643017441~hmac=ed1c75f8a9d7eda88005d88f26e09d3d"
                  }
                  alt="facebook"
                />
              </a>
              <a className="h-12 w-12 mx-3  cursor-pointer">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/145/145807.png"}
                  alt="facebook"
                />
              </a>{" "}
              <a className="h-12 w-12 ml-3  cursor-pointer">
                <img
                  src={"https://static.cdnlogo.com/logos/t/96/twitter-icon.svg"}
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
