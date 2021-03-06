import React from "react"
import Marquee from "react-fast-marquee"
import ClientsIcon from "../components/clientsIcon/ClientsIcon"
import Fade from 'react-reveal/Fade'
import educomp from '../assets/images/educomp.jpeg'
import di from '../assets/images/di.png'
import adclear from '../assets/images/adclear.png'
import beetel from '../assets/images/beteel.png'

const OurClients = () => {
  let clientData = [
    "https://cloudstok.com/img/logo/logo.svg",
    adclear,
    "https://cloudstok.com/img/logo/aksLogo.png",
    "https://cloudstok.com/img/logo/Staqo-Logo_Blue.png",
    di,
    educomp,
    "https://www.3mexim.com/wp-content/uploads/2021/03/cropped-3M-LOGO_2-01%402x.png",
    "https://cloudstok.com/img/logo/logo_4.png",
  ]
  let clientDataRowTwo = [
    "https://cloudstok.com/img/logo/logo-greens.png",
    beetel,
    "https://cloudstok.com/img/logo/logo1.png",
    "https://cloudstok.com/img/logo/logo2.png",
    "https://cloudstok.com/img/logo/cx-1.jpg",
    "https://cloudstok.com/img/logo/onemoney-logo.png",
    "https://cloudstok.com/img/logo/salary-now-logo.png",
    "https://cloudstok.com/img/c7.jpg",
  ]

  let align = ["self-end", "self-start", "self-center"]
  return (
    <div
      className="pt-8 pb-20 bg-bgBlue"
      //   style={{ height: "100vh" }}
    >
      <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Our Clients
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <Fade>
      <Marquee gradient={false} className="overflow-hidden">
        <div className="grid grid-rows-1 grid-cols-9">
          {clientData.map((el, index) => (
            <ClientsIcon
              value={index % 2 === 0 ? "w-60 h-60 mx-4" : "w-48 h-48"}
              imgSize={
                index % 2 === 0
                  ? " w-28 bottom-20 pt-2 px-2 left-16 ml-4 "
                  : " bottom-24 pb-4  px-2 left-4 w-40"
              }
              src={el}
            />
          ))}
        </div>
      </Marquee>
      <Marquee gradient={false} className="overflow-hidden">
        <div className="grid grid-rows-1 grid-cols-9 h-60">
          {clientDataRowTwo.map((el, index) => (
            <ClientsIcon
              container={index % 2 === 0 && " self-end"}
              value={index % 2 === 0 ? "w-60 h-60 mx-8" : "w-48 h-48"}
              imgSize={
                index % 2 === 0
                  ? " w-40 bottom-16 p-2 left-16 ml-2 "
                  : " bottom-24 p-4 left-4 w-40"
              }
              src={el}
            />
          ))}
        </div>
      </Marquee>
      </Fade>
    </div>
  )
}

export default OurClients
