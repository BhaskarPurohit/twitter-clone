"use client"

import Image from "next/image"

const FeedCard: React.FC = ()=>{
    return(
        <div className="border border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/63875407?v=4" alt="Profile Photo" height={50} width={50} className="rounded-full"/>
                </div>
                <div className="col-span-11">
                    <h5>Bhaskar Purohit</h5>
                    <p>I am a software developer with 3 years of experience in MERN stack</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard