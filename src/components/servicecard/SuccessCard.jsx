import React from "react"
import { s } from "../../assets/images/Capture.png"
import { FaLongArrowAltRight } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import  appimg from "../../assets/images/Capture.png"
const SuccessCard = (props) => {
  return (
    <>
      <div className="flex my-4 md:m-4 flex-col border border-gray-200 shadow-lg bg-white max-w-screen">
        <img src={props?.image} alt="wall" className="p-2"/>
        <div className="p-8">
        <h2 className="font-semibold text-2xl leading-8">
         Cloud Manage Services
        </h2>
        <p className="mt-2 ">
            We develop, impliment and
          <br />
          Manage workloads on all major
        <br />
          cloud platforms
        </p>
        <BsArrowRight className="mt-2 text-5xl font-normal" />
      </div>
      </div>
    </>
  )
}

export default SuccessCard
