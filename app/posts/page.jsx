import React from 'react';
import { getAllPosts } from '@/utils/features'


const page = async () => {

    const posts = await getAllPosts()

    return (
        <div className='flex col gp-4'>
            {posts.map((i) => (
                <h5 key={i.id}>{i.title}</h5>

            ))}
        </div>
    )
}

export default page
