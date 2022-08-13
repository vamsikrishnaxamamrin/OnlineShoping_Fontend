import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { state } = useLocation();
  console.log('About');
  return <div>About</div>;
};

export default About;
