"use client"
import { DocumentSnapshot, WhereFilterOp } from "firebase/firestore"
import Chant from "../Chant"
import offlineChants from "@/lib/offlineChants";
import { ReactNode, useEffect, useMemo, useState } from "react";

interface Chant {
    title: string
    lyrics: string[]
    tags: string[]
}

interface Props {
    chants: Chant[]
    props: {
        limit: number
        queryProps?: [string, WhereFilterOp, string],
        offline?: boolean
        pageLimit?: number
    }
}

const ChantPages = (props: Props) => {

    const { chants } = props 
    const pageLimit = props.props.pageLimit ?? 5

    // Memoize value of pages numbers
    const pageNumber = useMemo(() => {
        return Math.ceil((chants.length / pageLimit))
    }, [pageLimit, chants.length]) 

    // Current page
    let [page, setPage] = useState(1)
    let [pageChanges, setPageChanges] = useState(0)

    // Scroll to top of window on page change
    useEffect(() => {
        
        if (pageChanges === 0) return
        window.scrollTo(0, 200);
        setPageChanges(pageChanges + 1)
    }, [page]);

    console.log(pageNumber)
    return (
        <>
            <div
            id="chants">
                {Array(pageLimit).fill(0).map((y, i) => 
                    <div 
                    key={i} 
                    id={`page-${i + 1}`}
                    className={`${page === i + 1 ? "static": "hidden"}`}>
                        {
                            Array(pageLimit).fill(0)
                                .map((x, y) => {

                                    const index = ((i + 1) * pageLimit) - (pageLimit - y)
                                    return chants[index]
                                })
                                .map((chant, i) => {

                                    return (
                                        chant ? 
                                        <div key={i}>
                                            <Chant
                                            title={chant.title ?? ""}
                                            lyrics={chant.lyrics ?? []}
                                            tags={chant.tags ?? []}
                                            />
                                        </div> : 
                                        <div id="no-chant" key={i}></div>
                                    )
                                })
                        }
                    </div>
                )} 
                {pageNumber < 2 ? 
                <>
                </> : 
                    <div 
                    className="flex mt-5">
                        {
                            Array(pageNumber).fill(0).map((x, i) => 
                                <button 
                                key={i}
                                className={`mx-2 px-2 py-1 border-2 border-gray-100 
                                ${page === i + 1 ? "bg-sky-400" : "bg-sky-200"}`}
                                onClick={() => {
                                    setPage(i + 1)
                                }}>
                                    {i + 1}
                                </button>
                            )
                        }
                    </div>
                }   
            </div>
        </>
    )
}

export default ChantPages