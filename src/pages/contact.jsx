import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Layout from "../components/Layout"
import { FaMapMarkerAlt, FaPhoneVolume, FaEnvelope } from "react-icons/fa"

import Pagename from "../components/pagename/Pagename"

const contact = () => {
  return (
    <Layout>
      <Pagename name={"Contact Us"} />

      <div className="md:max-w-6xl px-6 md:px-8 mx-auto pb-16">
        <Breadcrumb />
        <div className="md:relative flex flex-col">
          <div className="md:p-12 p-8 md:w-fit order-2 bg-gradient-to-tr from-gradientBlueTwo to-gradientBlueOne flex justify-center flex-col md:absolute -top-28 right-5">
            <h2 className="text-white font-medium text-xl">
              Lorem Ipsum dolor sit ame, <br />
              consectetur adispicing eli, sed do <br />
              eiusmod tempor incidunt ut labore
            </h2>
            <div className="flex h-12 items-center px-2 border mt-12 rounded-lg border-gray-200 bg-gray-100">
              <svg
                className="svg-icon h-10 w-10 p-2"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
              </svg>

              <input
                className="w-full p-2 bg-transparent text-sm"
                type="text"
                placeholder="Full Name"
                name="usrnm"
              />
            </div>

            <div className="flex px-2 border mt-6 rounded-lg border-gray-200 bg-gray-100">
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
                className="bg-transparent w-full text-sm p-2"
                type="text"
                placeholder="Phone"
                name="usrnm"
              />
            </div>
            <div className="flex h-12 items-center px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
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
                class="bg-transparent w-full text-sm p-2"
                type="text"
                placeholder="Username"
                name="usrnm"
              />
            </div>
            <div className="flex px-2 border mt-4 rounded-lg border-gray-200 bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 p-2 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div className="order-1">
            <p className="md:mt-6 mt-6 text-md leading-7">
              Wherever you are in cloud journey we have the <br />
              experience and expertise to transform your business for the <br />
              better.
              <br /> For more than 10 years, Cloudreach has been helping <br />
              high profile, complex organizations adopt cutting <br />
              edge technologies to solve challenge and create new <br />
              opportunities.
            </p>
            <p className="mt-4 text-md leading-7">Let us help you know</p>
            <h2 className="my-4 text-md font-medium">
              We will get back to you ASAP!
            </h2>
            <div className="py-2">
              <div className="flex items-center mb-8">
                <div className="rounded-full w-16 h-16 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16 mx-auto text-cyan-500 to blue-500 border border-2 rounded-full border-gradientBlueOne p-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16 mx-auto text-cyan-500 to blue-500 border border-2 rounded-full border-gradientBlueOne p-2"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="ml-8 text-gray-500">+91-8800227114</p>
              </div>
              <div className="flex items-center my-7">
                <div className="rounded-full w-16 h-16 flex  items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-cyan-500 to blue-500 border border-2 rounded-full border-gradientBlueOne p-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-8 text-gray-500">sales@cloudstok.com</p>
              </div>
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
      </div>
    </Layout>
  )
}

export default contact
