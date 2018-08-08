import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from '../actions/questions'

const initialState = {
  questions: [],
  fetchloading: false,
  fetcherror: null
};

export const reducer = (state = initialState, action) => {
  // console.log(state, action)
  if(action.type === FETCH_QUESTIONS_REQUEST){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: null
    })
  } if (action.type === FETCH_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      questions: action.questions
    })
  } if (action.type === FETCH_QUESTIONS_ERROR){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: action.error
    })
  }
  return state;
}
