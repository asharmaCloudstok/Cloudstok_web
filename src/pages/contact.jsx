import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Layout from "../components/Layout"
import { FaList, FaRegEnvelope, FaUser } from "react-icons/fa"
import {AiOutlineUser} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import Fade from "react-reveal/Fade"
import Pagename from "../components/pagename/Pagename"
import location from '../assets/images/location.png'
import mail from '../assets/images/mail.png'
import phone from '../assets/images/phone.png'

const contact = () => {
  
  return (
    <Layout>
      <Pagename name={"Contact Us"} />

      <div className="md:max-w-6xl px-6 md:px-8 mx-auto pb-16">
        <Fade left>
          <Breadcrumb route1={'Contact'} />
        </Fade>
        <div className="md:relative flex flex-col">
          <Fade right>
            <div className="md:p-12 p-8 md:w-fit order-2 bg-gradient-to-tr from-gradientBlueTwo to-gradientBlueOne flex justify-center flex-col md:absolute -top-28 right-5">
              <h2 className="text-white font-medium text-xl">
                Lorem Ipsum dolor sit ame, <br />
                consectetur adispicing eli, sed do <br />
                eiusmod tempor incidunt ut labore
              </h2>
              <div className="flex h-12 items-center px-2 border mt-12 rounded-lg border-gray-200 bg-gray-100">
              <AiOutlineUser className="py-2 h-9 w-9 text-gray-400" />
                <input
                  className="w-full p-2 bg-transparent text-sm"
                  type="text"
                  placeholder="Full Name"
                  name="usrnm"
                />
              </div>

              <div className="flex px-2 border mt-6 rounded-lg border-gray-200 bg-gray-100">
              <BsTelephone className="h-9 w-9 text-gray-400 py-2" />
                <input
                  className="bg-transparent w-full text-sm p-2"
                  type="text"
                  placeholder="Phone"
                  name="usrnm"
                />
              </div>
              <div className="flex h-12 items-center px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
                <FaRegEnvelope className="h-9 w-9 text-gray-400 py-2" />
                <input
                  className="bg-transparent w-full text-sm p-2"
                  type="text"
                  placeholder="Username"
                  name="usrnm"
                />
              </div>
              <div className="flex px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
                <FaList className="h-9 w-9 text-gray-400 py-2" />
                <textarea
                  rows={5}
                  className="bg-transparent pt-2 px-1 text-sm"
                  type="text"
                  placeholder="Message"
                  name="usrnm"
                />
              </div>

              <button className="mt-4 bg-ctaBlue text-white font-medium px-6 py-3 rounded-lg uppercase text-lg w-full">
                Submit
              </button>
              <div className="my-4 text-white text-center text-sm">
                Company Name not sell, share or trade customer <br />
                information. Your privacy is important to us.
              </div>
            </div>
          </Fade>
          <div className="order-1">
            <Fade left>
              <p className="md:mt-6 mt-6 text-md leading-7">
                Wherever you are in cloud journey we have the <br />
                experience and expertise to transform your business for the{" "}
                <br />
                better.
                <br /> For more than 10 years, Cloudreach has been helping{" "}
                <br />
                high profile, complex organizations adopt cutting <br />
                edge technologies to solve challenge and create new <br />
                opportunities.
              </p>
            </Fade>
            <Fade left>
              <p className="mt-4 text-md leading-7">Let us help you know</p>
              <h2 className="my-4 text-md font-medium">
                We will get back to you ASAP!
              </h2>
            </Fade>
            <div className="py-2">
              <Fade left>
                <div className="flex items-center mb-8">
                  <div className="rounded-full w-16 h-16 flex items-center">
                  <img src={location} alt=""/>
                  </div>
                  <div className="">
                    <p className="ml-8 text-gray-500">
                      The Corenthum, Tower B<br />
                      Noida Sec-62, 201309
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="rounded-full  w-16 h-16 flex items-center">
                  <img src={phone} alt=""/>
                  </div>
                  <p className="ml-8 text-gray-500">+91-8800227114</p>
                </div>
                <div className="flex items-center my-7">
                  <div className="rounded-full w-16 h-16 flex  items-center">
                        <img src={mail} alt=""/>
                  </div>
                  <p className="ml-8 text-gray-500">sales@cloudstok.com</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="b-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0669133045135!2d77.37161775096415!3d28.627756582333415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557640eaf95%3A0x30e69436a41b313c!2sCorenthum%20Noida62!5e0!3m2!1sen!2sin!4v1642416611343!5m2!1sen!2sin"
          className="w-full max-h-screen"
          height="500"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="py-28 px-8">
        <Fade Big>
          <div
            className="md:max-w-6xl w-full mx-auto rounded-lg"
            style={{
              background: `url('https://cdn-static.findly.com/wp-content/uploads/sites/794/2019/03/Client-service-hero-e1553009502297.png')`,
            }}
          >
            <div className="text-white bg-gradient-to-r from-gray-900 rounded-lg to-transparent px-8 py-6 border">
              <h2 className="uppercase font-semibold text-3xl my-4">
                Connect With Us
              </h2>
              <p className="mt-6 text-3xl">
                Let's get in touch to talk to our experts.
              </p>
              <button className="mt-8 mb-6 bg-white text-black font-medium px-6 py-3 rounded-md uppercase text-lg ">
                Talk to our expert
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default contact
