import { TagCount } from '@/lib/db'
import getTags from '@/utils/getTags'

export const revalidate = 3600

const Page = async () => {

    const tags: {
        props: {
            sortedTagCounts: TagCount[];
        };
    } = await getTags()

    return (
        <>
            {tags.props.sortedTagCounts.map(tag => 
                <>
                    {tag.tag + tag.chants}
                </>
            )}
        </>
    )
}

export default Page