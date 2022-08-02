import Image from "next/image"
import Link from "next/link"
import githublogo from "../public/assets/img/github.svg"
import profile from "../public/assets/img/uday.jpg"
import { BellIcon, PlusIcon } from '@heroicons/react/outline'

const Header = () => {
    return <div className="flex justify-between items-center bg-header px-8 py-3">
        <div className="flex items-center">
            <div className="flex items-center">
                <Image src={githublogo} width={40} height={40} alt="github-logo" />
                <div className="mx-4 border rounded border-gray-400 flex items-center">
                    <input className="bg-transparent text-white text-[12px] py-1 px-2 border-none outline-none w-64 font-bold" placeholder="Search or jump to... " />
                </div>
            </div>
            <ul className="flex items-center text-light-white gap-4 font-bold text-sm">
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="3">Pull requests</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="3">Issues</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="3">Marketplace</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="3">Explore</Link>
                </li>
            </ul>
        </div>
        <div className="flex items-center gap-3">
            <span>
                <BellIcon className="w-5 h-5 text-white" />
            </span>
            <span>
                <PlusIcon className="w-5 h-5 text-white" />
            </span>
            <span className="flex">
                <Image src={profile} width="20" height="20" alt="profile pic" className="rounded-full" />
            </span>


        </div>
    </div>
}

export default Header