import Layout from "../layout/Layout";
import HomePage from "./HomePage";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    

  },[])
  return (
    <Layout>
      <Head>
      <script type="text/javascript" src="/publicjs/owl.carousel.min.js"></script>
        <script type="text/javascript" src="/publicjs/aos.js" />
        <script
          type="text/javascript"
          src="/publicjs/carousel-cuztm.js"
        />

        <script type="text/javascript" src="/publicjs/wow.js" />
      </Head>
      <HomePage />
    </Layout>
  );
}
