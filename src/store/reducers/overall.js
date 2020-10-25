import { TOGGLE_DRAWER } from '../actions/types';

const initialState = {
    open:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, open: !state.open };
   

    default:
      return state;
  }
}
