import { cache } from 'react'
import { TagCount, countTagOccurrences, getTags } from "@/lib/db"

const getTagsCached = cache(async () => {
    
    return await getTags()
})

export default getTagsCached