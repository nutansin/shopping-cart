import {UPDATE_FILTERS} from './actionTypes';

export const updateFilters = filters => ({
    type: UPDATE_FILTERS,
    payload: filters
});