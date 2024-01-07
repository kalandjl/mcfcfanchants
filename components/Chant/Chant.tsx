import { FC, useState } from "react"
import { ChantType } from "../Chants/types"
import CloudLink from "../CloudLink"
import ChantLyrics from "./ChantLyrics"
import { useRouter } from "next/navigation"

interface Props {
    chant: ChantType
    showTags: boolean
    chantLinked: boolean
    chantsCollapsed?: boolean
}

const Chant:FC<Props> = (props: Props) => {

    let { chant, chantLinked, chantsCollapsed } = props

    const router = useRouter()

    return (
        <>
            {chant ? 
            // Chant
            <div
            className="grid grid-col-1 gap-1 bg-gray-100 p-3 hover:bg-gray-200 
            sm:text-sm md:text-base">
                {/* Title */}
                <p
                onClick={() => {

                    // Reroute to dedicated chant page
                    if (chantLinked)
                    router.replace(`/chant/${chant.id}`)
                }}
                className={`first-letter font-bold px-3 py-2 bg-sky-300 w-min 
                whitespace-nowrap 
                ${chantLinked ? "hover:underline" : ""}`}>
                    {chant.title}
                </p>
                {/* Lyrics */}
                <div
                className="grid grid-cols-1">
                    <ChantLyrics
                    lyrics={chant.lyrics}
                    chantsCollapsed={chantsCollapsed ?? true} />
                    {/* Audio button */}
                    {chant.audioHref ? 
                    <a
                    href={chant.audioHref}
                    target="_blank"
                    className="text-sky-600 hover:underline underline-offset-1">
                        Audio File
                    </a> : <></>
                    }
                    {/* Tags */}
                    {props.showTags ? 
                    <div className="w-1/2 mt-3">
                        {chant.tags.map((tag, i) => 
                        <CloudLink 
                        key={i}
                        href={`/tag/${tag}`}
                        text={tag}
                        template="chant"
                        />)}
                    </div> 
                    : <></>}
                </div>
            </div> : 
            // Not sufficient data
            <div className="grid">Sorry, couldn&apos;t load chant</div>
            }
        </>
    )
}

export default Chant