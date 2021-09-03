import React from 'react';
import styled from 'styled-components';
import logo from '../images/safari-pinned-tab 1.png';
import phone from '../images/phone.png';
import poi from '../images/poi_outlined.png';

const MainFooter = styled.div`
  max-width: 1920px;
  height: 206px;
  background: #003952;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const FooterFlex = styled.div`
  width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* position: relative; */
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterImg = styled.img`
  width: 259px;
  height: 90px;
  margin: 32px 0 28px;
  @media screen and (max-width: 767px) {
    margin: 40px 0;
  }
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 28px;
  /* position: absolute; */
  display: inline-block;
  margin-left: 395px;
  @media screen and (max-width: 767px) {
    margin: 0 0 40px 58px;
    display: inline-block;
  }
`;

const FooterAddress = styled.div`
  width: 490px;
  padding-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const Address = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const SubText = styled.div`
  margin-left: 14px;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
`;
export default function Footer() {
  return (
    <MainFooter>
      <FooterFlex>
        <FooterImg src={logo} />

        <FooterAddress>
          <Address>
            <img src={poi} />
            <SubText>
              91 BATTERSEA PARK ROAD, LONDON,
              <br /> ENGLAND, SW8 4DU UNITED KINGDOW
            </SubText>
          </Address>
          <Address>
            <img src={phone} />
            <SubText>+48 512 824 953</SubText>
          </Address>
        </FooterAddress>
      </FooterFlex>
      <Copyright>
        Copyright © 2021 GREENWICH TRADE LIMITED. All rights reserved.
      </Copyright>
    </MainFooter>
  );
}
