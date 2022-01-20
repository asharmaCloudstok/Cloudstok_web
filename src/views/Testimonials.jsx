import React from "react"
// import c from '../assets/images/cloud.png';
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';
import TestCard from "../components/TestimonialCard/TestCard";


const Testimonials = () => {
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
          <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          visibleSlides={3}
          infinite={true}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0} style={{marginTop:"45px"}}> <TestCard/> </Slide>
              <Slide index={1} style={{marginTop:"45px"}}> <TestCard/> </Slide>
              <Slide index={2} style={{marginTop:"45px"}}> <TestCard/> </Slide>
              
            </Slider>
      
          </CarouselProvider>
      </div>
    </div>
  )
}

export default Testimonials
