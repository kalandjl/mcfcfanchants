import { FC, useState } from "react"

interface Props {
    lyrics: string[]
    chantsCollapsed?: boolean
}

const expandedLimit = 8

const ChantLyrics: FC<Props> = (props: Props) => {

    const { lyrics, chantsCollapsed } = props

    let [expanded, setExpanded] = useState(false)

    return (
        <>
            {/* Write lyrics */}
            {lyrics.map((line, i) => {
                return (
                    <div 
                    key={i}
                    className={`${i >= expandedLimit && !expanded && chantsCollapsed ? 
                    "hidden" : ""}`}>
                        <p>
                            {line === "_" ? <span>&#8203;</span> : line}
                        </p>
                    </div>
                )
            })}
            {lyrics.length > expandedLimit && chantsCollapsed ?
            expanded ? 
            <p
            className="text-blue-500 hover:underline"
            onClick={() => {
                setExpanded(false)
            }}>
                Collapse
            </p> 
            :
            <p 
            className="text-blue-500 hover:underline"
            onClick={() => {
                setExpanded(true)
            }}>
                Expand
            </p> : <></>}
        </>
    )
}

export default ChantLyrics