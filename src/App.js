import React, { useState } from 'react';
import './App.css';
import BusinessActivities from './components/BusinessActivities';
import Main from './components/main';
import DescriptionsActivities from './components/DescriptionsActivities';
import Contacts from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Main></Main>
      <BusinessActivities />
      <DescriptionsActivities />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
