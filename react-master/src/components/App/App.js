
import '../../App.css';
import React from "react";
import AppBar from '../AppBar';
import Wes from '../wes'
import AllocatePlus from "../Allocate+";
import Login from "../Login"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "../Registration"
toast.configure();

function App() {
  return (
    <div className="App">
        <AppBar/>
        {/*<Wes/>*/}

        {/*<AllocatePlus/>*/}
        {/*<Login/>*/}
        <Registration/>
    </div>
  );
}

export default App;
