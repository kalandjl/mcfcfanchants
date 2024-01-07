import { TagCount } from "@/lib/db";
import { capitalizeEachWord } from "@/lib/strings";
import getTagsCached from "@/utils/getTags";
import Link from "next/link";
import { FC } from "react";
import CloudLink from "../CloudLink";

interface Props {
    
}

export const revalidate = 3600

const FooterTags: FC<Props> = async (props: Props) => {

    const data = await getTagsCached()

    return (
        <>
            {
            false ? 
            <></>
            : <>
            {data?.props.sortedTagCounts.map((tag: TagCount, i: number) => 
                <CloudLink 
                key={i}
                text={tag.tag}
                href={`/tag/${tag.tag}`}
                template="footer" />
            )}
            </>
            }
        </>
    )
}

export default FooterTags