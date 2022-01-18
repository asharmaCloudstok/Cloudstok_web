import React from "react"
import { GoLocation } from "react-icons"
import {FaTools} from 'react-icons/fa'

const ContactSection = () => {
  const url =
    "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/how-to-manage-a-client-relationship-when-your-personalities-are-different-open-graph.jpg"
  return (
    <div className="relative" style={{ height: "100vh" }}>
      <img
        class="object-cover w-full"
        src={url}
        alt="Flower and sky"
        style={{ height: "100vh" }}
      />

      <div class="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 px-2">
        <h2 className="text-5xl font-bold text-white text-center md:py-24 py-8">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto py-4 sm:px-6 lg:px-12 bg-white flex justify-between">
          <div className="py-8 ml-12">
            <img
              className="h-48 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
            />
            <div className="flex mt-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
              <p className="ml-4">
                The Corenthum, Tower B, <br />
                Noida Sec-62, 201301
              </p>
            </div>
            <div className="flex mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p className="ml-4">+91-8800227144</p>
            </div>
            <div className="flex mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <p className="ml-4">sales@cloudstok.com</p>
            </div>
          </div>
          <div className="py-8 pl-20">
            <div className="flex h-12 items-center px-2 border mt-4 rounded border-gray-200 bg-gray-100">
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
                className="w-full p-2 bg-transparent"
                type="text"
                placeholder="Full Name"
                name="usrnm"
              />
            </div>

            <div className="flex h-12 items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
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
                className="bg-transparent"
                type="text"
                placeholder="Phone"
                name="usrnm"
              />
            </div>
            <div className="flex h-12 items-center px-2 border my-4 rounded border-gray-200 bg-gray-100">
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
                class="bg-transparent w-full"
                type="text"
                placeholder="Username"
                name="usrnm"
              />
            </div>
            <div className="flex px-2 border mt-4 rounded border-gray-200 bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 p-2"
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
                className="bg-transparent pt-2"
                type="text"
                placeholder="Message"
                name="usrnm"
              />
            </div>

            <button className="mt-4 bg-blue-500 text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-full">
              Submit
            </button>
            <div className="mt-4 text-gray-400 text-center text-sm">
                Company Name not sell, share or trade customer <br/>
                information. Your privacy is important to us.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
