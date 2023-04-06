import React, { useState } from "react";
import { View, Text, Button, rcss } from "node_modules";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Link from "next/link";
import { getPackages, Data } from "../../utils/getDocs";
//@ts-ignore
import { useTheme } from "@replit/extensions/react";

interface Props {
  packages: Data[];
}

const Home: React.FC<Props> = ({ packages }) => {
  const theme = useTheme();
  const values = theme?.values?.global;
  console.log(values);
  return (
    <View
      css={[
        rcss.flex.column,
        rcss.colWithGap(8),
        rcss.p(16),
        rcss.textAlign.center,
        rcss.justify.center,
        rcss.align.center,
      ]}
    >
      <Text variant="headerBig">Whoosh Docs</Text>
      <Text color="dimmer" multiline>
        Please choose a programming language
      </Text>
      <Tabs
        style={{
          color: "white",
          background: values?.backgroundHigher,
          borderRadius: 8,
          padding: 8,
        }}
      >
        <TabList>
          {packages.map((language) => (
            <Tab key={language.language}>{language.language}</Tab>
          ))}
        </TabList>
        <TabPanels style={{ padding: 20 }}>
          {packages.map((language) => (
            <TabPanel key={`pkglist-${language.language}`}>
              <ul>
                {language.categories.map((category) => (
                  <li key={category.category}>
                      <h4>
                        {category.category}
                      </h4>
                      <ul>
                          {category.packages.map(pkg => (
                      <li key={pkg}>{pkg}</li>
                          ))}
                      </ul>
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Link href="/docs">
        <Button text="View docs" />
      </Link>
    </View>
  );
};

export default Home;

export async function getStaticProps() {
  const packages = getPackages();
  return {
    props: {
      packages,
    },
  };
}
