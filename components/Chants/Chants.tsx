import { FC } from "react";
import { WhereFilterOp } from "firebase/firestore";
import getChants from "@/utils/getChants";
import ChantPages from "./ChantPages";
import { ChantType } from "./type";

interface Props {
    limit: number
    queryProps?: [string, WhereFilterOp, string],
    pageLimit?: number
    manualChants?: ChantType[]
    chantLinked?: boolean
}

export const revalidate = 3600

const Chants: FC<Props> = async (props: Props) => {

    const { queryProps, limit } = props

    const chants: any = props.manualChants ?? (await getChants(limit, queryProps ?? undefined))
        .map(chant => ({...chant.data(), id: chant.id}))

    return (
        <ChantPages props={props} chants={chants ?? []} />
    )
}

export default Chants