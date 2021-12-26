import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Mission from '../components/Mission';
import Sign from '../components/Sign';
// import SignatureList from '../components/SignatureList';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Sign />
      {/* <SignatureList /> */}
      <Footer />
      <Link to="/login">Log In</Link>
    </>
  );
}
