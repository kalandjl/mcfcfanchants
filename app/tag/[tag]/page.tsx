import Chants from "@/components/Chants";
import getChants from "@/utils/getChants";

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

export const revalidate = 3600

const Tag = async ({ params }: any) => {

    const { tag } = params;
    const limit = 10

    const chants: any = (await getChants(limit, ["tags", "array-contains", tag]))
        .map(chant => ({...chant.data(), id: chant.id}))

    return (
        <>
            <Chants 
            limit={limit}
            manualChants={chants}
            chantLinked={true}
            showTags />
        </>
    );
};

export default Tag