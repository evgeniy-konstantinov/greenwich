import React from 'react';
import './App.css';
import BusinessActivities from './components/BusinessActivities';
import Main from './components/main';
import DescriptionsActivities from './components/DescriptionsActivities';
import Contacts from './components/contacts';
import Footer from './components/footer';
import ModalGreenwich from './components/modal_greenwich';

function App() {
  return (
    <>
      <Main></Main>
      <BusinessActivities />
      <DescriptionsActivities />
      <Contacts />
      <Footer />
      <ModalGreenwich />
    </>
  );
}

export default App;
