import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Index(props) {
    const nav = useNavigate();
    

    const checkIDInput = () => {
        if (props.id.length != 9) {
            alert("ID Must Be Only 9 Numbers");
            return false;
        }
        else return true;
    }

    const checkNameInput = () => {
        // console.log(fullName.includes(/[a-z]/);
        if (props.fullName.length <= 4) {
            alert("Full Name Must Be More Then 4 Digits");
            return false;
        }
        if (!(props.fullName.includes(" "))) {
            alert("Full Name Must Contain Space");
            return false;
        }
        // if (!(fullName.includes(/a-z]/))) {
        //     alert("Full Name Must Contain Only Small Letters");
        //     return false;
        // }
        return true;
    }

    const checkInputs = () =>{
        if (checkNameInput() && checkIDInput()){
            nav('/workouts');
        }
    }
    return (
        <div className="container">
          <h1>Enter Your Details</h1>
          <input onChange={(e) => props.setID(e.target.value)} type="number" placeholder='Enter Your ID' />
          <br />
          <input onChange={(e) => props.setFullName(e.target.value)} type="text" placeholder='Enter Your Fullname' />
          <br />
          <select name="Choose Gender" id="genderSLC">
            <option onClick={(e) => props.setGender(true)}>Male</option>
            <option onClick={(e) => props.setGender(false)}>Female</option>
          </select>
          <br />
          <button onClick={checkInputs}>Next</button>
        </div>
      )      
}
<h1>Enter Your Details</h1>