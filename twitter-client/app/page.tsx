"use client"

import Image from "next/image";
// import {} from "react-icons"
import { Inter } from "next/font/google";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast"
import { graphql } from "graphql";
import { GraphQLClient } from "graphql-request";
const inter = Inter({ subsets: ["latin"] })

interface TwitterSidbarButton {
  title: string;
  icon: React.ReactNode;
}

// const graphqlClient = new GraphQLClient()

const SideBarMenuItems: TwitterSidbarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,

  },

  {
    title: "Explore",
    icon: <BiHash />
  },

  {
    title: "Notifications",
    icon: <BsBell />
  },

  {
    title: "Messages",
    icon: <BsEnvelope />
  },

  {
    title: "Bookmarks",
    icon: <BsBookmark />
  },

  {
    title: "Profile",
    icon: <BiUser />
  },

  {
    title: "Twitter Blue",
    icon:<BiMoney/>
  },

  {
    title:"More",
    icon:<SlOptions/>
  }
]
export default function Home() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse)=>{
    
  },[])

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-2 px-4  ml-28">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />

          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {SideBarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 cursor-pointer w-fit" key={item.title}>
                <span className="text-3xl">{item.icon}</span>
                <span>{item.title}</span>

              </li>)}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold text-lg mt-5 py-2 px-4 rounded-full w-full">Twitter</button>

            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[0.5px] border-l-[1px] h-screen overflow-scroll border-gray-500">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 p-5">
          <div className=" bg-slate-700 p-5">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={(cred)=> console.log(cred)
            }/>
          </div>
        </div>
      </div>
    </div>
  );
}
