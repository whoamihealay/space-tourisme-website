import Meta from "./Meta";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
