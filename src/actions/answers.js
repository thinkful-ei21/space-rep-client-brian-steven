import {API_BASE_URL} from '../config';

export const SEND_ANSWERS_REQUEST = 'SEND_ANSWERS_REQUEST';
export const sendAnswersRequest = () => ({
  type: SEND_ANSWERS_REQUEST
});

export const SEND_ANSWERS_SUCCESS = 'SEND_ANSWERS_SUCCESS';
export const sendAnswersSuccess = answers => ({
  type: SEND_ANSWERS_SUCCESS,
  answers
});

export const SEND_ANSWERS_ERROR = 'SEND_ANSWERS_ERROR';
export const sendAnswersError = error => ({
  type: SEND_ANSWERS_ERROR,
  error
});


export const postAnswer = (answers) => (dispatch,getState) => {
  dispatch(sendAnswersRequest());
  const state = getState();
  return fetch(`${API_BASE_URL}/questions/answer/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${state.auth.authToken}`
    },
    body: JSON.stringify(answers)
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(answers => dispatch(sendAnswersSuccess(answers.answer)))
  .catch(error => {
    dispatch(sendAnswersError(error));
  });
};
