import React from 'react'
import Blue from "../src/assets/bluepg2.png"
const Screen9 = () => {
    return (
        <div className=" h-screen bg-blue-100 flex justify-center items-center w-screen">
            <div className='' >
                <div><img className=" h-20 mx-auto mt-8 " src="assets/dl.png" alt="logo" /></div>
                <div> <img className='ml-96 ' src={Blue} style={{ height: '35%', width: '50%' }} alt='logo' /></div>
            </div>
            <div style={{ width: 800, height: 500 }} className='bg-white rounded-lg drop-shadow-2xl absolute inset-  mt-20'>
                <div className='h-16 bg-zinc-500 text-white font-semibold text-2xl p-4 '>ORDER DETAILS</div>
                <div class="bg-gray-100 mt-8 m-6 h-10 flex justify gap-96">
                    <p class="ml-24 text-gray-400 text-base relative top-2">COURSE</p>
                    <p class=" text-gray-400 text-base mt-2 ml-14 ">PRICE</p>
                </div>
                <div>
                    <img src="assets/aws.jpg" alt='aws' class="w-40 ml-20"></img>
                    <p class="ml-72 relative bottom-16 text-gray-500">AWS</p>
                    <p class="ml-96 relative left-56 text-gray-500 bottom-20 -mt-1">₹ 34,999.00</p>
                    <hr class="relative bottom-6"></hr>
                    <p class="ml-96 relative left-52 text-gray-600 text-xl">Total : ₹ 34,999.00</p>
                    {/* <p class="text-gray-500  mt-2">Coupon</p>
                    <hr class="w-32 ml-80"></hr> */}
                     <div> <input type="text" placeholder="Coupon" className='border-b-2 ml-96 relative left-24 top-2 -mr-4 mt-4'></input></div>
                    <button class="border border-gray-300 w-20  -mt-4 relative float-right mr-12 text-gray-500">Apply</button>
                    <p class="ml-96 mt-10 relative left-24 text-2xl font-semibold "><span class="text-gray-600 text-2xl">Grand Total</span> : ₹ 34,999.00</p>
                    <button class="p-1 ml-96 relative left-44 text-white top-8 bg-blue-500">PROCEED FOR PAYMENT</button>
                </div>
            </div>

        </div>
    )
}

export default Screen9
