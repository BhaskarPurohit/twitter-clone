"use client"

import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"
import { BiMessageRounded, BiUpload } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa"

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all gap-2 cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/63875407?v=4" alt="Profile Photo" height={50} width={50} className="rounded-full" />
                </div>
                <div className="col-span-11">
                    <h5>Bhaskar Purohit</h5>
                    <p>I am a software developer with 3 years of experience in MERN stack</p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-[70%]">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard