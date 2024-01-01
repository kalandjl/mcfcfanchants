import Chants from "@/components/Chants";
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Your generateStaticParams function
// export async function generateStaticParams() {
    
//     let data

//     const temp = async () => {
        
//         const tags: any = await getDocs(collection(db, "Chants")).then(docs => {
        
//             const unfilteredTags = docs.docs.map(doc => doc.data().tags)

//             return unfilteredTags.filter(tag =>  tag.length > 0).flat(1)
//         })
    
//         data = await tags
//     }

//     await temp()

//     // @ts-ignore
//     return data.map((tag:any)=>{return {tag:tag}})
// }

const Tag = ({ params }: any) => {

    const { tag } = params;

    return (
        <>
            <Chants 
            queryProps={["tags", "array-contains", tag]} 
            limit={10}/>
        </>
    );
};

export default Tag