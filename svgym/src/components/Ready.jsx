import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Ready(props) {
    const nav = useNavigate();
    const readyBTN = () => {
        let temp = {
            id: props.id,
            fullname: props.fullName,
            gender: props.gender,
            workouts: props.selectedWorkoutOption,
            years: props.selectedYearsOption
        }
        props.setTrainer(temp);
        nav(`/training/:${props.fullName}`);
    }

    return (
        <div className="container">
            <h1>Ready?</h1>
            <button onClick={readyBTN}>Yes</button>
            <br />
            <Link to={'/'}><button>No</button></Link>
        </div>
    )
}
