import Image from "next/image";
import Navbar from "../../../navbar/Navbar";
import logoImage from "/public/assets/images/logo_white (1).png";
import { StyledDesktopBottomHeader } from "./desktopBottomHeader.styled";
import Title from "antd/es/typography/Title";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import ContactBox from "@/components/contactBox/ContactBox";

const DesktopBottomHeader = () => {
  return (
    <StyledDesktopBottomHeader>
      <Link className="logo-link" href={"/"}>
        <Image src={logoImage} width={150} alt="Picture of the author" />
      </Link>
      <Navbar mode={"horizontal"} />
      <ContactBox
        className="right-col"
        title="Free Consultations"
        number="888-6000-613"
      />
    </StyledDesktopBottomHeader>
  );
};

export default DesktopBottomHeader;
