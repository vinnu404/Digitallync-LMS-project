import React from 'react'
import Blue from "../src/assets/bluepg2.png"

const Screen3 = () => {
    return (
        <div className=" h-screen bg-blue-100 flex justify-center items-center">
            <div className='' >
                <div><img className=" h-20 mx-auto " src="assets/dl.png" alt="logo" /></div>
                <div> <img className='ml-96 ' src={Blue} style={{ height: '40%', width: '50%' }} alt='logo' /></div>
            </div>
            <div style={{ height: 450, width: 450 }} className="bg-white rounded-lg absolute inset- ml-10 mt-16 drop-shadow-2xl ">
                <button className=" bg-gray-200 w-1/2 rounded-xs py-3 px-6 text-gray-600 float-left text-xl font-semibold">SIGN UP</button>
                <button className=" bg-white w-1/2 rounded-xs py-3 px-6 text-gray-600 float-right text-xl font-semibold">SIGN IN</button>
               
                <div className='ml-10 mt-24'>
                    <input className='border-b-2 w-96' type="text" placeholder="EMAIL"></input>
                </div>
               
                <div className='p-10 mt-2 '>
                    <input className='border-b-2 w-96' type="password" placeholder="PASSWORD"></input>
                   
                </div>
                <div className='border-b-2 ml-36 w-32 text-gray-400'>
                    <button>forgot password</button>
                </div>
                <div>
                    <div>
                        <button className=" bg-blue-500 w-40 rounded-full py-2 px-6 text-white ml-32 mt-4 text-lg font-medium">Sign in</button>
                        <p className='mt-2 ml-48 text-gray-400'>OR</p>
                    </div>
                    <div className='flex flex-row gap-4 ml-40 mt-4'>
                        <img className='h-10' src='assets/inn.png' alt='logo'/>
                        <img className='h-10' src='assets/gll.png' alt='logo'/>
                    </div>
                </div>
            </div>


        </div>
            
        
    )
}

export default Screen3
