import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Workouts(props) {
    let arr = [];
    const showList = (start ,num) => {
        arr = [];
        for (let i = start; i <= num; i++) {
            arr.push(`${i}`);
        }
    }
    return (
        <div>
            <h1>How Many Workouts A Week?</h1>
            <select value={props.selectedWorkoutOption} onChange={(e) => props.setSelectedWorkoutOption(e.target.value)}>
                {showList(props.selectedWorkoutOption, 7)}
                {arr.map((value) => (
                    <option value={`${value}`}>{`${value}`}</option>
                ))}
            </select>
            <br />
            <h1>How Many Years Have You Been Traning</h1>
            <select value={props.selectedYearsOption} onChange={(e) => props.setSelectedYearsOption(e.target.value)}>
                {showList(props.selectedYearsOption, 30)}
                {arr.map((value) => (
                    <option value={ `${value}`}>{`${value}`}</option>
                ))}
            </select>
            <br />
            <Link to={'/ready'}><button>Next</button></Link>
        </div>
    )
}
