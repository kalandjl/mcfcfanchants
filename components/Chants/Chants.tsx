import { FC } from "react";
import { WhereFilterOp } from "firebase/firestore";
import getChants from "@/utils/getChants";
import ChantPages from "./ChantPages";
import { ChantType } from "./types";

export interface ChantsProps {
    limit: number
    queryProps?: [string, WhereFilterOp, string],
    pageLimit?: number
    manualChants?: ChantType[]
    chantLinked?: boolean
    showTags?: boolean
    chantsCollapsed?: boolean
}

export const revalidate = 3600

const Chants: FC<ChantsProps> = async (props: ChantsProps) => {

    const { queryProps, limit } = props

    const chants: any = props.manualChants ?? (await getChants(limit, queryProps ?? undefined))
        .map(chant => ({...chant.data(), id: chant.id}))

    return (
        <ChantPages props={props} chants={chants ?? []} />
    )
}

export default Chants