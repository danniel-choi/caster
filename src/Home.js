import React from 'react';
import firebase from './config/firebase';

class Home extends React.Component {

    logout() {
        
    }

    render() {
        return (
            <div>
                <h1>You are logged in..</h1>
                <button onClick={this.logout}>로그아웃</button>
            </div>
        )
    }
}

export default Home;