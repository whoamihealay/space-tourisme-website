import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Header />
      <main className="z-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
