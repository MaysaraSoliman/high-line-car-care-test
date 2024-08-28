"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StyledMenu } from "./navbar.styled";

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link href="/services">Services</Link>,
    key: "/services",
  },
  {
    label: <Link href="/about">About</Link>,
    key: "/about",
  },
  {
    label: <Link href="/contact">Contact</Link>,
    key: "/contact",
  },
];

const Navbar = ({ mode }: { mode: string }) => {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);
  // const onClick = (e: any) => {
  //   // setCurrent(e.key);
  // };

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const styledMenuMode = mode === "horizontal" ? "horizontal" : "vertical";
  return (
    <nav className="nav">
      <StyledMenu
        // onClick={onClick}
        selectedKeys={[current]}
        mode={styledMenuMode}
        items={items}
      />
    </nav>
  );
};

export default Navbar;
