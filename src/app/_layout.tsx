import DesktopTopHeader from "@/components/header/mainHeader/desktopHeader/topHeader/DesktopTopHeader";
import MainHeader from "@/components/header/mainHeader/MainHeader";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout>
      <DesktopTopHeader />
      <Header>
        <MainHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
