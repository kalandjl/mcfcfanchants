import { capitalizeEachWord } from "@/lib/strings";
import Link from "next/link";
import { FC } from "react";

interface Props {

}
const links = ["/home", "/about", "/chants", "/submit", "/sign-in", "/sign-up", "/tags"]

const FooterPages: FC<Props> = (props: Props) => {


    return (
        <>
            {links.map((link, i) => 
                <Link
                key={i}
                href={link.replace("home", "")}>
                    <div 
                    className="inline-block bg-black py-1 px-2 text-white mr-1 mb-2 text-sm font-open-sans font-bold hover:cursor-pointer hover:bg-sky-500">
                        {capitalizeEachWord(link.replace("-", " ").replace("/",""))}
                    </div>
                </Link>
            )}
        </>
    )
}

export default FooterPages