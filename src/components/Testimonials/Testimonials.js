import React, { useContext, useRef } from "react";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import {
  Body,
  Header,
  NextBtn,
  PrevBtn,
  SingleTestimony,
  SliderDiv,
  TestimonialsMain,
  Container,
  Image,
  Content,
  StyledSlider,
  Quote,
} from "./Testimonials.styled";

function Testimonials() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const testimonialsData = t("testimonials.data", {
    returnObjects: true,
  });

  return (
    <>
      {testimonialsData.length > 0 && (
        <TestimonialsMain style={{ backgroundColor: theme.primary }}>
          <Header>
            <h1 style={{ color: theme.secondary }}>
              {t("testimonials.title")}
            </h1>
          </Header>
          <Body>
            <Quote>
              <FaQuoteLeft style={{ color: theme.secondary }} />
            </Quote>
            <SliderDiv style={{ backgroundColor: theme.primary }}>
              <StyledSlider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <SingleTestimony key={test.id}>
                    <Container>
                      <Image
                        style={{
                          backgroundColor: theme.secondary,
                        }}
                      >
                        <img src={test.image} alt={test.name} />
                      </Image>
                      <Content
                        style={{
                          backgroundColor: theme.secondary,
                          color: theme.tertiary,
                        }}
                      >
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </Content>
                    </Container>
                  </SingleTestimony>
                ))}
              </StyledSlider>
              <PrevBtn
                onClick={gotoPrev}
                style={{ backgroundColor: theme.secondary }}
              >
                <FaArrowLeft
                  style={{ color: theme.primary }}
                  aria-label="Previous testimonial"
                />
              </PrevBtn>
              <NextBtn
                onClick={gotoNext}
                style={{ backgroundColor: theme.secondary }}
              >
                <FaArrowRight
                  style={{ color: theme.primary }}
                  aria-label="Next testimonial"
                />
              </NextBtn>
            </SliderDiv>
          </Body>
        </TestimonialsMain>
      )}
    </>
  );
}

export default Testimonials;
