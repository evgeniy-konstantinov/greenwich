import React from 'react';
import styled from 'styled-components';
import Btn from './button';
import H2 from './headingH2';
import projects__button from '../images/projects__button.png';

const MainContacts = styled.div`
  max-width: 1920px;
  height: 784px;
  background: rgba(15, 111, 152, 0.1);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContactsBlock = styled.div`
  width: 730px;
  margin: 30px auto 0;
`;

const Form = styled.form`
  width: 100%;
`;

const SmallInput = styled.input`
  padding: 0 0 0 17px;
  margin-right: ${(props) => (props.right ? '28px' : '0')};
  margin-bottom: 30px;
  width: 330px;
  height: 60px;
  border: 2px solid rgba(15, 111, 152, 0.4);
  border-radius: 10px;
  background: transparent;
  outline: none;
`;

const BigInput = styled.input`
  padding-left: 17px;
  width: 720px;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid rgba(15, 111, 152, 0.4);
  background: transparent;
  outline: none;
`;

const BigerInput = styled.textarea`
  padding: 21px 0 0 17px;
  width: 720px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid rgba(15, 111, 152, 0.4);
  background: transparent;
  outline: none;
  resize: none;
`;

const SubText = styled.p`
  margin-top: 30px;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: rgba(19, 19, 19, 0.6);
  opacity: 0.8;
`;

const ProdjectBtn = styled.button`
  position: absolute;
  right: 255px;
  bottom: 236px;
  width: 40px;
  height: 40px;
  background: url(${projects__button});
  border: none;
  cursor: pointer;
`;

let ScrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default function Contacts() {
  return (
    <MainContacts>
      <H2>Contact Us</H2>
      <ContactsBlock>
        <Form>
          <SmallInput right type="text" placeholder="Full Name" />
          <SmallInput type="text" placeholder="Company Name" />
          <br />
          <SmallInput right type="email" placeholder="Email" />
          <SmallInput type="text" placeholder="Phone Number" />
          <br />
          <BigInput type="text" placeholder="How did you hear about us?" />
          <BigerInput
            type="text"
            placeholder="Tell me more about your request."
          />
        </Form>
      </ContactsBlock>
      <Btn>SUBMIT</Btn>
      <SubText>
        By submiting this form I consent to have my data collected in order to
        process this request. We will add
        <br /> your info to our CRM for contacting you regarding your request.
      </SubText>
      <ProdjectBtn onClick={ScrollUp} />
    </MainContacts>
  );
}
