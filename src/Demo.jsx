import Reac, { useEffect, useState } from 'react';
import {
  getAllProducts,
  getSingleProduct,
} from './shared/services/shopServiceCalls';
import { useDispatch } from 'react-redux';
import { user, user1 } from './shared/feature/applicationSlice';
const Demo = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    //shopApi({ method: 'GET', url: '/products' });
    dispatch(getSingleProduct({ id: 1 }));
    dispatch(getAllProducts());
    dispatch(user(2));
    dispatch(user1(12));
  };

  return (
    <div>
      <button onClick={onClick}>Start</button>
    </div>
  );
};

export default Demo;
