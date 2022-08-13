import React from 'react';
import Accodion from '../components/Accodion.jsx';

const AccodionPage = () => {
  const info = [
    {
      title: 'Vamsi Krishna',
      description: 'Hello vamsi krishna',
    },
    {
      title: 'Tejaswi',
      description: 'Hello tejaswi',
    },
    {
      title: 'Harshavardhan',
      description: 'Hello harshavardhan',
    },
  ];

  return (
    <div>
      <Accodion items={info} />
    </div>
  );
};

export default AccodionPage;
