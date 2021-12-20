import React from 'react';
import { BsClock, BsCircle} from 'react-icons/bs';
import { BsArrowLeft,BsSquare,BsCheckSquareFill} from 'react-icons/bs';

export default function Screen29() {
    return (
        <div class="h-screen w-screen">
           <div class="float-left">
            <img src="./assets/dl.png" class="mt-6 ml-32"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8"><u>My Class Room</u></h1>
                <img src="./assets/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16"></img>
                <img src="./assets/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8"></img> 
            </div>
            <div class="h-16 clear-left relative bottom-14 bg-blue-100">
            <BsClock class="ml-36 relative top-4" style={{fontSize:30}} color="gray"/>
            <p class="ml-48 relative bottom-4 text-xl text-gray-500 font-lg">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
            <button class="w-36 p-1 relative bottom-10 bg-blue-500 text-white" style={{marginLeft:900}}>Join Class</button>
            <BsArrowLeft size={40} color="gray" class="ml-32"/><span class="ml-52 relative bottom-8 text-gray-500">Assignments</span>
            <hr class="border-1 border-gray-300"></hr>
            </div><br></br><br></br>
            <div>
                <p class="text-gray-500 mt-8 ml-20">Question 1:</p>
                <p class="ml-20 mt-2 text-gray-800">A front-end developer works with languages like</p>
            </div>
            <div class="border border-gray-300 ml-20 mt-6" style={{width:500,height:40}}>
                <BsCircle class="mt-2 ml-4" color="gray" size={20}/>
                <p class="ml-16 relative bottom-6 text-gray-500 text-sm">HTML,CSS and PHP</p>

            </div>
            <div class="border border-gray-300 ml-20 mt-4" style={{width:500,height:40}}>
                <BsCircle class="mt-2 ml-4" color="gray" size={20}/>
                <p class="ml-16 relative bottom-6 text-gray-500 text-sm">HTML,CSS and Swift</p>

            </div>
            <div class="border border-gray-300 ml-20 mt-4" style={{width:500,height:40}}>
                <BsCircle class="mt-2 ml-4" color="gray" size={20}/>
                <p class="ml-16 relative bottom-6 text-gray-500 text-sm">HTML,CSS and JavaScript</p>

            </div>
            <p class="ml-20 mt-14 text-gray-500" style={{marginLeft:950}}>Skip Question</p>
            <p class="font-bold  w-40 p-2  text-blue-500 relative bottom-8" style={{marginLeft:1100}}><u>Next </u></p>

            <div class="relative top-8">
                   <ul class="flex ml-20">
                       <li class="text-gray-500">Courses Info</li>
                       <li class="text-gray-500 ml-10">Resources</li>
                       <li class="text-gray-500 ml-10">Assisments</li>
                       <li class="text-gray-500 ml-10">Projects</li>
                       <li class="text-gray-500 ml-10">Discuss</li>
                       <li class="text-gray-500 ml-10">Feedback</li>
                   </ul>
                   <hr class="border-4 border-blue-500 w-28 ml-16 relative  top-4"></hr>
                   <hr class="mt-4"></hr>
               </div><br></br><br></br>
               <div>
                   <h1 class="font-bold text-gray-500 text-xl ml-20 mt-2">About this Course</h1>
                   <h1 class="ml-20 text-gray-500 mt-2">Course Name: UI/UX</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
                   <h1 class="ml-20 text-gray-500 mt-2">Start Course:</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
                   <h1 class="ml-20 text-gray-500 mt-2">Duration: 20hr</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
                   <h1 class="ml-20 text-gray-500 mt-2">Modules: 10</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
                   <h1 class="ml-20 text-gray-500 mt-2">Prerequisities: No</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
                   <h1 class="ml-20 text-gray-500 mt-2">Skill Level: Beginner</h1>
                   <hr class="w-40 mt-1 ml-20"></hr>
               </div>


            
        </div>
    )
}