import { cache } from 'react'
import { TagCount, countTagOccurrences } from "@/lib/db"
import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

const getTags = cache(async () => {
    
    let data: string[]

    const temp = async () => {
        
        const tags: any = await getDocs(collection(db, "Chants")).then(docs => {
        
            const unfilteredTags = docs.docs.map(doc => doc.data().tags)

            return unfilteredTags.filter(tag =>  tag.length > 0).flat(1)
        })
    
        data = await tags

    }

    await temp()

    // @ts-ignore
    const sortedTagCounts: TagCount[] = countTagOccurrences(data);


    return {
        props: {
            sortedTagCounts
        }
    };
})

export default getTags