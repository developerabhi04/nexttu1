"use client"

import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    return (
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder='Search...'
        />
    )
}

export default SearchBar
