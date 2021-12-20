import React from 'react'

export default function Screen21() {
    return (
        <div style={{height:300}}>
             <div>
            <img src="./assets/dl.png" class="mt-6 ml-32"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8"><u>My Class Room</u></h1>
                <img src="./assets/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16"></img>
                <img src="./assets/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8"></img> 
                <hr class="relative bottom-20"></hr>
            </div>
            <div style={{width:200,height:250}} class="border-2 bg-white float-left text-gray-500 border-gray-300 rounded-xl drop-shadow-2xl ml-20 relative bottom-10">
                <h1 class="mt-2 p-4">Edit Profiles</h1>
                <h1 class="text-gray-500 mt-2 ml-4">Change Password</h1>
                <h1 class="text-gray-500 border-4 border-blue-500  border-b-0 border-r-0 border-t-0 p-3 mt-6">Invoices</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Certificate</h1>
                <img src="./assets/pad.png" class="mt-32 relative right-4"></img>
                

            </div>
            <div style={{width:700,height:350}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <img src="./assets/aws.jpg" class="w-36 ml-20 mt-10"></img>
                <p class="ml-64 relative bottom-16 text-gray-800">AWS</p>
                <p class="ml-96 relative left-32 bottom-28 text-gray-500">Date: 05/05/2020</p>
                <p  class="ml-96 relative  bottom-28 text-gray-900 font-semibold">Total Amount Payed : ₹ 34,999.00</p>
                <p class="ml-96 relative left-20 mt-2 bottom-28 text-blue-500"><u>DOWNLOAD INVOICE</u></p>
                <hr style={{width:580}} class="ml-20 relative bottom-20"></hr>
                <div class="relative bottom-20">
                <img src="./assets/python.jpg" class="w-36 ml-20 mt-10"></img>
                <p class="ml-64 relative bottom-16 text-gray-800">Python</p>
                <p class="ml-96 relative left-32 bottom-28 text-gray-500">Date: 05/05/2020</p>
                <p  class="ml-96 relative  bottom-28 text-gray-900  font-semibold">Total Amount Payed : ₹ 34,999.00</p>
                <p class="ml-96 relative left-20 mt-2 bottom-28 text-blue-500"><u>DOWNLOAD INVOICE</u></p>
               </div>
                
            </div>
            
        </div>
    )
}