import Image from "next/image";
import {useMoralis} from "react-moralis"
function Avatar({logoutOnPress},{usernamee}) {
    const {user,logout}=useMoralis();
    return (
            <Image 
            className="relative rounded-full bg-black cursor-pointer
             overflow-hidden hover:opacity-75"
             layout="fill"
            src={`https://avatars.dicebear.com/api/avataaars/${
                usernamee||user.getUsername()
            }.svg`}
            onClick={()=>logoutOnPress&&logout()}
            />
    )
}

export default Avatar
