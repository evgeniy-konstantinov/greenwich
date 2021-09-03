import React from 'react';
import styled from 'styled-components';
import H2 from './headingH2';
import microboard from '../images/microboard.png';
import machine from '../images/machine.png';
import metal from '../images/metal.png';
import corn from '../images/corn.png';
import vector from '../images/vector.png';

const BusinessMain = styled.div`
  width: 100%;
  height: 501px;
  background-color: rgba(15, 111, 152, 0.1);
  @media screen and (max-width: 767px) {
    height: 583px;
  }
`;

const BusinessText = styled.div`
  height: 100%;
  width: 1110px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

const HeadingBlock = styled.div`
  padding-top: 60px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    margin: 30px 0 0 20px;
    padding-top: 30px;
  }
`;

const BusinessFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const BusinessBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const BusinessImg = styled.img`
  width: 255px;
  height: 205px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 130px;
    height: 90px;
    margin: 30px 20px 0 20px;
  }
`;

const Description = styled.p`
  color: #131313;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

const Href = styled.a`
  color: #0f6f98;
`;

const Span = styled.span`
  margin-left: 10px;
`;
export default function BusinessActivities() {
  return (
    <BusinessMain>
      <BusinessText>
        <HeadingBlock>
          <H2>Business Activities</H2>
        </HeadingBlock>
        <BusinessFlex>
          <BusinessBlock>
            <BusinessImg src={microboard} />
            <div>
              <Description>Electronic equipment</Description>
              <Href href="#">
                Learn more
                <Span>
                  <img src={vector} />
                </Span>
              </Href>
            </div>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={machine} />
            <div>
              <Description>Industrial equipment</Description>
              <Href href="#">
                Learn more
                <Span>
                  <img src={vector} />
                </Span>
              </Href>
            </div>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={metal} />
            <div>
              <Description>Metal</Description>
              <Href href="#">
                Learn more
                <Span>
                  <img src={vector} />
                </Span>
              </Href>
            </div>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={corn} />
            <div>
              <Description>Agricultural products</Description>
              <Href href="#">
                Learn more
                <Span>
                  <img src={vector} />
                </Span>
              </Href>
            </div>
          </BusinessBlock>
        </BusinessFlex>
      </BusinessText>
    </BusinessMain>
  );
}
