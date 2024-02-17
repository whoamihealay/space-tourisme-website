import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import { NavigationType } from "@/types/index";

interface ILayout {
  data: {
    navigation: NavigationType;
  };
  children: React.ReactNode;
}

const Layout = ({ data, children }: ILayout) => {
  return (
    <>
      <Header>
        <Navigation menu={data?.navigation?.menu} />
      </Header>
      <main className="z-10 px-4 mx-auto max-w-7xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
