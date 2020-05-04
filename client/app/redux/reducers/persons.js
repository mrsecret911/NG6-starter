import { GET_PERSONS, GET_PERSON } from '../actions/types';

const initialState = {
    list: [],
    personDetail: null
};

function persons(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PERSONS:
            return {
                ...state,
                list: payload
            }

        case GET_PERSON:
          const savedPerson = JSON.parse(localStorage.getItem('personDetail'));

          if (savedPerson && savedPerson.id === payload) {
            return {
              ...state,
              personDetail: savedPerson.personDetail
            }
          } else {
            const personDetail = state.list.find(person => person.login.uuid === payload);
            localStorage.setItem('personDetail', JSON.stringify({
              id: payload,
              personDetail
            }));

            return {
                ...state,
                personDetail
            }
          }

        default:
            return state;
    }
}

export default persons;
