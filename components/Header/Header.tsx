import Image from "@/node_modules/next/image";
import { FC } from "react";


interface Props {

}

const Header:FC<Props> = (props: Props) => {

    return (
        <>


            <div
            className="h-32 px-14 py-6 font-mono text-3xl relative overflow-hidden">
                <Image
                className="absolute top-0 left-0 w-full"
                src={"/header-backdrop.jpg"}
                alt={"Header Backdrop: Aguero Goal"}
                width={615}
                height={409}/>
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 z-10"></div>
                <div
                className="grid place-items-center w-min h-full">
                    <div className="whitespace-nowrap z-20 text-sky-200">
                        MCFC FAN CHANTS
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
