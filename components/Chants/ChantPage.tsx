import { FC } from "react";
import Chant from "../Chant";

interface Chant {
    title: string
    lyrics: string[]
    tags: string[]
    id: string
}

interface Props {
    chants: Chant[]
}

const ChantPage:FC<Props> = (props: Props) => {

    return(
        <> 
            <div className="grid grid-cols-1 gap-12">
                {props.chants.map((chant, i) => 
                <>
                    <Chant
                    title={chant.title}
                    lyrics={chant.lyrics}
                    tags={chant.tags} />
                </>
                )}
            </div>
        </>
    )
}

export default ChantPage