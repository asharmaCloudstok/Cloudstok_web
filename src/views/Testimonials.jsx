import React, { useState } from "react"
import Slider from "react-slick"
import "./test.css"
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from "react-icons/fa"
import { BsCloudy } from "react-icons/bs"
import Fade from "react-reveal/Fade"
import '../styles/global.css';
import TestCard from "../components/TestimonialCard/TestCard"
import activeCloud from '../assets/images/activeCloud.png'
import inactiveCloud from '../assets/images/inactiveCloud.png'
const Testimonials = () => {
const [active,setactive] = useState(true)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    swipeToSlide: true,
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
    appendDots: (dots)=> <ul className="w-12">{dots}</ul>,
    beforeChange: (prev, next) => setactive(next),
    customPaging: i => i === active  ? <img src={activeCloud} alt="" className="mt-0.5"/> : <img src={inactiveCloud} alt=""/>,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const testdata = [
    {
      para: "CloudStok is my only go-to solution for my cloud requirements. They ensure that their client's requirements are fulfilled along with fantastic after-sales support too.",
      title: "Jatin - Director TroopsApp",
    },
    {
      para: "Cloudstok did a fantastic job in developing my online portal for freelancers. We strongly recommend CloudStok for any Application Development and cloud related work.",
      title: "Chirag - Director Crony Technowest",
    },
    {
      para: "CloudStok is my partner for cloud deployments, infra provisioning and maintenance. Best part about the is what we don't have to call them for anything they understand our application and infra so well.",
      title: "Shivendra - Director Rextan Infra",
    },
  ]

  // const [testIndex, setTestIndex] = useState(0)
  // const settings = {
  //   dots: true,
  //   centerMode:true,
  //   infinite: true,
  //   lazyload: true,
  //   speed: 3000,
  //   slideToShow: 3,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   beforeChange: (current, next) => setTestIndex(next),
  // }
  return (
    <div className="pt-8 py-24 bg-bgBlue overflow-hidden">
      <div className="flex md:mt-20 pb-12 h-1/2 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Testimonials
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <div className="md:max-w-6xl px-8 md:px-8 pb-12 mx-auto">
        <Fade Big>
          <div>
            <Slider {...settings} style={{ marginTop: "35px" }}>
              {testdata.map((el, index) => (
                <TestCard key={index}  para={el.para} title={el.title}/>
                // <div className="bg-white shadow-sm px-12 py-12 text-center relative rounded-lg -z-0">
                //   <div className="absolute w-16 bg-blue-400 p-4 left-1/2 bottom-48 rounded-full z-50"><FaQuoteLeft className="flex items-center justify-center text-4xl font-bold px-0  text-white"/></div>
                //   <p className="px-12 leading-7">{el.para}</p>
                //   <h4 className="text-lg font-semibold mt-8">{el.title}</h4>
                // </div>
              ))}
            </Slider>
          </div>
        </Fade>
      </div>
    </div>
  )
}
export default Testimonials
