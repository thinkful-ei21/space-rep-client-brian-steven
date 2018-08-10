import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/questions'
import {postAnswer} from '../actions/answers'
import './questions.css'
class Questions extends React.Component {

  componentDidMount() {
    // console.log("component mounted")
      this.props.dispatch(fetchQuestions(this.props.id));

  }
///on click should not dispatch a question
  onClick(e) {
    console.log(this.textAnswer.value);
    const answer = {
      id: this.props.id,
      // question: this.props.question.question,
      userAnswer: this.textAnswer.value.trim()
    };
    this.props.dispatch(postAnswer(answer,this.props.id ));
    //this.props.dispatch(fetchQuestions(this.props.id));

  }

  // onShowAnswer(e){
  //   let this.props.answers
  // }

  //const question = this.props.question ? [this.props.question].map((question, index) =>{
  //   return (<div key={index}> <li>{question.question}</li></div>);
  // }) : "";
  //<button type="button" onClick={e => this.onShowAnswer(e)}>give up</button>
  //{this.props.answers}
  render() {
    return(
      <div>
        <h3>{this.props.question.question}</h3>

        <input type="text" ref={input => this.textAnswer = input}></input>
        <button className="submit" type="button" onClick={e => this.onClick(e)}>Submit Answer</button>
      </div>
    );
  }
}
const mapStateToProps = function(state){
  const {currentUser} = state.auth;
  console.log(state.question);
  return {
    id: state.auth.currentUser.id,
    question: state.question.questions,
    answers: state.answers.answers
  };
};

export default connect(mapStateToProps)(Questions)
