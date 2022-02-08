import React from "react"
import Layout from "../components/Layout"
import Loading from "../components/loading/Loading"
import Pagename from "../components/pagename/Pagename"
import { FaList, FaRegEnvelope, FaUser } from "react-icons/fa"
import { MdOutlineSchool } from "react-icons/md"
import { HiPhone } from "react-icons/hi"
import banner from "../assets/images/careerBanner.png"
import Fade from "react-reveal/Fade"

const Career = () => {
  return (
    <Layout>
      <Pagename name={"Career"} />
      <div className="max-w-6xl mx-auto py-8 md:px-0 px-8 relative flex flex-col md:flex-row justify-between items-center">
        <Fade left>
          <img src={banner} alt="" className="w-1/2" />
        </Fade>
        <Fade right>
          <div className="md:p-12 p-8 md:w-fit order-2 bg-gradient-to-tr from-gradientBlueTwo to-gradientBlueOne flex justify-center flex-col">
            <h2 className="text-white text-center font-medium text-2xl">
              Ready to join Us?
            </h2>
            <h5 className="text-sm text-white mt-2 text-center">
              Please fill up the form and we will get <br />
              back to you shortly.
            </h5>
            <div className="flex h-12 items-center px-2 border mt-6 rounded-lg border-gray-200 bg-gray-100">
              <FaUser className="py-2 h-9 w-9 text-gray-400" />
              <input
                className="w-full p-2 bg-transparent text-sm"
                type="text"
                placeholder="Your name"
                name="usrnm"
              />
            </div>

            <div className="flex px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
              <HiPhone className="h-10 w-10 text-gray-400 py-2" />
              <input
                className="bg-transparent w-full text-sm p-2"
                type="text"
                placeholder="Your phone number"
                name="usrnm"
              />
            </div>
            <div className="flex h-12 items-center px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
              <FaRegEnvelope className="h-9 w-9 text-gray-400 py-2" />
              <input
                class="bg-transparent w-full text-sm p-2"
                type="text"
                placeholder="Your email address"
                name="usrnm"
              />
            </div>
            <div className="flex px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
              <MdOutlineSchool className="h-10 w-10 text-gray-400 py-2" />
              <input
                class="bg-transparent w-full text-sm p-2"
                type="text"
                placeholder="Qualification"
                name="usrnm"
              />
            </div>
            <p className="mt-4 text-md text-white">Attach Resume</p>
            <div className="px-2 border rounded-lg border-gray-200 bg-gray-100">
              <input
                class="bg-transparent w-full text-sm p-2"
                type="file"
                name="usrnm"
              />
            </div>

            <button className="mt-4 hover:bg-gradient-to-r from-gradientBlueOne to-gradientBlueTwo bg-ctaBlue text-white font-medium px-6 py-3 rounded-lg uppercase text-lg w-full">
              Submit
            </button>
            <div className="my-4 text-white text-center text-sm">
              Company Name not sell, share or trade customer <br />
              information. Your privacy is important to us.
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Career
