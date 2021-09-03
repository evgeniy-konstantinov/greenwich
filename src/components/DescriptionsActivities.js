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
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* max-height: 2808px; */
    padding-top: 30px;
  }
`;

const DescriptionsText = styled.div`
  width: 100%;
  height: 329px;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 30px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 29px;
  color: #131313;
  padding-top: 30px;
  @media screen and (max-width: 767px) {
    margin: 20px 20px 0 20px;
    width: 374px;
  }
`;

const DescriptionImg = styled.img`
  width: 445px;
  height: 329px;
  @media screen and (max-width: 767px) {
    width: 374px;
    height: 260px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const BlockH2 = styled.div`
  @media screen and (max-width: 767px) {
    order: -1;
    margin: 0 0 30px 20px;
  }
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
  @media screen and (max-width: 767px) {
    width: 374px;
    height: 260px;
    clear: both;
    margin: 0;
    padding: 0 20px;
  }
`;
export default function DescriptionsActivities() {
  return (
    <DescriptionsBlock>
      <DescriptionsText>
        <Div lefts>
          <DescriptionImg src={microboard} />
        </Div>
        <BlockH2>
          <H2>Electronic equipment</H2>
        </BlockH2>
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
        <BlockH2>
          <H2>Industrial equipment</H2>
        </BlockH2>
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
        <BlockH2>
          <H2>Metal</H2>
        </BlockH2>
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
        <BlockH2>
          <H2>Agricultural products</H2>
        </BlockH2>
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
