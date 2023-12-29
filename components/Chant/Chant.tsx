import { FC } from "react"

interface Props {
    title: string
    lyrics: string[]
    tags: string[]
}

const Chant:FC<Props> = (props: Props) => {

    return (
        <>
            <div
            className="grid grid-col-1 gap-1">
                <p
                className="font-bold">
                    {props.title}
                </p>
                <div
                className="grid grid-cols-1">
                    {props.lyrics.map((line, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    {line === "_" ? <span>&#8203;</span> : line}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Chant