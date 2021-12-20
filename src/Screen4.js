import React from 'react'
import Blue from "../src/assets/bluepg2.png"
const Screen4 = () => {
    return (
        <div className=" h-screen bg-blue-100 ">
            <div className='' >
                <div><img className=" h-20 p-2 ml-24 " src="assets/dl.png" alt="logo" />
                    <img className='float-right -mt-14 mr-24' src='assets/user.png' alt='logo' />
                </div>
                <div className='text-blue-500  text-4xl font-bold flex justify-center mt-20'>
                    <h1>Welcome Abdul Kabeer</h1>
                </div>
                <div className='text-gray-400 text-2xl font-semibold flex justify-center mt-20'>
                    <h1>Browse Programs</h1>
                </div>
                <div> <img className='ml-96 -mt-44 ' src={Blue} style={{ height: '40%', width: '60%' }} alt='logo' /></div>
            </div>
            <div>
                    <img src='assets/cards.png' alt='logo' style={{height:'40%',width:'70%'}} className='ml-48 -mt-96'/>
                </div>

        </div>
    )
}

export default Screen4
