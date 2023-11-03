import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Layout from "@/components/layout/layout";
import Notification from "@/components/ui/notification";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Notification title="test" message="This is a test." />
    </Layout>
  );
}
