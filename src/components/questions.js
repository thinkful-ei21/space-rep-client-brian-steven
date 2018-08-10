import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/questions'
import {postAnswer} from '../actions/answers'

class Questions extends React.Component {

  componentDidMount() {
    // console.log("component mounted")
      this.props.dispatch(fetchQuestions());

  }
///on click should not dispatch a question
  onClick(e) {
    const answer = {
      id: this.props.id,
      // question: this.props.question.question,
      answer: this.textAnswer.value.trim()
    };
    this.props.dispatch(postAnswer(answer ));
    console.log(answer.answer );
    console.log(this.props.question.questions);
  }

  // onShowAnswer(e){
  //   let this.props.answers
  // }

  //const question = this.props.question ? [this.props.question].map((question, index) =>{
  //   return (<div key={index}> <li>{question.question}</li></div>);
  // }) : "";
  //<button type="button" onClick={e => this.onShowAnswer(e)}>give up</button>

  render() {

    return(
      <div>
        {this.props.question.question}
        {this.props.answers}
        <input type="text" ref={input => this.textAnswer = input}></input>
        <button type="button" onClick={e => this.onClick(e)}>Submit Answer</button>
      </div>
    );
  }
}
const mapStateToProps = function(state){
  const {currentUser} = state.auth;
  return {
    id: state.auth.currentUser.id,
    question: state.question.questions,
    answers: state.answers.answers
  };
};

export default connect(mapStateToProps)(Questions)
