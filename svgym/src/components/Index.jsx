import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Index(props) {
    const nav = useNavigate();


    const checkIDInput = () => {
        document.getElementById('nameLBL').innerHTML="";
        if (props.id.length != 9) {
            document.getElementById('nameLBL').innerHTML="ID Must Be Only 9 Numbers";
            return false;
        }
        else return true;
    }

    const checkNameInput = () => {
        const fullName = props.fullName.trim();
        document.getElementById('idLBL').innerHTML="";

        if (fullName.length <= 4) {
            document.getElementById('idLBL').innerHTML="Full Name Must Be More Than 4 Digits";
            return false;
        }

        if (!fullName.includes(" ")) {
            document.getElementById('idLBL').innerHTML="Full Name Must Contain Space";
            return false;
        }

        if (/[A-Z]/.test(fullName)) {
            document.getElementById('idLBL').innerHTML="Full Name Must Contain Only Small Letters";
            return false;
        }

        return true;
    };

    const checkInputs = () => {
        if (checkIDInput() && checkNameInput()) {
            nav('/workouts');
        }
    }
    return (
        <div className="container">
            <h1>Enter Your Details</h1>
            <input onChange={(e) => props.setID(e.target.value)} type="number" placeholder='Enter Your ID' />
            <label id='nameLBL'></label>
            <br />
            <br />
            <br />
            <input onChange={(e) => props.setFullName(e.target.value)} type="text" placeholder='Enter Your Fullname' />
            <label id='idLBL'></label>
            <br />
            <br />
            <br />
            <h1 style={{display: 'contents'}}>Select Gender</h1>
            <select name="Choose Gender" id="genderSLC">
                <option onClick={(e) => props.setGender(true)}>Male</option>
                <option onClick={(e) => props.setGender(false)}>Female</option>
            </select>
            <br />
            <br />
            <button onClick={checkInputs}>Next</button>
        </div>
    )
}
<h1>Enter Your Details</h1>