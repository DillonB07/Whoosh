import React, { useState } from "react";
import { SearchBar } from "rui";
import { docsetItemType } from "utils/getDocs";
import Fuse from "fuse.js";


const PackageSearchBar = ({ packages, setFilteredPackages }: { packages: docsetItemType[] | undefined, setFilteredPackages: React.Dispatch<React.SetStateAction<docsetItemType[]>>; }) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setSearchText(text);
        if (!packages) return;

        const options = {
            keys: ["name"],
            threshold: 0.3, // adjust as needed
        };
        const fuse = new Fuse(packages!, options);
        const results = fuse.search(text);
        setFilteredPackages(results.map((result) => result.item));
    };

    const clearSearch = () => {
        setSearchText("");
        setFilteredPackages([]);
    };

    return (
        <SearchBar
            value={searchText}
            onChange={handleSearch}
            placeholder={packages ? "Search docsets..." : 'Loading docsets...'}
            onClear={clearSearch}
            disabled={!packages ? true : false}
        />
    );
};
export default PackageSearchBar;