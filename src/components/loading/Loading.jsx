import React from "react"
import {Oval } from "react-loader-spinner"

const Loading = () => {
  return (
    <div style={{height:'80vh'}} className={'flex justify-center items-center'}>
      <div className="text-xl flex items-center">
        <Oval color="#62a0fa" height={80} width={80} />
        <div className="ml-4">Development in progress...</div>
      </div>
    </div>
  )
}

export default Loading
