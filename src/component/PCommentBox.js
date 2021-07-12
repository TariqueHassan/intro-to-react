import React from "react";

export class Comment extends React.Component{
    constructor(props){
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
            loggedIn: true
        }
    }
    componentDidMount(){
        this.lo = setInterval(
            ()=>this.onLogin,
            1000)
    }
    componentWillUnmount() {
        clearInterval(this.lo);
      }
    onLogin(){
        this.setState({
            loggedIn:true
        })
    }
    onLogout(){
        this.setState({
            loggedIn:false
        })
    }

    render(){
        
        var button;
        
        if(this.state.loggedIn)
        {
            button = 
        <div>
            <button onClick={this.onLogout}>Log in</button>
            <h1>Logged in</h1>
        </div>
        }else{
            button =
            <div>
            <button onClick={this.onLogin}>Log out</button>
            <h1>Logged out</h1>
        </div>
        }
        return (
            <div>
                <h1>Time...</h1>
                {button}
            </div>
        );
    }
}