import Chants from "@/components/Chants"
import Heading from "@/components/Heading/Heading"
import Link from "next/link"

const Home = () => {

    let chants = 6
    
    return (
        <>
            <div className="grid grid-cols-5">
                <div className="col-span-5">
                    <Chants
                    limit={chants} 
                    pageLimit={chants} />
                    <Link
                    href="/chants">
                        <div className="mt-5">
                            <p>
                                See more
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home