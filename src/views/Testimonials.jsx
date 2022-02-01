import React  from "react"

import "./test.css"
import { FaQuoteLeft } from "react-icons/fa"


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
    centerMode:true,
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
        <Slider {...settings} style={{ marginTop: "35px", maxWidth: "1152px" }}>
          {testdata.map((ele, i) => {
            return (
              <>
                <div
                  className={i === testIndex ? "slide activeSlide" : "slide"}
                >
                  <div className="bg-white text-center shadow-lg rounded-lg p-10 relative h-66">
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
<<<<<<< HEAD
        </Slider>
=======
        </Slider> */}
         <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'<'}</button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <img className="fea" src="https://picsum.photos/200/200" height="100%" width="100%" alt=""/>
              </label>
              <label htmlFor="s2" id="slide2">
                <img className="fea" src="https://picsum.photos/200/300" height="100%" width="100%" alt="" />
              </label>
              <label htmlFor="s3" id="slide3">
                <img className="fea" src="https://picsum.photos/300/300" height="100%" width="100%" alt=""/>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
>>>>>>> d2d744562ead660acc357b0a5ba0774fc70b952b
      </div>
    </div>
  )
}
export default Testimonials
