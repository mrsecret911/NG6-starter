
import axios from 'axios';

import { GET_PERSONS, GET_PERSON } from './types'

export const getPersons = length => dispatch => {
  axios.get(`https://randomuser.me/api/?results=${length}`)
    .then(({ data: { results } }) => {
      console.log(results)
      dispatch({
        type: GET_PERSONS,
        payload: results
      });
    })
}

export const getPerson = id => {
  return {
    type: GET_PERSON,
    payload: id
  }
}
