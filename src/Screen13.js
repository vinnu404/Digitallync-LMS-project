import React from 'react'
import Blue from "../src/assets/bluepg2.png"
const Screen13 = () => {
    return (
        <div className=" h-screen bg-blue-100 flex justify-center items-center w-screen">
            <div className='' >
                <div><img className=" h-20 mx-auto mt-16 " src="assets/dl.png" alt="logo" /></div>
                <div> <img className='ml-96 ' src={Blue} style={{ height: '35%', width: '50%' }} alt='logo' /></div>
            </div>
            <div style={{ height: 450, width: 550 }} className="bg-white rounded-lg absolute inset-  mt-20 drop-shadow-2xl ">
                <p className='text-gray-700 text-xl font-semibold flex justify-center mt-32'>CHECK YOUR MAIL</p>
                <p className='text-gray-600 text-lg font-2xl flex justify-center mt-12'>An email with password reset instructions has been sent</p>
                <p className='text-gray-600 text-lg font-2xl flex justify-center '> to your email address</p>
            </div>
        </div>
    )
}

export default Screen13
