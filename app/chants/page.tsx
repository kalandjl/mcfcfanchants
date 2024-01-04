import Chants from "@/components/Chants"

const Home = () => {

    return (
        <>
            <Chants 
            limit={1000} 
            pageLimit={10} />
        </>
    )
}

export default Home