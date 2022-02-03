import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { FaLongArrowAltRight, FaSleigh } from "react-icons/fa"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
const ServiceCard = ({ heading, paragraph, route, index }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  return (
      <Link to={route}>
        <div
          onMouseEnter={() => setIsOverlayVisible(true)}
          onMouseLeave={() => setIsOverlayVisible(false)}
          className="rounded shadow-lg overflow-hidden bg-white border border-gray-300 relative"
        >
          {isOverlayVisible && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-cyan-200 to-blue-500 cursor-pointer">
              <h2 className="font-semibold text-2xl text-center text-white">
                {heading || ""}
              </h2>
              <BsArrowRight className="text-5xl text-white mt-4" />
            </div>
          )}
          <div className="py-8 pl-8 pr-20 ">
            <h2 className="font-semibold text-2xl">{heading || ""}</h2>

            <p className="mt-4 text-sm text-gray-600">{paragraph || ""}</p>
            <div className="mt-6">
              <BsArrowRight style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </Link>
  )
}

export default ServiceCard
