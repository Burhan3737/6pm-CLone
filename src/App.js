import React from "react"
import SignIn from "./SignIn";
import CreateAccout from "./CreateAccount";

import {Routes,Route} from "react-router-dom"

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={ <SignIn/>}/>
       

          <Route path='createaccount' element={ <CreateAccout/>}/>
        

        </Routes>
      </div>
  );
}

export default App;
