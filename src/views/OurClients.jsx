import React from "react"
import Marquee from "react-fast-marquee"
import ClientsIcon from "../components/clientsIcon/ClientsIcon"
import "./about.css"

const OurClients = () => {
  return (
    <div
      className="py-8"
      //   style={{ height: "100vh" }}
    >
      <div className="flex md:mt-20 pb-12 items-baseline max-w-6xl px-8 md:px-8 mx-auto">
        <h2 className="text-black-900 font-semibold  md:text-5xl text-3xl">Our Clients</h2>
        <div className="w-16 h-1 ml-2 bg-blue-500"></div>
      </div>
      <Marquee>
        <ClientsIcon/>
      </Marquee>
    </div>
  )
}

export default OurClients
