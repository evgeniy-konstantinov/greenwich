import React from "react";
import styled from "styled-components";
import ship from "../images/ship-in-sea.png";
import Button from "./button";
import Navigate from "./nav";

const MainSection = styled.section`
  max-width: 1920px;
  position: relative;
  top: 0;
  left: 0;
  height: 864px;
  background: url(${ship}) no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainFlex = styled.div``;

const Fact = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 54px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 41px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
          </MainFlex>
          <Button>sdf</Button>
        </MainContent>
      </MainSection>
    </>
  );
}
