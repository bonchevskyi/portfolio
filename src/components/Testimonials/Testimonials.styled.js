import styled from "styled-components";
import { device } from "src/devices";
import Slider from "react-slick";

export const TestimonialsMain = styled.div`
  font-family: var(--primaryFont);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

export const Header = styled.div`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;

    @media (max-width: 992px) {
      font-size: 3rem;
      margin-top: 1.75rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 360px) {
      font-size: 2.2rem;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
  margin-top: 1rem;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;

    appearance: none;
    outline: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const SingleTestimony = styled.div`
  padding: 2rem;
  width: 100%;
  height: 500px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 25%;
  z-index: 2;
  transform: translateY(50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    margin: initial;
    align-self: flex-start;
  }

  @media (max-width: 360px) {
    width: 80px;
    height: 80px;
  }

  img {
    width: 80px;

    @media (max-width: 360px) {
      width: 70px;
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 250px;
  border-radius: 200px;

  box-sizing: border-box;
  padding: 30px 40px;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    border-radius: 50px;
  }

  @media (max-width: 576px) {
    border-radius: 20px;
    min-height: 300px;
  }

  @media (max-width: 360px) {
    min-height: 350px;
  }

  p {
    font-style: italic;
    font-weight: 300;
    width: 80%;

    @media (max-width: 576px) {
      font-size: 0.9rem;
      width: 90%;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10px;

    @media (max-width: 576px) {
      font-size: 1.3rem;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;

export const SliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 70%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const PrevBtn = styled.button`
  left: 5%;
  cursor: pointer;
`;

export const NextBtn = styled.button`
  right: 5%;
  cursor: pointer;
`;

export const Quote = styled.div`
  font-size: 4rem;
  position: absolute;
  z-index: 10;
  transform: translateY(50%);
  opacity: 0.5;

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }

  @media (max-width: 360px) {
    font-size: 3rem;
  }
`;

export const StyledSlider = styled(Slider)`
  &.slick-slider {
    height: 100%;
    width: 100%;
  }

  &.slick-initialized {
    overflow: hidden !important;
  }

  &.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  &.slick-dots {
    position: relative;
    bottom: 1rem;
  }
`;
