import { FC } from "react";


interface Props {

}

const Header:FC<Props> = (props: Props) => {

    return (
        <>
            <div
            className="bg-sky-300 h-32 px-14 py-6 font-mono text-3xl">
                <div
                className="grid place-items-center w-min h-full">
                    <div className="whitespace-nowrap">
                        MCFC FAN CHANTS
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
