"use client"
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const Page = () => {

    let [user] = useAuthState(auth)

    return (
        <>
            {user ? <>Already Signed In</> : 
                <button
                className="hover:bg-sky-400 bg-sky-300 p-3 rounded-md"
                onClick={async e => {

                    try {
                        const res = await signInWithPopup(auth, provider)

                    } catch (e) {

                        // @ts-ignore
                        const errorCode = e.code;
                        // @ts-ignore
                        const errorMessage = e.message;
                        // @ts-ignore
                        const email = e.customData.email;
                        // @ts-ignore
                        const credential = GoogleAuthProvider.credentialFromError(e);
                    }
                }}>
                    <div className="flex">
                        <Image src="/google-icon.png" alt="Google Icon" width={100} height={50} />
                        <p
                        className="h-26 grid place-items-center w-max whitespace-nowrap font-bold mr-2">
                            SIGN UP
                        </p> 
                    </div>                
                </button> 
            }
        </>
    )
}

export default Page