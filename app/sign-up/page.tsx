"use client"
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

const Page = () => {

    return (
        <>
            <button
            className="hover:bg-sky-400 bg-sky-300 p-3 w-1/4 rounded-md"
            onClick={async e => {

                try {
                    const res = await signInWithPopup(auth, provider)

                    let { user } = res
    
                    const credential = GoogleAuthProvider.credentialFromResult(res);
                    const token = credential?.accessToken
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
                Sign in
            </button> 
        </>
    )
}

export default Page