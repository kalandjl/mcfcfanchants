import { Timestamp, addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "./firebase"

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