import React from "react"
import c from "../assets/images/cloud1.png"
import d from "../assets/images/cloud2.png"
import e from "../assets/images/cloud3.png"
import f from "../assets/images/cloud4.png"
import milestone from '../assets/images/milestone.png'
import "./style.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Milestones = () => {
  const data = [
    {
      head: "We Started",
    },
    {
      head: "First 10 Customer",
    },
    {
      head: "First 100 Vm's Launched",
    },
    {
      head: "First Enterprise Client",
    },
    {
      head: "AWS Select tier Partner",
    },
    {
      head: "Scaled upto 20 people company",
    },
    {
      head: "500+ VM's Managed and growing",
    },
    {
      head: "We Started Delivery First Application",
    },
    {
      head: "500+ VM's Managed and growing",
    },
    {
      head: "On boarded multiple funded fin-tech start-ups",
    },
    {
      head: "Implemented DevOps as a service in more than 5 funded start-ups",
    },
    {
      head: "Delivered a CRM Application to an Enterprise",
    },
    {
      head: " Delivered a financial application along with a funded fintech startup",
    },
  ]

  return (
    <div className=" bg-white">
      <div
        className="max-w-6xl px-8 md:px-8 mx-auto pb-12"
        //   style={{ height: "100vh" }}
      >
        <div className="flex items-baseline">
          <h2 className="text-black-900 font-semibold md:text-5xl  text-3xl md:mt-20 mt-12">
            The Milestones of our Journey
          </h2>
          <div className="w-16 h-1 ml-2 bg-blue-500"></div>
        </div>
        <div
          className="overflow-hidden flex flex-col max-w-full pl-2 h-full"
          id="respons"
        >
          <VerticalTimeline>
            {data.map((e, i) => {
              return (
                <>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "linear-gradient(125deg, #4bd3f4,#62a0fa)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  #4bd3f4",
                    }}
                    iconStyle={{
                      background: "linear-gradient(75deg, #4bd3f4,#62a0fa)",
                      color: "#fff",
                    }}
                    icon={`${i + 1}`}
                    iconClassName="flex justify-center items-center"
                    key={i}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {e.head}
                    </h3>
                    <p>{e.para}</p>
                  </VerticalTimelineElement>
                </>
              )
            })}
          </VerticalTimeline>
        </div>

        {/* <img src={c} alt="" className="cloud-img" />
        <img src={d} alt="" className="cloud1-img" />
        <img src={e} alt="" className="cloud2-img" />
        <img src={f} alt="" className="cloud3-img" /> */}
      </div>
      <div className="w-full pb-16 md:flex items-center hidden">

        <img src={milestone}/>
      </div>
    </div>
  )
}

export default Milestones
