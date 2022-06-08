import React, { useState, useEffect } from 'react';
import './App.css';
import  { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  Link
} from "react-router-dom";
function Dashboard({signOut}) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#">Blood Bank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/">Home</Link>                    
                    </li>
                    <li className="nav-item">
                    <Link to="/donardet">Recieve</Link>                    
                  </li>
                  <li className="nav-item">
                    <Link to="/analysis">Analysis</Link>                    
                  </li>
                    <li className="nav-item">
                    <Link to='/'><a onClick={signOut}>Logout</a></Link>                    
                    </li>
                  </ul>
                </div>
            </nav>
    <div className="box">
                <div className="container">
                    <div className="col-sm">
                        <div className="text">
                            <h3>Donate Blood, Save Life!</h3>
                            <br/>
                            <div className="desc">
                                <h2>Donate Your Blood and <br/>Inspire others to Donate!</h2>
                            </div>
                        </div>
                        <Link className="btn btn-lg btn-success" to="/donardet">Recieve</Link> 
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Dashboard