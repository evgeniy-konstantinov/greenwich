import React from 'react';
import styled from 'styled-components';
import BtnClose from '../images/ButtonClose.png';
import ModLogo from '../images/ModalLogo.png';
import clock from '../images/modal_time.png';
import phone from '../images/modal_phone.png';
import poi from '../images/modal_poi.png';
import industrial from '../images/industrial-port.png';

const ModalWindow = styled.div`
  width: 1440px;
  height: 969px;
  left: 0px;
  top: 0px;
`;

const ModalLogo = styled.div`
  margin: 13px auto 0;
  width: 839px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonClose = styled.button`
  width: 48px;
  height: 48px;
  background-size: cover;
  background-image: url(${BtnClose});
  border: none;
  cursor: pointer;
`;

const MainContent = styled.div`
  width: 100%;
  margin: 73px auto 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const MainDescription = styled.div`
  width: 484px;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 42px;
`;

const Text = styled.p`
  margin-left: 15px;
  font-size: 22px;
  line-height: 28px;
  color: #131313;
`;

const IndustrialImg = styled.img`
  margin-top: 100px;
`;

const About = styled.div`
  width: 485px;
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
`;

export default function ModalGreenwich() {
  return (
    <ModalWindow>
      <ModalLogo>
        <img src={ModLogo} />
        <ButtonClose />
      </ModalLogo>
      <MainContent>
        <MainDescription>
          <Description>
            <img src={clock} />
            <Text>Working hours: 08.00 – 20.00 </Text>
          </Description>
          <Description>
            <img src={phone} />
            <Text>+48 512 824 953 </Text>
          </Description>
          <Description>
            <img src={poi} />
            <Text>
              91 BATTERSEA PARK ROAD, LONDON, ENGLAND, SW8 4DU UNITED KINGDOW
            </Text>
          </Description>
          <IndustrialImg src={industrial} />
        </MainDescription>
        <About>
          <Href href="#">About us</Href>
          <Href href="#">Electronic equipment</Href>
          <Href href="#">Industrial equipment </Href>
          <Href href="#">Metal</Href>
          <Href href="#">Agricultural products</Href>
          <Href href="#">Contact Us</Href>
        </About>
      </MainContent>
    </ModalWindow>
  );
}
