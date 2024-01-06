
import getTagsCached from "@/utils/getTags";
import { FC, useEffect, useState } from "react";
import FooterTags from "./FooterTags";
import FooterPages from "./FooterPages";
import { contacts } from "@/lib/contact";
 
interface Props {

}

export const revalidate = 3600

const Footer: FC<Props> = async (props: Props) => {

    const data = await getTagsCached()

    return (
        <>  
            <div 
            id="footer"
            className="bg-zinc-800 min-h-32 sm:pr-6 md:pr-14 pl-6 lg:pr-24 py-6 font-mono text-white">
                <div 
                className="
                sm:grid-cols-2 md:grid-cols-3
                grid gap-6">
                    <div 
                    className="flex flex-col 
                    sm:hidden md:block"
                    id="footer-contact-section">
                        <div
                        // style={{boxShadow: "-5px 5px 2px rgba(31, 53, 105, .8)"}}
                        className="bg-sky-300 mb-5 text-black grid place-items-center h-min">
                            <p
                            className="w-full px-4 py-3 font-open-sans text-sm font-bold">
                                CONTACT
                            </p>
                        </div>
                        {contacts.map((contact, i) => 
                            <p
                            key={i}
                            className="md:text-sm lg:text-md">
                                {contact}
                            </p>
                        )}
                    </div>
                    <div 
                    className="flex flex-col"
                    id="footer-pages-section">
                        <div
                        // style={{boxShadow: "-5px 5px 2px rgba(31, 53, 105, .8)"}}
                        className="bg-sky-300 h-min text-black grid place-items-center">
                            <p
                            className="w-full px-4 py-3 font-open-sans text-sm font-bold">
                                PAGES
                            </p>
                        </div>

                        <div className="mt-5">
                            <FooterPages />
                        </div>
                    </div>
                    <div 
                    className="flex flex-col"
                    id="footer-tags-section">
                        <div
                        // style={{boxShadow: "-5px 5px 2px rgba(31, 53, 105, .8)"}}
                        className="bg-sky-300 h-min text-black grid place-items-center">
                            <p
                            className="w-full px-4 py-3 font-open-sans text-sm font-bold">
                                TAGS
                            </p>
                        </div>
                        <div
                        className="mt-5">
                            <FooterTags />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer