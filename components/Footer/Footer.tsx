"use client"

import { TagCount, getTags } from "@/lib/db";
import { capitalizeEachWord } from "@/lib/strings";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";
 
interface Props {

}

const fetcher = async (...args: any) => {

    return await getTags()
}

const Footer: FC<Props> = (props: Props) => {

    const { data, error } = useSWR('undefined', fetcher)

    return (
        <>  
            <div 
            className="bg-zinc-800 min-h-32 pl-6 pr-24 py-6 font-mono text-white">
                <div 
                className="grid grid-cols-3 gap-6">
                    <div 
                    className="grid grid-cols-1">
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
                    className="grid grid-cols-1">
                        <div
                        // style={{boxShadow: "-5px 5px 2px rgba(31, 53, 105, .8)"}}
                        className="bg-sky-300 h-min text-black grid place-items-center">
                            <p
                            className="w-full px-4 py-3 font-open-sans text-sm font-bold">
                                PAGES
                            </p>
                        </div>
                    </div>
                    <div 
                    className="grid grid-cols-1">
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
                                {
                                    false ? 
                                    <></>
                                    : <>
                                    {data?.props.sortedTagCounts.map((tag: TagCount, i: number) => 
                                    <Link
                                    key={i}
                                    href={`/tag/${tag.tag}`}>
                                        <div 
                                        className="inline-block bg-black py-1 px-2 text-white mr-1 mb-2 text-sm font-open-sans font-bold hover:cursor-pointer hover:bg-sky-500">
                                            {capitalizeEachWord(tag.tag).replace("_", " ")}
                                        </div>
                                    </Link>
                                    )}
                                    </>
                                }
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer