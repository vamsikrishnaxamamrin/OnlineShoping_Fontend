import { SET_API_DATA, CLEAR_API_DATA } from '../../constant';
import store from '../store';

const apiAction = {
  set: ({ payload, apiName }) => {
    const { dispatch } = store;
    dispatch({ type: SET_API_DATA, payload, apiName });
  },
  clear: () => {
    const { dispatch } = store;
    dispatch({ type: CLEAR_API_DATA });
  },
};

export default apiAction;
