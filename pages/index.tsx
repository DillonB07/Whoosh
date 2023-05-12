import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  rcss,
  Surface,
  SearchBar,
} from "../rui";
import { getPackages } from "../utils/getDocs";
import type { docsetItemType } from "../utils/getDocs";
import * as icons from "../icons";
import { motion } from "framer-motion";
import LoadingIcon from "icons/Loading";
import DocsetCard from "components/DocsetCard";
import PackageSearchBar from "components/PackageSearchBar";

const Home: React.FC = () => {
  const [pkgsLoaded, setPkgsLoaded] = useState(false);
  const [packages, setPackages] = useState<docsetItemType[] | undefined>(
    undefined
  );
  const [searchText, setSearchText] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<docsetItemType[]>(
    []
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

  return (
    <View css={[rcss.colWithGap(8), rcss.p(16), rcss.textAlign.center]}>
      <motion.div layout css={[rcss.m(8)]}>
        <View css={[rcss.colWithGap(8)]}>
          <Text variant="headerBig">Whoosh Docs</Text>
          <Text color="dimmer" variant="small" multiline>
            Search for a language or library
          </Text>
          <PackageSearchBar
            packages={packages}
            setFilteredPackages={setFilteredPackages}
          />
        </View>
      </motion.div>
      <motion.div layout>
        <Surface
          elevated
          style={{
            width: searchText.length != 0 ? "80vw" : "auto",
            height: searchText.length != 0 ? "70vh" : "auto",
            maxWidth: "800px",
          }}
          css={[rcss.m(8), rcss.borderRadius(8)]}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "80vw",
              maxHeight: "80vh",
              overflow: "auto",
            }}
            layout
          >
            {pkgsLoaded && filteredPackages.map((pkg, i) => (
              <DocsetCard
                key={i}
                name={pkg.name}
                version={pkg.version}
                downloaded={pkg.downloaded}
              />
            ))}
          </motion.div>
        </Surface>
        {!pkgsLoaded && (
          <motion.div css={[rcss.flex.column, rcss.center, { gap: 8 }]}>
            {!loadFailed ? <LoadingIcon width={50} height={50} /> : <icons.WifiOff width={50} height={50} />}

            {!loadFailed ? (<Text variant="text" color="dimmer" multiline>Loading package list</Text>) : (
              <Text variant="text" color="dimmer" multiline>Could not connect to server.<br />
                Make sure *.repl.co domains are not blocked on your network
              </Text>
            )}
          </motion.div>
        )}
      </motion.div>
    </View>
  );
};

export default Home;
