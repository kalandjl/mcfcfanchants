import { FC } from "react";
import { WhereFilterOp } from "firebase/firestore";
import getChants from "@/utils/getChants";
import Chant from "../Chant";

interface Props {
    queryProps?: [string, WhereFilterOp, string],
    limit: number
}

const Chants: FC<Props> = async (props: Props) => {

    const { queryProps, limit } = props

    const chants = await getChants(limit, queryProps ?? undefined)

    return (
        <>
            {chants.map((chant, i) => {
            
            let data = chant.data()
            return (
                <div key={i}>
                    <Chant
                    title={data.title}
                    lyrics={data.lyrics}
                    tags={data.tags}
                    />
                </div>
            )
            })}
        </>
    )
}

export default Chants