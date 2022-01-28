import React, { useState } from "react"
import Slider from "react-slick"
import "./test.css"
import { FaArrowRight, FaArrowLeft } from "react-icons"
import TestCard from "../components/TestimonialCard/TestCard"

const Testimonials = () => {
  const testdata = [
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
  ]

  const [testIndex, setTestIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    lazyload: true,
    speed: 3000,
    slideToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setTestIndex(next),
  }
  return (
    <div className="py-8 bg-bgBlue">
      <div className="flex md:mt-20 pb-12 h-1/2n items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Testimonials
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <div className="max-w-6xl px-8 md:px-8 mx-auto pb-24">
        <Slider {...settings}  >
          {testdata.map((pasa, i) =><TestCard/>)}
        </Slider>
        {/* {testdata.map((ele, i) => {
          return (
            <>
              <div className="grid grid-cols-3 justify-center" key={i}>
                <Slider
                  {...settings}
                  // style={{ marginTop: "35px", maxWidth: "1152px" }}
                >
                  <div
                    className={i === testIndex ? "slide activeSlide" : "slide"}
                  >
                    <div className="bg-white text-center shadow-lg rounded-lg p-10 relative ">
                      <div className="bg-blue-500 border w-16 h-16 rounded-full text-center absolute -top-10 left-52">
                        {" "}
                        <p className="text-7xl mt-2 text-white"> “ </p>
                      </div>
                      <p>{ele.para}</p>
                      <h3 className="text-2xl font-semibold">{ele.title}</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </>
          )
        })} */}
      </div>
    </div>
  )
}
export default Testimonials
