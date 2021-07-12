import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Home from './RouterExample/Home';
import About from './RouterExample/About';
import Contact from './RouterExample/Contact';
import { Button } from 'react-bootstrap';
import { UserContext } from './UserContext';
function Task5RR(){
    const [list, setList] = useState([]);
    function show(){
        console.log(list);
    }
    return (
        <div>
           <Router>
               <div>
                   <ul>
                       <li><Link to="/register">Register</Link></li>
                       <li><Link to="/showdata">Show Data</Link></li>
                   </ul>
               </div>
               <Switch>
                <UserContext.Provider value={{list,setList}}>
                   <Route path="/register">
                       <Home/>
                   </Route>
                   <Route path="/showdata">
                       <About/>
                   </Route>
                   </UserContext.Provider>
                   
               </Switch>
           </Router>
        </div>
    );
}

export default Task5RR;