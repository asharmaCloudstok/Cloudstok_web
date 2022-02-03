import React from "react"
import c from "../assets/images/cloud1.png"
import d from "../assets/images/cloud2.png"
import e from "../assets/images/cloud3.png"
import f from "../assets/images/cloud4.png"
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
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      head: "We Started",
      para: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ]

  return (
    <div className=" bg-white">
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
        <div
          className="flex flex-col max-w-full mx-auto overflow-hidden pl-2 h-full"
          id="respons"
        >
          {/* <div className="mile-border"></div> */}

          <VerticalTimeline>
            {data.map((e, i) => {
              return (
                <>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2011 - present"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
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

          {/* {arr.map((el, index) => (
          <>
            <div className="grid grid-cols-1">
            <span className="w-12 h-12 bg-gradient-to-r to-cyan-500  from-blue-500 font-medium text-xl justify-center items-center rounded-full text-white my-4" id="span-content">
             <p className="ml-4"> {index+1} </p>
            </span>
            <span className="head">{el}</span>
            </div>
          </>
        ))} */}
        </div>

        <img src={c} alt="" className="cloud-img" />
        <img src={d} alt="" className="cloud1-img" />
        <img src={e} alt="" className="cloud2-img" />
        <img src={f} alt="" className="cloud3-img" />
      </div>
      <div
        className="flex flex-col max-w-full  mx-auto overflow-hidden pl-2 h-full relative -top-60 "
        id="milecontent"
      >
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile11"
        >
          <p className="m-5  justify-items-center eleven"> 11 </p>
          <p className="eleven-para">
            {" "}
            Delivered a CRM Application to an Enterprise{" "}
          </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile12"
        >
          <p className="m-5 justify-items-center twelve"> 12 </p>
          <p className="twelve-para">
            {" "}
            Delivered a financial application along with a funded fintech
            startup"{" "}
          </p>
        </div>

        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile7"
        >
          <p className="m-5  justify-items-center seven"> 07</p>
          <p className="seven-para"> Delivery First Application </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile6"
        >
          <p className="m-5  justify-items-center six "> 06</p>
          <p className="six-para"> 500+ VM's Managed and growing </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile5"
        >
          <p className="m-5  justify-items-center five"> 05</p>
          <p className="five-para"> AWS Select tier Partner </p>
        </div>

        <div className="bg-gradient-to-r to-cyan-500 relative top-14 from-blue-500 rounded-full  items-center w-14 h-14">
          <p className="one  justify-items-center"> 01 </p>
          <p className="one-para">We Started </p>
        </div>

        <div id="mile"></div>
        <div id="b"></div>
        <div
          className="bg-gradient-to-r to-cyan-500 from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile2"
        >
          <p className="two  justify-items-center"> 02 </p>
          <p className="two-para">First 10 Customer </p>
        </div>
        <div id="b-1"></div>
        <div
          className="bg-gradient-to-r to-cyan-500 from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile3"
        >
          <p className="  justify-items-center three"> 03 </p>
          <p className="three-para"> First 100 Vm's Launched </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500 from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile4"
        >
          <p className="  justify-items-center four"> 04 </p>
          <p className="four-para"> First Enterprise Client </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile8"
        >
          <p className="m-5  justify-items-center eight"> 08</p>
          <p className="eight-para"> Scaled upto 20 people company </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile9"
        >
          <p className="m-5  justify-items-center nine"> 09</p>
          <p className="nine-para">
            {" "}
            On boarded multiple funded fin-tech start-ups{" "}
          </p>
        </div>
        <div
          className="bg-gradient-to-r to-cyan-500  from-blue-500 rounded-full  items-center w-14 h-14"
          id="mile10"
        >
          <p className="m-5  justify-items-center ten"> 10 </p>
          <p className="ten-para">
            {" "}
            Implemented DevOps as a service in more than 5 funded start-ups{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Milestones
