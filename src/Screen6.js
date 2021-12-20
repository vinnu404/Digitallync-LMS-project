import React from 'react'
import { BsClock } from 'react-icons/bs';
import { AiFillCheckCircle, AiFillCiCircle, AiFillAmazonCircle } from 'react-icons/ai';
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai';
import { IoArrowUndo } from 'react-icons/io5';
const Screen6 = () => {
    return (
        <div>
            <div className='opacity-50'>
                <div class="w-screen">
                    <img src="./assets/dl.png" class="mt-6 ml-32"></img>
                    <h1 style={{ marginLeft: 900 }} class="relative bottom-12"><u>My Class Room</u></h1>
                    <img src="./assets/bellicon.png" style={{ marginLeft: 1050 }} class="relative bottom-20"></img>
                    <img src="./assets/user.png" style={{ marginLeft: 1120 }} class="relative bottom-28 w-8"></img>
                </div>
                <div class="h-16 relative bottom-10 bg-blue-100">
                    <BsClock class="ml-44 relative top-4" style={{ fontSize: 30 }} color="gray" />
                    <p class="ml-56 relative bottom-2 text-gray-500">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
                    <button class="w-36 p-1 relative bottom-10 bg-blue-500 text-white" style={{ marginLeft: 900 }}>Join Class</button>
                </div>
                <div>
                    <p class="ml-20 text-sm">Recorded Classes</p>
                </div>
                <div class="border-2 drop-shadow-2xl float-left border-gray-300 ml-20 mt-6 rounded-xl" style={{ width: 450 }}>
                    <p class="ml-12 mt-4">Module 1: UI Design</p>
                    <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <p class="mt-4 p-1 pl-12 bg-gray-300">Module 2: UX Design</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                    <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                </div>
                <div class="float-left mt-20 ml-44">
                    <img src="./assets/video.png"></img>
                </div>
                <div class="clear-left relative top-8">
                    <ul class="flex ml-20">
                        <li class="text-gray-500">Courses Info</li>
                        <li class="text-gray-500 ml-10">Resources</li>
                        <li class="text-gray-500 ml-10">Assisments</li>
                        <li class="text-gray-500 ml-10">Projects</li>
                        <li class="text-gray-500 ml-10">Discuss</li>
                        <li class="text-gray-500 ml-10">Feedback</li>
                    </ul>
                    <hr class="border-4 border-blue-500 w-20 ml-96 relative left-9  top-4"></hr>
                    <hr class="mt-4"></hr>
                </div><br></br><br></br>


                <div>
                    <h1 class="font-bold ml-20">Project 1: Server Management on AWS</h1>
                    <p class="ml-20 mt-2 text-gray-500">This Project will showcase how to Host Static Application on AWS with best practices</p>
                    <p class="ml-20 text-gray-500">Concepts Used : VPC, EC2, ELB, ASG, CloudWatch, SNS</p>
                    <img src="./assets/download.png" class="ml-20 mt-2"></img>
                    <h1 class="ml-32 relative bottom-6 text-gray-500">Download Project Files</h1>
                    <hr class="border border-gray-300 ml-20" style={{ width: 900 }}></hr>
                    <h1 class="font-bold ml-20 mt-4">Project 1: Server Management on AWS</h1>
                    <p class="ml-20 mt-2 text-gray-500">This Project will showcase how to Host Static Application on AWS with best practices</p>
                    <p class="ml-20 text-gray-500">Concepts Used : VPC, EC2, ELB, ASG, CloudWatch, SNS</p>
                    <img src="./assets/download.png" class="ml-20 mt-2"></img>
                    <h1 class="ml-32 relative bottom-6 text-gray-500">Download Project Files</h1>
                </div>
                <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-10 left-32" style={{ marginLeft: 904 }}>Have a doubt?Rise a query</button>
                <img src="./assets/green.png" class="w-2 relative bottom-16 left-32" style={{ marginLeft: 900 }}></img>
            </div>
            <div class="border border-gray drop-shadow-xl mt-60 ml-96 bg-white " style={{width:600,height:350,position:"relative",bottom:800}}>
               <h1 class="text-gray-500 mt-8 ml-8">Enter a Topic</h1>
               <hr class="ml-8 mt-2 border" style={{width:500}}></hr>
               <h1 class="text-gray-500 mt-6 ml-8">Write here</h1>
               <hr class="ml-8 mt-32 border" style={{width:500}}></hr>
               <button class="w-32 p-2 mt-8 ml-8 text-xs text-white bg-blue-500">Start Discussion</button>
            </div>
        </div>
    )
}

export default Screen6
