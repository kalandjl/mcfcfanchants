import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


interface Props {

}

const Nav: FC<Props> = (props: Props) => {


    const links = ['About', 'Chants', 'Submit', 'Tags']

    return (
        <>
            <div
            className="bg-zinc-800">
                <div
                className="text-white pl-14 py-3 font-bold text-lg">
                    <div id="container"
                    className="flex justify-between">
                        {/* <Image
                        alt="logo"
                        src="/logo.png"
                        className="w-7"
                        width={0}
                        height={0}/> */}
                        <div className="flex">
                            {links.map((link, i) => (
                            <Link
                            key={`link-${i}`}
                            href={`/${link.toLocaleLowerCase()}`}
                            className={`${i === 0 ? "" : "border-l-2 pl-7 ml-7 border-gray-200"} hover:underline hover:cursor-pointer underline-offset-2`}>
                                {link}
                            </Link>
                            ))}
                        </div>
                        <div
                        className="flex gap-4 pr-8 text-white">
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
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav