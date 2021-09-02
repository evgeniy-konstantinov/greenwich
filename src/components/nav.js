import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/safari-pinned-tab 1.png';
import clock from '../images/clock.png';
import phone from '../images/phone.png';
import burger from '../images/button.png';
import { ModalGreenwich } from './modal_greenwich';

const Section = styled.section`
  max-width: 1920px;
  width: 1110px;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 5px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  height: 28px;
  margin-left: 44px;
  color: #fff;
  font-size: 16px;
  align-items: center;
  display: flex;
`;

const Burg = styled.button`
  background: url(${burger});
  margin-left: 40px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Time = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const Icon = styled.img`
  padding-right: 12px;
`;

export default function Navigate() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    // функция переключает состояние вперед и назад
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <ModalGreenwich openModal={openModal} setOpenModal={setOpenModal} />
      <Section>
        <Nav>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Info>
            <Text>
              <Icon src={clock} alt="clock" />
              <div>
                Working hours: <Time>08.00 – 20.00</Time>
              </div>
            </Text>
            <Text>
              <Icon src={phone} alt="phone" />
              <div>+48 512 824 953</div>
            </Text>
            <Burg onClick={showModal} />
          </Info>
        </Nav>
      </Section>
    </>
  );
}
