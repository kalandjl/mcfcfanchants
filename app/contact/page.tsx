import { contacts } from "@/lib/contact"

const Page = () => {

    return (
        <>
            {contacts.map((contact, i) => 
                <div key={i}>
                    {contact}
                </div>
            )}
        </>
    )
}

export default Page