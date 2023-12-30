import { cache } from 'react'
import { TagCount, countTagOccurrences, getTags } from "@/lib/db"
import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

const getTagsCached = cache(async () => {
    
    return await getTags()
})

export default getTagsCached