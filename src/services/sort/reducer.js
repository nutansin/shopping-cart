import {UPDATE_SORT} from './actionTypes';

const initialState = {
    sort: []
  };
function updateSort (state=initialState, action) {
    switch (action.type) {
        case UPDATE_SORT:
          return { ...state, sort: action.payload};
        default:
          return state;
      }
}
export default updateSort;