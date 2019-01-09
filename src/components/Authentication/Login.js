import React, {Component} from 'react'
import fire from '../../config/firebase'

class Login extends Component {

    state = {
       email: '',
        password: ''
    }
    render() {
        console.log(this.state)
        return (
            <div className="">
                <form>
                    <label htmlFor="userMail">Mail:</label>
                    <input type="email" name="userMail" onChange={this.handleInput}/>
                    <br/>

                    <label htmlFor="userPassword">Password:</label>
                    <input type="password" name="userPassword" onChange={this.handleInput} />
                    <br/>
                    <button onclick={this.handleLogIn}>Log In</button>
                </form>
            </div>
        )
    }

    handleLogIn = (e) =>{
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res =>{console.log("Done auth:", res)})
            .catch(error => {console.log("Authentication error:",error)});

    }
    handleInput = (e) => {
        e.preventDefault()
        console.log()
        e.target.type === 'email' ? this.setState({email: e.target.value}) : this.setState({password: e.target.value})
    }

}

export default Login