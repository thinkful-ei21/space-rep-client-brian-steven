import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_NEXT_QUESTION_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from '../actions/questions'

const initialState = {
  questions: {},
  fetchloading: false,
  fetcherror: null,
  numCorrect: 0,
  numIncorrect: 0,
  lastAnswer: false
};

export const reducer = (state = initialState, action) => {
   //console.log(state, action)
  if(action.type === FETCH_QUESTIONS_REQUEST){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: null
    })
  } if (action.type === FETCH_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      questions: action.questions.question,
      //count: count + 1
    })
  } if (action.type === FETCH_NEXT_QUESTION_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      questions: action.questions.nextQuestion,
      numCorrect: action.questions.lastAnswer ? state.numCorrect++ : state.numCorrect,
      numIncorrect: action.questions.lastAnswer ? state.numIncorrect : state.numIncorrect++,
      lastAnswer: action.questions.lastAnswer
    })
  } if (action.type === FETCH_QUESTIONS_ERROR){
    return Object.assign({}, state, {
      fetchloading: true,
      fetcherror: action.error
    })
  }
  return state;
}
