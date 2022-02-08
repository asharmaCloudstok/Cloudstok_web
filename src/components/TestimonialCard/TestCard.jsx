import React from "react"
import { FaQuoteLeft } from "react-icons/fa"
const TestCard = ({para, title}) => {
  return (
    <>
      <div className="py-14 sm:px-20 relative md:mx-28 mx-4">
        <div className="bg-blue-500 border w-16 h-16 rounded-full text-center absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <FaQuoteLeft className="text-2xl text-white" />
        </div>
        <div className="bg-white text-center shadow-lg rounded-lg p-10">
          <p className="px-1 py-4 text-lg font-light">
          {para}
          </p>
          <h3 className="text-xl font-medium mt-4">{title}</h3>
        </div>
      </div>
    </>
  )
}

export default TestCard
