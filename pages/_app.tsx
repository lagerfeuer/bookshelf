import Head from "next/head";
import Layout from "@/components/Layout";

import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { Maven_Pro as MavenPro } from "@next/font/google";

import metadata from "../data/metadata.json";

const mavenpro = MavenPro({
  subsets: ["latin"],
  variable: "--font-mavenpro",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={`Digital bookshelf of ${metadata.name}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mavenpro.variable} font-sans`}>
        <Layout title={metadata.title}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
