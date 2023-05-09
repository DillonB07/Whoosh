import DocView from "components/DocView";
import Sidebar from "components/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { View, rcss } from "rui";
import { docsetItemType, getPackages } from "utils/getDocs";

const DocsPage: React.FC = () => {
  const pkgName = useRouter().query.name;
  const [pkgsLoaded, setPkgsLoaded] = useState(false);
  const [packages, setPackages] = useState<docsetItemType[] | undefined>(
    undefined
  );
  const [loadingMessage, setLoadingMessage] = useState<string>(
    "Loading package list..."
  );
  useEffect(() => {
    getPackages().then((packages) => {
      if (packages !== undefined) {
        setPackages(packages);
        setPkgsLoaded(true);
      } else {
        setLoadingMessage("Failed to load packages.");
      }
    });
  }, []);
  return (
    <View css={[rcss.flex.row]}>
      <Sidebar pkgName={pkgName} packages={packages} />
      <DocView pkgName={pkgName} />
    </View>
  );

};

export default DocsPage;
