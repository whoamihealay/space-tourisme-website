import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <main className="z-10 px-4 mx-auto max-w-7xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
