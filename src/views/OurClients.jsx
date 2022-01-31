import React from "react"
import Marquee from "react-fast-marquee"
import ClientsIcon from "../components/clientsIcon/ClientsIcon"

const OurClients = () => {
  let clientData = [
    "https://cloudstok.com/img/logo/logo.svg",
    "https://cloudstok.com/img/c1.jpg",
    "https://cloudstok.com/img/c4.jpg",
    "https://cloudstok.com/img/logo/aksLogo.png",
    "https://cloudstok.com/img/logo/Staqo-Logo_Blue.png",
    "https://cloudstok.com/img/logo/logo3.png",
    "https://cloudstok.com/img/logo/educomp_logo_1.png",
    "https://cloudstok.com/img/logo/cropped-3M-LOGO_2-01@2x.png",
    "https://cloudstok.com/img/logo/logo_4.png",
    "https://cloudstok.com/img/logo/logo-greens.png",
    "https://cloudstok.com/img/logo/logo.png",
    "https://cloudstok.com/img/logo/logo1.png",
    "https://cloudstok.com/img/logo/logo2.png",
    "https://cloudstok.com/img/logo/onemoney-logo.png",
    "https://cloudstok.com/img/logo/cx-1.jpg",
    "https://cloudstok.com/img/logo/salary-now-logo.png",
    "https://cloudstok.com/img/c7.jpg",
    "https://cloudstok.com/img/c9.jpg",
  ]

  let align = ["self-end", "self-start", "self-center"]
  return (
    <div
      className="py-8 bg-bgBlue"
      //   style={{ height: "100vh" }}
    >
      <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold md:text-5xl text-3xl">
          Our Clients
        </h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <Marquee gradient={false} className="h-80">
        {clientData.map(el => (
          <ClientsIcon
            className={align[Math.floor(Math.random() * 3)]}
            src={el}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default OurClients
