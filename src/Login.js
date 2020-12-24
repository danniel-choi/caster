import React from 'react';
import firebase from './config/firebase';
class Login extends React.Component{
    state = {
        username: '',
        password: '',
    }
    onChangeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }
    onClickLoginHandler = e => {
        e.preventDefault();
        firebase.doSignInWithEmailAndPassword(this.state.username, this.state.password)
            .then(r => {
                console.log(r)
                this.props.login();
            })
    }
    onClickSignUpHandler = e => {
        e.preventDefault();
        firebase.createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then(r => {
                console.log(r)
                this.props.login();
            })
    }

    render() {
        const {username, password} = this.state;
        return(
            <form class="field has-addons">
                <div class="control is-expanded">
                    <input name="username" class="input is-primary" id="email" type="text" value={username} onChange={this.onChangeHandler}/>
                </div>
                <div class="control is-expanded">
                    <input name="password" class="input is-primary" id="password" type="password" value={password} onChange={this.onChangeHandler}/>
                </div>
                <div>
                    <button class="button is-primary" onClick={this.onClickLoginHandler}>로그인</button>
                    <button class="button is-primary" onClick={this.onClickSignUpHandler}>회원가입</button>
                </div>
            </form>
        )
    }
}

export default Login;
