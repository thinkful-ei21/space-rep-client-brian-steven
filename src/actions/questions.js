import {API_BASE_URL} from '../config';
import questions from '../questions-list-json';
console.log(...questions);


export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST
});

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions
});

export const FETCH_NEXT_QUESTION_SUCCESS = 'FETCH_NEXT_QUESTION_SUCCESS';
export const fetchNextQuestionSuccess = questions => ({
  type: FETCH_NEXT_QUESTION_SUCCESS,
  questions
})

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS_ERROR,
  error
});

///need BASE URL IMPORT
// export const fetchQuestions = () => ({
//   type: FETCH_QUESTIONS_SUCCESS,
//   questions
// });
export const fetchQuestions = (id) => dispatch => {
  dispatch(fetchQuestionsRequest());
  console.log(id)
  return fetch(`${API_BASE_URL}/users/${id}`).then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    return res.json();
  }).then(questions => {
// console.log("fetch")
//  console.log(questions)
    dispatch(fetchQuestionsSuccess(questions));
  }).catch(error => {
    console.log(error);
    dispatch(fetchQuestionsError(error));
  });
};

// export const postAnswer = (answer) => ({
//   type: FETCH_QUESTIONS_SUCCESS,
//   questions
// });
