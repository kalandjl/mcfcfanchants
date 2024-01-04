import { TagCount } from "@/lib/db";
import { capitalizeEachWord } from "@/lib/strings";
import getTagsCached from "@/utils/getTags";
import Link from "next/link";
import { FC } from "react";

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
                <Link
                key={i}
                href={`/tag/${tag.tag}`}>
                    <div 
                    className="inline-block bg-black py-1 px-2 text-white mr-1 mb-2 text-sm font-open-sans font-bold hover:cursor-pointer hover:bg-sky-500">
                        {capitalizeEachWord(tag.tag).replace("_", " ")}
                    </div>
                </Link>
            )}
            </>
            }
        </>
    )
}

export default FooterTags