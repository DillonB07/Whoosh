import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Rui, Surface, View, Text } from "node_modules";
import { SSRProvider } from "@react-aria/ssr";
//@ts-ignore
import { useTheme, useReplit } from "@replit/extensions/react";

export default function App({ Component, pageProps }: AppProps) {
  const { status, error } = useReplit();

  // Insert & override theme colors
  const theme = useTheme();
  const values = theme?.values?.global;
  const mappedColors =
    typeof values === "object"
      ? Object.entries(values)
          .filter(([k]) => /[a-z]/.test(k[0]))
          .map(
            ([key, val]) =>
              `--${key.replace(
                /[A-Z]/g,
                (c) => "-" + c.toLowerCase()
              )}: ${val} !important;`
          )
      : [];

  return (
    <SSRProvider>
      <Head>
        <style>{`:root, .replit-ui-theme-root {
${mappedColors.join("\n")}
        }`}</style>
      </Head>
      <Rui theme="dark">
        <Surface background="default" elevated className="body">
          {status === "loading" ? (
            <View>
              <Text>Loading...</Text>
            </View>
          ) : null}
          {status === "error" ? (
            <View>
              <Text>Error: {error.message}</Text>
            </View>
          ) : null}
          {status === "ready" ? <Component {...pageProps} /> : null}
        </Surface>
      </Rui>
    </SSRProvider>
  );
}
