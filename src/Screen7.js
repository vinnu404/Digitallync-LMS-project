import React from 'react'
import { BsClock } from 'react-icons/bs';
import { AiFillCheckCircle, AiFillCiCircle, AiFillAmazonCircle } from 'react-icons/ai';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoArrowUndo } from 'react-icons/io5';
const Screen7 = () => {
    return (
        <div>
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
                <hr class="border-4 border-blue-500 w-20 ml-96 relative left-36 top-4"></hr>
                <hr class="mt-4"></hr>
            </div><br></br><br></br>
            <div>
                <img src="./assets/user.png" class="ml-20"></img>
                <p class="ml-36 relative bottom-8 text-gray-500">Start Discusion</p>
                <hr class="relative bottom-6 ml-36" style={{ width: 650 }}></hr>
                <img src="./assets/user.png" class="ml-20"></img>
                <p class="ml-36 relative bottom-8 text-gray-500">How To Upload file in AWS</p>
                <p class="ml-36 relative bottom-8 text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br></br>
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                <hr class="relative bottom-6 ml-28 text-gray-500" style={{ width: 800 }}></hr>
                <img src="./assets/user.png" class="ml-40"></img>
                <p class="ml-56 relative bottom-8 text-gray-500">Write a Reply</p>
                <hr class="relative bottom-6 ml-56" style={{ width: 600 }}></hr>
                <p class="ml-40 text-gray-500"><u>30 Replys</u></p>
                <img src="./assets/user.png" class="ml-40 relative top-2"></img>
                <p class="ml-56 relative bottom-8 text-gray-500">Ankit</p>
                <p class="ml-56 relative bottom-8 text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br></br>
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                <IoArrowUndo style={{ fontSize: 30 }} class="ml-56 relative bottom-4" />
                <p class="text-gray-500 ml-72 relative bottom-10">Reply</p>
                <img src="./assets/user.png" class="ml-40 relative top-2"></img>
                <p class="ml-56 relative bottom-8 text-gray-500">Suresh</p>
                <p class="ml-56 relative bottom-8 text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br></br>
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                <IoArrowUndo style={{ fontSize: 30 }} class="ml-56 relative bottom-4" />
                <p class="text-gray-500 ml-72 relative bottom-10">Reply</p>
                <p class="ml-40 text-gray-500 relative bottom-6"><u>View all</u></p>
                <hr class="relative bottom-6 ml-28 mt-2 text-gray-500" style={{ width: 830 }}></hr>
                <img src="./assets/user.png" class="ml-20"></img>
                <p class="ml-36 relative bottom-8 text-gray-500">How To Upload file in AWS</p>
                <p class="ml-36 relative bottom-8 text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br></br>
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-52 rounded-l-3xl relative bottom-20" style={{ marginLeft: 904 }}>Have a doubt?Rise a query</button>
                <img src="./assets/green.png" class="w-2 relative bottom-28" style={{ marginLeft: 900 }}></img>



            </div>

        </div>
    )
}

export default Screen7
