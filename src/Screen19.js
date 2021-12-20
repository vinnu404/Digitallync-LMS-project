import React from 'react'

export default function Screen19() {
    return (
        <div style={{height:300}}>
             <div>
            <img src="./assets/dl.png" class="mt-6 ml-32"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8"><u>My Class Room</u></h1>
                <img src="./assets/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16"></img>
                <img src="./assets/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8"></img> 
                <hr class="relative bottom-20"></hr>
            </div>
            <div style={{width:200,height:250}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-20 relative bottom-10">
                <h1 class="border-4 border-blue-500 text-gray-500 border-b-0 border-r-0 border-t-0 mt-2 p-4">Edit Profiles</h1>
                <h1 class="text-gray-500 ml-4 mt-2">Change Password</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Invoices</h1>
                <h1 class="text-gray-500 ml-4 mt-6">Certificate</h1>
                <img src="./assets/pad.png" class="mt-32 relative right-4"></img>
                

            </div>
            <div style={{width:700,height:600}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <img src="./assets/user.png" class="w-20 ml-12 mt-10"></img>
                <p class="text-base ml-44 relative bottom-12 text-gray-500">Change Photo</p>
                <input type="text" placeholder="Full name" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm" style={{width:550}}></input><br></br><br></br>
                <input type="text" placeholder="User Name" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm" style={{width:550}}></input><br></br><br></br>
                <input type="text" placeholder="Email" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm" style={{width:550}}></input><br></br><br></br>
                <input type="text" placeholder="Phone" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm" style={{width:550}}></input><br></br><br></br>
                <input type="text" placeholder="Location" class="border border-t-0 border-r-0 border-l-0 ml-8 p-2 text-sm" style={{width:550}}></input><br></br><br></br>
                <label class="text-gray-500 ml-10">Gender</label>
                <input type="radio" name="gen" class="ml-10"></input><span class="text-gray-500 ml-2">Male</span>
                <input type="radio" name="gen" class="ml-10"></input><span class="text-gray-500 ml-2">FeMale</span>
                <input type="radio" name="gen" class="ml-10"></input><span class="text-gray-500 ml-2">Other</span><br></br>
                <button class="text-sm bg-blue-500 text-white ml-10 w-28 p-1 mt-6">Submit</button>
               
                
            </div>
            
        </div>
    )
}