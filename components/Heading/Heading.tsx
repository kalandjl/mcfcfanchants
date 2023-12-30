import { FC } from "react";


interface Props {
    children: JSX.Element
    color?: string
}

const Heading:FC<Props> = (props: Props) => {

    return (
        <>
            <div
            style={{boxShadow: "-5px 5px 2px rgba(65, 65, 65, .8)"}}
            className={`bg-${props.color ? props.color : ""} h-16 bg-gray-100 grid place-items-center px-6`}>
                <h1
                className="text-2xl font-bold w-full">
                    {props.children}
                </h1>

            </div>
        </>
    )
}

export default Heading