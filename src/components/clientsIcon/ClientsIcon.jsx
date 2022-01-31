import React from 'react'
import {SiIcloud} from 'react-icons/si'

const ClientsIcon = (props) => {
    return (
        <div className={`relative mx-auto ${props.className}`}>
            <SiIcloud className='w-48 h-48 text-white'>
            </SiIcloud>
            <img src={props.src}  alt='icon'
            className='absolute bottom-10 p-4 w-18 h-18 z-10'
            />
        </div>
    )
}

export default ClientsIcon
