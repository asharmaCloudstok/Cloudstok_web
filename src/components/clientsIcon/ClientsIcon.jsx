import React from 'react'
import {SiIcloud} from 'react-icons/si'

const ClientsIcon = (props) => {
    return (
        <div className={`relative mx-auto ${props.className}`}>
            <SiIcloud className='w-48 h-48 text-gray-100'>
            </SiIcloud>
            <img src={props.src|| "https://namastecredit.com/wp-content/uploads/2021/09/cropped-logo.png"}            alt='icon'
            className='absolute bottom-10 p-4'
            />
        </div>
    )
}

export default ClientsIcon
