import React from 'react'

export default function Screen20() {
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
                <h1 class="text-gray-500 border-4 border-blue-500  border-b-0 border-r-0 border-t-0 p-3 mt-2">Change Password</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Invoices</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Certificate</h1>
                <img src="./assets/pad.png" class="mt-32 relative right-4"></img>
                

            </div>
            <div style={{width:700,height:350}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <input type="password" placeholder="Old Password" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm mt-14" style={{width:500}}></input><br></br>
                <input type="password" placeholder="New Password" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm mt-8" style={{width:500}}></input><br></br>
                <input type="password" placeholder="Confirm Password" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm mt-8" style={{width:500}}></input><br></br>
         
                <button class="text-sm bg-blue-500 text-white ml-10 w-40 p-2 mt-6">Change Password</button>
               
                
            </div>
            
        </div>
    )
}