import React from 'react'

const Screen1 = () => {
    return (
        <div>
             <div className="flex bg-white h-18 mt-5 w-screen">
                <div>
                    <img className="mx-28 h-16" src="assets/dl.png" alt="logo" />
                </div>
                <div className="flex  gap-24 items-center mx-44">
                    <div className="flex text-gray-600">
                        Courses
                    </div>
                    <div className="flex text-gray-600 ">
                        Programs
                    </div>
                    <div className='text-gray-600'>
                        Contact Us
                    </div>                                      
                    <div>
                        <button className=" bg-yellow-300 w-40 rounded-full py-3 px-6 text-gray-600 float-left text-base">Get Trained</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen1
