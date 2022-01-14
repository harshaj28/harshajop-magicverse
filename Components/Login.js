import Image from "next/image"
import {useMoralis} from "react-moralis"

function Login() {
    const {authenticate}=useMoralis();
    return (
        <div className="bg-black relative">
            <h1>Login Page</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                src={"/profilep.jpeg"}
                height={200}
                width={200}
                className="opacity-70 object-cover rounded-full "
                />
                <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Enter Harshajop's MAGICVERSE</button>
            </div>
            <div className="h-screen w-full">
                <Image 
                src={"/bg.jpg"}
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
