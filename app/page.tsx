import Chants from "@/components/Chants/Chants"
import Heading from "@/components/Heading/Heading"


const Home = () => {

    return (
        <>
            <div className="grid grid-cols-5">
                <div className="col-span-3 m-5 ml-11 mt-10">
                    <div className="mb-10">
                        
                    </div>
                    <Chants />
                </div>
            </div>

        </>
    )
}

export default Home