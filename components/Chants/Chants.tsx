
import { FC, useState } from "react";
import { WhereFilterOp } from "firebase/firestore";
import getChants from "@/utils/getChants";
import Chant from "../Chant";
import offlineChants from "@/lib/offlineChants";
import ChantPages from "./ChantPages";

interface Props {
    limit: number
    queryProps?: [string, WhereFilterOp, string],
    offline?: boolean
    pageLimit?: number
}

export const revalidate = 3600

const Chants: FC<Props> = async (props: Props) => {

    const { queryProps, limit } = props
    const pageLimit = props.pageLimit ?? 5

    const chants: any = props.offline ? undefined : await (await getChants(limit, queryProps ?? undefined)).map(chant => chant.data())

    return (
        <ChantPages props={props} chants={chants ?? []} />
    )
}

export default Chants