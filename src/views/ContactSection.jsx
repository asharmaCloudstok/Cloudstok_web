import React from "react"
import userImage from "../assets/images/contactOne.png"
import Fade from "react-reveal/Fade"
import { FaList, FaRegEnvelope, FaUserAlt } from "react-icons/fa"
import {AiOutlineUser} from 'react-icons/ai'
import { HiPhone } from "react-icons/hi"
import {BsTelephone} from 'react-icons/bs'
import location from '../assets/images/location.png'
import mail from '../assets/images/mail.png'
import phone from '../assets/images/phone.png'
const ContactSection = () => {
  const url =
    "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/how-to-manage-a-client-relationship-when-your-personalities-are-different-open-graph.jpg"

  const bgStyle = {
    background: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <div className="" style={bgStyle}>
      <div class="w-full h-full bg-gray-500 bg-opacity-50 px-6 md:pt-8 md:pb-32 pb-16">
        <h2 className="text-5xl font-bold text-white text-center md:my-24 py-12">
          Contact Us
        </h2>
        <Fade>
          <div className="mx-auto max-w-4xl p-12 bg-white flex flex-col md:flex-row justify-between">
            <div className="md:ml-8 md:mr-auto flex flex-col">
              <img className="mx-auto" src={userImage} alt="avatar" />
              <div className="flex mt-6 items-center">
                <div className="rounded-full w-16 h-16 flex items-center">
                <img src={location} alt=""/>
                </div>
                <p className="ml-4">
                  The Corenthum, Tower B, <br />
                  Noida Sec-62, 201301
                </p>
              </div>

              <div className="flex mt-6">
                <div className="rounded-full  w-16 h-16 flex items-center">
                <img src={phone} alt=""/>
                </div>
                <p className="ml-4 mt-4">+91-8800227144</p>
              </div>
              <div className="flex mt-6">
                <div className="rounded-full w-16 h-16 flex items-center">
                <img src={mail} alt=""/>
                </div>
                <p className="ml-4 mt-4">sales@cloudstok.com</p>
              </div>
            </div>
            <div className="md:pl-12 md:border-l-2 md:border-gray-200">
              <div className="flex h-12 items-center px-2 border mt-10 md:mt-0 rounded border-gray-200 bg-gray-100">
                <AiOutlineUser className="py-2 h-9 w-9 text-gray-400" />
                <input
                  className="w-full p-2 bg-transparent focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                  name="usrnm"
                />
              </div>

              <div className="flex h-12 items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
                <BsTelephone className="h-9 w-9 text-gray-400 py-2" />
                <input
                  className="bg-transparent p-2 w-full focus:outline-none"
                  type="text"
                  placeholder="Phone"
                  name="usrnm"
                />
              </div>
              <div className="flex h-12 items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
              <FaRegEnvelope className="h-9 w-9 text-gray-400 py-2" />
                <input
                  class="bg-transparent w-full p-2 focus:outline-none"
                  type="text"
                  placeholder="Username"
                  name="usrnm"
                />
              </div>
              <div className="flex px-2 border mt-4 rounded border-gray-200 bg-gray-100">
               <FaList className="h-9 w-9 text-gray-400 py-2"/>
                <textarea
                  rows={5}
                  className="bg-transparent pt-2 px-1 foucs:outline-transparent"
                  type="text"
                  placeholder="Message"
                  name="usrnm"
                />
              </div>

              <button className="mt-4 hover:bg-gradient-to-r from-gradientBlueOne to-gradientBlueTwo bg-ctaBlue text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-full">
                Submit
              </button>
              <div className="mt-4 text-gray-400 text-center text-sm">
                Company Name not sell, share or trade customer <br />
                information. Your privacy is important to us.
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default ContactSection
