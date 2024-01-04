"use client"
import { auth } from "@/lib/firebase";
import { Logout } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {

}

const NavAuthClient:FC<Props> = (props: Props) => {

    const [user, loading, error] = useAuthState(auth);    

    return (
        <>
            <div
            className="flex gap-4 pr-8 text-white">
                {user?.uid ? 
                <>
                    <form action="">
                        <button
                        onClick={e => {
                            signOut(auth)
                        }}
                        className="hover:cursor-pointer flex"
                        type="submit">
                            <p>Logout</p> 
                            <div className="w-2"></div>
                            <Logout />
                        </button>     
                    </form>
                </> :
                <>
                    <Link
                    href="/sign-in"
                    className="hover:underline">
                        Sign in
                    </Link>
                    <Link
                    href="/sign-up"
                    className="hover:underline">
                        Sign up
                    </Link>
                </> 
                }
            </div>
        </>
    )
}

export default NavAuthClient