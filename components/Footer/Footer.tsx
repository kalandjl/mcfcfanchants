import { FC } from "react";

interface Props {

}

const Footer: FC<Props> = (props: Props) => {

    return (
        <>  
            <div 
            className="bg-zinc-800 min-h-32 px-4 py-6 font-mono text-white">
                <div 
                className="grid px-32 grid-cols-4">
                    <div 
                    className="grid grid-cols-1">
                        <p 
                        className="font-bold font-mono">
                            Contact
                        </p>
                        <p>
                            mcfcfanchants@gmail.com
                        </p>
                        <p>
                            604-710-0331
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer