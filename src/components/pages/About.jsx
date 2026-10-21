import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";

const AboutContainer = styled.div`
  width: 100%;
  padding: 60px 40px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  text-align: center;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const InfoButton = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: transparent;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const About = () => {
  return (
    <AboutContainer className="about-page">
      <Title>About Us</Title>

      <Grid>
        {/* Card 1 */}
        <ImageCard>
          <ImageBox><img src={img1} alt="Church community" /></ImageBox>
          <Description>Our church is rooted in love and compassion, serving the community with grace.</Description>
          <ButtonGroup>
            <Link to="/about/our-story" style={{ textDecoration: 'none' }}>
              <InfoButton>Our Story</InfoButton>
            </Link>
          </ButtonGroup>
        </ImageCard>

        {/* Card 2 */}
        <ImageCard>
          <ImageBox><img src={img2} alt="Church leadership" /></ImageBox>
          <Description>Leadership committed to guiding people toward spiritual growth and hope.</Description>
          <ButtonGroup>
            <Link to="/about/leadership" style={{ textDecoration: 'none' }}>
              <InfoButton>Leadership</InfoButton>
            </Link>
          </ButtonGroup>
        </ImageCard>

        {/* Card 3 */}
        <ImageCard>
          <ImageBox><img src={img3} alt="Church mission" /></ImageBox>
          <Description>Our mission is to spread the gospel and uplift the community with faith.</Description>
          <ButtonGroup>
            <Link to="/about/mission" style={{ textDecoration: 'none' }}>
              <InfoButton>Mission</InfoButton>
            </Link>
          </ButtonGroup>
        </ImageCard>

        {/* Card 4 */}
        <ImageCard>
          <ImageBox><img src={img4} alt="Church beliefs" /></ImageBox>
          <Description>Our beliefs are centered on the Word of God and living a Christ-led life.</Description>
          <ButtonGroup>
            <Link to="/about/beliefs" style={{ textDecoration: 'none' }}>
              <InfoButton>Beliefs</InfoButton>
            </Link>
          </ButtonGroup>
        </ImageCard>
      </Grid>
    </AboutContainer>
  );
};


export default About;