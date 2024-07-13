// "use client"

import React from 'react'
import Contact from './contact'
import ServerComponents from '@/components/servers/ServerComponents'

const page = () => {
    return (
        <Contact value={"Abhishek"}>
            <ServerComponents />
        </Contact>
    )
}

export default page


