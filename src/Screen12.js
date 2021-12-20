import React from 'react'
import Blue from "../src/assets/bluepg2.png";
import { BsArrowRight } from "react-icons/bs"
const Screen12 = () => {
    return (
        <div className='h-screen w-screen'>
            <div style={{ backgroundColor: "#EBF3FE", backgroundImage: "url(./assets/bluebg.png)" ,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>



                <div class="pl-96 pt-14 relative left-32 bottom-8">
                    <img src="./assets/dl.png"></img>
                </div>
                <div class="relative bottom-10">
                    <img src="./assets/boy.png" className='w-52 ml-96 relative left-52'></img>
                    <img src="./assets/tickmark.png" className='w-20  relative bottom-28' style={{ marginLeft: 820 }}></img>
                    <h1 class="text-3xl font-bold text-center">Welcome to the world of cyber security</h1>

                </div>
                <div className="bg-white rounded-lg ml-52  mt-20 drop-shadow-2xl relative bottom-20 right-20" style={{ height: 200, width: 1000 }} >
                    <div> <p className='text-gray-800 text-2xl font-semibold text-center mr-64 p-8 relative top-10'>AWS</p>
                    </div>

                    <img src='./assets/aws.jpg' alt='aws' style={{ height: 200, width: 250, position: 'relative', bottom: 95 }} />

                    <div >
                        <button className='float-right border-2 w-44 h-12 mr-10 bg-blue-500 text-xl text-white relative bottom-52'>Start Course<BsArrowRight size={24} className='ml-36 relative bottom-6' /> </button>
                    </div>
                </div>
                <button className='border border-yellow-500 w-40 p-2 bg-white ml-96 mt-6 relative left-72 bottom-20'>My Class Room</button>


            </div>



        </div>
    )
}

export default Screen12
