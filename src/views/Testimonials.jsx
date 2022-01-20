import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';


const Testimonials = () => {
  return (
    <div
      className="py-8 bg-blue-100"
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
          visibleSlides={3}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
          </CarouselProvider>
      </div>
    </div>
  )
}

export default Testimonials
