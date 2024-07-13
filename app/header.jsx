import SearchBar from '@/components/clients/SearchBar';
import Link from 'next/link'
import React from 'react';


const header = () => {

    return (
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>

            <SearchBar />
        </nav>
    );
};

export default header;
