import { SearchBar, View } from "rui";
import type { docsetItemType } from "utils/getDocs";
import DocsetCard from "./DocsetCard";

const Sidebar = ({ pkgName, packages }: { pkgName: string | undefined, packages: docsetItemType[] | undefined; }) => {
    return (
        <aside style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            height: '100vh'
        }}>
            <View>
                <h2>{pkgName}</h2>
                <SearchBar />
            </View>
            <View style={{
                flexGrow: 1,
                display: 'flex',
                gap: '10px',
                padding: '10px',
                flexDirection: 'column',
                maxHeight: '80%',
                overflow: 'auto'
            }}>
                {
                    packages && (packages.map(pkg => (
                        <DocsetCard name={pkg.name} key={pkg.name} version={pkg.version} downloaded={pkg.downloaded} />
                    )))
                }
            </View>
        </aside>
    );

    /* CSS:
    
      aside {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      #sidebar-list {
        flex-grow: 1;
        display: flex;
        gap: 10px;
      }
    
    */
};
export default Sidebar;