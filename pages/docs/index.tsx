import React, { useState } from 'react';
import { View, Text, Button } from 'node_modules';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import Link from 'next/link';

const Home: React.FC = () => {
  const colors = ['firebrick', 'goldenrod', 'dodgerblue'];
  const [tabIndex, setTabIndex] = useState<number>(0);
  const backgroundColor = colors[tabIndex];
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
        onChange={(index: number) => setTabIndex(index)}
        style={{
          color: 'white',
          background: backgroundColor,
        }}
      >
        <TabList>
          <Tab>Red</Tab>
          <Tab>Yellow</Tab>
          <Tab>Blue</Tab>
        </TabList>
        <TabPanels style={{ padding: 20 }}>
          <TabPanel>The Primary Colors</TabPanel>
          <TabPanel>Are 1, 2, 3</TabPanel>
          <TabPanel>Red, yellow and blue.</TabPanel>
        </TabPanels>
      </Tabs>
      <Link href="/docs">
        <Button text="View docs" />
      </Link>
    </View>
  );
};

export default Home;