import Link from "next/link";
import { FC } from "react";


interface Props {

}

const Nav: FC<Props> = (props: Props) => {


    const links = ['About', 'Chants', 'Submit']

    return (
        <>
            <div
            className="bg-zinc-800">
                <div
                className="flex text-white pl-14 py-3 font-bold text-lg">
                    {links.map((link, i) => (
                    <Link
                    key={`link-${i}`}
                    href={`/${link.toLocaleLowerCase()}`}
                    className={`${i === 0 ? "" : "border-l-2 pl-7 ml-7 border-gray-200"} hover:underline hover:cursor-pointer underline-offset-2`}>
                        {link}
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Nav