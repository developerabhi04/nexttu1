import { getUserPosts } from '@/utils/features'
import React from 'react'

const posts = async ({ id }) => {
    const posts = await getUserPosts(id)

    // const posts = await postPromise
    return (
        <div>
            {posts.map((i) => (
                <p key={i.id}>{i.title}</p>
            ))}
        </div>
    )
}

export default posts
