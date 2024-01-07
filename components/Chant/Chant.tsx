import { FC } from "react"
import { ChantType } from "../Chants/types"
import CloudLink from "../CloudLink"

interface Props {
    chant: ChantType
    showTags: boolean
}

const Chant:FC<Props> = (props: Props) => {

    let { chant } = props

    return (
        <>
            {chant ? 
            <div
            className="grid grid-col-1 gap-1 bg-gray-100 p-3 hover:bg-gray-200 
            sm:text-sm md:text-base">
                <p
                className="font-bold">
                    {chant.title}
                </p>
                <div
                className="grid grid-cols-1">
                    {chant.lyrics.map((line, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    {line === "_" ? <span>&#8203;</span> : line}
                                </p>
                            </div>
                        )
                    })}
                    {chant.audioHref ? 
                    <a
                    href={chant.audioHref}
                    target="_blank"
                    className="text-sky-600 hover:underline underline-offset-1">
                        Audio File
                    </a> : <></>
                    }
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
            </div> : <div className="grid">Sorry, couldn&apos;t load chant</div>
            }
        </>
    )
}

export default Chant