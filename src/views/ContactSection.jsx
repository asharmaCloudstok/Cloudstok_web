import React from "react"

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
        <div className="mx-auto max-w-4xl p-12 bg-white flex flex-col md:flex-row justify-between">
          <div className="md:ml-8 md:mr-auto flex flex-col">
            <img
              className="h-48 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
            />
            <div className="flex mt-6 items-center">
             <div className="rounded-full w-16 h-16 flex items-center">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-9 w-9 mx-auto text-cyan-500 to blue-500"
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
              <p className="ml-4">
                The Corenthum, Tower B, <br />
                Noida Sec-62, 201301
              </p>
            </div>
           
            <div className="flex mt-6">
            <div className="rounded-full  w-16 h-16 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto text-cyan-500 to blue-500"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              </div>
              <p className="ml-4 mt-4">+91-8800227144</p>
            </div>
            <div className="flex mt-6">
            <div className="rounded-full  w-16 h-16 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 mx-auto text-cyan-500 to blue-500"
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
              <p className="ml-4 mt-4">sales@cloudstok.com</p>
            </div>
          </div>
          <div className="md:pl-12 md:border-l-2 md:border-gray-200">
            <div className="flex h-12 items-center px-2 border mt-10 md:mt-0 rounded border-gray-200 bg-gray-100">
            <svg className="svg-icon h-10 w-10 p-2" viewBox="0 0 20 20" fill="gray">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
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
                className="h-10 w-10 py-2 "
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
           
              <input
                className="bg-transparent p-2 w-full"
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
                class="bg-transparent w-full p-2"
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
                className="bg-transparent pt-2 px-1"
                type="text"
                placeholder="Message"
                name="usrnm"
              />
            </div>

            <button className="mt-4 bg-ctaBlue text-white font-medium px-6 py-3 rounded-md uppercase text-lg w-full">
              Submit
            </button>
            <div className="mt-4 text-gray-400 text-center text-sm">
              Company Name not sell, share or trade customer <br />
              information. Your privacy is important to us.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
