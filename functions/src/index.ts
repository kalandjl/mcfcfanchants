import * as functions from "firebase-functions";
import {
    onDocumentCreated,
} from "firebase-functions/v2/firestore";

// Intializing admin SDK
const admin = require("firebase-admin");
admin.initializeApp();



export const onNewUser = functions.auth.user().onCreate((user: any) => {

    let timestamp = admin.firestore.FieldValue.serverTimestamp()

    admin.firestore().collection("Users").doc(`/${user.uid}/`).create({
        user: JSON.stringify(user),
        lastReq: timestamp - 10
    })
})

exports.onNewSubmission = onDocumentCreated("Submissions/{docId}", (event) => {

    const snapshot = event.data;

    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }

    const data = snapshot.data();
    const uid = data.uid

    console.log("Data avaliable")
    console.log(JSON.stringify(data, uid))
    
    let timestamp = admin.firestore.FieldValue.serverTimestamp()

    admin.firestore().collection("Users").doc(`/${uid}/`).update({
        lastReq: timestamp
    }).then((res: any) => {

        console.log(`Completed ${res.id}`)
    }).catch(console.error)
})
