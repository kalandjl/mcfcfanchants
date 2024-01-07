"use client"
import { DocumentSnapshot, WhereFilterOp } from "firebase/firestore"
import Chant from "../Chant"
import offlineChants from "@/lib/offlineChants";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { ChantType } from "./types";
import Link from "next/link";
import { ChangeCircleTwoTone } from "@mui/icons-material";
import { ChantsProps } from "./Chants";
import { useRouter } from "next/navigation";

interface Props {
    chants: ChantType[] // Data
    props: ChantsProps // Specific param
}

const ChantPages = (props: Props) => {

    // Defining params
    const { chants } = props 
    const { chantsCollapsed } = props.props
    const showTags  = props.props.showTags ?? false
    const chantLinked = props.props.chantLinked ?? false
    const pageLimit = props.props.pageLimit ?? 5

    // Memoize value of pages numbers
    const pageNumber = useMemo(() => {
        return Math.ceil((chants.length / pageLimit))
    }, [pageLimit, chants.length]) 

    // Memoized value of number which the last page will require
    const lastPageChants= useMemo(() => {
        return chants.length % pageLimit || pageLimit
    }, [pageLimit, chants.length])

    // Current page
    let [page, setPage] = useState(1)
    let [pageChanges, setPageChanges] = useState(0)

    // Scroll to top of window on page change
    useEffect(() => {
        
        if (pageChanges > 0 && pageNumber > 1) window.scrollTo(0, 200)
        setPageChanges(pageChanges + 1)
    }, [page]);

    return (
        <>
            <div
            id="chants">
                {/* Itterate for every page requested */}
                {Array(pageNumber).fill(0).map((y, i) => 
                    <div 
                    key={i} 
                    id={`page-${i + 1}`}
                    // If current, show, if not hide
                    className={`${page === i + 1 ? "static": "hidden"}`}>
                        {
                            // Fills pages with chants
                            // Array for all chants needed in page, unless lastpage
                            Array(i === pageLimit - 1 ? pageLimit - lastPageChants : pageLimit)
                                .fill(0)
                                .map((x, y) => {

                                    // Return sebsequent chant by indexx
                                    const index = ((i + 1) * pageLimit) - (pageLimit - y)
                                    return chants[index] ?? undefined
                                })
                                // Filter undefined chants
                                .filter((chant) => chant != undefined)
                                .map((chant, i) => {

                                    return (
                                        // Chant 
                                        <>
                                            <div
                                            className="hover:cursor-pointer"
                                            
                                            key={i}>
                                                <Chant
                                                chant={chant}
                                                showTags={showTags}
                                                chantLinked={chantLinked}
                                                chantsCollapsed={chantsCollapsed}
                                                />
                                            </div> 
                                            <div 
                                            className="h-1 bg-gray-300 w-full"
                                            id="barier"></div>
                                        </>
                                    )
                                    
                                })
                        }
                    </div>
                )} 
                {/* Page selector (if more than 1 page) */}
                {pageNumber >= 1 ? 
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

                                    // Set state
                                    setPage(i + 1)
                                }}>

                                    {/* Page number */}
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