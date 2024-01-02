"use client"
import { addChant } from "@/lib/db"
import { auth } from "@/lib/firebase"
import Link from "next/link"
import { useRef } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

const Home = () => {

    const email  = useRef(null)
    const title = useRef(null)
    const lyrics = useRef(null)

    let [ user ] = useAuthState(auth)

    return (
        <>
            <div className="grid grid-cols-1">
                {user ? 
                <>
                    <p
                    className="font-semibold">
                        Chant suggestions:
                    </p>
                    <form 
                    action=""
                    className="grid grid-cols-1 gap-5 rounded-sm bg-sky-300 p-10 mt-5 font-mono"
                    onSubmit={e => {

                        e.preventDefault()
                        
                        if(!email.current || !title.current || !lyrics.current) return window.Error("Missing values")
                        // @ts-ignore
                        if(!email.current.value || !title.current || !lyrics.current) return window.Error("Missing values")
                        
                        addChant(
                            // @ts-ignore
                            email.current.value,
                            // @ts-ignore
                            title.current.value,
                            // @ts-ignore
                            lyrics.current.value
                        )
                    }}>
                        <div>
                            <label 
                            htmlFor="email" 
                            className="block text-sm font-semibold leading-6 text-gray-900">
                                Your email
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input 
                                    ref={email}
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                    placeholder="johndoe@gmail.com" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label 
                            htmlFor="chant title" 
                            className="block text-sm font-semibold leading-6 text-gray-900">
                                Chant title
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input 
                                    ref={title}
                                    type="text" 
                                    name="chant title" 
                                    id="chant-title" 
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                    placeholder="Blue moon" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label 
                            htmlFor="chant lyrics" 
                            className="block text-sm font-semibold  leading-6 text-gray-900">
                                Chant lyrics
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input 
                                    ref={lyrics}
                                    type="textarea" 
                                    name="chant lyrics" 
                                    id="chant-lyrics" 
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                                    placeholder="You saw me standing alone" />
                                </div>
                            </div>  
                        </div>
                        <div
                        className="w-min ">
                            <button 
                            className="hover:bg-sky-400 p-2"
                            type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </> :
                <>
                    <p>Must be have an account in order to submit chants</p> 
                    <Link href="/sign-in">
                        <p
                        className="text-blue-500 underline">
                            SIGN IN
                        </p>
                    </Link> 
                    <Link href="/sign-up">
                        <p
                        className="text-blue-500 underline">
                            SIGN UP
                        </p>
                    </Link>
                </>
                }

            </div>
        </>
    )
}

export default Home