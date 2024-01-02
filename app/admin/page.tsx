"use client"

import { auth, db, provider } from "@/lib/firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth/cordova"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"

const Home = () => {

    const [value, loading, error] = useCollection(
        collection(db, 'Submissions'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    let [user] = useAuthState(auth)


    useEffect(() => {
        
        const f = async () => {
            let data

            const temp = async () => {
                
                const stuff: any = await getDocs(collection(db, "Chants")).then(docs => {
                
                    const unfilteredTags = docs.docs.map(doc => doc.data().tags)
    
                    return unfilteredTags.filter(tag =>  tag.length > 0).flat(1)
                })
            
                data = await stuff

            }

            await temp()

            // @ts-ignore
            data.map((tag:any)=>{return {tag:tag}})

        }
        f()
    })

    return (
        <>
            <div 
            className="grid grid-cols-1">
                {user ?   
                <button 
                className="hover:bg-sky-400 bg-sky-300 p-3 w-1/4 rounded-md"
                onClick={() => {
                    signOut(auth)
                }}>
                    Sign out
                </button> :              
                <button
                className="hover:bg-sky-400 bg-sky-300 p-3 w-1/4 rounded-md"
                onClick={async e => {

                    try {
                        const res = await signInWithPopup(auth, provider)

                        let { user } = res
        
                        const credential = GoogleAuthProvider.credentialFromResult(res);
                        const token = credential?.accessToken
                    } catch (e) {

                        // @ts-ignore
                        const errorCode = e.code;
                        // @ts-ignore
                        const errorMessage = e.message;
                        // @ts-ignore
                        const email = e.customData.email;
                        // @ts-ignore
                        const credential = GoogleAuthProvider.credentialFromError(e);
                    }
                }}>
                    Sign in
                </button> 
                }
                <div className="mt-10">
                    {
                        user?.uid === "Sdg6vjfAerUd1v6K5MdiPoopOKu1" ? 
                        <>
                            {error && <strong>Error: {JSON.stringify(error)}</strong>}
                            {loading && <span>Collection: Loading...</span>}
                            {value && (
                            <span>
                                <p
                                className="font-semibold">Submissions:</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {value.docs.map((doc, i) => (
                                    <div 
                                    key={doc.id} 
                                    className={`py-5 ${i === value.docs.length - 1 ? "" : "border-b-2 border-b-gray-200"}  grid grid-cols-1`}>
                                        <p>{`Email: ${doc.data().email}`}</p>
                                        <p>{`Chant Title: ${doc.data().title}`}</p>
                                        <p>{`Chant lyrics: ${doc.data().lyrics}`}</p>
                                        <p>{`Date: ${new Date(doc.data().date.seconds * 1000).toLocaleString('en-GB',{timeZone:'PST'})}`}</p>
                                    </div>
                                    ))}
                                </div>

                            </span>
                            )}
                        </> 
                        : <></>
                    }
                </div>

            </div>

        </>
    )
}

export default Home