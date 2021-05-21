
import '../../App.css';
import React from "react";
import AppBar from '../AppBar';
import Wes from '../wes'
import AllocatePlus from "../Allocate+";
import Login from "../Login"
import Whiteboard from "../whiteboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "../Registration"
import Dashboard from "../Dashboard";
import AddUser from "../admin/AddUser"
import StudentUsers from "../admin/student"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
toast.configure();

function App() {
  return (
    <div className="App">

    <Router>
        <AppBar/>
        {/*<Wes/>*/}

        {/*<AllocatePlus/>*/}
        {/*<Login/>*/}
        {/*<Registration/>*/}
        {/*<Whiteboard/>*/}

        <Switch>
            <Route path="/" exact component={Dashboard}/>

            <Route path="/AllocatePlus" component={AllocatePlus}/>

            {/*<Route path="/Registration" component={Registration}/>*/}

            <Route path="/Whiteboard" component={Whiteboard}/>

            {/*<Route path="/Dashboard" component={Dashboard}/>*/}

            {/*<Route path="/student-user" component={AddUser}/>*/}

            {/*<Route path ="/admin-student" component={StudentUsers}/>*/}
        </Switch>

    </Router>

    </div>
  );
}

export default App;
