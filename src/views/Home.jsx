import React from 'react';
import Header from '../components/Header';
import Mission from '../components/Mission';
import SignUp from '../components/SignUp';
import SignatureList from '../components/SignatureList';

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <SignUp />
      <SignatureList />
    </>
  );
}
