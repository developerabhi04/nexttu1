import { getUserDetails } from '@/utils/features';
import Posts from '../posts/posts';
import React, { Suspense } from 'react'
import { notFound } from "next/navigation";



// export const dynamicParams = false;

// false --ssg
// true --ssr

export const generateStaticParams = () => {
    return [
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
        {
            id: "4",
        },
    ]
}




// title section
export const generateMetadata = async ({ params }) => {
    const user = await getUserDetails(params.id);

    return {
        title: `${user.name}'s Profile`
    }
}



const page = async ({ params }) => {
    console.log(params.id);

    const user = await getUserDetails(params.id);

    // const posts = await getUserPosts(params.id);
    // const postPromise =   getUserPosts(params.id);

    if (!user.id) return notFound();

    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
                <h2>{user.address.suite}</h2>
                {/* <h2>{user.address.street}</h2>
            
           
                {/* <h1>{user.phone}</h1>
                <h2>{user.company.catchPhrase}</h2>
                <h2>{user.company.bs}</h2> */}
            </div>

            {/* <Posts postPromise={postPromise} /> */}
            {/* <Posts id={params.id} /> */}

            {/* wrap in suspence */}

            <Suspense fallback={<div>Loading....</div>}>
                <Posts id={params.id} />
            </Suspense>
        </>
    )
}

export default page
