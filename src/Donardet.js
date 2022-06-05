import React, { useState, useEffect } from 'react';
import './App.css';
import  { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listDonors } from './graphql/queries';
import { updateDonor as updateDonarMutation, deleteDonor as deleteDonarMutation } from './graphql/mutations';
import {
  Link
} from "react-router-dom";
const initialedit = {id:'', name: '', Phone:0 ,email:'',bgrp:'',hospital:'',date:'' }

function Donardet() {
  const [Donars, setDonar] = useState([]);
  const [edit,setEdit]=useState(initialedit);
  const [isedit,setIsedit]=useState(0);
  useEffect(() => {
    fetchDonars();
  }, [edit]);

  async function fetchDonars() {
    const apiData = await API.graphql(graphqlOperation(listDonors));
    const DonarList=(apiData.data.listDonors.items);
    setDonar(DonarList);
  }
  async function updateDonar() {
    if (!edit.name || !edit.email || !edit.Phone||!edit.bgrp||!edit.date||!edit.hospital) return;
    await API.graphql({ query: updateDonarMutation, variables: { input: edit } });
    setIsedit(0);
    setEdit(initialedit);
  }
  function displayDonar({id}) {
     const  currDonar=Donars.filter(Donar => Donar.id===id);
     setIsedit(1);
     setEdit({'id':currDonar[0].id,'name': currDonar[0].name, 'Phone':currDonar[0].Phone ,'email':currDonar[0].email ,'hospital':currDonar[0].hospital ,'bgrp':currDonar[0].bgrp ,'date':currDonar[0].date})

    }
  async function deleteDonar({ id }) {
    const newDonarArray = Donars.filter(Donar => Donar.id !== id);
    setDonar(newDonarArray);
    await API.graphql({ query: deleteDonarMutation, variables: { input: { id } }});
  }

  return (
    <div className="container">
      <h1 className='title mt-4 mb-2'>Donar Details</h1>
      <div className='find'>
      <label htmlFor="name" className='ms-4 label me-1'>Name :</label>
      <input
        onChange={e => setEdit({ ...edit, 'name': e.target.value})}
        placeholder="Donar Name"
        value={edit.name}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        name="name"
        disabled = {(!isedit)? "disabled" : ""}
      />
   
   <label htmlFor="Phone" className=' ms-4 label me-2'>Mobile :</label>
      <input
        onChange={e => setEdit({ ...edit, 'Phone': e.target.value})}
        placeholder="Donar Mobile"
        value={edit.Phone}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        name="Phone"
        disabled = {(!isedit)? "disabled" : ""}

      />
       <label htmlFor="email" className='label me-1'>Email :</label>
         <input
        onChange={e => setEdit({ ...edit, 'email': e.target.value})}
        placeholder="Donar Email"
        value={edit.email}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        name="email"
        disabled = {(!isedit)? "disabled" : ""}

      />
   <label htmlFor="hospital" className='label me-1'>Hospital :</label>
        <input
        onChange={e => setEdit({ ...edit, 'hospital': e.target.value})}
        placeholder="Hospital"
        value={edit.hospital}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        disabled = {(!isedit)? "disabled" : ""}

      />
       <label htmlFor="date" className='ms-4 label me-1 '>Date :</label>
        <input
        onChange={e => setEdit({ ...edit, 'date': e.target.value})}
        placeholder="Donar date"
        value={edit.date}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        disabled = {(!isedit)? "disabled" : ""}

      />
       <label htmlFor="bgrp" className='ms-4 label me-1'>Blood Grp  :</label>
        <input
        onChange={e => setEdit({ ...edit,'bgrp':e.target.value})}
        placeholder="Blood Grp "
        value={edit.bgrp}
        style={{width:'40%',margin:"1rem 0.4rem"}}
        disabled = {(!isedit)? "disabled" : ""}

      />
      <div className='button-grp justify-content-center'>
      <button className='btn btn-primary page2 ' onClick={updateDonar}>Update Donar</button>
      </div>
      <div className='button-grp justify-content-center'>
      <Link to="/" className='btn btn-primary page2 mt-2'> Create Page</Link>
      </div>

   
 </div>
        <div className='disp-container'>
            <div className='row'>
             {
          Donars.map(Donar => (
            <div key={Donar.id} className='card col-lg-6 col-12'>
            <h2 className='disp-data'><span className='disp-label me-5'>Name: </span> {Donar.name}</h2>
            <h2 className='disp-data'><span className='disp-label me-5'>Mobile: </span> {Donar.Phone}</h2>
            <h2 className='disp-data'><span className='disp-label me-5'>Email: </span> {Donar.email}</h2>
            <h2 className='disp-data'><span className='disp-label me-3'>Hospital:</span> {Donar.hospital}</h2>
            <h2 className='disp-data'><span className='disp-label me-5'>Date: </span> {Donar.date}</h2>
            <h2 className='disp-data'><span className='disp-label me-5'>Blood Group : </span> {Donar.bgrp}</h2>
             <div className='button-grp'>
              <button  className='btn btn-primary page2' onClick={() => displayDonar(Donar)}>Edit Donar</button>
              <button  className='btn btn-primary page2' onClick={() => deleteDonar(Donar)}>Delete Donar</button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default (Donardet);