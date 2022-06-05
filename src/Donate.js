import React, { useState, useEffect } from 'react';
import './App.css';
import  { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createDonor as createDonarMutation } from './graphql/mutations';
import {
  Link
} from "react-router-dom";
const initialFormState = { name: '', Phone:0 ,email:'',bgrp:'',hospital:'',date:'' }

function Donate({signOut}) {
  const [Donars, setDonar] = useState([]);

  const [formData, setFormData] = useState(initialFormState);

  async function createDonar() {
    if (!formData.name || !formData.email || !formData.Phone||!formData.bgrp||!formData.date||!formData.hospital) return;
    await API.graphql({ query: createDonarMutation, variables: { input: formData } });
    setFormData(initialFormState);
  }


  return (
    <div className="wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#">Blood Bank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="dashboard.xhtml">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="donate.xhtml">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="recieve.xhtml">Recieve</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={signOut}>Logout</a>
                    </li>
                  </ul>
                </div>
            </nav>
            <div className="form-div">
                <h2>Donar Form</h2>
                <div className="form">
      <h1 className='title'>Add Donars</h1>
      <div className='form-data'>

      <label htmlFor="name" className='label mt-3'>Name :</label>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Donar name"
        value={formData.name}
        name="name"
      />
       <label htmlFor="Phone" className='label mt-3'>Mobile :</label>
      <input
      onChange={e => setFormData({ ...formData, 'Phone': e.target.value})}
        placeholder="Donar Mobile"
        value={formData.Phone}
        name="Phone"
      />
         <label htmlFor="email" className='label mt-3'>Email :</label>
         <input
        onChange={e => setFormData({ ...formData, 'email': e.target.value})}
        placeholder="Donar email"
        value={formData.email}
        name='email'
      />
      <label htmlFor="hospital" className='label mt-3'>Hospital :</label>
        <input
        onChange={e => setFormData({ ...formData, 'hospital': e.target.value})}
        placeholder="Hospital Name"
        value={formData.hospital}
        name="hospital"
      />
      <label htmlFor="date" className='label mt-3'>Date :</label>
        <input
        onChange={e => setFormData({ ...formData, 'date': e.target.value})}
        placeholder="Donar date"
        value={formData.date}
        name="date"
      />
      <label htmlFor="bgrp" className='label mt-3'>Blood Grp :</label>
        <input
        onChange={e => setFormData({ ...formData,'bgrp':e.target.value})}
        placeholder="Blood Group"
        value={formData.bgrp}
        name="bgrp"
      />
     <button onClick={createDonar}  className='btn btn-primary submit'>Create Donar</button>
       </div>
       <Link to="/donardet" className='btn btn-primary submit mt-2'> Details</Link>
  
    </div>
                   </div>
        </div>
  )
}

export default (Donate)