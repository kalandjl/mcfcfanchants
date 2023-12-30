import { Timestamp, addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "./firebase"
import chants from "../lib/chants.json"  

export const addChant = async (email: string, title: string, lyrics: string) => {

    try {
        
        console.log(email, title, lyrics)

        const docRef = await addDoc(collection(db, "Submissions"), {
            email: email,
            title: title, 
            lyrics: lyrics,
            date: Timestamp.now()
        })
        
        console.log(docRef)
        window.alert("Suggestion sent!")
    } catch (e) {
        window.Error("Error sending suggestion, " + e)
    }

}

export const s = async () => {

    const chantDocs = (await getDocs(collection(db, "Chants"))).size


    if (chantDocs > 1) {
        return 
    } else {
        Object.keys(chants).forEach(async title => {

            const docRef = await addDoc(collection(db, "Chants"), {
                // @ts-ignore
                title: title,
                // @ts-ignore
                lyrics: chants[title].lyrics,
                // @ts-ignore
                tags: chants[title].tags
            })
    
            console.log(docRef.id)
        })

        return "completed"
    }

    
}


export type TagCount = {
    tag: string;
    chants: number;
};


export const countTagOccurrences = (tags: string[]): TagCount[] => {
    
    const tagCounts: { [key: string]: number } = {};

    // Count occurrences of each tag
    tags.forEach((tag) => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    // Convert to array of TagCount objects
    const tagCountArray: TagCount[] = Object.keys(tagCounts).map((tag) => ({
    tag,
    chants: tagCounts[tag],
    }));

    // Sort the array by the number of chants in descending order
    tagCountArray.sort((a, b) => b.chants - a.chants);

    return tagCountArray;
};

export const getTags = async () => {

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
}