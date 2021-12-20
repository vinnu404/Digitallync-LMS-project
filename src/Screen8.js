import React from 'react'
import Image from '../src/assets/bluer.png'
const Screen8 = () => {
    return (
        <div className=" h-screen bg-blue-100 flex justify-center items-center">
            <div className='' >
                <div><img className=" h-20 mx-auto mt-20 " src="assets/dl.png" alt="logo" /></div>
                <div> <img className='ml-96 ' src={Image} style={{ height: '40%', width: '50%' }} alt='logo' /></div>
            </div>
            <div style={{ height: 450, width: 550 }} className="bg-white rounded-lg absolute inset- mt-20 drop-shadow-2xl mr-10">
                <p className='text-gray-500 text-xl font-semibold flex justify-center mt-24'>RESET YOUR PASSWORD</p>
                <p className='text-gray-600 text-md font-2xl flex justify-center mt-4'>Please provide the email address you used when you signed up</p>
                <p className='text-gray-600 text-md font-2xl flex justify-center '>for your OSacad account </p>
                <div className='ml-12 mt-16'>
                    <input className='border-b-2 w-96' type="text" placeholder="EMAIL ADDRESS"></input>
                    <button className=" bg-blue-500 w-64 rounded-full py-2 px-6 text-white ml-24 mt-16 text-lg font-small">SEND EMAIL</button>
                </div>
            </div>

        </div>
    )
}

export default Screen8
