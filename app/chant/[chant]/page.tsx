import Chants from "@/components/Chants";
import getChants from "@/utils/getChants";

export const revalidate = 3600

const Tag = async ({ params }: any) => {

    const { chant } = params;
    const limit = 10

    const chants: any = (await getChants(limit, ["__name__", "==", chant]))
        .map(chant => ({...chant.data(), id: chant.id}))

    return (
        <>
            <Chants 
            limit={limit}
            manualChants={chants}
            showTags />
        </>
    );
};

export default Tag