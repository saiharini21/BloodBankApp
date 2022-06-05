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
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donate</a>
            </li>
            <li className="nav-item">
            <Link to="/donardet">Recieve</Link>                    
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={signOut}>Logout</a>
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
                        <a role="button" className="btn btn-danger btn-lg" href="donate.xhtml">Donate Now</a>
                    </div>
                </div>
            </div>
     <div className="Fields">
        <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header">DONATE</div>
                    <div className="card-body">
                      <h5 className="card-title" style={{color: "red"}}>Donate Blood</h5>
                      <p className="card-text">Donate Your blood by making a booking in single click!</p>
                        <a role="button" className="btn btn-danger btn-lg" href="#">Donate Now</a>
                      
                    </div>
                  </div>
              </div>
              <div className="col-sm">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header">RECIEVE</div>
                    <div className="card-body">
                      <h5 className="card-title" style={{color: "green"}}>Recieve Blood</h5>
                      <p className="card-text">Click the button below to know about the availability of blood</p>
                      <a role="button" className="btn btn-success btn-lg" href="#">Recieve Now</a>
                    </div>
                  </div>
              </div>
              <div className="col-sm">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header">About</div>
                    <div className="card-body">
                      <h5 className="card-title" style={{color: "blue"}}>Instruction Manual</h5>
                      <p className="card-text">Know how our bookings function in single click</p>
                        <a role="button" className="btn btn-primary btn-lg" href="#">About</a>
                      
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Dashboard