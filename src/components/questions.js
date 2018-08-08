import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/questions'

class Questions extends React.Component {

  componentDidMount() {
    // console.log("component mounted")
      this.textAnswer = React.createRef();
      this.props.dispatch(fetchQuestions());
  }

  onClick(e) {
    console.log(this.textAnswer);
  }
 
  render() {
    const question = this.props.question ? [this.props.question].map((question, index) =>{
      return (<div key={index}> <li>{question.question}</li></div>);
    }) : "";
    return(
      <div>
        {question}
        <input type="text" ref={input => this.textAnswer = input}></input>
        <button type="button" onClick={e => this.onClick(e)}>Submit Answer</button>
      </div>
    );
  }
}
const mapStateToProps = function(state){
  return {
    question: state.question.questions
  };
};

export default connect(mapStateToProps)(Questions)
