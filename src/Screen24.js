import React from 'react'
import Blue from "../src/assets/bluepg2.png"
const Screen24 = () => {
    return (
        <div className=" h-screen bg-blue-100 flex justify-center items-center w-screen">
            <div className='' >
                <div><img className=" h-20 mx-auto mt-16 " src="assets/dl.png" alt="logo" /></div>
                <div> <img className='ml-96 ' src={Blue} style={{ height: '35%', width: '50%' }} alt='logo' /></div>
            </div>
            <div style={{ height: 450, width: 550 }} className="bg-white rounded-lg absolute inset-  mt-20 drop-shadow-2xl ">
                <p className='text-gray-400 text-xl font-semibold flex justify-center mt-12'>RESET YOUR PASSWORD</p>
                <div className='ml-16 mt-24'>
                    <input className='border-b-2 w-96' type="password" placeholder="NEW PASSWORD"></input>
                </div>
                <div className='p-10 mt-2 ml-6 '>
                    <input className='border-b-2 w-96' type="password" placeholder="CONFIRM PASSWORD"></input>
                </div>
                <div>
                    <button className=" bg-blue-500 w-40 rounded-md py-2 px-6 text-white ml-44 mt-2 text-lg font-medium">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Screen24
