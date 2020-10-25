import {  ADD_ITEM, SET_CATEGORY ,TOGGLE_FAV} from './types';

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload
  };
};

export const setSelectedCat = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const toggleFavorite = (payload) => {
  console.log('payload id',payload)
  return {
    type: TOGGLE_FAV,
    payload
  };
};
