import React from 'react'

export default function Screen23() {
    return (
        
            <div style={{height:300}}>
             <div>
            <img src="./assets/dl.png" class="mt-6 ml-32"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8"><u>My Class Room</u></h1>
                <img src="./assets/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16"></img>
                <img src="./assets/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8"></img> 
                <hr class="relative bottom-20"></hr>
            </div>
            <div style={{width:200,height:250}} class="border-2 bg-white float-left text-gray-500 border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <h1 class="mt-2 p-4">Edit Profiles</h1>
                <h1 class="text-gray-500 mt-2 ml-4">Change Password</h1>
                <h1 class="text-gray-500 border-4 border-blue-500  border-b-0 border-r-0 border-t-0 p-3 mt-6">Invoices</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Certificate</h1>
                <img src="./assets/pad.png" class="mt-32 relative right-4"></img>
                

            </div>
            <div style={{width:700,height:350}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <h1 class="text-gray-500 ml-64 mt-16">VERIFY CERTIFICATE</h1><br></br>
                <input type="text" placeholder="Your Text" class="border border-gray-500 border-t-0 border-l-0 border-r-0 outline-0 ml-20  text-sm p-2" style={{width:500}}></input>
                <input type="text" placeholder="Enter Text" class="border mt-6 border-gray-500 border-t-0 border-l-0 border-r-0 outline-0 ml-20  text-sm p-2" style={{width:500}}></input><br></br>
                <button class="text-white mt-10 text-sm ml-72 w-40 p-2 bg-blue-500">Verify</button>
                </div>

                
            </div>
            
        
    )
}