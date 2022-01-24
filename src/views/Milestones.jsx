import React from "react"
import "./style.css"

const Milestones = () => {
  let arr = [
    "We Started",
    "First 10 Customers",
    "First 100 vm`s Launched",
    "First Enterprise Client",
    "AWS Select Tier Partner",
    "500+ VMs Managed and Growing",
    "Delivered First Application",
    "Scaled upto 20 people Company",
    "On boarded multiple funded fin-tech start-ups",
    "Implemented DevOps as a service in more than 5 funded start-ups",
    "Delivered a CRM Application to an Enterprise",
    "Delivered a financial application along with a funded fintech startup",
  ]

  return (
    <div className="pt-8 pb-12 bg-white">
      <div
        className="max-w-6xl px-8 md:px-8 mx-auto pb-12"
        //   style={{ height: "100vh" }}
      >
        <div className="flex items-baseline">
          <h2 className="text-black-900 font-semibold md:text-5xl  text-3xl md:mt-20">
            The Milestones of our Journey
          </h2>
          <div className="w-16 h-1 ml-2 bg-blue-500"></div>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl px-8 md:px-8 mx-auto pb-12 md:max-w-full">
        {arr.map((el, index) => (
          <>
            <span className="w-12 h-12 bg-red-500 font-medium text-xl inline-flex justify-center items-center rounded-full text-white my-4">
              {index + 1}
            </span>
            <span className="">{el}</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Milestones
