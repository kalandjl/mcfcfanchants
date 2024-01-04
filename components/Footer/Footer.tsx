
import { TagCount, getTags } from "@/lib/db";
import { capitalizeEachWord } from "@/lib/strings";
import getTagsCached from "@/utils/getTags";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";
import FooterTags from "./FooterTags";
import FooterPages from "./FooterPages";
 
interface Props {

}

export const revalidate = 3600

const Footer: FC<Props> = async (props: Props) => {

    const data = await getTagsCached()

    return (
        <>  
            <div 
            className="bg-zinc-800 min-h-32 pl-6 pr-24 py-6 font-mono text-white">
                <div 
                className="grid grid-cols-3 gap-6">
                    <div 
                    className="flex flex-col">
                        <div
                        // style={{boxShadow: "-5px 5px 2px rgba(31, 53, 105, .8)"}}
                        className="bg-sky-300 mb-5 text-black grid place-items-center h-min">
                            <p
                            className="w-full px-4 py-3 font-open-sans text-sm font-bold">
                                CONTACT
                            </p>
                        </div>
                        <p>
                            mcfcfanchants@gmail.com
                        </p>
                        <p>
                            604-710-0331
                        </p>
                    </div>
                    <div 
                    className="flex flex-col">
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
                    className="flex flex-col">
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