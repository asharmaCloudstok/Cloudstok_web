import React from "react"
import { SiIcloud } from "react-icons/si"
import { motion } from "framer-motion"

const ClientsIcon = props => {
  console.log(props.value)
  return (
    <motion.div
    whileHover={{ scale: 1.2}}
    initial={{scale:1.0}} className={`relative mx-auto ${props.container} cursor-pointer`}>
      <SiIcloud className={`${props.value} text-white`}></SiIcloud>
      <img
        src={props.src}
        alt="icon"
        className={`absolute ${props.imgSize} z-10`}
      />
    </motion.div>
  )
}

export default ClientsIcon
