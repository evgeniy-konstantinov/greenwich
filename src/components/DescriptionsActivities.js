import React from 'react';
import styled, { css } from 'styled-components';
import microboard from '../images/microboard.png';
import machine from '../images/machine.png';
import metal from '../images/metal.png';
import corn from '../images/corn.png';
import H2 from './headingH2';

const DescriptionsBlock = styled.div`
  max-width: 1920px;
  width: 1110px;
  margin: 0 auto;
  padding-top: 90px;
`;

const DescriptionsText = styled.div`
  width: 100%;
  height: 329px;
  margin-bottom: 60px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 29px;
  color: #131313;
  padding-top: 30px;
`;

const DescriptionImg = styled.img`
  width: 445px;
  height: 329px;
`;

const Div = styled.div`
  width: 445px;
  height: 329px;
  float: ${(props) => (props.left ? 'left' : 'right')};
  ${(props) =>
    props.right &&
    css`
      margin-right: 48px;
    `};
  ${(props) =>
    props.lefts &&
    css`
      margin-left: 48px;
    `};
`;
export default function DescriptionsActivities() {
  return (
    <DescriptionsBlock>
      <DescriptionsText>
        <Div lefts>
          <DescriptionImg src={microboard} />
        </Div>
        <H2>Electronic equipment</H2>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </Description>
      </DescriptionsText>
      <DescriptionsText>
        <Div left right>
          <DescriptionImg src={machine} />
        </Div>
        <H2>Industrial equipment</H2>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </Description>
      </DescriptionsText>
      <DescriptionsText>
        <Div lefts>
          <DescriptionImg src={metal} />
        </Div>
        <H2>Metal</H2>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </Description>
      </DescriptionsText>
      <DescriptionsText>
        <Div left right>
          <DescriptionImg src={corn} />
        </Div>
        <H2>Agricultural products</H2>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </Description>
      </DescriptionsText>
    </DescriptionsBlock>
  );
}
