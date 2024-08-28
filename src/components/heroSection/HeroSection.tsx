import Image from "next/image";
import { StyledCarouselSection } from "./heroSection.styled";
import firstSliderImage from "../../../public/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg";
import secondSliderImage from "../../../public/assets/images/hero-section/car-detailing-and-polishing-concept-.jpg";
import thirdSliderImage from "../../../public/assets/images/hero-section/car-detailing-concept-brush-cleaning-off-dust-from-the-car-interior-details-control-panel-young.jpg";
import fourthSliderImage from "../../../public/assets/images/hero-section/professional-manual-workers-repairing-car-in-mechanic-shop.jpg";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <StyledCarouselSection effect="fade" autoplay>
      <div className="slider-container">
        <div className="text-box">
          <Title level={5}>Welcome to shinework</Title>
          <Title>Welcome to shinework Trust the professionals for a</Title>
          <Title>clean and polished finish</Title>
          <Paragraph className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Paragraph>
        </div>
        <div className="slider-buttons">
          <Button type="primary">Book Appointment Now!</Button>
          <Button type="primary">Expolre More</Button>
        </div>
        <div className="overlay"></div>
        <Image src={firstSliderImage} alt="car-body-plishing" priority />
      </div>
      <div className="slider-container">
        <div className="text-box">
          <Title level={5}>Welcome to shinework</Title>
          <Title>Welcome to shinework Trust the professionals for a</Title>
          <Title>clean and polished finish</Title>
          <Paragraph className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Paragraph>
        </div>
        <div className="slider-buttons">
          <Button type="primary">Book Appointment Now!</Button>
          <Button type="primary">Expolre More</Button>
        </div>
        <div className="overlay"></div>
        <Image src={secondSliderImage} alt="car-body-plishing" priority />
      </div>
      <div className="slider-container">
        <div className="text-box">
          <Title level={5}>Welcome to shinework</Title>
          <Title>Welcome to shinework Trust the professionals for a</Title>
          <Title>clean and polished finish</Title>
          <Paragraph className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Paragraph>
        </div>
        <div className="slider-buttons">
          <Button type="primary">Book Appointment Now!</Button>
          <Button type="primary">Expolre More</Button>
        </div>
        <div className="overlay"></div>
        <Image src={thirdSliderImage} alt="car-body-plishing" priority />
      </div>
      <div className="slider-container">
        <div className="text-box">
          <Title level={5}>Welcome to shinework</Title>
          <Title>Welcome to shinework Trust the professionals for a</Title>
          <Title>clean and polished finish</Title>
          <Paragraph className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Paragraph>
        </div>
        <div className="slider-buttons">
          <Button type="primary">Book Appointment Now!</Button>
          <Button type="primary">Expolre More</Button>
        </div>
        <div className="overlay"></div>
        <Image src={fourthSliderImage} alt="car-body-plishing" priority />
      </div>
    </StyledCarouselSection>
  );
};

export default HeroSection;
