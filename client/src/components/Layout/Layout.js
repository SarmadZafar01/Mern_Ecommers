import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title = "Ecommerce app",
  description = "mern stack project",
  keywords = "mern,react,node,mongodb",
  author = "Techinfoyt",
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
