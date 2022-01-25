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
  // const NextArrow =({onClick})=>{
  //  return(
  //    <div className="arrow next" onClick={onClick}>
  // <FaArrowRight/>
  //    </div>
  //  )
  // }
  // const PrevArrow =({onClick})=>{
  //   return(
  //     <div className="arrow prev" onClick={onClick}>
  //  <FaArrowLeft/>
  //     </div>
  //   )
  //  }
  const [testIndex, setTestIndex] = useState(0)
  const settings = {
    dots: true,
    // className:"center",
    infinite: true,
    lazyload: true,
    speed: 300,
    slideToShow: 3,

    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setTestIndex(next),
  }
  return (
    <div
      className="py-8 bg-[#F4F7FC]"
      //   style={{ height: "100vh" }}
    >
      <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Testimonials
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <div className="max-w-6xl px-8 md:px-8 mx-auto">
        <Slider {...settings} style={{ border: "1px solid red" }}>
          {testdata.map((pasa, i) => {
            return (
              <>
                <div
                  className={i === testIndex ? "slide activeSlide" : "slide"}
                >
                  <p>{pasa.para}</p>
                  <h2>{pasa.title}</h2>
                </div>
              </>
            )
          })}
        </Slider>
        {testdata.map((ele, i) => {
          return (
            <>
              <div className="grid grid-cols-3 justify-center" key={i}>
                <Slider
                  {...settings}
                  style={{ marginTop: "35px", maxWidth: "1152px" }}
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
        })}
      </div>
    </div>
  )
}
export default Testimonials
