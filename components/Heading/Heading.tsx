import { FC } from "react";


interface Props {
    children: JSX.Element
    color?: string
}

const Heading:FC<Props> = (props: Props) => {

    return (
        <>
            <div
            className={`bg-${props.color ? props.color : "gray-100"} h-16 grid place-items-center px-6`}>
                <h1
                className="text-2xl font-bold w-full">
                    {props.children}
                </h1>

            </div>
        </>
    )
}

export default Heading