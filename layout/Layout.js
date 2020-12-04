import Head from "next/head";
import HeaderPart from "../pages/HeaderPart";
import Footer from "../pages/Footer";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>ENATTI</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script
        type="text/javascript"
        src="/publicjs/jquery-1.12.4.min.js"
      ></script>
      <script type="text/javascript" src="/publicjs/popper.min.js"></script>
      <script type="text/javascript" src="/publicjs/bootstrap.min.js"></script>
      <script
        type="text/javascript"
        src="/publicjs/jquery.slicknav.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/publicjs/owl.carousel.min.js"
      ></script>
    </Head>

    <header>
      <HeaderPart />
    </header>

    {children}

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
