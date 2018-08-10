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
  //count: 0
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
      questions: action.questions.question
    })
  } if (action.type === FETCH_NEXT_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      fetchloading: false,
      fetcherror: null,
      questions: action.questions.nextQuestion,
      numCorrect: action.questions.lastAnswer ? state.numCorrect+1 : state.numCorrect,
      numIncorrect: action.questions.lastAnswer ? state.numIncorrect : state.numIncorrect+1,
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
