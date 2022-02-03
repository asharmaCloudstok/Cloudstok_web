import React, { useState } from "react"
import Slider from "react-slick"
import "./test.css"
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from "react-icons/fa"
import Fade from 'react-reveal/Fade'
const Testimonials = () => {
  const testdata = [
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
    {
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione et, consequuntur deleniti perspiciatis vel distinctio temporibus",
      title: "Yug - SG Corp",
    },
  ]

  const [testIndex, setTestIndex] = useState(0)
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    lazyload: true,
    speed: 3000,
  
    slideToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setTestIndex(next),
  }
  return (
    <div className="pt-8 py-24 bg-bgBlue">
      <div className="flex md:mt-20 pb-12 h-1/2 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Testimonials
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <div className="max-w-6xl px-8 md:px-8 mx-auto">
        <Fade Big>
        <Slider {...settings} style={{ marginTop: "35px", maxWidth: "1152px" }}>
          {testdata.map((ele, i) => {
            return (
              <>
                <div
                  className={i === testIndex ? "slide activeSlide" : "slide"}
                >
                  <div className="bg-white text-center shadow-lg rounded-lg p-10 cursor-pointer relative h-66">
                    <div className="bg-blue-500 border w-16 h-16 rounded-full text-center absolute -top-10 left-52">
                      <FaQuoteLeft className="mt-5 text-white ml-5" />
                    </div>
                    <p>{ele.para}</p>
                    <h3 className="text-2xl py-4 font-semibold">{ele.title}</h3>
                  </div>
                </div>
              </>
            )
          })}
        </Slider>
        </Fade>
      </div>
    </div>
  )
}
export default Testimonials
