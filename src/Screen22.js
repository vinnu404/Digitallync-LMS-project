import React from 'react'

export default function Screen22() {
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
            <div style={{width:700,height:450}} class="border-2 bg-white float-left border-gray-300 rounded-xl drop-shadow-2xl ml-32 relative bottom-10">
                <img src="./assets/aws.jpg" class="w-36 ml-20 mt-10"></img>
                <p class="ml-64 relative bottom-16 text-gray-800">AWS</p>
                <hr class="border-4 border-blue-500 rounded-xl ml-64 relative bottom-12" style={{width:400}}></hr>
                <p class="text-gray-800 ml-96 relative left-20 bottom-10">100% Course Completed</p>
                <p class="ml-72 relative mt-2 bottom-10 text-sm text-blue-500"><u>DOWNLOAD CERTIFICATE</u></p>
                <p class="ml-96 relative left-32 mt-2 bottom-20 text-sm text-gray-500"><u>VERIFY CERTIFICATE</u></p>
                <hr style={{width:580}} class="ml-20 relative bottom-10"></hr>
                <div class="relative bottom-16">
                <img src="./assets/python.jpg" class="w-36 ml-20 mt-10"></img>
                <p class="ml-64 relative bottom-16 text-gray-800">Python</p>
                <hr class="border-4 border-gray-400 rounded-xl ml-64 relative bottom-12" style={{width:400}}></hr>
                <hr class="border-4 border-blue-500 rounded-xl ml-64 relative bottom-16" style={{width:160,position:"relative",bottom:56}}></hr>
                <p class="text-gray-800 ml-96 relative left-20 bottom-10">40% Course Completed</p>
                <p class="text-gray-500 ml-96 text-sm relative left-12 bottom-8">You can Download Certificate after<br></br>
                 complete course completion</p>
                </div>

                
            </div>
            
        </div>
    )
}