"use client"
import { auth } from "@/lib/firebase";
import { Logout, LogoutOutlined, LogoutTwoTone } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {

}

const signedOutLinks = [
    {
        text: "SIGN IN",
        href: "/sign-in"
    },
    {
        text: "SIGN UP",
        href: "/sign-up"
    },
]

const NavAuthClient:FC<Props> = (props: Props) => {

    const [user, loading, error] = useAuthState(auth);    

    return (
        <>
            <div
            className="flex gap-4 pr-8 text-white">
                {user?.uid ? 
                <>
                    <form action="" className="">
                        <button
                        onClick={e => {
                            signOut(auth)
                        }}
                        className="hover:cursor-pointer grid place-items-center bg-sky-500 absolute right-0 px-2"
                        type="submit">
                            <div className="flex py-2">
                                <p className="sm:text-sm md:text-md hover:underline underline-offset-1">SIGN OUT</p> 
                            </div>
                        </button>     
                    </form>
                </> :
                <div
                className="flex py-2 bg-sky-500 absolute right-0 gap-5 px-3">
                    {
                    signedOutLinks.map((item, i) => 
                        <>
                            <Link
                            key={i}
                            href={item.href}
                            className={`hover:underline sm:text-sm md:text-md`}>
                                {item.text}
                            </Link>
                        </>
                    )
                    }
                </div> 
                }
            </div>
        </>
    )
}

export default NavAuthClient