import React from "react"
import SuccessCard from "../components/servicecard/SuccessCard"
import CloudOne from "../assets/images/cloudOne.png"
import CloudThree from "../assets/images/CloudThree.png"
import CloudTwo from "../assets/images/cloudTwo.png"

const OurBlogs = () => {
  const data = [
    {
      title: "Cloud Manage Services",
      img: CloudOne,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Cloud Manage Services",
      img: CloudTwo,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Cloud Manage Services",
      img: CloudThree,
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ]

  return (
    <div
      className="pt-8 pb-12 w-full"
      //   style={{ height: "100vh" }}
    >
      <div className="max-w-6xl px-8 md:px-8 mx-auto">
        <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
          <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
            Our Blogs
          </h2>
          <div className="w-16 h-1 ml-2 bg-titleBlue"></div>
        </div>
        <div className="flex justify-between md:flex-row flex-col">
          <SuccessCard image={CloudOne} />
          <SuccessCard image={CloudTwo} />
          <SuccessCard image={CloudThree} />
        </div>
        <div className="flex justify-center">
          <button
            // onClick={() => setShowModal(true)}
            className="mt-12 bg-gradient-to-r to-gradientBlueOne from-gradientBlueTwo text-white font-bold px-6 py-4 rounded-md uppercase text-md w-48"
          >
            More Blogs
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurBlogs
