"use client"
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {

}

const capitalizeEachWord = (str: string) => {
    return str.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const RoutedText: FC<Props> = (props: Props) => {

    let path: string = usePathname().replace('/', '').charAt(0) + usePathname().slice(2).replace('/', ': ').replace('-', ' ')
    path = capitalizeEachWord(path)
    
    return (
        <>
            {path ? path : "Home"}
        </>
    )
}

export default RoutedText