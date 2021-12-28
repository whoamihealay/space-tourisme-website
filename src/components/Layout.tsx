import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Header />
      <main className="z-10 px-4 mx-auto max-w-7xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
