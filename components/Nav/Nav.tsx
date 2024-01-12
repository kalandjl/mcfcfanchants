import Link from "next/link";
import { FC } from "react";
import NavAuthClient from "./NavAuthClient";


interface Props {

}

const Nav: FC<Props> = (props: Props) => {


    const links = ['About', 'Chants', 'Suggest', 'Tags', 'Contact']

    return (
        <>
            <div
            className="bg-zinc-800 relative">
                <div
                className="text-white pl-5 font-bold text-lg relative">
                    <div id="container"
                    className="flex justify-between">
                        {/* <Image
                        alt="logo"
                        src="/logo.png"
                        className="w-7"
                        width={0}
                        height={0}/> */}
                        <div className="flex py-2">
                            {links.map((link, i) => (
                                <Link
                                key={`link-${i}`}
                                href={`/${link.toLocaleLowerCase()}`}
                                className={`h-full pl-7 sm:pl-5 hover:underline hover:cursor-pointer
                                underline-offset-2 sm:text-sm md:text-md`}>
                                    <div
                                    className={`
                                    ${i === 0 ? "" : "absolute top-0 bottom-0 bg-white opacity-20 w-.25"}`}>
                                    </div> 
                                    <div 
                                    className={`${i === 0 ? "" : "sm:ml-5 ml-7"} 
                                    h-full grid place-items-center`}>
                                        {link.toLocaleUpperCase()}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <NavAuthClient />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav