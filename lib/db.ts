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