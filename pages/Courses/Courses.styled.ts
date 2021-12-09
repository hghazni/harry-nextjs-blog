import styled from "styled-components";
import { floatingShape } from "../../components/Hero/Hero.styled";
import { floatAnimation } from "../../styles/Animations.styled";

export const CourseHeader = styled.div`
  display: flex;
  position: relative;
`;

export const CourseHeroText = styled.div`
  display: block;

  h1 {
    font-weight: 600;
    font-size: 45px;
    letter-spacing: 1px;
    margin-top: 1rem;
  }

  h2 {
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
  }
`;

export const CoursesTriangleShape = styled(floatingShape)`
  position: absolute;
  top: -10%;
  right: 0;
  z-index: -1;
  animation-name: ${floatAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  opacity: 1;
  width: 20rem;
  height: 20rem;
`;