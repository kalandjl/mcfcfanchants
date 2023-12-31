import { db } from "@/lib/firebase"
import { collection, query, getDocs, where, limit, WhereFilterOp } from "firebase/firestore"
import { cache } from "react"

const getChants = cache(async (limitProps: number, queryProps? : [string, WhereFilterOp, string]) => {

    const chantsRef = collection(db, "Chants")
    let docsRef
    
    if (queryProps && limitProps) {
        
        docsRef = query(
            chantsRef, 
            where(queryProps[0], queryProps[1], queryProps[2]), 
            limit(limitProps))
    } else if (!queryProps && limitProps) {

        docsRef = query(
            chantsRef, 
            limit(limitProps)
        )
    } else {

        docsRef = query(chantsRef)
    }

    const docs = await getDocs(docsRef)

    return docs.docs
})

export default getChants