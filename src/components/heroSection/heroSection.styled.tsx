"use client";
import { Carousel } from "antd";
import styled from "styled-components";

interface StyledCarouselProps {
  children?: React.ReactNode;
}

export const StyledCarouselSection = styled(Carousel)<StyledCarouselProps>`
  .slider-container {
    height: calc(100vh - 131px);
    width: 100%;
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
      z-index: 1;
    }
    .text-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      text-align: center;
      h5 {
        margin-bottom: 30px;
      }
      h1 {
        margin: 10px 0 0 !important;
      }
      .paragraph {
        margin-top: 30px;
        max-width: 500px;
        text-align: center;
      }
    }
    .slider-buttons {
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 15px;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      button {
        box-shadow: none;
        padding: 20px 40px;
        width: 250px;
        height: 50px;
      }
    }
  }
  .slick-dots {
    li {
      button {
        background: var(--color-primary) !important;
      }
    }
  }
`;
