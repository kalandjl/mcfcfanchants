import Chants from "@/components/Chants"
import Heading from "@/components/Heading/Heading"

const Home = () => {

    
    return (
        <>
            <div className="grid grid-cols-5">
                <div className="col-span-3">
                    <Chants
                    limit={10} />
                </div>
            </div>
        </>
    )
}

export default Home