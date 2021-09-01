import React from 'react';
import styled from 'styled-components';
import H2 from './headingH2';
import microboard from '../images/microboard.png';
import machine from '../images/machine.png';
import metal from '../images/metal.png';
import corn from '../images/corn.png';
import vector from '../images/vector.png';

const BusinessMain = styled.div`
  height: 501px;
  background-color: rgba(15, 111, 152, 0.1);
`;

const BusinessText = styled.div`
  height: 100%;
  width: 1110px;
  margin: 0 auto;
`;

const HeadingBlock = styled.div`
  padding-top: 60px;
  margin-bottom: 50px;
`;

const BusinessFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BusinessBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const BusinessImg = styled.img`
  width: 255px;
  height: 205px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #131313;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
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
            <Description>Electronic equipment</Description>
            <Href>
              Learn more
              <Span>
                <img src={vector} />
              </Span>
            </Href>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={machine} />
            <Description>Industrial equipment</Description>
            <Href>
              Learn more
              <Span>
                <img src={vector} />
              </Span>
            </Href>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={metal} />
            <Description>Metal</Description>
            <Href>
              Learn more
              <Span>
                <img src={vector} />
              </Span>
            </Href>
          </BusinessBlock>
          <BusinessBlock>
            <BusinessImg src={corn} />
            <Description>Agricultural products</Description>
            <Href>
              Learn more
              <Span>
                <img src={vector} />
              </Span>
            </Href>
          </BusinessBlock>
        </BusinessFlex>
      </BusinessText>
    </BusinessMain>
  );
}
