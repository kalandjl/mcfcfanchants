import Chant from "@/components/Chant/Chant"
import Chants from "@/components/Chants/Chants"
import Header from "@/components/Header/Header"
import Heading from "@/components/Heading/Heading"
import Nav from "@/components/Nav/Nav"
import Image from "@/node_modules/next/image"


const Home = () => {

    return (
        <>
            <Header/>
            <Nav />
            <div className="grid grid-cols-5">
                <div className="col-span-3 m-5 ml-11 mt-10">
                    <div className="mb-10">
                        <Heading
                        color="">
                            <>Chants</>
                        </Heading>
                    </div>
                    <Chants />
                </div>
            </div>

        </>
    )
}

export default Home