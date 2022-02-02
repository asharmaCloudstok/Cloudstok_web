import React from "react"
import { SiIcloud } from "react-icons/si"

const ClientsIcon = props => {
  console.log(props.value)
  return (
    <div className={`relative mx-auto ${props.container}`}>
      <SiIcloud className={`${props.value} text-white`}></SiIcloud>
      <img
        src={props.src}
        alt="icon"
        className={`absolute ${props.imgSize} z-10`}
      />
    </div>
  )
}

export default ClientsIcon
