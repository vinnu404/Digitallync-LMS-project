import React from 'react'
import { AiFillStar } from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs"
const Screen5 = () => {
    return (
        <div className='h-screen w-screen'>
            <div className="flex bg-white h-18 mt-5 w-screen">
                <div>
                    <img className="ml-64 h-16" src="assets/dl.png" alt="logo" />
                </div>
                <div className="flex  gap-16 items-center relative left-96">
                    <div className="flex text-gray-900 font-bold border-b-2 border-gray-500">
                        <button>My Class Room</button>
                    </div>
                    <div className="flex text-gray-600 ">
                        <img src='assets/bellicon.png' alt='alert' />
                    </div>
                    <div className='text-gray-600'>
                        <img src='assets/user.png' alt='user' />
                    </div>
                </div>
            </div>
            <div style={{ height: 200, width: 1000 }} className="bg-white rounded-lg ml-52  mt-20 drop-shadow-2xl ">
                <div> <p className='text-gray-800 text-2xl font-semibold text-center mr-64 p-8'>AWS</p>
                    <p className='ml-72 text-md'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam<br />
                        nonumy eirmod tempor invidunt ut labore et dolore magna erat.</p>
                </div>
                <div><img src='assets/aws.jpg' alt='aws' style={{ height: 200, width: 250 }} className='-mt-36' /></div>
                <div className="flex ml-72 -mt-10">
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="gray" />
                </div>
                <div >
                    <button className='float-right border-2 w-40 h-12 -mt-20 mr-10 bg-blue-500 text-xl text-white '>Continue<BsArrowRight size={24} className='ml-32 relative bottom-4'/> </button>
                </div>
            </div>
            <div style={{ height: 200, width: 1000 }} className="bg-white rounded-lg ml-52  mt-16 drop-shadow-2xl ">
                <div> <p className='text-gray-800 text-2xl font-semibold text-center mr-64 p-8'>Python</p>
                    <p className='ml-72 text-md'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam<br />
                        nonumy eirmod tempor invidunt ut labore et dolore magna erat.</p>
                </div>
                <div><img src='assets/python.jpg' alt='aws' style={{ height: 200, width: 250 }} className='-mt-36' /></div>
                <div className="flex ml-72 -mt-10">
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="blue" />
                    <AiFillStar size={20} color="gray" />
                </div>
                <div >
                    <button className='float-right border-2 w-40 h-12 -mt-20 mr-10 bg-blue-500 text-xl text-white '>Continue<BsArrowRight size={24} className='ml-32 relative bottom-4'/> </button>
                </div>
            </div>
            <div className='text-gray-800 flex flex-row gap-16 justify-center mt-44 mb-4'>
                <p>© Digital Lync 2020</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Screen5
