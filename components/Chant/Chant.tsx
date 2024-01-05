import { FC } from "react"
import { ChantType } from "../Chants/types"

interface Props {
    chant: ChantType
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
                    className="text-sky-600 hover:underline underline-offset-1">
                        Audio File
                    </a> : <></>
                    }
                </div>
            </div> : <div className="grid">Sorry, couldn't load chant</div>
            }
        </>
    )
}

export default Chant