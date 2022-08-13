import { SET_API_DATA, CLEAR_API_DATA } from '../../constant';

const initialState = {};

const apiReducer = (state = initialState, { type, payload, apiName }) => {
  switch (type) {
    case SET_API_DATA:
      return {
        ...state,
        [apiName]: payload,
      };
    case CLEAR_API_DATA:
      return {};
    default:
      return state;
  }
};

export default apiReducer;
