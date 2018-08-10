import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
//import {fetchQuestions} from '../actions/questions'
import './dashboard.css'
import Questions from './questions';
export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(e){
      e.preventDefault()
      // console.log("getting questions clicked")
      // this.props.dispatch(fetchQuestions());
    }
//id: {this.props.id}
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h3>Please start the quiz, {this.props.username}</h3>

                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data" hidden="true">
                    Protected data: {this.props.protectedData}
                </div>
                <Questions/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        id: state.auth.currentUser.id,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
