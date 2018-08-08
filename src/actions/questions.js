import {API_BASE_URL} from '../config';
import questions from '../questions-list-json';
console.log(...questions);
let count = 0;

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST
});

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions[count++]
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS_ERROR,
  error
});

///need BASE URL IMPORT
export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions[count++]
});
export const fetchQuestions = () => dispatch => {
  dispatch(fetchQuestionsRequest());
  return fetch(`${API_BASE_URL}/questions/`).then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    return res.json();
  }).then(questions => {
    // console.log(questions);
    dispatch(fetchQuestionsSuccess(questions));
  }).catch(error => {
    console.log(error);
    dispatch(fetchQuestionsError(error));
  });
};

export const postAnswer = (answer) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions[count++]
});
export const postAnswer = (answer) => dispatch => {
  dispatch(fetchQuestionsRequest());
  return fetch(`${API_BASE_URL}/questions/${answer.id}`, {
    method: 'PUT',
    headers: {
      "Content-Types": "application/json"
    },
    body: answer
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(questions => dispatch(fetchQuestionsSuccess(questions)))
  .catch(error => {
    dispatch(fetchQuestionsError(error));
//   });
// };
