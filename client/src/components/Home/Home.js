import React, { Component, Fragment } from 'react';
import SignUp from '../../containers/SignUp/SignUp';

class Home extends Component {

    onSignUp = e => {
        e.preventDefault();
        console.log('one')
    }

    render () {
        return (
            <Fragment>
                <SignUp submit={this.onSignUp}/>
            </Fragment>
        );
    }
};

export default Home;