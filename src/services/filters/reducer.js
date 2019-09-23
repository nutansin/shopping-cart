import {UPDATE_FILTERS} from './actionTypes';

const initialState = {
    item: []
  };
function updateFilters (state=initialState, action) {
    switch (action.type) {
        case UPDATE_FILTERS:
          return { ...state, item: action.payload};
        default:
          return state;
      }
}
export default updateFilters;