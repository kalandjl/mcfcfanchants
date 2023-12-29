"use client"
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {

}

const RoutedText: FC<Props> = (props: Props) => {

    let path: string = usePathname().replace('/', '').charAt(0).toUpperCase() + usePathname().slice(2)

    return (
        <>
            {path ? path : "Home"}
        </>
    )
}

export default RoutedText