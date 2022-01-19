import React from 'react';
import {t} from '../../assets/images/node.png';
import {r} from '../../assets/images/react1.png';
const TechCard = (props) => {
    const techdata=[
        {techimg:t},
        {techimg:r},
        {techimg:t},
        {techimg:r},
        {techimg:t},
        {techimg:r},
        {techimg:t},
        {techimg:r},
        {techimg:t},
        {techimg:r},
        {techimg:t},
        {techimg:r},
    ]
  return(
      <>
       <div className="lg:ml-28 lg:text-left lg:w-10/12  pt-12 pb-5 sm:ml-0 sm:w-full sm:px-12 sm:text-center ">
                                         <h3 className=' text-2xl font-semibold '>
                                             {props.head}
                   </h3>
               </div>
      <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 container justify-items-center px-28 pb-8">
          {
              techdata.map((e,i)=>{
                  return(
                      <>
                     <div className="py-4 px-4" key={i}>
          <div className="shadow-lg  bg-white  p-1 w-auto h-auto cursor-pointer">
              <img src={e.techimg} alt="" className='h-auto w-auto' />
          </div>
      </div>
                      </>
                  )
              })
          }
      
      </div>
      </>
  )
};

export default TechCard;
