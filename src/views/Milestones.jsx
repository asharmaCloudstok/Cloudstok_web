import React from "react"
import { ResponsiveContainer,LineChart,Line } from "recharts"
const Milestones = () => {
  const mdata=[
    {
      name:"hello",
      student:50,
      fees:13,
    },
    {
      name:"hello",
      student:5,
      fees:13,
    },
    {
      name:"hello",
      student:12,
      fees:13,
    },
    {
      name:"hello",
      student:10,
      fees:13,
    },
    {
      name:"hello",
      student:12,
      fees:13,
    },
    {
      name:"hello",
      student:10,
      fees:13,
    },
    {
      name:"hello",
      student:12,
      fees:13,
    },
    {
      name:"hello",
      student:10,
      fees:13,
    },
    {
      name:"hello",
      student:12,
      fees:13,
    },
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
        <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={mdata}>
        <Line type="monotone" dataKey="student"/>
        </LineChart>    
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Milestones
