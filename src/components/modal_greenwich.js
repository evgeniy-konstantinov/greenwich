import React from "react";
import styled from "styled-components";
import BtnClose from "../images/ButtonClose.png";
import ModLogo from "../images/ModalLogo.png";
import clock from "../images/modal_time.png";
import phone from "../images/modal_phone.png";
import poi from "../images/modal_poi.png";
import industrial from "../images/industrial-port.png";

const ModalWindow = styled.div`
  width: 1440px;
  height: 969px;
  left: 0px;
  top: 0px;
  background: #fff;
  position: absolute;
  overflow: hidden;
  z-index: 20;
  @media screen and (max-width: 767px) {
    width: 414px;
    height: 896px;
  }
`;

const ModalLogo = styled.div`
  margin: 13px 0 0 195px;
  width: 1100px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin: 20px 20px 47px 20px;
    width: 414px;
    height: 52px;
  }
`;

const ButtonClose = styled.button`
  width: 48px;
  height: 48px;
  background-size: cover;
  background-image: url(${BtnClose});
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    margin-right: 40px;
  }
`;

const MainContent = styled.div`
  width: 1112px;
  margin: 73px 0 0 165px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin: 0;
    width: 414px;
  }
`;

const MainDescription = styled.div`
  width: 484px;
  padding: 0;
  @media screen and (max-width: 767px) {
    width: 414px;
    margin: 141px 0 0 20px;
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 42px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;

const Text = styled.p`
  margin-left: 15px;
  font-size: 22px;
  line-height: 28px;
  color: #131313;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    width: 318px;
  }
`;

const IndustrialImg = styled.img`
  margin-top: 100px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const About = styled.div`
  width: 485px;
  margin-left: 95px;
  @media screen and (max-width: 767px) {
    width: 350px;
    margin-left: 20px;
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: none;
`;

const Href = styled.a`
  color: #131313;
  display: inline-block;
  font-weight: bold;
  font-size: 44px;
  line-height: 66px;
  text-decoration: none;

  :hover {
    color: #0f6f98;
    margin-left: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

export const ModalGreenwich = ({ openModal, setOpenModal }) => {
  return (
    <>
      {openModal ? (
        <ModalWindow>
          <ModalLogo>
            <img src={ModLogo} />
            <ButtonClose onClick={() => setOpenModal((prev) => !prev)} />
          </ModalLogo>
          <MainContent>
            <MainDescription>
              <Description>
                <Icon src={clock} />
                <Text>Working hours: 08.00 – 20.00 </Text>
              </Description>
              <Description>
                <Icon src={phone} />
                <Text>+48 512 824 953 </Text>
              </Description>
              <Description>
                <Icon src={poi} />
                <Text>
                  91 BATTERSEA PARK ROAD, LONDON, ENGLAND, SW8 4DU UNITED
                  KINGDOW
                </Text>
              </Description>
              <IndustrialImg src={industrial} />
            </MainDescription>
            <About>
              <Href href="http://www.greenwich-company.com/">About us</Href>
              <Href href="#">Electronic equipment</Href>
              <Href href="#">Industrial equipment </Href>
              <Href href="#">Metal</Href>
              <Href href="#">Agricultural products</Href>
              <Href href="#">Contact Us</Href>
            </About>
          </MainContent>
        </ModalWindow>
      ) : null}
    </>
  );
};
