import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "./_layout";
import { StyledComponentsRegistry } from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High Line Car Care",
  description: "High Line Car Care",
};

const config: ThemeConfig = {
  token: {
    colorPrimary: "#cf0a0a",
    colorTextBase: "#fff",
    colorBgBase: "#000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <ConfigProvider theme={config}>
              <MainLayout>{children}</MainLayout>
            </ConfigProvider>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
