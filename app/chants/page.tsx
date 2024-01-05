import Chants from "@/components/Chants"

const Home = () => {

    return (
        <>
            <Chants 
            limit={1000} 
            pageLimit={10}
            chantLinked={true} />
        </>
    )
}

export default Home