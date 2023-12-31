import { FC } from "react";
import { WhereFilterOp } from "firebase/firestore";
import getChants from "@/utils/getChants";

interface Props {
    queryProps?: [string, WhereFilterOp, string],
    limit: number
}

const Chants: FC<Props> = async (props: Props) => {

    const { queryProps, limit } = props

    const chants = await getChants(limit, queryProps ?? undefined)

    return (
        <>
            {chants.map(chant => <>
                {chant.data().title}
            </>)}
        </>
    )
}

export default Chants