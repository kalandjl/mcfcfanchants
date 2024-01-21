import { capitalizeEachWord } from "@/lib/strings";
import Link from "next/link";
import { FC } from "react";
import CloudLink from "../CloudLink";

interface Props {

}

const links = [
    {
        text: "Home",
        link: "/",
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
    {
        text: "Contact",
        link: "/contact"
    }
]

const FooterPages: FC<Props> = (props: Props) => {


    return (
        <>
            {links.map((obj, i) =>
                <CloudLink
                key={i}
                href={obj.link}
                text={obj.text}
                template="footer" />
            )}
        </>
    )
}

export default FooterPages