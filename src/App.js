import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button
} from "@aws-amplify/ui-react";
import Amplify, { Auth, API } from 'aws-amplify';
import "./style.css"
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Donate from "./Donate";
import Dashboard from "./Dashboard";
import Donardet from "./Donardet";
import {React,useState,useEffect} from 'react';
import Receive from "./Receive";
import Analyse from "./Analyse"




function  App({signOut}) {
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
   Auth.currentAuthenticatedUser()
   .then(user =>
    setUserinfo(user.signInUserSession.accessToken.payload["cognito:groups"]
    ));
},[] )
  
  
  return (
    <div>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ userinfo ?  <Donate signOut={signOut}/> :  <Dashboard signOut={signOut}/>  } />
          <Route path="/donardet" element={ userinfo ?  <Donardet /> :  <Receive signOut={signOut}/>  } />
          <Route path="/analysis" element={<Analyse/>} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>

    </div>
          </div>


  );
}

export default withAuthenticator(App);