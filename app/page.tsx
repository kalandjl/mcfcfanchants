import Chant from "@/components/Chant/Chant"
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
                    <div className="grid grid-cols-1 gap-12">
                        {Array.from(Array(5)).map((chant, i) => {
                            return (
                            <div key={i}>
                                <Chant
                                title="Boys in Blue"
                                lyrics={[`1, 2, 3, 4`,
                                `Ederson and Ake, Walker and Akanji`,
                                `Ruben Dias Johnny Stonnesss`,
                                `Best defense in Europe we're Manchester City`,
                                `On our way to Instanbulllll`,
                                `Woahhh we're the boys in blue`,
                                `Woahhh coming after you`,
                                `Woahh`]}
                                tags={[]}/>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home