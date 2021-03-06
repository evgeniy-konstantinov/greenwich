import React from 'react';
import styled from 'styled-components';
import ship from '../images/ship-in-sea.png';
import Btn from '../components/button';
import Navigate from './nav';

const MainSection = styled.section`
  position: relative;
  top: 0;
  left: 0;
  max-width: 1920px;
  height: 864px;
  background: url(${ship}) no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 530px;
    align-items: flex-start;
  }
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 249px;
    margin: 44px 0 0 20px;
  }
`;

const MainFlex = styled.div`
  width: 723px;
  display: flex;
  flex-direction: column;
  margin: 162px 792px 0 405px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

const Fact = styled.h1`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 40px;
  line-height: 54px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  width: 615px;
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 22px;
  line-height: 41px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 18px;
    line-height: 26px;
  }
`;
const SubContent = styled.div`
  width: 1110px;
  height: 514px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-height: 701px;
    height: 100%;
    width: 100vw;
  }
`;

const SubText = styled.div`
  margin-bottom: 70px;
  padding-top: 70px;
  @media screen and (max-width: 767px) {
    margin: 20px 20px 30px 20px;
    padding: 0;
  }
`;

const AboutUs = styled.h2`
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
  color: #0f6f98;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 26px;
    line-height: 33px;
  }
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 29px;
  color: #131313;
  @media screen and (max-width: 767px) {
    width: 374px;
    font-size: 16px;
    line-height: 26px;
  }
`;
export default function Main() {
  return (
    <>
      <MainSection>
        <Navigate />
        <MainContent>
          <MainFlex>
            <Fact>It is a long established fact that a reader</Fact>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted.
            </Text>
            <Btn>CONTACT US</Btn>
          </MainFlex>
        </MainContent>
      </MainSection>
      <SubContent>
        <SubText>
          <AboutUs>About Us</AboutUs>
          <Description>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </Description>
          <br />
          <br />
          <Description>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </Description>
        </SubText>
      </SubContent>
    </>
  );
}
