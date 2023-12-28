import { FC } from "react";
import Chant from "../Chant/Chant";
import chants from "../../lib/chants.json"

interface Props {

}

const Chants: FC<Props> = (props: Props) => {

    return (
        <>
            <div className="grid grid-cols-1 gap-12">
                {Object.keys(chants).map((title, i) => {
                    return (
                    <div key={i}>
                        <Chant
                        title={title}
                        // @ts-ignore
                        lyrics={chants[title].lyrics}
                        // @ts-ignore
                        tags={chants[title].tags}/>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Chants