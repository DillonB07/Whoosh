import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  rcss,
  Surface,
  tokens,
  interactive,
  Pill,
  Tooltip,
  SearchBar,
} from "../rui";
import { getPackages } from "../utils/getDocs";
import type { docsetItemType } from "../utils/getDocs";
import * as icons from "../icons";
import Link from "next/link";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import LoadingIcon from "icons/Loading";

const DocsetCard: React.FC<docsetItemType> = ({
  name,
  version,
  downloaded,
}) => (
  <Surface
    elevated
    css={[
      rcss.p(16),
      rcss.m(8),
      rcss.borderRadius(8),
      interactive.filledAndOutlined,
      rcss.maxWidth(210),
      rcss.maxHeight(104),
    ]}
  >
    <Link href={`/docs/${name}`} css={[{ color: tokens.foregroundDefault }]}>
      <View css={[rcss.rowWithGap(16), rcss.center]}>
        {downloaded ? (
          <icons.BookClosed width={50} height={50} />
        ) : (
          <icons.Download width={50} height={50} />
        )}

        <View css={[rcss.colWithGap(4), rcss.center]}>
          <Tooltip tooltip={name.replace(/_/g, " ")}>
            <Text
              variant="subheadBig"
              css={[
                {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100px",
                },
              ]}
            >
              {name.replace(/_/g, " ")}
            </Text>
          </Tooltip>
          <Text variant="small" color="dimmer">
            v{version}
          </Text>
          <Tooltip
            tooltip={
              downloaded
                ? "This docset is downloaded"
                : "This docset needs downloading and could take a while to load"
            }
          >
            <Pill
              css={[rcss.width(110)]}
              text={downloaded ? "Downloaded" : "Not Downloaded"}
              colorway={downloaded ? "positive" : "negative"}
            />
          </Tooltip>
        </View>
      </View>
    </Link>
  </Surface>
);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    if (!pkgsLoaded) return;

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
    <View css={[rcss.colWithGap(8), rcss.p(16), rcss.textAlign.center]}>
      <motion.div layout css={[rcss.m(8)]}>
        <View css={[rcss.colWithGap(8)]}>
          <Text variant="headerBig">Whoosh Docs</Text>
          <Text color="dimmer" variant="small" multiline>
            Search for a language or library
          </Text>
          <SearchBar
            value={searchText}
            onChange={handleSearch}
            placeholder="Search docsets..."
            onClear={clearSearch}
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
            {pkgsLoaded && (
              <>
                {filteredPackages.map((pkg, i) => (
                  <DocsetCard
                    key={i}
                    name={pkg.name}
                    version={pkg.version}
                    downloaded={pkg.downloaded}
                  />
                ))}
              </>
            )}
          </motion.div>
        </Surface>
        {!pkgsLoaded && (
          <motion.div css={[rcss.flex.column, rcss.center, { gap: 8 }]}>
            {!loadFailed ? <LoadingIcon width={50} height={50} /> : <icons.WifiOff width={50} height={50} />}

              {!loadFailed ?  (<Text variant="subheadBig" color="dimmer" multiline>Loading package list</Text>) : (
                <Text variant="text" color="dimmer" multiline>Could not connect to server.<br/>
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
