import {
  SEND_ANSWERS_REQUEST,
  SEND_ANSWERS_SUCCESS,
  SEND_ANSWERS_ERROR
} from '../actions/answers'

const initialState = {
  answers: '',
  sendloading: false,
  senderror: null,

};
 
export const reducer = (state = initialState, action) => {

  if(action.type === SEND_ANSWERS_REQUEST){
    return Object.assign({}, state, {
      sendloading: true,
      senderror: null
    })
  } if (action.type === SEND_ANSWERS_SUCCESS){
    return Object.assign({}, state, {
      sendloading: false,
      senderror: null,
      answers: action.answers
      //count: count + 1
    })
  } if (action.type === SEND_ANSWERS_ERROR){
    return Object.assign({}, state, {
      sendloading: true,
      senderror: action.error
    })
  }
  return state;
}
