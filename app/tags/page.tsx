import { TagCount } from '@/lib/db'
import { capitalizeEachWord } from '@/lib/strings'
import getTags from '@/utils/getTags'
import Link from 'next/link'

export const revalidate = 3600

const Page = async () => {

    const tags: {
        props: {
            sortedTagCounts: TagCount[];
        };
    } = await getTags()

    return (
        <>
            <div 
            className="grid grid-cols-2">
                {tags.props.sortedTagCounts.map((tag, i) => 
                    <button
                    key={i}
                    className="bg-sky-300 hover:bg-sky-400 p-2">
                        <Link 
                        href={`/tag/${tag.tag}`}>
                            <div
                            className='w-full'>
                                {capitalizeEachWord(tag.tag).replace("_"," ")}
                            </div>
                        </Link>
                    </button>
                )}
            </div>
        </>
    )
}

export default Page