import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_NEXT_QUESTION_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from '../actions/questions'

const initialState = {
  question: null,
  fetchloading: false,
  fetcherror: null,
  numCorrect: 0,
  numIncorrect: 0,
  lastAnswer: false
};

export const reducer = (state = initialState, action) => {
  if(action.type === FETCH_QUESTIONS_REQUEST){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: null
    })
  } if (action.type === FETCH_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      question: action.question.question,
      //count: count + 1
    })
  } if (action.type === FETCH_NEXT_QUESTION_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      question: action.question.nextQuestion,
      numCorrect: action.question.lastAnswer ? state.numCorrect+1 : state.numCorrect,
      numIncorrect: action.question.lastAnswer ? state.numIncorrect : state.numIncorrect+1,
      lastAnswer: action.question.lastAnswer
    })
  } if (action.type === FETCH_QUESTIONS_ERROR){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: action.error
    })
  }
  return state;
}
