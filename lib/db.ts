import { Timestamp, addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

export const addChant = async (email: string, title: string, lyrics: string) => {

    try {
        const docRef = await addDoc(collection(db, "suggestions"), {
            email: email,
            title: title, 
            lyrics: lyrics,
            date: Timestamp.now()
        })
        
        window.alert("Suggestion sent!")
    } catch (e) {
        window.Error("Error sending suggestion, " + e)
    }

}