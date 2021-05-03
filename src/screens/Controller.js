import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';



//Creating controller class for easy routing the pages
class Controller extends Component{
    constructor(){
        super()
        this.baseUrl = "https://api.instagram.com/v1/users/self/"; //setting the baseUrl of the api 
    }

    render(){
        return(
            <Router>
                <div className = 'main-container'>
                    <Route exact path = '/' render={(props) => <Login {...props} baseUrl = {this.baseUrl}/>}/>           {/* Route to login Page */ }
                    <Route exact path = '/home' render={(props) => <Home {...props} baseUrl = {this.baseUrl}/> }/>            {/* Route to home Page */ }
                
                </div>
            </Router>
        )
    }
}

export default Controller;