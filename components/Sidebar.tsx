import { SearchBar, Surface, Text, View, rcss } from "rui";
import type { docsetItemType } from "utils/getDocs";
import DocsetCard from "./DocsetCard";
import PackageSearchBar from "./PackageSearchBar";
import { useState } from "react";

const Sidebar = ({ pkgName, version, packages }: { pkgName: string | undefined, version: string | undefined, packages: docsetItemType[] | undefined; }) => {
    const [filteredPackages, setFilteredPackages] = useState<docsetItemType[]>(
        []
    );
    const [searchText, setSearchText] = useState("");
    return (
        <Surface elevated css={[rcss.flex.column, {
            gap: '10px',
            height: '100vh'
        }]}>
            <View css={[
                rcss.p(8),
                rcss.flex.column,
                rcss.colWithGap(8),
                rcss.textAlign.center,
            ]}>
                <View>
                    <Text variant="headerDefault" >{pkgName}</Text>
                    <Text variant="small" color="dimmer" >{version}</Text>
                </View>
                <PackageSearchBar packages={packages} setFilteredPackages={setFilteredPackages} searchText={searchText} setSearchText={setSearchText} />
            </View>
            <View css={[rcss.p(8), rcss.colWithGap(8), rcss.flex.grow(1), {
                display: 'flex',
                maxHeight: '80%',
                overflow: 'auto'
            }]}>
                {
                    filteredPackages && (filteredPackages.map(pkg => (
                        <DocsetCard name={pkg.name} key={pkg.name} version={pkg.version} downloaded={pkg.downloaded} />
                    )))
                }
            </View>
        </Surface>
    );
};
export default Sidebar;