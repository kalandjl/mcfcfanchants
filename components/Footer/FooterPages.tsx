import { capitalizeEachWord } from "@/lib/strings";
import Link from "next/link";
import { FC } from "react";

interface Props {

}
const links = [
    {
        text: "Home",
        link: "/home",
    },
    {
        text: "About",
        link: "/about",
    },
    {
        text: "Chants",
        link: "/chants",
    },
    {
        text: "Suggest",
        link: "/suggest",
    },
    {
        text: "Sign In",
        link: "/sign-in",
    },
    {
        text: "Sign Up",
        link: "/sign-up",
    },
    {
        text: "Tags",
        link: "/tags",
    },
    {
        text: "Privacy Policy",
        link: "/policy/privacy",
    },
    {
        text: "Terms of Service",
        link: "/policy/tos",
    },
    
]

const FooterPages: FC<Props> = (props: Props) => {


    return (
        <>
            {links.map((obj, i) => 
                <Link
                key={i}
                href={obj.link}>
                    <div 
                    className="inline-block bg-black py-1 px-2 text-white mr-1 mb-2 text-sm font-open-sans font-bold hover:cursor-pointer hover:bg-sky-500">
                        {obj.text}
                    </div>
                </Link>
            )}
        </>
    )
}

export default FooterPages