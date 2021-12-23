import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
