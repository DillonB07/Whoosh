import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Surface, View, Text, rcss } from "../rui";
import Rui from '../rui/components/Rui';
import { useThemeValues, useReplit, HandshakeProvider } from "@replit/extensions-react";
import { LazyMotion, domAnimation } from "framer-motion";

function Site(props: AppProps) {
    const { Component, pageProps } = props;
    const { status, error } = useReplit();
    const theme = useThemeValues();
    console.log('THEME', theme);
    return (
        <>
            <Head>
                <title>Whoosh</title>
            </Head>
            {status === "loading" ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : status === "error" ? (
                <View>
                    <Text>Error: {error?.message}</Text>
                </View>
            ) : status === "ready" ? (
                <Rui>
                    <Surface className="body" css={[rcss.center]}>
                        <Component {...pageProps} />
                    </Surface>
                </Rui>
            ) : null}
        </>
    );
}

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <HandshakeProvider>
            {/* <LazyMotion features={domAnimation} strict> */}
                <Site Component={Component} pageProps={pageProps} router={router} />
            {/* </LazyMotion> */}
        </HandshakeProvider>
    );
}