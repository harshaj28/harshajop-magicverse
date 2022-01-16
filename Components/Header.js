import {useMoralis} from "react-moralis"
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
    const {user}=useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div className="grid grid-cols-5 md:grid-cols-6 items-end md:items-center ">
                <div className="relative h-24 w-24 mx-auto hidden
                md:inline-grid">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    src={"/profilep.jpeg"}
                    />
                </div>
                <div className=" col-span-4 text-left md:text-center">
                <div className="relative h-48 w-48
                md:mx-auto border-pink-500 border-4 rounded-full">
                    <Avatar logoutOnPress></Avatar>
                </div>
                <h1 className="text-3xl">Welcome to HarshajOp's MAGICVERSE</h1>
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header