"use client"

import { FC, useEffect } from "react";
import Chant from "../Chant/Chant";
import chants from "../../lib/chants.json"
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { s } from "@/lib/db";

interface Props {

}

const Chants: FC<Props> = (props: Props) => {

    const [value, loading, error] = useCollection(
        collection(db, 'Chants'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <>
            <div className="grid grid-cols-1 gap-12">
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {value && value.docs.map((doc, i) => {

                    let data = doc.data()
                    return (
                    <div key={i}>
                        <Chant
                        title={data.title}
                        // @ts-ignore
                        lyrics={data.lyrics}
                        // @ts-ignore
                        tags={data.tags}/>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Chants