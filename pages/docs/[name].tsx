import DocView from "components/DocView";
import Sidebar from "components/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { View, rcss } from "rui";
import { docsetItemType, getPackages } from "utils/getDocs";

const DocsPage: React.FC = () => {
  const pkgName = useRouter()?.query?.name as string | undefined;
  const [pkgsLoaded, setPkgsLoaded] = useState(false);
  const [packages, setPackages] = useState<docsetItemType[] | undefined>(
    undefined
  );
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    getPackages().then((packages) => {
      if (packages !== undefined) {
        setPackages(packages);
        setPkgsLoaded(true);
      } else {
        setLoadFailed(true);
      }
    });
  }, []);
  const version = packages?.find((pkg) => pkg.name === pkgName)?.version;
  return (
    <View css={[rcss.flex.row, rcss.rowWithGap(8), rcss.width('100vw')]} id="test-2-362">
      <Sidebar pkgName={pkgName} packages={packages} version={version} />
      <DocView pkgName={pkgName} />
    </View>
  );

};

export default DocsPage;
