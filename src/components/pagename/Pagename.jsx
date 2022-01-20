import React from "react"

const Pagename = ({ name, servicename }) => {
  return (
    <div
      className="relative bg-cover"
      style={{
        height: "50vh",
        background: `url('https://peroengineering.com/__static/04fb3ef26aa9a2607dd8dc40bc0e6edf/wallpaperflare-com_wallpaper-8.jpg')`,
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent z-0">
        <div className="md:max-w-6xl w-full mx-auto rounded flex  flex-col h-full justify-center">
          <div>
            <h2 className="ml-6 text-white font-semibold text-5xl">{name}</h2>
          </div>
          {servicename && (
            <div>
              <p className="block ml-6 text-white font-normal mt-2 text-lg">{servicename}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pagename
