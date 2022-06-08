import React, { useState, useEffect } from 'react';
import './App.css';
import './recieve.css'
import  { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {listDonors } from './graphql/queries';
import { updateDonor as updateDonarMutation, deleteDonor as deleteDonarMutation } from './graphql/mutations';

import {
  Link
} from "react-router-dom";
const initialFormState = { units:0,bgrp:"" }

function Receive({signOut}) {
  const [Donars, setDonar] = useState([]);
  const [avail, setAvail] = useState(-1);
  const [ifno, setIfno] = useState(0);


  const [formData, setFormData] = useState(initialFormState);
  useEffect(() => {
    fetchDonars();
  }, []);

  async function fetchDonars() {
    const apiData = await API.graphql(graphqlOperation(listDonors));
    const DonarList=(apiData.data.listDonors.items);
    setDonar(DonarList);
  }
  async function deleteDonar({ id }) {
    const newDonarArray = Donars.filter(Donar => Donar.id !== id);
    setDonar(newDonarArray);
    await API.graphql({ query: deleteDonarMutation, variables: { input: { id } }});
  }
  async function getData(){
     console.log(Donars);
      const filDona=Donars.filter((donar)=>(donar.bgrp.includes(formData.bgrp) ));
      console.log(filDona);
      if((filDona.length)>=formData.units)
      {
        for(let i=0;i<=formData.units;i++)
        {
           deleteDonar(filDona[i]);
        }
        setAvail(1);
        setIfno(filDona.length-formData.units)

      }
      else
      {

        setAvail(0);
        setIfno(filDona.length);
      }
      setFormData(initialFormState);
  }

  return (
    <div className="wrapper2">
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
            <div className="form-div2">
                <h2>Reciver Form</h2>
                <small>Check for Availabiltiy!</small>
                <br/><br/>
  
                
                    <label htmlFor="bgrp" className='label mt-3'>Blood Group :</label>
                    <br></br>
                    <input
                    onChange={e => setFormData({ ...formData,'bgrp':e.target.value})}
                    placeholder="Blood Group"
                    value={formData.bgrp}
                    name="bgrp"
                  /><br></br>
                    <label htmlFor="units" className='label mt-3'>No of units :</label>
                    <br></br>
                    <input
                    onChange={e => setFormData({ ...formData,'units':e.target.value})}
                    placeholder="Units"
                    value={formData.units}
                    name="units"
                  />
                  <br/><br/>
                    <button onClick={getData} className="btn btn-primary" style={{width: "500px"}}>Check for availability</button>
                    <br/><br/>
                    {(avail===-1)?<h1></h1>:((avail===1)?<h4>Your Booking is successfull</h4> :<h4>Sorry, Try Again Later</h4>)}
                   {(avail===-1)?<h2></h2>: <h4> Remaining: {ifno}</h4>}
            </div>
        </div>
  )
}

export default Receive;