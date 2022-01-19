
import React from 'react'

import a from '../../assets/images/dat1.png';
import b from '../../assets/images/dat2.png';
import c from '../../assets/images/dat3.png';
import d from '../../assets/images/dat4.png';
import e from '../../assets/images/dat5.png';
import f from '../../assets/images/dat6.png';
import TechCard from './TechCard';
const ServiceAppCard = (props) => {
    const imgdata=[
        {appimg:a},
        {appimg:b},
        {appimg:c},
        {appimg:d},
        {appimg:e},
        {appimg:f},
    ]
    return (
        <>
  
           <div className="main bg-[#F4F7FC] w-full ">
               <div className="lg:ml-28 lg:text-left lg:w-10/12  pt-24 pb-5 sm:ml-0 sm:w-full sm:px-12 sm:text-center ">
                   <h2 className='text-3xl font-semibold'>Application Development and Moderization</h2>
                   <p className='mt-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi magni eveniet at dolorum quasi blanditiis incidunt aliquid vel porro voluptatibus.</p>
                   <h3 className='mt-8 text-2xl font-semibold '>
                       {props.head}
                   </h3>
               </div>
               <div className="grid  lg:grid-cols-3 md:grid-col-2 sm:grid-cols-1 container sm:justify-items-center px-28">
                   {imgdata.map((det,i)=>{
                       return(
                           <>
 <div className="py-8 px-4" key={i}>
                <div className="bg-white lg:h-48 sm:w-80  shadow-lg w-auto">
                    <img src={det.appimg} alt="" className='text-center w-auto h-48 ' />
                </div>
                </div>
                           </>
                       )
                   })}
               
               </div>
               <TechCard head="We Support and develop applications using latest technologies along with popular 
               database and framework in the market. "/>
               </div>     
        </>

    )
}

export default ServiceAppCard;
