import React from "react"

const Pagename = () => {
  return (
    <div className="relative bg-cover"
      style={{
        height: "50vh",
        background: `url('https://peroengineering.com/__static/04fb3ef26aa9a2607dd8dc40bc0e6edf/wallpaperflare-com_wallpaper-8.jpg')`,
      }}
    >
    <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent z-0">
      <div className="md:max-w-6xl w-full mx-auto rounded flex h-full items-center">
        <h2 className="ml-6 text-white font-semibold text-4xl">Contact Us</h2>
      </div>
    </div>
    </div>
  )
}

export default Pagename
