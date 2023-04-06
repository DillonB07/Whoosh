import { View, Text, Button, rcss } from "node_modules";
import Link from "next/link";

const Home = () => {
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
        Whoosh is a Replit extension that allows you to access documentation for
        popular programming languages and packages right inside your editor!
      </Text>
      <Link href="/docs">
        <Button text="View docs" />
      </Link>
    </View>
  );
};

export default Home;
