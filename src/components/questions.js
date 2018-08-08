import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/questions'

class Questions extends React.Component {

  componentDidMount() {
    console.log("component mounted")
      this.props.dispatch(fetchQuestions());
  }

  render() {

    const question = this.props.question.map((question, index) =>{
      return (<div key={index}> <li>{question.question}</li></div>);
    });
    return(
      <div>
        {question}
        <input type="text" ></input>
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
